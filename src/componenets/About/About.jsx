import Designation from "../Cards/Designation";
import Skill from "../Cards/Skill";
import Carousel from "../Carousal/Carousal";
import Profile from "../../data/Profile";

export default function About() {
  const carouselSkills = () => {
    const size = Profile.skills.length;
    const starts = [0, size / 3, 2 * (size / 3)];
    return (
      <>
        <Carousel
          elementMargin=""
          carouselMargin="mx-1"
          ChildComponent={Skill}
          list={Profile.skills.slice(starts[0], size / 3)}
        />
        <Carousel
          elementMargin=""
          carouselMargin="mx-1"
          ChildComponent={Skill}
          list={Profile.skills.slice(starts[1], starts[1] + size / 3)}
        />
        <Carousel
          elementMargin=""
          carouselMargin="mx-1"
          ChildComponent={Skill}
          list={Profile.skills.slice(starts[2], starts[2] + size / 3 + 1)}
        />
      </>
    );
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 lg:px-8">
      <h2 className="text-t-secondary font-zodiak text-4xl lg:text-7xl font-bold mb-12 text-center">
        About Me
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 font-zodiak font-thin">
        <div className="flex flex-col space-y-3 p-4 rounded-xl shadow-lg font-light bg-surface-secondary flex-grow lg:order-1 order-2">
          {Profile.designation.map((data, index) => (
            <div key={index} className="flex-grow">
              <Designation
                duration={data.duration}
                company={data.company}
                position={data.position}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center lg:col-span-2 lg:order-2 order-1">
          <div className="bg-surface-brand-secondary flex sm:flex-row flex-col space-x-5 rounded-xl sm:p-6 p-4 mb-6 text-center">
            <div className="lg:order-1 justify-center w-auto">
              <img
                src="/Demo.webp"
                alt="Avatar"
                className="sm:w-full w-36 rounded-full mb-4 mx-auto bg-surface-primary"
              />
            </div>
            <div className="lg:order-2 justify-start text-left w-auto">
              <h3 className="font-zokiak text-t-invert text-2xl font-semibold mb-2 sm:text-left text-center">
                {Profile.details.name}
              </h3>
              <p className="font-zokiak text-t-invert text-lg">
                {Profile.details.about}
              </p>
            </div>
          </div>
          <div className="bg-surface-secondary text-center sm:p-6 p-4 rounded-xl w-full">
            <h2 className="text-t-secondary font-zodiak text-3xl tracking-wide font-bold mb-4">
              My Stack
            </h2>
            <div className="flex flex-wrap justify-center">
              {carouselSkills()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
