import { IoMdPerson } from "react-icons/io"
import { MdOutlineInfo } from "react-icons/md"
import { NavLink } from "react-router-dom"

const navLinks = [
  { id: 1, title: "Dashboard", path: "/dashboard", icon: IoMdPerson },
  { id: 2, title: "Users", path: "/dashboard/users", icon: MdOutlineInfo },
]

const NavgiationLinks = () => {
  return (
    <div className="space-y-5 md:space-y-5 p-2 md:p-5 flex items-center flex-col">
      {navLinks.map((item) => (
        <NavLink
          key={item.id}
          to={item.path}
          end={item.path === "/dashboard"}
          className={({ isActive }) =>
            `p-1.5 md:p-2 flex items-center rounded-md cursor-pointer md:w-full w-fit
            border border-transparent
            transition-all duration-300 ease-in-out
            ${
              isActive
                ? "bg-primary text-white"
                : "text-white hover:bg-hover hover:border-borderColo hover:text-primary"
            }`
          }
        >
          <item.icon className="text-[20px] md:text-[20px]" />
          <span className="md:ms-2 font-normal hidden md:block">
            {item.title}
          </span>
        </NavLink>
      ))}
    </div>
  )
}

export default NavgiationLinks
