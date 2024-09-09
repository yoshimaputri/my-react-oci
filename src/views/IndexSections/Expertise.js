/*!
=========================================================
* Updated by Yoshima Putri
=========================================================
*/
import React from "react";
// reactstrap components
import classnames from "classnames";
import PerfectScrollbar from "perfect-scrollbar";

import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

let ps = null;

export default function Expertise() {
  const [tabs, setTabs] = React.useState(1);
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("profile-page");
    };
  }, []);
  return (
    <div
      className="section section-download section-story"
      data-background-color="black"
      id="story-section"
    >
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <Container>
        <Row className="justify-content-md-center">
          <Col className="text-center" lg="8" md="12">
            <Card className="card-coin card-plain">
              <CardHeader>
                <img
                  alt="..."
                  className="img-center img-fluid rounded-circle square-image"
                  src={require("assets/img/yoshima_zepeto3.PNG")}
                />
                <h4 className="title">Story about Oci's Expertise</h4>
              </CardHeader>
              <CardBody>
                <Nav
                  className="nav-tabs-primary justify-content-center"
                  tabs
                >
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: tabs === 1,
                      })}
                      onClick={(e) => {
                        e.preventDefault();
                        setTabs(1);
                      }}
                      href="#python"
                    >
                      Python
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: tabs === 2,
                      })}
                      onClick={(e) => {
                        e.preventDefault();
                        setTabs(2);
                      }}
                      href="#bigdata"
                    >
                      Big Data
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: tabs === 3,
                      })}
                      onClick={(e) => {
                        e.preventDefault();
                        setTabs(3);
                      }}
                      href="#ml"
                    >
                      Machine Learning
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: tabs === 4,
                      })}
                      onClick={(e) => {
                        e.preventDefault();
                        setTabs(4);
                      }}
                      href="#webdev"
                    >
                      Web Dev
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: tabs === 5,
                      })}
                      onClick={(e) => {
                        e.preventDefault();
                        setTabs(5);
                      }}
                      href="#linux"
                    >
                      Linux
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent
                  className="tab-subcategories"
                  activeTab={"tab" + tabs}
                >
                  <TabPane tabId="tab1">
                    <Table className="tablesorter" responsive>
                      <p className="text-justify">Python has been central to my work, from academic research to professional projects. Most of my college projects were developed using Python for course-related assignments and external projects, such as freelance work with professors. I also used Python, alongside MATLAB, in my master’s thesis to integrate <a className="text-primary" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Wi-Fi_6"><u className="bolder-txt">IEEE 802.11ax Wi-Fi</u></a> simulations in MATLAB with reinforcement learning algorithms implemented in Python.
                      <br></br><br></br>In addition, I enjoy working on projects that involve <span className="text-primary">creating APIs and chatbots</span>, as they offer user-friendly features for others. I am <span className="text-success">confident in writing scripts and solving algorithmic problems in Python</span>. I am also a fast learner and adaptable when it comes to Python-related technologies. For example, I successfully delivered a <span className="text-primary">full-service big data project using PySpark</span> at a company, despite having no prior experience with it, and met a strict deadline. Another example is when I developed an API to scrape job listings from one of South Korea's job platforms using <a className="text-primary" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Wi-Fi_6"><u className="bolder-txt">Selenium</u></a> and <a className="text-primary" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Wi-Fi_6"><u className="bolder-txt">Flask</u></a> in <span className="text-success">just one day</span>. It satisfied me because I was able to filter the data according to my needs and preferences.
                      <br></br><br></br>Additionally, I am an <span className="text-success">expert in debugging</span>, whether in Python or other programming languages.</p>
                    </Table>
                  </TabPane>
                  <TabPane tabId="tab2">
                    <p className="text-justify">Currently, I work as a big data engineer. Even though I had never worked on real-world big data projects before, I <span className="text-success">successfully scripted a fully functional big data management service from scratch</span> using <a className="text-primary" target="_blank" rel="noopener noreferrer" href="https://spark.apache.org/docs/latest/api/python/index.html"><u className="bolder-txt">PySpark</u></a>. I developed a multi-level aggregation program and deployed it on both the client’s development and production servers, overcoming challenges such as internet restrictions that limited access to necessary libraries. Despite these hurdles, I delivered a solution that met all client requirements (<span className="text-warning">KT Genie TV Shopping Insight</span>).
                    <br></br><br></br>This project enhanced my understanding of big data and taught me how to extract valuable insights. I am now proficient in <span className="text-success">writing queries, both simple and complex</span>, in <span className="text-primary">PostgreSQL, MySQL, and PySpark SQL</span>. I also have experience with ETL processes for the <span className="text-primary">Hadoop File System</span> and have worked with <a className="text-info" target="_blank" rel="noopener noreferrer" href="https://www.ktnexr.com/ndap"><u className="bolder-txt">NDAP (NexR Data Analysis Platform)</u></a>, a big data analytics platform developed by KT NexR, to manage ETL processing.
                    <br></br><br></br>Additionally, I am frequently chosen to debug code, whether it’s from client projects or in other programming languages like <span className="text-primary">Java for Apache Spark</span>.</p>
                  </TabPane>
                  <TabPane tabId="tab3">
                    <p className="text-justify">During my bachelor’s degree, I served as an administrator of the <a className="text-info" target="_blank" rel="noopener noreferrer" href="https://www.its.ac.id/informatika/intelligent-computing-and-vision-laboratory/"><u className="bolder-txt">Intelligent Computing and Vision Laboratory</u></a>, which provided me with a strong theoretical foundation in Machine Learning, particularly in <span className="text-primary">Computer Vision</span>. My passion for this field is evident in my successful completion of projects related to computer vision.
                    <br></br><br></br>In my previous role, I applied Machine Learning techniques using <a className="text-primary" target="_blank" rel="noopener noreferrer" href="https://github.com/WongKinYiu/yolov7"><u className="bolder-txt">YOLOv7</u></a> to detect book spines from multiple racks with different layouts. This project required me to modify the model for batch inference, pre-process images, train models, tune hyperparameters, and evaluate algorithms. As a result, I <span className="text-success">improved accuracy from ~76% to ~98%</span> and <span className="text-success">reduced execution time from around 115 seconds to ~5 seconds</span>. This was <span className="text-warning">my first major project with a big company client (Aladin Korea)</span>, and it demonstrated my ability to learn quickly and adapt to new tasks.
                    <br></br><br></br>My experience also reinforced my interest in <span className="text-primary">Reinforcement Learning</span> and <span className="text-primary">Natural Language Processing</span>. During my master’s degree, I researched IEEE 802.11ax Wi-Fi, using real-world scenario simulations and reinforcement learning to model the environment. My approach received positive feedback at the International Conference on Ubiquitous and Future Networks (<a className="text-info" target="_blank" rel="noopener noreferrer" href="http://2022.icufn.org/"><u className="bolder-txt">ICUFN</u></a>) 2022 in Barcelona, where I presented as the <b>first author</b>.</p>
                  </TabPane>
                  <TabPane tabId="tab4">
                    <p className="text-justify">I have undertaken numerous web development projects. In each case, I determine the most suitable frameworks for the project requirements. I've <span className="text-success">built several full-stack websites</span> using a variety of technologies, with two significant projects being an administration diploma website using <a className="text-primary" target="_blank" rel="noopener noreferrer" href="https://laravel.com/"><u className="bolder-txt">Laravel</u></a> and a truck e-commerce platform built with <a className="text-primary" target="_blank" rel="noopener noreferrer" href="https://react.dev/"><u className="bolder-txt">React.js</u></a>. 
                    <br></br><br></br>In my previous role, I was tasked with enhancing a website by integrating <a className="text-info" target="_blank" rel="noopener noreferrer" href="https://www.elastic.co/elasticsearch"><u className="bolder-txt">Elasticsearch</u></a> and developing a custom search engine for a book database, which greatly improved the site’s functionality. Most of my web projects have been administration and statistics portals, primarily used internally by companies, so I am unable to provide direct references. However, I am currently involved in managing and maintaining the <a className="text-primary" target="_blank" rel="noopener noreferrer" href="https://www.djangoproject.com/"><u className="bolder-txt">Django</u></a>-based website, <a className="text-warning" target="_blank" rel="noopener noreferrer" href="https://ipakr.org/"><u className="bolder-txt">IPA-KR</u></a>, which serves the Indonesian professional community in South Korea.
                    <br></br><br></br>Additionally, I have experience designing websites and mobile applications using <a className="text-info" target="_blank" rel="noopener noreferrer" href="https://helpx.adobe.com/xd/get-started.html"><u className="bolder-txt">Adobe XD</u></a>, where I create interactive prototypes that demonstrate user flow and functionality. Although I haven’t had formal professional experience in a web development company, I have spent the last six years honing my skills through various projects. My expertise is further showcased by <span className="text-success">Oci's website</span>, which I developed and maintain as a testament to my web development capabilities.</p>
                  </TabPane>
                  <TabPane tabId="tab5">
                    <p className="text-justify">Linux has been a cornerstone of my technical experience since my college days, where I primarily used it for networking purposes. I began by creating simple command-line scripts in Linux and later relied on it for remote-related work in various projects. Today, I <span className="text-success">regularly work with clients on their servers, which are often Linux-based</span>.
                    <br></br><br></br>I am well-versed in client-server systems and use Linux for tasks such as connecting to databases, running scheduled scripts, managing programs and permissions, and <span className="text-success">writing numerous Bash scripts</span>. I also have experience with <a className="text-primary" target="_blank" rel="noopener noreferrer" href="https://git-scm.com/"><u className="bolder-txt">Git</u></a>, <a className="text-primary" target="_blank" rel="noopener noreferrer" href="https://www.docker.com/"><u className="bolder-txt">Docker</u></a>, and regularly monitor systems, check process logs, and handle troubleshooting as needed. My work is predominantly client-based, requiring me to adapt to each client's specific architecture, including Linux environments.</p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <br />
        <br />
        <br />
      </Container>
    </div>
  );
}
