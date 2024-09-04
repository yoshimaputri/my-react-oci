/*!
=========================================================
* Updated by Yoshima Putri
=========================================================
*/
import React from "react";
// reactstrap components
import ReactCountryFlag from "react-country-flag";

import {
  Card,
  CardBody,
  Container,
  Row,
  Col,
  Button
} from "reactstrap";


export default function Works() {
  const readMore = () => {
    console.log('Read more function triggered');
    const elements = document.getElementsByClassName("read-more");
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].style.display === 'block') {
        elements[i].style.display = 'none';
      } else {
        elements[i].classList.toggle('show');
      }
    }
    document.getElementsByClassName("read-more-btn")[0].classList.toggle('hidden');
    document.getElementsByClassName("minimize-btn")[0].classList.toggle('show');
    document.getElementsByClassName("minimize-btn")[0].style.textAlign = 'center';
    document.getElementById("read-more-start").scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const minimizeList = () => {
    const elements = document.getElementsByClassName("read-more");
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].style.display === 'block') {
        elements[i].style.display = 'none';
      } else {
        elements[i].classList.toggle('show');
      }
    }
    document.getElementsByClassName("read-more-btn")[0].classList.toggle('hidden');
    document.getElementsByClassName("minimize-btn")[0].classList.toggle('show');
    document.getElementById("works-section").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      className="section section-download section-works"
      data-background-color="black"
      id="works-section"
    >
      <img alt="..." className="path" src={require("assets/img/path3.png")} />
      <Container>
      <h3 className="title">Work Experiences</h3>
        <Row className="justify-content-md-center">
          <Col className="text-center" lg="10" md="12">
            <Card className="card-coin card-plain card-works">
              <CardBody className="text-left padding-more-right">
                <Row>
                  <Col lg="8"><h4 className="work-title">Big Data Engineer <a className="company-name" target="_blank" rel="noopener noreferrer" href="https://www.ourcoms.kr/">@ Ourcoms</a>{' '}<ReactCountryFlag className="font-size-lg" countryCode="KR" svg /></h4></Col>
                  <Col className="text-right" lg="4"><p className="total-years">{' '}1 year 5 months</p></Col>
                </Row>
                <p className="transparent">May 2023 - Present</p>
                <ul className="text-justify">
                  <li>Manage full-scale big data and integrate diverse meta and log data (KT Genie TV AI and big data projects) using PySpark, Hadoop File System, PostgreSQL, and other big data technology.</li>
                  <li>Communicate directly with the CTO regarding technical issues, problem-solving, solutions, and project timelines.</li>
                </ul>
                <Row className="skillset">
                  <Col className="font-size-lg"><i className="tim-icons icon-tag" /></Col>
                  <Col><p className="skills">Python</p></Col>
                  <Col><p className="skills">PySpark</p></Col>
                  <Col><p className="skills">PostgreSQL</p></Col>
                  <Col><p className="skills">HDFS</p></Col>
                  <Col><p className="skills">NDAP Server</p></Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col className="text-center" lg="10" md="12">
            <Card className="card-coin card-plain card-works">
              <CardBody className="text-left padding-more-right">
                <Row>
                  <Col lg="8"><h4 className="work-title">Associate AI Engineer <a className="company-name" target="_blank" rel="noopener noreferrer" href="https://datadesign.engineering/">@ Data Design Engineering</a>{' '}<ReactCountryFlag className="font-size-lg" countryCode="KR" svg /></h4></Col>
                  <Col className="text-right" lg="4"><p className="total-years">{' '}6 months</p></Col>
                </Row>
                <p className="transparent">Nov 2022 - Apr 2023</p>
                <ul className="text-justify">
                  <li>Discussed and developed the proof of concept from AI theory to technical execution, considering available resources and a tight deadline.</li>
                  <li>Proficient in debugging and managing raw big data with Amazon S3 and Elasticsearch.</li>
                  <li>Implemented post-processing detection and batch image detection using Python with YOLOv7 for the Aladin projects, significantly improving the accuracy of detection and execution time.</li>
                </ul>
                <Row className="skillset">
                  <Col className="font-size-lg"><i className="tim-icons icon-tag" /></Col>
                  <Col><p className="skills">Python</p></Col>
                  <Col><p className="skills">Computer Vision</p></Col>
                  <Col><p className="skills">YOLOv7</p></Col>
                  <Col><p className="skills">Amazon S3</p></Col>
                  <Col><p className="skills">ElasticSearch</p></Col>
                  <Col><p className="skills">FastAPI</p></Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col className="text-center" lg="10" md="12">
            <Button className="btn btn-info btn-simple read-more-btn" onClick={readMore}>Read more</Button>
          </Col>
          <Col className="text-center" lg="10" md="12" id="read-more-start">
            <Card className="card-coin card-plain card-works read-more">
              <CardBody className="text-left padding-more-right">
                <Row>
                  <Col lg="8"><h4 className="work-title">Full-Stack Web Developer <a className="company-name" target="_blank" rel="noopener noreferrer" href="https://inc.pusan.ac.kr/inc/index.do">@ INC Lab, PNU</a>{' '}<ReactCountryFlag className="font-size-lg" countryCode="KR" svg /></h4></Col>
                  <Col className="text-right" lg="4"><p className="total-years">{' '}9 months</p></Col>
                </Row>
                <p className="transparent">Aug 2021 - Apr 2022</p>
                <ul className="text-justify">
                  <li>Built a fully functional and user-friendly website for a truck e-commerce system in Korea using React.js.</li>
                  <li>Developed project documentation that included user requirements and software development.</li>
                </ul>
                <Row className="skillset">
                  <Col className="font-size-lg"><i className="tim-icons icon-tag" /></Col>
                  <Col><p className="skills">Web Dev</p></Col>
                  <Col><p className="skills">React JS</p></Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col className="text-center" lg="10" md="12">
            <Card className="card-coin card-plain card-works read-more">
              <CardBody className="text-left padding-more-right">
                <Row>
                  <Col lg="8"><h4 className="work-title">Project Developer (Freelance) <a className="company-name" target="_blank" rel="noopener noreferrer" href="https://inc.pusan.ac.kr/inc/index.do">@ ITS, Surabaya</a>{' '}<ReactCountryFlag className="font-size-lg" countryCode="ID" svg /></h4></Col>
                  <Col className="text-right" lg="4"><p className="total-years">{' '}3 months</p></Col>
                </Row>
                <p className="transparent">Nov 2019 - Jan 2020</p>
                <ul className="text-justify">
                  <li>Collected user requirements and conducted user research, ensuring that the final product met the needs and expectations of end-users.</li>
                  <li>Developed SIMPIKTI, a fully functional administration website for the Diploma in Informatics ITS.</li>
                  <li>Collaborated with cross-functional team (UI designers, other developers, and stakeholders) to deliver high-quality products on time and on budget.</li>
                  <li>Developed comprehensive product documentation, ensuring effective communication of project goals and requirements, and providing clear instructions for end-users.</li>
                </ul>
                <Row className="skillset">
                  <Col className="font-size-lg"><i className="tim-icons icon-tag" /></Col>
                  <Col><p className="skills">Web Dev</p></Col>
                  <Col><p className="skills">UI/UX</p></Col>
                  <Col><p className="skills">JavaScript</p></Col>
                  <Col><p className="skills">Back-end</p></Col>
                  <Col><p className="skills">Front-end</p></Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col className="text-center" lg="10" md="12">
            <Card className="card-coin card-plain card-works read-more">
              <CardBody className="text-left padding-more-right">
                <Row>
                  <Col lg="8"><h4 className="work-title">Technical Document Specialist (Freelance) <a className="company-name" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/pt-pembangkitan-jawa-bali-services-pjbs-/">@ PT PJB Services</a>{' '}<ReactCountryFlag className="font-size-lg" countryCode="ID" svg /></h4></Col>
                  <Col className="text-right" lg="4"><p className="total-years">{' '}2 months</p></Col>
                </Row>
                <p className="transparent">Nov 2019 - Dec 2019</p>
                <ul className="text-justify">
                  <li>Created a Business Requirement Assessment (BRA), Business Solution Design (BSD), Development and Configuration Workbook (DCWB), System Acceptance Test (SAT), User Acceptance Test (UAT), and User Manual documentation.</li>
                  <li>Evaluated and ensured that all acceptance metrics are achieved. </li>
                  <li>Enabled effective communication between technical and non-technical stakeholders.</li>
                </ul>
                <Row className="skillset">
                  <Col className="font-size-lg"><i className="tim-icons icon-tag" /></Col>
                  <Col><p className="skills">Technical Presentation</p></Col>
                  <Col><p className="skills">Technical Documentation</p></Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col className="text-center" lg="10" md="12">
            <Card className="card-coin card-plain card-works read-more">
              <CardBody className="text-left padding-more-right">
                <Row>
                  <Col lg="8"><h4 className="work-title">Product Engineer Intern <a className="company-name" target="_blank" rel="noopener noreferrer" href="https://www.visionaire.ai/">@ Nodeflux</a>{' '}<ReactCountryFlag className="font-size-lg" countryCode="ID" svg /></h4></Col>
                  <Col className="text-right" lg="4"><p className="total-years">{' '}2 months</p></Col>
                </Row>
                <p className="transparent">Jan 2019 - Feb 2019</p>
                <ul className="text-justify">
                  <li>Conducted technology benchmarking and identified potential areas for improvement.</li>
                  <li>Proficient with JIRA and its workflow to support project management and collaboration.</li>
                  <li>Developed a crowd estimation API using Python integrated with the product system library.</li>
                </ul>
                <Row className="skillset">
                  <Col className="font-size-lg"><i className="tim-icons icon-tag" /></Col>
                  <Col><p className="skills">Computer Vision</p></Col>
                  <Col><p className="skills">Project Management</p></Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col className="text-center div-minimize" lg="10" md="12">
            <Button className="btn btn-info btn-simple minimize-btn" onClick={minimizeList}>Minimize</Button>
          </Col>
        </Row>
        <br />
        <br />
        <br />
      </Container>
    </div>
  );
}
