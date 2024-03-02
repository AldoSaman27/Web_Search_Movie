import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './components/Movie';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <NavigationBar/>
      <Header/>
      <Movie/>
      <Footer/>
    </div>
  );
}

export default App;
