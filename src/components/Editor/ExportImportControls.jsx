import React from 'react';
import { useConfig } from '../../context/ConfigContext';

function ExportImportControls() {
  const { config, loadConfig } = useConfig();

  const handleExport = () => {
    const jsonString = JSON.stringify(config, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'ui-config.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    alert('Configuration exported successfully! ✅');
  };

  const handleImport = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedConfig = JSON.parse(e.target.result);
          loadConfig(importedConfig);
          alert('Configuration imported successfully! ✅');
        } catch (error) {
          alert('Error importing configuration. Please check the file format. ❌');
        }
      };
      reader.readAsText(file);
    }
    // Reset the input value so the same file can be imported again
    event.target.value = '';
  };

  return (
    <div className="export-import-controls">
      <button 
        className="export-btn" 
        onClick={handleExport}
        style={{
          width: '100%',
          padding: '10px 16px',
          border: 'none',
          borderRadius: '6px',
          fontSize: '14px',
          fontWeight: '600',
          cursor: 'pointer',
          background: '#3B82F6',
          color: 'white',
          marginBottom: '12px',
          transition: 'all 0.2s ease'
        }}
        onMouseOver={(e) => e.target.style.background = '#2563EB'}
        onMouseOut={(e) => e.target.style.background = '#3B82F6'}
      >
        Export JSON
      </button>
      
      <div className="import-section">
        <label 
          htmlFor="import-file" 
          className="import-btn"
          style={{
            display: 'block',
            width: '100%',
            padding: '10px 16px',
            border: 'none',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            background: '#10B981',
            color: 'white',
            textAlign: 'center',
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => e.target.style.background = '#059669'}
          onMouseOut={(e) => e.target.style.background = '#10B981'}
        >
          Import JSON
        </label>
        <input
          id="import-file"
          type="file"
          accept=".json"
          onChange={handleImport}
          style={{ display: 'none' }}
        />
      </div>
    </div>
  );
}

export default ExportImportControls;
