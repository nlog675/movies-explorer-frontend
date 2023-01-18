import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Error from '../Error/Error';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import { Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';
import SavedMovies from '../SavedMovies/SavedMovies';
import { useEffect } from 'react';
import { useState } from 'react';
import { mainApi } from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute.jsx/ProtectedRoute';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import { containsHeader, containsFooter } from '../../utils/constants';

function App() {
  const location = useLocation();
  
  const showHeader = containsHeader.includes(location.pathname);
  const showFooter = containsFooter.includes(location.pathname);
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [positiveResultText, setPositiveResultText] = useState('');
  const [negativeResultText, setNegativeResultText] = useState('');
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [succesfulResponse, setSuccesfulResponse] = useState(false);

  const handleRegister = ({ name, email, password }) => {
    mainApi.register(name, email, password)
      .then(() => {
        setSuccesfulResponse(true);
        setIsInfoTooltipOpen(true);
        setPositiveResultText('Успешная регистрация!');
        handleLogin({email, password});
        navigate('/movies');
      })
      .catch((err) => {
        setSuccesfulResponse(false);
        setIsInfoTooltipOpen(true);
      if (err.status === 409) {
        setNegativeResultText('Пользователь с таким email уже зарегистрирован!')
      } else {
      setNegativeResultText('Что-то пошло не так, попробуйте снова!')
      }
      });
  };

  const handleLogin = ({ email, password }) => {
    mainApi.login(email, password)
      .then(() => {
        setLoggedIn(true);
        setSuccesfulResponse(true);
        setIsInfoTooltipOpen(true);
        setPositiveResultText('Успешная авторизация!');
        navigate('/movies');
      })
      .then(() => tokenCheck())
      .catch((err) => {
        setSuccesfulResponse(false);
        setIsInfoTooltipOpen(true);
      if (err.status === 401) {
        setNegativeResultText('Ошибка авторизации!')
      } else {
      setNegativeResultText('Что-то пошло не так, попробуйте снова!')
      }
      });
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

    useEffect(() => {
      if (loggedIn) {
        mainApi.getSavedMovies()
          .then((data) => {
            setSavedMovies(data.filter((m) => m.owner === currentUser._id));
          })
          .catch((err) => console.log(err));
      }
    }, [currentUser, loggedIn]);

    const handleLogout = () => {
      mainApi.logout()
        .then(() => {
          setLoggedIn(false);
          setCurrentUser(null);
          setSuccesfulResponse(true);
          setPositiveResultText('Вы вышли из аккаунта!');
          setIsInfoTooltipOpen(true);
          navigate('/');
          localStorage.clear();
        })
        .catch(() => {
          setSuccesfulResponse(false);
          setNegativeResultText('Ошибка сервера');
          setIsInfoTooltipOpen(true);
        });
    };
  
    const handleEditProfile = (data) => {
      mainApi.editProfile(data)
        .then((newUser) => {
          setCurrentUser(newUser);
          setSuccesfulResponse(true);
          setPositiveResultText('Успешное редактирование профиля!');
          setIsInfoTooltipOpen(true);
        })
        .catch((err) => {
          if (err.status === 409) {
            setSuccesfulResponse(false);
            setNegativeResultText('Пользователь с таким email уже зарегистрирован!');
            setIsInfoTooltipOpen(true)
          } else {
            setSuccesfulResponse(false);
            setNegativeResultText('Ошибка сервера');
            setIsInfoTooltipOpen(true);
          }
        })
    };

    const saveMovie = (data) => {
      mainApi.addMovie(data)
        .then((movie) => {
          setSavedMovies([movie, ...savedMovies]);
        })
        .catch((err) => console.log(err))
    };

    const deleteMovie = (data) => {
      mainApi.deleteMovie(data._id)
        .then(() => {
          setSavedMovies((state) => state.filter((m) => m._id !== data._id))
        })
        .catch((err) => console.log(err))
    };

    const closeInfoTooltip = () => {
      setIsInfoTooltipOpen(false);
    };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='App'>
        
        {
          !showHeader ? null : <Header loggedIn={loggedIn} />
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
              <Movies 
              saveMovie={saveMovie}
              deleteMovie={deleteMovie}
              savedMovies={savedMovies}
              setNegativeResultText={setNegativeResultText}
              setIsInfoTooltipOpen={setIsInfoTooltipOpen}
              />
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
              <SavedMovies 
              savedMovies={savedMovies}
              saveMovie={saveMovie}
              deleteMovie={deleteMovie}
              />
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
              !loggedIn ?
              <Login 
              onLogin={handleLogin} />
              : 
              <Navigate replace to='/' />
          }
          />
          <Route 
            path='/signup'
            element={
              !loggedIn ?
              <Register 
              onRegister={handleRegister} />
              :
              <Navigate replace to='/' />
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

        <InfoTooltip 
        isOpen={isInfoTooltipOpen}
        onClose={closeInfoTooltip}
        succesfulResponse={succesfulResponse}
        positiveResultText={positiveResultText}
        negativeResultText={negativeResultText}
        />
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App;