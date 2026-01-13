# 🌟 Gokulnath's Portfolio Website

A modern, visually appealing portfolio website showcasing projects, skills, and expertise in Software Engineering, AI/ML, Flutter Development, and Cloud Computing.

## ✨ Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Smooth Animations**: AOS (Animate On Scroll) library integration
- **Interactive Elements**: 
  - Typing animation effect
  - Project filtering system
  - Modal popups for project details
  - Smooth scroll navigation
- **Modern UI/UX**: Clean, professional design with gradient accents
- **Performance Optimized**: Lazy loading and efficient resource management

## 📁 File Structure

```
Gokul's_portfolio/
│
├── index.html              # Main HTML file
├── styles.css              # CSS styles with theme support
├── script.js               # JavaScript functionality
├── README.md               # This file
│
├── Resume.pdf              # Downloadable resume
├── Head_section.jpg        # Profile picture for home section
├── AboutMe_Section.jpg     # Profile picture for about section
├── portfolio_design.jpg    # Reference design image
│
└── projects/               # Project assets
    ├── smart-protector-application/
    │   ├── SMART-PROTECTOR-APPLICATION.jpg
    │   ├── SMART PROTECTOR APP REPORT.pdf
    │   ├── VID-20250417-WA0002.mp4
    │   ├── VID-20250417-WA0003.mp4
    │   └── VID-20250417-WA0004.mp4
    │
    ├── Eye_disease/
    │   ├── Eye_disease.jpg
    │   └── Generalizable Ocular Disease Classification...pdf
    │
    ├── credit_card/
    │   ├── credit_card.jpg
    │   └── Real_Time_Credit_Card_Fraud_Detection_Report(1).pdf
    │
    ├── smart_trafic/
    │   ├── smart_trafic.jpg
    │   └── SmartTrafficSimulator.pdf
    │
    ├── Inventory_management_system/
    │   └── Inventory Management System.png
    │
    ├── Live_polling_system/
    │   ├── Live_polling_system.jpg
    │   └── Resilient Live Polling System.pdf
    │
    ├── AI&ML_Bootcamp_Project's/
    │   └── Day 1 project/
    │       └── AI-Based Student Placement Prediction System.jpg
    │
    └── Legal-AI/
        ├── Legal_AI.jpg
        └── 24MCA1031_Gokulnath(LegalAI_Report).pdf
```

## � Featured Projects

### 1. Smart Protector Application for Elderly People
**Category**: Mobile Development  
**Tech Stack**: Kotlin, XML, Firebase, SPAWearable  
**Description**: Ensures the safety and well-being of elderly people through smart monitoring, fall detection, medication reminders, and caretaker connectivity.  
**Links**: [GitHub](https://github.com/Gokule7/SMART-PROTECTOR-APPLICATION-FOR--ELDERLY-PEOPLE-)

### 2. Eye Disease Prediction System
**Category**: AI/ML  
**Tech Stack**: Flutter, Flask, EfficientNetB3, Grad-CAM  
**Description**: Predicts 5 diseases and visualizes results using deep learning with EfficientNetB3 and Grad-CAM for interpretability.  
**Links**: [GitHub](https://github.com/Gokule7/eye-disease-prediction)

### 3. Real-Time Credit Card Fraud Detection
**Category**: AI/ML, Cloud  
**Tech Stack**: AWS Lambda, SageMaker, API Gateway, CloudWatch, EC2  
**Description**: Real-time fraud alerts and intelligent transaction monitoring using ML and AWS services.  
**Links**: [GitHub](https://github.com/Gokule7/Credit-Card-Fraud-Detection)

### 4. Smart Traffic Simulator
**Category**: AI/ML  
**Tech Stack**: JavaFX, Neural Networks, AI  
**Description**: Simulates urban traffic with adaptive signal management using neural networks for optimization.  
**Links**: [GitHub](https://github.com/Gokule7/-Smart-Traffic-Simulator)

### 5. Resilient Live Polling System
**Category**: Web Development  
**Tech Stack**: React.js (Context API, Custom Hooks), Node.js/Express, Socket.io, MongoDB (Mongoose)  
**Description**: A real-time polling application enabling teachers to create timed polls and students to vote with automatic state recovery from page refreshes and server-synchronized timers for late joiners. Features clean separation with Controller-Service pattern on backend, custom hooks (useSocket, usePollTimer, useStudentName) on frontend, and persistent chat system with live vote updates across all connected clients.  
**Key Features**:
- Unique compound indexes for duplicate vote prevention
- Automatic state recovery from page refreshes
- Server-synchronized timers for late joiners
- Real-time updates using WebSockets

**Links**: 
- [GitHub](https://github.com/Gokule7/Live_polling_system)
- [Live Demo](https://livepollingsystem-kappa.vercel.app)
- [Backend API](https://live-polling-backend-4gty.onrender.com)

### 6. Inventory Management System
**Category**: Web Development  
**Tech Stack**: PHP, JavaScript, CSS, SQL  
**Description**: Store and fetch all the inventory data with a comprehensive web-based management solution.  
**Links**: [GitHub](https://github.com/Gokule7/Inventory_management_system)

### 7. Legal-AI-Assistant
**Category**: AI/ML  
**Tech Stack**: AI, NLP, Machine Learning  
**Description**: AI-powered legal assistance system for analyzing and understanding legal documents.  
**Links**: [GitHub](https://github.com/Gokule7/Legal-AI-Assistant)
---

## 🎓 AI & ML Bootcamp Projects

### Day 1: AI-Based Student Placement Prediction System
**Category**: AI/ML Bootcamp  
**Tech Stack**: Python, Scikit-learn, Pandas, NumPy  
**Description**: A machine learning project developed during the AI & ML Bootcamp. This system predicts student placement outcomes based on various academic performance indicators, skills, and other relevant factors. Built using scikit-learn for model training and pandas for data preprocessing. Implements classification algorithms to achieve accurate placement predictions.  
**Key Features**:
- Data preprocessing and feature engineering
- Multiple classification algorithms implementation
- Model evaluation and performance metrics
- Accurate placement outcome predictions

**Links**: [GitHub](https://github.com/Gokule7/AI-Based-Student-Placement-Prediction-System)

---
## �🚀 How to Run

### Option 1: Simple File Open
1. Navigate to the project folder
2. Double-click `index.html` to open in your default browser

### Option 2: Live Server (Recommended)
1. Install VS Code extension: "Live Server"
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 3: Python HTTP Server
```bash
# Navigate to project directory
cd "d:\Gokul's_portfolio"

# Python 3
python -m http.server 8000

# Open browser and go to: http://localhost:8000
```

### Option 4: Node.js HTTP Server
```bash
# Install http-server globally
npm install -g http-server

# Run server
http-server -p 8000

# Open browser and go to: http://localhost:8000
```

## 🎨 Color Scheme

### Light Theme
- Primary: `#4f46e5` (Indigo)
- Secondary: `#06b6d4` (Cyan)
- Accent: `#10b981` (Green)

### Dark Theme
- Primary: `#6366f1` (Light Indigo)
- Secondary: `#22d3ee` (Light Cyan)
- Accent: `#34d399` (Light Green)

## 📱 Sections

1. **Home**: Hero section with profile picture, tagline, and CTA buttons
2. **About Me**: Biography, education timeline, and statistics
3. **Projects**: Filterable project showcase with modal details
4. **Skills**: Categorized technical and soft skills
5. **Services**: Service offerings (Mobile App, Cloud, AI/ML)
6. **Contact**: Contact form and information
7. **Footer**: Copyright and credits

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript**: Vanilla JS for interactivity
- **AOS**: Animate On Scroll library
- **Font Awesome**: Icon library
- **Google Fonts**: Poppins & Roboto

## 🔧 Customization

### Update Personal Information
Edit `index.html` to modify:
- Name, bio, and tagline
- Contact information
- Social media links
- Education details

### Add/Remove Projects
1. Add project images to appropriate folder in `projects/`
2. Update the project card HTML in `index.html`
3. Add project data to `projectData` object in `script.js`

### Change Color Scheme
Modify CSS variables in `styles.css`:
```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    --accent-color: #your-color;
}
```

## 📞 Contact Information

- **Email**: gokule710@gmail.com
- **Phone**: +91 9345795554
- **Location**: Chennai, India
- **GitHub**: [Gokule7](https://github.com/Gokule7)
- **LinkedIn**: [Gokulnath E](https://www.linkedin.com/in/gokul-e-b6336a2b3/)

## 🌟 Features Breakdown

### Theme Toggle
- Click the moon/sun icon (top right) to switch themes
- Preference saved in localStorage

### Project Filtering
- Filter projects by category: All, AI/ML, Mobile, Cloud, Web
- Smooth fade-in animations

### Contact Form
- Email validation
- Opens default email client with pre-filled information

### Easter Egg
- Try the Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A

## 📄 License

This portfolio is created by Gokulnath. Feel free to use it as inspiration for your own portfolio!

## 🙏 Credits

- **Design & Development**: Gokulnath
- **Icons**: Font Awesome
- **Fonts**: Google Fonts
- **Animations**: AOS Library

---

**Built with ❤️ by Gokulnath** | © 2025 All Rights Reserved
