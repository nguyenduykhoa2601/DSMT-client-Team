import React, { useCallback, useState } from 'react'
import { Test, QuestionGroup, Question, Option } from 'react-multiple-choice';
import { randomString } from '../../utils/function';

var sentenceSuccess = []
const Level1 = ({ arrGame }) => {
    const [showLabel,setShowLabel] = useState(false)

    const onCheckResult = (selectedOptions, index) => {
        const checkOption = selectedOptions[undefined]
        arrGame.forEach((item) => {
            if (checkOption === item) {
                sentenceSuccess.push(index)
            }
        })
    }

    const randomStringResult = useCallback((game) => {
        return randomString(game)
    },[])

    const showResult = async() => {
        setShowLabel(true)
    }

    return (
        <>
            {
                !showLabel && arrGame.map((game, index) => {
                    return (
                        <Test style={{ marginLeft: 32 }} key={index} onOptionSelect={selectedOptions => onCheckResult(selectedOptions, index)} >
                            <QuestionGroup >
                                <Question style=
                                    {{
                                        fontSize: 14,
                                        marginTop: 12,
                                        color: `${!sentenceSuccess.includes(index) && sentenceSuccess.length > 0 ? 'red' : 'black'}`
                                    }}
                                >Sentence {index + 1}
                                </Question>
                                {
                                    randomStringResult(game).map((item, pos) => {
                                        return (
                                            <Option name={item} style={{ fontSize: 16 }} value={item} key={pos}>{item}</Option>
                                        )
                                    })
                                }
                            </QuestionGroup>
                            <br />
                        </Test>
                    )
                })
            }
            <br />
            {showLabel && <div className="text__result">Your answer was correct : {sentenceSuccess.length}</div>}
            <button className="submit__form" onClick={showResult}>Show result</button>
        </>
    )
}

export default Level1
