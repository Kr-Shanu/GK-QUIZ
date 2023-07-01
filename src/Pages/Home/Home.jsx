import './Home.css';
import React, { useEffect, useState } from 'react';
import getQuizData from '../../services/quiz';
import { useDispatch } from 'react-redux';
import { quizQuestions } from '../../Store/Slices/quizSlice';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [category, setCategory] = useState(null);
    const [amount, setAmount] = useState(5);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOption = (e) => {
        const option = e.target.value;
        setCategory(option);
    };

    const amountChange = (e) => {
        const newAmount = e.target.value;
        setAmount(newAmount);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submit button clicked");
        const quizData = await getQuizData({ amount, category });
        dispatch(quizQuestions(quizData));
        navigate('/quiz');
    };

    useEffect(() => {
        console.log("Amount change: " + amount);
        console.log("Category chosen: " + category);
    }, [amount, category]);

    return (
        <div className='home-main-container'>
            <h1>Test Your Knowledge</h1>
            <div className='quiz-container'>
                <div className='form-container'>
                    <label htmlFor='category'>Category</label><br />
                    <select onChange={handleOption} name='category' id='category'>
                        <option value="9">General Knowledge</option>
                        <option value="20">Mythology</option>
                        <option value="21">Sports</option>
                        <option value="23">History</option>
                        <option value="28">Vehicles</option>
                        <option value="13">Musical and Theatre</option>
                    </select>
                    <br /><br />
                    <label htmlFor='amount'>Number of Questions</label><br />
                    <input onChange={amountChange} name='amount' id='amount' type='number' />
                    <br /><br />
                    <button onClick={handleSubmit}>Take Quiz</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
