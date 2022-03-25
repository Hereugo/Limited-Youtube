import React from 'react';

import Header from '../Components/Header';
import TagContainer from '../Components/TagContainer';

import '../Styles/App.css';
import '../Styles/SettingsApp.css';


type SettingsAppState = { whitelist: string[], blacklist: string[] };
class SettingsApp extends React.Component<{}, SettingsAppState> {
    constructor(props: object) {
        super(props);

        let whitelist: string | null = localStorage.getItem("whitelist");
        let blacklist: string | null = localStorage.getItem("blacklist");

        this.state = {
            whitelist: whitelist ? JSON.parse(whitelist) : [],
            blacklist: blacklist ? JSON.parse(blacklist) : ["shorts"],
        };

        this.onChange = this.onChange.bind(this);
        this.applySettings = this.applySettings.bind(this);
    }

    onChange(tags: string[], id: "whitelist" | "blacklist"): void {
        if (this.state[id] !== tags) {
            this.setState((prevState) => {
                let newState = { ...prevState };
                newState[id] = tags;

                return newState;
            });
        }
    }

    applySettings() {
        console.log("Applying settings");

        localStorage.setItem("whitelist", JSON.stringify(this.state.whitelist));
        localStorage.setItem("blacklist", JSON.stringify(this.state.blacklist));
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <main>
                    <TagContainer id="whitelist" name="Whitelist tags" tags={this.state.whitelist} onChange={this.onChange}/>
                    <TagContainer id="blacklist" name="Blacklist tags" tags={this.state.blacklist} onChange={this.onChange}/>
    
                    <button onClick={this.applySettings}>Apply</button>
                </main>
            </div>
        );
    }
}

export default SettingsApp;