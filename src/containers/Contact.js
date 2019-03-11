import React, { Component } from 'react';
import styled from 'styled-components';

import { CenteredHeader } from './App.js'
import { PortButton } from './Code.js'

const FormDiv = styled.div`
  margin: 0 auto;
  width: 50%;
`

const FormLabel = styled.label`
  display: block;
`

const FormInput = styled.input`
  width: 100%;
`

const CommentInput = styled.textarea`
  width: 100%;
  height: 6em;
`

const EmailMe = styled.p`
  text-align: center;
  padding: 4%;
`

class Contact extends Component {

  render() {
    return (
      <div>
        <CenteredHeader>Get in touch with me!</CenteredHeader>

        <FormDiv>
          <form action="https://formspree.io/pneal1995@gmail.com" method="POST" id="contactform">
            <div>
              <FormLabel>Name:</FormLabel>
              <FormInput type="text" name="name" />
            </div>
            <div>
              <FormLabel>Email:</FormLabel>
              <FormInput type="text" name="_replyto" />
            </div>
            <div>
              <FormLabel>Comment:</FormLabel>
              <CommentInput name="comment" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </FormDiv>

        <EmailMe>Or, just email me directly at <a href="mailto:pneal1995@gmail.com" target="_blank"><strong>pneal1995@gmail.com</strong></a>.</EmailMe>

        {/* <hr/> */}
        <CenteredHeader><PortButton href="https://docs.google.com/document/export?format=pdf&id=1oBnnZo9vJI2bideuLYG7CH8cslCY2B0czd6qC3aiKn0&token=AC4w5ViKKbhsdOw7NYAuwGZ1yYLtusAXdQ%3A1552053205760&ouid=100236559789356257911&includes_info_params=true" target="_blank">Download My Resume</PortButton></CenteredHeader>
      </div>
    );
  }
}

export default Contact;
