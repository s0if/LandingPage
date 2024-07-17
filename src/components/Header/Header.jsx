// import React from 'react'
import './Header.css'
import Designer from './photo/designer_1.png'
function Header() {
    return (
        <div className="container">
            <div className="header">
                <div className="first">
                    <h1>Introduce Your Product Quickly & Effectively</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia veniam sapiente alias vero culpa nam? Porro natus veniam provident facilis, dolorum, officiis cumque quam, repellendus deleniti adipisci id consectetur hic?</p>
                    <div className="button">
                        <button className='firstButton'>
                            <span>Purchase Ul Kit</span>
                        </button>
                        <button className='secondButton'>
                            <span>Learn More</span>
                        </button>
                    </div>
                </div>
                <div className="second">
                    <img src={Designer} alt="designer" />
                </div>
            </div>
        </div>
    )
}

export default Header
