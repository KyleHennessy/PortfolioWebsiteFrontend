import { useContext, useEffect, useState } from "react";
import { Alert, Breadcrumb, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useHttp from "../../../../hooks/use-http";
import AuthContext from "../../../../store/auth-context";
import { Link } from "react-router-dom";
import CreateUpdateWorkExperienceForm from "./CreateUpdateWorkExperienceForm";
import apiUrlObject from '../../../../api.json';

const CreateUpdateWorkExperience = () => {
  const apiUrl = apiUrlObject.apiUrl;
  const apiKey = apiUrlObject.apiKey;

  const params = useParams();

  const authCtx = useContext(AuthContext);

  const {
    isLoading,
    error,
    sendRequest: sendWorkExperienceRequest,
  } = useHttp();

  const { sendRequest: getWorkExperienceRequest } = useHttp();

  const [loadedWorkExperience, setLoadedWorkExperience] = useState(null);

  useEffect(() => {
    if (params.id) {
      const transformWorkExperience = (workExperienceObj) => {
        const loadedWorkExperience = {
          id: workExperienceObj.id,
          title: workExperienceObj.title,
          description: workExperienceObj.description,
          dateStarted: workExperienceObj.dateStarted,
          dateEnded: workExperienceObj.dateEnded,
          skillsUsed: workExperienceObj.skillsUsed,
        };

        setLoadedWorkExperience(loadedWorkExperience);
      };

      getWorkExperienceRequest(
        { url: `${apiUrl}/api/WorkExperiences/${params.id}`, headers:{"Ocp-Apim-Subscription-Key": apiKey} },
        transformWorkExperience
      );
    }
  }, [getWorkExperienceRequest, params.id, apiUrl, apiKey]);

  const sendWorkExperienceHandler = async (workExperience) => {
    let requestUrl;
    let method;
    let body;
    if (params.id) {
      requestUrl = `${apiUrl}/api/WorkExperiences/${params.id}`;
      method = "PUT";
      body = {
        id: params.id,
        title: workExperience.title,
        description: workExperience.description,
        dateStarted: workExperience.dateStarted,
        dateEnded: workExperience.dateEnded,
        skillsUsed: workExperience.skills,
      };
    } else {
      requestUrl = `${apiUrl}/api/WorkExperiences/`;
      method = "POST";
      body = {
        title: workExperience.title,
        description: workExperience.description,
        dateStarted: workExperience.dateStarted,
        dateEnded: workExperience.dateEnded,
        skillsUsed: workExperience.skills,
      };
    }

    sendWorkExperienceRequest({
      url: requestUrl,
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authCtx.token}`,
        "Ocp-Apim-Subscription-Key": apiKey
      },
      body: body,
    });
  };

  return (
    <section id="createWorkExperience">
      {error && <Alert variant="warning">Could not send request</Alert>}
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/admin" }}>
            Admin
          </Breadcrumb.Item>
          <Breadcrumb.Item
            linkAs={Link}
            linkProps={{ to: "/manage-work-experiences" }}
          >
            Manage Work Experiences
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Create Work Experience</Breadcrumb.Item>
        </Breadcrumb>

        <CreateUpdateWorkExperienceForm
          onSubmitWorkExperience={sendWorkExperienceHandler}
          workExperienceLoading={isLoading}
          workExperienceError={error}
          loadedWorkExperience={loadedWorkExperience}
        />
      </Container>
    </section>
  );
};

export default CreateUpdateWorkExperience;
