import Spinner from '../../components/Spinner';
import useFetch from '../../hooks/useFetch';
import { API_BASE } from '../../services/constants';

export default function Detail({params: { id }}) {
  const { gifs, loading } = useFetch(`${API_BASE}/${id}?api_key=${process.env.REACT_APP_API_GIPHY}`)
  console.log(gifs);
  return (
    <div className="p-6 bg-gray-600 rounded">
      {
        loading ?
          <Spinner /> :
          <pre>
            JSON.stringify(gifs, 2, null);
          </pre>
      }
    </div>
  )
}
