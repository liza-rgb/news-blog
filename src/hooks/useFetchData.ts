import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchData = (url: string) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setData(res?.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error?.message);
        setIsLoading(false);
      });
  }, [url]);

  const fetchData = () => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setData(res?.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error?.message);
        setIsLoading(false);
      });
  };

  return {
    isLoading,
    data,
    error,
    fetchData,
  };
};

export default { useFetchData };
