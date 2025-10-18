import React, { createContext, useState, useContext } from 'react';

export const defaultConfig = {
  layout: 'layout1',
  typography: {
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: 16
  },
  button: {
    borderRadius: 8,
    shadow: 'small',
    alignment: 'center',
    backgroundColor: '#3B82F6',
    textColor: '#FFFFFF'
  },
  gallery: {
    alignment: 'center',
    spacing: 16,
    borderRadius: 8
  },
  generalLayout: {
    cardRadius: 12,
    containerPadding: 24,
    backgroundColor: '#F3F4F6'
  },
  stroke: {
    color: '#E5E7EB',
    weight: 1
  }
};

const ConfigContext = createContext();

export function ConfigProvider({ children }) {
  const [config, setConfig] = useState(defaultConfig);

  const updateConfig = (path, value) => {
    setConfig(prev => {
      const newConfig = { ...prev };
      const keys = path.split('.');
      let current = newConfig;
      
      for (let i = 0; i < keys.length - 1; i++) {
        current[keys[i]] = { ...current[keys[i]] };
        current = current[keys[i]];
      }
      
      current[keys[keys.length - 1]] = value;
      return newConfig;
    });
  };

  const resetConfig = () => setConfig(defaultConfig);
  
  const loadConfig = (newConfig) => setConfig(newConfig);

  return (
    <ConfigContext.Provider value={{ config, updateConfig, resetConfig, loadConfig }}>
      {children}
    </ConfigContext.Provider>
  );
}

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error('useConfig must be used within ConfigProvider');
  }
  return context;
};
