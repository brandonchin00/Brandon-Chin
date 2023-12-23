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
    text: "I co-led a team of five Software Engineer Interns in building an expense management app for iOS/Android using agile methodology. Through 97 JIRA tickets across four sprints, we successfully developed and launched an expense management app. Through 18 usability interviews, my team and I refined the UI/UX of the application. Additionally, I built a mock AI Chatbot to understand its capabilities and implementation process.",
    date: "2023",
    month: "June – August",
    company: "Publicis Sapient",
    image: "./images/publicis.png",
    image_2: "./images/publicis-2.png",
  },
  {
    title: "Product Management Intern at Mobilize.IT",
    text: "I collaborated with the Senior VP, analyzing 15 features to optimize our product, resulting in 3 UX fixes. I interviewed 50+ users, crafting 5 blog posts on product-market fit for the US market. Additionally, I conducted a competitor analysis, identifying 5 key feature recommendations for product differentiation.",
    date: "2022",
    month: "February – April",
    image: "./images/mob.png",
    image_2: "./images/mob-2.png",
  },
  {
    title: "Business Development Intern at Echo3d",
    text: "I constructed a competitor analysis and proposed 6 features to bolster our market edge. Alongside an engineering team, I tackled 6 UI issues by thoroughly reviewing the user journey map for their SaaS product. Additionally, I utilized SeamlessAI to source clients within the retail clothing sector, providing valuable contacts to the VP of Sales for potential sales leads.",
    date: "2022",
    month: "January – April",
    image: "./images/echo.png",
    image_2: "./images/echo-2.png",
  },
  {
    title: "Financial Analyst Intern at Digital Factory",
    text: "I developed an Excel calculator to assess OPEX for a $3M nationwide project with Walgreens. Additionally, I constructed and refined a $5M OPEX financial model for the Sales VP, facilitating accurate calculations of development costs. Further, I completed due diligence, compiling Excel data for investor outreach, and applied for over 15 funding opportunities. I also led presentations on financial models for the EVP of Client Services and provided daily reports to the VP of Finance. Moreover, I created onboarding materials for 5 new interns and led a presentation to elucidate the new internal financial model.",
    date: "2021",
    month: "June – August",
    image: "./images/digital.png",
    image_2: "./images/digital-2.jpg",
  },
  {
    title: "Marketing Intern at The Human Element",
    text: "I created a concept venue and presented it directly to the company’s client(Chef Narisawa) within 5 days. I facilitated daily Spanish-to-English communication between partner companies. On the website, I revised the UX via graphic changes, design tweaks on WordPress, and content adjustments. I redesigned 2 graphs for better data organization and proposed a royalty deal to create a new revenue stream for the CEO with a publisher.",
    date: "2019",
    month: "October – December",
    image: "./images/human.png",
    image_2: "./images/human-2.png",
  },
  {
    title: "Audit Intern at Changing the Present",
    text: "I revised excel sheets equations and cross checked the accounting excel sheet with a mentor",
    date: "2016",
    month: "June – July",
    image: "./images/change.png",
    image_2: "./images/change-2.png",
  },
];

const projects = [
  {
    image: "./card-images/fyt.png",
    title: "Internal Product Database",
    text: "An internal tool for company branch managers to actively manage and track their existing products.",
    tags: "Node.js:React.js:Figma:Product Management",
    images: {
      image_1: "./card-images/fyt.png",
      image_2: "./card-images/fyt-1.png",
      image_3: "./card-images/fyt-2.png",
    },
    title_in: "Travel Agency Internal Product Database",
    task: "Branch managers have raised an issue with the head office: New employees feel less motivated to sell current products due to the complexity of accessing inventory and collecting sales information.",
    process:
      "I began by listening and pinpointing the company's issues during a meeting, then delved deeper by conducting 5 interviews with branch managers to gain a comprehensive grasp of the problem. Following brainstorming sessions, I suggested a website solution aimed at streamlining information flow. Once the proposal was approved, I gathered requirements and swiftly drafted a preliminary design to test user navigation within a day. Consulting with managers using the wireframe, I refined the user experience through collaborative adjustments. After some adjustments, I began building the website utilizing React and Node.js. I utilized hooks like useState, useEffect, useRef, and several libraries to ensure the website's functionality. I then conducted a usability test with 2 branch managers to ensure the website's functionality and user experience.",
    solution:
      "A web page designed to streamline information presentation for agents, featuring an intuitive user interface and captivating graphics to efficiently communicate information. This aims to rapidly replace the conventional use of Excel sheets.",
  },
  {
    image: "./card-images/fyt-app.png",
    title: "App Design and Requirements",
    text: "An app that centralizes customer data and offer end-to-end concierge service",
    tags: "Figma:Product Management",
    images: {
      image_1: "./card-images/fyt-app.png",
      image_2: "./card-images/fyt-app-1.png",
      image_3: "./card-images/fyt-app-2.png",
    },
    title_in: "Mobile App for Travel Agency Customers",
    task: "Executives raised a problem: 'How can we gain a competitive edge in a saturated market?'",
    process:
      "I began by analyzing the company's product lines; however, I found it challenging to create product differentiation in a price-sensitive market. Through an analysis of multi-competitor operations, I identified service as an area to gain a competitive edge. After consulting management, they agreed on the direction and green-lit the project. I proceeded to draft requirements and analyze UX on apps that customers who are already accustomed to WeChat, Douyin, and Xiaohongshu. Through my analysis, I crafted a 10-page PRD to thoroughly walk management through the user experience and key features. After some revisions, I received approval and started development. ",
    solution:
      "A mobile application designed to empower a travel agency, offering personalized concierge-like services upon customers' purchase of company products.",
  },
  {
    image: "./card-images/case-pm.png",
    title: "Amazon Case Study",
    text: "My own case study on a hypothetical situation where Amazon executives opted to venture into the car retail industry. ",
    tags: "Product Management",
    images: {
      image_1: "./card-images/case-pm.png",
      image_2: "./card-images/case-pm-1.png",
      image_3: "./card-images/case-pm-2.png",
    },
    title_in: "Amazon Case Study: Amazon Auto",
    task: "To break into the car industry, Amazon wants to offer selling cars online as an option to Amazon’s Customers. In order to accommodate a range of customers, financing and payment options need to be offered for customers. ",
    process:
      "First, understand the problem and goal. Identifiy and vertify assumptions. Survey customer and gather data. Identify customer needs and user journey. Craft user stories to identify all possible features. Use MSCW framework, T-Shirt framework, and Effort/Value map to narrow down features for MVP. Employ OKRs strategy, identify key success metrics, and AARRR metrics. Craft low-fi mockup of solution.",
    solution: "An online e-commerce platform for cars.",
  },
  {
    image: "./card-images/ml.png",
    title: "ML Algorithm for Loan Assessment",
    text: "To assess the likelihood of a person defaulting on their loan according to various factors",
    tags: "Machine Learning:R",
    images: {
      image_1: "./card-images/ml.png",
      image_2: "./card-images/ml-1.png",
      image_3: "./card-images/ml-2.png",
    },
    title_in: "Loan Default Risk Assessment",
    task: "I am given a comphrensive dataset with various factors (age, income, number of active loans, dependents, etc). Given the these factors, I am to determine the likelihood of defaulting on a loan. Additionally determine the best machine learning model to use and why?",
    process:
      "I first cleaned the data and fill the empty values/corrupted values using a predictive model (Data Reprocessing). I then chose specific variables for binning and decided the binning width according to various factors. Next, I constructed two ML models: (Naive Bayes and Nueral Net) I identified the one whom performed the best in comparision to the benchmark error rate. I then used the ensemble method(boosting and bagging) to assess if it would draw a lower error rate. Aftewards, I wrote my process and decision in a full-report.",
    solution:
      "A 21-page documentation on my chose of ML algorithm to address the problem",
  },
  {
    image: "./card-images/popcorn.png",
    title: "Rate and Watchlist",
    text: "A web applicationm that allows users to rate and add movies to their watchlist",
    tags: "Passion Project:React.js:Node.js",
    images: {
      image_1: "./card-images/popcorn.png",
      image_2: "./card-images/popcorn-1.png",
      image_3: "./card-images/popcorn-2.png",
    },
    title_in: "Rate and Watchlist",
    task: "While learning to build in react, I tasked with this project to build a web application that allows users to rate and add movies to their watchlist. I am to use the OMDB API to source the movies and display them on the web application. I am to use React.js to build the front-end and Node.js to build the back-end.",
    process:
      "Given the final image of the project, I started by breaking down each component that I could visualize, aiming for a modular structure that would ensure flexibility and scalability. I utilized useState and useEffect hooks to manage the state and side effects. While navigating the development phase, I encountered several obstacles that required restructuring of specific elements. With some aid from my online course, I was able to learn and build the application. ",
    solution:
      "A web-based platform enabling users to rate movies and include them in their watchlists, subsequently saving this information directly onto their devices.",
  },
  {
    image: "./card-images/pack.png",
    title: "Packing List",
    text: "A web applicationm that allows users to create and manage a packing list for their travels",
    tags: "Passion Project:React.js:Node.js",
    images: {
      image_1: "./card-images/pack.png",
      image_2: "./card-images/pack-1.png",
      image_3: "./card-images/pack-2.png",
    },
    title_in: "Packing List",
    task: "While learning to build in react, I tasked with this project to build a web application that allows users to create and manage a packing list for their travels. I am to use React.js to build the front-end and Node.js to build the back-end.",
    process:
      "I started with identifying key actions that a user needs to perform to create a packing list. I then broke down each action into components and created a modular structure. I utilized useState hook to ensure items are properly rendered. ",
    solution:
      "A web-based platform enabling users to create and manage a packing list for their travels.",
  },
  {
    image: "./card-images/expense.png",
    title: "Simple Expense Tracker",
    text: "A web applicationm that allows users to track their expenses and debts",
    tags: "Passion Project:React.js:Node.js",
    images: {
      image_1: "./card-images/expense.png",
      image_2: "./card-images/expense-1.png",
      image_3: "./card-images/expense-2.png",
    },
    title_in: "Simple Expense Tracker",
    task: "While learning to build in react, I tasked with this project to build a web application that allows users to track their expenses and debts. I am to use React.js to build the front-end and Node.js to build the back-end.",
    process:
      "I started with identifying key actions that a user needs to perform to track their expenses. I then broke down each action into components and created a modular structure. I utilized useState hook to ensure items are properly rendered. ",
    solution:
      "A web-based platform enabling users to track their expenses and debts.",
  },
  {
    image: "./card-images/pole.png",
    title: "Challenges in Polestar's US EV Growth",
    text: "A consulting project for Polestar, a Swedish electric car company, to identify growth opportunities in the US market",
    tags: "Consulting:Market Research",
    images: {
      image_1: "./card-images/pole.png",
      image_2: "./card-images/pole-1.png",
      image_3: "./card-images/pole-2.png",
    },
    title_in: "Challenges in Polestar's US EV Growth",
    task: "My team and I are tasked with identifying the challenges in Polestar's US EV growth and propose solutions to address these challenges. We are to conduct market research and analyze the data to identify the challenges and propose solutions.",
    process:
      "It began with market research and data analysis via the web and examination of their financial statements. Subsequently, we identified the challenges and proposed multiple solutions to address these issues. After narrowing our focus to two potential solutions, we presented our findings and broke down each solution into four components: Market Attractiveness, Competitive Advantage, NPV Analysis, and an Implementation Plan.",
    solution:
      "A powerpoint presentation on our findings and proposed solutions to address the challenges.",
  },
  {
    image: "./card-images/startup.png",
    title: "New Balance Marketing Campaign",
    text: "A marketing project for New Balance increase brand awareness, organic search, and improve customer acquisition",
    tags: "Marketing:Metaverse",
    images: {
      image_1: "./card-images/startup.png",
      image_2: "./card-images/startup-1.png",
      image_3: "./card-images/startup-2.png",
    },
    title_in: "New Balance: Metaverse Marketing Campaign",
    task: "New Balance is looking to increase brand awareness, organic search, and improve customer acquisition. My team and I are tasked with creating a marketing campaign to address these issues. We are to conduct market research and analyze the data to identify the challenges and propose solutions.",
    process:
      "To pinpoint opportunities for enhancement, we employed NUVI, a social media analytics tool, to analyze their existing marketing presence. Following this, we pinpointed potential avenues for growth, namely the metaverse and leveraging digital influencers as marketing mediums. As a result, we crafted a marketing strategy centered around utilizing the metaverse and digital influencers to boost brand visibility, ultimately driving increased customer acquisition. To gauge the campaign's success, we outlined key metrics including Audience Growth Rate (%), Virality Coefficient (calculated as the Number of Shares divided by the Number of Impressions), and Click-Through Rate (CTR).",
    solution:
      "We assembled a comprehensive breakdown of our marketing campaign in a PowerPoint presentation, which we subsequently delivered to the Vice President of Marketing at New Balance. Furthermore, we meticulously crafted a 5-page paper outlining the intricacies of our strategy.",
  },
  {
    image: "./card-images/startup.png",
    title: "Student Startup: Sticker Pack",
    text: "A custom sticker company that utilized student designs to create stickers",
    tags: "Entrepreneurship:Marketing:E-commerce",
    images: {
      image_1: "./card-images/startup.png",
      image_2: "./card-images/startup-1.png",
      image_3: "./card-images/startup-2.png",
    },
    title_in: "Sticker Pack Startup",
    task: "Identify market opportunities and create a product to address the market needs.",
    process:
      "As we explored opportunities within the college market, my team and I engaged in brainstorming sessions to conceptualize potential product ideas. Identifying students' strong inclination towards personalizing their school-provided laptops, we conducted a survey, revealing that 80% of students expressed interest in purchasing customizable stickers. Our value proposition centered around transforming any student's sketches into stickers, offering both convenience and affordability. Following our success in the rocket pitch, we secured funding for our venture and commenced sourcing manufacturers. I proceeded to create an e-commerce website using Shopify, while the team embarked on crafting designs. Subsequently, we initiated a marketing campaign aimed at promoting the website and our unique stickers.",
    solution:
      "We generated revenue within the first day of launch and broken even within 2 weeks.",
  },
];

const titleOne = [{ title: "EXPERIENCES" }];
const titleTwo = [{ title: "PROJECTS" }];
export { logo, animated, content, projects, titleOne, titleTwo };