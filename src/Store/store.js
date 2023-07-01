import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "./Slices/quizSlice";

const store = configureStore({

    reducer: {
        quizData: quizSlice,
    },
});

export default store;