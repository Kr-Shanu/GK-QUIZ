import './QuizCard.css'
import React, { useState } from 'react'

function QuizCard(props) {

    const {question, correct_answer} = props.data;
    const [seeAns, setSeeAns] = useState(false);


    return (
        <div className='card-main-body'>
            <h3>{question}</h3>
            {
                seeAns && (
                    <p>{correct_answer}</p>
                )
            }
            <button id='ans' onClick={() => {
                setSeeAns(!seeAns)
            }}>{seeAns ? "Hide" : "Show"} Answer</button>
        </div>
    )
}

export default QuizCard;