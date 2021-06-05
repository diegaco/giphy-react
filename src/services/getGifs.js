
export default async function getGifs({ keywords = 'panda' }) {
  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_GIPHY}&q=${keywords}&limit=10&offset=0&rating=G&lang=en`;
  const res = await fetch(API_URL);
  const data = await res.json();
  const gifs = data.data || [];
  return gifs;
}
