import React, { Component } from "react";
import styled from "styled-components";

import { CenteredHeader } from "./App.js";
import { ColorScheme } from "../theme/styleConstants";

const PortRow = styled.div`
  margin: 0;
  padding-top: 50px;
  padding-bottom: 50px;
  display: block;
`;

const CodeThumbnail = styled.img`
  width: 100%;
  display: block;
  margin: 0 auto;
`;

const PortAllText = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const PortTitleContainer = styled.div`
  position: relative;
  margin: 0 auto;
  align-items: baseline;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-end;
  align-content: stretch;

  @media (max-width: 600px) {
    display: inline;
  }
`;

const PortTitle = styled.h2`
  flex: 1;
  font-family: Gotham, Helvetica, Arial, sans-serif;
  text-transform: uppercase;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const PortButton = styled.a`
  padding: 10px 15px;
  background: 0 0;
  border: 2px solid ${ColorScheme.secondary};
  border-radius: 3px;
  margin: 0 5px;
  color: ${ColorScheme.secondary};
  font-family: Gotham, Helvetica, Arial, sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  transition: all 0.3s ease;
  &:hover {
    background: ${ColorScheme.primary};
    color: #fff;
    border-color: ${ColorScheme.primary};
  }

  @media (max-width: 600px) {
    padding: 5px 7px;
  }
`;

const PortButtonContainer = styled.div`
  width: 30%;
  margin: 0 auto;

  @media (max-width: 600px) {
    margin-top: 15px;
    width: 50%;
  }
`;

const PortDescription = styled.p`
  display: block;
  margin: 15px 0;
`;

const UsedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
`;

const UsedItem = styled.ul`
  display: inline-block;
  padding: 7px 7px 5px;
  margin-right: 5px;
  margin-bottom: 10px;
  color: #fff;
  background: ${ColorScheme.secondary};
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

class Code extends Component {
  render() {
    return (
      <div>
        <div>
          <CenteredHeader>Skills:</CenteredHeader>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h5>Front-end:</h5>
              <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Redux</li>
                <li>HTML5</li>
                <li>CSS3/Sass</li>
                <li>jQuery</li>
                <li>AJAX</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h5>Back-end:</h5>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>SQL/PostgreSQL</li>
                <li>Sequelize</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h5>Other:</h5>
              <ul>
                <li>Git</li>
                <li>JSON</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <CenteredHeader>Recent work:</CenteredHeader>
          <PortRow>
            <a href="http://www.digitaldirector.org/" target="_blank">
              <CodeThumbnail src={require("../assets/DigitalDirectorScreenshot.png")} />
            </a>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>Digital Director</PortTitle>
                <PortButtonContainer>
                  <PortButton href="http://www.digitaldirector.org/" target="_blank">
                    Demo
                </PortButton>
                  <PortButton
                    href="https://github.com/MicroFish91/Digital-Director"
                    target="_blank"
                  >
                    Code
                </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <PortDescription>
                My second group project for DigitalCrafts coding cohort, DigitalDirector is a 
                light-weight, full stack web application built to help teachers manage their 
                after school programs. The application connects a back-end server and database 
                to a convenient and intuitive front-end UI which assists the user in tracking 
                student information, inventory, and calendar events.
            </PortDescription>
              <PortDescription>
                I worked with an incredibly smart team to create Digital Director in
                only one week.
            </PortDescription>
              <UsedList>
                <UsedItem>Node.js</UsedItem>
                <UsedItem>Express.js</UsedItem>
                <UsedItem>PostgreSQL</UsedItem>
                <UsedItem>Sequelize.js</UsedItem>
                <UsedItem>Google OAuth 2.0</UsedItem>
                <UsedItem>MindFusion Scheduler</UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>
          <hr />
          <PortRow>
            <a href="http://www.pillow-realty.com" target="_blank">
              <CodeThumbnail
                src={require("../assets/PillowRealtyScreenshot.png")}
              />
            </a>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>Pillow Realty</PortTitle>
                <PortButtonContainer>
                  <PortButton
                    href="http://www.pillow-realty.com"
                    target="_blank"
                  >
                    Demo
                </PortButton>
                  <PortButton
                    href="https://github.com/namaslay33/GroupProject1"
                    target="_blank"
                  >
                    Code
                  </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <PortDescription>
                For my first group project at DigitalCrafts, my team made a mock realty website
                using four API's. Pillow Realty provides an easy way to find median house prices,
                 school information, and social events in any city in the US.
            </PortDescription>
              <UsedList>
                <UsedItem>JavaScript</UsedItem>
                <UsedItem>jQuery</UsedItem>
                <UsedItem>HTML</UsedItem>
                <UsedItem>CSS</UsedItem>
                <UsedItem>Google Maps API</UsedItem>
                <UsedItem>JSON and XML Data</UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>
        </div>
      </div>
    );
  }
}

export default Code;
