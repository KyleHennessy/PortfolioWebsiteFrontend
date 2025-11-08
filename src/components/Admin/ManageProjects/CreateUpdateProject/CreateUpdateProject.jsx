import { useContext, useEffect } from "react";
import { Container, Breadcrumb, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import useHttp from "../../../../hooks/use-http";
import CreateUpdateProjectForm from "./CreateUpdateProjectForm";
import AuthContext from "../../../../store/auth-context";
import { useParams } from "react-router-dom";
import { useState } from "react";
import apiUrlObject from '../../../../api.json';

const CreateUpdateProject = () => {
  const apiUrl = apiUrlObject.apiUrl;
  const apiKey = apiUrlObject.apiKey;

  const params = useParams();

  const authCtx = useContext(AuthContext);

  const { isLoading, error, sendRequest: sendProjectRequest } = useHttp();

  const { sendRequest: getProjectRequest } = useHttp();

  const [loadedProject, setLoadedProject] = useState(null);

  useEffect(() => {
    if (params.id) {
      const transformProject = (projectObj) => {
        const loadedProject = {
          id: projectObj.id,
          title: projectObj.title,
          summary: projectObj.summary,
          description: projectObj.description,
          thumbnailUrl: projectObj.thumbnailUrl,
          previewUrl: projectObj.previewUrl,
          demoUrl: projectObj.demoUrl,
          detailImagesUrl: projectObj.detailImagesUrl,
          sourceCodeUrl: projectObj.sourceCodeUrl,
          skillsUsed: projectObj.skillsUsed,
        };

        setLoadedProject(loadedProject);
      };

      getProjectRequest(
        { url: `${apiUrl}/api/Projects/${params.id}`, headers:{"Ocp-Apim-Subscription-Key": apiKey} },
        transformProject
      );
    }
  }, [getProjectRequest, params.id, apiUrl, apiKey]);

  const sendProjectHandler = async (project) => {
    const detailImages = new Array(0);
    detailImages.push(project.detailImage1, project.detailImage2);
    let requestUrl;
    let method;
    let body;
    if (params.id) {
      requestUrl = `${apiUrl}/api/Projects/${params.id}`;
      method = "PUT";
      body = {
        id: params.id,
        title: project.title,
        summary: project.summary,
        description: project.description,
        thumbnailUrl: project.thumbnail,
        previewUrl: project.preview,
        demoUrl: project.demo,
        detailImagesUrl: detailImages,
        sourceCodeUrl: project.sourceCode,
        skillsUsed: project.skills,
      };
    } else {
      requestUrl = `${apiUrl}/api/Projects`;
      method = "POST";
      body = {
        title: project.title,
        summary: project.summary,
        description: project.description,
        thumbnailUrl: project.thumbnail,
        previewUrl: project.preview,
        demoUrl: project.demo,
        detailImagesUrl: detailImages,
        sourceCodeUrl: project.sourceCode,
        skillsUsed: project.skills,
      };
    }

    sendProjectRequest({
      url: requestUrl,
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authCtx.token}`,
        "Ocp-Apim-Subscription-Key": apiKey
      },
      body: body,
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
          <Breadcrumb.Item active>Create Project</Breadcrumb.Item>
        </Breadcrumb>

        <CreateUpdateProjectForm
          onSubmitProject={sendProjectHandler}
          projectLoading={isLoading}
          projectError={error}
          loadedProject={loadedProject}
        />
      </Container>
    </section>
  );
};

export default CreateUpdateProject;
