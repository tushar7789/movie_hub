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
    totalResults: string
}

export interface childrenPropInterface {
    children: React.ReactNode
}