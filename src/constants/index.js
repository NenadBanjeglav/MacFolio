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
    name: "Articles", // was "Safari"
    icon: "safari.png",
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

const techStack = [
  {
    category: "Frontend",
    items: ["JavaScript", "TypeScript", "React.js", "Next.js"],
  },
  {
    category: "Styling",
    items: ["CSS", "Styled Components", "Tailwind CSS"],
  },
  {
    category: "Animation",
    items: ["GSAP", "Framer Motion"],
  },

  {
    category: "Dev Tools",
    items: ["GitHub", "Vite", "NPM", "Vercel"],
  },
  {
    category: "Backend",
    items: ["Sanity CMS", "Supabase"],
  },
  {
    category: "Testing",
    items: ["Vitest", "Jest", "RTL", "MSW", "Playwright"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
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

export { navLinks, navIcons, dockApps, blogPosts, techStack, socials };

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Auto Škola Drive Team",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Drive Team Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A modern, responsive landing page for Auto Škola Drive Team in Novi Sad.",
            "Built with Next.js, Tailwind CSS, and Framer Motion for smooth, engaging motion.",
            "Clear sections for pricing, sign-up, and FAQs to reduce friction for new students.",
            "Designed to feel friendly and trustworthy while driving inquiries.",
          ],
        },
        {
          id: 2,
          name: "autoskoladt.rs",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://www.autoskoladt.rs/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "drive-team.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/DriveTeamPic.png",
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
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Pejovic Invest Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "A clean, professional website for a Serbian construction company.",
            "Content is managed in Sanity CMS so the team can update projects without developer help.",
            "Built with a focus on clarity, credibility, and showcasing real work.",
          ],
        },
        {
          id: 2,
          name: "pejovic-invest.rs",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://www.pejovic-invest.rs/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "pejovic-invest.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/pejovicInvestSS.png",
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
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Pro Decor Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A presentation website for Pro Decor, specializing in 3D and PVC wall panels.",
            "Organized product categories and galleries make browsing quick and visual.",
            "Built with Next.js, TypeScript, and Tailwind CSS for a crisp, modern UI.",
          ],
        },
        {
          id: 2,
          name: "pro-deco.rs",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://www.pro-deco.rs/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "pro-decor.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/prodecorSS.png",
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
      windowPosition: "top-[45vh] left-50",
      children: [
        {
          id: 1,
          name: "Agile Onion Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A blog about agile, scrum, and personal development.",
            "Built with Next.js using SSG + ISR for fast, fresh content.",
            "Powered by Sanity CMS for structured content and easy updates.",
          ],
        },
        {
          id: 2,
          name: "agileonion.rs",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://agileonion.rs/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "agile-onion.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
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
      imageUrl: "/images/me.png",
    },
    {
      id: 2,
      name: "me-with-the-team.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-50",
      imageUrl: "/images/me-with-the-team.png",
    },

    {
      id: 3,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/me.png",
      description: [
        "Hey! I’m Nenad 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in JavaScript, TypeScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
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
