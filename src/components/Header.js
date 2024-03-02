import './css/Header.css';
import { Button } from 'react-bootstrap';

const Header = () => {
    return (
        <section id="home">
            <div className="container">
                <h1>Sensasi layar</h1>
                <h1>lebar terbaik.</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, nemo?</p>
                <Button variant="warning" href="#movie" className="btn fw-bold">Trending Movie</Button>
            </div>
        </section>
    )
}

export default Header;