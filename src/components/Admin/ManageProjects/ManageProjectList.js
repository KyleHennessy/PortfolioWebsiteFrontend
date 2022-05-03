import { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import { useHistory } from "react-router-dom";

import useHttp from "../../../hooks/use-http";
import ProjectsList from "../../Projects/ProjectsList";

const ManageProjectList = () => {
  const [projects, setProjects] = useState([]);

  const { isLoading, error, sendRequest: fetchProjects } = useHttp();

  const history = useHistory();

  const redirectHandler = (path) =>{
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
      { url: "https://localhost:7277/api/Projects" },
      transformProjects
    );
  }, [fetchProjects]);
  return (
    <section id="manageProjects">
      <Container className="px-5 py-10 mx-auto">
        <Button onClick={() => redirectHandler("/create-update-project")}>Create New Project</Button>
        
        <Row>
          <h3>Select a project from the list to modify the details</h3>
          <Col>
            <ProjectsList
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

export default ManageProjectList;
