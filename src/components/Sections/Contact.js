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
            Did anything here be of particular interest to you?
            <br />
            If so, don't be shy to contact me to discuss anything in further
            detail!
          </p>
        </div>
      </Container>
      <Container>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold tracking-widest text-xs">
                Address
              </h2>
              <p className="mt-1">
                Graney <br />
                Baltinglass
                <br />
                Co.Wicklow
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold tracking-widest text-xs">
                E-mail
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                kyle-hennessy@hotmail.com
              </a>
              <h2 className="title-font font-semibold tracking-widest text-xs mt-4">
                Phone
              </h2>
              <p className="leading-relaxed">087-419-8486</p>
              <h2 className="title-font font-semibold tracking-widest text-xs mt-4">
                Socials
              </h2>
              <a href="https://www.linkedin.com/in/kyle-hennessy-itcarlow/">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="Visit my Linkedin!"
                  className="social"
                />
              </a>
              <a href="https://github.com/KyleHennessy">
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
              Get In Touch!
            </h2>
            <p className="">
              If you would like to get in touch with me, feel free to reach out
              to me on Linkedin or send me a message directly on my website and
              I will get back to you as soon as possible!
            </p>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Leave a message here"
                  style={{ height: "100px" }}
                />
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
