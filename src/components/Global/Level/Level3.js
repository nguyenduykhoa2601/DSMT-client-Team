import React, { useState, useEffect } from 'react'
import { getLetterfromString } from '../../utils/function'
import AOS from 'aos'

import "aos/dist/aos.css"

const Level3 = (props) => {
    const { arrGame } = props
    const [point, setPoint] = useState(0)
    const [arrSuccess, setArrSuccess] = useState([])

    useEffect(() => {
        AOS.init({ duration: 300 })
    }, [])

    const handleChangeInput = (e, game, index) => {
        arrGame.forEach((value) => {
            if (value === e.target.value && game === e.target.value) {
                setPoint(point + 1)
                let newArr = [...arrSuccess]
                newArr.push(index)
                setArrSuccess(newArr)
            }
        })
    }

    return (
        <form className="form__level" data-aos="fade-right">
            <div>
                {
                    arrGame.map((game, index) => {
                        return (
                            <div className="keyword" key={index}>
                                {
                                    getLetterfromString(game).map((letter, index) => {
                                        return (
                                            <span className="keyword__letter" key={index}>
                                                {
                                                    index === 1 ?
                                                        letter
                                                        :
                                                        <input
                                                            className="input-letters"
                                                            disabled={true}
                                                            type="text"
                                                        />
                                                }
                                                &nbsp;
                                            </span>
                                        )
                                    })
                                }
                                <br />
                                <input
                                    type="text"
                                    className="your-guess"
                                    placeholder="Type your guess here"
                                    required={true}
                                    onChange={(e) => handleChangeInput(e, game, index)}
                                    disabled={arrSuccess.includes(index)}
                                    maxLength={game.length}
                                />
                                {
                                    arrSuccess.includes(index) && <i className="fas fa-check"></i>
                                }
                            </div>
                        )
                    })
                }
            </div>
            <img className="img__game" alt="" src={props?.previewImageUrl} />
        </form>
    )
}

export default Level3
