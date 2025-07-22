import React from 'react'
import './style.css'

import SearchBarComp from '../SearchBarComp'
import IconImage from '../../../public/images/icon.svg'

const iconStyle = {
    width: "20px",
    height: "20px",
    marginLeft: "5px",
}

const Icon = () => {
    console.log(IconImage);
    return (
        <div className='icon-container'>
            <span>MovieHub</span>
            <img src={IconImage.src} alt="" style={iconStyle} />
        </div>
    )
}

const SearchBar = () => {
    return (
        <div className='search-bar-container'>
            <SearchBarComp />
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

