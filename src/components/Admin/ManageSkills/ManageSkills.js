import { useEffect, useState } from "react";
import {
  Breadcrumb,
  Container,
  Button,
  Row,
  Col,
  Alert,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import useHttp from "../../../hooks/use-http";
import SkillsList from "../../Skills/SkillsList";

const ManageSkills = () => {
  const [skills, setSkills] = useState([]);

  const { isLoading, error, sendRequest: fetchSkills } = useHttp();

  const history = useHistory();

  const redirectHandler = (path) => {
    history.push(path);
  };

  useEffect(() => {
    const transformSkills = (skillsObj) => {
      const loadedSkills = [];

      for (const skillKey in skillsObj) {
        loadedSkills.push({
          key: skillKey,
          id: skillsObj[skillKey].id,
          title: skillsObj[skillKey].title,
        });
      }
      setSkills(loadedSkills);
    };

    fetchSkills({ url: "https://localhost:7277/api/Skills" }, transformSkills);
  }, [fetchSkills]);

  return (
    <section id="manageSkills">
      <Container className="px-5 py-10 mx-auto">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/admin" }}>
            Admin
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Manage Skills</Breadcrumb.Item>
        </Breadcrumb>
        <Button onClick={() => redirectHandler("/create-skill")}>
          Create New Skill
        </Button>

        <Alert variant="secondary">
          Here is the list of skills currently available
        </Alert>

        <Row>
          <Col>
            <SkillsList
              skills={skills}
              loading={isLoading}
              error={error}
              onFetch={fetchSkills}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ManageSkills;
