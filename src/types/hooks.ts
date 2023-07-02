import { Dispatch, SetStateAction } from 'react';
import { IData } from './api';

export interface UseFetchDashboardResult {
  count: number;
  filterData: IData[];
  setFilterData: Dispatch<SetStateAction<IData[]>>;
  // eslint-disable-next-line no-unused-vars
  handleFilterData: (filterTerm: string, page: number) => void;
}
