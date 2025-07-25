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


const ListItem: React.FC<listItemPropInterface> = ({ children, onClick, id }) => {

    const handleClick = () => {
        onClick(id);
    }

    return (
        <div className='listitem-container' onClick={handleClick}>
            {children}
        </div>
    );
}

const Box: React.FC<childrenPropInterface> = ({ children }) => {
    return (
        <div className='box-container'>
            {children}
        </div>
    );
}

const Content: React.FC<contentPropInterface> = ({ movies, totalResults, movie }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [movieDetailsId, setMovieDetailsId] = useState("");

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
                            movies?.map((ele: movieItemInterface, i: number) => (
                                <ListItem key={ele["imdbID"]} onClick={setMovieDetailsId} id={ele["imdbID"]}>
                                    <img src={ele["Poster"] !== "N/A" ? ele["Poster"] : DefaultImage.src} style={imgStyle} />
                                    <div className="listitem-text-container">
                                        <span>{ele["Title"]}</span>
                                        <span>{ele["Year"]}</span>
                                    </div>
                                </ListItem>
                            ))

                    }
                </div>
                <div className='box-pagination-container'>
                    <Pagination />
                </div>
            </Box>
            <Box>
                <MovieDetails movieDetailsId={movieDetailsId} />
            </Box>
        </div>
    )
}

export default Content;