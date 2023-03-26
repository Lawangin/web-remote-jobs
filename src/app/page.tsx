'use client';

import { useState, useEffect } from 'react';
import { Text} from '@chakra-ui/react';
import Category from './components/category';
import TopBar from './components/TopBar';
import DisplayData from './components/DisplayData';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [dashboard, setDashboard] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    async function fetchDashboard() {
      const response = await fetch('/api/data');
      const data = await response.json();
      setDashboard(data);
      setFilterData(data);
      setLoading(false);
    }

    fetchDashboard();
  }, []);

  

  interface mydata {
    id: string;
    Date: string;
    Company: string;
    Title: string;
    Location: string;
    Salary: number;
    Description: string;
    Level: string;
    Type: string;
    Function: string;
    Industry: string;
    Link: string;
  }

  const handleFilterData = (filterTerm: string): void => {
   const newData = dashboard.filter((data: mydata) => data.Title.toLowerCase().includes(filterTerm.toLowerCase()));
   setFilterData(newData);
  }

  const dashboardList =
    filterData &&
    filterData.map((data: mydata, ind: number) => (
      <DisplayData
        key={ind}
        Title={data.Title}
        Company={data.Company}
        Description={data.Description}
        Salary={data.Salary}
        Level={data.Level}
        URL={data.Link}
      />
    ));

  return (
    <>
      <TopBar />
      {filterData && <Category count={filterData.length} handleFilterData={handleFilterData}/>}
      {loading ? <Text textAlign="center" mt="20px" fontSize="20px">Loading...</Text> : dashboardList}
    </>
  );
}
