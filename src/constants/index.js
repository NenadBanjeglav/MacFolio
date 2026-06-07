const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Testimonials", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "resume",
    name: "Resume",
    icon: "pages.png",
    canOpen: true,
  },

  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  // {
  //   id: "trash",
  //   name: "Archive", // was "Trash"
  //   icon: "trash.png",
  //   canOpen: false,
  // },
];

const blogPosts = [
  // {
  //   id: 1,
  //   date: "Sep 2, 2025",
  //   title:
  //     "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
  //   image: "/images/blog1.png",
  //   link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  // },
  // {
  //   id: 2,
  //   date: "Aug 28, 2025",
  //   title: "The Ultimate Guide to Mastering Three.js for 3D Development",
  //   image: "/images/blog2.png",
  //   link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  // },
  // {
  //   id: 3,
  //   date: "Aug 15, 2025",
  //   title: "The Ultimate Guide to Mastering GSAP Animations",
  //   image: "/images/blog3.png",
  //   link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  // },
];

const testimonialsGallery = [
  {
    id: 1,
    name: "bojan-milovanovic.png",
    icon: "/images/image.png",
    imageUrl: "/images/testimonials/bojan-milovanovic.png",
  },
  {
    id: 2,
    name: "bojan-vreco.png",
    icon: "/images/image.png",
    imageUrl: "/images/testimonials/bojan-vreco.png",
  },
  {
    id: 3,
    name: "boris-sulicenko.png",
    icon: "/images/image.png",
    imageUrl: "/images/testimonials/boris-sulicenko.png",
  },
  {
    id: 4,
    name: "dragan-prtljaga.png",
    icon: "/images/image.png",
    imageUrl: "/images/testimonials/dragan-prtljaga.png",
  },
  {
    id: 5,
    name: "marko-jovic.png",
    icon: "/images/image.png",
    imageUrl: "/images/testimonials/marko-jovic.png",
  },
  {
    id: 6,
    name: "nikola-karaklic.png",
    icon: "/images/image.png",
    imageUrl: "/images/testimonials/nikola-karaklic.png",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Radix UI"],
  },
  {
    category: "Data / APIs",
    items: ["REST", "GraphQL BFF", "PostgreSQL", "Prisma", "Drizzle ORM"],
  },
  {
    category: "Testing / AI",
    items: ["Vitest", "RTL", "MSW", "Playwright", "Cursor", "Codex"],
  },
  {
    category: "Delivery",
    items: ["React Native", "Expo", "Vite", "Docker", "Git", "Vercel"],
  },
  {
    category: "Product UI",
    items: ["Storybook", "Zustand", "TanStack Query", "GSAP", "Framer Motion"],
  },
  {
    category: "CMS / Email",
    items: ["Sanity CMS", "Supabase", "Neon", "Resend"],
  },
];

const socials = [
  {
    id: 1,
    text: "GitHub",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/NenadBanjeglav",
  },

  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/nenad-banjeglav/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const startHereFile = {
  id: "start-here",
  name: "Start Here.txt",
  icon: "/images/txt.png",
  kind: "file",
  fileType: "txt",
  subtitle: "Full-stack Product Engineer",
  sections: [
    {
      heading: "Current Production Work",
      body: [
        "Frontend Developer at GreenState AG / ClickMind.com, shipping React and TypeScript product work in a multi-tenant application used by 20k+ active users across Europe.",
      ],
    },
    {
      heading: "What I Ship",
      body: [
        "API-integrated product flows with validation, loading states, error states, QA follow-up, and release monitoring.",
        "Stripe Checkout implementation across the checkout UX and API integration path, with no reported checkout defects after release.",
      ],
    },
    {
      heading: "Engineering Proof",
      body: [
        "Introduced frontend testing from zero coverage with Vitest, React Testing Library, MSW, and Playwright.",
        "Worked on a design-system migration from Styled Components and Storybook 8 toward Radix UI, Tailwind CSS, and Storybook 10.",
        "Use AI-assisted engineering workflows for planning, code review, product briefs, and team workshops.",
      ],
    },
  ],
  actions: [
    {
      label: "Open Portfolio",
      windowKey: "finder",
      locationType: "work",
    },
    {
      label: "View Resume",
      windowKey: "resume",
    },
    {
      label: "Contact",
      windowKey: "contact",
    },
  ],
};

const mobileLauncherApps = [
  {
    id: "start-here",
    name: "Start Here",
    icon: "/images/txt.png",
    windowKey: "txtfile",
    data: startHereFile,
    featured: true,
  },
  {
    id: "portfolio",
    name: "Portfolio",
    icon: "/images/finder.png",
    windowKey: "finder",
    locationType: "work",
  },
  {
    id: "resume",
    name: "Resume",
    icon: "/images/pages.png",
    windowKey: "resume",
  },
  {
    id: "contact",
    name: "Contact",
    icon: "/images/contact.png",
    windowKey: "contact",
  },
  {
    id: "skills",
    name: "Skills",
    icon: "/images/terminal.png",
    windowKey: "terminal",
  },
  {
    id: "testimonials",
    name: "Testimonials",
    icon: "/images/safari.png",
    windowKey: "safari",
  },
];

const projectCaseStudies = {
  greenState: {
    id: 1,
    name: "case-study.txt",
    icon: "/images/txt.png",
    kind: "file",
    fileType: "txt",
    subtitle: "GreenState / ClickMind",
    sections: [
      {
        heading: "Role",
        body: [
          "Frontend Developer on a production React and TypeScript product used by 20k+ active users across Europe.",
        ],
      },
      {
        heading: "What I Built",
        body: [
          "API-integrated product flows with validation, loading states, error states, QA follow-up, and release monitoring.",
          "Stripe Checkout across the checkout UX and API integration path.",
          "Frontend testing introduced from zero coverage with Vitest, React Testing Library, MSW, and Playwright.",
          "Design-system migration work from Styled Components and Storybook 8 toward Radix UI, Tailwind CSS, and Storybook 10.",
        ],
      },
      {
        heading: "Tech Stack",
        body: [
          "React, TypeScript, Stripe Checkout, REST and GraphQL BFF integrations, Vitest, React Testing Library, MSW, Playwright, Storybook, Radix UI, Tailwind CSS.",
        ],
      },
      {
        heading: "Product / Business Value",
        body: [
          "Improved confidence in production product changes by pairing UX delivery with validation, regression coverage, QA follow-up, and release monitoring.",
        ],
      },
      {
        heading: "Result or Current Status",
        body: [
          "Current production work at GreenState AG / ClickMind.com. Stripe Checkout shipped with no reported checkout defects after release.",
        ],
      },
    ],
  },
  mobileProductLab: {
    id: 1,
    name: "case-study.txt",
    icon: "/images/txt.png",
    kind: "file",
    fileType: "txt",
    subtitle: "Mobile Product Lab",
    sections: [
      {
        heading: "Role",
        body: [
          "Product owner and developer for React Native and Expo mobile product builds.",
        ],
      },
      {
        heading: "What I Built",
        body: [
          "Sveznalica, an educational app currently in Google Play closed testing.",
          "PSFM Diet Tracker, a mobile-first diet tracking product with reusable screens, forms, stateful flows, and API-ready boundaries.",
        ],
      },
      {
        heading: "Tech Stack",
        body: [
          "React Native, Expo, Android build tooling, reusable mobile UI patterns, navigation, form flows, stateful product screens.",
        ],
      },
      {
        heading: "Product / Business Value",
        body: [
          "Shows ownership beyond web UI: mobile product structure, release-readiness work, device testing, and iteration toward store distribution.",
        ],
      },
      {
        heading: "Result or Current Status",
        body: [
          "Sveznalica is in Google Play closed testing. PSFM Diet Tracker is structured for future data/API integration without reshaping the main flows.",
        ],
      },
    ],
  },
  driveTeam: {
    id: 1,
    name: "case-study.txt",
    icon: "/images/txt.png",
    kind: "file",
    fileType: "txt",
    subtitle: "Auto Skola Drive Team",
    sections: [
      {
        heading: "Role",
        body: [
          "Frontend developer for a polished business website for a driving school in Novi Sad.",
        ],
      },
      {
        heading: "What I Built",
        body: [
          "Responsive landing page with pricing, sign-up, FAQ, and credibility-focused content flow.",
        ],
      },
      {
        heading: "Tech Stack",
        body: [
          "Next.js, Tailwind CSS, Framer Motion, responsive UI implementation.",
        ],
      },
      {
        heading: "Product / Business Value",
        body: [
          "Reduced friction for prospective students by making pricing, enrollment, and common questions easy to scan on mobile and desktop.",
        ],
      },
      {
        heading: "Result or Current Status",
        body: ["Live production site at autoskoladt.rs."],
      },
    ],
  },
  pejovicInvest: {
    id: 1,
    name: "case-study.txt",
    icon: "/images/txt.png",
    kind: "file",
    fileType: "txt",
    subtitle: "Pejovic Invest Website",
    sections: [
      {
        heading: "Role",
        body: [
          "Frontend developer for a construction-company website focused on trust, project discovery, and maintainable content.",
        ],
      },
      {
        heading: "What I Built",
        body: [
          "Responsive company website with project content managed through Sanity CMS.",
        ],
      },
      {
        heading: "Tech Stack",
        body: ["Next.js, Tailwind CSS, Sanity CMS, structured content modeling."],
      },
      {
        heading: "Product / Business Value",
        body: [
          "Gave the company a credible web presence and a content workflow that allows project updates without developer handoff.",
        ],
      },
      {
        heading: "Result or Current Status",
        body: ["Live production site at pejovic-invest.rs."],
      },
    ],
  },
  proDecor: {
    id: 1,
    name: "case-study.txt",
    icon: "/images/txt.png",
    kind: "file",
    fileType: "txt",
    subtitle: "Pro Decor Website",
    sections: [
      {
        heading: "Role",
        body: [
          "Frontend developer for a product showcase website for 3D and PVC wall panels.",
        ],
      },
      {
        heading: "What I Built",
        body: [
          "Responsive product presentation with organized categories and visual browsing for buyers.",
        ],
      },
      {
        heading: "Tech Stack",
        body: [
          "Next.js, TypeScript, Tailwind CSS, responsive product-gallery UI.",
        ],
      },
      {
        heading: "Product / Business Value",
        body: [
          "Made the product catalog easier to browse visually while keeping the interface fast and direct.",
        ],
      },
      {
        heading: "Result or Current Status",
        body: ["Live production site at pro-deco.rs."],
      },
    ],
  },
  agileOnion: {
    id: 1,
    name: "case-study.txt",
    icon: "/images/txt.png",
    kind: "file",
    fileType: "txt",
    subtitle: "Agile Onion Blog",
    sections: [
      {
        heading: "Role",
        body: [
          "Frontend developer for a content-driven blog about agile, scrum, and personal development.",
        ],
      },
      {
        heading: "What I Built",
        body: [
          "SEO-friendly blog structure with SSG/ISR pages and Sanity CMS publishing.",
        ],
      },
      {
        heading: "Tech Stack",
        body: [
          "Next.js, Sanity CMS, static generation, incremental static regeneration, responsive content UI.",
        ],
      },
      {
        heading: "Product / Business Value",
        body: [
          "Enabled structured authoring and fast article pages for ongoing publishing.",
        ],
      },
      {
        heading: "Result or Current Status",
        body: ["Live production site at agileonion.rs."],
      },
    ],
  },
};

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  testimonialsGallery,
  techStack,
  socials,
  photosLinks,
  startHereFile,
  mobileLauncherApps,
  projectCaseStudies,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    {
      id: 4,
      name: "GreenState / ClickMind",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[6vh] left-5",
      children: [
        projectCaseStudies.greenState,
        {
          id: 2,
          name: "clickmind.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://www.clickmind.com/",
        },
      ],
    },
    {
      id: 6,
      name: "Mobile Product Lab",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 left-5",
      windowPosition: "top-[27vh] left-5",
      children: [projectCaseStudies.mobileProductLab],
    },
    // ▶ Project 1
    {
      id: 5,
      name: "Auto Skola Drive Team",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-60", // icon position inside Finder
      windowPosition: "top-[48vh] left-5", // optional: Finder window position
      children: [
        projectCaseStudies.driveTeam,
        {
          id: 2,
          name: "autoskoladt.rs",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://www.autoskoladt.rs/",
        },
        {
          id: 3,
          name: "drive-team.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          imageUrl: "/images/DriveTeamPic.webp",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 7,
      name: "Pejovic Invest Website",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[6vh] right-5",
      children: [
        projectCaseStudies.pejovicInvest,
        {
          id: 2,
          name: "pejovic-invest.rs",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://www.pejovic-invest.rs/",
        },
        {
          id: 3,
          name: "pejovic-invest.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          imageUrl: "/images/pejovicInvestSS.webp",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 8,
      name: "Pro Decor Website",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[27vh] right-5",
      children: [
        projectCaseStudies.proDecor,
        {
          id: 2,
          name: "pro-deco.rs",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://www.pro-deco.rs/",
        },
        {
          id: 3,
          name: "pro-decor.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          imageUrl: "/images/prodecorSS.webp",
        },
      ],
    },
    // ▶ Project 4
    {
      id: 9,
      name: "Agile Onion Blog",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 left-60",
      windowPosition: "top-[48vh] right-5",
      children: [
        projectCaseStudies.agileOnion,
        {
          id: 2,
          name: "agileonion.rs",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://agileonion.rs/",
        },
        {
          id: 3,
          name: "agile-onion.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          imageUrl: "/images/agileonion.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/me.webp",
    },
    {
      id: 2,
      name: "me-with-the-team.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-50",
      imageUrl: "/images/me-with-the-team.webp",
    },

    {
      id: 3,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Full-stack product engineer focused on impact",
      image: "/images/me.webp",
      description: [
        "I build React and TypeScript product UX, API-integrated flows, testing infrastructure, and AI-assisted development workflows.",
        "At GreenState AG / ClickMind.com, I ship production features in a multi-tenant product used by 20k+ active users across Europe.",
        "My work spans checkout UX, data-heavy screens, API contracts, validation, loading and error states, regression coverage, and release follow-up.",
        "I move quickly across unfamiliar stacks while keeping the product polished, the data flow understandable, and the codebase maintainable.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
    },
  ],
};

// const TRASH_LOCATION = {
//   id: 4,
//   type: "trash",
//   name: "Trash",
//   icon: "/icons/trash.svg",
//   kind: "folder",
//   children: [
//     {
//       id: 1,
//       name: "trash1.png",
//       icon: "/images/image.png",
//       kind: "file",
//       fileType: "img",
//       position: "top-10 left-10",
//       imageUrl: "/images/trash-1.png",
//     },
//     {
//       id: 2,
//       name: "trash2.png",
//       icon: "/images/image.png",
//       kind: "file",
//       fileType: "img",
//       position: "top-40 left-80",
//       imageUrl: "/images/trash-2.png",
//     },
//   ],
// };

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  // trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
