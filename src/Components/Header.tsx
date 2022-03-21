
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faSliders } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

import '../Styles/Header.css';

const Header = () => {
    return (
        <>
        <header>
                <Link to="/">
                    <div id="title">
                        <FontAwesomeIcon icon={faYoutube}/>
                        <p>Limited Youtube</p>
                    </div>
                </Link>

                <ul className="option-list">
                    <li className="option-item">
                        <input type="checkbox" id="switch" onClick={() => {
                            document.querySelector('.App')?.classList.toggle('dark');
                        }}/>
                        <label htmlFor="switch">
                            <FontAwesomeIcon icon={faSun} className="icon light-icon"/>
                            <FontAwesomeIcon icon={faMoon} className="icon dark-icon"/>
                        </label>
                    </li>
                    <li className="option-item">
                        <Link to="/settings">
                            <FontAwesomeIcon icon={faSliders}/>
                        </Link>
                    </li>
                </ul>
            </header>
            <hr/>
        </>
    );
};


export default Header;
