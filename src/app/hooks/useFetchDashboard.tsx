// src/hooks/useFetchDashboard.ts
import { IData } from '../../types/api';
import { UseFetchDashboardResult } from '../../types/hooks';
import { useState } from 'react';

export const useFetchDashboard = (): UseFetchDashboardResult => {
  const [filterData, setFilterData] = useState<IData[]>([]);
  const [count, setCount] = useState<number>(0);

  async function handleFilterData(filterTerm: string | null, page: number) {
    if (typeof filterTerm === 'string' && filterTerm.trim().length === 0) {
      const response = await fetch(`/api/data?page=${page}&pageSize=10`);
      const data = await response.json();
      setFilterData(prevState => {
        const updatedState =
          page === 1 ? [...data.data] : [...prevState, ...data.data];
        return updatedState;
      });
      setCount(Number(data.pagination.totalItems));
      return;
    }
    const response = await fetch(
      `/api/data/filter?search=${filterTerm}&page=${page}&pageSize=10`
    );
    const newData = await response.json();
    setFilterData(prevState => {
      let updatedState;
      page === 1
        ? (updatedState = [...newData.data])
        : (updatedState = [...prevState, ...newData.data]);
      // const updatedState = [...prevState, ...newData.data];
      setCount(Number(newData.pagination.totalItems));
      return updatedState;
    });
  }

  return {
    count,
    filterData,
    setFilterData,
    handleFilterData,
  };
};
