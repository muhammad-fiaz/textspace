import jsonData from '../configs/titlebar.json';
const { ipcRenderer } = window.require('electron');
import '../styles/css/titlebar.css';

interface AppData {
    menuItems: string[];
    titleWindow: string;
    titleName: string;
}

function TitleBar() {
    // Function to send IPC events
    const sendIPCEvent = (event: string) => {
        ipcRenderer.send(event);
    };

    const { menuItems, titleWindow } = jsonData as AppData;

    return (
        <div>

            <div>
                <div className="titlebar titlestyle">
                    <div className="menu">
                        <div className="logo">
                            <img src="src/assets/icons/Windows/Square310x310Logo.scale-150.png" alt="Logo" />
                        </div>
                        <ul>
                            {menuItems.map((item, index) => (
                                <li key={index} className={index === 0 ? 'active' : ''}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="windowtitle preventSelect drag">{titleWindow}</div>
                    <div className="windowControl preventSelect">
                        <button id="minimise" onClick={() => sendIPCEvent('minimize')}>
                            <div className="min"></div>
                        </button>
                        <button id="maximise" onClick={() => sendIPCEvent('maximize')}>
                            <div className="max"></div>
                        </button>
                        <button id="quit" onClick={() => sendIPCEvent('quit')}>
                            <div className="qui"></div>
                        </button>
                    </div>
                </div>
                <div className="container">
                    <div id="editor"></div>
                </div>
            </div>
        </div>
    );
}

export default TitleBar;
