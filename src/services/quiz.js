import axios from 'axios';

const getQuiz = async (body) => {

    const {amount, category} = body;
    const url = "https://opentdb.com/api.php?amount="+amount+"&category="+category;

    
    try {
        const quiz = await axios.get(url);
        console.log("Quiz data received = "+ quiz.data.results[0]);
        return quiz.data;
    } catch (error) {
        console.log("Error occured: "+ error);
    }
}

export default getQuiz;