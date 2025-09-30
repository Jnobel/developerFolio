/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Joshua Nobel",
  title: "Hello, I'm Joshua",
  subTitle:
    "Software Developer | React Native & Full-Stack Development | Java · Python · TypeScript\n\nRecent AAS graduate from Ivy Tech specializing in building clean, scalable, user-centered applications using modern technologies like React Native, Kotlin, and Python. Passionate about solving real problems with great UX and efficient code.",
  resumeLink:
    "https://docs.google.com/document/d/1RG07e1raS9eyCNuKE_NmxqVWx3sKWZUyyNilyrY2-B8/export?format=pdf",
  displayGreeting: true,
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Jnobel",
  linkedin: "https://www.linkedin.com/in/joshua-nobel/",
  display: true,
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Software developer and technical project lead with a passion for user-centered apps, process automation, and modern stacks.",
  skills: [
    "⚡ Architect full-stack and mobile applications using React Native, Python (Django), and Kotlin (MVVM)",
    "⚡ Integrate REST APIs, manage local SQL/SQLite databases, and optimize app performance for cross-platform deployment",
    "⚡ Apply Agile & Scrum methodologies in collaborative projects using Trello, GitHub, and CI/CD pipelines",
    "⚡ Lead end-to-end software projects from SDLC planning to post-launch updates, testing, and stakeholder presentations"
  ],

  softwareSkills: [
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "TypeScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "React Native", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "Kotlin", fontAwesomeClassname: "fas fa-mobile-alt" },
    { skillName: "Django", fontAwesomeClassname: "fas fa-leaf" }, // generic icon
    { skillName: "SQLite", fontAwesomeClassname: "fas fa-database" },
    { skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Git & GitHub", fontAwesomeClassname: "fab fa-git" },
    { skillName: "Agile & Scrum", fontAwesomeClassname: "fas fa-project-diagram" },
    { skillName: "Firebase", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "SDLC", fontAwesomeClassname: "fas fa-cogs" },
    { skillName: "REST APIs", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Material UI", fontAwesomeClassname: "fab fa-uikit" }, // approximation
    { skillName: "Technical Writing", fontAwesomeClassname: "fas fa-pencil-alt" }
  ],
  display: true,
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Ivy Tech Community College",
      logo: require("./assets/images/ivytechLogo.png"), // You’ll need to add this image to your assets
      subHeader: "Associate of Applied Science in Software Development",
      duration: "Graduated May 2025",
      desc: "Graduated magna cum laude, Dean’s List (3x), and maintained a 3.87 GPA. Focused on full-stack development, mobile app design, systems analysis, and agile software lifecycle methodologies.",
      descBullets: [
        "Led multiple capstone projects using React Native, Kotlin, and Python",
        "Developed and presented working apps such as StreamFlix+, Delish, and PawPal",
        "Completed coursework in SDLC, project management, database design, and cloud computing"
      ]
    }
  ]
};

// Your top 5 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend / UI Design",
      progressPercentage: "75%"
    },
    {
      Stack: "Backend Development",
      progressPercentage: "65%"
    },
    {
      Stack: "Full-Stack Architecture",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming (Java, Python, Kotlin)",
      progressPercentage: "80%"
    },
    {
      Stack: "Project / Systems Analysis",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  title: "Relevant Experience",
  experience: [
    {
      role: "Lead Developer",
      company: "StreamFlix+ (Solo Project)",
      date: "Jan 2025 – Apr 2025",
      companylogo: require("./assets/images/streamflix.png"),
      desc: "Designed and built a full-featured React Native streaming app integrating TMDB API. Implemented reusable components, cast modals, provider integrations, animations, offline support, and dark/light mode.",
      descBullets: [
        "Built with React Native, TypeScript, Expo, and TMDB API",
        "Implemented horizontal scrolls, animated modals, and provider badge components",
        "Managed GitHub project board and developed all features independently"
      ]
    },
    {
      role: "Full Stack Developer",
      company: "PawPal Volunteer Manager (Solo Project)",
      date: "Mar 2025 – Apr 2025",
      companylogo: require("./assets/images/pawpal.png"),
      desc: "Developed a Django-based scheduling system for animal shelters. Designed backend models, templates, and admin views; coordinated sprint-based teamwork and GitHub version control.",
      descBullets: [
        "Used Python, Django, SQLite, HTML/CSS, and Bootstrap",
        "Integrated Django admin interface and custom CRUD views",
        "Led backend logic and coordinated Git-based collaboration"
      ]
    },
    {
      role: "Python Developer",
      company: "Pizza Palace GUI (Coursework)",
      date: "Feb 2025 – Mar 2025",
      companylogo: require("./assets/images/pizzapalace.png"),
      desc: "Built a desktop GUI for a mock pizza ordering system using Python and Tkinter. Included dynamic price calculation, toppings selection, and printable order receipts.",
      descBullets: [
        "Built with Python and Tkinter using object-oriented design",
        "Created interactive components and dynamic receipt generation",
        "Polished interface for clear usability and responsiveness"
      ]
    },
    {
      role: "Web Designer & Content Curator",
      company: "AI-DB (Personal Website)",
      date: "May 2025 – Present",
      companylogo: require("./assets/images/ai-db.png"),
      desc: "Designed and deployed a public knowledge site featuring curated AI tools, research papers, and educational resources. Focused on accessibility, SEO, and content structure for fast browsing.",
      descBullets: [
        "Built with HTML, CSS, JavaScript, and free web hosting (InfinityFree)",
        "Created a human-friendly interface for exploring AI content",
        "Live at: https://ai-db.free.nf/"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Full-stack and mobile-first apps built with real APIs and frameworks.",
  projects: [
    {
      image: require("./assets/images/streamflix.png"),
      projectName: "StreamFlix+",
      projectDesc:
        "A cross-platform React Native app using TMDB API to browse movies and TV shows. Features include cast modals, swipeable providers, dark/light mode, and offline detection.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Jnobel/StreamFlix"
        },
        {
          name: "Watch Demo",
          url: "https://youtu.be/tk6IY5fFrlY"
        }
      ]
    },
    {
      image: require("./assets/images/delish.png"), // ← Add this image to assets/images if not already present
      projectName: "Delish",
      projectDesc:
        "An anti-inflammatory meal planning app built with React Native and Spoonacular API. Explore nutrient-rich recipes with real-time search, smooth UI, and MVVM structure.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Jnobel/Delish-App"
        },
        {
          name: "Watch Demo",
          url: "https://youtu.be/pCZ8kDgEkL4"
        }
      ]
    }
  ],
  display: true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Projects 🏆 "),
  subtitle:
    "A showcase of project work completed during my software development degree, demonstrating real-world application of mobile, web, and desktop technologies.",

  achievementsCards: [
    {
      title: "Star Wars App (React Native + SWAPI)",
      subtitle:
        "A mobile app built using React Native and the Star Wars API (SWAPI). Includes scrollable lists, swipeable modals, lazy-loaded images, and offline support.",
      image: require("./assets/images/starwars.png"), // Add this image
      imageAlt: "Star Wars App Thumbnail",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Jnobel/SDEV257"
        },
        {
          name: "Watch Demo",
          url: "https://youtu.be/z6VSO1ESALI"
        }
      ]
    },
    {
      title: "PawPal Volunteer Manager (Django Web App)",
      subtitle:
        "A shift scheduling system for animal shelters built with Python, Django, and SQLite. Includes custom admin views and secure backend logic.",
      image: require("./assets/images/pawpal.png"), // Add this image
      imageAlt: "PawPal App Thumbnail",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Jnobel/PawPal-Volunteer-Manager"
        },
        {
          name: "Watch Demo",
          url: "https://youtu.be/aEMwKknF5Mc"
        }
      ]
    },
    {
      title: "Pizza Palace GUI (Tkinter Desktop App)",
      subtitle:
        "A Python-based pizza ordering system with a graphical interface using Tkinter. Features custom images, real-time totals, and receipt generation.",
      image: require("./assets/images/pizzapalace.png"), // Add this image
      imageAlt: "Pizza Palace Thumbnail",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Jnobel/pizza-palace-gui"
        },
        {
          name: "Watch Demo",
          url: "https://youtu.be/X9IN4Zx8-Rs"
        }
      ]
    }
  ],
  display: true
};


// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("DedaByt 🎧"),
  subtitle: "Original music produced, mixed, and published under my creative alias DedaByt.",

  // Embed your music playlist from YouTube Music
  podcast: [
      "https://www.youtube.com/embed/vblbPHq_UlI?si=HTcd9DOltrDEl9LC"
  ],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Looking to collaborate or have a project idea? Feel free to reach out — I'm always open to new opportunities and conversations.",
  number: "+1-812-629-3317", // optional, can be filled in if you'd like to display a phone number
  email_address: "Jdnobel79@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
