export default function Gif({id, title, url, width, height}) {
  return (
    <figure key={id}>
      <img src={url} alt={title} width={width} height={height} />
      <h3>{title}</h3>
    </figure>
  );
}
