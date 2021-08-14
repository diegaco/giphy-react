import { useEffect, useRef, useContext } from 'react';
import Search from './components/Search';
import { Route, Link, Switch, Redirect} from 'wouter';
import Gifs from './pages/Gifs';
import Gif from './pages/Gif/index';
import Home from './pages/Home';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import {Context } from './context/UserContext';
import { auth, createUserProfileDoc, getFavorites } from './services/firebase.utils';

function App() {
  const { setUser, setFavs } = useContext(Context);
  let unsubscribeFromAuth = useRef();

  useEffect(() => {
    unsubscribeFromAuth.current = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDoc(user);
        const favRef = await getFavorites({ userId: user.uid });

        favRef.onSnapshot(async snap => {
          const favs = [];
          snap.forEach(doc => {
            favs.push(doc.data());
          });
          setFavs(() => favs);
        });

        userRef.onSnapshot(snap => {
          // TODO aca leo favoritos
          const user = {
            id: snap.id,
            ...snap.data()
          }
          setUser(user);
        })
      } else {
        setUser(null);
      }
    });

    return () => unsubscribeFromAuth.current();
  // eslint-disable-next-line
  }, [])

  return (
    <>
      <Header />
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
              <Switch>
                <Route path="/" component={Home} />
                <Route path="/gifs/:keyword/:rating?" component={Gifs} />
                <Route path="/gif/:id" component={Gif} />
                <Route path="/login" component={Login} />
                <Route path="/404" component={NotFound} />
                <Redirect path="/:rest*" to="/404" />
              </Switch>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
