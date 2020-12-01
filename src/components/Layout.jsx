import React from "react"
import { AuthConsumer } from "../contexts/authContext"
import { NavLink } from "react-router-dom"
import userIcon from "./user.svg"

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
    user,
    logOut,
    children
}) => 
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
                    <img src={userIcon} alt="" className="ct-user-card__icon"/>
                    <div className="ct-user-card__body">
                        <p className="ct-user-card__username">{user.name}</p>
                        <button onClick={logOut} className="ct-user-card__action">Log out</button>
                    </div>
                </div>
            </nav>
            <main className="ct-layout__main-content" role="main" id="main-content">
                {children}
            </main>
        </div>
    </>

export default props =>
    <AuthConsumer>
        {authContext => 
            <Layout {...props} {...authContext}/>
        }
    </AuthConsumer>