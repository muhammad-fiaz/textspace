import TitleBar from "./components/structure/TitleBar.tsx";
import './App.css';
import SideBar from "./components/structure/SideBar.tsx";
import BottomBar from "./components/structure/BottomBar.tsx";
import WindowMsg from "./components/sections/WindowMsg.tsx";

function App() {



    return (
        <div  className="container">

            <TitleBar/>
            <SideBar/>
            <BottomBar />
            <div className="shortcut-container">
                <WindowMsg/>
            </div>
        </div>


);
}

export default App;
