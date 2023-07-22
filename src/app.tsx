import React from 'react';
import TitleBar from "./components/structure/TitleBar";
import {createRoot} from "react-dom/client";
import SideBar from "./components/structure/SideBar";
import BottomBar from "./components/structure/BottomBar";
import WindowMsg from "./components/sections/WindowMsg";

function render() {
    createRoot(document.getElementById('root')).render(
        <div className="container">
            <TitleBar />
            <SideBar/>
            <BottomBar/>
            <div className="shortcut-container">
                <WindowMsg/>
            </div>
        </div>
    );
}

render();
