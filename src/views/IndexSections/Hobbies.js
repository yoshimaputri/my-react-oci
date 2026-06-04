/*!
=========================================================
* Updated by Yoshima Putri
=========================================================
*/
import React from "react";
import classnames from "classnames";
import {
  Button,
  Col,
  Container,
  Modal,
  ModalBody,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";

const hobbies = [
  { name: "Tennis", icon: "fas fa-baseball-ball" },
  { name: "Ping-pong", icon: "fas fa-table-tennis" },
  { name: "Billiard", icon: "fas fa-circle" },
  { name: "Reading Books", icon: "fas fa-book" },
  { name: "Watching Movies / Series", icon: "fas fa-film" },
  { name: "Traveling", icon: "fas fa-plane" },
  { name: "Photography & Videography", icon: "fas fa-camera" },
];

const movieCollections = [
  {
    id: "indonesia",
    label: "Indonesia",
    flag: "ID",
    movies: [
      {
        title: "The Big Four (2022)",
        trailer: "https://www.youtube.com/embed/sQQJEiESrK0?si=AkoW5zgnm39-9Dep",
        synopsis:
          "An elite assassin is targeted by murderous gangsters after sparing a girl's life during a massacre.",
      },
      {
        title: "Sore (Tropicana Web Series 2017)",
        trailer: "https://www.youtube.com/embed/GlfaHW02seM?si=P_GnmYcfKS8XKr-S",
        synopsis:
          "Jonathan is an Indonesian man living in Italy when a woman named Sore appears and claims she is his wife from the future.",
      },
    ],
  },
  {
    id: "korea",
    label: "South Korea",
    flag: "KR",
    movies: [
      {
        title: "Past Lives (2023)",
        trailer: "https://www.youtube.com/embed/kA244xewjcI?si=J7ER0Pektli55FWl",
        synopsis:
          "Two childhood sweethearts reunite for one fateful week and confront destiny, love, and the choices that shape a life.",
      },
      {
        title: "Happiness (K-Drama Series 2021)",
        trailer: "https://www.youtube.com/embed/gqhUlldiLEo?si=AJd4ojTt_6gG29AG",
        synopsis:
          "Residents of a newly built high-rise apartment are sealed inside after a new infectious disease breaks out.",
      },
    ],
  },
  {
    id: "usa",
    label: "United States",
    flag: "US",
    movies: [
      {
        title: "Crazy Rich Asians (2018)",
        trailer: "https://www.youtube.com/embed/ZQ-YX-5bAs0?si=hmSul5BsBf-zx7xM",
        synopsis:
          "Rachel travels to Singapore with her boyfriend and discovers that his family is extremely wealthy and difficult to impress.",
      },
      {
        title: "Friends (TV Series 1994-2004)",
        trailer: "https://www.youtube.com/embed/W9GYMfLcnDY?si=m3eacJ20a4-Ut-jc",
        synopsis:
          "Six friends living in Manhattan navigate work, relationships, and the everyday adventures that keep bringing them together.",
      },
    ],
  },
  {
    id: "disney",
    label: "Disney",
    movies: [
      {
        title: "Hoppers",
        trailer: "https://www.youtube.com/embed/PypDSyIRRSs",
        synopsis:
          "An animal lover uses new technology to communicate with animals and discovers a world much bigger than she imagined.",
      },
      {
        title: "Big Hero 6 (2014)",
        trailer: "https://www.youtube.com/embed/z3biFxZIJOQ",
        synopsis:
          "A robotics prodigy and his healthcare companion Baymax join a team of friends to protect their city.",
      },
    ],
  },
];

export default function Hobbies() {
  const [modalMov, setModalMov] = React.useState(false);
  const [activeCollection, setActiveCollection] = React.useState("indonesia");

  return (
    <div className="section section-tabs" id="hobbies-section">
      <Container>
        <div className="title">
          <h3 className="mb-3">When I Have Free Time</h3>
        </div>
        <Row className="align-items-center">
          <Col lg="5">
            <h1 className="profile-title text-left">Hobbies</h1>
            <h5 className="text-on-back">Hobby</h5>
            <p className="profile-description text-left">
              I like balancing active hobbies, quiet moments, creative work,
              and new experiences. These are the things that help me recharge
              and stay curious outside of work.
            </p>
            <Button
              className="btn-simple mt-3"
              color="primary"
              onClick={() => setModalMov(true)}
            >
              <i className="tim-icons icon-video-66" /> Favorite Movies
            </Button>
          </Col>
          <Col lg="7">
            <Row className="hobby-grid">
              {hobbies.map((hobby) => (
                <Col key={hobby.name} md="6">
                  <div className="hobby-card">
                    <i className={hobby.icon} />
                    <span>{hobby.name}</span>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

      <Modal
        modalClassName="modal-black modal-mov"
        isOpen={modalMov}
        toggle={() => setModalMov(false)}
      >
        <div className="modal-header justify-content-center">
          <h4>My Favorite Movies & Series</h4>
          <button
            aria-label="Close"
            className="close"
            onClick={() => setModalMov(false)}
          >
            <i className="tim-icons icon-simple-remove text-white" />
          </button>
        </div>
        <ModalBody>
          <Nav className="nav-tabs-primary movie-tabs justify-content-center" tabs>
            {movieCollections.map((collection) => (
              <NavItem key={collection.id}>
                <NavLink
                  className={classnames({
                    active: activeCollection === collection.id,
                  })}
                  href={`#${collection.id}`}
                  onClick={(event) => {
                    event.preventDefault();
                    setActiveCollection(collection.id);
                  }}
                  title={collection.label}
                >
                  {collection.flag ? (
                    <span>
                    <img
                      alt={`${collection.label} flag`}
                      className="font-size-lg"
                      src={`https://flagcdn.com/24x18/${collection.flag.toLowerCase()}.png`}
                    />
                    </span>
                  ) : (
                    <span className="disney-tab">Disney</span>
                  )}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
          <TabContent activeTab={activeCollection}>
            {movieCollections.map((collection) => (
              <TabPane key={collection.id} tabId={collection.id}>
                <Row>
                  {collection.movies.map((movie) => (
                    <Col key={movie.title} md="6">
                      <div className="movie-card">
                        {movie.trailer ? (
                          <iframe
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            referrerPolicy="strict-origin-when-cross-origin"
                            src={movie.trailer}
                            title={`${movie.title} trailer`}
                          />
                        ) : (
                          <div className="movie-poster-placeholder">
                            <i className="tim-icons icon-video-66" />
                            <span>Disney favorite</span>
                          </div>
                        )}
                        <h4 className="mov-title">{movie.title}</h4>
                        <p className="text-justify">{movie.synopsis}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </TabPane>
            ))}
          </TabContent>
        </ModalBody>
      </Modal>
    </div>
  );
}
