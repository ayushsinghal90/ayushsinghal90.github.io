export default function Designation({ duration, company, position }) {
  return (
    <div className="flex flex-row text-left space-x-5 bg-surface-tertiary rounded-lg p-6">
      <div className="lg:order-1 justify-start">
        <h3 className="text-t-primary text-xl font-bold mb-2">{duration}</h3>
      </div>
      <div className="lg:order-2 justify-start">
        <p className="text-t-primary">{company}</p>
        <p className="text-t-secondary font-light">{position}</p>
      </div>
    </div>
  );
}
