import Spinner from '../../components/Spinner';
import useFetch from '../../hooks/useFetch';
import Gif from '../../components/Gif';
import { API_BASE } from '../../services/constants';

export default function Detail({params: { id }}) {
  const { gifs: {title, image: { url, width, height } = {} }, loading } = useFetch(`${API_BASE}/${id}?api_key=${process.env.REACT_APP_API_GIPHY}`)
  return (
    <div className="p-6 bg-gray-600 rounded">
      {
        loading ?
          <Spinner /> :
          // <pre>
          //   {
          //     JSON.stringify(image, null, 2)
          //   }
          // </pre>
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
