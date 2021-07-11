import { useEffect, useRef, useCallback } from 'react';
import GifsList from '../../components/GifsList';
import Spinner from '../../components/Spinner';
import useGifs from '../../hooks/useGifs';
import useNearScreen from '../../hooks/useNearScreen';
import debounce from 'just-debounce-it';
import useSeo from '../../hooks/useSeo';

export default function Gifs({ params: { keyword } }) {
  const elRef = useRef();
  const { gifs, loading, setPage } = useGifs({ type: 'search', query: keyword, limit: 16 });
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : elRef,
    once: false
  });
  const title = gifs ? `${gifs.length} results of ${keyword}` : '';
  useSeo({ title, description: `Gifs related by the term ${keyword}` });

  const handleNext = () => {
    setPage(prev => prev + 1);
  }
  // eslint-disable-next-line
  const handleDebouncedNextPage = useCallback(debounce(handleNext, 500),
  []);

  useEffect(() => {
    if (isNearScreen) handleDebouncedNextPage()
  }, [isNearScreen, handleDebouncedNextPage]);

  if (loading) return <Spinner />;

  return (
    <>
      <div className="mb-7">
        <GifsList gifs={gifs} title={`🔎 ${keyword}`}/>
        <div id="infinite-scroll-visor" ref={elRef}></div>
      </div>
    </>

  )
}
