export default function Skill({ data }) {
  return (
    <div className="bg-surface-tertiary font-zodiak space-x-5 rounded-xl p-4 m-2 flex items-center sm:w-48 w-40">
      <img src={data.imgSrc} alt={data.skill} className="sm:w-10 w-6" />
      <span className="text-t-primary sm:text-lg text-base">{data.skill}</span>
    </div>
  );
}
