import React from 'react'
import './Navbar.css'
import Landing from './Landing/Landie.png'

function Navbar() {
    return (
        <div>
            <div className="container">
                <div className="left">
                    <ul>
                        <li><a href="#">home</a></li>
                        <li><a href="#">about</a></li>
                        <li><a href="#">contact</a></li>
                    </ul>
                </div>
                <div className="center">
                    <img src={Landing} alt="Landing" />

                </div>
                <div className="right">
                    <button>buy now</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
