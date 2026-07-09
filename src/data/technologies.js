import {
    FaReact,
    FaJsSquare,
    FaHtml5,
    FaCss3Alt,
    FaNodeJs,
    FaGitAlt,
    FaNpm,
  } from "react-icons/fa";
  
  import {
    SiRedux,
    SiMui,
    SiAntdesign,
    SiBootstrap,
    SiPostman,
    SiWebpack,
    SiVite,
  } from "react-icons/si";
  
  const technologies = [
    {
      title: "Frontend Development",
      description:
        "Built scalable enterprise web applications using reusable components and modern JavaScript.",
      skills: [
        {
          icon: FaReact,
          name: "React.js",
          info: "Reusable enterprise UI components",
        },
        {
          icon: SiRedux,
          name: "Redux",
          info: "Global state management",
        },
        {
          icon: FaJsSquare,
          name: "JavaScript (ES6+)",
          info: "Modern JavaScript development",
        },
        {
          icon: FaHtml5,
          name: "HTML5",
          info: "Semantic and accessible markup",
        },
        {
          icon: FaCss3Alt,
          name: "CSS3",
          info: "Responsive UI development",
        },
      ],
    },
  
    {
      title: "UI Libraries",
      description:
        "Developed responsive enterprise dashboards using modern UI frameworks.",
  
      skills: [
        {
          icon: SiMui,
          name: "Material UI",
          info: "Enterprise design system",
        },
        {
          icon: SiAntdesign,
          name: "Ant Design",
          info: "Dashboard components",
        },
        {
          icon: SiBootstrap,
          name: "Bootstrap",
          info: "Responsive layouts",
        },
      ],
    },
  
    {
      title: "Backend & APIs",
      description:
        "Integrated backend services to retrieve and display enterprise data.",
  
      skills: [
        {
          icon: FaNodeJs,
          name: "Node.js",
          info: "Frontend integration",
        },
        {
          icon: FaReact,
          name: "REST APIs",
          info: "Data integration",
        },
      ],
    },
  
    {
      title: "Development Tools",
      description:
        "Worked with modern frontend tooling and version control.",
  
      skills: [
        {
          icon: FaGitAlt,
          name: "Git",
          info: "Version control",
        },
        {
          icon: SiVite,
          name: "Vite",
          info: "Fast builds",
        },
        {
          icon: SiWebpack,
          name: "Webpack",
          info: "Bundling",
        },
        {
          icon: SiPostman,
          name: "Postman",
          info: "API testing",
        },
        {
          icon: FaNpm,
          name: "npm / Yarn",
          info: "Package management",
        },
      ],
    },
  ];
  
  export default technologies;