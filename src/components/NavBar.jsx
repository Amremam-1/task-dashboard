import { MdMenuOpen } from "react-icons/md"
import { IoMdPerson } from "react-icons/io"
import { IoMdArrowDropdown } from "react-icons/io"

const NavBar = ({ onClick }) => {
  return (
    <div className="h-16 flex items-center justify-between px-6 border-b border-borderColor bg-card text-textPrimary">
      <div className="flex items-center">
        <MdMenuOpen
          size={28}
          className="cursor-pointer text-textPrimary"
          onClick={onClick}
        />

        <h1 className="ms-2 font-semibold text-lg">Dashboard</h1>
      </div>

      <div className="flex items-center">
        <div className="flex items-center justify-center bg-hover w-8 h-8 rounded-md">
          <IoMdPerson size={20} className="text-primary" />
        </div>

        <div className="flex items-center ms-2 gap-1 cursor-pointer">
          <h3 className="text-textPrimary">Admin</h3>
          <IoMdArrowDropdown size={16} className="text-textSecondary" />
        </div>
      </div>
    </div>
  )
}

export default NavBar
