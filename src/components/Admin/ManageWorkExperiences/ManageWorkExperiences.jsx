import { useEffect, useState } from "react";
import {
  Breadcrumb,
  Container,
  Button,
  Alert,
  Row,
  Col,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import useHttp from "../../../hooks/use-http";
import { Link } from "react-router-dom";
import ManageWorkExperienceList from "./ManageWorkExperienceList";
import apiUrlObject from '../../../api.json';

const ManageWorkExperiences = () => {
  const apiUrl = apiUrlObject.apiUrl;
  const apiKey = apiUrlObject.apiKey;

  const [workExperiences, setWorkExperiences] = useState([]);

  const { isLoading, error, sendRequest: fetchWorkExperiences } = useHttp();

  const history = useHistory();

  const redirectHandler = (path) => {
    history.push(path);
  };

  useEffect(() => {
    const transformWorkExperiences = (workExperienceObj) => {
      const loadedWorkExperiences = [];

      for (const workExperienceKey in workExperienceObj) {
        loadedWorkExperiences.push({
          key: workExperienceKey,
          id: workExperienceObj[workExperienceKey].id,
          title: workExperienceObj[workExperienceKey].title,
          description: workExperienceObj[workExperienceKey].description,
          dateStarted: workExperienceObj[workExperienceKey].dateStarted,
          dateEnded: workExperienceObj[workExperienceKey].dateEnded,
          skillsUsed: workExperienceObj[workExperienceKey].skillsUsed,
        });
      }

      setWorkExperiences(loadedWorkExperiences);
    };

    fetchWorkExperiences(
      { url: `${apiUrl}/api/WorkExperiences`, headers:{"Ocp-Apim-Subscription-Key": apiKey} },
      transformWorkExperiences
    );
  }, [fetchWorkExperiences, apiUrl, apiKey]);
  return (
    <section id="manageWorkExperiences">
      <Container className="px-5 py-10 mx-auto">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/admin" }}>
            Admin
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Manage Work Experiences</Breadcrumb.Item>
        </Breadcrumb>
        <Button onClick={() => redirectHandler("/create-update-work-experience")}>
          Create New Work Experience
        </Button>

        <Alert variant="secondary">
          Select a work experience from the list to modify the details
        </Alert>

        <Row>
          <Col>
            <ManageWorkExperienceList
              workExperiences={workExperiences}
              loading={isLoading}
              error={error}
              onFetch={fetchWorkExperiences}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ManageWorkExperiences;
