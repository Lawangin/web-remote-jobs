// src/hooks/useFetchDashboard.ts
import { IData } from '../../types/api';
import { UseFetchDashboardResult } from '../../types/hooks';
import { useState } from 'react';

export const useFetchDashboard = (): UseFetchDashboardResult => {
  const [dashboard, setDashboard] = useState<IData[]>([]);

  const [filterData, setFilterData] = useState<IData[]>([]);
  const [count, setCount] = useState<number>(0);

  async function fetchDashboard(page: number) {
    const response = await fetch(`/api/data?page=${page}&pageSize=10`);
    const data = await response.json();
    console.log(data);
    setDashboard(prevState => {
      const updatedState = [...prevState, ...data.data];
      setFilterData(updatedState);
      setCount(Number(data.pagination.totalItems));
      return updatedState;
    });
  }

  async function handleFilterData(filterTerm: string, page: number) {
    const response = await fetch(
      `/api/data/filter?search=${filterTerm}&page=${page}&pageSize=10`
    );
    const newData = await response.json();
    setFilterData(prevState => {
      let updatedState;
      page === 1
        ? (updatedState = [newData.data])
        : (updatedState = [...prevState, ...newData.data]);
      // const updatedState = [...prevState, ...newData.data];
      setCount(Number(newData.pagination.totalItems));
      return updatedState;
    });
  }

  return {
    count,
    dashboard,
    filterData,
    setFilterData,
    fetchDashboard,
    handleFilterData,
  };
};
