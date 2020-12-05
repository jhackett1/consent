import React from "react"
import { NavLink } from "react-router-dom"
import userIcon from "./user.svg"
import { useAuth } from "../contexts/authContext"

const NavItem = ({ to, children }) =>
    <li>
        <NavLink 
            exact 
            to={to} 
            className="ct-menu__nav-link" 
            activeClassName="ct-menu__nav-link--active"
        >
            {children}
        </NavLink>
    </li>

const Layout = ({
    children
}) => {

    const { user, logOut } = useAuth()

    return(
        <>
            <a className="ct-skip-link" href="#main-content">
                Skip to main content
            </a>
            <div className="ct-layout"> 
                <nav className="ct-layout__sidebar">
                    <ul className="ct-menu">
                        <NavItem to="/">Dashboard</NavItem>
                        <NavItem to="/projects">Projects</NavItem>
                        <NavItem to="/forms">Forms</NavItem>
                        <NavItem to="/participants">Participants</NavItem>
                    </ul>
                    <div className="ct-user-card">
                        <img src={user.picture || userIcon} alt="" className="ct-user-card__icon"/>
                        <div className="ct-user-card__body">
                            <p className="ct-user-card__username">{user.name}</p>
                            <button onClick={logOut} className="ct-user-card__action">Sign out</button>
                        </div>
                    </div>
                </nav>
                <main className="ct-layout__main-content" role="main" id="main-content">
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout