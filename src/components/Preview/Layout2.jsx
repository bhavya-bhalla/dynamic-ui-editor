import React from 'react';
import { useConfig } from '../../context/ConfigContext';

function Layout2() {
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
    marginRight: '12px',
    marginBottom: '12px'
  };

  const cardStyle = {
    borderRadius: `${config.generalLayout.cardRadius}px`,
    padding: `${config.generalLayout.containerPadding}px`,
    backgroundColor: config.generalLayout.backgroundColor,
    border: `${config.stroke.weight}px solid ${config.stroke.color}`
  };

  const galleryImages = [
    'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=300&fit=crop'
  ];

  return (
    <div className="layout2-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div className="layout2-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '40px',
        alignItems: 'center',
        marginBottom: '50px'
      }}>
        <div className="layout2-content" style={cardStyle}>
          <h1 style={{ fontSize: '2.2em', marginBottom: '20px', color: '#1f2937' }}>
            Layout 2 Design
          </h1>
          <p style={{ 
            fontSize: '1.1em', 
            color: '#6b7280', 
            marginBottom: '30px',
            lineHeight: '1.7'
          }}>
            Experience a different layout structure with the same customization power. 
            This layout features a side-by-side design perfect for showcasing content 
            and images together.
          </p>
          
          <div className="button-group" style={{ display: 'flex', flexWrap: 'wrap' }}>
            <button style={buttonStyle}>Get Started</button>
            <button style={{...buttonStyle, backgroundColor: '#8B5CF6'}}>
              Learn More
            </button>
          </div>
        </div>

        <div className="layout2-feature-image">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
            alt="Feature"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/600x400/8B5CF6/FFFFFF?text=Featured+Image';
            }}
            style={{ 
              borderRadius: `${config.gallery.borderRadius}px`,
              width: '100%',
              height: 'auto',
              border: `${config.stroke.weight}px solid ${config.stroke.color}`,
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          />
        </div>
      </div>

      <section style={{ marginTop: '60px' }}>
        <h2 style={{ 
          fontSize: '2em', 
          textAlign: 'center', 
          marginBottom: '40px',
          color: '#1f2937'
        }}>
          Gallery Showcase
        </h2>
        
        <div 
          className="layout2-gallery"
          style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: `${config.gallery.spacing}px`,
            justifyItems: config.gallery.alignment
          }}
        >
          {galleryImages.map((imgUrl, index) => (
            <div
              key={index}
              className="gallery-item"
              style={cardStyle}
            >
              <img
                src={imgUrl}
                alt={`Gallery ${index + 1}`}
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/400x300/10B981/FFFFFF?text=Gallery+${index + 1}`;
                }}
                style={{
                  borderRadius: `${config.gallery.borderRadius}px`,
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  marginBottom: '16px'
                }}
              />
              <h3 style={{ fontSize: '1.3em', marginBottom: '8px', color: '#374151' }}>
                Gallery Item {index + 1}
              </h3>
              <p style={{ fontSize: '0.95em', color: '#6b7280' }}>
                Customizable gallery item with dynamic styling
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="cta-section" style={{
        ...cardStyle,
        textAlign: 'center',
        marginTop: '60px',
        padding: '50px 30px'
      }}>
        <h2 style={{ fontSize: '2em', marginBottom: '20px', color: '#1f2937' }}>
          Ready to Get Started?
        </h2>
        <p style={{ fontSize: '1.1em', color: '#6b7280', marginBottom: '30px' }}>
          Customize this layout to match your brand and vision
        </p>
        <button style={{...buttonStyle, fontSize: '18px', padding: '14px 32px'}}>
          Start Customizing
        </button>
      </div>
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

export default Layout2;
