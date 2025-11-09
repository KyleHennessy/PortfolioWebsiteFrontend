import { Button, Col, Container, Row } from "react-bootstrap";
import kyleImage from "../../assets/kyle.jpg";
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
                I'm Kyle Hennessy and I am a Full Stack Software Engineer
              </h1>
              <p className={classes.description}>
                Here you can see what I am working on, my previous work experiences, and my technical skills.<br />
                I have a great interest in technology and am always open to new experiences. <br />
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
                src={kyleImage}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
