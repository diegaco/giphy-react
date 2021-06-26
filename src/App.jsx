import Search from './components/Search';
import { Route, Link } from 'wouter';
import Gifs from './pages/Gifs';
import Gif from './pages/Gif/index';
import Home from './pages/Home';

function App() {

  return (
    <main className="App py-8 md:py-10 bg-gray-800 min-h-screen">
      <div className="container mx-auto">
        <section className="App-content">
          <div className="App-header mb-5">
            <div className="flex flex-col md:flex-row md:justify-between items-center">
              <Link to="/">
                <h1 className="md:mb-0 mb-8 text-6xl lg:text-7xl text-center text-purple-300 font-bold cursor-pointer inline-block">Giffy App 👾</h1>
              </Link>
              <Search />
            </div>
          </div>
          <div className="p-6 bg-gray-600 rounded">
            <Route path="/" component={Home} />
            <Route path="/gifs/:keyword" component={Gifs} />
            <Route path="/gif/:id" component={Gif} />
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
