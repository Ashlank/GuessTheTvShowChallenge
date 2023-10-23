import { useEffect, useState } from 'react';
import fetchData from '../api/fetchData';

export default function useDataLoader() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDataAsync() {
      try {
        const result = await fetchData();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data: ', error);
        setLoading(false);
      }
    }

    fetchDataAsync();
  }, []);

  return [data, loading];
}
