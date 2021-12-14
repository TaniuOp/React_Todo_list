import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

// Importamos BrowserRouter para hacer redirecciones 
import { BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <img src={logo} className="App-logo" alt="logo" />
        <Main/>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
