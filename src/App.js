import { useState, useEffect } from 'react';
import './App.css';
import getGifs from './services/getGifs';


function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await getGifs({ keywords: 'monkey' });
      setGifs(data);
    }
    getData();
  }, []);

  return (
    <main className="App">
      <section className="App-content">
        <h1>Gifs</h1>
        {
          gifs ?
            (
              gifs.map(gif => {
                console.log(gif);
                const { url, width, height } = gif.images.downsized_medium;
                const { title, id } = gif;
                console.log(gif);
                return (
                  <figure key={id}>
                    <img src={url} alt={title} width={width} height={height} />
                    <h3>{title}</h3>
                  </figure>
                )
              })
            ) :
            (
              <h2>No se han encontrado gifs</h2>
            )
        }
      </section>
    </main>
  );
}

export default App;
