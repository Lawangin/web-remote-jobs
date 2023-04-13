// src/hooks/useFetchDashboard.ts
import { IData } from '@/types/api';
import { UseFetchDashboardResult } from '@/types/hooks';
import { useState } from 'react';

export const useFetchDashboard = (): UseFetchDashboardResult => {
  const [dashboard, setDashboard] = useState<IData[]>([]);
  const [filterData, setFilterData] = useState<IData[]>([]);
  const [count, setCount] = useState<number>(0);

  async function fetchDashboard(page: number) {
    const response = await fetch(`/api/data?page=${page}&pageSize=10`);
    const data = await response.json();
    setDashboard(prevState => {
      const updatedState = [...prevState, ...data.data];
      setFilterData(updatedState);
      setCount(Number(data.pagination.totalItems));
      return updatedState;
    });
  }

  function handleFilterData(filterTerm: string, e: MouseEvent): void {
    e.preventDefault();
    const newData = dashboard.filter((data: IData) =>
      data.Title.toLowerCase().includes(filterTerm.toLowerCase())
    );
    setFilterData(newData);
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
