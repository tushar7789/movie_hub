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
    totalResults: string,
    setMovie: React.Dispatch<SetStateAction<string>>
}

export interface contentPropInterface {
    movies: movieItemInterface[],
    totalResults: string,
    movie: string,
}

export interface listItemPropInterface {
    onClick?: React.Dispatch<SetStateAction<string>> | undefined,
    setFavListOpen?: React.Dispatch<SetStateAction<boolean>> | undefined,
    movies: movieItemInterface[],
    low: number,
    high: number
}

export interface childrenPropInterface {
    children: React.ReactNode
}

export interface searchBarCompInterface {
    setMovie: React.Dispatch<SetStateAction<string>>
}

export interface movideDetailsPropsInterface {
    movieDetailsId: string,
    setFavListOpen: React.Dispatch<SetStateAction<boolean>>,
    setFavMovieList: React.Dispatch<SetStateAction<movieItemInterface[]>>
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
    buttonProps: ButtonInterface,
    onClick: () => void;
}

export interface movieDetailInterface {
    Title: string,
    Released: string,
    Runtime: string,
    Poster: string,
    Genre: string,
    Director: string,
    Starring: string,
    Plot: string,
    imdbRating: string,
    Type: string
}

export interface favListPropsContainerInterface {
    favMoviesList: movieItemInterface[],
    setFavListOpen: React.Dispatch<SetStateAction<boolean>>,
}

export interface paginationPropInterface {
    onClick?: React.Dispatch<SetStateAction<string>> | undefined,
    movies: movieItemInterface[],
    batches: number,
    additionalDep: string[]
}