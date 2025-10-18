import React from 'react';
import { ConfigProvider } from './context/ConfigContext';
import EditorPanel from './components/Editor/EditorPanel';
import PreviewPanel from './components/Preview/PreviewPanel';
import './App.css';

function App() {
  return (
    <ConfigProvider>
      <div className="app-container">
        <div className="editor-section">
          <EditorPanel />
        </div>
        <div className="preview-section">
          <PreviewPanel />
        </div>
      </div>
    </ConfigProvider>
  );
}

export default App;
