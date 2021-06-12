import GifsList from '../../components/GifsList';
import Spinner from '../../components/Spinner';
import useFetch from '../../hooks/useFetch';
import { API_BASE } from '../../services/constants';

export default function Gifs({ params: { keyword }}) {
  const { gifs, loading } = useFetch(`${API_BASE}/search?api_key=${process.env.REACT_APP_API_GIPHY}&q=${keyword}&limit=12&offset=0&rating=G&lang=en`)

  if (loading) return <Spinner />;

  return (
    <GifsList gifs={gifs} title={`🔎 ${keyword}`}/>
  )
}
