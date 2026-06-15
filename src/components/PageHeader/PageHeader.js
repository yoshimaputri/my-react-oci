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

// reactstrap components
import { Button, Col, Container, Input, Modal, ModalBody, Row } from "reactstrap";

import moodRecommendations from "data/moodRecommendations.json";

const fallbackRecommendation =
  moodRecommendations.find((recommendation) => recommendation.keyword === "general") ||
  moodRecommendations[0];

function normalizeMoodText(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getMoodRecommendation(moodText) {
  const normalizedMood = normalizeMoodText(moodText);

  if (!normalizedMood) {
    return null;
  }

  return (
    moodRecommendations.find((recommendation) => {
      const keywords = [recommendation.keyword, ...recommendation.aliases];

      return keywords.some((keyword) => normalizedMood.includes(keyword));
    }) || fallbackRecommendation
  );
}

export default function PageHeader() {
  const [isMoodSearchOpen, setIsMoodSearchOpen] = React.useState(false);
  const [isRecommendationModalOpen, setIsRecommendationModalOpen] =
    React.useState(false);
  const [moodInput, setMoodInput] = React.useState("");
  const [recommendation, setRecommendation] = React.useState(null);

  const handleRecommendationSearch = () => {
    const nextRecommendation = getMoodRecommendation(moodInput);

    if (nextRecommendation) {
      setRecommendation(nextRecommendation);
      setIsRecommendationModalOpen(true);
    }
  };

  const renderRecommendationList = (title, icon, items, renderItem) => (
    <Col lg="6" key={title}>
      <div className="mood-result-group">
        <h5>
          <i className={icon} /> {title}
        </h5>
        <ul>
          {items.map((item) => (
            <li key={`${title}-${item.title || item.text || item.name}`}>
              {renderItem(item)}
            </li>
          ))}
        </ul>
      </div>
    </Col>
  );

  return (
    <>
      <div className="page-header header-filter">
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />
        <Container>
          <div>
            <Row>
              <Col className="ml-auto mr-auto" md="8" xl="8">
                <h1 className="h1-seo h1-title aes-font">Yoshima Putri,</h1>
                <h3 className="h3-desc">
                  A seasoned IT professional with a strong foundation in Computer Science.
                </h3>
                <div className="hero-actions">
                  <a className="btn btn-default" target="_blank" rel="noopener noreferrer" href="mailto:yoshimaputri@gmail.com">
                    Send Email <i className="fa fa-envelope icon-middle" />
                  </a>
                  <Button
                    aria-expanded={isMoodSearchOpen}
                    className="btn-simple mood-toggle-btn"
                    color="primary"
                    onClick={() => setIsMoodSearchOpen((isOpen) => !isOpen)}
                  >
                    How do you feel today?
                  </Button>
                </div>
                {isMoodSearchOpen && (
                  <div className="mood-recommender">
                    <div className="mood-recommender-form">
                      <Input
                        aria-label="Tell me how you feel today"
                        onChange={(event) => setMoodInput(event.target.value)}
                        onKeyDown={(event) => {
                          if (event.key === "Enter") {
                            handleRecommendationSearch();
                          }
                        }}
                        placeholder="Example: i need motivation"
                        type="text"
                        value={moodInput}
                      />
                      <Button color="primary" onClick={handleRecommendationSearch}>
                        search recommendation
                      </Button>
                    </div>
                  </div>
                )}
              </Col>
              <Col className="ml-auto mr-auto" md="3" xl="3">
                <img
                  alt="..."
                  className="img-center img-fluid rounded-circle image-hover-effect"
                  src={require("assets/img/yoshima_square_closeup2.jpg")}
                />
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <Modal
        modalClassName="modal-black modal-mood-recommendation"
        isOpen={isRecommendationModalOpen}
        toggle={() => setIsRecommendationModalOpen(false)}
      >
        <div className="modal-header justify-content-center">
          <div className="mood-modal-title">
            <h4>Recommendation For Your Mood</h4>
            {recommendation && (
              <p className="mood-keyword">
                keyword: <span>{recommendation.keyword}</span>
              </p>
            )}
          </div>
          <button
            aria-label="Close"
            className="close"
            onClick={() => setIsRecommendationModalOpen(false)}
          >
            <i className="tim-icons icon-simple-remove text-white" />
          </button>
        </div>
        <ModalBody>
          {recommendation && (
            <div className="mood-results">
              <Row>
                {renderRecommendationList(
                  "Movie recommendation",
                  "tim-icons icon-video-66",
                  recommendation.movies,
                  (movie) => (
                    <>
                      <strong>{movie.title}</strong>
                      <span>{movie.reason}</span>
                    </>
                  )
                )}
                {renderRecommendationList(
                  "Book recommendation",
                  "tim-icons icon-book-bookmark",
                  recommendation.books,
                  (book) => (
                    <>
                      <strong>{book.title}</strong>
                      <span>
                        {book.author} - {book.reason}
                      </span>
                    </>
                  )
                )}
                {renderRecommendationList(
                  "Motivational quotes",
                  "tim-icons icon-chat-33",
                  recommendation.quotes,
                  (quote) => (
                    <>
                      <strong>"{quote.text}"</strong>
                      <span>{quote.author}</span>
                    </>
                  )
                )}
                {renderRecommendationList(
                  "Activity recommendation",
                  "tim-icons icon-spaceship",
                  recommendation.activities,
                  (activity) => (
                    <>
                      <strong>{activity.name}</strong>
                      <span>{activity.detail}</span>
                    </>
                  )
                )}
              </Row>
            </div>
          )}
        </ModalBody>
      </Modal>
    </>
  );
}
