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

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";

// sections for this page/view
import Expertise from "views/IndexSections/Expertise.js";
import Works from "views/IndexSections/Works.js";
import Education from "./IndexSections/Education";
import Hobbies from "./IndexSections/Hobbies";
import Projects from "./IndexSections/Projects";

export default function Index() {
  React.useEffect(() => {
    // Add Google Tag script
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-22FHXSF0SY';
    script.async = true;
    document.head.appendChild(script);

    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-22FHXSF0SY');
    `;
    document.head.appendChild(inlineScript);

    // Toggle body class
    document.body.classList.toggle('index-page');

    // Cleanup function
    return () => {
      document.body.classList.toggle('index-page');
      document.head.removeChild(script);
      document.head.removeChild(inlineScript);
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <PageHeader />
        <div className="main">
          <Expertise />
          <Works />
          <Education />
          <Hobbies />
          <Projects />
        </div>
        <Footer />
      </div>
    </>
  );
}
