import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { Profile } from '../Pages/Profile.jsx'

export const Home = () => {
  return (
    <>
    <div>Home</div>
    <Routes>
      <Route path="/profile" element={<Profile />} />
    </Routes>
    <Outlet/>
    </>
  )
}
