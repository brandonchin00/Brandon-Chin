const logo = "";

const animated = {
    first: "PRODUCT MANAGER",
    second: "FULL-STACK DEVELOPER",
    third: "DATA ENGINEER",
    fourth: "UI/UX DESIGNER",
    fifth: "RUNNER 👟",
};

const content = [
    {
        title: "Data Engineer at MathCo",
        text: "Currently optimizing data pipelines, ensuring data quality, addressing ad-hoc client inquiries, and maintaining proactive stakeholder communication",
        date: "2024",
        month: "June – Present",
        company: "MathCo",
        image: "./images/mathco.png",
        image_2: "./images/mathco-1.png",
    },
    {
        title: "Product Manager at Fei Yang Travel",
        text: "I developed a comprehensive full-stack e-commerce platform using React and Next.js, incorporating an inventory management dashboard to resolve legacy issues and enhance cross-company communication. This made it easier for employees to understand product highlights and improve their sales process. Additionally, I created a detailed 1-year roadmap, designed a Figma prototype, and set clear delivery timelines for each phase of the e-commerce site. I conducted a competitor analysis in the U.S. market, which informed a 10-page PRD focused on business and product improvements. Furthermore, I launched and designed an omnichannel marketing campaign aimed at increasing brand awareness among Chinese travelers seeking a travel agency.",
        date: "2023",
        month: "September – Present",
        company: "Fei Yang Travel",
        image: "./images/fyt.png",
        image_2: "./images/fyt-1.png",
    },
    {
        title: "Product Management Intern at Publicis Sapient",
        text: "I co-led a team of five Software Engineer Interns in building an expense management app for iOS/Android using agile methodology. Across four sprints, we successfully developed and launched the app, managing 97 JIRA tickets. To refine the application's UI/UX, my team and I conducted 18 usability interviews. Furthermore, I developed a mock AI Chatbot to explore its capabilities and the implementation process.",
        date: "2023",
        month: "June – August",
        company: "Publicis Sapient",
        image: "./images/publicis.png",
        image_2: "./images/publicis-2.png",
    },
    {
        title: "Product Management Intern at Mobilize.IT",
        text: "I collaborated with the Senior VP, analyzing 15 features to optimize our product, which led to implementing 3 UI fixes. I interviewed over 30 users and crafted 5 blog posts focusing on product-market fit for the US market. Additionally, I conducted a competitor analysis, through which I identified 5 key feature recommendations for product differentiation.",
        date: "2022",
        month: "February – April",
        image: "./images/mob.png",
        image_2: "./images/mob-2.png",
    },
    {
        title: "Business Development Intern at Echo3d",
        text: "I conducted a competitor analysis and suggested 6 features to strengthen market competitiveness. I worked closely with the CEO to addressed 6 UI issues by thoroughly reviewing the user journey map for their SaaS product. Moreover, I utilized SeamlessAI to source clients within the retail clothing sector, offering valuable contacts to the VP of Sales for potential sales leads.",
        date: "2022",
        month: "January – April",
        image: "./images/echo.png",
        image_2: "./images/echo-2.png",
    },
    {
        title: "Financial Analyst Intern at Digital Factory",
        text: "I developed an Excel calculator to assess OPEX for a $3M nationwide project with Walgreens. Additionally, I constructed and refined a $5M OPEX financial model for the Sales VP, enabling accurate calculations of development costs. Furthermore, I completed due diligence by compiling Excel data for investor outreach and applied for over 15 funding opportunities. I also conducted presentations on financial models for the EVP of Client Services and provided daily reports to the VP of Finance. Moreover, I created a presentation to onboard 5 new financial analyst interns to explain the new internal financial model.",
        date: "2021",
        month: "June – August",
        image: "./images/digital.png",
        image_2: "./images/digital-2.jpg",
    },
    {
        title: "Marketing Intern at The Human Element",
        text: "I conceptualized a venue and presented it directly to the company’s client (Chef Narisawa) within 5 days. Additionally, I facilitated daily Spanish-to-English communication between partner companies. On the website, I enhanced the UX through graphic changes, design tweaks on WordPress, and content adjustments. I also redesigned 2 graphs to improve data organization and proposed a royalty deal to create a new revenue stream for the CEO with a publisher.",
        date: "2019",
        month: "October – December",
        image: "./images/human.png",
        image_2: "./images/human-2.png",
    },
    {
        title: "Audit Intern at Changing the Present",
        text: "I revised the equations in Excel sheets and cross-checked the accounting spreadsheet with a mentor.",
        date: "2016",
        month: "June – July",
        image: "./images/change.png",
        image_2: "./images/change-2.png",
    },
];

const projects = [
    {
        image: "./card-images/FYT0.png",
        title: "E-commerce Website for Travel Agency",
        text: "From design to code, I'm building an e-commerce product for the travel industry",
        tags: "Product Management:Figma:E-commerce:Full-stack",
        images: {
            image_1: "./card-images/FYT0.png",
            image_2: "./card-images/FYT01.png",
            image_3: "./card-images/orion-3.png",
        },
        title_in: "Orion: Travel Agency E-commerce",
        task: "Develop a robust e-commerce platform for a local travel agency. The goal is to enhance customer engagement, reimagine the employee booking process, and streamline inventory management.",
        process:
            "The project is still in development. Having completed the design phase, I am now moving on to the development phase and will provide updates as I progress. The process involves several structured phases: initially, the design phase focused on gathering requirements, identifying use cases, and ensuring the product aligns with management's vision, followed by communicating the development cycle and designing/prototyping the website using Figma. The development phase will involve building the website using Next.js and Supabase. Afterward, in the testing phase, I will ensure the website functions properly. Finally, during the launch phase, I will launch the website and provide updates on its performance.",
        solution:
            "A comprehensive e-commerce platform designed to enhance customer engagement, streamline the booking process, and optimize inventory management for a local travel agency.",
    },
    {
        image: "./card-images/boggle-4.png",
        title: "Producthon: TechEd Industry",
        text: "A 36-hour hackathon to create a product for the education industry",
        tags: "Product Management:Hackathon",
        images: {
            image_1: "./card-images/boggle-1.png",
            image_2: "./card-images/boggle-2.png",
            image_3: "./card-images/boggle-3.png",
        },
        title_in: "Boggle, Bereal + Education Games",
        task: "Develop creative solutions to improve access to educational resources, facilitate classroom learning, and enhance engaging methods for individuals to acquire knowledge as part of a hackathon task.",
        process:
            "We began by identifying a significant problem in our lives: the lack of intellectual stimulation among individuals aged 15 to 25. Due to social media apps like TikTok, we found statistics showing a decline in IQ and focus among young adults. To better understand the issue, we conducted interviews with 28 members of our target audience through a Google Form. With a clear understanding of the problem, we brainstormed various app solutions to address it. We decided to create an app where users can participate in daily intellectually stimulating games. By defining restrictions on game availability and play duration, we aimed to facilitate a sense of competition among friends. Once we defined the product vision, we conducted further research and defined the Total Addressable Market (TAM), Serviceable Addressable Market (SAM), and calculated the Compound Annual Growth Rate (CAGR). Once it became clear that there was a sizable market for the product, we began collaborating on the final features and developing Figma designs to visualize our ideas. This comprehensive process culminated in the creation of a final presentation showcasing our innovative solution.",
        solution:
            "Introducing Boggle, a mobile app designed to keep you intellectually stimulated every day. At a randomly chosen time during the day, you'll have the chance to play a game within a 15-minute window. If you miss this opportunity, you'll have to wait until the next day to play. Each game is generated and randomized, ensuring that no two games are alike. After playing, your results will be shared with friends on a leaderboard, allowing for friendly competition to see who can achieve the highest score. Even if you didn't participate in the latest game, you can still view game records and past user activities until the next game begins.",
    },
    {
        image: "./card-images/roggle-1.png",
        title: "Online Note Taking Website",
        text: "A final project to demostrate full-stack development skills.",
        tags: "Full-stack:React.js:Node.js",
        images: {
            image_1: "./card-images/roggle-1.png",
            image_2: "./card-images/roggle-2.png",
            image_3: "./card-images/roggle-3.png",
        },
        title_in: "Roggle, Online Note Taking",
        task: "Tasked with developing a full-stack application to demonstrate my skills in React.js and Node.js.",
        process:
            "I began by identifying the key features necessary for a note-taking application. I then deconstructed each feature into components, establishing a modular structure. To ensure proper rendering of items, I utilized the useState hook. And throughout the development phase, I faced several obstacles that necessitated restructuring specific elements. With assistance from my online course, I successfully learned and built the application.",
        solution:
            "A web-based platform enabling users to take notes and save them directly online. This allowed users to access their notes anywhere from any computer",
    },
    {
        image: "./card-images/fyt.png",
        title: "Internal Inventory Management Dashboard",
        text: "An internal tool for company branch managers to actively manage and track their current products.",
        tags: "Node.js:React.js:Figma:Product Management:Full-stack",
        images: {
            image_1: "./card-images/fyt.png",
            image_2: "./card-images/fyt-1.png",
            image_3: "./card-images/fyt-2.png",
        },
        title_in: "Travel Agency Internal Product Database",
        task: "The expansion of our product line has resulted in substantial complexities that are proving challenging to comprehend and manage for interal teams.",
        process:
            "I initiated by listening and identifying the company's concerns in a meeting, then conducted 5 interviews with branch managers to deeply understand the issue. After brainstorming sessions, I proposed a website solution to streamline information flow. Upon approval, I swiftly gathered requirements and drafted a preliminary design to test user navigation within a day. Collaborating with managers using the wireframe, I refined the user experience through iterative adjustments. Once refined, I commenced building the website using React and Node.js, implementing hooks such as useState, useEffect, useRef, and various libraries for functionality. Finally, I conducted a usability test with 2 branch managers to ensure optimal website performance and user experience.",
        solution:
            "A web page designed to streamline information presentation for agents, showcasing an intuitive user interface and engaging graphics aimed at efficiently communicating information. Its goal is to swiftly replace the conventional use of Excel sheets.",
    },
    {
        image: "./card-images/fyt-app.png",
        title: "Travel Agency App",
        text: "An app that centralizes customer data and offer end-to-end concierge service",
        tags: "Figma:Product Management",
        images: {
            image_1: "./card-images/fyt-app.png",
            image_2: "./card-images/fyt-app-1.png",
            image_3: "./card-images/fyt-app-2.png",
        },
        title_in: "Mobile App for Travel Agency Customers",
        task: "How can we innovate our product offerings to differentiate ourselves from competitors?",
        process:
            "I began by analyzing the company's product lines. However, I found it challenging to create product differentiation in a price-sensitive market. By analyzing multi-competitor operations, I identified service as an area to gain a competitive edge. Upon consulting with management, they agreed on the direction and green-lit the project. I proceeded to draft requirements and analyze the user experience (UX) for customers already accustomed to WeChat, Douyin, and Xiaohongshu. My analysis culminated in a 10-page Product Requirements Document (PRD) that comprehensively outlined the user experience and key features for management. After some revisions, I received approval and commenced development. ",
        solution:
            "A mobile application designed to empower a travel agency, offering personalized concierge-like services upon customers' purchase of the company's products.",
    },
    {
        image: "./card-images/case.png",
        title: "Product Management Bootcamp",
        text: "In my personal case study, I examine a hypothetical scenario in which Amazon executives decide to enter the car retail industry.",
        tags: "Product Management",
        images: {
            image_1: "./card-images/case-1.png",
            image_2: "./card-images/case-2.png",
            image_3: "./card-images/case-3.png",
        },
        title_in: "Amazon Case Study: Amazon Auto",
        task: "To enter the automotive industry, Amazon aims to provide the option of selling cars online to its customers. To cater to a diverse customer base, the company needs to offer various financing and payment options.",
        process:
            "Firstly, understand the problem and goals. Identify and verify assumptions, survey customers, and gather data. Identify customer needs and map out the user journey. Craft user stories to delineate all possible features. Utilize the MSCW framework, T-Shirt framework, and Effort/Value map to streamline features for the MVP (Minimum Viable Product). Implement the OKRs strategy, identify key success metrics, and incorporate AARRR metrics. Create low-fidelity mockups of the solution.",
        solution: "A dedicated digital marketplace specializing in car sales.",
    },
    {
        image: "./card-images/ml.png",
        title: "Final Project: Machine Learning for Bank",
        text: "To evaluate the probability of an individual's loan default based on different factors.",
        tags: "Machine Learning:R",
        images: {
            image_1: "./card-images/ml.png",
            image_2: "./card-images/ml-1.png",
            image_3: "./card-images/ml-2.png",
        },
        title_in: "Loan Default Risk Assessment",
        task: "I have been provided with a comprehensive dataset containing various factors such as age, income, number of active loans, dependents, etc. Using these factors, my task is to ascertain the probability of loan default. Furthermore, I am required to identify the most suitable machine learning model for this analysis and justify the choice.",
        process:
            "I began by cleaning the data, filling in empty or corrupted values using a predictive model (Data Reprocessing). Next, I selected specific variables for binning and determined the bin width based on various factors. Following this, I built two machine learning models: Naive Bayes and Neural Net. I evaluated their performance compared to the benchmark error rate and identified the one that performed the best. Subsequently, I employed ensemble methods such as boosting and bagging to assess whether they would result in a lower error rate. Finally, I documented my entire process and decisions in a comprehensive report.",
        solution:
            "A documentation spanning 21 pages detailing my selection of a machine learning algorithm to tackle the issue.",
    },
    {
        image: "./card-images/popcorn.png",
        title: "Movie Review Website",
        text: "A web-based platform enabling users to both rate and add movies to their personal watchlists.",
        tags: "Passion Project:React.js:Node.js",
        images: {
            image_1: "./card-images/popcorn.png",
            image_2: "./card-images/popcorn-1.png",
            image_3: "./card-images/popcorn-2.png",
        },
        title_in: "Rate and Watchlist",
        task: "While learning to build in React, I was assigned a project: to create a web application enabling users to rate and add movies to their watchlist. The task involves utilizing the OMDB API to source movies and display them on the web application. I'll be using React.js for the front-end and Node.js for the back-end.",
        process:
            "Beginning with the final image of the project, I started by breaking down each visualized component, aiming for a modular structure to ensure flexibility and scalability. I utilized the useState and useEffect hooks to manage state and side effects. Throughout the development phase, I faced several obstacles that necessitated restructuring specific elements. With assistance from my online course, I successfully learned and built the application. ",
        solution:
            "A web-based platform enabling users to rate movies and include them in their watchlists, subsequently saving this information directly onto their devices.",
    },
    {
        image: "./card-images/pack.png",
        title: "Travel Packing Checklist Website",
        text: "A web-based application enabling users to generate and oversee a packing checklist for their travels.",
        tags: "Passion Project:React.js:Node.js",
        images: {
            image_1: "./card-images/pack.png",
            image_2: "./card-images/pack-1.png",
            image_3: "./card-images/pack-2.png",
        },
        title_in: "Packing List",
        task: "While learning to build in React, I was assigned this project to develop a web application enabling users to create and manage a packing list for their travels. I'll be using React.js for the front-end and Node.js for the back-end.",
        process:
            "I began by identifying the key actions necessary for users to create a packing list. I then deconstructed each action into components, establishing a modular structure. To ensure proper rendering of items, I utilized the useState hook.",
        solution:
            "A web-based platform enabling users to create and manage a packing list for their travels.",
    },
    {
        image: "./card-images/expense.png",
        title: "Simple Expense Tracker Website",
        text: "A web-based tool enabling users to monitor their expenditures and outstanding debts.",
        tags: "Passion Project:React.js:Node.js",
        images: {
            image_1: "./card-images/expense.png",
            image_2: "./card-images/expense-1.png",
            image_3: "./card-images/expense-2.png",
        },
        title_in: "Simple Expense Tracker",
        task: "While learning to build in React, I was tasked with creating a web application that enables users to track their expenses and debts. I will be using React.js for the front-end and Node.js for the back-end.",
        process:
            "I began by identifying the key actions necessary for users to track their expenses. I then broke down each action into components, establishing a modular structure. To ensure proper rendering of items, I utilized the useState hook.",
        solution:
            "A web-based platform enabling users to track their expenses and debts.",
    },
    {
        image: "./card-images/polestar.png",
        title: "Consulting Presentation: Challenges in Polestar's US EV Growth",
        text: "A consultancy assignment with Polestar, to identify growth opportunities in the US market",
        tags: "Consulting:Market Research",
        images: {
            image_1: "./card-images/polestar-1.png",
            image_2: "./card-images/polestar-2.png",
            image_3: "./card-images/polestar-3.png",
        },
        title_in: "Challenges in Polestar's US EV Growth",
        task: "My team and I have been tasked with identifying challenges in Polestar's US EV growth and proposing solutions to address them. We will conduct market research, analyze the data, and propose solutions based on our findings.",
        process:
            "It started with market research and data analysis conducted through web research and an examination of their financial statements. We then identified the challenges and proposed multiple solutions to address these issues. After narrowing our focus to two potential solutions, we presented our findings and delineated each solution into four components: Market Attractiveness, Competitive Advantage, NPV Analysis, and an Implementation Plan.",
        solution:
            "A powerpoint presentation on our findings and proposed solutions to address the challenges.",
    },
    {
        image: "./card-images/balance.png",
        title: "New Balance Marketing Campaign",
        text: "A marketing project for New Balance increase brand awareness, organic search, and improve customer acquisition",
        tags: "Marketing:Metaverse",
        images: {
            image_1: "./card-images/balance-1.png",
            image_2: "./card-images/balance-2.png",
            image_3: "./card-images/balance-3.png",
        },
        title_in: "New Balance: Metaverse Marketing Campaign",
        task: "New Balance aims to boost brand awareness, organic search visibility, and enhance customer acquisition. My team and I have been tasked with creating a marketing campaign to tackle these objectives. We will conduct market research, analyze the data to identify challenges, and propose suitable solutions.",
        process:
            "To identify opportunities for improvement, we utilized NUVI, a social media analytics tool, to analyze their current marketing presence. Subsequently, we identified potential growth paths, focusing on the metaverse and leveraging digital influencers as key marketing channels. This led us to develop a marketing strategy centered around utilizing the metaverse and digital influencers to amplify brand visibility, ultimately driving increased customer acquisition. To measure the campaign's success, we outlined key metrics, including Audience Growth Rate (%), Virality Coefficient (calculated as the Number of Shares divided by the Number of Impressions), and Click-Through Rate (CTR).",
        solution:
            "We compiled a comprehensive breakdown of our marketing campaign into a PowerPoint presentation, which we then delivered to the Vice President of Marketing at New Balance. Additionally, we meticulously crafted a 5-page paper outlining the intricacies of our strategy.",
    },
    {
        image: "./card-images/startup.png",
        title: "Student Startup",
        text: "A custom sticker company that utilized student designs to create stickers",
        tags: "Entrepreneurship:Marketing:E-commerce",
        images: {
            image_1: "./card-images/startup-1.png",
            image_2: "./card-images/startup-2.png",
            image_3: "./card-images/startup-3.png",
        },
        title_in: "Sticker Pack Startup",
        task: "Identify market opportunities and create a product to address the market needs.",
        process:
            "As we explored opportunities within the college market, my team and I engaged in brainstorming sessions to conceive potential product ideas. Recognizing students' strong inclination to personalize their school-provided laptops, we conducted a survey revealing that 80% of students were interested in purchasing customizable stickers. Our value proposition centered around transforming any student's sketches into stickers, offering both convenience and affordability. Following our success in the rocket pitch, we secured funding for our venture and began sourcing manufacturers. I then proceeded to create an e-commerce website using Shopify, while the team began crafting designs. Subsequently, we initiated a marketing campaign aimed at promoting the website and our unique stickers.",
        solution:
            "We began generating revenue on the launch day and reached the break-even point within two weeks.",
    },
];

const titleOne = [{ title: "EXPERIENCES" }];
const titleTwo = [{ title: "PROJECTS" }];
export { logo, animated, content, projects, titleOne, titleTwo };
