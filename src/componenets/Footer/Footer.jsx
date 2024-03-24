import IconButton from "../Icons/IconButton";
import Home from "../Icons/Home";
import Twitter from "../Icons/Assets/Twitter";
import Github from "../Icons/Assets/Github";
import LinkedIn from "../Icons/Assets/Linkedin";
import Profile from "../../data/Profile";

export default function Footer() {
  return (
    <footer className="bg-surface-secondary shadow sticky  top-0 rounded-2xl">
      <div className="p-10">
        <div className="flex flex-col space-y-10 justify-between items-center mx-auto max-w-screen-xl">
          {/* <div className="flex items-center lg:order-1">
            <IconButton icon={<Home />} color="bg-surface-invert" />
          </div> */}
          <div className="flex justify-between space-x-10 items-center lg:order-2">
            <IconButton
              icon={<Twitter link={Profile.follow.twitter} />}
              color="bg-surface-tertiary"
            />
            <IconButton
              icon={<Github link={Profile.follow.github} />}
              color="bg-surface-tertiary"
            />
            <IconButton
              icon={<LinkedIn link={Profile.follow.linkedin} />}
              color="bg-surface-tertiary"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
