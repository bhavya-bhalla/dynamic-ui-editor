import React from 'react';
import { useConfig } from '../../context/ConfigContext';

function TypographyControls() {
  const { config, updateConfig } = useConfig();
  const { typography } = config;

  const fontFamilies = ['Roboto', 'Inter', 'Poppins', 'Arial', 'Open Sans'];
  const fontWeights = [400, 500, 600, 700];

  return (
    <div className="typography-controls">
      <div className="control-group">
        <label>Font Family</label>
        <select 
          value={typography.fontFamily}
          onChange={(e) => updateConfig('typography.fontFamily', e.target.value)}
        >
          {fontFamilies.map(font => (
            <option key={font} value={font}>{font}</option>
          ))}
        </select>
      </div>

      <div className="control-group">
        <label>Font Weight</label>
        <select 
          value={typography.fontWeight}
          onChange={(e) => updateConfig('typography.fontWeight', parseInt(e.target.value))}
        >
          {fontWeights.map(weight => (
            <option key={weight} value={weight}>{weight}</option>
          ))}
        </select>
      </div>

      <div className="control-group">
        <label>Font Size: {typography.fontSize}px</label>
        <input 
          type="range"
          min="10"
          max="60"
          value={typography.fontSize}
          onChange={(e) => updateConfig('typography.fontSize', parseInt(e.target.value))}
        />
      </div>
    </div>
  );
}

export default TypographyControls;
