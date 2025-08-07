import React, { useEffect, useState } from 'react'
import './style.css'
import DefaultImage from '../../../public/images/default_image.png'
import { movideDetailsPropsInterface, movieItemInterface, movieDetailInterface } from '@/interface/pageInterface'
import RatingStars from './ratingStars'
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
} from '@/styles/styles'
import ClosedLeftArrow from '../../../public/images/closed_left_arrow.png'
import OpenLeftArrow from '../../../public/images/open_left_arrow.png'

const tempOBj: movieDetailInterface = {
    "Title": "",
    "Released": "",
    "Runtime": "",
    "Poster": "",
    "Genre": "",
    "Director": "",
    "Starring": "",
    "Plot": "",
    "imdbRating": "",
    "Type": ""
}

const MovieDetails: React.FC<movideDetailsPropsInterface> = ({ movieDetailsId, setFavListOpen, setFavMovieList }) => {
    const [movieDetails, setMovieDetails] = useState<movieDetailInterface>(tempOBj);
    const [userRating, setUserRating] = useState(-1);
    const [favMovieItem, setFavMovieItem] = useState<movieItemInterface>();

    const handleBackClick = () => {
        setFavListOpen(true);
    }

    const handleButtonClick = () => {
        setFavMovieList(favMovieList => {
            let tempList = favMovieList.map((ele) => ele["imdbID"]).slice();

            if (!tempList.includes(movieDetailsId)) {
                return (
                    [
                        ...favMovieList,
                        {
                            "Poster": movieDetails["Poster"],
                            "Title": movieDetails["Title"],
                            "Type": movieDetails["Type"],
                            "Year": movieDetails["Released"].split(' ')[2],
                            "imdbID": movieDetailsId
                        }
                    ]
                )
            }

            return (
                [...favMovieList]
            );
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
                const temp: movieDetailInterface = {
                    Title: data["Title"],
                    Released: data["Released"],
                    Runtime: data["Runtime"],
                    Poster: data["Poster"],
                    Genre: data["Genre"],
                    Director: data["Director"],
                    Starring: data["Actors"],
                    Plot: data["Plot"],
                    imdbRating: data["imdbRating"],
                    Type: data["Type"]
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
                            movieDetails === undefined ||
                                movieDetails?.["Poster"] === "N/A" ||
                                movieDetails?.["Poster"] === "" ?
                                DefaultImage.src : movieDetails["Poster"]
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
                    <span style={{ fontSize: "20px" }}>{movieDetails?.["Title"]}</span>
                    <span style={{ fontSize: "12px" }}>{movieDetails?.["Released"]} &bull; {movieDetails?.["Runtime"]}</span>
                    <span style={{ fontSize: "12px" }}>{movieDetails?.["Genre"]}</span>
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
                    <span style={span2Style}>{movieDetails?.["Director"]}</span>
                </p>
                <p className='para-class' style={para2Style}>
                    <span style={span1Style}>Starring</span>
                    <span style={span2Style}>{movieDetails?.["Starring"]}</span>
                </p>
                <p className='para-class' style={para3Style}>
                    <span style={span1Style}>Plot</span>
                    <span style={span2Style}>{movieDetails?.["Plot"]}</span>
                </p>
            </div>
        </div>
    )
}

export default MovieDetails;