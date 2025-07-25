import { SetStateAction } from "react"

export interface movieItemInterface {
    poster: string,
    title: string,
    type: string,
    year: string,
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
    movie: string,
    setFavMovieList: React.Dispatch<SetStateAction<movieItemInterface[]>>,
    favMoviesList: movieItemInterface[]
}

export interface listItemPropInterface {
    onClick?: React.Dispatch<SetStateAction<string>> | undefined,
    setFavListOpen: React.Dispatch<SetStateAction<boolean>>,
    movies: movieItemInterface[],
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
    title: string,
    released: string,
    runtime: string,
    poster: string,
    genre: string,
    director: string,
    starring: string,
    plot: string,
    imdbRating: string,
    type: string
}

// export interface favListItemInterface {
//     released: string,
//     runtime: string,
//     genre: string,
//     director: string,
//     starring?: string,
//     plot?: string,
//     imdbRating?: string
// }

export interface favListPropsContainerInterface {
    favMoviesList: movieItemInterface[],
    setFavListOpen: React.Dispatch<SetStateAction<boolean>>,
}