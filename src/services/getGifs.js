let API_BASE = `https://api.giphy.com/v1/gifs`;

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

export async function getGifsByKeyword({ keyword = 'panda' }) {
  const API_URL = `${API_BASE}/search?api_key=${process.env.REACT_APP_API_GIPHY}&q=${keyword}&limit=12&offset=0&rating=G&lang=en`;
  const res = await fetch(API_URL);
  const data = await res.json();
  let gifs = data.data || [];
  if (gifs.length) {
    gifs = decorateGifs(gifs)
  }
  return gifs;
}

export async function getTrendingGifs() {
  const API_URL = `${API_BASE}/trending?api_key=${process.env.REACT_APP_API_GIPHY}&limit=12&offset=0&rating=G&lang=en`;
  const res = await fetch(API_URL);
  const data = await res.json();
  let gifs = data.data || [];
  if (gifs.length) {
    gifs = decorateGifs(gifs);
  }
  return gifs;
}
