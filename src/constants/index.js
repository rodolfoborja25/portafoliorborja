import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  rpa,
  gestorRequerimientos
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
  {
    title: 'Robotic process automation (RPA)',
    icon: rpa,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Junior Developer',
    company_name: 'Righttek',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2017 - Aug 2018',
  },
  {
    title: 'Semi-senior Developer',
    company_name: 'Righttek',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2018 - Feb 2019',
  },
  {
    title: 'Leader Developer',
    company_name: 'Righttek',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Feb 2019 - Aug 2019',
  },
  {
    title: 'Semi-senior Developer',
    company_name: 'Sipecom',
    icon: microverse,
    iconBg: '#333333',
    date: 'Aug 2019 - Mar 2020',
  },
  {
    title: 'Ejecutivo I',
    company_name: 'Banco del Pacifico',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Mar 2020 - Aug 2021',
  },
  {
    title: 'Senior Developer',
    company_name: 'Sipecom',
    icon: microverse,
    iconBg: '#333333',
    date: 'Nov 2021 - May 2022',
  },
  {
    title: 'Technical Consultant - RPA ',
    company_name: 'Kruger',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2022 - Aug 2022',
  },
  {
    title: 'Leader Fronted - React ',
    company_name: 'Kruger',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Aug 2022 - Oct 2022',
  }, 
  {
    title: 'Full Stack Developer',
    company_name: 'Kruger',
    icon: dcc,
    iconBg: '#333333',
    date: 'Oct 2022 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Gestor Requerimientos',
    description: 'The objective of the tool is the different departments of the financial entity to solve thousands of internal requirements, allow the creation of requirements, Modify a form according to how they need it, Save the SLA of the attention of the ticket. Generate service report. Dashboard in real time.',
    tags: [
      {
        name: 'Asp.net c#',
        color: 'blue-text-gradient',
      },
      {
        name: 'ORACLE',
        color: 'green-text-gradient',
      },
      {
        name: 'Bootstrap',
        color: 'pink-text-gradient',
      },
    ],
    image: gestorRequerimientos,
    repo: '',
    demo: '',
  },
  {
    id: 'project-2',
    name: 'Leaderboard',
    description:
      'A leaderboard list app that displays scores submitted by different players.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Math Magicians',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Movie Metro',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Nyeusi Fest Site',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };
