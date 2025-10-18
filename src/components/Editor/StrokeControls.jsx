import React from 'react';
import { useConfig } from '../../context/ConfigContext';

function StrokeControls() {
  const { config, updateConfig } = useConfig();
  const { stroke } = config;

  return (
    <div className="stroke-controls">
      <div className="control-group">
        <label>Stroke Color</label>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <input 
            type="color"
            value={stroke.color}
            onChange={(e) => updateConfig('stroke.color', e.target.value)}
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
            value={stroke.color}
            onChange={(e) => updateConfig('stroke.color', e.target.value)}
            placeholder="#E5E7EB"
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
        <label>Stroke Weight: {stroke.weight}px</label>
        <input 
          type="range"
          min="0"
          max="10"
          value={stroke.weight}
          onChange={(e) => updateConfig('stroke.weight', parseInt(e.target.value))}
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

export default StrokeControls;
