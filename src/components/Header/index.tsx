import React from 'react'
import './style.css'

const Icon = () => {
    return (
        <div className='icon-container'>
            Icon
        </div>
    )
}

const SearchBar = () => {
    return (
        <div className='search-bar-container'>
            Searchbar
        </div>
    )
}

const HeaderInfoText = () => {
    return (
        <div className='header-info-container'>
            Total X number of searhces appeared
        </div>
    )
}

export const Header = () => {
    return (
        <div className='header-container'>
            <Icon />
            <SearchBar />
            <HeaderInfoText />
        </div>
    )
}

export default Header;

