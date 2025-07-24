import React from 'react'
import './style.css'


const Pagination = () => {
    return (
        <>
            <div className='pagination-arrow-container'>
                <div className='arrow'>{"<"}</div>
                <div className='arrow'>{">"}</div>
            </div>
            <div className='pagination-numbering-container'>
                3 / 4
            </div>
        </>
    )
}

export default Pagination;