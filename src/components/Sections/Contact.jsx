import {
  Col,
  Container,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import { IoMdContact } from "react-icons/io";
import classes from "./Contact.module.css";

import NewMessage from "../Contact/NewMessage";

const Contact = () => {
  return (
    <section id="contact" className={classes.contact}>
      <Container>
        <div className="section-title">
          <IoMdContact className="cap" />
          <h1>
            Contact Details
          </h1>
          <p>
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
            <div className={classes.contactInfo}>
              <div className={classes.infoSection}>
                <h2 className={classes.infoTitle}>Address</h2>
                <p className={classes.infoText}>
                  12 McQuillen Street <br />
                  Tully<br />
                  Queensland<br/>
                  Australia
                </p>
              </div>
              <div className={classes.infoSection}>
                <h2 className={classes.infoTitle}>E-mail</h2>
                <a className={classes.infoLink} href="mailto:kyle-hennessy@hotmail.com">
                  kyle-hennessy@hotmail.com
                </a>
                <h2 className={classes.infoTitle}>Phone</h2>
                <p className={classes.infoText}>049-3303-543</p>
                <h2 className={classes.infoTitle}>Socials</h2>
                <div className={classes.socialLinks}>
                  <a href="https://www.linkedin.com/in/kylehennessy/">
                    <OverlayTrigger
                      trigger={["hover", "focus"]}
                      placement="bottom"
                      delay={{ show: 10, hide: 0 }}
                      overlay={<Tooltip>Visit my Linkedin!</Tooltip>}
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                        alt="Visit my Linkedin!"
                        className="social"
                      />
                    </OverlayTrigger>
                  </a>

                  <a href="https://github.com/KyleHennessy">
                    <OverlayTrigger
                      trigger={["hover", "focus"]}
                      placement="bottom"
                      delay={{ show: 10, hide: 0 }}
                      overlay={<Tooltip>Visit my GitHub!</Tooltip>}
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
                        alt="Visit my GitHub!"
                        className="social"
                      />
                    </OverlayTrigger>
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className={classes.messageSection}>
              <h2 className={classes.messageTitle}>Get In Touch!</h2>
              <p className={classes.messageDescription}>
                If you would like to get in touch with me, feel free to reach out
                to me on Linkedin or send me a message directly on my website and
                I will get back to you as soon as possible!
              </p>
              <NewMessage/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
