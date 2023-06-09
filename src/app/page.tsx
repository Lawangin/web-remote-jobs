'use client';

import { Box, Center, Text } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { IData } from '../types/api';
import AboutUs from './components/AboutUs';
import Category from './components/category';
import DisplayData from './components/DisplayData';
import TopBar from './components/TopBar';
import LoadingSkeleton from './components/LoadingSkeleton';
import DashboardContext from './context/DashboardContext';
import { useFetchDashboard } from './hooks/useFetchDashboard';
import { useInfiniteScroll } from './hooks/useInfiniteScroll';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    gtag: any;
  }
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  const { count, filterData, handleFilterData } = useFetchDashboard();
  const { searchTerm } = useContext(DashboardContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [bgColor, setBgColor] = useState<boolean>(false);
  const [firstLoad, setFirstLoad] = useState<boolean>(true);
  const [aboutUsPage, setAboutUsPage] = useState<boolean>(false);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      await handleFilterData('', currentPage);
      setLoading(false);
      setFirstLoad(false); // Update firstLoad to false after the initial data fetch
    })();
  }, []);

  const { loadMoreRef, loadingMore } = useInfiniteScroll(
    searchTerm,
    () => {
      setCurrentPage(prevPage => {
        searchTerm.length > 2
          ? handleFilterData(searchTerm, prevPage + 1)
          : handleFilterData('', prevPage + 1);
        return prevPage + 1;
      });
    },
    firstLoad
  );

  function handleBgColor() {
    setBgColor(!bgColor);
  }

  function handleAboutUsPage(bool1?: boolean): void {
    bool1 == false ? setAboutUsPage(bool1) : setAboutUsPage(true);
  }
  const dashboardList = () => {
    if (filterData.length === 0) {
      return (
        <Center p="4">
          <Text fontSize="2xl">No Results Found!</Text>
        </Center>
      );
    } else {
      return (
        filterData.length > 1 &&
        !aboutUsPage &&
        filterData.map((data: Omit<IData, 'Date'>, ind: number) => (
          // eslint-disable-next-line react/jsx-key
          <DisplayData
            key={ind}
            id={data.id}
            Title={data.Title}
            Company={data.Company}
            Description={data.Description}
            Location={data.Location}
            Salary={data.Salary}
            Level={
              data.Level.trim() === 'Not Available' ? '-' : data.Level.trim()
            }
            Type={data.Type}
            Industry={data.Industry}
            Function={data.Function}
            URL={data.Link}
            image_url={data.image_url}
            Skills={data.Skills}
            handleBgColor={handleBgColor}
          />
        ))
      );
    }
  };

  return (
    <Box>
      <TopBar handleAboutUsPage={handleAboutUsPage} />
      {aboutUsPage && <AboutUs />}
      {filterData.length >= 0 && aboutUsPage == false ? (
        <Category count={count} handleFilterData={handleFilterData} />
      ) : (
        ''
      )}
      {loading ? (
        <>
          <LoadingSkeleton />
          <LoadingSkeleton />
        </>
      ) : (
        dashboardList()
      )}
      {loadingMore && (
        <Text textAlign="center" mt="20px" fontSize="20px">
          Loading more...
        </Text>
      )}
      <div ref={loadMoreRef} />
    </Box>
  );
}
