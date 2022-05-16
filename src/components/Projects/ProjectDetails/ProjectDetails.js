import { useEffect, useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { useParams, useLocation } from "react-router-dom";
import useHttp from "../../../hooks/use-http";
import PlaceholderCard from "../../UI/PlaceholderCard";
import ProjectDetailContent from "./ProjectDetailContent";

const ProjectDetails = () => {
  const params = useParams();
  const location = useLocation();

  const [projectDetails, setProjectDetails] = useState({});

  const { isLoading, error, sendRequest: fetchProjectDetails } = useHttp();

  useEffect(() => {
    const transformProject = (projectObj) => {
      const loadedProject = {
        id: projectObj.id,
        title: projectObj.title,
        description: projectObj.description,
        demoUrl: projectObj.demoUrl,
        detailImagesUrl: projectObj.detailImagesUrl,
        sourceCodeUrl: projectObj.sourceCodeUrl,
        skillsUsed: projectObj.skillsUsed,
      };

      setProjectDetails(loadedProject);
    };

    fetchProjectDetails(
      { url: `https://localhost:7277/api/Projects/${params.id}` },
      transformProject
    );
  }, [fetchProjectDetails, params.id]);

  useEffect(() => {
    window.scrollTo(0,0);
  }, [location]);

  return (
    <section id="projectDetails">
      {error && (
        <Alert variant="warning">
          Details for this project could not be found. Please try again later
        </Alert>
      )}
      
      <Container className="px-5 py-10 mx-auto">
      {isLoading && (<PlaceholderCard isSkill={false}/>)}
      {!error && !isLoading && (
        
          <ProjectDetailContent
            title={projectDetails.title}
            description={projectDetails.description}
            demoUrl={projectDetails.demoUrl}
            detailImagesUrl={projectDetails.detailImagesUrl}
            sourceCodeUrl={projectDetails.sourceCodeUrl}
            skillsUsed={projectDetails.skillsUsed}
          />
        
      )}
      </Container>
    </section>
  );
};

export default ProjectDetails;
