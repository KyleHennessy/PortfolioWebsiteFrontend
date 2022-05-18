import { Button } from "react-bootstrap";
import { useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../store/auth-context";

import classes from './MainNavigation.module.css';
import { useLocation } from "react-router-dom";

const MainNavigation = () =>{
    const authCtx = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    const isLoggedIn = authCtx.isLoggedIn;

    const logoutHandler = () =>  {
        authCtx.logout();
    }

    return <header className={classes.header}>
        <div className={classes.logo}>Kyle Hennessy</div>
        <nav>
            <ul>
                <li>
                    {location.pathname === '/' && <p className={classes.link} onClick={() => window.scrollTo(0, 0)}>Home</p>}
                    {location.pathname !== '/' && <Link to='/' onClick={() => window.scrollTo(0, 0)}>Home</Link>}
                </li>
                <li>
                    {location.pathname === '/' && <p className={classes.link} onClick={() => window.scrollTo(0, 375)}>Projects</p>}
                    {location.pathname !== '/' && <Link to='/' onClick={() => window.scrollTo(0, 375)}>Projects</Link>}
                </li>
                <li>
                    {location.pathname === '/' && <p className={classes.link} onClick={() => window.scrollTo(0, 1100)}>Skills</p>}
                    {location.pathname !== '/' && <Link to="/" onClick={() => window.scrollTo(0, 1100)}>Skills</Link>}
                </li>
                {isLoggedIn && (
                    <li>
                        <Button variant="danger" onClick={logoutHandler}>Logout</Button>
                    </li>
                )}
            </ul>
        </nav>
    </header>

}

export default MainNavigation;