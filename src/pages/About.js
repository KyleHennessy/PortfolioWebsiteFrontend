import { Button, Col, Container, Row } from "react-bootstrap";

const AboutMePage = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col>
            <h1>
              Hi, my name is Kyle!
              <br />I love building applications and software.
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
              Laborum, voluptas natus?
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
                src="https://imageio.forbes.com/blogs-images/forbestechcouncil/files/2019/01/canva-photo-editor-8-7.png?format=png&width=1200&fit=bounds"
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

export default AboutMePage;
