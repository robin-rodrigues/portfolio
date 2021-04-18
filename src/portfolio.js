/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Robin Rodrigues",
  title: "Hi all, I'm Robin",
  subTitle: emoji(
    "A passionate Computer Engineering Student 🚀 having some experience of building Web applications with JavaScript / Reactjs / Nodejs and a Machine Learning enthusiast."
  ),
  resumeLink:
    "https://drive.google.com/file/d/16069r-jZNUAa8j8JHZNBQxz3UWOkx4vE/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Rodrob-93",
  linkedin: "https://www.linkedin.com/in/robin-rodrigues-016a00148/",
  gmail: "robinrodrigues6499@gmail.com",
  //gitlab: "https://gitlab.com",
  facebook: "https://www.facebook.com/profile.php?id=100009420427179",
  //medium: "https://medium.com/@robinrodrigues6499",
  //stackoverflow: "https://stackoverflow.com/users/11224743/robin-rodrigues",
  // Instagram and Twitter are also supported in the links!
  instagram: "https://www.instagram.com/_rodrob_/",
  twitter: "https://twitter.com/iamrodrob",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CURIOUS PROGRAMMER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    // emoji(
    //   "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    // ),
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    // emoji(
    //   "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    // )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Dwarkadas J. Sanghvi College of Engineering, Mumbai",
      logo: require("./assets/images/djsce_logo.jpg"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "August 2017 - June 2021",
      desc: "CGPA: 9.72/10",
      descBullets: [
        "Learned various CS fundamental subjects such as Data Structures/Algorithms, OOPM, Java, Python, Computer Networks, ML",
        "Participated in various Hackathons, Coding contests and activities"
      ]
    },
    {
      schoolName: "Royal College of Arts, Science and Commere, Thane",
      logo: require("./assets/images/undefined_logo.png"),
      subHeader: "HSC, Computer Science",
      duration: "July 2015 - May 2017",
      desc: "Percentage: 92.92%",
      descBullets: [
        "Ranked 1st in college with 92.92% in HSC board examinations",
        "Ranked Top 1% in HSC board examinations"
      ]
    },
    {
      schoolName: "Holy Cross Convent School, Thane",
      logo: require("./assets/images/hccs_logo.jpg"),
      subHeader: "SSC",
      duration: "June 2002 - June 2015",
      desc: "Percentage: 92.20%",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Machine Learning Intern",
      company: "TheSmartBridge",
      companylogo: require("./assets/images/smartbridge_logo.png"),
      date: "May 2020 – June 2020",
      desc:
        "Created a model in IBM Watson Studio for Predicting Life Expectancy of a human being using the WHO dataset. Used Node-RED through IBM cloud to deploy the model.",
      descBullets: [
        "Implemented this topic by using various machine learning models and compared accuracy between them.",
        "Also implemented using IBM Watson Studio's Auto AI model which returned great results.",
        "Technologies worked on: Python, Node-RED, IBM Cloud, IBM Watson Studio."
      ],
    },
    {
      role: "Campus Ambassador Intern",
      company: "National Engineering Olympiad",
      companylogo: require("./assets/images/neo_logo.jpg"),
      date: "March 2020 – April 2020",
      desc:
        "",
      descBullets: [
        "Promoted National Engineering Olympiad examinations through social media.",
        "Helped the students with registration and verification process.",
        "Assigned tasks to Campus Coordinators for registration of students."
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
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      //image: require("./assets/images/"),
      projectName: "",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    {
      //image: require("./assets/images/"),
      projectName: "",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: ""
        }
      ]
    }
  ],
  display: false// Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Codevita Season 9 (Global Rank: 1266)",
      subtitle:
        "Cleared Round 1 and participated in Round 2 (Global Rank: 1266)",
      image: require("./assets/images/tcs_logo.jpg"),
      footerLink: [
        {
          name: "Round 1 Certificate",
          url:
            "https://drive.google.com/file/d/1vtJZqE3V0v8Dr61rPY32e5gB6liiGrwz/view"
        }
      ]
    },

    {
      title: "Deep Learning Specialization",
      subtitle:
        "deeplearning.ai",
      image: require("./assets/images/deeplearning_ai_logo.jpg"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://www.coursera.org/account/accomplishments/specialization/certificate/B6VV7LNSCDHA"
        },
        {
          name: "Projects",
          url:
            "https://github.com/Rodrob-93/deeplearning.ai_DeepLearning_Specialization"
        }
      ]
    },

    {
      title: "30 Days of Kotlin",
      subtitle: "Participated in 30 Days of Kotlin campaign hosted by Google Developers and submitted an Android(Kotlin) project during May-June 2020",
      image: require("./assets/images/google_developers_logo.jpg"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1FELtmSRKEoYHizvqkla35ofZBnc9K63h/view"
        },
        {
          name: "Project",
          url: "https://github.com/Rodrob-93/Android-Kotlin-Messenger"
        }
      ]
    },
    
    {
      title: "DeepLearning.AI TensorFlow Developer Specialization",
      subtitle: "deeplearning.ai",
      image: require("./assets/images/deeplearning_ai_logo.jpg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/9D95DNYL6F4Z"
        }
      ]
    },
    

  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "",
      title: "",
      description:
        ""
    },
    {
      url: "",
      title: "",
      description:
        ""
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
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
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
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 7208534988",
  email_address: "robinrodrigues6499@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "iamrodrob", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
  twitterDetails
};
