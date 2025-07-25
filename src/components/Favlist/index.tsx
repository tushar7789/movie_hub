import React, { useEffect, useState } from 'react'
import './style.css'
import { favListPropsContainerInterface } from '@/interface/pageInterface'
import { ListItem } from '../Content'
import UpArrow from '../../../public/images/up.png'
import DownArrow from '../../../public/images/down.png'

import { favListUpButtonStyle } from '@/app/styles/styles'

const FavList: React.FC<favListPropsContainerInterface> = ({ favMoviesList, setFavListOpen }) => {
    const [spin, setSpin] = useState(0);

    let imdbRatingAvg = 0;
    for (let i = 0; i < favMoviesList.length; i++) {
        // imdbRatingAvg += favMoviesList?[i].at()
    }

    imdbRatingAvg /= favMoviesList?.length;

    const handleSpinClick = () => {
        setSpin(spin => (spin + 1) % 4);
        setTimeout(() => {
            setSpin(spin => (spin + 1) % 4);
        }, 200);
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
                        spin === 1 ? 'first-spin' :
                            spin === 2 ? 'bottom-pos' :
                                spin === 3 ? 'second-spin' : ''
                    }
                />
            </div>
            <div className="favlist-list-container">
                <ListItem movies={favMoviesList} setFavListOpen={setFavListOpen} />
            </div>
        </div>
    )
}

export default FavList;



// {
//     spin ?
//         <img
//             src={UpArrow.src}
//             alt=""
//             style={favListUpButtonStyle}
//             id="up_arrow"
//             onClick={handleSpinClick}
//             className={spin ? 'spin-class' : ''}
//         />
//         :
//         <img
//             src={DownArrow.src}
//             alt=""
//             style={favListUpButtonStyle}
//             id="up_arrow"
//             onClick={handleSpinClick}
//             className={!spin ? 'spin-class' : ''}
//         />
// }