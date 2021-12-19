import React from 'react'
import { useState } from 'react'
import { getLetterfromString } from '../../utils/function'

const Level2 = (props) => {
    const { arrGame } = props
    const [point, setPoint] = useState(0)
    const [arrSuccess,setArrSuccess] = useState([])

    const handleChangeInput = (e,game,index)=>{
        arrGame.forEach((value) => {
            if (value === e.target.value && game === e.target.value) {
                setPoint(point + 1)
                let newArr = [...arrSuccess]
                newArr.push(index)
                setArrSuccess(newArr)
            }
        })
    }

    const showPoint = async (e) => {
        e.preventDefault()
        props.getResult(point)
    }

    return (
        <form onSubmit={e => showPoint(e)}>
            {
                arrGame.map((game, index) => {
                    return (
                        <div className="keyword" key={index}>
                            {
                                getLetterfromString(game).map((letter, index) => {
                                    return (
                                        <span className="keyword__letter" key={index}>
                                            {
                                                index === 0 || index === 1 ?
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
                                onChange={(e) => handleChangeInput(e,game,index)}
                                maxLength={game.length}
                                disabled={arrSuccess.includes(index)}
                            />
                         
                            {
                                arrSuccess.includes(index) && <i className="fas fa-check"></i>
                            }
                            
                        </div>
                    )
                })
            }
        </form>
    )
}

export default Level2