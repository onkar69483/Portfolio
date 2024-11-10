export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Resume", link: "#resume" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I am currently pursuing my B.Tech in Computer Science Engineering at SIT Pune.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName:
      "justify-start text-white bg-black bg-opacity-50 px-2 py-1 rounded",
    img: "/onkarimage.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Coding a better world.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName:
      "justify-start text-white bg-black bg-opacity-60 px-2 py-1 rounded",

    img: "/programming.gif",
    spareImg: "",
  },
  {
    id: 3,
    title: "Code and Circuit",
    description: "Turning ideas into",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "DIY projects and electronics enthusiast",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently Building a platform for secure code snippet sharing",
    description: "CodeDrop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-6  0 border rounded",
    titleClassName: "justify-start md:justify-start lg:justify-start",
    img: "/codedropimg.png",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "CodeDrop - Easily Share Code Snippets",
    des: "CodeDrop allows you to paste and share code snippets with ease, featuring expiration times, syntax highlighting, and a user-friendly interface for quick collaborations.",
    img: "codedrop.png",
    poptitle: "codedrop.vercel.app",
    iconLists: [
      "/svelte.svg",
      "/nodejs.svg",
      "/mongo.svg",
      "/prisma.svg",
      "/tail.svg",
    ],
    link: "https://codedrop.vercel.app",
  },
  {
    id: 2,
    title: "Medisync - Expert Healthcare At Your Fingertips",
    des: "Connect with top-rated doctors for personalized care. Schedule appointments seamlessly and take control of your health journey.",
    img: "/medisync.png",
    poptitle: "medisync-solutions.vercel.app",
    iconLists: [
      "/re.svg",
      "/nodejs.svg",
      "/mongo.svg",
      "/express.svg",
      "/tail.svg",
    ],
    link: "https://medisync-solutions.vercel.app",
  },
  {
    id: 3,
    title: "MedXtract - Medical Prescription Diagnosis App",
    des: "MedXtract uses cutting-edge AI to accurately process medical forms, saving time and reducing errors. Join the digital healthcare revolution today!",
    img: "/medxtract.png",
    iconLists: [
      "/re.svg",
      "/mui.svg",
      "/django.svg",
      "/gemini.svg",
      "/azure.svg",
    ],
    link: "https://diagnosift.vercel.app",
    poptitle: "diagnosift.vercel.app",
  },
  {
    id: 4,
    title: "EzFinance - Personal Finance Management System",
    des: "The Personal Finance Management System is an application developed using Java Swing on Apache NetBeans IDE and MySQL for Database Management. This system enables users to monitor their financial habits, track previous transactions, and visualize monthly financial data using charts.",
    img: "/ezfinance.png",
    iconLists: ["/java.svg", "/netbeans.svg", "/mysql.svg"],
    link: "https://github.com/onkar69483/Personal_Finance_Management-Java-Swing",
    poptitle: "EzFinance",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Mobile Application Developer",
    company: "Ab Normal Home",
    date: "June 2024 – Present",
    desc: "Guided 15+ children with academic activities and developed a React Native app with features like chat, notice board, event calendar, and OTP login.",
    className: "md:col-span-2",
    thumbnail: "/abnormalhome.png",
    type: "Volunteer",
  },
  {
    id: 2,
    title: "Full Stack Developer Intern",
    company: "Meta Craftlab Private Limited",
    date: "June 2024 – July 2024",
    desc: "Engineered an online poll tool using SvelteKit and MongoDB, with automated poll deletion. Crafted 5+ APIs for creating polls, managing responses, and fetching results.",
    className: "md:col-span-2",
    thumbnail: "/craftlab.jpeg",
    type: "Top-ranked Intern",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "Interactive Learning",
    date: "Sep 2024 – Oct 2024 · 2 mos",
    desc: "Implemented user-friendly, responsive interfaces using React.js, ensuring accessibility and usability. Managed server-side logic with Node.js, focusing on scalability, security, and performance. Collaborated with cross-functional teams to develop features, resolve bugs, and ensure seamless system integration.",
    className: "md:col-span-2",
    thumbnail: "/interactivelearning.jpg",
    type: "Intern",
  },
  {
    id: 4,
    title: "President",
    company: "Rotonity (Robotics & Automation Club - SIT)",
    date: "May 2023 – Present",
    desc: "Led robotics projects, workshops, and competitions to enhance technical skills and community engagement. Developed an obstacle-avoiding robot kit for a STEM workshop, reaching 200+ students. Designed and implemented mechanisms such as pill dispensing and pan-tilt systems for the Scobo Medical Robot, advancing robotics education within the club.",
    className: "md:col-span-2",
    thumbnail: "/rotonity.png",
    type: "Club Activity",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/onkar69483",
    name: "github",
  },
  {
    id: 2,
    img: "/insta.svg",
    link: "https://www.instagram.com/onkar.mendhapurkar/",
    name: "insta",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/onkarmendhapurkar/",
    name: "linkedin",
  },
];
