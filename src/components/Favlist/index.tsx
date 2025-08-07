import React, { useEffect, useState } from 'react'
import './style.css'
import { favListPropsContainerInterface } from '@/interface/pageInterface'
import { ListItem } from '../Content/listitem'
import UpArrow from '../../../public/images/up.png'
import DownArrow from '../../../public/images/down.png'

import { favListUpButtonStyle } from '@/styles/styles'

const FavList: React.FC<favListPropsContainerInterface> = ({ favMoviesList, setFavListOpen }) => {
    const [spin, setSpin] = useState(0);
    const [dropDown, setDropDown] = useState(0);

    let imdbRatingAvg = 0;
    for (let i = 0; i < favMoviesList.length; i++) {
        // imdbRatingAvg += favMoviesList?[i].at()
    }

    imdbRatingAvg /= favMoviesList?.length;

    const handleSpinClick = () => {
        setSpin(spin => (spin + 1) % 4);
        setDropDown(dropDown => (dropDown + 1) % 4);

        setTimeout(() => {
            setSpin(spin => (spin + 1) % 4);
        }, 200);
        setTimeout(() => {
            setDropDown(dropDown => (dropDown + 1) % 4);
        }, 500);
    }

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
                <img
                    src={UpArrow.src}
                    alt=""
                    style={favListUpButtonStyle}
                    id="up_arrow"
                    onClick={handleSpinClick}
                    className={
                        spin == 0 ? 'bottom-pos' :
                            spin === 1 ? 'first-spin' :
                                spin === 3 ? 'second-spin' : ''
                    }
                />
            </div>
            <div
                className={
                    `favlist-list-container
                    ${dropDown === 0 ? "open-pos" :
                        dropDown === 1 ? "back-up" :
                            dropDown === 2 ? "closed-pos" :
                                dropDown === 3 ? "drop-down" :
                                    ""
                    }
                    `
                }

            >
                <ListItem
                    movies={favMoviesList}
                    setFavListOpen={setFavListOpen}
                    low={0}
                    high={favMoviesList.length - 1}
                />
            </div>
        </div>
    )
}

export default FavList;
