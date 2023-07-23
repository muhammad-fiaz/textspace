import React from 'react';
import { createRoot } from 'react-dom/client';
import WindowFrame from '@systems/window/components/WindowFrame';
import Application from '@components/Application';


// Application to Render
const app = (
  <WindowFrame title='container Boilerplate' platform='windows'>
    <Application />
  </WindowFrame>
);

// Render application in DOM
createRoot(document.getElementById('app')).render(app);
