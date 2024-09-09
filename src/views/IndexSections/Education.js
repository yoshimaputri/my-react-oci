/*!
=========================================================
* Updated by Yoshima Putri
=========================================================
*/
import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Nav,
  Button,
} from "reactstrap";

export default function Education() {
  const [textTabs, setTextTabs] = React.useState(1);
  return (
    <div className="section section-tabs" id="edu-section">
      <Container>
        <div className="title">
          <h3 className="mb-3">Education</h3>
        </div>
        <Row>
          <Col className="ml-auto mr-auto" md="10" xl="11">
            <Card>
              <CardHeader>
                <Nav className="nav-tabs-info nav-edu" role="tablist" tabs>
                    <a
                      className={classnames({
                        active: textTabs === 1,
                      })}
                      onClick={(e) => setTextTabs(1)}
                      href="#master"
                    >
                      Master of Science <span className="edu-tot-year">2 years</span>
                    </a>
                    <a
                      className={classnames({
                        active: textTabs === 2,
                      })}
                      onClick={(e) => setTextTabs(2)}
                      href="#bachelor"
                    >
                      Bachelor of Computer Science <span className="edu-tot-year">3.5 years</span>
                    </a>
                </Nav>
              </CardHeader>
              <CardBody>
                <TabContent activeTab={"link" + textTabs} className="tab-edu">
                  <TabPane tabId="link1">
                    <div className="tab-flex">
                        <Button className="btn-link btn edu-camp" target="_blank" href="https://faculty.pusan.ac.kr/sites/cseEng/index.do">School of Computer Science and Engineering,<br></br><span>Pusan National University</span></Button>
                        <span className="year-edu">Sep 2020 - Aug 2022</span>
                    </div>
                    <div className="edu-details">
                      <div><i class="tim-icons icon-laptop icon-primary"></i>Major: Computer Engineering </div>
                      <div><i class="tim-icons icon-trophy icon-primary"></i>GPA: 4.38/4.50</div>
                      <div><i class="tim-icons icon-money-coins icon-primary"></i><a className="btn-link btn-info link-no-pad" target="_blank" rel="noopener noreferrer" href="https://smartfactory.pusan.ac.kr/smartfactory/index..do">Grand-ICT Laboratory Scholarship</a></div>
                      <div><i class="tim-icons icon-badge icon-primary"></i>Publication: <a className="btn-link btn-primary link-no-pad" target="_blank" rel="noopener noreferrer" href="https://ieeexplore.ieee.org/document/9829663">Dynamic Adaptive Agent with Critical Movement Detection for the Next Generation of Spatial Reuse</a></div>
                      <div><i class="tim-icons icon-components icon-primary"></i>Advanced Course:</div>
                      <div className="badges-course">
                        <p>Big Data Processing Platform</p>
                        <p>Deep Learning Applications</p>
                        <p>IoT Sensors Network</p>
                        <p>AI Security</p>
                        <p>Wireless Network</p>
                      </div>
                      <div className="badges-course">
                        <p>Network and Reinforcement Learning</p>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tabId="link2">
                    <div className="tab-flex">
                        <Button className="btn-link btn edu-camp" target="_blank" href="https://www.its.ac.id/study-at-its/faculties-and-departments/faculty-of-intelligent-electrical-and-informatics-technology/">Faculty of Intelligent Electrical and Informatics Technology,<br></br><span>Institut Teknologi Sepuluh Nopember</span></Button>
                        <span className="year-edu">Sep 2016 - Mar 2020</span>
                    </div>
                    <div className="edu-details">
                      <div><i class="tim-icons icon-laptop icon-primary"></i>Major: Informatics Engineering </div>
                      <div><i class="tim-icons icon-trophy icon-primary"></i>GPA: 3.72/4.00</div>
                      <div><i class="tim-icons icon-badge icon-primary"></i>Final Project: <span className="skillset">Design and Analysis of Inverse Median Filtering Algorithms with Dynamic Programming Approach</span></div>
                      <div><i class="tim-icons icon-components icon-primary"></i>Advanced Course:</div>
                      <div className="badges-course">
                        <p>Digital Image Processing</p>
                        <p>Biomedical Computing</p>
                        <p>Computer Vision</p>
                        <p>Information Retrieval</p>
                        <p>Robotics</p>
                      </div>
                      <div className="badges-course">
                        <p>Software Project Management</p>
                        <p>Game Development Techniques</p>
                        <p>Framework-based Programming</p>
                      </div>
                    </div>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
