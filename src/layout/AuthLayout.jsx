import React from "react"
import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <div className="maw-w-7xl m-auto text-center flex items-center justify-center">
      Hello
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout
