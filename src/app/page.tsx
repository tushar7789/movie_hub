'use client'

import Header from "@/components/Header";
import Content from "@/components/Content";
import '@/app/globals.css'
import { useEffect, useState } from "react";
import { key, movie } from "@/config";
import { movieItemInterface, moviesListInterface } from "@/interface/pageInterface";

export default function Home() {
  const [moviesList, setMoviesList] = useState<movieItemInterface[]>([]);
  const [totalResults, setTotalResults] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://www.omdbapi.com/?apikey=${key}&s=${movie}`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const json = await res.json();
        setMoviesList(json["Search"]);
        setTotalResults(json["totalResults"]);
        console.log("data : ", json);
      } catch (e) {
        console.log("you got an error buddy  :", e);
      }
    }

    fetchData();

  }, []);

  return (
    <div className='main-container'>
      <Header movies={moviesList} totalResults={totalResults} />
      <Content movies={moviesList} totalResults={totalResults} />
    </div>
  );
}
