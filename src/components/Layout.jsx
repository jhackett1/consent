import React from "react"
import { Link, NavLink } from "react-router-dom"
import userIcon from "../assets/user.svg"
import { useAuth } from "../contexts/authContext"
import TeamPicker from "../components/TeamPicker"
import { useParams } from "react-router-dom"

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

    const { teamId } = useParams()
    const { user, logOut } = useAuth()

    return(
        <>
            <a className="ct-skip-link" href="#main-content">
                Skip to main content
            </a>
            <div className="ct-layout"> 
                <nav className="ct-layout__sidebar">
                    <ul className="ct-menu">
                        <NavItem to={`/team/${teamId}/`}>Dashboard</NavItem>
                        <NavItem to={`/team/${teamId}/projects`}>Projects</NavItem>
                        <NavItem to={`/team/${teamId}/forms`}>Forms</NavItem>
                        <NavItem to={`/team/${teamId}/participants`}>Participants</NavItem>
                    </ul>

                    <div className="ct-user-card">
                        <img src={user.picture || userIcon} alt="" className="ct-user-card__icon"/>
                        <div className="ct-user-card__body">
                            <Link to={`/team/${teamId}/profile`} className="ct-user-card__username">{user.name}</Link>
                            <br/>
                            <TeamPicker/>
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