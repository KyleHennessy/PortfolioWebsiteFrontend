import { useContext, useEffect } from "react";

import { Container, Breadcrumb, Alert } from "react-bootstrap";

import { Link } from "react-router-dom";

import useHttp from "../../../hooks/use-http";

import CreateUpdateProjectForm from "./CreateUpdateProjectForm";

import AuthContext from "../../../store/auth-context";

import { useParams } from "react-router-dom";

import { useState } from "react";

const CreateUpdateProject = (props) => {
  const params = useParams();

  const authCtx = useContext(AuthContext);

  const { isLoading, error, sendRequest: sendProjectRequest } = useHttp();

  const { sendRequest: getProjectRequest } = useHttp();

  const [loadedProject, setLoadedProject] = useState(null);

  // const [projectLoading, setProjectLoading] = useState(false);
  // const [projectError, setProjectError] = useState(null);

  // const loadedProject = useCallback(async(requestConfig, applyData) => {
  //   setProjectLoading(true);
  //   setProjectError(null);
  //   try{
  //       const response = await fetch(requestConfig.url, {
  //           method: requestConfig.method ? requestConfig.method : 'GET',
  //           headers: requestConfig.headers ? requestConfig.headers : {},
  //           body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
  //       });

  //       if(!response.ok){
  //           throw new Error('Request failed!');
  //       }

  //       const data = await response.json();
  //       applyData(data);
  //   } catch(err){
  //     setProjectError(err.message || 'Something went wrong!');
  //   }
  //   setProjectLoading(false);
  // }, []);

  useEffect(() => {
    if(params.id){
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
        { url: `https://localhost:7277/api/Projects/${params.id}` },
        transformProject
      );
    }
    
  }, [getProjectRequest, params.id]);

  const sendProjectHandler = async (project) => {
    const detailImages = new Array(0);
    detailImages.push(project.detailImage1, project.detailImage2);
    let requestUrl;
    if(params.id){
      requestUrl = `https://localhost:7277/api/Projects/${params.id}`;
    }else{
      requestUrl = "https://localhost:7277/api/Projects";
    }

    sendProjectRequest({
      url: requestUrl,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authCtx.token}`,
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
        skillsUsed: project.skills,
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
