import { Button, Col, Container, Row } from "react-bootstrap";
import programingImage from "../../assets/programing.png";
import classes from "./About.module.css";

const About = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToExperience = () => {
    const experienceSection = document.getElementById("work-experience");
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className={classes.about}>
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={12}>
            <div className={classes.content}>
              <h1 className={classes.title}>
                Hi, my name is Kyle and I am a Software Engineer!
              </h1>
              <p className={classes.description}>
                I developed this website from scratch using React and .NET Core to
                showcase my experience and skills as a Software Engineer! <br />
                I have a great interest in technology in general and am always
                open to new experiences. <br />
                Feel free to have a look around to learn more about me!
              </p>
              <div className={classes.buttons}>
                <Button variant="success" onClick={scrollToContact} size="lg">
                  Contact Me
                </Button>
                <Button variant="primary" onClick={scrollToExperience} size="lg">
                  Previous Experience
                </Button>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12}>
            <div className={classes.imageContainer}>
              <img
                className={classes.heroImage}
                alt="hero"
                src={programingImage}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
