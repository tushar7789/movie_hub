import React from 'react'
import './style.css'

import SearchBarComp from '../SearchBarComp'
import IconImage from '../../../public/images/icon.svg'

import { headerPropInterface, childrenPropInterface } from '@/interface/pageInterface'

const iconStyle = {
    width: "20px",
    height: "20px",
    marginLeft: "5px",
}

const Icon = () => {
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

const HeaderInfoText: React.FC<childrenPropInterface> = ({ children }) => {
    return (
        <div className='header-info-container'>
            {children}
        </div>
    )
}

export const Header: React.FC<headerPropInterface> = ({ movies, totalResults }) => {
    return (
        <div className='header-container'>
            <Icon />
            <SearchBar />
            <HeaderInfoText>
                Total {totalResults} number of searches appeared
            </HeaderInfoText>
        </div>
    )
}

export default Header;

