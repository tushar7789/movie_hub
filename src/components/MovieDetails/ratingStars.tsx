import React from 'react'
import './style.css'
import { ratingPropInterface } from '@/interface/pageInterface';
import ClosedStar from '../../../public/images/closed_star.png';
import OpenStar from '../../../public/images/open_star.png'
import { useState } from 'react';
import { spanStyle } from '@/styles/styles';

const RatingStars: React.FC<ratingPropInterface> = ({ maxCount, color, size, setUserRating }) => {
    const [currentStar, setCurrentStar] = useState(0);

    const handleMouseEnter = (ind: any) => {
        setCurrentStar(currentStar => ind);
    }

    const handleMouseLeave = () => {
        setCurrentStar(0);
    }

    const handleClick = (ind: any) => {
        setUserRating(ind);
    }

    return (
        <div className='rating-stars-container'>
            {
                Array.from({ length: maxCount }, (_, ind) => (
                    <span
                        onMouseEnter={() => handleMouseEnter(ind + 1)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleClick(ind + 1)}
                        className='rating-stars-span-container'
                        key={ind}
                    >
                        {
                            currentStar >= (ind + 1) ?
                                <img
                                    style={{ height: size, width: size }}
                                    src={ClosedStar.src} alt=""
                                    id="closed_star"
                                />
                                : <img
                                    style={{ height: size, width: size }}
                                    src={OpenStar.src} alt=""
                                    id="open_star"
                                />
                        }
                    </span>
                ))
            }
            <span style={spanStyle}>
                &nbsp;
                {
                    currentStar === 0 ? "" : currentStar
                }
            </span>
        </div>
    )
}

export default RatingStars;