import React, { useState, useEffect } from 'react'
import './style.css'
import Arrow from '../../../public/images/up.png';
import { leftPaginationArrow, rightPaginationArrow } from '@/styles/styles';
import { paginationPropInterface } from '@/interface/pageInterface';
import { ListItem } from '../Content/listitem';

const Pagination: React.FC<paginationPropInterface> = ({ movies, onClick, additionalDep, batches }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [cur, setCur] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const movie = additionalDep[0];
    let current = 1;

    useEffect(() => {
        setCur(1);
        setTotalPages(0);
        if (movies === undefined) setIsLoading(true);
        else if (movies?.length > 0) {
            setIsLoading(false);
            setTotalPages(movies.length / batches);
        }
    }, [movies]);

    const handleNextPage = () => {
        if (cur < totalPages) {
            setCur(cur => cur + 1);
        }
    }

    const handlePreviousPage = () => {
        if (cur > 1) {
            setCur(cur => cur - 1);
        }
    }

    return (
        <>
            <div className="box-movielist-container">
                {
                    isLoading ?
                        movie === "undefined" || movie.length === 0 ?
                            <span>Enter a movie name...</span>
                            :
                            <span>Loading...</span>
                        :

                        <ListItem
                            onClick={onClick}
                            // setFavListOpen={setFavListOpen}
                            movies={movies}
                            low={(cur - 1) * 5}
                            high={movies?.length <= cur * 5 ? movies?.length - 1 : cur * 5 - 1}
                        />
                }
            </div>
            {
                movies?.length !== 0 ?
                    <div className='pagination-container'>
                        <div className='pagination-arrow-container'>
                            <div className='arrow-container'>
                                <span className='arrow-left'>
                                    <img
                                        src={Arrow.src}
                                        alt=""
                                        style={leftPaginationArrow}
                                        onClick={handlePreviousPage}
                                    />
                                </span>
                            </div>
                            <div className='arrow-container'>
                                <span className='arrow-right'>
                                    <img
                                        src={Arrow.src}
                                        alt=""
                                        style={rightPaginationArrow}
                                        onClick={handleNextPage}
                                    />
                                </span>
                            </div>
                        </div>
                        <div className='pagination-numbering-container'>
                            {cur} / {totalPages}
                        </div>
                    </div> :
                    null
            }
        </>
    )
}

export default Pagination;