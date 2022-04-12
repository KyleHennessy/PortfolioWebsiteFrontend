import { MdWork } from "react-icons/md";
import WorkExperienceList from "../WorkExperiences/WorkExperienceList";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";

const WorkExperiences = () => {
  // const DUMMY_JOBS = [
  //   {
  //     id: "j1",
  //     title: "Software Developer Intern",
  //     description:
  //       "My first job as a software developer in the industry. I worked with .NET Framework",
  //     dateStarted: "2020-03-01",
  //     dateEnded: "2020-09-01",
  //     currentJob: false,
  //   },
  //   {
  //     id: "j2",
  //     title: "Junior Software Developer",
  //     description:
  //       "I started this job directly after college as a graduate developer, but they were very happy with my performance and I was promoted to a junior developer after 6 months",
  //     dateStarted: "2021-06-01",
  //     dateEnded: null,
  //     currentJob: true,
  //   },
  // ];
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
      console.log(loadedWorkExperiences);
      setWorkExperiences(loadedWorkExperiences);
    };

    fetchWorkExperiences(
      { url: "https://localhost:7277/api/WorkExperiences" },
      transformWorkExperiences
    );
  }, [fetchWorkExperiences]);
  return (
    <section id="work-experience">
      <Container className="px-5 py-10 mx-auto">
        <div className="text-center">
          <MdWork className="w-10 inline-block mb-4 cap" />

          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
            Work Experience
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Here is all of my previous and current work experience as a Software
            Developer!
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
