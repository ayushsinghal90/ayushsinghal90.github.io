export default function Logo({ data }) {
  return (
    <>
      <img className={`${data.height}`} src={data.src} alt={data.alt} />
    </>
  );
}
