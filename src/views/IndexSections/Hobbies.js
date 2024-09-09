/*!
=========================================================
* Updated by Yoshima Putri
=========================================================
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
                      {/* <Button
                        className="btn-simple"
                        color="info"
                        href="#pablo"
                        onClick={(e) => setModalSong(true)}
                      >
                        <i className="tim-icons icon-headphones" /> Fav Songs
                      </Button> */}
                    </div>
                    <Modal
                      modalClassName="modal-black modal-mov"
                      isOpen={modalMov}
                      toggle={() => setModalMov(false)}
                    >
                      <div className="modal-header justify-content-center">
                        <h4>My Favorite Movies & Series</h4>
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
                              {/* <NavItem>
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
                              </NavItem> */}
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
                                    <iframe width="400" height="250" src="https://www.youtube.com/embed/sQQJEiESrK0?si=AkoW5zgnm39-9Dep" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    <h4 className="mov-title">The Big Four (2022)</h4>
                                    <p className="text-justify">Synopsis: <br></br>Tells the story of an elite assassin that is targeted by murderous gangsters after sparing a girl's life during a massacre.</p>
                                  </Col>
                                  {/* <Col>
                                    <iframe width="400" height="250" src="https://www.youtube.com/embed/s377iJorKbY?si=KhN8mV-kDp3akgBt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    <h4 className="mov-title">One Fine Day (2017)</h4>
                                    <p className="text-justify">Synopsis: <br></br>One Fine Day tells the story of Mahesa, an Indonesian boy who earns his living in Barcelona seducing wealthy women who give him large sums of money to pay off invented debts. His next target is Alana, a young woman who is in a relationship with the billionaire Danu. Mahesa's plans change drastically when he discovers in Alana the love that he never knew.</p>
                                  </Col> */}
                                  <p className="single-line"></p>
                                  <Col>
                                    <iframe width="400" height="250" src="https://www.youtube.com/embed/GlfaHW02seM?si=P_GnmYcfKS8XKr-S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    <h4 className="mov-title">Sore (Tropicana Web Series 2017)</h4>
                                    <p className="text-justify">Synopsis: <br></br>Jonathan (Dion Wiyoko) is a young man from Indonesia who lives in Italy. One day, a woman named Sore (Tika Bravani) appears and claims that she is Jonathan's wife from the future.</p>
                                  </Col>
                                </Table>
                              </TabPane>
                              <TabPane tabId="tab2">
                                <Table className="tablesorter" >
                                  <Col>
                                    <iframe width="400" height="250" src="https://www.youtube.com/embed/kA244xewjcI?si=J7ER0Pektli55FWl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    <h4 className="mov-title">Past Lives (2023)</h4>
                                    <p className="text-justify">Synopsis: <br></br>Two childhood sweethearts, after decades apart, are reunited for one fateful week in New York as they confront notions of destiny, love, and the choices that make a life in this heartrending modern romance.</p>
                                  </Col>
                                  <p className="single-line"></p>
                                  <Col>
                                    <iframe width="400" height="250" src="https://www.youtube.com/embed/gqhUlldiLEo?si=AJd4ojTt_6gG29AG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    <h4 className="mov-title">Happiness (K-Drama Series 2021)</h4>
                                    <p className="text-justify">Synopsis: <br></br>Set in the near future, a high-rise apartment building has been newly constructed in the big city. The apartment building has residents from diverse backgrounds, but a new infectious disease breaks out. Because of the outbreak, the high-rise apartment is sealed off.</p>
                                  </Col>
                                </Table>
                              </TabPane>
                              {/* <TabPane tabId="tab3">
                                <Table className="tablesorter" >
                                  <Col>
                                    <iframe width="400" height="250" src="https://www.youtube.com/embed/oCKA3l96Ijg?si=XPOQbZXg342I-Seu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    <h4 className="mov-title">My Rainy Days (2009)</h4>
                                    <p className="text-justify">Synopsis: <br></br>High schooler Rio Ozawa, falls for professor Kouki Ozawa. Though he reciprocates feelings, he's dying of cancer, explaining his distance. Rio convinces him to get risky surgery, even if he forgets her, to prolong their time together.</p>
                                  </Col>
                                  <p className="single-line"></p>
                                  <Col>
                                    <iframe width="400" height="250" src="https://www.youtube.com/embed/csRfeO6dH3k?si=P_KHdZ0UsRqyN8ge" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    <h4 className="mov-title">Fairy Tail (Anime series 2009-2019)</h4>
                                    <p className="text-justify">Synopsis: <br></br>When four young wizards team up to take jobs across the kingdom, they forge a bond more powerful than any magic and grow stronger with every mission.</p>
                                  </Col>
                                </Table>
                              </TabPane> */}
                              <TabPane tabId="tab4">
                                <Table className="tablesorter" >
                                  <Col>
                                    <iframe width="400" height="250" src="https://www.youtube.com/embed/ZQ-YX-5bAs0?si=hmSul5BsBf-zx7xM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    <h4 className="mov-title">Crazy Rich Asian (2018)</h4>
                                    <p className="text-justify">Synopsis: <br></br>Rachel Chu is happy to accompany her longtime boyfriend, Nick, to his best friend's wedding in Singapore. She's also surprised to learn that Nick's family is extremely wealthy and he's considered one of the country's most eligible bachelors. Thrust into the spotlight, Rachel must now contend with jealous socialites, quirky relatives and something far, far worse -- Nick's disapproving mother.</p>
                                  </Col>
                                  <p className="single-line"></p>
                                  <Col>
                                    <iframe width="400" height="250" src="https://www.youtube.com/embed/W9GYMfLcnDY?si=m3eacJ20a4-Ut-jc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    <h4 className="mov-title">Friends (TV Series 1994–2004)</h4>
                                    <p className="text-justify">Synopsis: <br></br>Follow the lives of six reckless adults living in Manhattan, as they indulge in adventures which make their lives both troublesome and happening.</p>
                                  </Col>
                                </Table>
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
