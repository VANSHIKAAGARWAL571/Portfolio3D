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
  postgresql,
  nestjs,
  blink,
  innobit,
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
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Front-End Developer",
    icon: mobile,
  },
  {
    title: "Full-Stack Engineer",
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
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "PostGreSql",
    icon: postgresql,
  },
  /*{
      name: "Tailwind CSS",
      icon: tailwind,
    },*/
  {
    name: "Node JS",
    icon: nodejs,
  },
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
    name: "git",
    icon: git,
  },
  {
    name: "NestJs",
    icon: nestjs,
  },
  /*{
      name: "docker",
      icon: docker,
    },*/
];

const experiences = [
  {
    title: "Software Development Engineer Full-Stack",
    company_name: "Blink Charging",
    icon: blink,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - Present",
    points: [
      "Integrated AI-enhanced visualizations and responsive UIs, resulting in a 60% improvement in load times and a 40% reduction in bundle size, streamlining complex workflows.",
      "Engineered a port service in the EV charger ETL pipeline, significantly reducing Power BI data latency by 50% and improving reporting accuracy.",
      "Built a cron-based automation service to extract data from Amazon Redshift, export to AWS S3 in CSV format, and email reports—reducing manual effort by 70%.",
      "Collaborating on large-scale NestJS migration and upgrade projects, refactoring legacy services to align with modern backend architecture standards.",
      "Continuously enhancing platform performance by optimizing SQL queries, securing RESTful endpoints, and maintaining scalable backend logic.",
      "Working closely with cross-functional teams to integrate secure payment features, improve monitoring, and modernize codebase components in line with industry best practices."
    ],
  },
  {
    title: "Member Of Technical Staff Intern",
    company_name: "Innobit Systems LLC",
    icon: innobit,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Jan 2024",
    points: [
      "Developed a robust REST API using Java Spring Boot Services, showcasing proficiency in backend development and RESTful architecture.",
      "Spearheaded the creation of a full-stack HR management application employing React and Spring Boot.",
      "Applied best practices in software development, including the meticulous maintenance of Software Development Life Cycle (SDLC) lifecycles.",
    ],
  },
  {
    title: "Software Developer Intern Frontend",
    company_name: "Blink Charging",
    icon: blink,
    iconBg: "#E6DEDD",
    date: "June 2023 - Aug. 2023",
    points: [
      "Designed and implemented Power BI integration into the admin frontend, enabling real-time analytics with dynamic slicers and interactive visualizations, leveraging advanced features for user-driven data insights.",
      "Developed and deployed scalable microfrontends for pricing and reporting modules using modern frameworks, integrated payment details functionality, and implemented API interceptors to ensure secure and efficient data handling.",
      "Successfully executed a POC on Reveal-BI Analytics, creating interactive and informative charts that catered to various business needs. Integrate features of Reveal-BI to present reports and network monitoring in a visually appealing and comprehensible manner.",
      "Integrated AI-driven functionalities into the frontend to automate processes, enhance data visualization capabilities. Also engineered responsive and optimized UI components with seamless RESTful API integration, ensuring high-performance data rendering and an enhanced user experience.",
    ],
  },
  {
    title: "Web Developer Lead",
    company_name: "Google Developers Student Club ABESIT",
    icon: gdsc,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Sep 2023",
    points: [
      "Working as a Web development lead in the GDSC Club.",
      "Organize and taking various sessions based on full stack development tools and technologies like React, Html, CSS & Javascript.",
      "Organized and Led various Hackathons in the College.",
      "Manages and develop all the contents and articles of the Club.",
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
    source_code_Link:
      "https://github.com/VANSHIKAAGARWAL571/Travel-Advisor-Web-",
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
