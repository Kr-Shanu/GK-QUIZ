import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({

    name: "quizData",
    initialState: {
        quiz: null
    },
    reducers: {
        quizQuestions(state, action) {
            state.quiz = action.payload;
            console.log("State: ", state);
        }
    },
});

export const { quizQuestions } = quizSlice.actions;
export default quizSlice.reducer;