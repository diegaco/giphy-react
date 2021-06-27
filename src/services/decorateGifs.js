
export default function decorateGifs(gifs) {
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
};
