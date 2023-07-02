import { useEffect, useRef, useState } from 'react';

export const useInfiniteScroll = (
  searchTerm: string,
  fetchData: () => void,
  firstLoad: unknown
) => {
  const [observer, setObserver] = useState<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);

  /**
   * Intersection observer that checks to see when we hit the bottom of the page to load more results
   */
  useEffect(() => {
    if (firstLoad) return; // Skip the first load
    if (loadingMore) return; // Skip if already loading more
    // Disconnect the previous observer if it exists
    if (observer) {
      observer.disconnect();
    }

    // Set the options for the IntersectionObserver
    const options = {
      root: null, // Observe the entire viewport
      rootMargin: '0px', // No margin around the root
      threshold: 0.7, // Trigger the callback when 70% of the target is visible
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
          fetchData();
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
  }, [firstLoad, loadingMore, searchTerm]); // Run the effect when first load changes

  return { loadMoreRef, loadingMore };
};
