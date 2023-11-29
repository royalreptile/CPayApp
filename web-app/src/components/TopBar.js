import React from 'react'
import logo from "../assets/cpay-logo2-01.png"


export default function TopBar(props) {
    return (
        <div className='top-bar'>
            <img src={logo} alt='cpay logo' className='top-logo pre-header-logo'></img>
        </div>
    )
}