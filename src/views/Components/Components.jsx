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

*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
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
import SectionExamples from "./Sections/SectionExamples.jsx";

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
            color: "white"
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/nd-bg10.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}><i>NEW</i>DATA</h1>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>


        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>


          <div className={classes.container}>
            <GridContainer>
              <GridItem >
              <h2>Front-End Web Development</h2>
              <p>Web Developer committed to the user journey, user flow, design &amp; development of user portals and integrations. 
                Willing to lead by example and participate in all coding and debugging. Continually considering strengths and improving limitations of product. Experienced with road mapping/project planning efforts and having ownership for delivery. I am actively engaged in project management efforts as the team executes plans. Previous responsibilities include communicating progress and status to stakeholders.</p>
                <p>This website was built with <a href="https://nodejs.org/en/about/" target="blank">NodeJS</a> featuring asynchronous programming, multiple components and utilizing React Libraries.  </p>
              </GridItem>
              
              <GridItem xs={12}>
              <h2>
              Preferences
                </h2>
                <p>My interest in web applications and technology are primally concentrated on the 3 main mark-up, style and programming languages&#58;</p> 
                <ul>
                <li>CSS</li>
                <li>HTML</li>
                <li>NodeJS</li>
              </ul> 
              
              <br/>
              <h3>Hyper Text Markup Language (HTML) &amp; Cascading Style Sheets (CSS)</h3>
              <p>My strengths&#58; HTML, being the standard markup language for displaying documents in a browser along with CSS the Style Sheet Language for that describes how HTML elements should be displayed.</p>
              <br/>
              <h3>JavaScript (JS)</h3>
              <p>
                The power behind so many web applications a great versatile language.
              </p>
              <br/>
              <h3>Web Development Frameworks &amp; Tools</h3>
              <ul>
                <li>Bootstrap</li>
                <li>jQuery</li>
              <li>React (Currently most popular Framework or Library) JavaScript Library</li>
              </ul> 
              <br/>
              <h3>Runtime Environment</h3>
              <p>Experienced in refactoring and stylizing NodeJS Applications. Creating and customizing stylized components.</p>
              <ul>
                <li>NodeJS</li>
              </ul> 
              <br/>
              <h3>UX/UI Skills &amp; Tools</h3>
              <p>App &amp; Website Design </p>
              <ul>
                <li>Adobe Creative Suite</li>
                <li>Sketch</li>
                <li>Online Graphics/Video Editors</li>
              </ul> 
              <br/>
              git clone git@github.com:ht1024/newdata03.git
              
              
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
  classes: PropTypes.object
};

export default withStyles(componentsStyle)(Components);
