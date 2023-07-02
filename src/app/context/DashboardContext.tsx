import {
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode,
  FunctionComponent,
  useState,
} from 'react';
import { IData } from '@/types/api';

interface DashboardContextProps {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  data: IData[];
  setData: Dispatch<any>;
}

// Set initial context state and default values
const DashboardContext = createContext<DashboardContextProps>({
  searchTerm: '',
  setSearchTerm: () => {},
  data: [],
  setData: () => {},
});

interface DashboardProviderProps {
  children: ReactNode;
}

export const DashboardProvider: FunctionComponent<DashboardProviderProps> = ({
  children,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);

  return (
    <DashboardContext.Provider
      value={{ searchTerm, setSearchTerm, data, setData }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardContext;
