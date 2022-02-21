import { Container } from "react-bootstrap";
import { MdComputer } from "react-icons/md";

import SkillsList from "../Skills/SkillsList";
const Skills = () => {
  const DUMMY_SKILLS = [
    {
      id: "s1",
      title: ".NET",
    },
    {
      id: "s2",
      title: "React",
    },
    {
      id: "s3",
      title: "SQL",
    },
    {
      id: "s4",
      title: "Microsoft Azure",
    },
    {
      id: "s5",
      title: "Python",
    },
    {
        id:"s6",
        title:"TypeScript"
    },
  ];

  return (
    <section id="skills">
      <Container className="px-5 py-10 mx-auto">
        <div className="text-center">
          <MdComputer className="w-10 inline-block mb-4 cap" />

          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
            Skills
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            These are the skills and technologies that I have actively used in the past. I am always open to learning more to open my mind and expand my skillset.
          </p>
        </div>
        <SkillsList skills={DUMMY_SKILLS} />
      </Container>
    </section>
  );
};

export default Skills;
