import {
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode,
  FunctionComponent,
  useState,
} from 'react';

interface DashboardContextProps {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

// Set initial context state and default values
const DashboardContext = createContext<DashboardContextProps>({
  searchTerm: '',
  setSearchTerm: () => {},
});

interface DashboardProviderProps {
  children: ReactNode;
}

export const DashboardProvider: FunctionComponent<DashboardProviderProps> = ({
  children,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <DashboardContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardContext;
