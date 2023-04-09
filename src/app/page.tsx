'use client';

import { useState, useEffect } from 'react';
import { Text, Box } from '@chakra-ui/react';
import Category from './components/category';
import TopBar from './components/TopBar';
import DisplayData from './components/DisplayData';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [dashboard, setDashboard] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [bgColor, setBgColor] = useState(false);

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

  function handleBgColor() {
    setBgColor(!bgColor);
  }

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
    image_url: string;
  }

  function handleFilterData(filterTerm: string, e: any): void {
    e.preventDefault();
    const newData = dashboard.filter((data: mydata) =>
      data.Title.toLowerCase().includes(filterTerm.toLowerCase())
    );
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
        Location={data.Location}
        Salary={data.Salary}
        Level={data.Level}
        Type={data.Type}
        Industry={data.Industry}
        Function={data.Function}
        URL={data.Link}
        image_url={data.image_url}
        handleBgColor={handleBgColor}
      />
    ));

  return (
    <Box>
      <TopBar />
      {filterData && (
        <Category
          count={filterData.length}
          handleFilterData={handleFilterData}
        />
      )}
      {loading ? (
        <Text textAlign="center" mt="20px" fontSize="20px">
          Loading...
        </Text>
      ) : (
        dashboardList
      )}
    </Box>
  );
}
