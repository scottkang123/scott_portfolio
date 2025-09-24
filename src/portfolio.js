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
  username: "Kyung Ho (Scott) Kang",
  title: "Hi all, I'm Scott",
  subTitle: emoji(
    "A passionate Software Engineer 🚀 having an experience of building a backend service, Web application, automation framework and many more cool projects!"
  ),
  resumeLink: "/Scott_Resume_05_17_25.pdf", // Set to empty to hide the button, //It is actually in the Greeting.js
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/scottkang123",
  linkedin: "https://www.linkedin.com/in/scott-kang/",
  gmail: "scottkang991103@gmail.com",
  instagram: "https://www.instagram.com/scottk_1103/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Software Engineer passionate about exploring diverse tech stacks and building impactful products",
  skills: [
    emoji(
      "⚡ Developed scalable backend applications (e.g., tap-to-pay) using microservice architecture"
    ),
    emoji(
      "⚡ Built a test automation repository for end-to-end web application testing"
    ),
    emoji(
      "⚡ Integrated AI tools into development workflows and provided DevOps support"
    ),
    emoji("⚡ Created interactive front-end interfaces for web applications")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Matlab",
      fontAwesomeClassname: "fas fa-calculator"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Selenium",
      fontAwesomeClassname: "fas fa-vial"
    },
    {
      skillName: "Amazon S3",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Microsoft Office",
      fontAwesomeClassname: "fab fa-microsoft"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Texas at Austin",
      logo: require("./assets/images/UTAustinLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "January 2025 - Present",
      descArray: ["GPA: 4.0", "Coursework"],
      descBullets: ["Advanced Linear Algebra, Deep Learning"],
      transcriptPdf: "University_of_Texas_Academic_Summary.pdf" // Add path to transcript PDF if available
    },
    {
      schoolName: "Vanderbilt University",
      logo: require("./assets/images/VanderbiltUniversityLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2018 - December 2023",
      descArray: [
        "Major: Computer Science Minor: Mathematics, Economics, Chemistry",
        "GPA: 3.801",
        "Honors: Dean's List for 6 out of 7 semesters",
        "Clubs: VandyHacks, Multicultural Leadership Council - International Story Telling Showcase, Asian American Student Association, Korean Undergraduate Student Association Soccer Team, LNYF festival dance team",
        "Coursework"
      ],
      descBullets: [
        "Principles of Software Engineer, Machine Learning, Data Visualization, Operating Systems, Project in Virtual Reality Design, Network Analysis in Healthcare, Theory of Automata, Program Design Data Structures, Database Management Systems, Discrete Structures, Algorithms, Intermediate Software Design, Programming Languages, Programming & Problem-Solving, Computers & Ethics, Digital Systems, Digital Systems Laboratory, Intro to Numerical Math, Prob/Stats - Engineering, Diff Eq with Linear Algebra, Linear Algebra, Intro Programming for Eng & Sci"
      ],
      transcriptPdf: "Kyung_Ho_Kang_Official_Transcript.pdf" // Add path to transcript PDF if available
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend/Design",
      progressPercentage: "70%"
    },
    {
      Stack: "Automation/Test",
      progressPercentage: "80%"
    },
    {
      Stack: "DevOps",
      progressPercentage: "60%"
    },
    {
      Stack: "AI/ML",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "Visa",
      companylogo: require("./assets/images/visa-logo-03.png"),
      date: "February 2024 – Present",
      descBullets: [
        "Developed Visa Accept product aimed to enable billions of small merchants to quickly set up a seller profile through a participating banking app and accept card payments with their mobile phone.",
        "Developed a comprehensive automation test framework for a settlement funds transfer management platform"
      ]
    },
    {
      role: "Software Engineer",
      company: "Stryker",
      companylogo: require("./assets/images/stryker.png"),
      date: "May 2023 – August 2023",
      descBullets: [
        "Designed a user-interactive GUI after automating the extraction of data from the surgical instrument using TCP sockets, saving more than 400 hours/year for the test, service, and installation teams."
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
  title: "Projects",
  //subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/vandymarketplace.png"),
      projectName: "Vandy Market Place",
      projectDesc:
        "Platform that facilitates the buying and selling of items among students within Vanderbilt",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://vandymarketplace.vercel.app/log-in"
        },
        {
          name: "Download Demo",
          url: "/scott_portfolio/VandyMarketPlaceDemo.mp4"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ML.jpg"),
      projectName: "Machine Learning: Phishing URL Classification",
      projectDesc: "Classification system to discern the legitimacy of URLs",
      footerLink: [
        {
          name: "Download Paper",
          url: "/scott_portfolio/Phishing_URL_Classification.pdf"
        }
      ]
    },
    {
      image: require("./assets/images/network.jpg"),
      projectName: "Network Analysis: Drug Drug Interaction",
      projectDesc:
        "Analysis of drug interactions and adverse effects using network analysis",
      footerLink: [
        {
          name: "Download Paper",
          url: "/scott_portfolio/DDI_Network_paper_Scott.pdf"
        }
      ]
    },
    {
      image: require("./assets/images/data.jpg"),
      projectName: "Data Analysis: Voters' Registration",
      projectDesc:
        "Designed and implemented a data analytics system for voter registration data to support efficient analysis and reporting",
      footerLink: [
        {
          name: "Download Demo",
          url: "/scott_portfolio/MySQLProject.mp4"
        }
      ]
    },
    {
      image: require("./assets/images/scott_beach.png"),
      projectName: "Personal Website",
      projectDesc: "First portfolio website created and deployed",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://scottkang123.github.io/my-app/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Microsoft Certified: Azure Fundamentals",
      // subtitle:
      //   "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/microsoft_logo.jpeg"),
      imageAlt: "Microsoft Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/9a81e65e-901d-4182-9386-fc628b8a9424/linked_in_profile"
        }
      ]
    },
    {
      title: "AWS Educate Machine Learning Foundations",
      // subtitle:
      //   "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/amazon_web_services_logo.jpeg"),
      imageAlt: "Amazon Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/4b2999a9-b0a2-4a52-b708-7c0b8991e98b/linked_in_profile"
        }
      ]
    },
    {
      title: "AWS Educate Introduction to Cloud 101",
      // subtitle:
      //   "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/amazon_web_services_logo.jpeg"),
      imageAlt: "Amazon Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/8ad3dc1a-2d79-4884-b262-1851843918cd/linked_in_profile"
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
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+615-935-0739",
  email_address: "scottkang991103@gmail.com"
};

// More About Me Section
const moreAboutMe = {
  title: "More About Me",
  display: true, // Set false to hide this section, defaults to true

  // Other Work Experience
  otherWorkExperience: [
    {
      role: "Sergeant",
      company: "Republic of Korea Army",
      date: "December 2020 - June 2022",
      description:
        "Worked as a translator and an intelligence operation soldier at a command control center. Dispatched to Incheon Airport, guiding overseas arrivals with quarantine processes in response to COVID-19.",
      image: require("./assets/images/koreanArmyLogo.jpg") // Replace with actual military service image
    },
    {
      role: "Teaching Staff",
      company: "Wisconsin Universities Korea Representative",
      date: "April 2020 - December 2020",
      description:
        "Taught ACT, IELTS, AP CalcAB, College Statistics, and College Algebra to high-school seniors and college freshmen. Managed student information, college application processes, and helped maintain the facility.",
      image: require("./assets/images/wisconsinUniLogo.png") // Replace with actual military service image
    },
    {
      role: "Summer Intern",
      company: "Denave",
      date: "Summer 2020",
      description:
        "Organized a database to manage Microsoft customers, and informed tech managers of virtual cloud training sessions and important updates regarding Microsoft products.",
      image: require("./assets/images/Denave_New_Logo.jpg") // Replace with actual military service image
    },
    {
      role: "Summer Intern",
      company: "National Yang Ming University",
      date: "Summer 2017",
      description:
        "Helped professors and graduate students with research on a protein called mCostars that regulates cell migration and wrote a lab report for the experiment. Performed PCR, gel electrophoresis, culturing E.Coli, plasmid digestion & ligation, and observed migration of cancer cells and studied f-actin staining under a microscope, during a course of 6 weeks program",
      image: require("./assets/images/National_Yang-Ming_University_logo.svg.png") // Replace with actual military service image
    }
  ],

  // Countries Lived In
  countriesLivedIn: [
    {
      name: "South Korea",
      duration: "1999 - 2009",
      image: require("./assets/images/Flag_of_South_Korea.svg") // Replace with actual country image
    },
    {
      name: "Malaysia",
      duration: "2009 - 2010",
      image: require("./assets/images/Flag_of_Malaysia.svg.png") // Replace with actual country image
    },
    {
      name: "Thailand",
      duration: "2010 - 2013",
      image: require("./assets/images/Flag_of_Thailand.svg.png") // Replace with actual country image
    },
    {
      name: "Taiwan",
      duration: "2013 - 2018",
      image: require("./assets/images/Flag_of_the_Republic_of_China.svg") // Replace with actual country image
    },
    {
      name: "United States of America",
      duration: "2018 - Present",
      image: require("./assets/images/Flag_of_the_United_States.svg.png") // Replace with actual country image
    }
  ],

  // Hobbies
  hobbies: [
    "Soccer",
    "Golf",
    "Tennis",
    "CrossFit",
    "Swimming",
    "Hiking",
    "Finance/Stocks"
  ]
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
  resumeSection,
  moreAboutMe
};
