import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useLayoutEffect,
} from 'react';

interface ResizeContextData {
  width: number;
}

export const ResizeContext = createContext<ResizeContextData>(
  {} as ResizeContextData
);

export const ResizeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateSize = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useLayoutEffect(() => {
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, [updateSize]);

  return (
    <ResizeContext.Provider value={{ width }}>
      {children}
    </ResizeContext.Provider>
  );
};

export function useResize(): ResizeContextData {
  const context = useContext(ResizeContext);

  if (!context) {
    throw new Error('useResize must be used within an ResizeProvider');
  }

  return context;
}
