import './Home.css'
import React, { useEffect, useState } from 'react';
import Questions from '../../services/quiz';
import { useDispatch, useSelector } from 'react-redux';
import { quizQuestions } from '../../Store/Slices/quizSlice';

function Home() {

    const [category, setCategory] = useState(null);
    const [amount, setAmount] = useState(5);
    const [quiz, setQuiz] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        console.log("Amount change: " + amount);
        console.log("Category chosen: " + category);
    }, [amount, category]);

    useEffect(() => {
        console.log("Quiz Data : "+ quiz);
    }, [quiz]);

    const hanldeOption = (e) => {

        const option = e.target.value;
        setCategory(option);
    }

    const amountChange = (e) => {
        const newAmount = e.target.value;
        setAmount(newAmount);
    }

    const handleSubmit = async (e) => {

        e.preventDefault();
        console.log("Submit button clicked");
        await getQuizData();
        
    }

    const getQuizData = async () => {

        try {
            const data = await Questions({amount, category});
            setQuiz(data);
        } catch (error) {
            console.log("Error occured: "+ error);
        }
    }


    return (
        <div className='home-main-container'>

            <h1>Test Your Knowledge</h1>

            <div className='quiz-container'>

                <div className='form-container'>
                    <label htmlFor='category'>Category</label><br></br>
                    <select onChange={(e) => { hanldeOption(e) }} name='categr=ory' id='category'>
                        <option value="9">General Knowledge</option>
                        <option value="20">Mythology</option>
                        <option value="21">Sports</option>
                        <option value="23">History</option>
                        <option value="28">Vehicles</option>
                        <option value="13">Musical and Theatre</option>
                    </select>

                    <br></br>
                    <br></br>

                    <label htmlFor='amount'>Number of Question</label><br></br>
                    <input onChange={(e) => {
                        amountChange(e)
                    }} name='amount' id='amount' type='number'></input>
                    <br></br>
                    <br></br>

                    <button onClick={(e) => handleSubmit(e)}>Take Quiz</button>
                </div>

            </div>
        </div>
    )
}

export default Home