import React from "react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Container,
  Input,
  Modal,
  ModalBody,
  Row,
} from "reactstrap";

import Footer from "components/Footer/Footer.js";
import IndexNavbar from "components/Navbars/IndexNavbar.js";

const books = [
  {
    title: "Attached",
    author: "Amir Levine and Rachel Heller",
    categories: ["love", "life", "self-help"],
    description:
      "Reflections on attachment styles, emotional needs, and building healthier relationships.",
    quotes: [
      "Most people are only as needy as their unmet needs.",
      "Dependency is a fact; it is not a choice or a preference.",
      "Being clear about your needs creates room for a more secure relationship.",
    ],
  },
  {
    title: "Range",
    author: "David Epstein",
    categories: ["career", "education", "life", "self-help"],
    description:
      "Ideas about broad experience, experimentation, and finding strength beyond early specialization.",
    quotes: [
      "We learn who we are in practice, not in theory.",
      "Compare yourself to yourself yesterday, not to younger people who aren't you.",
      "A winding path can become an advantage when it teaches you how to adapt.",
    ],
  },
];

const categories = [
  "all",
  "life",
  "love",
  "friendship",
  "career",
  "education",
  "parent",
  "child",
  "self-help",
];

export default function MotivationalQuotes() {
  const [activeBook, setActiveBook] = React.useState(null);
  const [activeCategory, setActiveCategory] = React.useState("all");
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    document.body.classList.add("index-page");
    window.scrollTo(0, 0);

    return () => document.body.classList.remove("index-page");
  }, []);

  const normalizedSearch = search.trim().toLowerCase();
  const filteredBooks = books.filter((book) => {
    const matchesCategory =
      activeCategory === "all" || book.categories.includes(activeCategory);
    const searchableText = [
      book.title,
      book.author,
      book.description,
      ...book.categories,
      ...book.quotes,
    ]
      .join(" ")
      .toLowerCase();

    return matchesCategory && searchableText.includes(normalizedSearch);
  });

  return (
    <>
      <IndexNavbar />
      <div className="wrapper quotes-page">
        <main className="main">
          <section className="section quotes-hero">
            <Container>
              <Row className="justify-content-center text-center">
                <Col lg="9">
                  <p className="text-primary quote-eyebrow">Words worth keeping</p>
                  <h1>Motivational Quotes</h1>
                  <p className="profile-description">
                    Browse memorable ideas from favorite books. Select a book to
                    open its quote collection, or search by topic.
                  </p>
                </Col>
              </Row>
              <Row className="justify-content-center mt-4">
                <Col lg="8">
                  <Input
                    aria-label="Search quotes, books, or authors"
                    className="quotes-search"
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search quotes, books, authors, or categories..."
                    type="search"
                    value={search}
                  />
                </Col>
              </Row>
              <div className="quote-categories">
                {categories.map((category) => (
                  <Button
                    className="btn-simple"
                    color={activeCategory === category ? "primary" : "default"}
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    size="sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </Container>
          </section>

          <section className="section pt-0">
            <Container>
              <Row>
                {filteredBooks.map((book) => (
                  <Col key={book.title} lg="6">
                    <Card
                      className="quote-book-card"
                      onClick={() => setActiveBook(book)}
                      role="button"
                      tabIndex="0"
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          setActiveBook(book);
                        }
                      }}
                    >
                      <CardHeader>
                        <span className="quote-book-icon">
                          <i className="tim-icons icon-book-bookmark" />
                        </span>
                        <h3>{book.title}</h3>
                        <p>by {book.author}</p>
                      </CardHeader>
                      <CardBody>
                        <p>{book.description}</p>
                        <div>
                          {book.categories.map((category) => (
                            <Badge color="primary" key={category} pill>
                              {category}
                            </Badge>
                          ))}
                        </div>
                      </CardBody>
                      <CardFooter>
                        <span>
                          Open {book.quotes.length} quotes{" "}
                          <i className="tim-icons icon-minimal-right" />
                        </span>
                      </CardFooter>
                    </Card>
                  </Col>
                ))}
              </Row>
              {filteredBooks.length === 0 && (
                <div className="quotes-empty">
                  <i className="tim-icons icon-zoom-split" />
                  <h4>No matching quote collections yet</h4>
                  <p>Try another search or category.</p>
                </div>
              )}
            </Container>
          </section>
        </main>
        <Footer />
      </div>

      <Modal
        isOpen={Boolean(activeBook)}
        modalClassName="modal-black quote-modal"
        toggle={() => setActiveBook(null)}
      >
        {activeBook && (
          <>
            <div className="modal-header">
              <div>
                <h3>{activeBook.title}</h3>
                <p className="mb-0">by {activeBook.author}</p>
              </div>
              <button
                aria-label="Close"
                className="close"
                onClick={() => setActiveBook(null)}
              >
                <i className="tim-icons icon-simple-remove text-white" />
              </button>
            </div>
            <ModalBody>
              <ol className="quote-list">
                {activeBook.quotes.map((quote) => (
                  <li key={quote}>
                    <i className="tim-icons icon-double-right" />
                    <p>{quote}</p>
                  </li>
                ))}
              </ol>
            </ModalBody>
          </>
        )}
      </Modal>
    </>
  );
}
