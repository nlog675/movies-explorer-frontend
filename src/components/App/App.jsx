import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Error from '../Error/Error';
import Register from '../Register/Register';
import Login from '../Login/Login';

function App() {
  return (
    <div className='App'>
      <Header />
      {/* <Main /> */}
      <Movies />
      <Footer />
      {/* <Error /> */}
      {/* <Register /> */}
      {/* <Login /> */}
    </div>
  )
}

export default App;