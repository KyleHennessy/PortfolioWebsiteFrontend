import { Card, Col, Container, Row } from "react-bootstrap";
import { IoMdContact } from "react-icons/io";

const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <div className="text-center">
          <IoMdContact className="w-10 inline-block mb-4 cap" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
            Contact Me
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            If you are interested in contacting me about any potential roles, or
            if you would like to question me more about my background, feel free
            to contact me through any of the methods below.
          </p>
        </div>
    </Container>
        <Container>
        <Row xs={1} md={2} className="g-4">
          {/* <Col>
            <Card id="socials">
              <Card.Body>
                <a href="https://linkedin.com">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                    alt="Visit my Linkedin!"
                    className="cap"
                  />
                </a>
                <a href="https://linkedin.com">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="Visit my GitHub!"
                    className="cap"
                  />
                </a>
              </Card.Body>
              <Card.Footer>
                <p>Socials</p>
              </Card.Footer>
            </Card>
          </Col> */}
          <Col>
            <Card id="details">
              <Card.Body>
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">
                    97 Warren St. <br />
                    New York, NY 10007
                  </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a className="text-indigo-400 leading-relaxed">
                    reedbarger@email.com
                  </a>
                  <h2 className="title-font font-semibold tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <p className="leading-relaxed">123-456-7890</p>
                </div>
              </Card.Body>
              <Card.Footer className="text-center">My Contact Details</Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card className="details">
              <Card.Body>
                <a href="https://linkedin.com">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                    alt="Visit my Linkedin!"
                    className="cap"
                    id="linkedin"
                  />
                </a>
                <a href="https://linkedin.com">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="Visit my GitHub!"
                    className="cap"
                  />
                </a>
              </Card.Body>
              <Card.Footer className="text-center">My Socials</Card.Footer>
            </Card>
          </Col>
          {/* <Col>
            <Card className="details">
              <Card.Body>
                <a href="https://linkedin.com">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="Visit my GitHub!"
                    className="cap"
                  />
                </a>
              </Card.Body>
            </Card>
          </Col> */}
        </Row>
        
        </Container>
    </section>
  );
};

export default Contact;
