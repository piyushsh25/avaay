import { NavLink, Link } from "react-router-dom"
import { useTaskItems } from "../../hooks/TaskContext"
import "../../styles/landing-page.css"
export const HomeNavbar = () => {
    const {state,dispatch}=useTaskItems();
    const isActiveHandler = ({ isActive }) => ({
        margin: "1rem 0",
        color: isActive ? "red" : "",
        textDecoration: "none",
    })
    return <nav className={state.darkMode?"nav-container darkMode":"nav-container lightMode"}>
        <div className="header">
            <div className="title">
                avaay
            </div>
        </div>
        <div>
            <ul className={state.darkMode?"text links darkMode":"text links"}>
                <li className="items">  <NavLink style={isActiveHandler} to="/about-us" >
                    Github
                </NavLink></li>
                <li className="items">   <NavLink style={isActiveHandler} to="/services">
                    About-us
                </NavLink></li>
                <li className="items" onClick={()=>dispatch({type:"darkThemeHandler"})}>
                    {state.darkMode ? <i class={"lni lni-bulb"}></i> :
                    <i class="fas fa-lightbulb"></i>}
                </li>

            </ul>

        </div>
    </nav>

}