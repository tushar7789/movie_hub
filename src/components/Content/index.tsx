import React, { useEffect, useState } from 'react'
import './style.css'
import {
    contentPropInterface,
    childrenPropInterface,
    movieItemInterface,
    listItemPropInterface
} from '@/interface/pageInterface';
import Pagination from '../Pagination';
import DefaultImage from '../../../public/images/default_image.png';
import MovieDetails from '../MovieDetails';
import { imgStyle } from '@/app/styles/styles';
import FavList from '../Favlist';


export const ListItem: React.FC<listItemPropInterface> = ({ onClick, setFavListOpen, movies }) => {

    const handleClick = (id: any) => {
        setFavListOpen(false);
        onClick?.(id);
    }

    return (
        <>
            {
                movies?.map((ele: movieItemInterface, i: number) => (
                    <div
                        key={ele["imdbID"] ? ele["imdbID"] : i}
                        className='listitem-container'
                        onClick={() => handleClick(ele["imdbID"])}
                    >
                        <img src={ele["poster"] !== "N/A" ? ele["poster"] : DefaultImage.src} style={imgStyle} />
                        <div className="listitem-text-container">
                            <span>{ele["title"]}</span>
                            <span>{ele["year"]}</span>
                        </div>
                    </div>))
            }
        </>
    );
}

const Box: React.FC<childrenPropInterface> = ({ children }) => {
    return (
        <div className='box-container'>
            {children}
        </div>
    );
}

const Content: React.FC<contentPropInterface> = ({ movies, totalResults, movie, setFavMovieList, favMoviesList }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [movieDetailsId, setMovieDetailsId] = useState("");
    const [favListOpen, setFavListOpen] = useState(true);

    useEffect(() => {
        if (movies === undefined) setIsLoading(true);
        else if (movies?.length > 0) setIsLoading(false);
    }, [movies]);

    return (
        <div className='content-container'>
            <Box>
                <div className="box-movielist-container">
                    {
                        isLoading ?
                            movie === "undefined" || movie.length === 0 ?
                                <span>Enter a movie name...</span>
                                :
                                <span>Loading...</span>
                            :
                            <ListItem
                                onClick={setMovieDetailsId}
                                setFavListOpen={setFavListOpen}
                                movies={movies}
                            />
                    }
                </div>
                <div className='box-pagination-container'>
                    <Pagination />
                </div>
            </Box>
            <Box>
                {
                    favListOpen ?
                        <FavList
                            favMoviesList={favMoviesList}
                            setFavListOpen={setFavListOpen}
                        /> :
                        <MovieDetails
                            movieDetailsId={movieDetailsId}
                            setFavListOpen={setFavListOpen}
                            setFavMovieList={setFavMovieList}
                        />
                }
            </Box>
        </div>
    )
}

export default Content;