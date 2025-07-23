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

const SearchBar: React.FC<childrenPropInterface> = ({ children }) => {
    return (
        <div className='search-bar-container'>
            {children}
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

export const Header: React.FC<headerPropInterface> = ({ movies, totalResults, setMovie }) => {
    return (
        <div className='header-container'>
            <Icon />
            <SearchBar>
                <SearchBarComp setMovie={setMovie} />
            </SearchBar>
            <HeaderInfoText>
                {
                    totalResults === undefined ?
                        <>No searches found</> :
                        <>Total {totalResults} number of searches appeared</>
                }
            </HeaderInfoText>
        </div>
    )
}

export default Header;

