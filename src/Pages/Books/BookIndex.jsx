import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import { Nav } from '../../Components/NavBar'
import { NotFound } from '../NotFound.jsx'

export const BookIndex = () => {
  return (
    <>
    <Nav>
      <ul>
        <li><Link to="/crime">Crime</Link></li>
        <li><Link to="/action">Action</Link></li>
        <li><Link to="/scifi/*">Sci-Fi</Link></li>
      </ul>
    </Nav>

    <Routes>
      <Route path="/" element={<h1>Root Element</h1>} />
      <Route path="crime" element={<h2>crime books</h2>}/>
      <Route path="" element={<h2>Action books</h2>} />
      <Route path="" element={<h2>Sci-Fi books</h2>} />
      <Route path="" element={<NotFound/>} />
    </Routes>
    </>
  )
}
