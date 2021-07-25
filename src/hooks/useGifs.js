import { useState, useEffect } from 'react';
import { API_BASE } from '../services/constants';
import decorateGifs from '../services/decorateGifs';

export default function useGifs({ type, query, limit = 16, rating = 'g'}) {
  const [page, setPage] = useState(0);
  const url =
    `${API_BASE}/gifs/${type}?api_key=${process.env.REACT_APP_API_GIPHY}${query ? '&q=' + query : ''}${limit ? '&limit=' + limit : ''}&offset=${page * limit}&rating=${rating}&lang=en`

  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {

    const getData = async () => {

      if (page === 0) setLoading(true);

      const res = await fetch(url);
      let { data: gifs, meta} = await res.json();

      if (meta.status === 404) {
        setError(true);
      } else {
        if (gifs) {
          gifs = decorateGifs(gifs)
          if (page === 0) {
            setGifs(gifs);
            setLoading(false);
          } else {
            setGifs(prev => prev.concat(gifs));
          }
        }
      }
    }

    getData();

  }, [url, page]);

  return { gifs, loading, error, page, setPage };
}
