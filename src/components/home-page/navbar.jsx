import { NavLink,Link } from "react-router-dom"
import "../../styles/landing-page.css"
export const HomeNavbar=()=>{
    const isActiveHandler = ({ isActive }) => ({
        margin: "1rem 0",
        color: isActive ? "red" : "black",
        textDecoration: "none",

    })
    return <div className="nav-container">
    <div className="header">
        <div className="title">
            avaay
        </div>
        </div>
        <div>
            <ul className="text links">
                <li className="items">  <NavLink style={isActiveHandler} to="/about-us" >
                    Github
                </NavLink></li>
                <li className="items">   <NavLink style={isActiveHandler} to="/services">
                    About-us
                </NavLink></li>
                <li className="items"> <NavLink style={isActiveHandler} to="/reviewsss">
                    DarkMode
                </NavLink></li>
            </ul>
      
        </div>
    </div>

}