import {jioBlue, jioRed, logo } from "../assets/images";
import {
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    java,
    javascript,
    linkedin,
    mongodb,
    nodejs,
    pricewise,
    react,
    sapcc,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    groovy,
    three
} from "../assets/icons";

export const skills = [

    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
     {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
     {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
     {
        imageUrl: java,
        name: "Java",
        type: "Programming Language",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
     {
        imageUrl: sapcc,
        name: "SAPCC",
        type: "SAP BRIM",
    },
    {
        imageUrl: three,
        name: "Three.js",
        type: "Frontend",
        
    },
     {
        imageUrl: groovy,
        name: "Groovy",
        type: "Programming Language",
    },
    
    
    
    
];

export const experiences = [
    {
        title: "Graduate Engineer Trainee",
        company_name: "Jio Platforms Limited",
        project: 'Digital Asset Management',
        icon: jioBlue,
        iconBg: "#accbe1",
        date: "December 2023 - April 2024",
        points: [
            "Technologies: JavaScript, React.js, Tailwind CSS, Git, HTML, CSS, DevOps ",
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
           
        ],
    },
    {
        title: "Software Developer",
        company_name: "Jio Platforms Limited",
        project: 'Jio Rating and Charging System',
        icon: jioRed,
        iconBg: "#fbc3bc",
        date: "April 2024 - Present",
        points: [
            "Technologies: JavaScript, React.js, Tailwind CSS, SAP BRIM, SAP CC, Git, HTML, CSS, DevOps",
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
           
        ],
    },
    
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Mahima5004',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/mishramahima/',
    }
];

export const projects = [
     {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Jerry The Voice Bot',
        description: 'Developed voice-enabled bot that transcribes speech to text, processes natural language input, and provides spoken responses',
        link: 'https://github.com/Mahima5004/Jerry-The-Voice-Bot',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Disease Predictor',
        description: 'Developed a Machine learning based Model which predicts the disease based on the symptoms provided by the user.',
        link: 'https://github.com/Mahima5004/DiseasePredictor',
    },
   
    {
        iconUrl: summiz,
        theme: 'btn-back-pink',
        name: 'MemoryGame',
        description: 'Developed a simple, interactive card-matching game built with JavaScript, featuring responsive design and smooth gameplay logic',
        link: 'https://github.com/Mahima5004/MemoryGame',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Drum Kit',
        description: 'Developed a fun, interactive drum kit built with JavaScript, allowing users to play sounds using keyboard or mouse inputs with real-time audio',
        link: 'https://github.com/Mahima5004/DrumKit',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-yellow',
        name: 'The Bid Game',
        description: 'Developed a fun bidding game built with JavaScript where players compete by placing the highest bid to win',
        link: 'https://github.com/Mahima5004/react_bidGame',
    }
];