import React from 'react';

import { ResizeProvider } from './Resize';

const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <ResizeProvider>
      {children}
    </ResizeProvider>
  );
};

export default AppProvider;
