import GifsList from '../../components/GifsList';
import Spinner from '../../components/Spinner';
import useGifs from '../../hooks/useGifs';
import { API_BASE } from '../../services/constants';
import WithSidebar from '../../components/WithSidebar';


export default function Home() {
  const { gifs, loading } = useGifs(`${API_BASE}/gifs/trending?api_key=${process.env.REACT_APP_API_GIPHY}&limit=12&offset=0&rating=G&lang=en`);
  const GifListWithSidebar = WithSidebar(GifsList);

  return (
    <div className="">
      {(
        loading ?
          <Spinner /> :
          <GifListWithSidebar gifs={gifs} title={'📈 Trending Gifs'} cols={3} />
      )}
    </div>
  )
}
