import Spinner from '../../components/Spinner';
import useGifs from '../../hooks/useGifs';
import Gif from '../../components/Gif';
import { API_BASE } from '../../services/constants';

export default function Detail({params: { id }}) {
  const { gifs: {title, image: { url, width, height } = {} }, loading } = useGifs(`${API_BASE}/${id}?api_key=${process.env.REACT_APP_API_GIPHY}`)
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
