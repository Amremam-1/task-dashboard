import { MdMenuOpen } from "react-icons/md"
import { IoMdPerson } from "react-icons/io"
import { IoMdArrowDropdown } from "react-icons/io"
import { getAuth, signOut } from "firebase/auth"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const NavBar = ({ onClick }) => {
  const auth = getAuth()
  const user = auth.currentUser
  const [openMenu, setOpenMenu] = useState(false)
  const navigate = useNavigate()

  const handleLogout = async () => {
    await signOut(auth)
    navigate("/login")
  }

  return (
    <div className="h-16 flex items-center justify-between px-6 border-b border-borderColor bg-card text-textPrimary relative">
      {/* left */}

      <div className="flex items-center">
        <MdMenuOpen
          size={28}
          className="cursor-pointer text-textPrimary"
          onClick={onClick}
        />

        <h1 className="ms-2 font-semibold text-lg">Dashboard</h1>
      </div>

      {/* right */}

      <div className="flex items-center relative">
        <div className="flex items-center justify-center bg-hover w-8 h-8 rounded-md">
          <IoMdPerson size={20} className="text-primary" />
        </div>

        <div
          onClick={() => setOpenMenu(!openMenu)}
          className="flex items-center ms-2 gap-1 cursor-pointer"
        >
          <h3 className="text-textPrimary">
            {user?.email?.split("@")[0] || "Admin"}
          </h3>

          <IoMdArrowDropdown size={16} className="text-textSecondary" />
        </div>

        {/* dropdown */}

        {openMenu && (
          <div className="absolute right-0 top-12 w-44 bg-card border border-borderColor rounded-md shadow-lg p-2">
            <p className="text-sm px-3 py-2 text-textSecondary border-b border-borderColor">
              {user?.email?.split("@")[0] || "Admin"}
            </p>

            <button
              onClick={handleLogout}
              className="w-full text-left px-3 py-2 text-sm hover:bg-hover rounded-md text-red-500"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar
