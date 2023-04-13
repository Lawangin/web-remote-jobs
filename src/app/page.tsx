'use client';

import { IData } from '@/types/api';
import { Box, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Category from './components/category';
import DisplayData from './components/DisplayData';
import TopBar from './components/TopBar';
import { useFetchDashboard } from './hooks/useFetchDashboard';
import { useInfiniteScroll } from './hooks/useInfiniteScroll';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const { count, dashboard, filterData, fetchDashboard, handleFilterData } =
    useFetchDashboard();
  const [currentPage, setCurrentPage] = useState(1);
  const [bgColor, setBgColor] = useState<boolean>(false);
  const [firstLoad, setFirstLoad] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      await fetchDashboard(currentPage);
      setLoading(false);
      setFirstLoad(false); // Update firstLoad to false after the initial data fetch
    })();
  }, []);

  const { loadMoreRef, loadingMore } = useInfiniteScroll(() => {
    setCurrentPage(prevPage => {
      fetchDashboard(prevPage + 1);
      return prevPage + 1;
    });
  }, firstLoad);

  function handleBgColor() {
    setBgColor(!bgColor);
  }

  const dashboardList =
    filterData &&
    filterData.map((data: IData, ind: number) => (
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
      {dashboard && (
        <Category count={count} handleFilterData={handleFilterData} />
      )}
      {loading ? (
        <Text textAlign="center" mt="20px" fontSize="20px">
          Loading...
        </Text>
      ) : (
        dashboardList
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
