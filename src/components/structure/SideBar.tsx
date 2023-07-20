// SideBar.tsx
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faFile } from '@fortawesome/free-solid-svg-icons';

// Define the custom icon library
library.add(faTh, faFile);

import '../../components/styles/css/sidebar.css';

function SideBar() {
    return (
        <div className="sidebar">
            <ul className="iconList">
                <li>
                    <FontAwesomeIcon icon="file" className="icon" />
                </li>
                {/* Add more list items as needed */}
            </ul>
        </div>
    );
}

export default SideBar;
