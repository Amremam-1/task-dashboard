import NavgiationLinks from "./NavgiationLinks"

const DesktopSidebar = ({ openSidebar }) => {
  return (
    <div
      className={`
        fixed top-0 left-0 z-50
        h-screen w-65
        bg-sidebar text-white
        transition-transform duration-300 ease-in-out
        ${openSidebar ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      {/* Top (Logo) */}

      <div className="h-16 px-6 flex items-center border-b border-borderColor">
        <div className="flex items-center justify-center bg-hover w-10 h-10 rounded-xl">
          {/* <img src="/images/logo.png" alt="logo" loading="lazy" /> */}
        </div>

        <h1 className="ms-2 font-semibold uppercase whitespace-nowrap">
          Dashboard <span className="text-primary">Panel</span>
        </h1>
      </div>

      <NavgiationLinks />
    </div>
  )
}

export default DesktopSidebar
