import Spinner from '../../components/Spinner';
import useGifs from '../../hooks/useGifs';
import Gif from '../../components/Gif';

export default function Detail({params: { id }}) {
  const { gifs: { title, image: { url, width, height } = {} }, loading } = useGifs({ type: id })
  return (
    <div className="p-6 bg-gray-600 rounded">
      {
        loading ?
          <Spinner /> :
          <Gif
            id={id}
            title={title}
            url={url}
            width={width}
            height={height}
          />
      }
    </div>
  )
}
