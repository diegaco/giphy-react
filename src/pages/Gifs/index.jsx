import GifsList from '../../components/GifsList';
import Pagination from '../../components/Pagination/Pagination';
import Spinner from '../../components/Spinner';
import useGifs from '../../hooks/useGifs';

export default function Gifs({ params: { keyword } }) {

  const { gifs, loading, page, setPage } = useGifs({ type: 'search', query: keyword });

  const handleNext = () => {
    console.log('click next');
    setPage(prev => prev + 1);
  }

  const handlePrev = () => {
    console.log('click prev');
    setPage(prev => prev - 1);
  }

  if (loading) return <Spinner />;

  return (
    <>
      <div className="mb-7">
        <GifsList gifs={gifs} title={`🔎 ${keyword}`}/>
      </div>
      <Pagination page={page} handlePrev={handlePrev} handleNext={handleNext} />
    </>

  )
}
