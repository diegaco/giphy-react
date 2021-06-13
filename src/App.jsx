import Search from './components/Search';
import { Route, Link } from 'wouter';
import Gifs from './pages/Gifs';
import Gif from './pages/Gif/index';
import Home from './pages/Home';

function App() {

  return (
    <main className="App py-10 bg-gray-800 min-h-screen">
      <div className="container mx-auto">
        <section className="App-content">
          <div className="App-header mb-5">
            <div className="flex justify-between">
              <Link to="/">
                <h1 className="text-7xl text-center text-purple-300 font-bold cursor-pointer inline-block">Giffy App 👾</h1>
              </Link>
              <Search />
            </div>
          </div>
          <Route path="/" component={Home} />
          <Route path="/gifs/:keyword" component={Gifs} />
          <Route path="/gif/:id" component={Gif} />
        </section>
      </div>
    </main>
  );
}

export default App;
