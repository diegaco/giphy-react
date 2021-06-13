import GifsList from '../../components/GifsList';
import Spinner from '../../components/Spinner';
import useFetch from '../../hooks/useFetch';
import { API_BASE } from '../../services/constants';

export default function Home() {
  const { gifs, loading } = useFetch(`${API_BASE}/trending?api_key=${process.env.REACT_APP_API_GIPHY}&limit=12&offset=0&rating=G&lang=en`);

  return (
    <div className="">
      {(
        loading ?
          <Spinner /> :
          <GifsList gifs={gifs} title={'📈 Trending'} />
      )}
    </div>
  )
}
