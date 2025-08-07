import React, { useEffect, useState } from 'react'
import './style.css'
import {
    contentPropInterface,
    childrenPropInterface,
    movieItemInterface,
    listItemPropInterface
} from '@/interface/pageInterface';
import Pagination from '../Pagination';
import MovieDetails from '../MovieDetails';
import FavList from '../Favlist';
import { Box } from './box';

const Content: React.FC<contentPropInterface> = ({ movies, totalResults, movie }) => {
    const [favListOpen, setFavListOpen] = useState(true);
    const [movieDetailsId, setMovieDetailsId] = useState("");
    const [favMoviesList, setFavMoviesList] = useState<movieItemInterface[]>([]);


    return (
        <div className='content-container'>
            <Box>
                <Pagination
                    movies={movies}
                    batches={5}
                    additionalDep={[movie]}
                />
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
                            setFavMovieList={setFavMoviesList}
                        />
                }
            </Box>
        </div>
    )
}

export default Content;