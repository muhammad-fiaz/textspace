import React from 'react';
import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox';
import { PaletteTree } from './palette';
import Application from '@components/Application';

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path='/Application'>
        <Application />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;