import { useContext } from "react";
import { Breadcrumb, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthContext from "../../../../store/auth-context";
import CreateSkillForm from "./CreateSkillForm";
import useHttp from "../../../../hooks/use-http";

const CreateSkill = () => {
  const authCtx = useContext(AuthContext);

  const { isLoading, error, sendRequest: sendSkillRequest } = useHttp();

  const sendSkillHandler = async (skill) => {
    sendSkillRequest({
      url: "https://localhost:7277/api/Skills",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authCtx.token}`,
      },
      body: {
        title: skill.title,
      },
    });
  };
  return (
    <section id="createSkill">
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/admin" }}>
            Admin
          </Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/manage-skills" }}>
            Manage Skills
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Create Skill</Breadcrumb.Item>
        </Breadcrumb>

        <CreateSkillForm
          onSubmitSkill={sendSkillHandler}
          loading={isLoading}
          error={error}
        />
      </Container>
    </section>
  );
};

export default CreateSkill;
