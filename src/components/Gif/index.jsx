export default function Gif({id, title, url, width, height}) {
  return (
    <figure key={id} className="rounded-lg overflow-hidden shadow-lg bg-gray-100 hover:shadow-xl transition-shadow flex flex-col flex-grow">
      <img className="w-full flex-grow object-cover" src={url} alt={title} width={width} height={height} />
      <div className="p-3">
        <h3 className="text-center font-bold text-purple-500">{title}</h3>
      </div>
    </figure>
  );
}
