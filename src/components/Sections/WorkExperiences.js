import { MdWork } from "react-icons/md";
import WorkExperienceList from "../WorkExperiences/WorkExperienceList";
import { Container } from "react-bootstrap";

const WorkExperiences = () => {
  const DUMMY_JOBS = [
    {
      id: "j1",
      title: "Software Developer Intern",
      description:
        "My first job as a software developer in the industry. I worked with .NET Framework",
      dateStarted: new Date("2020-03-01"),
      currentJob: false,
    },
    {
      id: "j2",
      title: "Junior Software Developer",
      description:
        "I started this job directly after college as a graduate developer, but they were very happy with my performance and I was promoted to a junior developer after 6 months",
      dateStarted: new Date("2021-06-01"),
      currentJob: true,
    },
  ];
  return (
    <section id="work-experience">
      <Container className="px-5 py-10 mx-auto">
        <div className="text-center">
          <MdWork className="w-10 inline-block mb-4 cap" />

          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
            Work Experience
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
          <WorkExperienceList workExperiences={DUMMY_JOBS} />
        </div>
      </Container>
      {/* {console.log(DUMMY_JOBS)} */}
      {/* <h1>All Work Experiences</h1>
      <p>
        Here is all of the projects that I have worked on either in my spare
        time
        <br />
        Or as part of my education
      </p> */}
    </section>
  );
};

export default WorkExperiences;
