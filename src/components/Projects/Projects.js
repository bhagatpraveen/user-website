import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="DApps"
              description="These web application related to the Track and trace solution for one of the most popular German Automobile OEM which Includes tracking of spare parts shipped by various logistic companies across the globe and providing data transparency and real time updates to all the stakeholders involved in the system using blockchain. Blockchain based multiple application development for German based logistic giant for some of its customer. This includes the tracking data of Goods, custom handling , performance tracking, air cargo booking and tracking etc."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="MEDCARE"
              description="These product is for the Health Care industry which offer a wide range of functionality to Corporate Hospitals, Private Hospitals, and Smaller Hospitals. Making the process smooth and online, From creating the encounter for patient till the patient is finished making bill payment for diagnosis.
              It helps hospital management to tracks all the activity more smoothly ,and doctors to make calls for the patient on button clicks."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="DRIVE IT"
              description="Tan Chong Motor Holdings Berhad is a Malaysia-based multinationalcorporation that is active in automobile assembly, manufacturing, distribution and sales, but is best known as the franchise holder of Nissanvehicles in Malaysia. The corporation has many sub companies, dealers and branches below it. The application is required to maintain the data right from sales of vehicles to subsequent services. It is a one place application for almost all the operations performed by Tan Chong Motors."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="BRIGHT SIGN"
              description="An interactive kiosk for marketing the Amazon products like Amazon Alexa,
              echo, echo bees etc. that will be used in the different stores."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Entersekt-ADFS PLUGIN"
              description="OpenAM protected application access using new Entersekt 2FA mechanism.ADFSprotected application using access using Entersekt 2FA mechanism.In this application whilelogin each registered user will have to perform OTP/Push Notification credential along withADFS authentication while accessing protected application.
              "
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
