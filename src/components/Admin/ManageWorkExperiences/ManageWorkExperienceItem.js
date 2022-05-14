import { useContext } from "react";
import { Card, Row, Col, Button, ButtonGroup, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import useHttp from "../../../hooks/use-http";
import AuthContext from "../../../store/auth-context";

import classes from "./ManageWorkExperienceItem.module.css";

const ManageWorkExperienceItem = (props) => {
  const authCtx = useContext(AuthContext);

  const { isLoading, sendRequest: deleteWorkExperienceRequest } = useHttp();

  const history = useHistory();
  const redirectHandler = (path) => {
    history.push(path);
  };

  const deleteHandler = async (id) => {
    console.log("DELETED");
    deleteWorkExperienceRequest({
      url: `https://localhost:7277/api/WorkExperiences/${id}`,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authCtx.token}`
      },
    });

    if(!isLoading){
      history.go(0);
    }
  }

  const startDate = new Date(props.dateStarted);
  const endDate =
    props.dateEnded === null ? "Present" : new Date(props.dateEnded);

  return (
    <Card className={classes.card}>
      <Card.Header>{props.title}</Card.Header>
      <Card.Body className="d-flex flex-column">
        <Card.Text>{props.description}</Card.Text>
        {props.skillsUsed && (
          <div className="mt-auto">
            <h4>Skills used:</h4>
            <Row xs={2} md={3} className="g-4">
              {props.skillsUsed.map((skill) => (
                <Col xs key={skill.id}>
                  <Card>{skill.title}</Card>
                </Col>
              ))}
            </Row>
          </div>
        )}
      </Card.Body>

      {endDate instanceof Date && (
        <Card.Footer>
          {startDate.toLocaleString("default", { month: "long" })}{" "}
          {startDate.getFullYear().toString()} &#8212;{" "}
          {endDate.toLocaleString("default", { month: "long" })}{" "}
          {endDate.getFullYear().toString()}
        </Card.Footer>
      )}
      {typeof endDate === "string" && (
        <Card.Footer>
          {startDate.toLocaleString("default", { month: "long" })}{" "}
          {startDate.getFullYear().toString()} &#8212; {endDate}
        </Card.Footer>
      )}
      <ButtonGroup>
        <Button onClick={() => redirectHandler(`/create-update-work-experience/${props.id}`)}>Update</Button>
        {isLoading ? (<Spinner animation="border" role="status"/>) : (<Button variant="danger" onClick={() => deleteHandler(props.id)}>Delete</Button>) }
      </ButtonGroup>
    </Card>
  );
};

export default ManageWorkExperienceItem;
