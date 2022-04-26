import { Button } from "react-bootstrap";
import { useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../store/auth-context";

import classes from './MainNavigation.module.css';

const MainNavigation = () =>{
    const authCtx = useContext(AuthContext);

    const isLoggedIn = authCtx.isLoggedIn;

    return <header className={classes.header}>
        <div className={classes.logo}>Kyle Hennessy</div>
        <nav>
            <ul>
                <li>
                    <Link to='/' >Home</Link>
                </li>
                <li>
                    <Link to='/'>Projects</Link>
                </li>
                <li>
                    <Link to="/">Contact Me</Link>
                </li>
                {isLoggedIn && (
                    <li>
                        <Button variant="danger">Logout</Button>
                    </li>
                )}
            </ul>
        </nav>
    </header>

}

export default MainNavigation;