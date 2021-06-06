import { useState } from 'react';
import Search from './components/Search/Search.component';
import GifList from './components/GifList/GifList.component';
import './App.css';

function App() {
  const [keyword, setKeyword] = useState('Monkeys');

  return (
    <main className="App">
      <section className="App-content">
        <h1>Gifs</h1>
        <Search setKeyword={setKeyword} />
        <GifList keyword={keyword} />
      </section>
    </main>
  );
}

export default App;
