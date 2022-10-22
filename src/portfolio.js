/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";
import sail from "./assets/images/sail.png";


const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: "Aditya Sekhar Bej",
  title: "Hi all, I'm Aditya",
  subTitle: emoji(
    "A passionate Full Stack Web Developer 🚀 having an experience of designing and building Web applications with HTML5, CSS3, JavaScript, React.js, Node.js, Express.js and MongoDB."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1lRWjevqBefoz9G1wF-nLKtPdoMvY3oAv/view?usp=sharing",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/adityasekharbej",
  linkedin: "https://www.linkedin.com/in/aditya-sekhar-bej/",
  gmail: "adityasekharbej007@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/"
  instagram: "https://www.instagram.com/i.maverick.exe/",
  twitter: "https://twitter.com/iAdityaSekhar",
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK WEB DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develope highly interactive Front-end / User Interfaces for your web applications."
    ),
    emoji(
      "⚡ Deals with the internal content of the system, the server technologies - database, architecture, software logic."
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks."),
    emoji("⚡ Integration of third party services such as Firebase"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "Express.js",
      fontAwesomeClassname: "fab fa-node-js",
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fa fa-database",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "MASAI SCHOOL",
      logo: require("./assets/images/Masai.jpg"),
      subHeader: "Full Stack Web Development",
      duration: "December 2021 - July 2022",
      desc: "Learnt MERN stack and data-structure and algorithms",
    },
    {
      schoolName: "Indira Gandhi Institute Of Technology, Sarang",
      logo: require("./assets/images/IGIT.jpeg"),
      subHeader: "Bachelor in Electrical Engineering",
      duration: "August 2017 - May 2021",
      desc:
        " Took courses about Electrical Engineering, Electrical machines, Control Systems, Microelectronics and Microprocessors...",
    },
    {
      schoolName: "Shakti Junior College, Cuttack",
      logo: require("./assets/images/download.jpg"),
      subHeader: "Bachelor of Science ",
      duration: "June 2014 - May 2016",
      desc: "Ranked top 10% in the program. Took stream as science, ...",
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "HTML/CSS3", //Insert stack or technology you have experience in
      progressPercentage: "80%",
    },
    {
      Stack: "Javascript",
      progressPercentage: "70%",
    },
    {
      Stack: "React", //Insert stack or technology you have experience in
      progressPercentage: "70%",
    },
    {
      Stack: "Data Structure & Algorithms",
      progressPercentage: "80%",
    },
    {
      Stack: "Express",
      progressPercentage: "60%",
    },
    {
      Stack: "Mongo Db",
      progressPercentage: "50%",
    },
  ],
  displayCodersrank: true, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Electrical Work-shop Intern",
      company: "Rourkela Steel Plant - SAIL",
      companylogo: sail,
      date: "August 2021 – November 2021",
      desc:
        "Rourkela Steel Plant (RSP), the first integrated steel plant in the public sector in India, was set up with German collaboration",
      descBullets: [],
    }
    // {
    //   role: "Front-end Designer Intern",
    //   company: "TECHNOBOOT",
    //   companylogo: "https://i.imgur.com/3LDKinZ.png",
    //   date: "June 2019 – July 2019",
    //   desc:
    //     "We are Committed to Provide Best Websites, Android & iOS Applications, Digital Marketing Services at an affordable price range.",
    //   descBullets: ["Custom building applications", "Coaching"],
    // },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "adityasekharbej", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF MY PROJECTS",
  projects: [
    {
      image: require("./assets/images/bigbasket.jpeg"),
      projectName: "Big Basket (Clone)",
      projectDesc:
        "Inspired from bigbasket.com. It is an online grocery shopping website. Tech-stack and libraries used React, Redux, Styled-components, Chakra UI, Node.js, Express.js and MongoDB.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://bigbasket-seven.vercel.app/",
        },
        {
          name: "Github Repo",
          url: "https://github.com/bushrajabeenk/sophisticated-legs-486",
        },
      ],
    },
    {
      image: require("./assets/images/timecamp.jpeg"),
      projectName: "Timecamp (Clone)",
      projectDesc:
        "Inspired from timecamp.com to track the activity of computer users. Tech-stack and libraries used React, Styled-componenets , Tailwind, Node, Express and MongoDB.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://timecamp.netlify.app/",
        },
        {
          name: "Github Repo",
          url: "https://github.com/iamdebobrota/Timecamp-Clone",
        },
      ],
    },
    {
      image: require("./assets/images/indianexpress.jpeg"),
      projectName: "Indian Express (Clone)",
      projectDesc:
        "Inspired from indianexpress.com. The Indian Express is an Indian daily newspaper website. Tech-stack used  React, Redux, Material UI, Styled-components, Firebase, Express and MongoDB.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://indianexpress.netlify.app/",
        },
        {
          name: "Github Repo",
          url: "https://github.com/adityasekharbej/the-indian-express-clone",
        },
      ],
    },
    {
      image: require("./assets/images/indiamart.png"),
      projectName: "Indiamart (Clone)",
      projectDesc:
        "A clone of India's largest online B2B marketplace, indiamart.com. Tech-stack and libraries used React, Redux, Styled-componenets , Material-UI.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://india-mart-clone.netlify.app",
        },
        {
          name: "GitHub Repo",
          url: "https://github.com/callmeabhi1997/Indiamart-Clone",
        },
      ],
    },
    {
      image: require("./assets/images/pharmeasy.png"),
      projectName: "Parmeasy (Clone)",
      projectDesc:
        "Inspired from pharmeasy.in, it is one of India's most trusted online pharmacy & medical store. Tech-stack used JavaScript, HTML, CSS",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://pharm-easy-clone.netlify.app",
        },
        {
          name: "GitHub Repo",
          url: "https://github.com/adityasekharbej/Pharm-easy-clone",
        },
      ],
    },
    {
      image: require("./assets/images/unsplash.png"),
      projectName: "Unsplash (Clone)",
      projectDesc:
        "Inspired from unsplash.com, a photo discovery platform.  made with JavaScript , HTML, and CSS .",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://unsplash-clone-site.netlify.app",
        },
        {
          name: "GitHub Repo",
          url: "https://github.com/adityasekharbej/Unsplash-Clone",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/betterjotter.jpeg"),
      projectName: "Better Jotter",
      projectDesc:
        "This is a chrome extension tool for taking quick & personal notes inside your browser with a single click. Tech-stack and libraries used React, Chakra UI, Node, Express and MongoDB.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://betterjotter.netlify.app/",
        },
        {
          name: "Github Repo",
          url: "https://github.com/adityasekharbej/BetterJotter",
        },
      ],
    }
    // {
    //   image: require("./assets/images/timecamp.jpeg"),
    //   projectName: "Timecamp-clone",
    //   projectDesc:
    //     "Inspired from timecamp.com to track the activity of computer users. Tech-stack and libraries used React, Styled-componenets , Tailwind, Node, Express and MongoDB.",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "https://timecamp.netlify.app/",
    //     },
    //     {
    //       name: "Github Repo",
    //       url: "https://github.com/iamdebobrota/Timecamp-Clone",
    //     },
    //   ],
    // }
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  //   title: emoji("Achievements And Certifications 🏆 "),
  //   subtitle:
  //     "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  //   achievementsCards: [
  //
  //         {
  //           name: "Award Letter",
  //           url:
  //             ""
  //         },
  //         {
  //           name: "Google Code-in Blog",
  //           url:
  //             ""
  //         }
  //       ]
  //     },
  //
  //       ]
  //     },

  //
  //   ],
  display: false, // Set false to hide this section, defaults to true
};

// // Blogs Section

const blogSection = {
  //   title: "Blogs",
  //   subtitle:
  //     "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  //   blogs: [
  //     {
  //       url:
  //         "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
  //       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
  //       description:
  //         "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
  //     },
  //     {
  //       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
  //       title: "Why REACT is The Best?",
  //       description:
  //         "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
  //     }
  //   ],
  display: false, // Set false to hide this section, defaults to true
};

// // Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: "",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// // Podcast Section

const podcastSection = {
  //   title: emoji("Podcast 🎙️"),
  //   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  //   // Please Provide with Your Podcast embeded Link
  //   podcast: [
  //     ""
  //   ],
  //   display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "8280210127",
  email_address: "adityasekharbej007@gmail.com",
};

// Twitter Section

const twitterDetails = {
  //   userName: "davidrakosi_", //Replace "twitter" with your twitter username without @
  //   display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
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
};
