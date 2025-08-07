import { movieItemInterface } from "@/interface/pageInterface";
import { useState, useEffect } from "react";
import { key } from "@/config";
export const useFetchMovies = () => {

    const [moviesList, setMoviesList] = useState<movieItemInterface[]>([]);
    const [totalResults, setTotalResults] = useState<string>("");
    const [movie, setMovie] = useState<string>("");

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            try {
                const res = await fetch(`http://www.omdbapi.com/?apikey=${key}&s=${movie}`,
                    { signal: controller.signal }
                );
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const json = await res.json();
                if (json.Search !== undefined) setMoviesList(json["Search"]);
                if (json.totalResults !== undefined) setTotalResults(json["totalResults"]);
                console.log("data : ", json);
            } catch (e) {
                console.log("you got an error buddy  :", e);
            }
        }

        fetchData();

        return () => {
            controller.abort();
        }

    }, [movie]);

    return { moviesList, totalResults, movie, setMovie }

}