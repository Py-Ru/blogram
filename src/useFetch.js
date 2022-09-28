import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null),
    [isPending, setIsPending] = useState(true),
    [error, setError] = useState("");

  useEffect(() => {
    const abortCtrl = new AbortController();
    fetch(url, { signal: abortCtrl.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("An error occured");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setIsPending(false);
          setError(error.message);
        }
      });

    return () => abortCtrl.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
