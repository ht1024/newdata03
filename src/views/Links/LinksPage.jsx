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
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import profile from "assets/img/faces/ht.jpg";
import profilePageStyle from "assets/jss/material-kit-react/views/linksPage.jsx";

class LinksPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div>
        <Header
          color="transparent"
          brand="UX/UI Designer Developer"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/nd-bg09.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Homero Tristan</h3>
                      <h6>UX/UI DESIGNER DEVELOPER</h6>
                      <Button justIcon link className={classes.margin5}>
                        <a href="https://www.linkedin.com/in/homerotristan/">
                          <i className={"fab fa-linkedin"} />
                        </a>
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <a href="https://github.com/ht1024">
                          <i className={"fab fa-github"} />
                        </a>
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-facebook"} />
                      </Button>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <br></br>
              <div className={classes.description}>
                <p>
                  Devoted to working and fullfilling each projects mission by
                  creating friendly, accessible guided paths for project success
                  and user satisfaction.
                </p>

              </div>
              <div>
                <h3>Domino Applications on Cloud</h3>
                <p>
                  My latest project as software Designer was to create a UI/UX
                  for my departments first cloud offering. I was able to work
                  with very talentaed and experienced IBM Developers.
                </p>
                <a
                  href="https://pages.github.ibm.com/htrista/Experience/offerings/off-domino-app-cloud.html"
                  target="new"
                  className=""
                >
                  Product Page: Domino Applications on Cloud Exmaple
                </a>
                <br></br>
                <p>
                  https://pages.github.ibm.com/htrista/Experience/offerings/off-domino-app-cloud.html
                </p>
              </div>

              <div>
                <h3>ICS Wins of Note</h3>
                <p>
                  From a bootstrap oreiented template transferred into IBM
                  Design Web Libraries<br></br>A Highlight of our Collab
                  Services wins!
                </p>
                <a
                  href="https://pages.github.ibm.com/htrista/Experience/wins/wins.html"
                  target="new"
                >
                  ICS Wins of Note
                </a>
                <br></br>
                <p>
                  https://pages.github.ibm.com/htrista/Experience/wins/wins.html
                </p>

                <br></br>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

LinksPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(profilePageStyle)(LinksPage);
