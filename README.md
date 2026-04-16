# Arihant - Modern E-commerce Website

A sleek, modern e-commerce website built with React and Vite, featuring a beautiful product catalog, shopping cart functionality, and responsive design.

## 🚀 Features

- **Modern UI/UX**: Clean, minimalist design with smooth animations
- **Product Catalog**: Browse and explore products with detailed descriptions
- **Shopping Cart**: Add/remove items and manage your cart
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Newsletter Signup**: Capture leads and keep customers informed
- **Fast Performance**: Built with Vite for lightning-fast development and production builds

## 🛠 Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: CSS3 with modern features
- **Linting**: ESLint with React rules
- **Package Manager**: npm

## 📦 Dependencies

- React & React DOM
- React Router DOM for navigation
- Modern CSS features for styling

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/arihant.git
   cd arihant
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx      # Navigation bar
│   ├── Hero.jsx        # Hero section
│   ├── ProductCard.jsx # Product display card
│   ├── Collections.jsx # Product collections
│   ├── Newsletter.jsx  # Newsletter signup
│   └── Footer.jsx      # Footer component
├── pages/              # Page components
│   ├── Home.jsx        # Home page
│   ├── Shop.jsx        # Shop/catalog page
│   └── ProductDetails.jsx # Product detail page
├── data/               # Mock data and utilities
└── App.jsx             # Main application component
```

## 🎨 Design Features

- **Hero Section**: Eye-catching introduction with call-to-action
- **Product Cards**: Clean product displays with hover effects
- **Collections**: Organized product categories
- **Newsletter**: Simple email capture form
- **Responsive Layout**: Mobile-first design approach

## 🔧 Development

This template provides a minimal setup to get React working in Vite with HMR and ESLint rules.

### Official Plugins

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

### React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

### ESLint Configuration

For production applications, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

For support or questions, please open an issue or contact the maintainers.

---

**Built with ❤️ using React and Vite**