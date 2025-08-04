const navLinks = [
  {
    name: "About",
    link: "#home",
  },
  {
    name: "Work",
    link: "#showcase",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Innovation", imgPath: "/images/ideas.svg" },
  { text: "Creativity", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Solutions", imgPath: "/images/ideas.svg" },
  { text: "Technology", imgPath: "/images/concepts.svg" },
  { text: "UI/UX", imgPath: "/images/designs.svg" },
  { text: "Algorithms", imgPath: "/images/code.svg" },
];

const SkillsInfo = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", logo: "/images/logos/react.png" },
      { name: "JavaScript", logo: "/images/logos/javascript.png" },
      { name: "TypeScript", logo: "/images/logos/typescript.png" },
      { name: "HTML5", logo: "/images/logos/html.png" },
      { name: "CSS3", logo: "/images/logos/css.png" },
      { name: "Tailwind", logo: "/images/logos/tailwindcss.png" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", logo: "/images/logos/nodejs.png" },
      { name: "Express", logo: "/images/logos/express.png" },
      { name: "MongoDB", logo: "/images/logos/mongodb.png" },
      { name: "Firebase", logo: "/images/logos/firebase.png" },
      { name: "MySQL", logo: "/images/logos/mysql.png" },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", logo: "/images/logos/git.png" },
      { name: "GitHub", logo: "/images/logos/github.png" },
      { name: "VS Code", logo: "/images/logos/vscode.png" },
      { name: "Netlify", logo: "/images/logos/netlify.png" },
      { name: "Vercel", logo: "/images/logos/vercel.png" },
    ],
  },
  {
    title: "Other Skills",
    skills: [
      { name: "DSA", logo: "/images/code.svg" },
      { name: "Three.js", logo: "/images/logos/three.png" },
      { name: "GSAP", logo: "/images/logos/gsap.png" },
      { name: "Material UI", logo: "/images/logos/materialui.png" },
      { name: "Bootstrap", logo: "/images/logos/bootstrap.png" },
      { name: "C++", logo: "/images/logos/cpp.png" },
      { name: "Java", logo: "/images/logos/java.png" },
    ],
  },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "C++ Developer",
    imgPath: "/images/logos/cpp.png",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    title: "Frontend Web developer Intern | APIETECH, Bhubaneswar",
    date: "Nov 2024 - Mar 2025",
    logoPath: "/images/logos/react.png",
    review:
      "Working on real-world projects and enhancing UI/UX in a collaborative Agile environment.",
    responsibilities: [
      "Worked with React.js, Tailwind CSS, and Redux Toolkit to develop and maintain responsive, user-friendly interfaces in a collaborative Agile environment.",
      "Integrated RESTful APIs and contributed to real-world projects like Lolify, CFLRS, and Digital Repository – IPEL, improving application functionality, performance, and user engagement.",
      "Used JavaScript and GitHub to build clean, version-controlled code while collaborating with teams to enhance UI/UX and fix bugs through iterative development.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const certifications = [
  {
    title: "Full Stack Web Development",
    issuer: "Udemy",
    date: "2024",
    description: "Comprehensive course covering React, Node.js, Express, and MongoDB to build full-stack applications.",
    link: "#"
  },
  {
    title: "React - The Complete Guide",
    issuer: "Udemy",
    date: "2023",
    description: "Mastered React.js including Hooks, Redux, React Router, Next.js and more.",
    link: "#"
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2023",
    description: "Certification for completing 300+ hours of JavaScript algorithms and data structures challenges.",
    link: "#"
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2023",
    description: "Learned HTML5, CSS3, and responsive design principles to build modern, mobile-first websites.",
    link: "#"
  },
  {
    title: "Python for Everybody",
    issuer: "University of Michigan (Coursera)",
    date: "2022",
    description: "Specialization covering Python data structures, web scraping, databases, and data visualization.",
    link: "#"
  },
  {
    title: "Git and GitHub",
    issuer: "Udemy",
    date: "2022",
    description: "Mastered version control with Git and GitHub for collaborative software development.",
    link: "#"
  }
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

// Export all constants
const constants = {
  navLinks,
  words,
  SkillsInfo,
  counterItems,
  logoIconsList,
  techStackImgs,
  techStackIcons,
  expCards,
  expLogos,
  certifications,
};

export default constants;
export {
  navLinks,
  words,
  SkillsInfo,
  counterItems,
  logoIconsList,
  techStackImgs,
  techStackIcons,
  expCards,
  expLogos,
  certifications,
};
