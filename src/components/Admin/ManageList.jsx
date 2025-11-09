import {
  Container,
  Row,
  ButtonGroup,
  Button,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";

const ManageList = () => {
  const history = useHistory();

  const redirectHandler = (path) =>{
    history.push(path);
  };
  return (
    <section id="adminHome">
      <Container>
        <h1>Welcome back Kyle :)</h1>
        <h3>Manage Content</h3>
        <Row className="g-4">
          <ButtonGroup vertical>
            <Button variant="info" onClick={() => redirectHandler("/manage-projects")}>Manage Projects</Button>
            <Button variant="info" onClick={() => redirectHandler("/manage-skills")}>Manage Skills</Button>
            <Button variant="info" onClick={() => redirectHandler("/manage-work-experiences")}>Manage Work Experiences</Button>
            <Button variant="info" onClick={() => redirectHandler("/manage-messages")}>Manage Messages</Button>
          </ButtonGroup>
        </Row>
      </Container>
    </section>
  );
};

export default ManageList;
