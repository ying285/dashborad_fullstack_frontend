import axios from "axios";
import { useEffect, useState } from "react";

const DataFetch = (url: string) => {
  const [getData, setGetData] = useState();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const token: string = localStorage.getItem("token")!;

    if (token) {
      axios
        .get(url, {
          headers: { token },
        })
        .then((res) => {
          setGetData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [token, url]);

  return getData;
};

export default DataFetch;