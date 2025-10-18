import React from 'react';
import { useConfig } from '../../context/ConfigContext';

function LayoutControls() {
  const { config, updateConfig } = useConfig();

  return (
    <div className="layout-controls">
      <div className="control-group">
        <label>Select Layout</label>
        <select 
          value={config.layout}
          onChange={(e) => updateConfig('layout', e.target.value)}
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
          <option value="layout1">Layout 1</option>
          <option value="layout2">Layout 2</option>
        </select>
      </div>

      <div className="control-group">
        <label>Card Corner Radius: {config.generalLayout.cardRadius}px</label>
        <input 
          type="range"
          min="0"
          max="30"
          value={config.generalLayout.cardRadius}
          onChange={(e) => updateConfig('generalLayout.cardRadius', parseInt(e.target.value))}
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
        <label>Container Padding: {config.generalLayout.containerPadding}px</label>
        <input 
          type="range"
          min="0"
          max="100"
          value={config.generalLayout.containerPadding}
          onChange={(e) => updateConfig('generalLayout.containerPadding', parseInt(e.target.value))}
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
        <label>Background Color</label>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <input 
            type="color"
            value={config.generalLayout.backgroundColor}
            onChange={(e) => updateConfig('generalLayout.backgroundColor', e.target.value)}
            style={{
              width: '60px',
              height: '40px',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          />
          <input 
            type="text"
            value={config.generalLayout.backgroundColor}
            onChange={(e) => updateConfig('generalLayout.backgroundColor', e.target.value)}
            placeholder="#F3F4F6"
            style={{
              flex: 1,
              padding: '8px 12px',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              fontSize: '14px'
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default LayoutControls;
