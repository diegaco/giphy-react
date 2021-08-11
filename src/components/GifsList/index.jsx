import Gif from '../Gif';
import useUser from '../../hooks/useUser';

export default function GifsList({ gifs, title='📝 Gifs List', cols = 4 }) {
  const { user } = useUser();
  return (
    <>
      <h2 className="text-4xl md:text-5xl font-medium text-purple-300 mb-7 text-center">{title}</h2>
      {
        gifs.length ?
          (
            <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${cols} gap-4`}>
              {gifs.map(({ id, title, image: { url, width, height } }) => (
                <Gif
                  key={id}
                  id={id}
                  title={title}
                  url={url}
                  width={width}
                  height={height}
                  userId={user.id}
                />
              ))}
            </div>
          ) :
          (
            <h2>No se han encontrado gifs</h2>
          )
      }
    </>
  )
}
