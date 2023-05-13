import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    clang,
    java,
    mysql,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    coding,
    future,
    angular,
    gdsc,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    traveladvisor,
    scholify,
    callcenter,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Front-End Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "MySql",
      icon: mysql,

    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    /*{
      name: "TypeScript",
      icon: typescript,
    },*/
    {
      name: "React JS",
      icon: reactjs,
    },
    /*{
      name: "Redux Toolkit",
      icon: redux,
    },*/
    /*{
      name: "Tailwind CSS",
      icon: tailwind,
    },*/
    /*{
      name: "Node JS",
      icon: nodejs,
    },*/
    /*{
      name: "MongoDB",
      icon: mongodb,
    },*/
    {
      name: "C++",
      icon: clang,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    /*{
      name: "docker",
      icon: docker,
    },*/
  ];
  
  const experiences = [
    {
      title: "Coding Mentor",
      company_name: "Online Study4U",
      icon: coding,
      iconBg: "#383E56",
      date: "April 2022 - May 2022",
      points: [
        "Worked as a Mentor",
        "Created videos and quality-content on Data Structures & Algorithm",
        "Also took sessions and interviews on topmate.io",
      ],
    },
    {
      title: "Future Ready Talent Intern",
      company_name: "Microsoft",
      icon: future,
      iconBg: "#E6DEDD",
      date: "June 2022 - July 2022",
      points: [
        "Developed and maintained web application.",
        "Deployed it on Microsoft Azure.",
        "Along side web technologies, used various Azure services like azure static service and even qna maker.",
      ],
    },
    {
      title: "Technical Intern",
      company_name: "StartUp Writer",
      icon: angular,
      iconBg: "#383E56",
      date: "Nov 2022 - Feb 2023",
      points: [
        "Developing and maintaining company's website using AngularJS and other related technologies.",
        "Collaborating with cross-functional teams designers and other developers to build responsive application.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        
      ],
    },
    {
      title: "Web Developer Lead",
      company_name: "Google Developers Student Club ABESIT",
      icon: gdsc,
      iconBg: "#E6DEDD",
      date: "Sep 2022 - Present",
      points: [
        "Working as a Web development lead in the GDSC Club.",
        "Organize and take various sessions based on Web development tools and technologies.",
        "Organized various Hackathons in the College.",
        "Manages and develop all the contents and articles of the Club.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Travel Advisor",
      description:
        "A comprehensive platform that enables your search for nearby restaurents, hotels or attractions easier and provides you the best recommendations based on budget, pricing, star rating etc.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "Rapid API",
          color: "pink-text-gradient",
        },
      ],
      image: traveladvisor,
      source_code_Link: "https://github.com/VANSHIKAAGARWAL571/Travel-Advisor-Web-",
    },
    {
      name: "Scholify",
      description:
        "A scholarship portal that will help you search for the best suitable scholarship for you and will update you regarding various new scholarship whether international, govt.,tech-based etc.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nextjs",
          color: "pink-text-gradient",
        },
      ],
      image: scholify,
      source_code_Link: "https://github.com/VANSHIKAAGARWAL571/Scolistic",
    },
    {
      name: "Call-Center Analytics",
      description:
        "Build a feasible model to eliminate the unguarded problems of call centers of the banks by using various machine learning modules and azure services like text analytics , azure cognitive resources etc.",
      tags: [
        {
          name: "Azure",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Jupyter Notebook",
          color: "pink-text-gradient",
        },
      ],
      image: callcenter,
      source_code_Link: "https://github.com/VANSHIKAAGARWAL571/Projects",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };