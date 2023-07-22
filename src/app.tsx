import React from 'react';
import TitleBar from "./components/structure/TitleBar";
import {createRoot} from "react-dom/client";

function render() {
    createRoot(document.getElementById('root')).render(
        <div className="container">
            <TitleBar />
        </div>
    );
}

render();
