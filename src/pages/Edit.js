import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos'

import EditImage from '../components/Global/EditImage'

import "aos/dist/aos.css"

const Edit = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    }, [])

    const styleMenu = {
        backgroundColor: "rgb(123,255,240)"
    }

    return (
        <div>
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
                        <Link className="home__menu-link" to="/detect">
                            Detection
                        </Link>
                    </li>
                    <li className="home__menu-item">
                        <Link className="home__menu-link" to="/swap">
                            Swap Face
                        </Link>
                    </li>
                </ul>
                <button className="home__menu-started">
                    <Link to="/edit">
                        Get Started
                    </Link>
                </button>
            </div>
            <EditImage />
        </div>
    );
}

export default Edit;
