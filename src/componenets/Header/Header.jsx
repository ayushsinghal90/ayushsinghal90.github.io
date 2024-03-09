import IconButton from "../Icons/IconButton";
import Home from "../Icons/Home";
import Twitter from "../Icons/Assets/Twitter";
import Github from "../Icons/Assets/Github";
import LinkedIn from "../Icons/Assets/Linkedin";

export default function Header() {
  return (
    <header className="bg-surface-secondary shadow sticky top-0 z-10 rounded-2xl">
      <nav className="px-2 lg:px-6 py-3.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center lg:order-1">
            <IconButton icon={<Home />} color="bg-surface-invert" />
          </div>
          <div className="flex justify-between space-x-4 items-center lg:order-2">
            <IconButton icon={<Twitter />} color="bg-surface-tertiary" />
            <IconButton icon={<Github />} color="bg-surface-tertiary" />
            <IconButton icon={<LinkedIn />} color="bg-surface-tertiary" />
          </div>
          <div
            className="bg-surface-invert font-semibold px-4 py-2 rounded-lg hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-3"
            id="mobile-menu-2"
          >
            <p>Contact Me</p>
          </div>
        </div>
      </nav>
    </header>
  );
}
