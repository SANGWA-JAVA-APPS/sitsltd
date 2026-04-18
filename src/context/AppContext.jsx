import { createContext, useContext, useState } from 'react';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [jobs, setJobs]       = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <AppContext.Provider value={{ jobs, setJobs, loading, setLoading }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useAppContext must be used inside <AppProvider>');
  return ctx;
}
