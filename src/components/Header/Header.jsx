import { NavLink } from 'react-router-dom';
const Header = () => (
    <header className="App-header">
        <h1>Hunt3R_WTF TTV</h1>
        <nav>
        <ul className="nav-links">
            <li>
            <NavLink to="/">Головна</NavLink>
            </li>
            <li>
            <NavLink to="/about">Про мене</NavLink>
            </li>
            <li>
            <a className='InProgress' href="*" onClick={event => event.preventDefault()}>Бот "Команди"</a>
            </li>
        </ul>
        </nav>
    </header>
);

export default Header;