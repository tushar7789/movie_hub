import React, { useEffect, useState } from 'react'
import './style.css'
import DefaultImage from '../../../public/images/default_image.png'
import { movideDetailsPropsInterface, movieDetailInterface } from '@/interface/pageInterface'
import RatingStars from '../RatingStars'
import { key } from '@/config'
import Button from '../Button'
import { movieDetailsImgStyle, buttonProps, span1Style, span2Style } from '@/app/styles/styles'


const MovieDetails: React.FC<movideDetailsPropsInterface> = ({ movieDetailsId }) => {
    const [movieDetails, setMovieDetails] = useState<movieDetailInterface>();
    const [userRating, setUserRating] = useState();

    console.log("inside details:", movieDetailsId);

    useEffect(() => {
        const fetchMovieDetail = async () => {
            try {
                const res = await fetch(`http://www.omdbapi.com/?apikey=${key}&i=${movieDetailsId}`);
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }

                const data = await res.json();
                const temp: movieDetailInterface = {
                    title: data["Title"],
                    released: data["Released"],
                    runtime: data["Runtime"],
                    poster: data["Poster"],
                    genre: data["Genre"],
                    director: data["Director"],
                    starring: data["Actors"],
                    plot: data["Plot"],
                    imdbRating: data["imdbRating"]
                }
                console.log("aagyi bhaiya movie : ", data);
                setMovieDetails(temp);

            } catch (err) {
                console.log(err);
            }
        }

        fetchMovieDetail();
    }, [movieDetailsId])

    return (
        <div className='movie-details-container'>
            <div className="details-card">
                <div className="details-image-container">
                    <img
                        src={
                            movieDetails === undefined || movieDetails?.["poster"] === "N/A" ?
                                DefaultImage.src : movieDetails["poster"]
                        }
                        style={movieDetailsImgStyle} />
                </div>
                <div className="details-info-container">
                    <span style={{ fontSize: "20px" }}>{movieDetails?.["title"]}</span>
                    <span style={{ fontSize: "12px" }}>{movieDetails?.["released"]} &bull; {movieDetails?.["runtime"]}</span>
                    <span style={{ fontSize: "12px" }}>{movieDetails?.["genre"]}</span>
                    <span style={{ fontSize: "12px" }}>⭐ {movieDetails?.["imdbRating"]} Rating</span>
                </div>
            </div>
            <div className="rating-container">
                <p>Rate the movie</p>
                <RatingStars maxCount={10} color={"red"} size={"15px"} />
                <Button buttonProps={buttonProps} />
            </div>
            <div className="details-text-container">
                <p
                    className='para-class'
                    style={{
                        height: "20%",
                        width: "100%"
                    }}
                >
                    <span style={span1Style}>Directed By</span>
                    <span style={span2Style}>{movieDetails?.["director"]}</span>
                </p>
                <p
                    className='para-class'
                    style={{
                        height: "30%",
                        width: "100%"
                    }}
                >
                    <span style={span1Style}>Starring</span>
                    <span style={span2Style}>{movieDetails?.["starring"]}</span>
                </p>
                <p
                    className='para-class'
                    style={{
                        height: "50%",
                        width: "100%"
                    }}
                >
                    <span style={span1Style}>Plot</span>
                    <span style={span2Style}>{movieDetails?.["plot"]}</span>
                </p>
            </div>
        </div>
    )
}

export default MovieDetails;