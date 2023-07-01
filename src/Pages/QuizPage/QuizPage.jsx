import './QuizPage.css'
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import QuizCard from '../QuizCard/QuizCard';


function QuizPage() {
    const [quiz, setQuiz] = useState(null);
    const quizData = useSelector((state) => state.quizData.quiz);

    useEffect(() => {
        setQuiz(quizData);
    }, [quizData]);

    return (
        <div className='quiz-page-main-container'>
            <h1>Try Questions Below</h1>

            {quiz && quiz.results && (
                <div className='quiz-card-body'>
                    {quiz.results.map((data, key) => (
                        <QuizCard key={key} data={data} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default QuizPage;
