import { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";

import SkillsList from "../Skills/SkillsList";
import { Container } from "react-bootstrap";
import { MdComputer } from "react-icons/md";
import apiUrlObject from '../../api.json';

const Skills = () => {
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
        <div className="section-title">
          <MdComputer className="cap" />

          <h1>
            Skills
          </h1>
          <p>
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
