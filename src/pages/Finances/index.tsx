import React, { useCallback, useEffect, useRef, useState } from 'react';
import { MdModeEdit } from 'react-icons/md';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { format, parseISO } from 'date-fns';
import Swal from 'sweetalert2';
import { FormHandles } from '@unform/core';

import { formatPrice } from '~/utils/format';
import api from '~/services';
import getValidationErros from '~/utils/getValidationsErrors';
import Toast from '~/utils/toast';

import { Container, Table, Modal } from './styles';
import Pagination from '~/components/Pagination';
import Textarea from '~/components/Textarea';
import Select, { IOption } from '~/components/Select';
import InputMask from '~/components/InputMask';

interface IFinanceResponse {
  id: string;
  valor: string;
  descricao: string;
  created_at: string;
  user: {
    id: string;
    nome: string;
  }
}

interface IResponseData {
  data: IFinanceResponse[];
  from: number;
  to: number;
  total: number;
  pages: number;
}

interface IFinance {
  id: string;
  user: string;
  value: string;
  description: string;
  date: string;
}

interface IFormData {
  id?: string;
  user: string;
  value: string;
  description: string;
}

interface IUserResponse {
  id: string;
  nome: string;
}

const Finances: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [finances, setFinances] = useState<IFinance[]>([]);
  const [show, setShow] = useState(false);
  const [financeSelected, setFinanceSelected] = useState({} as IFormData);
  const [inUpdate, setInUpdate] = useState(false);
  const [pageSelected, setPageSelected] = useState(1);
  const [tableData, setTableData] = useState({
    from: 1,
    to: 1,
    total: 1,
    pages: 1,
  });
  const [users, setUsers] = useState<IOption[]>([]);

  useEffect(() => {
    api.get<IUserResponse[]>('users', {
      params: {
        onlyActives: true
      }
    }).then((response) => {
      const data = response.data.map<IOption>((user) => ({
        id: user.id,
        value: user.nome,
        selected: financeSelected.user === user.id
      }));

      setUsers(data);
    })
  }, [financeSelected]);

  const handleLoadFinances = useCallback(async (page = 1) => {
    const response = await api.get<IResponseData>('finances', {
      params: {
        page,
      }
    });

    const data = response.data.data.map<IFinance>((finance) => ({
      id: finance.id,
      user: finance.user.nome,
      value: formatPrice(parseFloat(finance.valor)),
      description: finance.descricao,
      date: format(parseISO(finance.created_at), 'dd/MM/yyyy'),
    }))

    setFinances(data);
    setTableData({
      from: response.data.from,
      to: response.data.to,
      total: response.data.total,
      pages: response.data.pages
    })
  }, []);

  useEffect(() => {
    handleLoadFinances();
  }, [handleLoadFinances]);

  const handleChangePage = useCallback(async (page: number) => {
    await handleLoadFinances(page);
    setPageSelected(page);
  }, [handleLoadFinances])

  const handleClickAddFinance = useCallback(() => {
    setShow(true);
  }, []);

  const handleClose = useCallback(() => {
    setShow(false);
    setInUpdate(false);
    setFinanceSelected({} as IFormData);
  }, []);

  const handleClickEditFinance = useCallback(async (finance_id: string) => {
    const response = await api.get<IFinanceResponse>(`finances/${finance_id}`);
    setFinanceSelected({
      id: response.data.id,
      user: response.data.user.id,
      value: response.data.valor,
      description: response.data.descricao
    })
    setInUpdate(true);
    setShow(true);
  }, [])

  const handleSubmit = useCallback(
    async (data: IFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          user: Yup.string().required('O usuário é obrigatório'),
          value: Yup.string().required('O valor é obrigatório'),
          description: Yup.string().required('A descrição é obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const formData = {
          user_id: data.user,
          valor: parseFloat(data.value.replace('R$','').replaceAll('.','').replace(',','.')),
          descricao: data.description,
        }

        if (inUpdate) {
          const response = await api.put(`finances/${financeSelected.id}`, formData);
          const newFinances = finances.slice();
          const index = newFinances.findIndex(finance => finance.id === financeSelected.id);
          if(index >= 0){
            newFinances[index].value = formatPrice(formData.valor);
            newFinances[index].description = data.description;
            newFinances[index].date = format(parseISO(response.data.created_at), 'dd/MM/yyyy');
            newFinances[index].user = response.data.user.nome;
          }
          setFinances(newFinances);
        } else {
          await api.post('finances',
            formData
          );
          handleLoadFinances(pageSelected);
        }

        Toast.fire({
          icon: 'success',
          iconColor: '#ec6724',
          title: `Usuário ${inUpdate ? 'editado' : 'criado'} com sucesso`,
        });

        handleClose();
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErros(error);
          formRef.current?.setErrors(errors);
        } else {
          Swal.fire('Oops...', 'Ocorreu um erro tente novamente, por favor');
        }
      }
    },
    [inUpdate, pageSelected, finances, financeSelected, handleClose]
  );

  const handleClickDeleteFinance = useCallback(async (finance_id: string) => {
    Swal.fire({
      title: 'Tem certeza?',
      text: "Você não poderá reverter isso!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ec6724',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, deletar!',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then(async (result) => {
    if (result.isConfirmed) {
      await api.delete(`finances/${finance_id}`);
      handleLoadFinances(pageSelected);
      Toast.fire({
        icon: 'success',
        iconColor: '#ec6724',
        title: 'Usuário deletado com sucesso',
      })
    }
    }).catch((error) => {
      console.log(error);
      Toast.fire({
      icon: 'error',
      iconColor: '#ec6724',
      title: 'Ocorreu um erro, tente novamente',
    })
    })
  }, [pageSelected]);

  return (
    <Container className="py-4">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-5"><h1 className='mb-0'>Finanças</h1></div>
          <div className="col-7 text-end">
            <button type="button" className='btn btn-primary' onClick={handleClickAddFinance}>Adicionar lançamento</button>
          </div>
          <div className="col-12 mt-3">
            <Table>
              <div className="header d-none d-md-flex">
                <div className="table-row">
                  <div className="table-cell">Usuario</div>
                  <div className="table-cell">Valor</div>
                  <div className="table-cell">Descrição</div>
                  <div className="table-cell">Data</div>
                  <div className="table-cell"></div>
                </div>
              </div>
              <div className="body">
                {finances.length === 0 && (
                  <div className="w-100 d-flex align-items-center justify-content-center py-5">
                    <span className="text-center">Nenhum lançamento cadastrado</span>
                  </div>
                )}
                {finances.map(finance => (
                  <div key={finance.id} className="table-row">
                  <div className="table-cell text-center text-md-start">
                    <span className='d-block d-md-none fw-bold'>Usuario</span>
                    {finance.user}
                  </div>
                  <div className="table-cell text-center text-md-start">
                    <span className='d-block d-md-none fw-bold'>Valor</span>
                    {finance.value}
                  </div>
                  <div className="table-cell text-center text-md-start">
                    <span className='d-block d-md-none fw-bold'>Descrição</span>
                    {finance.description}
                  </div>
                  <div className="table-cell text-center text-md-start">
                    <span className='d-block d-md-none fw-bold'>Data</span>
                    {finance.date}
                  </div>
                  <div className="table-cell text-center text-md-start">
                    <div className="d-flex justify-content-end">
                      <button
                        type="button"
                        className='btn btn-primary rounded-circle d-flex align-items-center justify-content-center'
                        onClick={() => handleClickEditFinance(finance.id)}
                      >
                          <MdModeEdit size={20} color='#fff' />
                      </button>
                      <button
                        type="button"
                        className='btn btn-delete rounded-circle d-flex align-items-center justify-content-center ms-2'
                        onClick={() => handleClickDeleteFinance(finance.id)}
                      >
                        <BsFillTrash3Fill size={20} color='#fff' />
                      </button>
                    </div>
                  </div>
                </div>
                ))}
              </div>
            </Table>
            {finances.length > 0 && (
              <Pagination currentPage={pageSelected} totalPages={tableData.pages} onChangePage={handleChangePage}  />
            )}
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Form
          ref={formRef}
          initialData={financeSelected}
          onSubmit={handleSubmit}
          className='p-4'
        >
          <Modal.Header className='border-0'>
            <Modal.Title>{inUpdate ? 'Editar' : 'Novo'} Lançamento</Modal.Title>
            <button
              type="button"
              onClick={handleClose}
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-12">
                <label className="d-block w-100 mb-3">
                  <span className='d-block w-100 mb-2'>Usuário</span>
                  <Select name='user' options={users} />
                </label>
              </div>
              <div className="col-12">
                <label className="d-block w-100 mb-3">
                  <span className='d-block w-100 mb-2'>Valor</span>
                  <InputMask kind="money" name='value' value={financeSelected?.value} />
                </label>
              </div>
              <div className="col-12">
                <label className="d-block w-100 mb-3">
                  <span className='d-block w-100 mb-2'>Descrição</span>
                  <Textarea name='description' rows={3} />
                </label>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className='border-0'>
            <button
              type="button"
              onClick={handleClose}
              className="btn btn-secondary"
            >
              Fechar
            </button>
            <button type="submit" className="btn btn-primary">Salvar</button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
}

export default Finances;
