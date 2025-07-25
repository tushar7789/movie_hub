import React, { useState } from 'react'
import './style.css'
import { favListPropsContainerInterface } from '@/interface/pageInterface'
import { ListItem } from '../Content'

const FavList: React.FC<favListPropsContainerInterface> = ({ favMoviesList, setFavListOpen }) => {

    let imdbRatingAvg = 0;
    for (let i = 0; i < favMoviesList.length; i++) {
        // imdbRatingAvg += favMoviesList?[i].at()
    }

    imdbRatingAvg /= favMoviesList?.length;

    return (
        <div className='favlist-container'>
            <div className="favlist-metadata">
                <p id="main-text">Favorite Movies</p>
                <p id="additional-info">
                    {
                        favMoviesList.length != 0 ?
                            <>
                                <span>{favMoviesList.length} Movies &nbsp; &bull; &nbsp;</span>
                                <span>⭐ {imdbRatingAvg} Rating &nbsp; &bull; &nbsp;</span>
                                <span>🌟 7.2 Rating</span>
                            </> :
                            "No movies in favourites. Add One Now!"
                    }
                </p>
            </div>
            <div className="favlist-list-container">
                <ListItem movies={favMoviesList} setFavListOpen={setFavListOpen} />
            </div>
        </div>
    )
}

export default FavList;