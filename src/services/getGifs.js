
export default async function getGifs({ keyword = 'panda' }) {
  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_GIPHY}&q=${keyword}&limit=10&offset=0&rating=G&lang=en`;
  const res = await fetch(API_URL);
  const data = await res.json();
  let gifs = data.data || [];
  if (gifs.length) {
    gifs = gifs.map(gif => {
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
  return gifs;
}
