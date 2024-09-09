/*!
=========================================================
* Updated by Yoshima Putri
=========================================================
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
