'use client';

import { useState, useEffect, useRef } from 'react';
import { Text, Box } from '@chakra-ui/react';
import Category from './components/category';
import TopBar from './components/TopBar';
import DisplayData from './components/DisplayData';

interface IData {
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

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [dashboard, setDashboard] = useState<IData[]>([]);
  const [filterData, setFilterData] = useState<IData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [observer, setObserver] = useState<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const [bgColor, setBgColor] = useState<boolean>(false);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      await fetchDashboard(currentPage);
      setLoading(false);
    })();
  }, []);

  async function fetchDashboard(page: number) {
    const response = await fetch(`/api/data?page=${page}&pageSize=10`);
    const data = await response.json();
    setDashboard(prevState => {
      const updatedState = [...prevState, ...data.data];
      setFilterData(updatedState);
      setLoadingMore(false);
      return updatedState;
    });
    console.log(currentPage);
  }

  /**
   * Intersection observer that checks to see when we hit the bottom of the page to load more results
   */
  useEffect(() => {
    // Disconnect the previous observer if it exists
    if (observer) {
      observer.disconnect();
    }

    // Set the options for the IntersectionObserver
    const options = {
      root: null, // Observe the entire viewport
      rootMargin: '0px', // No margin around the root
      threshold: 0.7, // Trigger the callback when 100% of the target is visible
    };

    // Create a new IntersectionObserver with the provided options
    const newObserver = new IntersectionObserver(entries => {
      // Loop through each entry (in this case, only one entry)
      entries.forEach(entry => {
        // Check if the entry is intersecting the viewport
        if (entry.isIntersecting && !loadingMore) {
          // If it is, update the current page and fetch the data for the next page
          setLoadingMore(true);
          // fetchDashboard(currentPage + 1);
          setCurrentPage(prevPage => {
            fetchDashboard(prevPage + 1);
            return prevPage + 1;
          });
          setLoadingMore(false);
          // fetchDashboard(dashboard.length / 10 + 1);
        }
      });
    }, options);

    // If loadMoreRef.current is not null (meaning the ref is attached to an element),
    // start observing that element
    if (loadMoreRef.current) {
      newObserver.observe(loadMoreRef.current);
    }

    // Set the observer state to the new observer
    setObserver(newObserver);

    // Cleanup function: disconnect the new observer when the component is unmounted or
    // when the dependencies change
    return () => {
      newObserver.disconnect();
    };
  }, []); // Run the effect when loadMoreRef.current changes

  function handleBgColor() {
    setBgColor(!bgColor);
  }

  function handleFilterData(filterTerm: string, e: MouseEvent): void {
    e.preventDefault();
    const newData = dashboard.filter((data: IData) =>
      data.Title.toLowerCase().includes(filterTerm.toLowerCase())
    );
    setFilterData(newData);
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
        <Category
          count={dashboard.length}
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
      {loadingMore && (
        <Text textAlign="center" mt="20px" fontSize="20px">
          Loading more...
        </Text>
      )}
      <div ref={loadMoreRef} />
    </Box>
  );
}
