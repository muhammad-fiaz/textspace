import React from 'react';
import { createRoot } from 'react-dom/client';
import WindowFrame from '@systems/window/components/WindowFrame';
import Application from '@components/Application';
import { DevSupport } from '@react-buddy/ide-toolbox';
import { ComponentPreviews, useInitial } from '@src/dev';


// Application to Render
const app = (
  <WindowFrame title='container Boilerplate' platform='windows'>
    <DevSupport ComponentPreviews={ComponentPreviews}
                useInitialHook={useInitial}
    >
      <Application />
    </DevSupport>
  </WindowFrame>
);

// Render application in DOM
createRoot(document.getElementById('app')).render(app);
