import {useState} from 'react';
import icoMenu from '../../public/ico-menu.svg';
import logo from '../../public/Logo2.ico';

const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    }

    return (
        <header className="header" id="inicio">
            <div className="fixed">
                <button className="burger_button" onClick={toggleMenu}>
                    <img src={icoMenu} alt="Icono menú hamburguesa" />
                </button>
                <nav>
                    <ul className= { menuVisible ? 'shown ulNav' : 'hidden ulNav'}>
                        <li><a className='link' href="#home">Home</a></li>
                        <li><a className='link' href="#about">Media</a></li>
                        <li><a className='link' href="#services">Modificar</a></li>
                        <li><a className='link' href="#contact">Historico</a></li>
                    </ul>
                </nav>
            </div>
            <div className="container">
                <img src={logo} alt="Logo de Quiniela Parkour" className="logo" />
                <h1 className="title_header">Quiniela Parkour</h1>
            </div>
        </header>
    );
};

export default Header;