import React from 'react'
import './style.css'
import { headerPropInterface, childrenPropInterface, movieItemInterface } from '@/interface/pageInterface';
import Pagination from '../Pagination';
import DefaultImage from '../../../public/images/default_image.png';

const imgStyle = {
    "height": "100%",
    "width": "20%"
}

const ListItem: React.FC<childrenPropInterface> = ({ children }) => {
    return (
        <div className='listitem-container'>
            {children}
        </div>
    );
}

const Box: React.FC<childrenPropInterface> = ({ children }) => {
    return (
        <div className='box-container'>
            {children}
        </div>
    );
}

const Content: React.FC<headerPropInterface> = ({ movies, totalResults, setMovie }) => {

    return (
        <div className='content-container'>
            <Box>
                <div className="box-movielist-container">
                    {
                        movies === undefined ?
                            <span>Enter input to get list of movies...</span>
                            :

                            movies.map((ele: movieItemInterface, i: number) => (
                                // <li key={ele["imdbID"]}>{ele["Title"]}</li>
                                <ListItem key={ele["imdbID"]}>
                                    <img src={ele["Poster"] !== "N/A" ? ele["Poster"] : DefaultImage.src} style={imgStyle} />
                                    <div className="listitem-text-container">
                                        <span>{ele["Title"]}</span>
                                        <span>{ele["Year"]}</span>
                                    </div>
                                </ListItem>
                            ))

                    }
                </div>
                <div className='box-pagination-container'>
                    <Pagination />
                </div>

            </Box>
            <Box>
                From
            </Box>
        </div>
    )
}

export default Content;