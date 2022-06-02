import { MdWork } from "react-icons/md";
import WorkExperienceList from "../WorkExperiences/WorkExperienceList";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";

const WorkExperiences = () => {
  const apiUrlObject = require('../../api.json');
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
      <Container className="px-5 py-10 mx-auto">
        <div className="text-center">
          <MdWork className="w-10 inline-block mb-4 cap" />

          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
            Work Experience
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Here is all of my previous and current work experiences as a Software
            Developer in the industry!
          </p>
          <WorkExperienceList
            workExperiences={workExperiences}
            loading={isLoading}
            error={error}
            onFetch={fetchWorkExperiences}
          />
        </div>
      </Container>
    </section>
  );
};

export default WorkExperiences;
