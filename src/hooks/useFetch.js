import { useState, useEffect } from 'react';

const decorateGifs = gifs => {
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
}

export default function useFetch(url) {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      let gifs = data.data || [];
      if (gifs.length) {
        gifs = decorateGifs(gifs)
        setGifs(gifs);
        setLoading(false);
      }
      return gifs;
    }
    getData();

  }, [url]);

  return { gifs, loading };
}
