import React from 'react'
import './style.css'
import { headerPropInterface, childrenPropInterface, movieItemInterface } from '@/interface/pageInterface';

const Box: React.FC<childrenPropInterface> = ({ children }) => {
    return (
        <div className='box-container'>
            {children}
        </div>
    );
}

const Content: React.FC<headerPropInterface> = ({ movies, totalResults }) => {

    return (
        <div className='content-container'>
            <Box>
                <ul>
                    {
                        movies.map((ele: movieItemInterface, i: number) => (
                            <li key={ele["imdbID"]}>{ele["Title"]}</li>
                        ))
                    }
                </ul>
            </Box>
            <Box>
                From
            </Box>
        </div>
    )
}

export default Content;