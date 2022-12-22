import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Error from '../Error/Error';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import SavedMovies from '../SavedMovies/SavedMovies';
import { useEffect } from 'react';
import { moviesApi } from '../../utils/MoviesApi';
import { useState } from 'react';
import { mainApi } from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const location = useLocation();
  const containsHeader = ['/', '/movies', '/saved-movies', '/profile'];
  const showHeader = containsHeader.includes(location.pathname);
  const containsFooter = ['/', '/movies', '/saved-movies'];
  const showFooter = containsFooter.includes(location.pathname);
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [registered, setRegistered] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    moviesApi.getMovies()
    .then((movies) => {
      localStorage.setItem('movies', JSON.stringify(movies));
    });
  });

  useEffect(() => {
    if (loggedIn) {
      mainApi.getProfile()
        .then((user) => {
          setCurrentUser(user);
        })
        .catch((err) => console.log(err));
    };
  }, [loggedIn]);

  const handleRegister = (name, email, password) => {
    return mainApi.register(name, email, password)
      .then(() => {
        setRegistered(true);
        navigate('/movies');
      })
      .catch((err) => console.log(err));
  };

  const handleLogin = (email, password) => {
    return mainApi.login(email, password)
      .then((res) => {
        if(!res?.email) return;
        setLoggedIn(true);
        navigate('/movies');
        setLoggedIn(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='App'>
        {
          !showHeader ? null : <Header />
        }

        <Routes>
          <Route 
            path='/'
            element=
            {
              <Main />
            }
          />
          <Route 
            path='/movies'
            element=
            {
              <Movies 
              movies={movies}
              />
            }
          />
          <Route 
            path='/saved-movies'
            element={
              <SavedMovies />
            }
          />
          <Route 
            path='/profile'
            element={
              <Profile />
            }
          />
          <Route 
            path='/signin'
            element={
              <Login 
              onLogin={handleLogin}/>
            }
          />
          <Route 
            path='/signup'
            element={
              <Register 
              onRegister={handleRegister}
              />
            }
          />
          <Route 
            path='*'
            element={
              <Error />
            }
          />
        </Routes>
        
        {
          !showFooter ? null : <Footer />
        }
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App;