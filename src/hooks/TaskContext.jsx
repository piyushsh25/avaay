import { createContext, useContext, useState, useReducer, useEffect } from "react";
import { reducerFunction } from "./reducerFunction";

const TaskContext = createContext();
const stateVariables = {
    name: "",
    description: "",
    time: "",
    task: JSON.parse(localStorage.getItem("taskItem")),
    showButton: false,
    formInValid: true,
}
export const TaskProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducerFunction, stateVariables)
    useEffect(() => {
        localStorage.setItem("taskItem", JSON.stringify(state.task))
    }, [state.task])



    return <TaskContext.Provider value={{ state, dispatch }}>
        {children}
    </TaskContext.Provider>
}

export const useTaskItems = () => useContext(TaskContext);