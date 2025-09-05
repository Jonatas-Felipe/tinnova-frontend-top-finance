<!-- # 🥸 Teste Front-end Teddy

## 📝 Descrição

Este projeto é um painel de gerenciamento de clientes desenvolvido como parte de um desafio técnico.\
O sistema consiste em:

- Uma **tela de login** baseada em nome
- Uma **tela principal** para listar, cadastrar, editar, excluir e selecionar clientes
- Uma **tela secundária** para visualizar apenas os clientes que foram selecionados

---

## ✨ Funcionalidades

- **Autenticação Simples:** Acesso ao sistema informando apenas o nome do usuário.
- **Listagem de Clientes:** Visualização paginada de todos os clientes cadastrados.
- **CRUD de Clientes:**
  - Criar novos clientes através de um modal.
  - Ler (Read) a lista de clientes da API.
  - Atualizar (Update) as informações de um cliente existente.
  - Excluir (Delete) um cliente com confirmação.
- **Seleção de Clientes:** Funcionalidade para marcar/desmarcar clientes e visualizá-los em uma página dedicada.
- **Testes:**
  - Testes unitários com **Vitest**
  - Testes End-to-End com **Playwright**

---

## 🚀 Tecnologias Utilizadas

- **React** – Biblioteca para construção da interface de usuário
- **Vite** – Ferramenta de build e dev server moderno
- **TypeScript** – Tipagem estática e segurança em tempo de desenvolvimento
- **Styled Components** – Estilização com CSS-in-JS
- **Bootstrap 5** – Sistema de grid e componentes visuais
- **Polished** – Utilitários para manipulação de cores
- **Unform** – Criação de formulários performáticos
- **Yup** – Validação de formulários
- **Axios** – Cliente HTTP para requisições à API
- **SweetAlert2 / Toast** – Alertas e notificações
- **Vitest** – Testes unitários
- **Playwright** – Testes End-to-End
- **ESLint & Prettier** – Lint e formatação de código

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter:

- **Node.js** `v20.19.2` ou superior
- **Yarn** `v1.22.22` ou superior
- **Docker** (opcional, para rodar com container)

---

## ⚙️ Configuração e Instalação

### 1. Clone o repositório:

```bash
git clone https://github.com/Jonatas-Felipe/teste-front-end-teddy
cd teste-front-end-teddy
```

### 2. Instale as dependências:

```bash
yarn install
```

### 3. Configure as variáveis de ambiente:

Crie um arquivo `.env` na raiz do projeto e adicione:

```
VITE_API_URL=http://localhost:3333
```

> Substitua `http://localhost:3333` pela URL da sua API, se necessário.

### 4. Rode a aplicação:

```bash
yarn dev
```

A aplicação estará disponível em `http://localhost:5173`.

---

## 📜 Scripts Disponíveis

| Script          | Descrição                                       |
| --------------- | ----------------------------------------------- |
| `yarn dev`      | Inicia a aplicação em modo de desenvolvimento   |
| `yarn build`    | Gera a build de produção na pasta `dist/`       |
| `yarn test`     | Executa os testes unitários com **Vitest**      |
| `yarn test:e2e` | Executa os testes End-to-End com **Playwright** |

---

## 🐳 Rodando com Docker (Opcional)

### 1. Construir a imagem Docker:

```bash
docker build -t front-end-teddy .
```

### 2. Rodar o container:

```bash
docker run -p 8080:80 front-end-teddy
```

A aplicação estará disponível em `http://localhost:8080`.

---

## 📄 Licença

Este projeto é apenas para fins de estudo/desafio técnico.

---
 -->
