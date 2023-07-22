import React from "react";
import '../../../src/components/styles/css/titlebar.css';
import logo from "../../assets/icons/MacOS.appiconset/icon-256x256.png";
function TitleBar() {



    return (
        <div>

            <div>
                <div className="titlebar titlestyle">
                    <div className="menu">
                        <div className="logo">
                            <img src={logo} alt="Logo" />
                        </div>
                        <ul>
                                <li >
file                                </li>
                            <li>
                                view
                            </li>
                            <li>
                                edit
                            </li>
                        </ul>
                    </div>
                    <div className="windowtitle preventSelect drag">TextSpace</div>
                    <div className="windowControl preventSelect">
                        <button id="minimise" >
                            <div className="min"></div>
                        </button>
                        <button id="maximise" >
                            <div className="max"></div>
                        </button>
                        <button id="quit" >
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
