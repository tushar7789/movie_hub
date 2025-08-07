import React from 'react'
import './style.css'

import SearchBarComp from './searchBar'
import IconImage from '../../../public/images/icon.png'

import { headerPropInterface, childrenPropInterface } from '@/interface/pageInterface'

import { iconStyle } from '@/styles/styles'

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

export const Header: React.FC<headerPropInterface> = ({ totalResults, setMovie }) => {
    return (
        <div className='header-container'>
            <Icon />
            <SearchBar>
                <SearchBarComp setMovie={setMovie} />
            </SearchBar>
            <HeaderInfoText>
                {
                    totalResults === "" ?
                        <>No searches found</> :
                        <>{totalResults} searches appeared</>
                }
            </HeaderInfoText>
        </div>
    )
}

export default Header;

