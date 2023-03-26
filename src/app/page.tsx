'use client';

import { useState, useEffect } from 'react';
import Category from './components/category';
import TopBar from './components/TopBar';
import DisplayData from './components/DisplayData';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [dashboard, setDashboard] = useState([]);

  useEffect(() => {
    async function fetchDashboard() {
      const response = await fetch('/api/data');
      const data = await response.json();
      setDashboard(data);
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

  const dashboardList =
    dashboard &&
    dashboard.map((data: mydata, ind: number) => (
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
      {dashboard && <Category count={dashboard.length} />}
      {loading ? <p>Loading...</p> : dashboardList}
    </>
  );
}
