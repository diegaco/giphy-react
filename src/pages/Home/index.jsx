import GifsList from '../../components/GifsList';
import Spinner from '../../components/Spinner';
import useGifs from '../../hooks/useGifs';
import WithSidebar from '../../components/WithSidebar';


export default function Home() {
  const { gifs, loading } = useGifs({ type: 'trending', limit: 12 });
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
