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
import { Button, Container, Row, Col } from "reactstrap";

export default function PageHeader() {
  return (
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
  );
}
