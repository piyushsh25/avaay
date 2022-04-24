import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTaskItems } from "../../hooks/TaskContext";
import "../../styles/Pomodoro.css"
var timer;
export const PomodoroBody = () => { 
    //receive task via link
    const location = useLocation()
    const item = location.state;
    //desctructure the item
    const { description, name, numberOfCycles, time } = item;
    const inputTimeInSeconds = time * 60;


    //state for different values
    const [inputTime, setInputTime] = useState(inputTimeInSeconds)
    const [cycleCount, setCycleCount] = useState(0)
    const [cycleOver, setCycleOver] = useState(false)
    const [completeNotification, setCompleteNotification] = useState(false)




    // convert time to mins and sec
    const displayTimeInMinutes = Math.floor(inputTime / 60) < 10 ? `0${Math.floor(inputTime / 60)}` : Math.floor(inputTime / 60)
    const displayTimeInSeconds = inputTime % 60 < 10 ? `0${inputTime % 60}` : inputTime % 60

    //for delete and archive function
    const { state, dispatch } = useTaskItems();

    const startTimerHandler = () => {
        clearInterval(timer)
        timer = setInterval(() => {
            setInputTime((time) => time - 1);
        }, 1000);
    }
    const resetHandler = () => {
        clearInterval(timer)
        setInputTime(inputTimeInSeconds)
        if (cycleCount + 1 === numberOfCycles) {
            setCycleOver(true)
        }

    }
    const stopTimerHandler = () => {
        clearInterval(timer)
        setInputTime(inputTime)
    }
    const startOverHandler = () => {
        clearInterval(timer)
        setCycleOver(false)
        setCycleCount(0)
    }
    const navigate = useNavigate();
    const completeDeleteHandler = () => {
        navigate("/dashboard")
        dispatch({ type: "deleteTask", payload: item })
    }
    const archiveHandler = () => {
        dispatch({ type: "archiveTask", payload: item })
        navigate("/dashboard")
    }
    useEffect(() => {
        if (inputTime === 0) {
            clearInterval(timer)
            setCompleteNotification(true)
            setCycleCount(cycleCount + 1)
            resetHandler()
            setTimeout(() => {
                setCompleteNotification(false)
            }, 5000);
        }

    }, [inputTime])
    return <div className={`pomodoro-body ${state.darkMode ? "darkMode" : ""}`}>
        <div className="card text-overlay-card no-desc">
            <div className="text-div">
                <div className="h4 header-top">{name}</div>
                <div className="header-description">{description}</div>
                {completeNotification && <div className="toast-container">
                    <div className="toast success lg">
                        yayy!!  cycle {cycleCount}  completed
                    </div>
                </div>}

                <div>
                    <div className="header-bottom h3">{!cycleOver ? displayTimeInMinutes + ":" + displayTimeInSeconds : "Pomodoro Complete. :)"}</div>
                    {!cycleOver ? <ul>
                        <button className="button primary" onClick={startTimerHandler}>Start</button>
                        <button className="button error" onClick={stopTimerHandler}>pause</button>
                        <button className="button outline" onClick={resetHandler}>reset</button>
                    </ul> :
                        <ul>
                            <button className="button primary" onClick={startOverHandler}>Start Over</button>
                            <button className="button error" onClick={() => completeDeleteHandler()}>Delete</button>
                            <button className="button outline" onClick={() => archiveHandler()}>Archive</button>
                        </ul>}
                </div>
                <div>
                    <div className="cycle-count">total cycle:{numberOfCycles}</div>
                    <div className="cycle-count"> cycles completed:{cycleCount}</div>
                </div>

            </div>

        </div>


    </div>
}