import { useState, useEffect } from "react";

function useLoadData(loadData) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  useEffect(() => {
    setIsPending(true);
    loadData()
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setIsPending(false));
  }, [loadData]);
  return {
    data,
    error,
    isPending,
  };
}
export default useLoadData;
