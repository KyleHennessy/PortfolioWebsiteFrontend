import Card from "../../UI/Card";
import classes from "./ProjectItem.module.css";

const ProjectItem = (props) => {
  return (
    <li className={classes.project}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button>Learn more</button>
        </div>
        {console.log(props.description)}
      </Card>
    </li>
  );
};

export default ProjectItem;
