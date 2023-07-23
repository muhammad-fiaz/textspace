// ShortcutKey.tsx
import React from 'react';
import '../../../styles/windowmsg.scss';
import imageSrc from "../../../../assets/icons/MacOS.appiconset/icon-512x512.png"; // Replace with the actual path to your image


const WindowMsg: React.FC = () => {
    return (
        <div className="shortcut-key">
            <img src={imageSrc} alt="Image" className="centered-image" />
            <div className="spacer"></div>
            <div className="line">
                show all commands <span className="shortcut">ctrl + shift + H</span>
            </div>
            <div className="line">
                open file <span className="shortcut">ctrl + 0</span>
            </div>
            <div className="line">
                open folder <span className="shortcut">ctrl + F </span>
            </div>
            <div className="line">
                open terminal <span className="shortcut">ctrl + T</span>
            </div>
        </div>
    );
};

export default WindowMsg;
