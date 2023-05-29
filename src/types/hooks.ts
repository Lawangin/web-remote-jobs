import { Dispatch, SetStateAction } from 'react';
import { IData } from './api';

export interface UseFetchDashboardResult {
  count: number;
  dashboard: IData[];
  filterData: IData[];
  setFilterData: Dispatch<SetStateAction<IData[]>>;
  // eslint-disable-next-line no-unused-vars
  fetchDashboard: (page: number) => Promise<void>;
  // eslint-disable-next-line no-unused-vars
  handleFilterData: (filterTerm: string, page: number) => void;
}
