import React from 'react'
import './style.css'
import { ratingPropInterface } from '@/interface/pageInterface';
import ClosedStar from '../../../public/images/closed_star.png';
import OpenStar from '../../../public/images/open_star.png'
import { useState } from 'react';
import { spanStyle } from '@/app/styles/styles';

const RatingStars: React.FC<ratingPropInterface> = ({ maxCount, color = "yellow", size = "20px" }) => {
    const [currentStar, setCurrentStar] = useState(0);

    const handleMouseEnter = (ind: any) => {
        setCurrentStar(currentStar => ind);
        // console.log("bfbgg;", e.target.id);
    }

    const handleMouseLeave = () => {
        setCurrentStar(0);
    }

    return (
        <div className='rating-stars-container'>
            {
                Array.from({ length: maxCount }, (_, ind) => (
                    <span
                        onMouseEnter={() => handleMouseEnter(ind + 1)}
                        onMouseLeave={handleMouseLeave}
                        className='rating-stars-span-container'
                    >
                        {
                            currentStar >= (ind + 1) ?
                                <img
                                    style={{ height: size, width: size }}
                                    src={ClosedStar.src} alt=""
                                />
                                : <img
                                    style={{ height: size, width: size }}
                                    src={OpenStar.src} alt=""
                                />
                        }
                    </span>
                ))
            }
            <span
                style={spanStyle}>
                &nbsp;
                {
                    currentStar === 0 ?
                        "" : currentStar
                }
            </span>
        </div>
    )
}

export default RatingStars;