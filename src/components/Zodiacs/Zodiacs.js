export default function ZodiacRender({ name, dates }) {
  console.log(name, 'name');
  return (
    <div className="zodiac-render">
      <img alt={name} src={`../../../${process.env.PUBLIC_URL}/assets/${name}.png`} />
      <span className="name">{name}</span>
      <span>{dates}</span>
    </div>
  );
}
