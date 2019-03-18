import React, { Component } from 'react';
import { Link } from 'react-router'
import styled from 'styled-components';
import LottieBanner from './LottieBanner.js'



const ProfileTitle = styled.h1`
  color: #4c3f77;
`

const HeaderDiv = styled.div`
  padding-top: 5vh;
  text-align: center;
  font-family: 'Zilla Slab Highlight', sans-serif;
  color: #a4bcbc;
`;

const NavLink = styled(Link)`
  display: inline-flex;
  margin: 0 5px;
  color: #a4bcbc;
  font-size: 20px;
`


class Header extends Component {
  render() {
    return (
      <HeaderDiv>
        <ProfileTitle>The Osg Podcast</ProfileTitle>
        <Link to="/">
          
          <LottieBanner/>
          
        </Link>
        <div>


        </div>
        <hr/>
        Presented by:
        
      </HeaderDiv>
    );
  }
}

export default Header;