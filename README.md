# Frontend TOP Finance

> Este repositório contém a interface de financas e orquestração dos microfrontends. Ele atua como [remote] na arquitetura de microfrontends da aplicação.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

- **[React](https://react.dev/)** (v19.x)
- **[Vite](https://vitejs.dev/)** como build tool e servidor de desenvolvimento
- **[TypeScript](https://www.typescriptlang.org/)** para tipagem estática
- **[Styled-Components](https://styled-components.com/)** para estilização CSS-in-JS
- **[Vitest](https://vitest.dev/)** para testes unitários
- **[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)** para testes de componentes

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de que você tem os seguintes softwares instalados em sua máquina:

- [Node.js](https://nodejs.org/) (v20.x ou superior)
- [Yarn](https://yarnpkg.com/) (ou `npm`)

---

## ⚙️ Instalação

Siga os passos abaixo para configurar o ambiente de desenvolvimento.

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/Jonatas-Felipe/tinnova-frontend-top-finance.git
    cd tinnova-frontend-top-finance
    ```

2.  **Instale as dependências:**
    ```bash
    yarn install
    ```

3.  **Configure as Variáveis de Ambiente:**
    Crie uma cópia do arquivo de exemplo `.env.example`:
    ```bash
    cp .env.example .env
    ```
    Em seguida, abra o arquivo `.env` e ajuste as variáveis se necessário.

    | Variável | Descrição | Exemplo |
    | :--- | :--- | :--- |
    | `VITE_API_URL` | URL base da API Gateway que este frontend consome. | `http://localhost:3333` |

---

## ▶️ Execução

### Modo de Desenvolvimento

Para iniciar o servidor de desenvolvimento com hot-reload (recarregamento automático ao salvar):

```bash
yarn dev
```

A aplicação estará disponível em `http://localhost:[porta]`.

### Build de Produção

Para gerar a versão otimizada para produção:

```bash
yarn build
```

Os arquivos estáticos serão gerados na pasta `dist/`.

---

## ✅ Testes

Os testes unitários e de integração são escritos com Vitest e React Testing Library.

### Como Rodar os Testes

- **Para rodar a suíte de testes uma vez:**
  ```bash
  yarn test
  ```

- **Para rodar os testes com a interface gráfica interativa do Vitest:**
  ```bash
  yarn test:ui
  ```

Isso abrirá uma aba no seu navegador onde você pode visualizar os resultados, filtrar testes e ver detalhes dos erros de forma mais amigável.
