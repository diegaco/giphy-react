import { useState, useEffect } from 'react';
import GifsList from '../../components/GifsList';
import Spinner from '../../components/Spinner';
import { getGifsByKeyword } from '../../services/getGifs';

export default function Gifs({ params: { keyword }}) {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    async function getData() {
      const data = await getGifsByKeyword({ keyword });
      setGifs(data);
      setLoading(false)
    }
    getData();
  }, [keyword]);

  if (loading) return <Spinner />;

  return (
    <GifsList gifs={gifs}/>
  )
}
