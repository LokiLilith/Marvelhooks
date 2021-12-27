import './appHeader.scss';
import {Link, NavLink} from 'react-router-dom';
import ComicsList from '../comicsList/ComicsList';

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <Link to="/">
                    <span>Marvel</span> information portal
                </Link>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><NavLink exact activeStyle={{'color' : "#9f0014"}} to ="/">Characters </NavLink> </li>
                    
                    <li><NavLink  activeStyle={{'color' : "#9f0014"}} to ="/Comics"> Comics </NavLink> </li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;