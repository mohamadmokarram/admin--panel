import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function getData() {
      setIsLoading(true);

      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to get data.");

        const resData = await res.json();
        setData(resData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [url]);

  return {
    data,
    setData,
    isLoading,
    error,
  };
}
