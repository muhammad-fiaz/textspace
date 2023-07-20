import TitleBar from "./components/structure/TitleBar.tsx";
import './App.css';
import SideBar from "./components/structure/SideBar.tsx";
import BottomBar from "./components/structure/BottomBar.tsx";

function App() {



    return (
        <div  className="container">
<TitleBar/>
            <SideBar/>
            <BottomBar />

        </div>


);
}

export default App;
