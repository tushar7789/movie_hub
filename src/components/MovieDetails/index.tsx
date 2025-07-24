import React, { useEffect, useState } from 'react'
import './style.css'
import DefaultImage from '../../../public/images/default_image.png'
import { movideDetailsPropsInterface, movieDetailInterface } from '@/interface/pageInterface'
import { key } from '@/config'

const imgStyle = {
    "height": "100%",
    "width": "100%"
}

const MovieDetails: React.FC<movideDetailsPropsInterface> = ({ movieDetailsId }) => {
    const [movieDetails, setMovieDetails] = useState<movieDetailInterface>();

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
                        style={imgStyle} />
                </div>
                <div className="details-info-container">
                    <span style={{ fontSize: "20px" }}>{movieDetails?.["title"]}</span>
                    <span style={{ fontSize: "12px" }}>{movieDetails?.["released"]} &bull; {movieDetails?.["runtime"]}</span>
                    <span style={{ fontSize: "12px" }}>{movieDetails?.["genre"]}</span>
                    <span style={{ fontSize: "12px" }}>⭐ {movieDetails?.["imdbRating"]} Rating</span>
                </div>
            </div>
            <div className="rating-container">

            </div>
            <div className="details-text-container">
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
                <span>Nesciunt ut, modi est corporis officia sed repellendus alias porro fuga animi!</span>
                <span>Eligendi impedit praesentium modi? Adipisci reiciendis non laudantium obcaecati iste.</span>
            </div>
        </div>
    )
}

export default MovieDetails;