import { useState, useEffect } from "react";
import {
  Button,
  Col,
  Container,
  Row,
  Breadcrumb,
  Alert,
} from "react-bootstrap";

import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom";

import useHttp from "../../../hooks/use-http";
import ManageProjectList from "./ManageProjectList";
import apiUrlObject from '../../../api.json';

const ManageProjects = () => {
  const apiUrl = apiUrlObject.apiUrl;
  const apiKey = apiUrlObject.apiKey;

  const [projects, setProjects] = useState([]);

  const { isLoading, error, sendRequest: fetchProjects } = useHttp();

  const history = useHistory();

  const redirectHandler = (path) => {
    history.push(path);
  };

  useEffect(() => {
    const transformProjects = (projectsObj) => {
      const loadedProjects = [];

      for (const projectKey in projectsObj) {
        loadedProjects.push({
          key: projectKey,
          id: projectsObj[projectKey].id,
          title: projectsObj[projectKey].title,
          summary: projectsObj[projectKey].summary,
          description: projectsObj[projectKey].description,
          thumbnailUrl: projectsObj[projectKey].thumbnailUrl,
          previewUrl: projectsObj[projectKey].previewUrl,
          demoUrl: projectsObj[projectKey].demoUrl,
          detailImagesUrl: projectsObj[projectKey].detailImagesUrl,
          sourceCodeUrl: projectsObj[projectKey].sourceCodeUrl,
          skillsUsed: projectsObj[projectKey].skillsUsed,
        });
      }
      setProjects(loadedProjects);
    };

    fetchProjects(
      { url: `${apiUrl}/api/Projects`, headers:{"Ocp-Apim-Subscription-Key": apiKey} },
      transformProjects
    );
  }, [fetchProjects, apiUrl, apiKey]);
  return (
    <section id="manageProjects">
      <Container className="px-5 py-10 mx-auto">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/admin" }}>
            Admin
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Manage Projects</Breadcrumb.Item>
        </Breadcrumb>
        <Button variant="info" onClick={() => redirectHandler("/create-update-project")}>
          Create New Project
        </Button>

        <Alert variant="secondary">
          Select a project from the list to modify the details
        </Alert>

        <Row>
          <Col>
            <ManageProjectList
              projects={projects}
              loading={isLoading}
              error={error}
              onFetch={fetchProjects}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ManageProjects;
