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
import {
  Container,
  Row,
} from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-info">
          <h4 className="title">© 2024 All rights reserved</h4>
        </Row>
        <Row className="footer-info">
          <div>Made with ❤ and <a target="_blank" rel="noopener noreferrer" href="https://www.creative-tim.com/product/blk-design-system-react">BLK• Design Template</a></div>
        </Row>
      </Container>
    </footer>
  );
}
