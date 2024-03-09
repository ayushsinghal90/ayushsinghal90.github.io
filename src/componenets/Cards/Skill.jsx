export default function Skill({ imgSrc, skill }) {
  return (
    <div className="bg-surface-tertiary font-zodiak space-x-3 rounded-xl p-4 m-2 flex items-center">
      <img src={imgSrc} alt={skill} className="w-10 h-10" />
      <span className="text-t-primary text-lg">{skill}</span>
    </div>
  );
}
