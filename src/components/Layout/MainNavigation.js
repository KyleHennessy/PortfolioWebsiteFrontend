import { Link } from "react-router-dom";

import classes from './MainNavigation.module.css';

const MainNavigation = () =>{
    return <header className={classes.header}>
        <div className={classes.logo}>Kyle Hennessy</div>
        <nav>
            <ul>
                <li>
                    <Link to='/' >Home</Link>
                </li>
                <li>
                    <Link to='/project-details'>Projects</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Me</Link>
                </li>
            </ul>
        </nav>
    </header>

}

export default MainNavigation;