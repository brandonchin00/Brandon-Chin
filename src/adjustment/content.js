const logo = "";

const animated = {
  first: "PRODUCT MANAGER",
  second: "FRONT-END DEVELOPER",
  third: "BUSINESS STUDENT",
  fourth: "DATA ANALYST",
  fifth: "RUNNER 👟",
};

const content = [
  {
    title: "Product Management Intern at Publicis Sapient",
    text: "I led a team of five Software Engineer Interns in building an expense management app for iOS/Android using agile methods. Through 97 JIRA tickets across four sprints, we successfully developed and launched the app. I conducted 18 usability interviews, refining UI/UX and collaborating with UX associates. Additionally, I spearheaded the creation and integration of an AI Chatbot, enhancing the app's functionality to calculate expenses and offer tailored user recommendations for saving money.",
    date: "2023",
    month: "June – August",
    company: "Publicis Sapient",
    image: "../images/publicis.png",
    image_2: "../images/publicis-2.png",
  },
  {
    title: "Product Management Intern at Mobilize.IT",
    text: "I collaborated with the Senior VP, analyzing 15 features to optimize our product, resulting in 3 UX fixes. I interviewed 50+ users, crafting 5 blog posts on product-market fit for the US market. Additionally, I conducted a competitor analysis, identifying 5 key feature recommendations for product differentiation.",
    date: "2022",
    month: "February – April",
    image: "../images/mob.png",
    image_2: "../images/mob-2.png",
  },
  {
    title: "Business Development Intern at Echo3d",
    text: "I constructed a competitor analysis and proposed 6 features to bolster our market edge. Alongside an engineering team, I tackled 6 UI issues by thoroughly reviewing the user journey map for their SaaS product. Additionally, I utilized SeamlessAI to source clients within the retail clothing sector, providing valuable contacts to the VP of Sales for potential sales leads.",
    date: "2022",
    month: "January – April",
    image: "../images/echo.png",
    image_2: "../images/echo-2.png",
  },
  {
    title: "Financial Analyst Intern at Digital Factory",
    text: "I developed an Excel calculator to assess OPEX for a $3M nationwide project with Walgreens. Additionally, I constructed and refined a $5M OPEX financial model for the Sales VP, facilitating accurate calculations of development costs. Further, I completed due diligence, compiling Excel data for investor outreach, and applied for over 15 funding opportunities. I also led presentations on financial models for the EVP of Client Services and provided daily reports to the VP of Finance. Moreover, I created onboarding materials for 5 new interns and led a presentation to elucidate the new internal financial model.",
    date: "2021",
    month: "June – August",
    image: "../images/digital.png",
    image_2: "../images/digital-2.jpg",
  },
  {
    title: "Marketing Intern at The Human Element",
    text: "I created a concept venue and presented it directly to the company’s client(Chef Narisawa) within 5 days. I facilitated daily Spanish-to-English communication between partner companies. On the website, I revised the UX via graphic changes, design tweaks on WordPress, and content adjustments. I redesigned 2 graphs for better data organization and proposed a royalty deal to create a new revenue stream for the CEO with a publisher.",
    date: "2019",
    month: "October – December",
    image: "../images/human.png",
    image_2: "../images/human-2.png",
  },
  {
    title: "Audit Intern at Changing the Present",
    text: "I revised excel sheets equations and cross checked the accounting excel sheet with a mentor",
    date: "2016",
    month: "June – July",
    image: "../images/change.png",
    image_2: "../images/change-2.png",
  },
];

const projects = [
  {
    image: "../card-images/fyt.png",
    title: "Internal Product Database",
    text: "An internal tool for company branch managers to actively manage and track their existing products.",
    tags: "Node.js React.js SEO Figma",
    images: {
      image_1: "../card-images/fyt.png",
      image_2: "../card-images/fyt-1.png",
      image_3: "../card-images/fyt-2.png",
      image_3: "../card-images/fyt-3.png",
    },
    title_in: "Travel Agency Internal Product Database",
    task: "Branch managers have raised an issue with the head office: New employees feel less motivated to sell current products due to the complexity of accessing inventory and collecting sales information.",
    solution:
      "A web page designed to streamline information presentation for agents, featuring an intuitive user interface and captivating graphics to efficiently communicate information. This aims to rapidly replace the conventional use of Excel sheets.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1542903660-eedba2cda473?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "FYT Figma MockUp",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
    tags: "React.js Web SEO Canva",
  },
  {
    image:
      "https://images.unsplash.com/photo-1542903660-eedba2cda473?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Amazon Auto Case Study",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
    tags: "Instagram Facebook Tiktok",
  },
  {
    image:
      "https://images.unsplash.com/photo-1542903660-eedba2cda473?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "FTY Web Application",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
    tags: "Figma iOS Android",
  },
  {
    image:
      "https://images.unsplash.com/photo-1542903660-eedba2cda473?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Movie Rating Web Application",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
    tags: "React.js Web SEO Canva",
  },
  {
    image:
      "https://images.unsplash.com/photo-1542903660-eedba2cda473?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Travel Packing Web Application",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
    tags: "Instagram Facebook Tiktok",
  },
  {
    image:
      "https://images.unsplash.com/photo-1542903660-eedba2cda473?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Personal Expenses Web Application",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
    tags: "Instagram Facebook Tiktok",
  },
  {
    image:
      "https://images.unsplash.com/photo-1542903660-eedba2cda473?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Social Media Account Operation",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
    tags: "Instagram Facebook Tiktok",
  },
  {
    image:
      "https://images.unsplash.com/photo-1542903660-eedba2cda473?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Startup",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
    tags: "Instagram Facebook Tiktok",
  },
];

const titleOne = [{ title: "EXPERIENCES" }];
const titleTwo = [{ title: "PROJECTS" }];
export { logo, animated, content, projects, titleOne, titleTwo };
