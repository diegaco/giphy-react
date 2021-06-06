import Search from './components/Search/Search.component';
import { Route, Link } from 'wouter';
import GifList from './components/GifList/GifList.component';

function App() {

  return (
    <main className="App py-10 bg-gray-800 min-h-screen">
      <div className="container mx-auto">
        <section className="App-content">
          <div className="flex justify-center">
            <Link to="/">
              <h1 className="text-7xl text-center text-purple-300 font-bold cursor-pointer inline-block">Giffy App 👾</h1>
            </Link>
          </div>
          <Search />
          <Route path="/gif/:keyword" component={GifList} />
        </section>
      </div>
    </main>
  );
}

export default App;
