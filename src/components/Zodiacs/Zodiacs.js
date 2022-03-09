export default function ZodiacRender({ name, dates }) {
  return (
    <div className="zodiac-render">
      <img alt={name} src={`../../../${process.env.PUBLIC_URL}/assets/${name}.png`} />
      <span className="name">{name}</span>
      <span>{dates}</span>
    </div>
  );
}
