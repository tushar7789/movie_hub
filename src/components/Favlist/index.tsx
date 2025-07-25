import React from 'react'
import './style.css'
import { favListPropsContainerInterface } from '@/interface/pageInterface'

const FavList: React.FC<favListPropsContainerInterface> = ({ imdbID }) => {
    return (
        <div className='favlist-container'>FavList : {imdbID !== "undefined" ? imdbID : "lalloo"}</div>
    )
}

export default FavList;