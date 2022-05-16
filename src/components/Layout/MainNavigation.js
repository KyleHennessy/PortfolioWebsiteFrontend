import { Button } from "react-bootstrap";
import { useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../store/auth-context";

import classes from './MainNavigation.module.css';

const MainNavigation = () =>{
    const authCtx = useContext(AuthContext);

    const isLoggedIn = authCtx.isLoggedIn;

    const logoutHandler = () =>  {
        authCtx.logout();
    }

    return <header className={classes.header}>
        <div className={classes.logo}>Kyle Hennessy</div>
        <nav>
            <ul>
                <li>
                    <Link to='/' onClick={() => window.scrollTo(0, 0)}>Home</Link>
                </li>
                <li>
                    <Link to='/' onClick={() => window.scrollTo(0, 375)}>Projects</Link>
                </li>
                <li>
                    <Link to="/" onClick={() => window.scrollTo(0, 1100)}>Skills</Link>
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