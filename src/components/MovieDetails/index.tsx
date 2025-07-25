import React, { useEffect, useState } from 'react'
import './style.css'
import DefaultImage from '../../../public/images/default_image.png'
import { movideDetailsPropsInterface, movieItemInterface } from '@/interface/pageInterface'
import RatingStars from '../RatingStars'
import { key } from '@/config'
import Button from '../Button'
import {
    movieDetailsImgStyle,
    movieDetailsLeftButtonStyle,
    buttonProps,
    span1Style,
    span2Style,
    para1Style,
    para2Style,
    para3Style
} from '@/app/styles/styles'
import ClosedLeftArrow from '../../../public/images/closed_left_arrow.png'
import OpenLeftArrow from '../../../public/images/open_left_arrow.png'


const MovieDetails: React.FC<movideDetailsPropsInterface> = ({ movieDetailsId, setFavListOpen, setFavMovieList }) => {
    const [movieDetails, setMovieDetails] = useState<movieItemInterface>({});
    const [userRating, setUserRating] = useState(-1);

    const handleBackClick = () => {
        setFavListOpen(true);
    }

    const handleButtonClick = () => {
        setFavMovieList(favMovieList => {
            return (
                [
                    ...favMovieList,
                    {
                        "poster": movieDetails["poster"],
                        "title": movieDetails["title"],
                        "type": "",
                        "year": movieDetails["year"],
                        "imdbID": movieDetails["imdbID"]
                    }
                ]
            )
        });

        handleBackClick();
    }

    useEffect(() => {
        const controller = new AbortController();

        const fetchMovieDetail = async () => {
            try {
                const res = await fetch(`http://www.omdbapi.com/?apikey=${key}&i=${movieDetailsId}`,
                    { signal: controller.signal }
                );
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }

                const data = await res.json();
                const temp: movieItemInterface = {
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

        return () => {
            controller.abort();
        }
    }, [movieDetailsId])

    useEffect(() => {
        const idList = ["closed_star", "open_star", "add_fav_button"];
        const handleStrayClick = (e: any) => {
            if (!idList.includes(e.target.id))
                setUserRating(-1);
        }

        document.addEventListener('click', handleStrayClick);

        return () => {
            document.removeEventListener('click', handleStrayClick);
        }
    }, []);

    return (
        <div className='movie-details-container'>
            <div className="details-card">
                <div className="details-image-container">
                    <img
                        src={
                            movieDetails === undefined || movieDetails?.["poster"] === "N/A" ?
                                DefaultImage.src : movieDetails["poster"]
                        }
                        style={movieDetailsImgStyle}
                    />
                    <img
                        src={ClosedLeftArrow.src}
                        alt=""
                        style={movieDetailsLeftButtonStyle}
                        onClick={handleBackClick}
                    />
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
                <RatingStars maxCount={10} color={"red"} size={"15px"} setUserRating={setUserRating} />
                {
                    userRating !== -1 ?
                        <Button
                            buttonProps={buttonProps}
                            onClick={handleButtonClick}
                        /> :
                        null
                }
            </div>
            <div className="details-text-container">
                <p className='para-class' style={para1Style}>
                    <span style={span1Style}>Directed By</span>
                    <span style={span2Style}>{movieDetails?.["director"]}</span>
                </p>
                <p className='para-class' style={para2Style}>
                    <span style={span1Style}>Starring</span>
                    <span style={span2Style}>{movieDetails?.["starring"]}</span>
                </p>
                <p className='para-class' style={para3Style}>
                    <span style={span1Style}>Plot</span>
                    <span style={span2Style}>{movieDetails?.["plot"]}</span>
                </p>
            </div>
        </div>
    )
}

export default MovieDetails;