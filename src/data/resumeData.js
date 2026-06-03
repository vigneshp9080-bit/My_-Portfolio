// ============================
// VIGNESH P — Portfolio Data
// ============================

export const personal = {
  name: "Vignesh P",
  title: "AI Engineer & Data Scientist",
  tagline: "Building intelligent systems at the intersection of Machine Learning, Deep Learning, and Generative AI",
  bio: "B.Tech student in Artificial Intelligence & Data Science at Kathir College of Engineering, Coimbatore. Passionate about building AI-powered solutions that solve real-world problems. Actively seeking international opportunities in AI/ML.",
  location: "Coimbatore, Tamil Nadu, India",
  dob: "November 3, 2005",
  email: "vigneshp9080@gmail.com",
  phone: "+91-9080758687",
  linkedin: "https://www.linkedin.com/in/vignesh-p-53b3a62a4/",
  github: "https://github.com/vigneshp9080-bit",
  cgpa: "7.8",
};

export const skills = [
  { name: "Python", icon: "🐍", level: 90, category: "core" },
  { name: "Machine Learning", icon: "🤖", level: 85, category: "ai" },
  { name: "Deep Learning", icon: "🧠", level: 82, category: "ai" },
  { name: "Generative AI", icon: "✨", level: 80, category: "ai" },
  { name: "NLP", icon: "💬", level: 82, category: "ai" },
  { name: "Computer Vision", icon: "👁️", level: 78, category: "ai" },
  { name: "Data Science", icon: "📊", level: 87, category: "data" },
  { name: "Power BI", icon: "📈", level: 80, category: "data" },
  { name: "Tableau", icon: "📉", level: 75, category: "data" },
  { name: "MySQL", icon: "🗄️", level: 80, category: "data" },
  { name: "MongoDB", icon: "🍃", level: 78, category: "data" },
  { name: "Flask/Django", icon: "🌶️", level: 82, category: "dev" },
  { name: "React.js", icon: "⚛️", level: 70, category: "dev" },
  { name: "Scikit-learn", icon: "🔬", level: 85, category: "ai" },
  { name: "TensorFlow", icon: "🔷", level: 72, category: "ai" },
  { name: "Arduino", icon: "🔌", level: 75, category: "dev" },
];

export const projects = [
  {
    id: "01",
    title: "Resume Analyser",
    description:
      "An AI-based recruitment platform for resume parsing, skill extraction, job matching, and adaptive assessments using NLP and Machine Learning.",
    longDesc:
      "Full recruitment intelligence platform that combines NLP-powered resume parsing with ML-driven job matching. Implements skill gap analysis and generates personalized learning roadmaps for candidates.",
    tags: ["Machine Learning", "Deep Learning", "NLP", "MongoDB", "ATS Systems", "APIs"],
    features: [
      "AI-powered resume parsing & skill extraction",
      "Semantic job matching engine",
      "Personalized skill gap analysis",
      "Adaptive assessment system",
      "Recruiter-side candidate filtering dashboard",
    ],
    challenge: "Achieving high-accuracy semantic matching between resumes and job descriptions across different domains and writing styles.",
    github: "https://github.com/vigneshp9080-bit",
    demo: null,
    featured: true,
  },
  {
    id: "02",
    title: "Movie Review Sentiment Analysis",
    description:
      "Full-stack ML web application that predicts movie review sentiment (Positive/Negative) using NLP and Scikit-learn, deployed on Render & Vercel.",
    longDesc:
      "End-to-end sentiment analysis web app with a Flask REST API backend and React + Vite frontend. Deployed independently on Render (backend) and Vercel (frontend).",
    tags: ["React.js", "Flask", "NLP", "Scikit-learn", "APIs", "Full-Stack"],
    features: [
      "Real-time sentiment prediction",
      "REST API backend with Flask",
      "React + Vite modern frontend",
      "Deployed on Render + Vercel",
      "Cross-origin API integration",
    ],
    challenge: "Handling diverse slang, sarcasm, and mixed-sentiment reviews with reliable accuracy.",
    github: "https://github.com/vigneshp9080-bit",
    demo: null,
    featured: true,
  },
  {
    id: "03",
    title: "Waste Management & Recycling Portal",
    description:
      "AI-based platform using Machine Learning and Computer Vision to classify waste, support recycling, and optimize compost management using CNN and predictive models.",
    longDesc:
      "Environmental AI platform integrating CNN-based waste classification with predictive composting models and recycling assistance, delivering environmental impact analytics.",
    tags: ["CNN", "Computer Vision", "Machine Learning", "MongoDB", "Artificial Intelligence"],
    features: [
      "CNN-powered waste classification",
      "Compost prediction models",
      "Environmental impact analytics",
      "Recycling assistance engine",
      "Real-time image processing",
    ],
    challenge: "Building a robust CNN model that accurately classifies waste under varying lighting conditions and image quality.",
    github: "https://github.com/vigneshp9080-bit",
    demo: null,
    featured: false,
  },
  {
    id: "04",
    title: "Intelligent AI-Powered OS Monitoring",
    description:
      "Real-time distributed system monitoring platform using AI-based anomaly detection (Isolation Forest) to predict potential system failures.",
    longDesc:
      "Production-grade monitoring system built with a client-server architecture. Uses Isolation Forest for unsupervised anomaly detection on live system metrics, with forecasting capabilities and MongoDB cloud integration.",
    tags: ["Python", "Flask", "Scikit-learn", "MongoDB", "APIs", "Anomaly Detection"],
    features: [
      "Isolation Forest anomaly detection",
      "Real-time monitoring dashboard",
      "System failure forecasting",
      "Client-server distributed architecture",
      "MongoDB cloud integration",
    ],
    challenge: "Minimizing false-positive anomaly alerts while catching genuine system failures before they escalate.",
    github: "https://github.com/vigneshp9080-bit",
    demo: null,
    featured: false,
  },
  {
    id: "05",
    title: "Video Action Recognition",
    description:
      "Deep learning-based video action recognition system identifying human actions from video sequences using spatial and temporal features.",
    longDesc:
      "Applied CNN and image processing techniques for real-time action classification, extracting both spatial features per frame and temporal patterns across sequences.",
    tags: ["Deep Learning", "CNN", "Image Processing", "Python", "Computer Vision"],
    features: [
      "Real-time human action classification",
      "CNN spatial feature extraction",
      "Temporal sequence analysis",
      "Image optimization pipeline",
      "Multi-class action recognition",
    ],
    challenge: "Capturing meaningful temporal context across video frames without excessive computational overhead.",
    github: "https://github.com/vigneshp9080-bit",
    demo: null,
    featured: false,
  },
];

export const experience = [
  {
    company: "Future Interns",
    role: "Data Science Intern",
    period: "Dec 2025 – Jan 2026",
    duration: "2 months",
    type: "internship",
    description:
      "Worked on real-world data science projects including data visualization, business insights, equality and compensation data analysis, and sentiment analysis using NLP techniques.",
    responsibilities: [
      "Data visualization and business insights generation",
      "Equality and compensation data analysis",
      "Sentiment analysis using NLP",
      "Statistical data processing and reporting",
    ],
    skills: ["Data Science", "Data Analytics", "NLP", "Python", "Visualization"],
  },
  {
    company: "Emglitz Technologies",
    role: "Full-Stack Web Developer Intern",
    period: "Jun 2025 – Jul 2025",
    duration: "2 months",
    type: "internship",
    description:
      "Gained hands-on experience developing full-stack web applications using Python, HTML, CSS, JavaScript, and Django/Flask. Worked on database management, API integration, and software development best practices.",
    responsibilities: [
      "Built full-stack web applications with Django/Flask",
      "Implemented database schemas and API integrations",
      "Frontend development with HTML, CSS, JavaScript",
      "Applied software engineering best practices",
    ],
    skills: ["Python", "Flask", "Django", "HTML/CSS", "JavaScript", "APIs", "Databases"],
  },
  {
    company: "Yoi Robotics Laboratory",
    role: "Robotics & Electronics Intern",
    period: "Feb 2024 – Apr 2024",
    duration: "3 months",
    type: "internship",
    description:
      "Contributed to exciting robotics projects including the Yuki Robot and Sunblitz solar panel cleaning robot. Worked on PCB assembly, robotic hardware integration, and electrical & electronic system development.",
    responsibilities: [
      "PCB assembly and hardware integration",
      "Contributed to Yuki Robot development",
      "Sunblitz solar panel cleaning robot (Sunblitz)",
      "Electrical & electronic system development",
    ],
    skills: ["Arduino IDE", "Electronic Circuit Design", "Arduino Uno", "PCB Design", "Embedded Systems"],
  },
];

export const certifications = [
  {
    icon: "🤖",
    name: "Artificial Intelligence Course",
    issuer: "Online Platform",
    period: "Apr 2025 – Present",
    color: "purple",
  },
  {
    icon: "🔧",
    name: "Robotic Workshop",
    issuer: "Workshop Program",
    period: "Sep 2024 – Present",
    color: "teal",
  },
  {
    icon: "📊",
    name: "Data Analytics Job Simulation",
    issuer: "Forage",
    period: "Dec 2025 – Present",
    color: "blue",
  },
  {
    icon: "✨",
    name: "GenAI Powered Data Analytics Simulation",
    issuer: "Forage",
    period: "Dec 2025 – Present",
    color: "amber",
  },
  {
    icon: "☁️",
    name: "AWS Academy — Generative AI Foundations Badge",
    issuer: "Amazon Web Services",
    period: "Feb 2026 – Present",
    color: "orange",
  },
];

export const education = [
  {
    degree: "B.Tech — Artificial Intelligence & Data Science",
    institution: "Kathir College of Engineering",
    location: "Coimbatore, Tamil Nadu",
    period: "2023 – Present",
    grade: "CGPA: 7.8",
    current: true,
  },
  {
    degree: "Class XII",
    institution: "KK Naidu HR Sec School",
    location: "Coimbatore, Tamil Nadu",
    period: "2023",
    grade: "58",
    current: false,
  },
  {
    degree: "Class X",
    institution: "AKN HR Sec School",
    location: "Avinashi, Tamil Nadu",
    period: "2021",
    grade: "",
    current: false,
  },
];
