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
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function IndexNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  const scrollToProjects = () => {
    document.getElementById("project-section").scrollIntoView({ behavior: "smooth" });
  };
  const scrollToStoryExpertise = () => {
    document.getElementById("story-section").scrollIntoView({ behavior: "smooth" });
  };
  const scrollToWorkExperience = () => {
    document.getElementById("works-section").scrollIntoView({ behavior: "smooth" });
  };
  const scrollToEdu = () => {
    document.getElementById("edu-section").scrollIntoView({ behavior: "smooth" });
  };
  const scrollToHobbies = () => {
    document.getElementById("hobbies-section").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" tag={Link} id="navbar-brand">
            <i className="tim-icons icon-planet" /> 
            {" "}<span>Oci's </span>
            Website
          </NavbarBrand>
          <UncontrolledTooltip placement="bottom" target="navbar-brand">
            Initiated Coded by Creative Tim. Updated by Yoshima Putri.
          </UncontrolledTooltip>
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Oci's
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://github.com/yoshimaputri"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow me on Github"
              >
                <i className="fab fa-github" />
                <p className="d-lg-none d-xl-none">Github</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://www.linkedin.com/in/yoshimaputri/"
                rel="noopener noreferrer"
                target="_blank"
                title="Connect with me on LinkedIn"
              >
                <i className="fab fa-linkedin" />
                <p className="d-lg-none d-xl-none">LinkedIn</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/yoshimaputri"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow me on Instagram"
              >
                <i className="fab fa-instagram" />
                <p className="d-lg-none d-xl-none">Instagram</p>
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                nav
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-cogs d-lg-none d-xl-none" />
                Get to know me
              </DropdownToggle>
              <DropdownMenu className="dropdown-with-icons">
                <DropdownItem onClick={scrollToWorkExperience}>
                  <i className="tim-icons icon-laptop" />
                  Work Experience
                </DropdownItem>
                <DropdownItem onClick={scrollToEdu}>
                  <i className="tim-icons icon-bank" />
                  Education
                </DropdownItem>
                {/* <DropdownItem href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/overview">
                  <i className="tim-icons icon-world" />
                  Language's Story
                </DropdownItem> */}
                {/* <DropdownItem href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/overview">
                  <i className="tim-icons icon-paper" />
                  Publication
                </DropdownItem> */}
                <DropdownItem onClick={scrollToHobbies}>
                  <i className="tim-icons icon-palette" />
                  Hobbies
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <Button
                className="nav-link d-none d-lg-block"
                color="primary"
                onClick={scrollToStoryExpertise}
              >
                <i className="tim-icons icon-spaceship" /> View my Expertise
              </Button>
            </NavItem>
            <NavItem>
              <Button
                className="nav-link d-none d-lg-block"
                color="default"
                onClick={scrollToProjects}
              >
                <i className="tim-icons icon-notes" /> Projects
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
