import { useState, useEffect } from 'react';
import { API_BASE } from '../services/constants';
import decorateGifs from '../services/decorateGifs';

const INITIAL_PAGE = 0;

export default function useGifs({ type, query, limit = 16 }) {
  const [page, setPage] = useState(INITIAL_PAGE);
  const url =
    `${API_BASE}/gifs/${type}?api_key=${process.env.REACT_APP_API_GIPHY}${query ? '&q=' + query : ''}${limit ? '&limit=' + limit : ''}&offset=${page === 0 ? page * limit : (page * limit) + 1}&rating=G&lang=en`

  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      if (page === INITIAL_PAGE) setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      let { data: gifs } = data;
      if (gifs) {
        gifs = decorateGifs(gifs)
        if (page === INITIAL_PAGE) {
          setGifs(gifs);
          setLoading(false);
        } else {
          setGifs(prev => prev.concat(gifs));
        }
      }
    }
    getData();
  }, [url, page]);

  return { gifs, loading, page, setPage };
}
