'use client'

import Header from "@/components/Header";
import Content from "@/components/Content";
import '@/app/globals.css'
import { useFetchMovies } from "@/hooks/fetchMoviesHook";

export default function Home() {

  const {
    moviesList,
    totalResults,
    movie,
    setMovie
  } = useFetchMovies();

  return (
    <div className='main-container'>
      <Header totalResults={totalResults} setMovie={setMovie} />
      <Content movies={moviesList} totalResults={totalResults} movie={movie} />
    </div>
  );
}
