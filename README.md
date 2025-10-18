# Dynamic UI Editor for Customizable Designs

A powerful, intuitive React-based UI editor that enables users to customize UI components dynamically with real-time live preview. Built as part of the Software Development Associate Assignment for Ikarus 3D.

![Dynamic UI Editor](https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=Dynamic+UI+Editor+Screenshot)

## 🌟 Features

### Core Functionality
- ✨ **Real-time Live Preview** - Instant visual feedback for all customizations
- 🎨 **Typography Controls** - Customize font family, weight, and size (10px-60px)
- 🔘 **Button Styling** - Border radius, shadows, alignment, and color customization
- 🖼️ **Gallery Management** - Image grid alignment, spacing, and border radius controls
- 📐 **Layout Switching** - Toggle between two different design layouts
- 💾 **JSON Export/Import** - Save and load UI configurations
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile devices

### Customization Options

#### Typography
- Font Family: Roboto, Inter, Poppins, Arial, Open Sans
- Font Weight: 400, 500, 600, 700
- Font Size: 10px - 60px range

#### Buttons
- Border Radius: 0px - 50px
- Shadow: None, Small, Medium, Large
- Alignment: Left, Center, Right
- Background Color: HEX/RGB picker
- Text Color: HEX/RGB picker

#### Gallery/Images
- Grid Alignment: Left, Center, Right
- Image Spacing: 0px - 50px
- Border Radius: 0px - 30px

#### General Layout
- Card Corner Radius: 0px - 30px
- Container Padding: 0px - 100px
- Section Background Color: Full color picker

#### Stroke/Border
- Stroke Color: Full color picker
- Stroke Weight: 0px - 10px

## 🛠️ Tech Stack

- **React 18** - JavaScript library for building user interfaces
- **Vite** - Next-generation frontend build tool
- **Context API** - Built-in React state management
- **CSS3** - Modern styling with custom properties
- **React Icons** - Scalable vector icons

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher) or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/bhavya-bhalla/dynamic-ui-editor.git
   cd dynamic-ui-editor
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application running.

### Building for Production

```bash
npm run build
# or
yarn build
```

The optimized build will be created in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 📁 Project Structure

```
dynamic-ui-editor/
├── public/                      # Static assets
├── src/
│   ├── components/
│   │   ├── Editor/             # Editor panel components
│   │   │   ├── EditorPanel.jsx
│   │   │   ├── TypographyControls.jsx
│   │   │   ├── ButtonControls.jsx
│   │   │   ├── GalleryControls.jsx
│   │   │   ├── LayoutControls.jsx
│   │   │   ├── StrokeControls.jsx
│   │   │   └── ExportImportControls.jsx
│   │   ├── Preview/            # Preview panel components
│   │   │   ├── PreviewPanel.jsx
│   │   │   ├── Layout1.jsx
│   │   │   ├── Layout2.jsx
│   │   │   └── PreviewComponents.jsx
│   │   └── UI/                 # Reusable UI components
│   │       ├── ColorPicker.jsx
│   │       ├── Slider.jsx
│   │       └── Select.jsx
│   ├── context/
│   │   └── ConfigContext.jsx   # Global state management
│   ├── hooks/
│   │   └── useConfig.js        # Custom React hooks
│   ├── utils/
│   │   └── exportImport.js     # JSON export/import utilities
│   ├── App.jsx                 # Main application component
│   ├── App.css                 # Global styles
│   └── main.jsx                # Application entry point
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

## 💡 Usage Guide

### Basic Workflow

1. **Select Layout**: Choose between Layout 1 or Layout 2 using the dropdown at the top of the editor panel
2. **Customize Typography**: Adjust font properties to style all text elements
3. **Style Buttons**: Modify button appearance with border radius, shadows, colors, and alignment
4. **Configure Gallery**: Set image spacing, alignment, and border styles
5. **Adjust Layout**: Control card corners, padding, and background colors
6. **Modify Borders**: Customize stroke color and weight for all bordered elements
7. **Export Configuration**: Click "Export JSON" to save your current settings
8. **Import Configuration**: Click "Import JSON" to load previously saved settings

### Export/Import Feature

**Export:**
- Click the "Export JSON" button in the editor panel
- A `ui-config.json` file will be downloaded to your device
- This file contains all your current customization settings

**Import:**
- Click the "Import JSON" button
- Select a previously exported JSON file
- All controls and the preview will update to match the imported configuration

## 🎨 Component API

### ConfigContext

The central state management context that handles all UI customization settings.

**Provider:**
```jsx
<ConfigProvider>
  {/* Your components */}
</ConfigProvider>
```

**Hook Usage:**
```jsx
const { config, updateConfig, loadConfig, resetConfig } = useConfig();
```

**Methods:**
- `config` - Current configuration object containing all settings
- `updateConfig(path, value)` - Update a specific configuration value
- `loadConfig(config)` - Load a complete configuration object
- `resetConfig()` - Reset to default configuration

**Configuration Structure:**
```javascript
{
  layout: 'layout1' | 'layout2',
  typography: {
    fontFamily: string,
    fontWeight: number,
    fontSize: number
  },
  button: {
    borderRadius: number,
    shadow: 'none' | 'small' | 'medium' | 'large',
    alignment: 'left' | 'center' | 'right',
    backgroundColor: string,
    textColor: string
  },
  gallery: {
    alignment: 'left' | 'center' | 'right',
    spacing: number,
    borderRadius: number
  },
  generalLayout: {
    cardRadius: number,
    containerPadding: number,
    backgroundColor: string
  },
  stroke: {
    color: string,
    weight: number
  }
}
```

## 🎯 Design Decisions

### State Management
- **Context API** was chosen over Redux for its simplicity and sufficient functionality for this use case
- Single configuration object centralizes all customization settings
- Immutable state updates ensure predictable behavior

### Component Architecture
- **Container/Presentational pattern** separates logic from UI rendering
- **Compound components** for related controls improve code organization
- **Custom hooks** encapsulate reusable logic

### Performance Optimizations
- Real-time updates use efficient state diffing
- CSS custom properties enable performant dynamic styling
- Minimal re-renders through careful component structure

### UX Improvements
- Visual sliders with numeric value display
- Color pickers with both visual and text input
- Collapsible sections for better organization
- Smooth transitions for all interactive elements
- Clear visual hierarchy in the editor panel

## 🚢 Deployment

### Live Demo
🌐 **[View Live Application](https://d-ui-editor.netlify.app/)**

### Deployment Platforms

**Vercel (Recommended):**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Netlify:**
- Connect your GitHub repository
- Set build command: `npm run build`
- Set publish directory: `dist`
- Deploy automatically on push

## 📸 Screenshots

### Editor Interface
![Editor Panel](https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Editor+Panel)

### Layout 1 Preview
![Layout 1](https://via.placeholder.com/600x400/10B981/FFFFFF?text=Layout+1)

### Layout 2 Preview
![Layout 2](https://via.placeholder.com/600x400/8B5CF6/FFFFFF?text=Layout+2)

### Export/Import Feature
![JSON Export](https://via.placeholder.com/600x400/F59E0B/FFFFFF?text=Export+Import)

## 🧪 Testing

### Manual Testing Checklist

- [ ] All typography controls update preview correctly
- [ ] Button customizations apply to all button elements
- [ ] Gallery settings affect image grid properly
- [ ] Layout switching works seamlessly
- [ ] Stroke/border controls update all bordered elements
- [ ] JSON export creates valid downloadable file
- [ ] JSON import loads configuration correctly
- [ ] Responsive design works on mobile devices
- [ ] All color pickers accept valid color formats
- [ ] Range sliders update values smoothly

## 🔧 Configuration

### Vite Configuration
The project uses standard Vite configuration with React plugin:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
```

## 🤝 Contributing

This is an assignment project, but improvements and suggestions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is created for educational purposes as part of the Software Development Associate Assignment.

## 👤 Author

**Bhavya Bhalla**
- Roll Number: 102203448
- University: Thapar Institute of Engineering and Technology
- Assignment: Software Development Associate - Ikarus 3D
- Submission Date: October 19, 2025

## 🙏 Acknowledgments

- Ikarus 3D for the assignment opportunity
- React community for excellent documentation
- Vite team for the amazing build tool
- Design inspiration from modern UI builder tools

## 📞 Contact

For any queries regarding this assignment:
- Email: bbhalla_be22@thapar.edu
- Phone: 7880808054

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vite.dev)
- [Context API Guide](https://react.dev/learn/passing-data-deeply-with-context)
- [Figma Design Reference](YOUR_FIGMA_LINK_IF_AVAILABLE)

---

**Made with ❤️ for Ikarus 3D Software Development Associate Assignment**
