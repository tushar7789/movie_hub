import React from 'react'
import './style.css'
import { ratingPropInterface } from '@/interface/pageInterface';

const RatingStars: React.FC<ratingPropInterface> = ({ maxCount, color = "yellow", size = "20px" }) => {
    return (
        <div className='rating-stars-container'>
            {
                Array.from({ length: maxCount }, () => (
                    <span style={{ height: size, width: size }}>⭐</span>
                ))
            }
            <span style={{ color: "yellow" }}>&nbsp;{maxCount}</span>
        </div>
    )
}

export default RatingStars;