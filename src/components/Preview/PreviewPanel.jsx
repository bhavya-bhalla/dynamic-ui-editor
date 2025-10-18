import React from 'react';
import { useConfig } from '../../context/ConfigContext';
import Layout1 from './Layout1';
import Layout2 from './Layout2';

function PreviewPanel() {
  const { config } = useConfig();
  
  const previewStyles = {
    fontFamily: config.typography.fontFamily,
    fontSize: `${config.typography.fontSize}px`,
    fontWeight: config.typography.fontWeight,
    padding: '30px',
    minHeight: '100vh'
  };

  return (
    <div className="preview-panel" style={previewStyles}>
      <div className="preview-header" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 30px',
        background: '#f9fafb',
        borderBottom: '2px solid #e5e7eb',
        marginBottom: '30px',
        borderRadius: '8px'
      }}>
        <h2 style={{ margin: 0, fontSize: '24px', fontWeight: '700', color: '#1f2937' }}>
          Live Preview
        </h2>
        <span style={{
          padding: '6px 16px',
          background: '#3B82F6',
          color: 'white',
          borderRadius: '20px',
          fontSize: '14px',
          fontWeight: '500'
        }}>
          {config.layout === 'layout1' ? 'Layout 1' : 'Layout 2'}
        </span>
      </div>
      
      <div className="preview-content">
        {config.layout === 'layout1' ? <Layout1 /> : <Layout2 />}
      </div>
    </div>
  );
}

export default PreviewPanel;
