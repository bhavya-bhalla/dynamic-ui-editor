import React from 'react';
import { useConfig } from '../../context/ConfigContext';

function ButtonControls() {
  const { config, updateConfig } = useConfig();
  const { button } = config;

  return (
    <div className="button-controls">
      <div className="control-group">
        <label>Border Radius: {button.borderRadius}px</label>
        <input 
          type="range"
          min="0"
          max="50"
          value={button.borderRadius}
          onChange={(e) => updateConfig('button.borderRadius', parseInt(e.target.value))}
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
        <label>Shadow Effect</label>
        <select 
          value={button.shadow}
          onChange={(e) => updateConfig('button.shadow', e.target.value)}
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
          <option value="none">None</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>

      <div className="control-group">
        <label>Button Alignment</label>
        <select 
          value={button.alignment}
          onChange={(e) => updateConfig('button.alignment', e.target.value)}
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
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </div>

      <div className="control-group">
        <label>Background Color</label>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <input 
            type="color"
            value={button.backgroundColor}
            onChange={(e) => updateConfig('button.backgroundColor', e.target.value)}
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
            value={button.backgroundColor}
            onChange={(e) => updateConfig('button.backgroundColor', e.target.value)}
            placeholder="#3B82F6"
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

      <div className="control-group">
        <label>Text Color</label>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <input 
            type="color"
            value={button.textColor}
            onChange={(e) => updateConfig('button.textColor', e.target.value)}
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
            value={button.textColor}
            onChange={(e) => updateConfig('button.textColor', e.target.value)}
            placeholder="#FFFFFF"
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

export default ButtonControls;
