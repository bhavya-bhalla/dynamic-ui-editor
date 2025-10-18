import React from 'react';
import TypographyControls from './TypographyControls';
import ButtonControls from './ButtonControls';
import GalleryControls from './GalleryControls';
import LayoutControls from './LayoutControls';
import StrokeControls from './StrokeControls';
import ExportImportControls from './ExportImportControls';

function EditorPanel() {
  return (
    <div className="editor-panel" style={{ padding: '20px' }}>
      <h1 style={{ 
        fontSize: '28px', 
        fontWeight: '700', 
        marginBottom: '25px', 
        color: '#1f2937',
        borderBottom: '3px solid #3B82F6',
        paddingBottom: '10px'
      }}>
        UI Editor
      </h1>
      
      <div className="controls-container">
        <Section title="Layout Selection">
          <LayoutControls />
        </Section>
        
        <Section title="Typography">
          <TypographyControls />
        </Section>
        
        <Section title="Button Styles">
          <ButtonControls />
        </Section>
        
        <Section title="Gallery Settings">
          <GalleryControls />
        </Section>
        
        <Section title="Stroke & Borders">
          <StrokeControls />
        </Section>
        
        <Section title="Export / Import">
          <ExportImportControls />
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div style={{
      background: 'white',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '16px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e5e7eb'
    }}>
      <h3 style={{
        fontSize: '16px',
        fontWeight: '600',
        color: '#374151',
        marginBottom: '16px',
        paddingBottom: '8px',
        borderBottom: '1px solid #e5e7eb'
      }}>
        {title}
      </h3>
      <div>
        {children}
      </div>
    </div>
  );
}

export default EditorPanel;
