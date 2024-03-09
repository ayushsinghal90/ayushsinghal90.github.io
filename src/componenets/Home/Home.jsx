import IconButton from "../Icons/IconButton";
import Twitter from "../Icons/Assets/Twitter";
import Github from "../Icons/Assets/Github";
import LinkedIn from "../Icons/Assets/Linkedin";
import About from "../About/About";

export default function Home() {
  return (
    <>
      <div className=" items-center mt-40">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="text-center lg:text-left lg:order-1">
            <span className="text-green-500 mb-4">Available for Work</span>
            <h1 className="text-t-primary font-zodiak text-4xl lg:text-7xl font-bold mb-4">
              I'm Ayush Singhal. <br />
              I Code * Create <br /> * Innovate.
            </h1>
            <p className="text-t-secondary font-martel-sans text-xl lg:text-2xl mb-8">
              Empowering Ideas Through End-to-End Development <br />
              Expertise and Seamless User Interfaces
            </p>
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="bg-surface-brand font-semibold text-t-invert px-6 py-3 rounded-lg mr-4">
                Start a Project
              </div>
              <div className="bg-b-secondary font-semibold text-t-secondary px-6 py-3 rounded-lg">
                Browse Works
              </div>
            </div>
          </div>
          <div className="invisible lg:visible justify-end mt-8 lg:order-2">
            <div className="relative">
              <img
                src="/HeroImage.png"
                alt="Avatar"
                className="w-32 lg:w-80 h-32 lg:h-80 rounded-full border-8 border-surface-brand-secondary mx-auto"
              />
              <div className="bg-b-secondary rounded-3xl p-2 bg-opacity-60 absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-4">
                <IconButton icon={<Twitter />} color="bg-surface-tertiary" />
                <IconButton icon={<Github />} color="bg-surface-tertiary" />
                <IconButton icon={<LinkedIn />} color="bg-surface-tertiary" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
    </>
  );
}
