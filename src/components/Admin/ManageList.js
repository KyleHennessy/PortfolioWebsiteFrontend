import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import classes from "../Admin/ManageList.module.css";

const ManageList = () => {
  return (
    <section id="adminHome">
      
      <Container>
      <h2>Welcome back Kyle :)</h2>
        <Row xs={1} md={2} className="g-4">
          <Col xs key={Math.random()}>
            <Link to="/manage-projects">
              <Card className={classes.manage}>
                <Card.Img
                  src={require("../../assets/project.png")}
                  height={256}
                />
                <Card.Footer>
                  <Card.Text>Manage Projects</Card.Text>
                </Card.Footer>
              </Card>
            </Link>
          </Col>

          <Col xs key={Math.random()}>
            <Link to="/manage-skills">
              <Card className={classes.manage}>
                <Card.Img
                  src={require("../../assets/skill.png")}
                  height={256}
                />
                <Card.Footer>
                  <Card.Text>Manage Sklls</Card.Text>
                </Card.Footer>
              </Card>
            </Link>
          </Col>

          <Col xs key={Math.random()}>
            <Link to="/manage-work-experiences">
              <Card className={classes.manage}>
                <Card.Img src={require("../../assets/job.png")} height={256} />
                <Card.Footer>
                  <Card.Text>Manage Work Experiences</Card.Text>
                </Card.Footer>
              </Card>
            </Link>
          </Col>

          <Col xs key={Math.random()}>
            <Link to="/manage-messages">
              <Card className={classes.manage}>
                <Card.Img
                  src={require("../../assets/message.png")}
                  height={256}
                />
                <Card.Footer>
                  <Card.Text>Manage Messages</Card.Text>
                </Card.Footer>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ManageList;
