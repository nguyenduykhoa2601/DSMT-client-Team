import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos'

import Loading from '../utils/Loading';

import "aos/dist/aos.css"
import Level1 from './Level/Level1';
import Level2 from './Level/Level2';
import Level3 from './Level/Level3';

const Detect = () => {
    const [previewImageUrl, setPreviewImageUrl] = useState(false);
    const [imageFile, setImageFile] = useState(null);
    const [imagePrediction, setImagePrediction] = useState("");
    const [loading, setLoading] = useState(false)
    const [perform, setPerform] = useState(0)
    const [arrGame, setArrGame] = useState([])
    const [isHide, setIsHide] = useState(false)
    const [kindeLevel, setKindLevel] = useState(1)
    const [result, setResult] = useState(0)
    const [stringGame,setStringGame] = useState('')


    useEffect(() => {
        AOS.init({ duration: 500 })
    }, [])

    useEffect(() => {
        const myArrConverted = stringGame.split(',')
        const uniqueSet = new Set(myArrConverted);
        const backToArray = [...uniqueSet];
        setArrGame(backToArray)
    }, [stringGame])

    const generatePreviewImageUrl = (file, callback) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = (e) => callback(reader.result);
    };

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (!file) {
            return;
        }
        setImageFile(file);
        generatePreviewImageUrl(file, (previewImageUrl) => {
            setPreviewImageUrl(previewImageUrl);
        });
    };

    const uploadHandler = async () => {
        const formData = new FormData();
        formData.append("file", imageFile, "img.png");
        let t0 = performance.now();
        try {
            setLoading(true)
            const res = await axios.post(`${process.env.REACT_APP_API}/upload`, formData)
            await setImagePrediction(res.data)
            await setStringGame('') //// NOI DO API tra ve string
            let t1 = performance.now();
            setPerform(t1 - t0)
            setLoading(false)
        } catch (error) {
            alert(error)
        }
    }

    const saveImage = async () => {
        var canvas = await document.createElement('canvas');
        var ctx = await canvas.getContext('2d');
        var img = await document.getElementById("downloadImage");
        canvas.width = img.width
        canvas.height = img.height
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        var data = canvas.toDataURL("image/png")
        window.location.href = data
        var a = document.createElement('a');
        a.href = data;
        a.download = 'download.png';
        document.body.appendChild(a);
        a.click();
    }

    const getResult = (point) => {
        setResult(point)
    }

    console.log("point", result)

    return (
        <div className="detection">
            <div className="detection__upload">
                <div
                    className="detection__upload-title"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="500"
                >
                    Upload an image for classification</div>
                <div className="detection__upload-action">
                    <div className="detection__upload-img" data-aos="fade-right">
                        {
                            previewImageUrl ?
                                <img className="detection__img" alt="" src={previewImageUrl} />
                                :
                                <input type="file" name="file" className="detection__input-img" onChange={handleChange} />
                        }
                    </div>
                    <div className="detection__result" data-aos="fade-left">
                        {
                            loading ? <Loading /> : ""
                        }
                        {
                            imagePrediction && isHide ?
                                <img className="detection__img" alt="" id="downloadImage" src={imagePrediction} />
                                :
                                <div className="text">Your prediction will receive here</div>
                        }
                    </div>
                </div>
                <div className="detect__result-checkbox">
                    <div className="checkbox-text">{!isHide ? 'Show result' : 'Hide result'} </div>
                    <input type="checkbox" className="checkbox-input" onClick={() => setIsHide(!isHide)} />
                </div>
                <div className="detection__info">
                    {
                        imagePrediction && <div className="detection__total-time">Timing to get result: <span>{Intl.NumberFormat().format(perform)}</span> seconds</div>
                    }
                    {
                        previewImageUrl && <button className="detection__button-predict" onClick={uploadHandler}> Predict</button>
                    }
                    {
                        imagePrediction && isHide && <button className="detection__button-download" onClick={saveImage}> Download</button>
                    }
                </div>
                {
                    imagePrediction && isHide &&
                    <>
                        <div className="detection__your-predict-title">Our model can detect {arrGame.length} objects. Can you guess it?</div>
                        <ul className="menu_game">
                            <li className={kindeLevel === 1 ? "menu__game-item--active" : "menu__game-item"} onClick={() => setKindLevel(1)}>Level 1</li>
                            <li className={kindeLevel === 2 ? "menu__game-item--active" : "menu__game-item"} onClick={() => setKindLevel(2)}>Level 2</li>
                            <li className={kindeLevel === 3 ? "menu__game-item--active" : "menu__game-item"} onClick={() => setKindLevel(3)}>Level 3</li>
                        </ul>
                        <div className="detection__your-predict">
                            <div className="form__action">
                                {
                                    kindeLevel === 2 && <Level2 arrGame={arrGame} />
                                }
                                {
                                    kindeLevel === 1 && <Level1 arrGame={arrGame} getResult={getResult} />
                                }
                                {
                                    kindeLevel === 3 && <Level3 arrGame={arrGame} />
                                }
                            </div>
                        </div>
                    </>
                }

            </div>
        </div>
    )
};

export default Detect;