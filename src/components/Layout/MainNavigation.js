import { Link } from "react-router-dom";

import classes from './MainNavigation.module.css';

const MainNavigation = () =>{
    return <header className={classes.header}>
        <div className={classes.logo}>Kyle Hennessy</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Projects</Link>
                </li>
                <li>
                    <Link to='/about-me'>About Me</Link>
                </li>
            </ul>
        </nav>
    </header>

}

export default MainNavigation;