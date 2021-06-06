import { useState, useEffect } from 'react';
import Gif from '../Gif/Gif.component';
import getGifs from '../../services/getGifs';

export default function GifList({ keyword }) {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await getGifs({ keyword });
      setGifs(data);
    }
    getData();
  }, [keyword]);

  return (
    gifs.length ?
      (
        gifs.map(({ id, title, image: { url, width, height } }) => (
          <Gif
            key={id}
            id={id}
            title={title}
            url={url}
            width={width}
            height={height}
          />
        ))
      ) :
      (
        <h2>No se han encontrado gifs</h2>
      )
  )
}
