import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Error from '../Error/Error';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const containsHeader = ['/', '/movies', '/saved-movies', '/profile'];
  const showHeader = containsHeader.includes(location.pathname);
  const containsFooter = ['/', '/movies', '/saved-movies'];
  const showFooter = containsFooter.includes(location.pathname);

  return (
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
            <Movies />
          }
        />
        <Route 
          path='/saved-movies'
          element={
            <></>
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
            <Login />
          }
        />
        <Route 
          path='/signup'
          element={
            <Register />
          }
        />
      </Routes>
      
      {
        !showFooter ? null : <Footer />
      }
      {/* <Error /> */}
    </div>
  )
}

export default App;