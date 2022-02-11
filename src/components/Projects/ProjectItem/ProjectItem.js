import classes from './ProjectItem.module.css';

const ProjectItem = (props) =>{
    return(
        <li className={classes.project}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
            </div>
        </li>
    );
};

export default ProjectItem;