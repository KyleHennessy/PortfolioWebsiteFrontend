import { MdWork } from "react-icons/md";
import WorkExperienceList from "../WorkExperiences/WorkExperienceList";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
import apiUrlObject from '../../api.json';

const WorkExperiences = () => {
  const apiUrl = apiUrlObject.apiUrl;
  const apiKey = apiUrlObject.apiKey;
  
  const [workExperiences, setWorkExperiences] = useState([]);

  const { isLoading, error, sendRequest: fetchWorkExperiences } = useHttp();

  useEffect(() => {
    const transformWorkExperiences = (workExperienceObj) => {
      const loadedWorkExperiences = [];

      for (const workExperienceKey in workExperienceObj) {
        loadedWorkExperiences.push({
          id: workExperienceKey,
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
      { url: `${apiUrl}/api/WorkExperiences`, headers: {"Ocp-Apim-Subscription-Key": apiKey} },
      transformWorkExperiences
    );
  }, [fetchWorkExperiences, apiUrl, apiKey]);
  return (
    <section id="work-experience">
      <Container>
        <div className="section-title">
          <MdWork className="cap" />

          <h1>
            Work Experience
          </h1>
          <p>
            My previous experiences as a Software Engineer in the industry!
          </p>
        </div>
        <WorkExperienceList
          workExperiences={workExperiences}
          loading={isLoading}
          error={error}
          onFetch={fetchWorkExperiences}
        />
      </Container>
    </section>
  );
};

export default WorkExperiences;
