import React from 'react'
import './style.css'
import DefaultImage from '../../../public/images/default_image.png'
import { movideDetailsPropsInterface } from '@/interface/pageInterface'

const imgStyle = {
    "height": "100%",
    "width": "100%"
}

const MovieDetails: React.FC<movideDetailsPropsInterface> = ({ movieDetailsId }) => {

    console.log("inside details:", movieDetailsId);

    return (
        <div className='movie-details-container'>
            <div className="details-card">
                <div className="details-image-container">
                    <img src={DefaultImage.src} style={imgStyle} />
                </div>
                <div className="details-info-container">
                    <span style={{ fontSize: "x-large" }}>Interstellar</span>
                    <span style={{ fontSize: "small" }}>07 Jul 2009 &bull; 168 min</span>
                    <span style={{ fontSize: "small" }}>Scifi, Thriller, Mystery</span>
                    <span style={{ fontSize: "small" }}>⭐ 8.8 Rating</span>
                </div>
            </div>
            <div className="rating-container">

            </div>
            <div className="details-text-container">

            </div>
        </div>
    )
}

export default MovieDetails;