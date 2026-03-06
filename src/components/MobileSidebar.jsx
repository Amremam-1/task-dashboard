import NavgiationLinks from "./NavgiationLinks"

const MobileSidebar = ({ openSidebar }) => {
  return (
    <div
      className={`
            fixed top-0 left-0 z-50
            h-screen w-12
            bg-sidebar text-white
            transition-transform duration-300 ease-in-out
            ${openSidebar ? "translate-x-0" : "-translate-x-full"}
          `}
    >
      {/* Top (Logo) */}
      <div className="h-15 mb-4  flex items-center border-b-[0.5px] border-borderColor">
        <div className="m-auto flex items-center justify-center bg-hover w-10 h-8 rounded-xl">
          {/* <img src="/images/logo.png" alt="logo" loading="lazy" /> */}
        </div>
      </div>

      <NavgiationLinks />
    </div>
  )
}

export default MobileSidebar
