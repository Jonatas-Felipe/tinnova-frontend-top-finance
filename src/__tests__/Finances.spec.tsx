import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach, Mock } from 'vitest';

import Finances from '~/pages/Finances';
import api from '~/services';
import Toast from '~/utils/toast';
import Swal from 'sweetalert2';

vi.mock('~/services', () => ({
  default: {
    get: vi.fn(),
    post: vi.fn(),
    put: vi.fn(),
    delete: vi.fn(),
  },
}));

vi.mock('~/utils/toast', () => ({
  default: {
    fire: vi.fn(),
  },
}));

vi.mock('sweetalert2', () => ({
  default: {
    fire: vi.fn(),
  },
}));

const mockUsersResponse = [
  { id: 'user-1', nome: 'John Doe' },
  { id: 'user-2', nome: 'Jane Doe' },
];

const mockFinancesResponse = {
  data: [
    {
      id: 'finance-1',
      valor: '150.75',
      descricao: 'Conta de Luz',
      created_at: '2025-09-05T10:00:00.000Z',
      user: { id: 'user-1', nome: 'John Doe' },
    },
  ],
  from: 1, to: 1, total: 1, pages: 1,
};

const mockSingleFinanceResponse = mockFinancesResponse.data[0];

describe('Página: Finances', () => {
  beforeEach(() => {
    vi.clearAllMocks();

    (api.get as Mock).mockImplementation((url: string) => {
      if (url.startsWith('users')) return Promise.resolve({ data: mockUsersResponse });
      if (url.includes(`finances/${mockSingleFinanceResponse.id}`)) return Promise.resolve({ data: mockSingleFinanceResponse });
      if (url.startsWith('finances')) return Promise.resolve({ data: mockFinancesResponse });
      return Promise.reject(new Error(`API GET call to ${url} not mocked`));
    });
  });

  it('Deve renderizar a tabela e carregar os dados iniciais', async () => {
    render(<Finances />);

    expect(await screen.findByText('John Doe')).toBeInTheDocument();
    expect(await screen.findByText('R$ 150,75')).toBeInTheDocument();
    expect(await screen.findByText('Conta de Luz')).toBeInTheDocument();
  });

  it('Deve abrir o modal, preencher, e criar um novo lançamento', async () => {
    (api.get as Mock).mockImplementation((url: string) => {
      if (url.startsWith('users')) return Promise.resolve({ data: mockUsersResponse });
      if (url.startsWith('finances')) return Promise.resolve({ data: { ...mockFinancesResponse, data: [] } });
      return Promise.reject(new Error('not found'));
    });
    (api.post as Mock).mockResolvedValue({ data: {} });

    const user = userEvent.setup();
    render(<Finances />);

    await user.click(screen.getByRole('button', { name: /adicionar lançamento/i }));
    const modal = await screen.findByRole('dialog');

    await user.click(within(modal).getByLabelText(/usuário/i));
    await user.click(await screen.findByText('John Doe'));

    await user.type(within(modal).getByLabelText(/valor/i), '25000');
    await user.type(within(modal).getByLabelText(/descrição/i), 'Nova Compra');
    await user.click(within(modal).getByRole('button', { name: /salvar/i }));

    await waitFor(() => {
      expect(api.post).toHaveBeenCalledWith('finances', expect.any(Object));
      expect(Toast.fire).toHaveBeenCalledWith(expect.objectContaining({
        title: expect.stringContaining('criado com sucesso'),
      }));
    });
  });

  it('Deve abrir o modal em modo de edição e atualizar um lançamento', async () => {
    (api.put as Mock).mockResolvedValue({ data: { ...mockSingleFinanceResponse, user: { nome: 'John Doe' } } });
    const user = userEvent.setup();
    render(<Finances />);

    const row = await screen.findByText('Conta de Luz');
    await user.click(within(row.closest('.table-row')!).getAllByRole('button')[0]);

    const modal = await screen.findByRole('dialog');
    const descriptionInput = within(modal).getByLabelText(/descrição/i);

    expect(descriptionInput).toHaveValue('Conta de Luz');

    await user.clear(descriptionInput);
    await user.type(descriptionInput, 'Conta de Luz - Paga');
    await user.click(within(modal).getByRole('button', { name: /salvar/i }));

    await waitFor(() => {
      expect(api.put).toHaveBeenCalledWith(`finances/${mockSingleFinanceResponse.id}`, expect.any(Object));
      expect(Toast.fire).toHaveBeenCalledWith(expect.objectContaining({
        title: expect.stringContaining('editado com sucesso'),
      }));
    });

    expect(await screen.findByText('Conta de Luz - Paga')).toBeInTheDocument();
  });

  it('Deve pedir confirmação e excluir um lançamento', async () => {
    (Swal.fire as Mock).mockResolvedValue({ isConfirmed: true });
    (api.delete as Mock).mockResolvedValue({});
    const user = userEvent.setup();
    render(<Finances />);

    const row = await screen.findByText('Conta de Luz');
    await user.click(within(row.closest('.table-row')!).getAllByRole('button')[1]);

    await waitFor(() => expect(Swal.fire).toHaveBeenCalled());
    await waitFor(() => expect(api.delete).toHaveBeenCalledWith(`finances/${mockSingleFinanceResponse.id}`));
    await waitFor(() => expect(Toast.fire).toHaveBeenCalledWith(expect.objectContaining({
        title: 'Usuário deletado com sucesso',
      })));
  });

  it('Deve chamar a API com o número da página correto ao clicar na paginação', async () => {
    const user = userEvent.setup();
    const multiPageResponse = {
      ...mockFinancesResponse,
      pages: 2,
    };

    (api.get as Mock).mockImplementation((url: string) => {
      if (url.startsWith('users')) {
        return Promise.resolve({ data: mockUsersResponse });
      }
      if (url.startsWith('finances')) {
        return Promise.resolve({ data: multiPageResponse });
      }
      return Promise.reject(new Error('not found'));
    });

    render(<Finances />);

    expect(await screen.findByText('Conta de Luz')).toBeInTheDocument();

    const pageTwoButton = screen.getByRole('button', { name: /2/i });
    await user.click(pageTwoButton);

    await waitFor(() => {
      expect(api.get).toHaveBeenCalledWith('finances', { params: { page: 2 } });
    });
  });

  it('Deve exibir mensagens de erro no modal ao tentar submeter o formulário vazio', async () => {
    const user = userEvent.setup();
    render(<Finances />);

    await user.click(screen.getByRole('button', { name: /adicionar lançamento/i }));
    const modal = await screen.findByRole('dialog');
    await user.click(within(modal).getByRole('button', { name: /salvar/i }));

    expect(await within(modal).findByText('O usuário é obrigatório')).toBeInTheDocument();
    expect(await within(modal).findByText('O valor é obrigatório')).toBeInTheDocument();
    expect(await within(modal).findByText('A descrição é obrigatória')).toBeInTheDocument();

    expect(api.post).not.toHaveBeenCalled();
    expect(api.put).not.toHaveBeenCalled();
  });

  it('Não deve chamar a API de exclusão se o usuário cancelar a confirmação', async () => {
    (Swal.fire as Mock).mockResolvedValue({ isConfirmed: false });
    const user = userEvent.setup();
    render(<Finances />);

    const row = await screen.findByText('Conta de Luz');
    await user.click(within(row.closest('.table-row')!).getAllByRole('button')[1]);

    await waitFor(() => expect(Swal.fire).toHaveBeenCalled());
    expect(api.delete).not.toHaveBeenCalled();
  });
});
