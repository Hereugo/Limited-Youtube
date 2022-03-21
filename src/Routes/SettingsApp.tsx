
import Header from '../Components/Header';
import TagContainer from '../Components/TagContainer';

import '../Styles/App.css';
import '../Styles/SettingsApp.css';

const SettingsApp = () => {
    return (
        <div className="App light">
            <Header/>
            <main>
                <TagContainer />
            </main>
        </div>
    );
}

export default SettingsApp;