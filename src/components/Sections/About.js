import { Button, Col, Container, Row } from "react-bootstrap";
// import programming from "../../assets/programming.png";

// const logo = require('../../assets/programm')

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col>
            <h1>Hi, my name is Kyle and I am a Software Engineer!</h1>
            <p>
              I developed this website from scratch using React and .NET Core to
              showcase my experience and skills as a Software Engineer! <br />
              I have a great interest in technology in general and am always
              open to new experiences. <br />
              Feel free to have a look around to learn more about me!
            </p>
            <div className="aboutme-links">
              <Button variant="success">Contact Me</Button>
              <Button variant="success">My Work</Button>
            </div>
          </Col>
          <Col>
            <div className="image">
              <img
                className="heroImage"
                alt="hero"
                src={require('../../assets/programing.png')}
                length="400px"
                width="400px"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
