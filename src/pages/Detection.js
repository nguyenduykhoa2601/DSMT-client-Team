import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos'

import Detect from '../components/Global/Detect'

import "aos/dist/aos.css"

const FaceSwap = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    }, [])

    const styleMenu = {
        backgroundColor: "rgb(123,255,240)"
    }

    return (
        <div className="face__swap">
            <div className="home__menu" style={styleMenu} data-aos="fade-down">
                <Link to='/'>
                    <img src="https://www.befunky.com/images/site/logo-darker.svg" alt="" className="home__menu-logo" />
                </Link>
                <ul className="home__menu-list">
                    <li className="home__menu-item">
                        <Link className="home__menu-link" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="home__menu-item">
                        <Link className="home__menu-link" to="/edit">
                            Editor
                        </Link>
                    </li>
                    <li className="home__menu-item">
                        <Link className="home__menu-link" to="/swapface">
                            Detection
                        </Link>
                    </li>
                </ul>
                <button className="home__menu-started">
                    <Link to="/edit">
                        Get Started
                    </Link>
                </button>
            </div>
            <div className="face__page-title" data-aos="flip-left">
                Welcome to Face Swapping, let's try this function
            </div>
            <Detect />

        </div>
    );
}

export default FaceSwap;
