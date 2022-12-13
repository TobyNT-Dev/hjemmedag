import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Nav = styled.nav`
background-color: lightblue;
ul {
    margin: 0;
    padding: 0;
    display: inline-block;
    li {
        display: inline-block;
        background-color: greenyellow;
    }
}
`

export const NavBar = () => {
  return (
    <Nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/profile">Profile</Link></li>
        </ul>
    </Nav>
  )
}
