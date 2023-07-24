import React, { useEffect, useRef } from 'react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import './../../../styles/Editor.scss';

interface EditorEngineProps {
  theme: 'vs-light' | 'vs-dark';
}

function Editors({ theme }: EditorEngineProps) {
  const editorRef = useRef(null);

  useEffect(() => {

    // Create a new Monaco editor instance and attach it to the DOM element
    editorRef.current = monaco.editor.create(document.getElementById('editor'), {
      value: '//Welcome to the textSpace your ultimate code editor',
      language: 'plaintext', // Set the language to plaintext for plain text content
      theme: theme === 'vs-light' ? 'vs-light' : 'vs-dark',
      automaticLayout: true,
      minimap: {
        enabled: true, // Enable the minimap
      },


    });

    return () => {
      // Clean up the editor when the component unmounts
      editorRef.current?.dispose();
    };
  }, [theme]);

  return (
    <div className="editor-container">
      <div id="editor" className="editor" />

    </div>
  );
}

export default Editors;
