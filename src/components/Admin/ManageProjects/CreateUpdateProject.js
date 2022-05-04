import { useContext } from "react";

import { Container, Breadcrumb, Alert} from "react-bootstrap";

import { Link } from "react-router-dom";

import useHttp from "../../../hooks/use-http";

import CreateUpdateProjectForm from "./CreateUpdateProjectForm";

import AuthContext from "../../../store/auth-context";
const CreateUpdateProject = (props) => {
  const authCtx = useContext(AuthContext);
  const { isLoading, error, sendRequest: sendProjectRequest } = useHttp();

  const sendProjectHandler = async (project) => {
    const detailImages = new Array(0);
    detailImages.push(project.detailImage1, project.detailImage2);

    sendProjectRequest({
      url: "https://localhost:7277/api/Projects",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authCtx.token}`
      },
      body: {
        title: project.title,
        summary: project.summary,
        description: project.description,
        thumbnailUrl: project.thumbnail,
        previewUrl: project.preview,
        demoUrl: project.demo,
        detailImagesUrl: detailImages,
        sourceCodeUrl: project.sourceCode,
        skillUsed: project.skills,
      },
    });
  };

  return (
    <section id="createProject">
      {error && <Alert variant="warning">Could not send request</Alert>} 
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/admin" }}>
            Admin
          </Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/manage-projects" }}>
            Manage Projects
          </Breadcrumb.Item>
          <Breadcrumb.Item active>CreateProject</Breadcrumb.Item>
        </Breadcrumb>

        <CreateUpdateProjectForm onSubmitProject={sendProjectHandler} projectLoading={isLoading} projectError={error}/>

      </Container>
    </section>
  );
};

export default CreateUpdateProject;
