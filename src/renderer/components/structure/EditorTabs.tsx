import './../../../styles/editorTabs.scss';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import Editors from '@components/structure/Editor';

function EditorTabs() {

  const theme = 'vs-dark';


  return (
    <div className="tabbar">
      <Editors theme={theme} />
    </div>
  );
}

export default EditorTabs;
