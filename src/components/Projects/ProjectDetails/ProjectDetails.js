import { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import useHttp from "../../../hooks/use-http";
import ProjectsList from "../ProjectsList";
import ProjectDetailContent from "./ProjectDetailContent";

const ProjectDetails = () => {
  const params = useParams();

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

  console.log(projectDetails);
  return (
    <section id="projectDetails">
      <Container className="px-5 py-10 mx-auto">

        <ProjectDetailContent
          title={projectDetails.title}
          description={projectDetails.description}
          demoUrl={projectDetails.demoUrl}
          detailImagesUrl={projectDetails.detailImagesUrl}
          sourceCodeUrl={projectDetails.sourceCodeUrl}
          skillsUsed={projectDetails.skillsUsed}
        />
      </Container>
    </section>
  );
};

export default ProjectDetails;
