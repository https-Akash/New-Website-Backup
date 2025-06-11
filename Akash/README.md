# Akash Mishra's Portfolio

A fully responsive, animated, dark-themed personal portfolio website for Akash Mishra - a commerce student, self-taught web developer, and gamer.

![Portfolio Preview](assets/images/preview.jpg)

## 🚀 Features

- **Stunning Dark Theme** with gradients, glassmorphism, and neon glow effects
- **Animation-Rich Experience** using GSAP, AOS, VanillaTilt.js, and Typed.js
- **Interactive Elements** including custom cursor, parallax effects, and hover animations
- **Responsive Design** that works beautifully across all devices
- **Firebase Integration** for contact form data storage
- **High Performance** with optimized animations and assets
- **Cross-Browser Compatible** tested on major browsers
- **Easy to Deploy** on Netlify or any static hosting provider

## 📋 Pages

1. **Home** - Hero section with particle.js background and typed.js effect
2. **About** - Full-screen parallax section with timeline
3. **Skills** - Animated skills showcase with interactive elements
4. **Projects** - Tilt.js powered project cards with filters
5. **PC Setup** - Interactive layout showing PC specifications
6. **Gallery** - Grid of wallpapers with lightbox functionality
7. **Learning Zone** - Animated cards for learning journey
8. **Gaming Room** - Gaming preferences and favorites
9. **Resume** - Downloadable resume with interactive elements
10. **Contact** - Firebase-powered contact form with validation

## 🛠️ Technologies Used

- **HTML5** - Semantic structure and elements
- **CSS3** - Custom properties, Flexbox, Grid, Animations
- **JavaScript** - Vanilla JS for all interactions and effects
- **Firebase** - Firestore for contact form data
- **Netlify** - For easy deployment

### Libraries
- GSAP (Animation)
- AOS (Animate on Scroll)
- Typed.js (Text typing animation)
- particles.js (Background particle effects)
- VanillaTilt.js (3D hover effects)
- Lottie (Vector animations)

## 🔧 Setup & Installation

### Local Development

1. **Clone the repository:**
   ```
   git clone https://github.com/yourusername/akash-portfolio.git
   cd akash-portfolio
   ```

2. **Open with Live Server:**
   - Use VS Code's Live Server extension or any local development server
   - Navigate to `index.html`

### Firebase Setup

1. **Create a Firebase project:**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project

2. **Set up Firestore:**
   - Enable Firestore in the Firebase console
   - Set up security rules as needed

3. **Update Firebase configuration:**
   - Replace the placeholder values in `js/firebase.js` with your Firebase credentials:
   ```javascript
   const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "your-project-id.firebaseapp.com",
       projectId: "your-project-id",
       storageBucket: "your-project-id.appspot.com",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID"
   };
   ```

### Deployment

1. **Deploy to Netlify:**
   - Connect your GitHub repo to Netlify
   - Set the build command (if using a build process)
   - Set the publish directory to the root folder

## 📁 Project Structure

```
akash-portfolio/
│
├── assets/
│   ├── icons/
│   ├── images/
│   ├── fonts/
│   └── audio/
│
├── css/
│   ├── reset.css
│   ├── styles.css
│   ├── animations.css
│   └── responsive.css
│
├── js/
│   ├── main.js
│   ├── firebase.js
│   ├── cursor.js
│   ├── matrix.js
│   ├── navbar.js
│   └── random-fact.js
│
├── lib/
│
├── index.html
├── about.html
├── skills.html
├── projects.html
├── pc-setup.html
├── gallery.html
├── learning.html
├── gaming.html
├── resume.html
├── contact.html
└── README.md
```

## 🎮 Easter Eggs

This site contains a hidden easter egg! Can you find it?
Hint: Remember classic video game cheat codes...

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Credits

- Designed & Developed by Akash Mishra
- Icons: Various open-source SVG icons
- Fonts: Google Fonts (Orbitron, Poppins)
- Libraries: GSAP, AOS, Typed.js, particles.js, VanillaTilt.js, Lottie

## 📧 Contact

For any inquiries, please reach out through the [contact form](https://akash-mishra.netlify.app/contact.html) on the website. 