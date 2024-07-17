// import React from 'react';

function Section({ image, flag = false }) {
    return (
        <div className="header">
            <div className="container">
                <div className="second">
                    <img src={image} alt="second" />
                </div>
                <div className="first">
                    <h2>Light, Fast & Powerful</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, sint provident necessitatibus non mollitia, odio impedit nulla alias est error placeat ullam quod deserunt repellendus. Sint fugiat cumque dolorum tempora!</p>
                    {flag &&  <button className='firstButton'>
                            <span>Purchase Now</span>
                        </button>}
                </div>
            </div>
        </div>
    );
}

export default Section;
