import * as React from "react";
import { useState, useEffect } from "react";
import CardGrid from "../components/CardGrid";
import { LinearProgress } from "@mui/material";

const InfiniteScroll = (props) => {
  const [pkmn, setPkmn] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [end, setEnd] = useState(false);
  const [start, setStart] = useState(true);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setPage((prev) => prev + (props.offset || 25));
    }
  };
  useEffect(() => {
    if (page < props.pageLimit) {
      getPokeData();
    } else {
      setEnd(true);
    }
  }, [page]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getPokeData = async () => {
    await fetch(`${props.endpoint}?offset=${page}&limit=${props.limit}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setPkmn((prev) => [...prev, ...Object.values(response)]);
        setLoading(false);
        setStart(false);
      });
  };

  return (
    <>
      {start && <LinearProgress />}
      <CardGrid pkmn={pkmn} />
      {loading && !end && <LinearProgress />}
    </>
  );
};

export default InfiniteScroll;
