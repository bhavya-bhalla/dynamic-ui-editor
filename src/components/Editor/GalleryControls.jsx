import React from 'react';
import { useConfig } from '../../context/ConfigContext';

function GalleryControls() {
  const { config, updateConfig } = useConfig();
  const { gallery } = config;

  return (
    <div className="gallery-controls">
      <div className="control-group">
        <label>Gallery Alignment</label>
        <select 
          value={gallery.alignment}
          onChange={(e) => updateConfig('gallery.alignment', e.target.value)}
          style={{
            width: '100%',
            padding: '8px 12px',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            fontSize: '14px',
            background: 'white',
            cursor: 'pointer'
          }}
        >
          <option value="left">Grid Left</option>
          <option value="center">Grid Center</option>
          <option value="right">Grid Right</option>
        </select>
      </div>

      <div className="control-group">
        <label>Image Spacing: {gallery.spacing}px</label>
        <input 
          type="range"
          min="0"
          max="50"
          value={gallery.spacing}
          onChange={(e) => updateConfig('gallery.spacing', parseInt(e.target.value))}
          style={{
            width: '100%',
            height: '6px',
            borderRadius: '3px',
            background: '#e5e7eb',
            outline: 'none',
            cursor: 'pointer'
          }}
        />
      </div>

      <div className="control-group">
        <label>Image Border Radius: {gallery.borderRadius}px</label>
        <input 
          type="range"
          min="0"
          max="30"
          value={gallery.borderRadius}
          onChange={(e) => updateConfig('gallery.borderRadius', parseInt(e.target.value))}
          style={{
            width: '100%',
            height: '6px',
            borderRadius: '3px',
            background: '#e5e7eb',
            outline: 'none',
            cursor: 'pointer'
          }}
        />
      </div>
    </div>
  );
}

export default GalleryControls;
