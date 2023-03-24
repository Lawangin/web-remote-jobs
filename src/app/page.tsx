"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Category from "./components/category";
import TopBar from "./components/TopBar";
import DisplayData from "./components/DisplayData";
import { Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [dashboard, setDashboard] = useState([]);

  useEffect(() => {
    async function fetchDashboard() {
      const response = await fetch("http://localhost:3000/api/data");
      const data = await response.json();
      setDashboard(data);
      setLoading(false);
    }

    fetchDashboard();
  }, []);

  interface mydata {
    id: String;
    Date: String;
    Company: String;
    Title: String;
    Location: String;
    Salary: number;
    Description: String;
    Level: String;
    Type: String;
    Function: String;
    Industry: String;
    Link: String;
  }

  return (
    <>
      <TopBar />
      {dashboard && <Category count={dashboard.length} />}
      {dashboard &&
        dashboard.map((data: mydata) => (
          <DisplayData
            Title={data.Title}
            Company={data.Company}
            Description={data.Description}
            Salary={data.Salary}
            Level={data.Level}
            URL={data.Link}
          />
        ))}
    </>
  );
}
