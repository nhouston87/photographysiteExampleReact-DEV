import React from 'react'
import styled from 'styled-components'

const navitems = {
  home: 'home',
  about: 'about',
  portfolio: 'portfolio',
  services: 'services',
  blog: 'blog',
  contact: 'contact'
}

const NavDiv = styled.div`
  width: 100%;
  height: 100%;
`

const NavUl = styled.ul`
  width: 100%;
  height: 100%;
`

const NavItem = styled.li`
  background-color: black;
  color: white;
  &.is-active {
    background-color: white;
    color: black;
  }

  &:hover {
    background-color: white;
    color: black;
  }
`

const NavBar = (props) => {
  return (
    <NavDiv>
      <NavUl className="list-group">
        <NavItem 
        className={ props.active === 'home' ? 'list-group-item is-active' : 'list-group-item'}
        onClick={(e) => props.clicked(e, navitems.home)}
        >Home</NavItem>

        <NavItem 
        className={ props.active === 'about' ? 'list-group-item is-active' : 'list-group-item'} 
        onClick={(e) => props.clicked(e, navitems.about)}
        >About</NavItem>

        <NavItem 
        className={ props.active === 'portfolio' ? 'list-group-item is-active' : 'list-group-item'} 
        onClick={(e) => props.clicked(e, navitems.portfolio)}
        >Portfolio</NavItem>

        <NavItem 
        className={ props.active === 'services' ? 'list-group-item is-active' : 'list-group-item'} 
        onClick={(e) => props.clicked(e, navitems.services)}
        >Services</NavItem>

        <NavItem 
        className={ props.active === 'blog' ? 'list-group-item is-active' : 'list-group-item'} 
        onClick={(e) => props.clicked(e, navitems.blog)}
        >Blog</NavItem>

        <NavItem className={ props.active === 'contact' ? 'list-group-item is-active' : 'list-group-item'} 
        onClick={(e) => props.clicked(e, navitems.contact)}
        >Contact</NavItem>

      </NavUl>
    </NavDiv>
  )
}

export default NavBar