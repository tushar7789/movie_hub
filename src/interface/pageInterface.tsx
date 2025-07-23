import { SetStateAction } from "react"

export interface movieItemInterface {
    Poster: string,
    Title: string,
    Type: string,
    Year: string,
    imdbID: string
}

export interface moviesListInterface {
    movies: movieItemInterface[]
}

export interface headerPropInterface {
    movies: movieItemInterface[],
    totalResults: string,
    setMovie: React.Dispatch<SetStateAction<string>>
}

export interface childrenPropInterface {
    children: React.ReactNode
}

export interface searchBarCompInterface {
    setMovie: React.Dispatch<SetStateAction<string>>
}