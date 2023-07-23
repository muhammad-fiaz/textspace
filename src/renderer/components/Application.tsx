import React, { useEffect, useState } from 'react';
import '../../styles/Application.scss';
import SideBar from '@components/structure/SideBar';
import BottomBar from '@components/structure/BottomBar';
import WindowMsg from '@components/structure/WindowMsg';
import Explorer from '@components/structure/Explorer';
import Editors from '@components/structure/Editor';

const Application: React.FC = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  /**
   * On component mount
   */
  useEffect(() => {
    const useDarkTheme = parseInt(localStorage.getItem('dark-mode'));
    if (isNaN(useDarkTheme)) {
      setDarkTheme(true);
    } else if (useDarkTheme == 1) {
      setDarkTheme(true);
    } else if (useDarkTheme == 0) {
      setDarkTheme(false);
    }

  }, []);

  /**
   * On Dark theme change
   */
  useEffect(() => {
    if (darkTheme) {
      localStorage.setItem('dark-mode', '1');
      document.body.classList.add('dark-mode');
    } else {
      localStorage.setItem('dark-mode', '0');
      document.body.classList.remove('dark-mode');
    }
  }, [darkTheme]);



  return (
    <div id='container'>
<SideBar/>
      <BottomBar/>
      <WindowMsg/>
      <Explorer/>
<Editors/>
    </div>
  );
};

export default Application;
