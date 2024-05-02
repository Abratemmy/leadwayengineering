
import './App.scss';
// import Home from './Pages/Home/Home';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './components/Router';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ marginTop: '120px' }}>
        <Router />
      </div>

      <Footer />
    </div>
  );
}

export default App;
