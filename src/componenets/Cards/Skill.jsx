export default function Skill({ data }) {
  return (
    <div className="bg-surface-tertiary font-zodiak space-x-5 rounded-xl p-4 m-2 flex items-center w-48">
      <img src={data.imgSrc} alt={data.skill} className="w-10 h-10" />
      <span className="text-t-primary text-lg">{data.skill}</span>
    </div>
  );
}
