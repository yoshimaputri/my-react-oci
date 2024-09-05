/*!

=========================================================
* BLK Design System React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Container,
  Row,
  Col,
  UncontrolledCarousel,
  Button,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Modal,
} from "reactstrap";
import ReactCountryFlag from "react-country-flag";

const carouselItems = [
  {
    src: require("assets/img/badminton.jpg"),
    altText: "Slide 1",
    caption: "Badminton",
  },
  {
    src: require("assets/img/netflix.jpg"),
    altText: "Slide 2",
    caption: "Watching Movie / Series",
  },
  {
    src: require("assets/img/billiard.jfif"),
    altText: "Slide 3",
    caption: "Billiard",
  },
  {
    src: require("assets/img/karaoke.jpeg"),
    altText: "Slide 4",
    caption: "Karaoke",
  },
  {
    src: require("assets/img/tennis.jpg"),
    altText: "Slide 5",
    caption: "Tennis",
  },
];


export default function Hobbies() {
  const [modalMov, setModalMov] = React.useState(false);
  const [modalSong, setModalSong] = React.useState(false);
  const [tabs, setTabs] = React.useState(1);
  return (
    <div className="section section-tabs" id="hobbies-section">
      <Container>
        <div className="title">
          <h3 className="mb-3">When I have a free time</h3>
        </div>
        <Row>
          <Col className="ml-auto mr-auto" md="10" xl="11">
            <div className="section">
              <Container>
                <Row className="justify-content-between">
                  <Col md="6">
                    <Row className="justify-content-between align-items-center">
                      <UncontrolledCarousel className="custom-carousel" items={carouselItems} />
                    </Row>
                  </Col>
                  <Col md="5" className="hobbies-desc">
                    <h1 className="profile-title text-left">Hobbies</h1>
                    <h5 className="text-on-back">취미</h5>
                    <p className="profile-description text-left">
                      In my free time, I enjoy staying active and exploring a mix of mental and physical challenges. <span className="text-warning">Badminton</span> and <span className="text-warning">tennis</span> are my go-to sports for staying sharp and fit, as they both push me to stay agile and competitive. When I’m in the mood to unwind, I love <span className="text-warning">watching movies or series</span>, diving into captivating stories from around the world. For something more social, I enjoy playing <span className="text-warning">billiards</span>, where I can test my precision and focus, or singing <span className="text-warning">karaoke</span>, which is always a fun way to relax and connect with friends. Each hobby brings a unique balance to my life, keeping things both exciting and rewarding.
                    </p>
                    <div className="btn-wrapper pt-3">
                      <Button
                        className="btn-simple"
                        color="primary"
                        href="#pablo"
                        onClick={(e) => setModalMov(true)}
                      >
                        <i className="tim-icons icon-video-66" /> Fav Movies
                      </Button>
                      <Button
                        className="btn-simple"
                        color="info"
                        href="#pablo"
                        onClick={(e) => setModalSong(true)}
                      >
                        <i className="tim-icons icon-headphones" /> Fav Songs
                      </Button>
                    </div>
                    <Modal
                      modalClassName="modal-black modal-mov"
                      isOpen={modalMov}
                      toggle={() => setModalMov(false)}
                    >
                      <div className="modal-header justify-content-center">
                        <h4>My Favorite Movies / Series</h4>
                        <button className="close" onClick={() => setModalMov(false)}>
                          <i className="tim-icons icon-simple-remove text-white" />
                        </button>
                        </div>
                        <div>
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
                                >
                                  <ReactCountryFlag className="font-size-lg" countryCode="ID" svg />
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
                                >
                                  <ReactCountryFlag className="font-size-lg" countryCode="KR" svg />
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
                                >
                                  <ReactCountryFlag className="font-size-lg" countryCode="JP" svg />
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
                                >
                                  <ReactCountryFlag className="font-size-lg" countryCode="US" svg />
                                </NavLink>
                              </NavItem>
                            </Nav>
                            </div>
                            <div>
                            <TabContent
                              className="tab-subcategories"
                              activeTab={"tab" + tabs}
                            >
                              <TabPane tabId="tab1">
                                <Table className="tablesorter" >
                                  <Col>
                                    <iframe width="400" height="250" src="https://www.youtube.com/embed/s377iJorKbY?si=KhN8mV-kDp3akgBt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    <h4 className="mov-title">One Fine Day</h4>
                                    <p className="text-justify">Synopsis: <br></br>One Fine Day tells the story of Mahesa, an Indonesian boy who earns his living in Barcelona seducing wealthy women who give him large sums of money to pay off invented debts. His next target is Alana, a young woman who is in a relationship with the billionaire Danu. Mahesa's plans change drastically when he discovers in Alana the love that he never knew.</p>
                                  </Col>
                                  <p className="single-line"></p>
                                  <Col>
                                    <iframe width="400" height="250" src="https://www.youtube.com/embed/GlfaHW02seM?si=P_GnmYcfKS8XKr-S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    <h4 className="mov-title">Sore (Web Series)</h4>
                                    <p className="text-justify">Synopsis: <br></br>One Fine Day tells the story of Mahesa, an Indonesian boy who earns his living in Barcelona seducing wealthy women who give him large sums of money to pay off invented debts. His next target is Alana, a young woman who is in a relationship with the billionaire Danu. Mahesa's plans change drastically when he discovers in Alana the love that he never knew.</p>
                                  </Col>
                                </Table>
                              </TabPane>
                              <TabPane tabId="tab2">
                                <Table className="tablesorter" >
                                <p className="text-justify">Python ages<br></br>fsf.</p>
                                  <p className="single-line"></p>
                                  <p>sak</p>
                                  </Table>
                              </TabPane>
                              <TabPane tabId="tab3">
                                <p className="text-justify">hg</p>
                              </TabPane>
                              <TabPane tabId="tab4">
                                <p className="text-justify">Is.</p>
                              </TabPane>
                              <TabPane tabId="tab5">
                                <p className="text-justify">Linuxs.</p>
                              </TabPane>
                            </TabContent>
                         
                      </div>
                    </Modal>
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
