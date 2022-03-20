import {ReactComponent as YoutubeLogo} from '../Assets/Icons/youtubeLogo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../Styles/header.css';

const Header = () => {
    return (
        <header className="">
            <YoutubeLogo className="logo"/>
            
            <h1>Limited Youtube</h1>
            
            <ul>
                <li>


                </li>
                <li>
                    <button>
                        <CloseLogo/>
                    </button>
                </li>
            </ul>
        </header>
    );
};


export default Header;
