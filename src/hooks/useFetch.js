import { useState, useEffect } from 'react';

const decorateGifs = gifs => {
  if (Array.isArray(gifs)) {
    return gifs.map(gif => {
      const { url, width, height } = gif.images.downsized_medium;
      const { title, id } = gif;
      return {
        id,
        title,
        image: {
          url,
          width,
          height
        }
      }
    })
  } else {
    const { url, width, height } = gifs.images.downsized_medium;
    const { title, id } = gifs;
    return {
      id,
      title,
      image: {
        url,
        width,
        height
      }
    }
  }
}

export default function useFetch(url) {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      let { data: gifs } = data;
      if (gifs) {
        gifs = decorateGifs(gifs)
        setGifs(gifs);
        setLoading(false);
      }
    }
    getData();

  }, [url]);

  return { gifs, loading };
}
