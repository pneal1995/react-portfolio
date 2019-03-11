import React, { Component } from 'react';
import { Link } from 'react-router'
import styled from 'styled-components';

const ProfileImage = styled.img`
  width: 12em;
  height: 12em;
  border-radius: 50%;
`;

const ProfileTitle = styled.h1`
  color: #333;
`

const HeaderDiv = styled.div`
  padding-top: 5vh;
  text-align: center;
  font-family: 'Zilla Slab Highlight', sans-serif;
  color: #375E97;
`;

const NavLink = styled(Link)`
  display: inline-flex;
  margin: 0 5px;
  color: #375E97;
  font-size: 20px;
`


class Header extends Component {
  render() {
    return (
      <HeaderDiv>
        <Link to="/">
          <ProfileImage src={require('../assets/confettiCropped.png')} alt='Preston Neal'/>
          <ProfileTitle>Preston Neal</ProfileTitle>
        </Link>
        <div>
          <NavLink to='/'>About Me</NavLink>
          <NavLink to='/code'>My Work</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </div>
        <hr/>
      </HeaderDiv>
    );
  }
}

export default Header;