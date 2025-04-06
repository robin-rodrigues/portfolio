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
    "Software Developer L2 with 4 years of experience in Java, Spring Boot, Hibernate, and MySQL, specializing in event-driven architecture. Passionate about continuous learning and leveraging expertise to make meaningful contributions in full-time software engineering roles."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1TFxKoQ1KzNjKqbIC9KIki02UPjtp0HiA/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/robin-rodrigues",
  linkedin: "https://www.linkedin.com/in/robin-rodrigues-/",
  gmail: "robinrodrigues6499@gmail.com",
  // gitlab: "https://gitlab.com",
  // facebook: "https://www.facebook.com/profile.php?id=100009420427179",
  // medium: "https://medium.com/@robinrodrigues6499",
  // stackoverflow: "https://stackoverflow.com/users/11224743/robin-rodrigues",
  // instagram: "https://www.instagram.com/robin.e.rr/",
  // twitter: "https://twitter.com/robin_err",
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
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fas fa-power-off"
    },
    {
      skillName: "Hibernate",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Jira",
      fontAwesomeClassname: "fab fa-atlassian"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    }
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
      subHeader: "Bachelor of Engineering, Computer Engineering",
      duration: "2017 - 2021",
      desc: "CGPA: 9.75/10",
      descBullets: [
        "Learned various CS fundamental subjects such as Data Structures/Algorithms, OOPM, Java, Computer Networks, etc.",
        "Participated in various Hackathons, Coding contests and activities"
      ]
    },
    {
      schoolName: "Royal College of Arts, Science and Commere, Thane",
      logo: require("./assets/images/royal_logo.jpeg"),
      subHeader: "HSC, Computer Science",
      duration: "2015 - 2017",
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
      duration: "2015",
      desc: "Percentage: 92.20%"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "40%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Databases", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer II",
      company: "eMeasurematics",
      companylogo: require("./assets/images/emeasurematics_logo.jpg"),
      date: "June 2021 – March 2025",
      desc:
        "",
      descBullets: [
        "Transformed a monolithic application into a scalable microservices architecture using Java, Spring Boot, Hibernate, and MySQL, reducing deployment time by 40% and improving system scalability.",
        "Developed over 6 Spring Boot microservices with REST APIs and asynchronous messaging using ActiveMQ, boosting data throughput and responsiveness by 25%.",
        "Implemented secure, role-based API access via Spring Security with JWT-based authentication, enhancing data protection and user authorization flow.",
        "Utilized Spring Data JPA to streamline data persistence, reducing boilerplate DAO code by 70% and improving development efficiency.",
        "Improved data pipeline performance by 10x through SQL query optimization, resulting in faster data availability for downstream analytics.",
        "Configured MySQL master-slave and master-master replication setups to ensure 99.9% uptime, and led successful migration from MySQL 5.6 to 8.0 with zero data loss.",
        "Engineered real-time ingestion of crane sensor data into InfluxDB using line protocol, enabling live monitoring dashboards for operational insights."
      ],
    },
    {
      role: "Machine Learning Intern",
      company: "TheSmartBridge",
      companylogo: require("./assets/images/smartbridge_logo.png"),
      date: "May 2020 – June 2020",
      desc:
        // "Created a model in IBM Watson Studio for Predicting Life Expectancy of a human being using the WHO dataset. Used Node-RED through IBM cloud to deploy the model.",
        "",
      descBullets: [
        "Predicted life expectancy by experimenting with Linear Regression, Decision Tree Regression, and Random Forest Regression models achieving over 90% accuracy.",
        "Utilized IBM Watson Studio and Auto-AI for model optimization through hyperparameter tuning and Extra-Trees Regressor, improving model performance and reducing prediction error by 15%."
      ],
    },
    // {
    //   role: "Campus Ambassador Intern",
    //   company: "National Engineering Olympiad",
    //   companylogo: require("./assets/images/neo_logo.jpg"),
    //   date: "March 2020 – April 2020",
    //   desc:
    //     "",
    //   descBullets: [
    //     "Promoted National Engineering Olympiad examinations through social media.",
    //     "Helped the students with registration and verification process.",
    //     "Assigned tasks to Campus Coordinators for registration of students."
    //   ]
    // }
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
  title: emoji("Certifications 🏆 "),
  subtitle:
    "",

  achievementsCards: [
    {
      title: "Associate SQL",
      subtitle:
        "Datacamp",
      image: require("./assets/images/datacamp_logo.jpg"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://www.datacamp.com/certificate/SQA0019307729588"
        }
      ]
    }, 
    {
      title: "Apache Airflow Fundamentals",
      subtitle:
        "Astronomer",
      image: require("./assets/images/astronomer_logo.jpeg"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://www.credly.com/badges/ac5f4657-0a20-452c-93f8-ad9377aac9c6"
        }
      ]
    },
    {
      title: "Oracle Cloud Infrastructure 2024 Generative AI Professional",
      subtitle:
        "Oracle",
      image: require("./assets/images/oracle_logo.jpg"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://catalog-education.oracle.com/pls/certview/sharebadge?id=5393B67DBFCEA90C2CFF289944E50FC02A7880872C925B97F69FFF4FDC65FB0E"
        }
      ]
    },
    {
      title: "Alteryx Designer Core Certification",
      subtitle:
        "Alteryx",
      image: require("./assets/images/alteryx_logo.jpeg"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://www.credly.com/badges/3cf6b10e-e4b7-4b8d-881f-c22dec6da433"
        }
      ]
    },
    {
      title: "SQL (Advanced)",
      subtitle:
        "Hackerrank",
      image: require("./assets/images/hackerrank_logo.jpg"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://www.hackerrank.com/certificates/fc9451858414"
        }
      ]
    },
    {
      title: "Apache Airflow DAG Authoring",
      subtitle:
        "Astronomer",
      image: require("./assets/images/astronomer_logo.jpeg"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://www.credly.com/badges/1d67b07b-203b-43f6-9807-b94db432f86c"
        }
      ]
    },
    {
      title: "Machine Learning Internship",
      subtitle:
        "TheSmartBridge",
      image: require("./assets/images/smartbridge_logo.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://smartinternz.com/internships/certificates/e8dfff4676a47048d6f0c4ef899593dd"
        }
      ]
    }
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
  userName: "robin_err", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
