import React from 'react';
import { useConfig } from '../../context/ConfigContext';

function Layout1() {
  const { config } = useConfig();

  const buttonStyle = {
    borderRadius: `${config.button.borderRadius}px`,
    backgroundColor: config.button.backgroundColor,
    color: config.button.textColor,
    boxShadow: getShadow(config.button.shadow),
    padding: '12px 24px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'all 0.2s ease',
    margin: '0 8px'
  };

  const cardStyle = {
    borderRadius: `${config.generalLayout.cardRadius}px`,
    padding: `${config.generalLayout.containerPadding}px`,
    backgroundColor: config.generalLayout.backgroundColor,
    border: `${config.stroke.weight}px solid ${config.stroke.color}`,
    marginBottom: '30px'
  };

  const galleryStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: `${config.gallery.spacing}px`,
    justifyItems: config.gallery.alignment,
    marginTop: '30px'
  };

  // Working image URLs from Unsplash
  const images = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=400&h=300&fit=crop'
  ];

  return (
    <div className="layout1-container">
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5em', marginBottom: '16px', color: '#1f2937' }}>
          Welcome to Layout 1
        </h1>
        <p style={{ fontSize: '1.2em', color: '#6b7280' }}>
          This is a customizable design layout
        </p>
      </header>

      <div className="layout1-card" style={cardStyle}>
        <h2 style={{ fontSize: '1.8em', marginBottom: '16px', color: '#374151' }}>
          Sample Card Content
        </h2>
        <p style={{ fontSize: '1.1em', color: '#6b7280', marginBottom: '24px', lineHeight: '1.6' }}>
          This card responds to your customization settings. Adjust the typography, 
          colors, spacing, and borders to see real-time changes in the preview.
        </p>
        
        <div 
          className="button-group" 
          style={{ 
            display: 'flex', 
            justifyContent: config.button.alignment,
            flexWrap: 'wrap',
            gap: '16px',
            marginTop: '20px'
          }}
        >
          <button style={buttonStyle}>Primary Button</button>
          <button style={{...buttonStyle, backgroundColor: '#6B7280'}}>
            Secondary Button
          </button>
        </div>
      </div>

      <div className="layout1-gallery" style={galleryStyle}>
        {images.map((imgUrl, index) => (
          <img
            key={index}
            src={imgUrl}
            alt={`Gallery ${index + 1}`}
            onError={(e) => {
              e.target.src = `https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Image+${index + 1}`;
            }}
            style={{
              borderRadius: `${config.gallery.borderRadius}px`,
              width: '100%',
              height: '250px',
              objectFit: 'cover',
              border: `${config.stroke.weight}px solid ${config.stroke.color}`,
              transition: 'transform 0.2s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.02)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          />
        ))}
      </div>

      <footer style={{ 
        marginTop: '50px', 
        padding: '30px', 
        textAlign: 'center',
        borderTop: `${config.stroke.weight}px solid ${config.stroke.color}`
      }}>
        <p style={{ color: '#6b7280', fontSize: '0.95em' }}>
          © 2025 Dynamic UI Editor - Layout 1 Template
        </p>
      </footer>
    </div>
  );
}

function getShadow(shadowType) {
  const shadows = {
    none: 'none',
    small: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    medium: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    large: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
  };
  return shadows[shadowType] || shadows.small;
}

export default Layout1;
