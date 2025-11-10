import React, { useEffect, useState } from "react";
import useHttp from '../../hooks/use-http';

import ProjectsList from "../Projects/ProjectsList";
import { AiOutlineHistory } from "react-icons/ai";
import { Container } from "react-bootstrap";
import apiUrlObject from '../../api.json';

const AllProjects = () => {
  const apiUrl = apiUrlObject.apiUrl;
  const apiKey = apiUrlObject.apiKey;

  const [projects, setProjects] = useState([]);

  const { isLoading, error, sendRequest: fetchProjects } = useHttp();

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
      { url: `${apiUrl}/api/Projects`, headers: {"Ocp-Apim-Subscription-Key": apiKey} },
      transformProjects
    );
  }, [fetchProjects, apiUrl, apiKey]);

  return (
    <section id="projects">
      <Container>
        <div className="section-title">
          <AiOutlineHistory className="cap" />

          <h1>
            Projects
          </h1>
          <p>
            All of the projects that I have worked on either in my spare
            time or as part of my education.<br/> 
            Click on any of them to find out more details!
          </p>
        </div>

        <ProjectsList
          projects={projects}
          loading={isLoading}
          error={error}
          onFetch={fetchProjects}
        />
      </Container>
    </section>
  );
};

export default AllProjects;
