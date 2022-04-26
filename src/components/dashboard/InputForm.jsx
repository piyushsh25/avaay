import { useTaskItems } from "../../hooks/TaskContext"
import "../../styles/dashboard.css"
export const InputForm = () => {
    const { state, dispatch } = useTaskItems();
    return <div className="form">
        {state.showButton?
            <div className="input-icon">
                <input value={state.name} placeholder="task name" className="input" onChange={((e) => dispatch({ type: "name", payload: e.target.value }))} />
                <input value={state.description} placeholder="task description " className="input" onChange={((e) => dispatch({ type: "description", payload: e.target.value }))} />
                <input type="number" value={state.time} placeholder="time {in minutes} " className="input" onChange={((e) => dispatch({ type: "time", payload: e.target.value }))} />
                <input type="number" value={state.numberOfCycles} placeholder="number of cycles" className="input" onChange={((e) => dispatch({ type: "cycleNumber", payload: e.target.value }))} />
                <div>* task name and description shoudld have minimum 10 and 20 characters respectively.minimum 2 cycles </div>
                <div>
                    <button disabled={(state.name.split(" ").join("").length >= 10 && state.description.split(" ").join("").length >= 20 && state.time >= 1 && state.numberOfCycles>=2) ? !state.formInValid : state.formInValid} className="button" onClick={() => dispatch({ type: "submit" })}>Submit</button>
                    <button className={`button outline ${state.darkMode ? "darkMode" : ""}`} onClick={() => dispatch({ type: "hideForm" })}>Cancel</button>
                </div>
            </div>
            :
            <button className="button icon" onClick={() => dispatch({ type: "addTaskButton" })}>Add task</button>

        }
    </div>
}