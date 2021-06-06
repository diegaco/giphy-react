import { useState, useEffect } from 'react';
import Spinner from '../Spinner/Spinner.component';
import Gif from '../Gif/Gif.component';
import getGifs from '../../services/getGifs';

export default function GifList({ params: { keyword }}) {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    async function getData() {
      const data = await getGifs({ keyword });
      setGifs(data);
      setLoading(false)
    }
    getData();
  }, [keyword]);

  if (loading) return <Spinner />;

  return (
    gifs.length ?
      (
        <div className="grid grid-cols-4 gap-4">
          {gifs.map(({ id, title, image: { url, width, height } }) => (
            <Gif
              key={id}
              id={id}
              title={title}
              url={url}
              width={width}
              height={height}
            />
          ))}
        </div>
      ) :
      (
        <h2>No se han encontrado gifs</h2>
      )
  )
}
