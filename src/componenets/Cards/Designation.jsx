export default function Designation({ duration, company, position }) {
  return (
    <div className="flex flex-row text-left lg:space-x-5 sm:space-x-10 space-x-5 bg-surface-tertiary rounded-lg lg:p-6 p-5">
      <div className="lg:order-1 justify-start">
        <h3 className="text-t-primary text-xl font-bold">{duration}</h3>
      </div>
      <div className="lg:order-2 justify-start">
        <div className="flex lg:flex-col sm:flex-row flex-col justify-between">
          <p className="text-t-primary sm:w-52 lg:w-auto">{company}</p>
          <p className="text-t-secondary font-light">{position}</p>
        </div>
      </div>
    </div>
  );
}
