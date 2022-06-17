import { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";

import SkillsList from "../Skills/SkillsList";
import { Container } from "react-bootstrap";
import { MdComputer } from "react-icons/md";

const Skills = () => {
  const apiUrlObject = require('../../api.json');
  const apiUrl = apiUrlObject.apiUrl
  const apiKey = apiUrlObject.apiKey;

  const [skills, setSkills] = useState([]);
  const { isLoading, error, sendRequest: fetchSkills } = useHttp();

  useEffect(() => {
    const transformSkills = (skillsObj) => {
      const loadedSkills = [];

      for (const skillKey in skillsObj) {
        loadedSkills.push({
          id: skillKey,
          title: skillsObj[skillKey].title,
        });
      }
      setSkills(loadedSkills);
    };

    fetchSkills({ url: `${apiUrl}/api/Skills`, headers: {"Ocp-Apim-Subscription-Key": apiKey} }, transformSkills);
  }, [fetchSkills, apiUrl, apiKey]);
  return (
    <section id="skills">
      <Container>
        <div className="text-center">
          <MdComputer className="w-10 inline-block mb-4 cap" />

          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
            Skills
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            These are the skills and technologies that I have learned and have experience developing with. <br/>
            I am always open to expanding my knowledge and adding more skills to my skill-set.
          </p>
        </div>
        <SkillsList
          skills={skills}
          loading={isLoading}
          error={error}
          onFetch={fetchSkills}
        />
      </Container>
    </section>
  );
};

export default Skills;
