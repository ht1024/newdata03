/*!

=========================================================
* Material Kit React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

Removed <GridItem xs={12}> What is xs=12 mean?</GridItem> from line 140 on 08182025

*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
//import { Links } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
//import SectionExamples from "./Sections/SectionExamples.jsx";

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

class Components extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          brand="Continuous Exploration"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white",
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/nd-bg10.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>
                    <i>NEW</i>DATA
                  </h1>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.container}>
              <GridContainer>
                <GridItem>
                  <br />
                  <h2>💻 Web Developer Profile</h2>
                  <p>
                    Web Developer committed to optimizing the user journey, user
                    flow, and the design and development of user portals and
                    integrations. Willing to lead by example and actively
                    contribute to coding and debugging efforts. Continuously
                    evaluating product strengths and addressing limitations to
                    drive improvement.
                  </p>
                  <p>
                    Experienced in road mapping and project planning, with a
                    strong sense of ownership over delivery. Actively engaged in
                    project management as the team executes strategic plans.
                    Previous responsibilities include communicating progress and
                    status updates to stakeholders.
                  </p>

                  <br />
                  <h2>🌐 Project Highlight</h2>
                  <p>
                    This website was built using{" "}
                    <a href="https://nodejs.org/en/about/" target="blank">
                      NodeJS
                    </a>{" "}
                    featuring asynchronous programming, modular architecture,
                    and React libraries for dynamic component rendering.{" "}
                  </p>

                  <br />
                  <h2>🚀 Technical Interests</h2>
                  <p>
                    My interest in web applications and technology is primarily
                    focused on the three core languages of the web:
                  </p>
                  <ul>
                    <li>
                      HTML – The standard markup language for structuring
                      content in the browser
                    </li>
                    <li>
                      CSS – The style sheet language that defines how HTML
                      elements are visually presented
                    </li>
                    <li>
                      JavaScript – A powerful and versatile programming language
                      that drives functionality across modern web applications
                    </li>
                  </ul>

                  <br />
                  <h2>🧰 Frameworks & Tools</h2>
                  <ul>
                    <li>Bootstrap</li>
                    <li>jQuery</li>
                    <li>
                      React – Currently the most popular JavaScript library for
                      building user interfaces
                    </li>
                  </ul>

                  <br />
                  <h2>⚙️ Runtime Environment</h2>
                  <p>
                    Experienced in refactoring and styling{" "}
                    <a href="https://nodejs.org/en/about/" target="blank">
                      NodeJS
                    </a>{" "}
                    applications, including the creation and customization of
                    reusable components.
                  </p>

                  <br />
                  <h2>🎨 UX/UI Skills & Tools</h2>
                  <ul>
                    <li>App & Website Design</li>
                    <li>Adobe Creative Suite</li>
                    <li>Figmah</li>
                    <li>Online Graphics and Video Editors</li>
                    <li>Sketch</li>
                  </ul>
                  <br />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

Components.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(componentsStyle)(Components);
