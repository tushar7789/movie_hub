'use client'

import React, { useState } from 'react'
import './style.css'

import { searchBarCompInterface } from '@/interface/pageInterface'

const SearchBarComp: React.FC<searchBarCompInterface> = ({ setMovie }) => {
    const [inputMovie, setInputMovie] = useState("");

    const handleOnInputChange = (e: any) => {
        e.preventDefault();
        console.log("le le: ", e.target.value);
        setInputMovie(e.target.value);
        setMovie(inputMovie);
    }

    return (
        <div className='searchbarcomp-container'>
            <form action="" className='form-class'>
                <input
                    type="text"
                    placeholder='Find..'
                    className='input-class'
                    onChange={handleOnInputChange}
                    value={inputMovie}
                />
            </form>
        </div>
    )
}

export default SearchBarComp;