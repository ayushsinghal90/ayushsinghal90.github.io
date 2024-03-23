export default function Logo({ data }) {
  const logo = data.logo;
  return (
    <>
      <img className={`${logo.height}`} src={logo.src} alt={logo.alt} />
    </>
  );
}
