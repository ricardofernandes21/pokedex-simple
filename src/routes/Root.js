
import {  Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"


import React from 'react'

export const Root = () => {
  return (
    <div>
            <Navbar />
            <Outlet />
    </div>
  )
}
