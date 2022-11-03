import React from 'react'
import { Nav, BigText } from './styles/nav.styled'
import { Link, BrowserRouter as Router } from 'react-router-dom'

export const Navbar = () => {
  return (
    <Nav>
      <Link to="/" style={{ textDecoration: 'none' }}>
          <BigText>90DayPT</BigText>
      </Link>
      <div>
          <Link to="/login" style={{ textDecoration: 'none', color: "whitesmoke", padding: "0.3125em" }}>login</Link>
          <Link to="/register" style={{ textDecoration: 'none', color: "whitesmoke", padding: "0.3125em" }}>Register</Link>
      </div>
    </Nav>
  )
}
