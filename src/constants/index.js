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
    groovy
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
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Disease Predictor',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/Mahima5004/DiseasePredictor',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Jerry The Voice Bot',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/Mahima5004/Jerry-The-Voice-Bot',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-pink',
        name: 'MemoryGame',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/Mahima5004/MemoryGame',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Drum Kit',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/Mahima5004/DrumKit',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-yellow',
        name: 'The Bid Game',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/Mahima5004/react_bidGame',
    }
];