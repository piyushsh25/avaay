import { NavLink,Link } from "react-router-dom"
export const HomeNavbar=()=>{
    const isActiveHandler = ({ isActive }) => ({
        margin: "1rem 0",
        color: isActive ? "red" : "black",
        textDecoration: "none",

    })
    return <div class="nav-container">
    <div class="header">
        <div class="title">
            avaay
        </div>
        </div>
        <div>
            <ul class="text links">
                <li class="items">  <NavLink style={isActiveHandler} to="/about-us" >
                    Github
                </NavLink></li>
                <li class="items">   <NavLink style={isActiveHandler} to="/services">
                    About-us
                </NavLink></li>
                <li class="items"> <NavLink style={isActiveHandler} to="/reviewsss">
                    DarkMode
                </NavLink></li>
            </ul>
      
        </div>
    </div>

}