import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";

import PreviewImg from "../images/preview.jpg";
import InfoImg1 from "../images/info1.jpg";
import InfoImg2 from "../images/info2.jpg";

import "aos/dist/aos.css";

const Home = () => {
    const [scrollPosition, setScrollPosition] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const styleMenu = {
        backgroundColor:
            scrollPosition && scrollPosition.pageY > 188 ? "white" : "",
        boxShadow:
            scrollPosition && scrollPosition.pageY > 188 ? "0 0 3px #ccc" : "",
    };

    return (
        <div className="home" onWheel={(e) => setScrollPosition(e)}>
            <div className="home__menu" data-aos="fade-down" style={styleMenu}>
                <Link to="/">
                    <img
                        src="https://www.befunky.com/images/site/logo-darker.svg"
                        alt=""
                        className="home__menu-logo"
                    />
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
                    <Link to="/edit">Get Started</Link>
                </button>
            </div>
            <div className="home__desc">
                <div className="home__desc-info" data-aos="fade-right">
                    <div className="home__desc-title">
                        {" "}
                        The Best Online Photo Editor, Ever.
                    </div>
                    <div className="home__desc-main">
                        Anything you want to do to your photo, you can do with BeFunky
                    </div>
                    <button className="home__desc-started">
                        <Link to="/edit" className="home__desc-link">
                            Get Started
                        </Link>
                    </button>
                </div>
                <img className="home__desc-img" src={PreviewImg} alt="" />
                <svg
                    className="home__desc-svg"
                    viewBox="0 0 1412 940"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                    <defs>
                        <pattern
                            id="hero-svg-c"
                            width="22"
                            height="22"
                            x="47.4"
                            y="518"
                            patternUnits="userSpaceOnUse"
                        >
                            <use xlinkHref="#hero-svg-a" transform="scale(.1)"></use>
                        </pattern>
                        <pattern
                            id="hero-svg-d"
                            width="22"
                            height="22"
                            x="897.8"
                            y="-8.1"
                            patternUnits="userSpaceOnUse"
                        >
                            <use xlinkHref="#hero-svg-a" transform="scale(.1)"></use>
                        </pattern>
                        <image
                            id="hero-svg-a"
                            width="220"
                            height="220"
                            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAADcBAMAAADpdNKyAAAAMFBMVEUAAAA+Mc8/Ms4/M88/Ms4+Ms4/Ms8/Ms4/Mc8/Ms9AMtA/NM5ANM9GNtFNM+Y+Mc5BOS4eAAAAD3RSTlMA+bJN7ObTzL+VZ1k/IQrbwsVwAAABDUlEQVR42u3YTS5EQRTF8cML4qsXIOIxEjEwNrEHIwuwAFuwAekt2AE7YGABBjbSNGJ0RCLd3quBmtwnN/6/HVSq6t57rgAAAAAAAAAAAAAAAAAA+Fuj4/3Ts4MTDWN9z18mhxpCc+Fv54q3OfbMlcI9eG56r2BrrX/YUrAbd1wr1Ebrjm2FenLX9FGRxu65VKDGfS8KtOy+NwW6c+FWcY5c2FWYUevCjsI09pBvZdWlD4VZdOlZYVZceleYJZdeFWbBpYlmkp/u97vL/DIr/l3iqlJTM/N2hMp+l7WbV80qaSexyjkz6xRdmRGyJqDKfJc1vdZm86Sbh/leBQAAAAAAAAAAAAAAAACAf+UTBht88nYZa5oAAAAASUVORK5CYII="
                        ></image>
                    </defs>
                    <g fillRule="nonzero" fill="none">
                        <path fill="url(#hero-svg-c)" d="M69.4 540h416.4v352H69.4z"></path>
                        <path
                            fill="url(#hero-svg-d)"
                            d="M919.8 13.9h464v417.6h-464z"
                        ></path>
                        <path
                            d="M284 662.6C59.6 631.7 29.3 316.2 249.4 262 506 198.8 444.1 32.4 623.3 3.8c179.2-28.6 194.3 142.7 277.6 151.4 83.3 8.7 143-94.3 238.9-38.6 95.9 55.8 15.4 149 171.6 220.8 156.2 71.9 118.4 358.4-32.8 393.7-151.2 35.3-162-66-260.2 50C920.2 897.3 809.4 978 637.6 920s-129-226.6-353.5-257.4z"
                            fill="currentColor"
                        ></path>
                        <circle fill="currentColor" cx="69.4" cy="716.4" r="69.4"></circle>
                    </g>
                </svg>
            </div>
            <ul className="home__info-list">
                <li className="home__info-item" data-aos="fade-up">
                    <img className="home__info-item-img" src={InfoImg1} alt="" />
                    <div className="home__info-detail">
                        <div className="home__info-title">Our Team</div>
                        <div className="home__info-main">
                            Bonjour! We introduce a object detection, age and gender
                            estimation, face swapping system using CNN deployed on web
                            platform. This is our final project in computer algebra
                            (CS522.M11.KHCL). Our team include 4 member, all of us from
                            UIT-VNU. <br />
                            In particular, Ngô Đức Tuấn, he builds object detection
                            model and write our report. <br />
                            Lê Hoàng Long, he builds age and
                            gender estimation model and makes slide. <br />
                            Nguyễn Tuấn Lộc changemodel from list API to client with Flask Python. <br />
                            Nguyễn Duy Khoa design and perform image editing function, build web app. <br />
                            Github.
                            <br />
                            For detail, please visit our &nbsp;
                            <a
                                href="https://github.com/nguyenduykhoa2601/DSMT-client-Team"
                                className="social__link"
                            >
                                Github
                            </a>{" "}
                            and deployed on{" "}
                            <a href="https://www.netlify.com/" className="social__link">
                                Netlify
                            </a>
                            . Hope you enjoy our product!
                        </div>
                    </div>
                </li>
                <li className="home__info-item">
                    <img
                        className="home__info-item-img"
                        data-aos="fade-left"
                        src="https://www.befunky.com/images/prismic/423b33b385705b89ceb6600702953e6cc0ae961b_landing-photo-editor-img-5.png?auto=webp&format=jpg&width=700&bg-color=FAFAFA"
                        alt=""
                    />
                    <div className="home__info-detail" data-aos="fade-right">
                        <div className="home__info-title">What's about</div>
                        <div className="home__info-main">
                            The website includes 3 main pages: homepage, image editing page,
                            face swap page from two photos. <br />
                            The homepage is the page below that introduces group information,
                            project overview and some other information. <br />
                            Image editing page includes functions such as cropping, filtering,
                            adjusting brightness, inserting icons.... <br />
                            Face swap page will return the swapped photo after you have two
                            step selected the source image
                        </div>
                    </div>
                </li>
                <li className="home__info-item" data-aos="fade-right">
                    <img className="home__info-item-img" src={InfoImg2} alt="" />
                    <div className="home__info-detail">
                        <div className="home__info-title">Our Technology</div>
                        <div className="home__info-main">
                            Regarding Front-end, our team used{" "}
                            <a href="https://reactjs.org/" className="social__link">
                                ReactJS
                            </a>
                            , AOS, HTML, CSS to build website content, visual effects, text.
                            There is also a built-in library pintura to build image editing.{" "}
                            <br />
                            Regarding the Back-end, the team uses Flask to create APIs, other
                            functions use other python libraries such as numpy, facial
                            landmark, cv2, dlib to build
                        </div>
                    </div>
                </li>
                <li className="home__info-item" data-aos="fade-left">
                    <img
                        className="home__info-item-img"
                        src="https://www.befunky.com/images/prismic/15c58e21a80fd14a0518b9d0640305eb479379a5_landing-photo-editor-img-2.png?auto=webp&format=jpg&width=1000"
                        alt=""
                    />
                    <div className="home__info-detail">
                        <div className="home__info-title">Edit Page</div>
                        <div className="home__info-main">
                            On this image editing page, you can download and edit with various
                            available tools such as cropping images that can be cropped to
                            each pixel or zooming images to the sizes you want. You can also
                            select some images that have been brightness adjusted, insert
                            built-in icons or draw on the image you are working on. The above
                            functions are considered by our team to be quite complete for an
                            image processing website.
                        </div>
                    </div>
                </li>

                <li className="home__info-item" data-aos="flip-up">
                    <img
                        className="home__info-item-img"
                        src="https://i.ytimg.com/vi/hMFx1TXjAJc/maxresdefault.jpg"
                        alt=""
                    />
                    <div className="home__info-detail">
                        <div className="home__info-title">Detection</div>
                        <div className="home__info-main">
                            For the dection page, we use TF to predict some objects in a picture. We applied some libraries which is supported by tensorflow. Otherwise, we also refer some newspaper to build model for this function
                        </div>
                    </div>
                </li>

                <li className="home__info-item" data-aos="flip-up">
                    <img
                        className="home__info-item-img"
                        src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                    />
                    <div className="home__info-detail">
                        <div className="home__info-title">Swap Page</div>
                        <div className="home__info-main">
                            For the face swap page, you only need to select two photos that
                            only have a single face to perform this function. This function
                            will send a request to the server to return a corresponding image,
                            so it may make you wait for a while. But don't worry because it
                            won't make you wait for a long time because our team has actually
                            tested it and it never takes more than 10 seconds unless the
                            server is down.
                        </div>
                    </div>
                </li>
                <li className="home__info-item" data-aos="zoom-in-up">
                    <img
                        className="home__info-item-img"
                        src="https://interiordesign.net/wp-content/uploads/2021/11/Interior-Design-Kelly-Behun-Studio-Sofield-SHoP-Architects-8-Home-Office.jpg"
                        alt=""
                    />
                    <div className="home__info-detail">
                        <div className="home__info-title">Conclusion our website</div>
                        <div className="home__info-main">
                            This is one of the products that our team finds quite relevant to
                            practice especially in today's 4.0 industry. Famous social
                            networks like{" "}
                            <a href="https://www.instagram.com/" className="social__link">
                                Instagram
                            </a>
                            ,{" "}
                            <a href="https://www.facebook.com/" className="social__link">
                                Facebook
                            </a>{" "}
                            also integrate some image processing features on their platforms.
                            However with the site we seem to be dealing with more images than
                            they use. Therefore, we see the trend that young people who want
                            to use this website also make up a large part of the community.
                        </div>
                    </div>
                </li>
            </ul>
            <div
                className="home__final"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
            >
                <div className="home__final-title">BeFunny With Us</div>
                <button className="home__final-button">
                    <Link to="/edit" className="home__final-link">
                        Get Started
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default Home;
