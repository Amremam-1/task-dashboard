import React from "react"
import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <div className="maw-w-7xl m-auto flex items-center justify-center min-h-screen bg-background">
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout
