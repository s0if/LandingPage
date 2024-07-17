// import React from 'react'
import icon from './icon/Icon.svg'
import photo from './photoHero/photo.svg'
import './Hero.css'
function Hero() {
    return (
        <div className="header">
            <div className="container">
                <div className="first">
                    <h1>Light, Fast & Powerful</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti asperiores sint, totam minima nobis incidunt sequi dignissimos sed quod sapiente voluptatem quam culpa quia quas praesentium iste aperiam deserunt est!</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id nulla suscipit molestiae nesciunt, ratione perferendis modi! Quaerat cumque iusto porro!</p>
                    <div className="cards">
                        <div className="card">
                            <img src={icon} alt="icon" />
                            <h2>Title Goes Here</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque exercitationem officiis perspiciatis debitis. Ducimus, ea?</p>
                        </div>
                        <div className="card">
                            <img src={icon} alt="icon" />
                            <h2>Title Goes Here</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque exercitationem officiis perspiciatis debitis. Ducimus, ea?</p>
                        </div>
                    </div>
                </div>
                <div className="second">
                    <img src={photo} alt="photo" />
                </div>
            </div>

        </div>
    )
}

export default Hero
