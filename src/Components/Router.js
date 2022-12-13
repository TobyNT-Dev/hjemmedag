import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../Pages/Home.jsx'
import { BookIndex } from '../Pages/Books/BookIndex.jsx'

export const Router = () => {
  return (
    <>
    <Routes>
        <Route path="/*" element={ <Home /> } />
        <Route path="/books" element={ <BookIndex /> } />
    </Routes>
    </>
  )
}
