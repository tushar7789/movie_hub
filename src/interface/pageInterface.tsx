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

export interface contentPropInterface {
    movies: movieItemInterface[],
    totalResults: string,
    movie: string
}

export interface listItemPropInterface {
    children: React.ReactNode,
    onClick: React.Dispatch<SetStateAction<string>>,
    id: string,
    setFavListOpen: React.Dispatch<SetStateAction<boolean>>
}

export interface childrenPropInterface {
    children: React.ReactNode
}

export interface searchBarCompInterface {
    setMovie: React.Dispatch<SetStateAction<string>>
}

export interface movideDetailsPropsInterface {
    movieDetailsId: string,
    setFavListOpen: React.Dispatch<SetStateAction<boolean>>
}

export interface movieDetailInterface {
    title: string,
    released: string,
    runtime: string,
    poster: string,
    genre: string,
    director: string,
    starring: string,
    plot: string,
    imdbRating: string
}

export interface ratingPropInterface {
    maxCount: number,
    color: string,
    size: string,
    setUserRating: React.Dispatch<SetStateAction<number>>
}

export interface ButtonInterface {
    height: string,
    width: string,
    bgcolor: string,
    text: string,
    cursor: string,
}

export interface ButtonPropsInterface {
    buttonProps: ButtonInterface
}

export interface favListPropsContainerInterface {
    imdbID: string
}