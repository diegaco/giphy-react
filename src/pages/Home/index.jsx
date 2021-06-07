import {useState, useEffect} from 'react';
import GifsList from '../../components/GifsList';
import Spinner from '../../components/Spinner';
import { getTrendingGifs } from '../../services/getGifs';

export default function Home() {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState( true );

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const data = await getTrendingGifs();
      setGifs(data);
      setLoading(false);
    }
    getData();
  }, [])

  if (loading) return <Spinner />;

  return (
    <GifsList gifs={gifs} title={'📈 Trending' }/>
  )
}
