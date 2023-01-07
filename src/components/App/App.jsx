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
import { useState } from 'react';
import { mainApi } from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const location = useLocation();
  const containsHeader = ['/', '/movies', '/saved-movies', '/profile'];
  const showHeader = containsHeader.includes(location.pathname);
  const containsFooter = ['/', '/movies', '/saved-movies'];
  const showFooter = containsFooter.includes(location.pathname);
  const navigate = useNavigate();
  const [registered, setRegistered] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({});

  const handleRegister = ({ name, email, password }) => {
    mainApi.register(name, email, password)
      .then(() => {
        setRegistered(true);
        handleLogin({email, password});
        navigate('/movies');
      })
      .catch((err) => console.log(err));
  };

  const handleLogin = ({ email, password }) => {
    mainApi.login(email, password)
      .then(() => {
        setLoggedIn(true);
        navigate('/movies');
      })
      .then(() => tokenCheck())
      .catch((err) => console.log(err));
  };

  
    const tokenCheck = () => {
      mainApi.getProfile()
        .then((res) => {
            setCurrentUser(res)
            setLoggedIn(true);
        })
        .catch((err) => {
          setLoggedIn(false);
          console.log(err);
        })
    };

    useEffect(() => {
      tokenCheck();
    } , []);

    const handleLogout = () => {
      mainApi.logout()
        .then(() => {
          setLoggedIn(false);
          setCurrentUser(null);
          navigate('/');
          localStorage.clear();
        })
        .catch((err) => console.log(err));
    };
  
    const handleEditProfile = (data) => {
      mainApi.editProfile(data)
        .then((newUser) => {
          setCurrentUser(newUser);
        })
        .catch((err) => console.log(err))
    }

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
            element={
              <ProtectedRoute

                loggedIn={loggedIn}>
            {
              <Movies />
            }
            </ProtectedRoute>
          }
          />
          <Route 
            path='/saved-movies'
            element={
              <ProtectedRoute
                loggedIn={loggedIn}>
            {
              <SavedMovies />
            }
            </ProtectedRoute>
          }
          />
          <Route 
            path='/profile'
            element={
              <ProtectedRoute
                loggedIn={loggedIn}>
            {
              <Profile 
              onLogout={handleLogout}
              handleEditProfile={handleEditProfile}
              />
            }
            </ProtectedRoute>
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