
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faSliders } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

import '../Styles/Header.css';

type headerState = { 
    mode: string,
}
class Header extends React.Component<{}, headerState> {
    constructor(props: object) {
        super(props);

        let mode = localStorage.getItem("mode");
        this.state = {
            mode: mode ? mode : "light",
        };

        this.toggleMode = this.toggleMode.bind(this);
    }

    componentDidMount() {
        this.applyMode(this.state.mode);
    }

    applyMode(mode: string) {
        let app = document.querySelector(".App");

        if (mode === "light") {
            app?.classList.remove("dark");
            app?.classList.add("light");
        } else {
            app?.classList.add("dark");
            app?.classList.remove("light");
        }
    }

    toggleMode() {
        this.setState((prevState) => {
            let newMode = prevState.mode === "light" ? "dark" : "light";
            localStorage.setItem("mode", newMode);

            this.applyMode(newMode);

            return {
                mode: newMode,
            };
        });
    }

    render() {
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
                            <input type="checkbox" id="switch" onClick={this.toggleMode} defaultChecked={this.state.mode === "dark"}/>
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
    }
}

export default Header;
