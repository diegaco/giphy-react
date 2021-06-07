import Gif from '../Gif';

export default function GifsList({ gifs, title='📝 Gifs List' }) {
  return (
    <div className="p-6 bg-gray-600 rounded">
      <h2 className="text-5xl font-medium text-purple-300 mb-7 text-center">{title}</h2>
      {
        gifs.length ?
          (
            <div className="grid grid-cols-4 gap-4">
              {gifs.map(({ id, title, image: { url, width, height } }) => (
                <Gif
                  key={id}
                  id={id}
                  title={title}
                  url={url}
                  width={width}
                  height={height}
                />
              ))}
            </div>
          ) :
          (
            <h2>No se han encontrado gifs</h2>
        )
      }
    </div>
  )
}
