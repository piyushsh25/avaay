import { useTaskItems } from "../../hooks/TaskContext"
export const InputForm = () => {

    const { state, dispatch } = useTaskItems();
    return <div className="form">
        {!state.showButton && <button className="button icon" onClick={() => dispatch({ type: "addTaskButton" })}>Add task</button>}
        {state.showButton &&
            <div className="input-icon">
                <input value={state.name} placeholder="task name" className="input" onChange={((e) => dispatch({ type: "name", payload: e }))} />
                <input value={state.description} placeholder="task description " className="input" onChange={((e) => dispatch({ type: "description", payload: e }))} />
                <input type="number" value={state.time} placeholder="time {in minutes} " className="input" onChange={((e) => dispatch({ type: "time", payload: e }))} />
                <div>* task name and description shoudld have minimum 10 and 20 characters respectively. </div>
                <button disabled={(state.name.length >= 10 && state.description.length >= 20 && state.time >= 1) ? !state.formInValid : state.formInValid} className="button" onClick={() => dispatch({ type: "submit" })}>Submit</button>
            </div>
        }
    </div>
}