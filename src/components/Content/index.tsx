import React from 'react'
import './style.css'

const Box = () => {
    return (
        <div className='box-container'>
            Box
        </div>
    );
}

const Content = () => {
    return (
        <div className='content-container'>
            <Box />
            <Box />
        </div>
    )
}

export default Content;