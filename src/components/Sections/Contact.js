import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { IoMdContact } from "react-icons/io";

const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <div className="text-center">
          <IoMdContact className="w-10 inline-block mb-4 cap" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
            Contact Details
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
          <Col>
            {/* <Card id="details">
              <Card.Body> */}
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
              <h2 className="title-font font-semibold tracking-widest text-xs mt-4">
                SOCIALS
              </h2>
              <a href="https://linkedin.com">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="Visit my Linkedin!"
                  className="social"
                />
              </a>
              <a href="https://linkedin.com">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="Visit my GitHub!"
                  className="social"
                />
              </a>
            </div>
          </Col>
          <Col>
            <h2 className="title-font font-semibold tracking-widest text-xs">
              Send me a message
            </h2>
            <p className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
              suscipit officia aspernatur veritatis. Asperiores, aliquid?
            </p>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name"/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email"/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" placeholder="Leave a message here" style={{height: '100px'}}/>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
      <form></form>
    </section>
  );
};

export default Contact;
