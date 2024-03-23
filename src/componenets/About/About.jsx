import Designation from "../Cards/Designation";
import Skill from "../Cards/Skill";
import Carousel from "../Carousal/Carousal";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4 lg:px-8">
      <h2 className="text-t-secondary font-zodiak text-4xl lg:text-7xl font-bold mb-12 text-center">
        About Me
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 font-zodiak font-thin">
        <div className="bg-surface-secondary space-y-3 p-4 rounded-xl shadow-lg font-light">
          <Designation
            duration="2024-now"
            company="Deel"
            position="Backend Engineer"
          />
          <Designation
            duration="2022-2024"
            company="Amazon"
            position="Senior Software Developer"
          />
          <Designation
            duration="2021-2022"
            company="Meesho"
            position="Senior Software Developer"
          />
          <Designation
            duration="2020-2021"
            company="Razorpay"
            position="Software Developer"
          />
          <Designation
            duration="2019-2020"
            company="HashedIn"
            position="Software Developer"
          />
        </div>
        <div className="flex flex-col items-center justify-center lg:col-span-2">
          <div className="bg-surface-brand-secondary flex sm:flex-row flex-col space-x-5 rounded-xl p-6 mb-6 text-center lg:h-48">
            <div className="lg:order-1 justify-center w-auto">
              <img
                src="/Demo.webp"
                alt="Avatar"
                className="sm:w-full w-36 rounded-full mb-4 mx-auto bg-surface-primary"
              />
            </div>
            <div className="lg:order-2 justify-start text-left w-auto">
              <h3 className="font-zokiak text-t-invert text-2xl font-semibold mb-2 sm:text-left text-center">
                Ayush Singhal
              </h3>
              <p className="font-zokiak text-t-invert ">
                Result driven Software Development Engineer with 5 years of
                experience in designing, developing, and delivering innovative
                software solutions. Competency in driving impactful projects and
                mentoring engineers for delivering products and solutions to
                achieve strategic business outcomes.
              </p>
            </div>
          </div>
          <div className="bg-surface-secondary text-center sm:p-6 p-4 rounded-xl w-full">
            <h2 className="text-t-secondary font-zodiak text-3xl tracking-wide font-bold mb-4">
              My Stack
            </h2>
            <div className="flex flex-wrap justify-center">
              <Carousel
                elementMargin=""
                carouselMargin="mx-1"
                ChildComponent={Skill}
                list={[
                  {
                    imgSrc: "/programming/python.png",
                    skill: "Python",
                  },
                  {
                    imgSrc: "/programming/java.png",
                    skill: "Java",
                  },
                  {
                    imgSrc: "/programming/nodejs.png",
                    skill: "Node.js",
                  },
                  {
                    imgSrc: "/programming/mysql.png",
                    skill: "MySql",
                  },
                ]}
              />

              <Carousel
                elementMargin=""
                carouselMargin="mx-1"
                ChildComponent={Skill}
                list={[
                  {
                    imgSrc: "/programming/redis.png",
                    skill: "Redis",
                  },
                  {
                    imgSrc: "/programming/dynamoDB.png",
                    skill: "DynamoDB",
                  },
                  {
                    imgSrc: "/programming/aws.webp",
                    skill: "AWS",
                  },
                  {
                    imgSrc: "/programming/docker.png",
                    skill: "Docker",
                  },
                ]}
              />
              <Carousel
                elementMargin=""
                carouselMargin="mx-1"
                ChildComponent={Skill}
                list={[
                  {
                    imgSrc: "/programming/spring.png",
                    skill: "Spring Boot",
                  },
                  {
                    imgSrc: "/programming/express.png",
                    skill: "Express",
                  },
                  {
                    imgSrc: "/programming/sequelize.svg",
                    skill: "Sequelize",
                  },
                  {
                    imgSrc: "/programming/aws_s3.png",
                    skill: "AWS S3",
                  },
                  {
                    imgSrc: "/programming/aws_cdk.png",
                    skill: "AWS CDK",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
