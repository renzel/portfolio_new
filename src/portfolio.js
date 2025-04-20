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
  username: "Rensel",
  title: "Hi! I'm Trond",
  subTitle: emoji(
    "A passionate Software Engineer 🚀 Specializing in AI engineering and focusing on building solutions that create user value"
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/renzel",
  linkedin: "https://www.linkedin.com/in/trond-%C3%B8stby-rensel-618232137/",
  gmail: "trond@rensel.dev",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "SOFTWARE ENGINEER PASSIONATE ABOUT BUILDING ROBUST AND SCALABLE SOLUTIONS",
  skills: [
    emoji(
      "⚡ Design and implement AI-powered RAG chatbots that leverage vector databases for enhanced knowledge retrieval and contextual responses"
    ),
    emoji(
      "⚡ Integrated chatbot with Salesforce API for an all-in-one support experience, enabling seamless customer interactions and automated case management"
    ),
    emoji(
      "⚡ Design and implement fullstack apppliation from archetecture to design and development"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },

    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Prompt Engineering",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },

    {
      skillName: "C#",
      fontAwesomeClassname: "fab fa-microsoft"
    },

    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Elasticsearch",
      fontAwesomeClassname: "fas fa-search"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },

    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Google Cloud",
      fontAwesomeClassname: "fab fa-google"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of South-East Norway",
      logo: require("./assets/images/usn.png"),
      subHeader:
        "Master of Science in Systems Engineering with Embedded Systems",
      duration: "2017 – 2019",
      desc: "Specialized in embedded systems design and implementation with focus on real-time operating systems, hardware-software integration, and IoT solutions.",
      descBullets: [
        "Completed advanced coursework in Advanced embedded systems, low level and FPGA programming",
        "Developed IoT monitoring system using microcontrollers"
      ]
    },
    {
      schoolName: "Auckland University of Technology",
      logo: require("./assets/images/aut.png"),
      subHeader: "Exchange program, Bachelor degree",
      duration: "2016 – 2016",
      desc: "Exchange program focused on international experience and specialized coursework.",
      descBullets: []
    },
    {
      schoolName: "University of Vestlandet",
      logo: require("./assets/images/hvl.png"),
      subHeader: "Bachelor in Electronics",
      duration: "2014 – 2017",
      desc: "Focused on electronics fundamentals, circuit design, digital systems, and practical applications.",
      descBullets: [
        "Completed embedded project on health monitoring system for elderly",
        "Developed strong foundation in both analog and digital electronics through laboratory work and project-based learning.",
        "Completed courses with hands-on experience with microcontrollers, PCB design, and signal processing techniques."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "AI engineering",
      progressPercentage: "70%"
    },
    {
      Stack: "Backend Architecture",
      progressPercentage: "80%"
    },
    {
      Stack: "DevOps & Cloud Infrastructure",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AI Engineer",
      company: "TRIPLETEX",
      companylogo: require("./assets/images/tt.png"),
      date: "March 2024 – Present",
      desc: "AI Engineer - Norways largest accounting software company",
      descBullets: [
        "AI Copilot handling all customer support requests",
        "Integration with Salesforce CRM",
        "Python and FastAPI for chatbot integration",
        "OpenAI, Anthropic and Gemini for AI models",
        "PostgreSQL vector store"
      ]
    },
    {
      role: "Fullstack Developer / DevOps / Data Scientist",
      company: "UPSTACKED",
      companylogo: require("./assets/images/upstacked.png"),
      date: "November 2018 – February 2024",
      desc: "All-in-One centralized operations platform SaaS - Fullstack development, DevOps and data science",
      descBullets: [
        "React and state management with Redux",
        "Python/Django with databases like Postgres, MySQL, and Elasticsearch",
        "Classification algorithms via sklearn and Apache Spark, implemented anomaly detection for cybersecurity",
        "GCP, Kubernetes, Docker, Microservices and Gitlab as CI/CD"
      ]
    },
    {
      role: "Fullstack Developer",
      company: "STATENS VEGVESEN",
      companylogo: require("./assets/images/svv.png"),
      date: "June 2021 – August 2023",
      desc: "Norwegian road authority - Created a new solution for monitoring both infrastructure and applications",
      descBullets: [
        "React/TypeScript and .NET/C#",
        "Virtual machines and containers with VMware and Docker",
        "Scripting/data integration using Python and Bash",
        "Kubernetes and Tomcat for application management"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  //number: "+92-0000000000",
  email_address: "trond@rensel.dev"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
