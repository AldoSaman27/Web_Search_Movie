// Style
import './App.css';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Components Movie
import Movie from './components/Movie';

// Components Header
import Header from './components/Header';

// Components NavigationBar
import NavigationBar from './components/NavigationBar';

// Components Footer
import Footer from './components/Footer';


function App() {
    return (
        <>
            {/* NavigationBar */}
            <NavigationBar/>

            {/* Header */}
            <Header/>

            {/* Movie */}
            <Movie/>

            {/* Footer */}
            <Footer/>
        </>
    );
}

export default App;
