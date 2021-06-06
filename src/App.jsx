import { useState } from 'react';
import Search from './components/Search/Search.component';
import GifList from './components/GifList/GifList.component';
import './App.styles.css';

function App() {
  const [keyword, setKeyword] = useState('Monkeys');

  return (
    <main className="App py-10">
      <div className="container mx-auto">
        <section className="App-content">
          <h1 className="text-7xl text-center text-purple-300 font-bold">Giffy App 👾</h1>
          <Search setKeyword={setKeyword} />
          <GifList keyword={keyword} />
        </section>
      </div>
    </main>
  );
}

export default App;
