import React from 'react';
import { useUserStore } from 'mainFront/UserStore';
import 'bootstrap/dist/css/bootstrap.min.css';

import Finances from './pages/Finances';
import AppProvider from './hooks';

import GlobalStyles from './styles/global';

const FinancesApp: React.FC = () => {
  const { user } = useUserStore();

  if (!user) {
    return <div>Usuário não logado. <a href="http://localhost:3000">clique aqui</a> para fazer login.</div>;
  }

  return (
    <AppProvider>
      <Finances />
      <GlobalStyles />
    </AppProvider>
  );
};

export default FinancesApp;
