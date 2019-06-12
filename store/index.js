export const getters = {
  products(_, { links }) {
    return [
      {
        id: "engine",
        title: "MESG SDK",
        img: require("~/assets/engine/engine.svg"),
        description:
          "A suite of tools to connect together services and other devices and applications. Control the flow of data and level of security between your whole stack of technologies.",
        features: {
          primary: [
            {
              src: require('~/assets/engine/tech.svg'), title: "Integrate complicated tech easily", description: "Any API or microservice can be connected to any app or workflow. Even connect apps to hard-to-reach technologies like blockchains, IoT devices, or custom software.<br/><br/>The suite of tools in the SDK manage and forward events between all components so each component can stand on its own, making updates simple.", href: "https://docs.mesg.com/guide/quick-start-guide.html", action: "Quick start"
            },
            { src: require("~/assets/engine/development.svg"), title: "No wasted development hours", description: "A fundamental principle at MESG is DRY: Don’t Repeat Yourself. The tools in the SDK allow for the reuse of any app component. Reuse not only your components, but those offered by the community as well.<br/><br/>After components are built, either keep them private, or share them to earn in the Marketplace.", href: "https://marketplace.mesg.com/", action: "Go to the Marketplace" }
          ],
          secondary: [
            { src: require("~/assets/engine/event-driven.svg"), title: "Event-driven architecture", description: "An efficient way to manage hard-to-reach technologies like blockchains or IoT devices is to build modular apps simply react to real-world events. Your apps remain lightweight, reactive and easy to maintain." },
            { src: require("~/assets/engine/divergent-tech.svg"), title: "Connect divergent tech", description: "MESG services can connect to nearly anything, including APIs, decentralized networks or standalone applications. Then the Engine, a tool in the SDK, manages the interaction between all services and applications." },
            { src: require("~/assets/engine/development-hours.svg"), title: "Optimize development hours", description: "The tools in the SDK manage communication between all services, apps and devices on your behalf, resulting a development and maintenance process that’s far less time consuming." }
          ]
        },
        usecase: [
          { src: require("~/assets/engine/multi-language.svg"), title: "Multi-language apps", description: "Language differences between products and teams can cause setbacks when building and maintaining products. Luckily, services featuring any programming language or data format can be managed using the MESG SDK." },
          { src: require("~/assets/engine/fast-feature.svg"), title: "Fast feature integration", description: "Most apps today are complex and highly interconnected, making updates challenging and inefficient. The MESG SDK allows features to be added, removed or updated without affecting the other parts of the application." },
          { src: require("~/assets/engine/workflows.svg"), title: "Autonomous workflows", description: "Events on difficult-to-reach technologies can be combined into powerful workflows. React to Ethereum transactions. Deploy and manage sidechains. Automate bookkeeping with QuickBooks. The possibilities are endless." },
          { src: require("~/assets/engine/scalable-apps.svg"), title: "Easily-scalable apps", description: "Servers and local networks have limited bandwidth, plus maintaining your own servers can be costly. Our tools will soon be decentralized, so applications can function in an autonomous, trustless way, allowing for easy scalability." }
        ],
        action: "Discover the MESG SDK"
      },
      {
        id: "marketplace",
        title: "MESG Marketplace",
        img: require("~/assets/marketplace/marketplace.svg"),
        description:
          "A decentralized marketplace connecting buyers wanting to save time in development with sellers looking to earn tokens for the reuse of their application components.",
        features: {
          primary: [
            { src: require('~/assets/marketplace/marketplace-engine.svg'), title: "Marketplace and SDK", description: "The open-source tools in the MESG SDK ensure that all services from the Marketplace are automatically compatible with each other.<br/><br/>This means, no more installing libraries or learning data formats before adding new features. Plug any feature or component into any app.", href: "https://marketplace.mesg.com/", action: "Go to the Marketplace" },
            { src: require('~/assets/marketplace/decentralized.svg'), title: "Decentralized executions", description: "A major tool in the SDK, the Engine, will soon be decentralized, allowing all services and applications to interact in a variably decentralized way.<br/><br/>When executions are not dependent on a single server or machine, apps can become unstoppable, distributed and always available.", to: links.enterprise, action: "Our solutions" }
          ],
          secondary: [
            { src: require("~/assets/marketplace/reuse-work.svg"), title: "Reuse your work", description: "Connecting to devices, blockchains and APIs is time consuming. Reuse more of your applications so you can stop repeating yourself." },
            { src: require("~/assets/marketplace/earn-sleep.svg"), title: "Earn while you sleep", description: "All modular app components listed on the Marketplace can earn MESG Tokens each time they are used within any application." },
            { src: require("~/assets/marketplace/economy-development.svg"), title: "Economy of development", description: "Earn tokens by building or hosting apps. Or, save time building, updating, or expanding apps using services from the Marketplace." }
          ]
        },
        usecase: [
          { src: require("~/assets/marketplace/build-marketplace.svg"), title: "Build your own marketplace", description: "Add a decentralized marketplace to any existing solution. The SDK enables interoperability between all systems and features, so it’s a perfect solution to build and manage your own marketplace within your product." },
          { src: require("~/assets/marketplace/decentralized-apps.svg"), title: "Hybrid decentralized apps", description: "We know that some data and processes are best kept centralized, while others are best decentralized. This is why MESG gives builders complete control over centralization, even offering fully decentralized executions between decentralized networks." },
          { src: require("~/assets/marketplace/workflows.svg"), title: "Autonomous workflows", description: "Services from the Marketplace can be easily combined into powerful workflows and apps. React to Ethereum transactions being processed. Deploy and manage sidechains. Automate bookkeeping with QuickBooks. The possibilities are endless." },
          { src: require("~/assets/marketplace/open-marketplace.svg"), title: "Open marketplace", description: "The Marketplace is completely open, decentralized and self-regulating, so no single entity has control over participants or submissions. This gives all equal advantage to create the most useful and efficient application components. The more they are used, the more tokens are earned." }
        ],
        action: "Discover the MESG Marketplace"
      }
    ]
  },

  enterprise() {
    return {
      features: {
        primary: [
          { src: require('~/assets/enterprise/connect-systems.svg'), title: "Connect systems", description: "Build and share APIs and connections to blockchains to save time in development or boost revenues. Managed by the free, open-source tools of the MESG SDK." },
          { src: require("~/assets/enterprise/automate-tasks.svg"), title: "Automate tasks", description: "Create autonomous reactive applications and workflows, using any API, IoT device or blockchain, that can execute and function entirely within a decentralized cloud." },
          { src: require("~/assets/enterprise/process-data.svg"), title: "Process data", description: "By listening to digital events, data can be gathered and processed more efficiently than ever before. Manage more blockchains without a bigger headache." }
        ],
        secondary: [
          { src: require("~/assets/enterprise/engineering-support.svg"), title: "Engineering support", description: "Receive priority technical support from a team of engineers dedicated to your project, day or night." },
          { src: require("~/assets/enterprise/architecture-advisory.svg"), title: "Architecture advisory", description: "Our advisors are committed to creating optimum efficiency between all of your connected systems." },
          { src: require("~/assets/enterprise/custom-built.svg"), title: "Custom-built solutions", description: "Don’t want to built it yourself? Let us build apps for you, enhancing legacy software with blockchains, IoT devices and more." },
          { src: require("~/assets/enterprise/community-support.svg"), title: "Community support", description: "MESG has a strong community and economy built to support development. Share app components or get support on the forum." }
        ]
      },
      faq: [
        { title: "Are apps dependent on MESG to run?", description: "No, MESG’s software is free and open-source, so apps will always be accessible regardless of the MESG Foundation’s status. You retain ownership over the application components you build, plus the decentralized network allows apps to execute without any centralized dependencies." },
        { title: "How does MESG manage intellectual property?", description: "We take privacy seriously and set clear expectations with new clients. MESG keeps intellectual property secure through agreements signed with new clients, plus, services and apps can always be kept private, designed to function on your own private network and nowhere else." },
        { title: "Who owns the apps that MESG builds for me?", description: "When our team of dedicated engineers build apps and components for our enterprise clients, the full ownership of will remain in the client’s hands. We provide additional integration options as well, such as the ability to rent services from MESG." },
        { title: "MESG is free, so why purchase advisory services?", description: "Apps and components on MESG can be created for free and will always remain free, but great app architectures are hard to come by. Our architects and engineers help you save time throughout the life of the app by designing a strong, efficient architecture." }
      ],
      packages: [
        {
          title: "PREMIUM",
          text: "Custom Pricing",
          items: [
            {
              valid: true, description: "Access to the Marketplace"
            },
            {
              valid: true, description: "Access to the SDK"
            },
            {
              valid: true, description: "Community support"
            },
            {
              valid: true, description: "Direct support from the MESG team"
            },
            {
              valid: true, description: "Advisory services on your architecture"
            },
            {
              valid: true, description: "Priority support from a dedicated team of engineers"
            },
            {
              valid: true, description: "Creation of services"
            }
          ],
          to: "https://docs.google.com/forms/d/e/1FAIpQLSdUymFdlMjaqcjr2ruRvxPQi1CbDp7a9cS-_3wxNvmg3UaR9Q/viewform",
          action: "Contact Us"
        },
        {
          title: "BUSINESS",
          text: "Custom Pricing",
          featured: true,
          items: [
            {
              valid: true, description: "Access to the Marketplace"
            },
            {
              valid: true, description: "Access to the SDK"
            },
            {
              valid: true, description: "Community support"
            },
            {
              valid: true, description: "Direct support from the MESG team"
            },
            {
              valid: true, description: "Advisory services on your architecture"
            },
            {
              valid: false, description: "Priority support from a dedicated team of engineers"
            },
            {
              valid: false, description: "Creation of services"
            }
          ],
          to: "https://docs.google.com/forms/d/e/1FAIpQLSdUymFdlMjaqcjr2ruRvxPQi1CbDp7a9cS-_3wxNvmg3UaR9Q/viewform",
          action: "Contact Us"
        },
        {
          title: "ESSENTIAL",
          text: "Open Source - FREE",
          items: [
            {
              valid: true, description: "Access to the Marketplace"
            },
            {
              valid: true, description: "Access to the SDK"
            },
            {
              valid: true, description: "Community support"
            },
            {
              valid: false, description: "Direct support from the MESG team"
            },
            {
              valid: false, description: "Advisory services on your architecture"
            },
            {
              valid: false, description: "Priority support from a dedicated team of engineers"
            },
            {
              valid: false, description: "Creation of services"
            }
          ],
          to: "https://docs.mesg.com/guide/quick-start-guide.html",
          action: "Get started"
        }
      ]
    }
  },

  token() {
    return {
      features: {
        primary: [
          { src: require('~/assets/token/decentralize-executions.svg'), title: "Decentralize executions", description: "You can become a part of the decentralized network by executing transactions for other applications, all while being rewarded for your participation." },
          { src: require("~/assets/token/secure-network.svg"), title: "Secure the network", description: "All participants stake MESG Tokens to commit to their availability and good behavior. Then, participants are rewarded for validating each execution." },
          { src: require("~/assets/token/buy-sell.svg"), title: "Buy and sell services", description: "Access to app components, called services, are bought and sold using MESG Tokens. Then services can be used within any app, no complex coding required." }
        ],
        secondary: [
          { src: require("~/assets/token/algorithm.svg"), title: "Algorithmic release", description: "Daily allotments are calculated from a percentage of the previous day’s trading volume, tying tokens released to actual demand." },
          { src: require("~/assets/token/transparency.svg"), title: "Transparency", description: "Release metrics are being published daily to promote transparency between the MESG Foundation and the community." },
          { src: require("~/assets/token/initial-supply.svg"), title: "Initial supply", description: "0.1% of the total token supply was released on the first day of exchange listings to initiate the supply." },
          { src: require("~/assets/token/supply-distribution.svg"), title: "Supply distribution", description: "The total supply will be released slowly over time in daily allotments." }
        ]
      },
      faq: [
        { title: "How do you use the MESG Token?", description: "Today, the MESG Token can be used in the <a href=https://marketplace.mesg.com/ target=_blank>Marketplace</a> to buy and sell access to application components. Purchasing access saves developers time, while providing new ways to earn royalties from coding." },
        { title: "What’s the future of the MESG Token?", description: "Soon the MESG Token will used in the decentralized network to reward participants who execute, emit, or validate tasks for other users’ applications, enabling decentralized execution. Plus, it will secure the network through a mandatory staking system." },
        { title: "How does the ATD promote stability?", description: "The Algorithmic Token Distribution (ATD) limits daily Token releases to small percentage of the previous day’s total volume. This means large payouts are distributed gradually for all, plus sales are limited to promote a stable volume of MESG Tokens entering the market." },
        { title: "Where can I buy MESG Tokens?", description: "The MESG Token is available to purchase on <a href=https://www.digifinex.com/en-ww/trade/USDT/MESG target=_blank>DigiFinex</a>, <a href=https://www.bitforex.com/en/trade/spotTrading?commodityCode=MESG&currencyCode=USDT target=_blank>BitForex</a> and <a href=https://idex.market/eth/mesg target=_blank>IDEX</a>. Also, now MyEtherWallet supports MESG Tokens natively for ease of trading." }
      ]
    }
  },

  partners() {
    return {
      primary: [
        {
          src: require("~/assets/partners/yellow.png"),
          title: "Yellow Capital",
          description: "Yellow is building the future of Blockchain with seed investments, mentorship, advisory (STOs, token economics, legal, banking, marketing, fundraising and listing) and software solutions. Yellow also enriches the Blockchain community through physical hubs, live events, and original news and entertainment.",
          to: "https://yellow.com/",
          action: "yellow.com"
        }
      ],
      secondary: [
        {
          src: require("~/assets/partners/beachhead.png"),
          title: "BeachHead",
          description: "BeachHead is a decentralized platform based on both Ethereum and Ripple blockchains where players can participate in trading of assets with real world value within a virtual reality social platform that also includes an annex gaming environment.",
          to: "https://beachhead.com/",
          action: "beachhead.com"
        },
        {
          src: require("~/assets/partners/yuser.png"),
          title: "Yuser",
          description: "Yuser is a next-gen social networking app that rewards you for your creativity and fame. It empowers you to be who you want to be online. Unlock features and earn tokens by creating engaging content and growing a large following. Create, grow, and thrive all in one place.",
          to: "https://yuser.co/",
          action: "yuser.co"
        }
      ]
    }
  },

  team() {
    return {
      members: {
        founders: [
          {
            src: require("~/assets/team/Anthony.jpg"),
            title: "Anthony Estebe",
            description: "CEO, Co-founder",
            linkedin: "https://www.linkedin.com/in/anthony-estebe-aab18831/"
          },
          {
            src: require("~/assets/team/Nicolas.jpg"),
            title: "Nicolas Mahe",
            description: "CTO, Co-founder",
            linkedin: "https://www.linkedin.com/in/nicolas-mahe/"
          },
          {
            src: require("~/assets/team/Alexis.jpg"),
            title: "Alexis Sirkia",
            description: "Co-founder",
            linkedin: "https://www.linkedin.com/in/sirkia/"
          }
        ],
        other: [
          {
            src: require("~/assets/team/Will.jpg"),
            title: "Will Morgan",
            description: "Brand Manager",
            linkedin: "https://www.linkedin.com/in/will-morgan-02a18326/"
          },
          {
            src: require("~/assets/team/Emmanuel.jpg"),
            title: "Emmanuel Drouin",
            description: "UI / UX Designer",
            linkedin: "https://www.linkedin.com/in/emmanuel-drouin-2951937a/"
          },
          {
            src: require("~/assets/team/Hubert.jpg"),
            title: "Hubert Krauze",
            description: "Core Developer",
            linkedin: "https://www.linkedin.com/in/hubert-krauze-67a6389b/"
          },
          {
            src: require("~/assets/team/Ilker.jpg"),
            title: "İlker Göktuğ Öztürk",
            description: "Core Developer",
            linkedin: "https://www.linkedin.com/in/ilker-goktug-ozturk/"
          },
          {
            src: require("~/assets/team/Wayne.jpg"),
            title: "Wayne Skeen",
            description: "Advisor",
            linkedin: "https://www.linkedin.com/in/wayneskeen/"
          },
          {
            src: require("~/assets/team/Janie.jpg"),
            title: "Janie Lim",
            description: "Evangelist",
            linkedin: "https://www.linkedin.com/in/janie-lim-135968b5/"
          }
        ]
      },
    }
  },

  discover(_, { links }) {
    return {
      showcase: {
        title: "Showcase",
        description: "Not sure what to start building on MESG? Discover some inspiration here.",
        action: "Explore the showcase",
        to: links.showcase
      },
      foundation: {
        title: "MESG Foundation",
        description: "MESG is being developed for the MESG Foundation, a nonprofit organization.",
        action: "Visit MESG Foundation",
        to: links.foundation
      },
      marketplace: {
        title: "MESG Marketplace",
        description: "Speed up application development and earn tokens from sharing your code.",
        action: "Access MESG Marketplace",
        to: links.marketplace
      },
      engine: {
        title: "MESG SDK",
        description: "Create feature-rich applications without needing to manage dependencies.",
        action: "Access MESG SDK",
        to: links.engine
      },
      token: {
        title: "MESG Token",
        description: "Powering the new economy of efficient, streamlined application development.",
        action: "Access MESG Token",
        to: links.token
      },
      enterprise: {
        title: "Enterprise solutions",
        description: "Build applications confidently with advisory, technical and design support.",
        action: "Access our solutions",
        to: links.enterprise
      }
    }
  },

  documents() {
    return [
      { title: "Whitepaper", img: require('~/assets/documents/Decentralized-Network-of-Services.jpg'), link: '/documents/decentralized-network-of-services.pdf' },
      { title: "Technical Implementation", img: require('~/assets/documents/MESG-Application-of-the-Decentralized-Network-of-Services.jpg'), link: '/documents/MESG-application-of-the-decentralized-network-of-services.pdf' },
      { title: "Two Pager", img: require('~/assets/documents/MESG-Two-Pager.jpg'), link: '/documents/MESG-2-pager.pdf' },
      { title: "Business Plan", img: require('~/assets/documents/MESG-Business-Plan-Summary.jpg'), link: '/documents/MESG-business-plan-summary.pdf' }
    ]
  },

  roadmap() {
    return [{
      year: 2019,
      quarters: [{
        quarter: "Q1",
        goals: [{
          title: "MESG Token ERC20",
          link: "https://etherscan.io/address/0x420167d87d35c3a249b32ef6225872fbd9ab85d2",
          list: [
            "MESG Token release with a total supply of 250MM",
            "Start the Algorithmic Token Distribution",
            "List MESG Token on the first exchange"
          ]
        }]
      }, {
        quarter: "Q2",
        goals: [{
          title: "MESG Marketplace on Ethereum",
          link: "https://marketplace.mesg.com",
          list: [
            "Sell MESG Services on the MESG Marketplace",
            "Buy MESG Services to integrate into applications",
            "Marketplace to buy and sell access to MESG Services"
          ]
        }, {
          title: "Algorithmic Token Distribution",
          link: "https://atd.mesg.com",
          list: [
            "List MESG Token on a second exchange",
            "Dashboard with information to check the distribution"
          ]
        }]
      }, {
        quarter: "Q3",
        goals: [{
          title: "Workflows",
          list: [
            "Create applications based on workflows",
            "Connect MESG Services together to build rich applications",
            "Drastically reduce applications' codebase"
          ]
        }, {
          title: "Decentralized executions",
          list: [
            "MESG Marketplace on the native network",
            "Decentralized execution of services"
          ]
        }, {
          title: "Testnet",
          list: [
            "Native MESG Token",
            "Proof of Stake consensus"
          ]
        }]
      }, {
        quarter: "Q4",
        goals: [{
          title: "MESG user interface",
          list: [
            "Visualize your executions",
            "Manage your MESG Wallet",
            "Synchronize the Decentralized Network of Services"
          ]
        }, {
          title: "Exchange listing",
          list: [
            "Tier-2 exchange"
          ]
        }]
      }]
    }, {
      year: 2020,
      quarters: [{
        quarter: "Q1",
        goals: [{
          title: "Mainnet",
          list: [
            "Audited source code",
            "MESG Economy stabilized",
          ]
        }]
      }, {
        quarter: "XX",
        goals: [{
          title: "Iterate over and over",
          list: [
            "Feature updates based on the community feedback",
            "More and more partners",
            "New exchanges",
            "Improve performance",
            "..."
          ]
        }]
      }]
    }]
  },

  questions() {
    return [{
      id: "general",
      category: "General",
      contents: [{
        title: "What is MESG?",
        description: "MESG is a decentralized building platform for apps and workflows where developers can build from a <a href='https://marketplace.mesg.com/' target='_blank'>Marketplace</a> of pre-built app components, known as services, to give your app powerful features without the busy work.<br/><br/>Much of the code that is written in today’s applications is identical and must be repeated unnecessarily, but with MESG, code can be shared or reused in an open economy.<br/><br/>Sharing code allows developers to quickly combine, automate or streamline processes, or build businesses that were previously difficult or costly to create.<br/><br/>Developers simply combine feature-packed app components together, and allow tools in the <a href='/mesg-sdk' target='_blank'>MESG SDK</a> to manage the interaction between all components.<br/><br/>Once the tools in the SDK are decentralized, applications will be able to run and execute in a decentralized way, unifying application development and hosting into a single tool."
      }],
    },
    {
      id: "getting-started",
      category: "Getting Started",
      contents: [{
        title: "Can “any technology” actually be used?",
        description: "Any data can be accessed via the internet can be used within MESG applications.<br/><br/>This includes blockchains, decentralized networks, databases, web services, smartphones, wearables, custom corporate software, biometric devices, vehicles, video games, medical devices, or any IoT device.<br/><br/>It’s the events on these technologies, however, which are most useful to combine and automate. These events could look like a transaction completed on a blockchain, a button clicked on a website, a location reached on a GPS, the opening of a garage door, a full charge on an electric car, or even weather conditions that reach a certain threshold.<br/><br/>All of the above technologies and events, plus many more, can be connected, decentralized, and automated using MESG, regardless of the programming language or data format."
      },
      {
        title: "What is “Event Driven Architecture”?",
        description: "Event Driven Architecture (EDA) is a programming style based on modular applications with components that are set to react to real-world events. We recommend that apps built on MESG use this programming style.<br/><br/>Real-world events could be anything happening on a technology, but might look like a transaction posted on a blockchain, a button clicked on a website, a location reached on a GPS, the opening of a garage door, a full charge on an electric car, or even weather conditions that reach a certain threshold.<br/><br/>The EDA style consists of many fully-independent connections to technologies, unified by a communications manager called a “message broker”. These connections to technologies are configured to react to events and execute tasks on those technologies.<br/><br/>Rather than applications being responsible for the cooperation of other technologies and features, each technology stands on its own without a direct connection to anything. Instead, each element (or feature) is set up to listen for a command by any other element. When that command is heard, the microservice reacts by executing its respective task.<br/><br/>This setup allows all elements of applications to function in an independent way, without direct connections to any other feature, so adding, removing or updating features doesn’t affect the other parts of the application.<br/><br/>The result that developers are left with is an application that is easy to update, runs autonomously and works automatically.<br/><br/>While MESG itself uses EDA, any application, regardless of the programming style, is compatible with MESG."
      },
      {
        title: "What problems does MESG solve?",
        description: "MESG solves major issues in the tech and business industries.<br/><br/>These problems are as follows:<br/><br/><ul><li class='list'>There is no common channel for blockchains to communicate with business technologies.</li><br/><li class='list'>Business IT infrastructures require inefficient and costly updates to maintain old features, or accommodate new features.</li><br/><li class='list'>As new technologies and devices enter the market, interoperability between these devices increasingly becomes an issue.</li><br/><li class='list'>Prototyping products or features, particularly those based in blockchain, requires immense overhead and a large resource commitment, simply to test out a single technology.</li></ul><br/>We see opportunity in these issues. To solve them, we are tackling three large challenges within the business and tech industries simultaneously:<br/><br/><ul><li class='list'>Interoperability<br/><br/><p>Effortless communication between any combination of blockchains, web and IoT.</p></li><br/><li class='list'>Scalability<br/><br/><p>A single infrastructure from startup to multi-national corporation.</p></li><br/><li class='list'>Efficiency<br/><br/><p>Streamline business functions with truly set-and-forget automation.</p></li></ul>"
      }]
    },
    {
      id: "transactions",
      category: "Transactions",
      contents: [{
        title: "How much does MESG cost?",
        description: "Anyone can use MESG for free to build applications on their local computer. However, not all of MESG's functionalities will always be free.<br/><br/>If developers want to use MESG’s decentralized network to run and execute their applications, they must first pay <a href='/token' target='_blank'>MESG Tokens</a> to network participants who run and secure their applications.<br/><br/>Developers and participants can also earn tokens by using MESG depending on their desired level of involvement. Developers who build services or help execute, validate events and tasks in applications will earn MESG Tokens for their participation."
      },
      {
        title: "How can I earn tokens with MESG?",
        description: "A self-regulating economy is a major part of the MESG Network. It will allow participants to earn MESG Tokens by building connections, or by running their computer to participate in the Network.<br/><br/>Firstly, each time a new connection (MESG Service) is built, it can be shared and reused. The creators of these connections are free to choose the price in <a href='/token' target='_blank'>MESG Tokens</a> that MESG participants will pay to use the connection. As part of this, creators also decide how much each network participant (emitters, validators and executors) is paid for their help.<br/><br/>Secondly, participants who commit to running their computers to support the processing of data in the Network are paid for their participation. The number of tokens each of these participants earns is determined by the Service’s creator, so participants can choose which processes will be most lucrative for them."
      }]
    },
    {
      id: "compatibility",
      category: "Compatibility",
      contents: [{
        title: "Is MESG compatible with my business?",
        description: "Short answer: <strong>yes</strong><br/><br/>MESG’s nearly infinite compatibility means that it works with any software that’s accessible through the internet, including legacy software suites or even custom-built solutions. Only a single component must be built to connect your software to MESG, then it can be reused for any new feature or update made henceforth. This can drastically reduce development time after the initial connection is made."
      }]
    },
    {
      id: "community",
      category: "Community",
      contents: [{
        title: "Is MESG open source?",
        description: "Yes. MESG’s software is not patented, but rather is protected by an open-source software license. This means there are no secrets: it’s free to view the source code and anyone can help improve features or <a href='https://docs.mesg.com/' target='_blank'>the documentation</a> or fix bugs in our software.<br/><br/>A collaborative element is inherent to open source software, meaning that any developer can help build any part of MESG itself. We encourage everyone to get involved and help build MESG into the foremost solution connecting blockchains to traditional technologies."
      },
      {
        title: "Who can benefit from MESG?",
        description: "We’ve identified a few target markets who are immediately in need of our solution:<br/><br/><ul><li class='list'>Blockchain DApp builders<br/><br/><p>MESG connects blockchains to any external technology, giving DApp builders the ability to add features like notifications or fiat payment processing, or connect to multiple side chains, plasma chains or other networks. Better UX features encourage greater user adoption and revenue.</p></li><br/><li class='list'>Legacy companies interested in moving to a decentralized system<br/><br/><p>MESG can connect to any legacy software stack. By connecting to MESG, companies can easily adopt a variable level of decentralization into current practices, allowing for customized security or unrestricted growth.</p></li><br/><li class='list'>Entrepreneurs looking to cut costs by optimizing their infrastructures<br/><br/><p>Connecting previously-incompatible technologies means entrepreneurs can streamline business processes that weren’t previously able to be streamlined through autonomous, event-driven applications.</p></li><br/><li class='list'>Innovators wanting to push the boundaries of what’s possible with technology<br/><br/><p>With many reusable and interchangeable connections to any technologies available to build	with, innovators can shift their focus from implementation to creativity.</p></li></ul>"
      }]
    },
    {
      id: "business-and-strategy",
      category: "Business and Strategy",
      contents: [{
        title: "How can decentralization help my business?",
        description: "Today, many large internet corporations store and own your personal data and can share it with other large corporations or even governmental agencies. Their sole control of data creates a single point of failure if something were to go wrong.<br/><br/>For example, in recent years, there have been highly-publicized cases of data breaches where login information and identities have been leaked, in addition to corporations being reprimanded for their misuse of customer data.<br/><br/>Decentralized networks, on the other hand, have no central, regulated hub in which all data runs through. This means that no single entity or corporation can hold, control and profit off of your data, and it also means that there is no single point of failure if something were to go wrong.<br/><br/>If one server, or even a group of servers, fails, data will still be available because it’s shared throughout the network. And because all data is distributed rather than centralized, no entity (including MESG itself) can have ownership over your data.<br/><br/>In addition to improved trust and reliability for users and customers, the ability to avoid purchasing, managing, and maintaining servers entirely can cut costs drastically for many types of businesses."
      },
      {
        title: "How is MESG more efficient than our competitors?",
        description: "MESG is all about reusing application components (MESG Services). This essentially means: no more busy work in development.<br/><br/>When an app or business makes an initial connection to the MESG Infrastructure (at industry-average development times), they can reuse the connection and will not need to write that connection again until major changes are made to their software. This translates to a huge reduction of development time for all development work after any app or company’s first connection.<br/><br/>If developers want to update their apps with a desired feature that has already been implemented by another developer (for example, a previously- built connection to Spotify’s track playback), you can simply plug in this shared connection. When using entirely shared or repurposed connections to features, development time can become a small fraction of what it was before.<br/><br/>The MESG Network adds additional efficiency. Developers and companies can utilize the decentralized network in lieu of running and maintaining their own servers. This provides easier scalability, with more potential processing power available at any given time."
      }]
    },
    {
      id: "development",
      category: "Development",
      contents: [{
        title: "How much time can I save by using MESG?",
        description: "Sharing and reusing code translates into significant time savings for developers.<br/><br/>We’ve determined that on average, developers who are adding new features or updating existing features spend around ⅓ of their time building a bridge (a service) to the desired technology, ⅓ of the time connecting to their application, and the remaining ⅓ getting the two bridges to connect to and cooperate with each other.<br/><br/>After a developer uses MESG once, they will have built a bridge (Service) to their app or software, which will be reusable. This means that this work can be saved each time henceforth. Additionally, since the tools in the <a href='/mesg-sdk' target='_blank'>MESG SDK</a> handle all communication between connected features, the final portion of time spent getting the two bridges to connect and cooperate with each other is done automatically.<br/><br/>These significant time savings saved can increase even more than if the desired technology (or Service) has already been connected to MESG. In these cases, when all Services in an Application are being reused, development time can decrease to a meer fraction of what it was before."
      },
      {
        title: "Do I need to be a developer to use MESG?",
        description: "With MESG’s currently-available functionalities, yes. Development skills are required to make initial connections to technologies, and to combine those connections into applications.<br/><br/>However, in a future update, we will debut a feature called Workflow File functionality. This feature will allow anyone to write a simple text file (likely no more than 20 lines of text), listing the desired Services, events and tasks to be executed.<br/><br/>As long as the desired Services have been previously built and are available on the MESG Network, the <a href='/mesg-sdk' target='_blank'>MESG SDK</a> software will read the Workflow File and assemble the entire application on your behalf. This will allow anyone to build the back end of applications, with no coding skills required.<br/><br/>While MESG itself will remain focused on the protocol and developer tool level, any developer is welcome to build a user interface to aid in the easy creation of applications on MESG, similar to what is seen in products like Zapier."
      }]
    }]
  },

  usecases(_, { links }) {
    return [
      {
        id: "send-messages-from-a-satellite",
        to: `${links.showcase}/send-messages-from-a-satellite`,
        logos: [
          require("~/assets/showcase/opennode.svg"),
          require("~/assets/showcase/blockstream.svg")
        ],
        headerimage: require("~/assets/showcase/satellite.svg"),
        category: "OpenNode - Blockstream",
        title: "Send messages from a satellite",
        description: "A showcase of MESG’s sheer versatility: send messages from outer space using the MESG Token, the Lightning Network, a satellite, and a web-based UI.",
        technology: "OpenNode - MESG Token - Blockstream",
        paragraphe: "Connect multiple cryptocurrencies with other technologies to securely send a message from space.",
        image: require("~/assets/showcase/opennode-blockstream.svg"),
        challenges: "Creating a single app which executes a Bitcoin-based transaction via the Lightning Network in exchange for a separate ERC20 token payment.",
        goals: "To build a business with a MESG App which accepts MESG Tokens in exchange for actions completed, and to allow multiple cryptocurrencies to interact within a single application.",
        benefits: [
          "Integrate multiple cryptocurrencies within a single application.",
          "Automatically react to blockchain transactions in real time."
        ],
        opportunities: [
          "Manage the flow of live data between an unlimited number of connected blockchains and IoT devices.",
          "Integrate front-end apps and user interfaces to provide users with excellent user experiences.",
          "Execute blockchain transactions on behalf of your users."
        ],
        video: "https://www.youtube.com/embed/PNoWKxU6WSk",
        information: "Want a deeper look at how MESG can be used to send messages from space? Head on over to our blog for the full story or take a look at our other resources.",
        resources: [
          { title: "Read the full article", to: "https://medium.com/mesg/use-case-send-messages-from-space-6a02a353df7d" },
          { title: "Github", to: "https://github.com/RyanMilb/spaceforce-mesg-app" },
        ]
      },
      {
        id: "enhance-zapier-workflows",
        to: `${links.showcase}/enhance-zapier-workflows`,
        logos: [
          require("~/assets/showcase/zapier.svg"),
          require("~/assets/showcase/mesg.svg")
        ],
        headerimage: require("~/assets/showcase/zapier-workflow.svg"),
        category: "Zapier - MESG",
        title: "Enhance Zapier workflows",
        description: "Centralized workflow builders are easy to use, but have a limited set of feature integrations. Expand Zapier’s workflows to include blockchains, custom software or IoT device integration.",
        technology: "Zapier - MESG - Slack",
        paragraphe: "Integrate Zapier’s library of 1000+ useful connections with apps developed on MESG, or expand Zapier workflows to include hard-to-reach technologies like blockchains.",
        image: require("~/assets/showcase/zapier-mesg.svg"),
        challenges: "Centralized workflow builders like Zapier are very useful for completing specific tasks, but can be worthless when it comes to integrating complex applications or technologies.",
        goals: "Build efficient MESG apps that utilize the thousands of connectors in Zapier’s ecosystem. Alternatively, enhance Zapier workflows with the difficult-to-reach integrations found on MESG.",
        benefits: [
          "Instantly access 1000+ additional integrations for MESG applications.",
          "Enhance Zapier workflows by using features from complex technologies like blockchains."
        ],
        opportunities: [
          "Integrate blockchain or cryptocurrency management features into Zapier.",
          "Use pre-built integrations from Zapier instead of needing to build new ones for your MESG applications.",
          "Easy transition for Zapier users to start earning tokens for building MESG applications."
        ],
        video: "https://www.youtube.com/embed/RVMg9VBhhUI",
        information: "Want a more in-depth look at how MESG and Zapier can be used together? Head on over to our blog for the full story or take a look at our other resources.",
        resources: [
          { title: "Read the full article", to: "https://medium.com/mesg/use-case-connecting-zapier-and-mesg-a9a661526ff0" },
          { title: "Github", to: "https://github.com/JBarna/MESG-Z" },
        ]
      },
      {
        id: "monitor-erc20-transactions",
        to: `${links.showcase}/monitor-erc20-transactions`,
        logos: [
          require("~/assets/showcase/ethereum.svg"),
          require("~/assets/showcase/grafana.svg")
        ],
        headerimage: require("~/assets/showcase/monitor.svg"),
        category: "ERC20 - Grafana",
        title: "Monitor ERC20 transactions",
        description: "There’s immense power in data. New analytics tools allow for the creation of massive efficiencies, avenues of income, or new businesses altogether.",
        technology: "ERC20 - InfluxDB - Grafana",
        paragraphe: "Read, analyze and react to blockchain transactions happening in real time to optimize ICOs, predict transfers or manage digital collectables.",
        image: require("~/assets/showcase/erc20-grafana.svg"),
        challenges: "ICOs, tokenized development and cryptocurrency-integrated businesses are on the rise. This fast-evolving ecosystem needs tools to provide metrics about what is happening on the blockchain.",
        goals: "Build applications that can listen and react to any or all token transfers, collect and manage token transfer information, or visualize transaction data.",
        benefits: [
          "All useful metrics related to your token become accessible.",
          "Extract patterns by looking at the data output in graphs. For example, high transfer volume may indicate a bot being used."
        ],
        opportunities: [
          "Companies launching ICOs can have easy access to monitoring actual token volume.",
          "Connecting extracted data to AI systems to be able to predict future transfers and token prices.",
          "Easily expand to ERC721 to monitor the performance of digital collectables."
        ],
        picture: "https://forum.mesg.com/uploads/default/original/1X/dd3e09715411d90152680d614d77abd9bce19a37.png",
        companies: [
          require("~/assets/showcase/coinbase.svg"),
          require("~/assets/showcase/kraken.svg"),
          require("~/assets/showcase/bitstamp.svg"),
          require("~/assets/showcase/binance.svg")
        ],
        information: "Want a more in-depth look at how MESG can be used to monitor blockchain transactions? Head on over to our blog for the full story or take a look at our other resources.",
        resources: [
          { title: "Read the full article", to: "https://medium.com/mesg/how-to-monitor-important-erc20-transactions-ead35309ba9c" },
          { title: "Github", to: "https://github.com/antho1404/application-erc20-analytics" },
          { title: "Forum post", to: "https://forum.mesg.com/t/analytics-tool-for-erc20-transfers/209" }
        ]
      },
      {
        id: "replace-subscriptions-with-on-demand-payments",
        to: `${links.showcase}/replace-subscriptions-with-on-demand-payments`,
        logos: [
          require("~/assets/showcase/ethereum.svg"),
          require("~/assets/showcase/sendgrid.svg")
        ],
        headerimage: require("~/assets/showcase/payments.svg"),
        category: "Ethereum - SendGrid",
        title: "Replace subscriptions with on-demand payments",
        description: "Innovations allowing for new monetization avenues could be the start the transition away from one-size-fits-all subscription plans.",
        technology: "Ethereum - MESG - SendGrid",
        paragraphe: "Lower the barrier to entry for customers by charging cryptocurrency micropayments in exchange for the exact features or resources used.",
        image: require("~/assets/showcase/sendgrid-erc20.svg"),
        challenges: "Today, businesses like SaaS products use complex recurrent billing systems to accept payments for the features they deliver. Instead, cryptocurrencies could be used to let users pay for only the features they want to expose.",
        goals: "Build apps that accept payments with blockchain technology, trigger a certain task when a payment has been made, or submit a proof of execution to the user with actual execution results.",
        benefits: [
          "New models of monetization can open up the competition, allowing users to try and adopt more solutions.",
          "Businesses can focus on their key value propositions rather than worrying about monetization management.",
          "Reducing the complexity of products while increasing potential reusability of them."
        ],
        opportunities: [
          "Create new innovative business models.",
          "HR reductions (no need to manage a payment system development team).",
          "Reduce friction for users (pay as you go, rather than needing to purchase big packages first)."
        ],
        picture: "https://forum.mesg.com/uploads/default/original/1X/b1c56391ac876b910262718c070822f6aeefd25b.jpeg",
        companies: [
          require("~/assets/showcase/sendgrid-logo.svg"),
          require("~/assets/showcase/heroku.svg"),
          require("~/assets/showcase/firebase.svg"),
          require("~/assets/showcase/twilio.svg")
        ],
        information: "Want a more in-depth look at how MESG can help redefine businesses with on-demand payments? Head on over to our blog for the full story or take a look at our other resources.",
        resources: [
          { title: "Read the full article", to: "https://medium.com/mesg/the-death-of-the-subscription-plan-2ffbcbf521b4" },
          { title: "Github", to: "https://github.com/antho1404/pegasys-hackathon" },
          { title: "Forum post", to: "https://forum.mesg.com/t/monetizing-api-through-blockchain/223" },
          { title: "Hackathon post", to: "https://devpost.com/software/pegasys-hackathon" }
        ]
      },
      {
        id: "directly-buy-crypto-with-fiat",
        to: `${links.showcase}/directly-buy-crypto-with-fiat`,
        logos: [
          require("~/assets/showcase/stripe.svg"),
          require("~/assets/showcase/ethereum.svg")
        ],
        headerimage: require("~/assets/showcase/crypto.svg"),
        category: "Stripe - ERC20",
        title: "Directly buy crypto with fiat",
        description: "Connect a payment processor to any blockchain to finally accept fiat for your tokens, or to improve your user experience.",
        technology: "Stripe - ERC20 - SendGrid",
        paragraphe: "Buy crypto without the complicated user experience. Now your users can forget juggling multiple third-party apps like Metamask just to execute a single function in a DApp.",
        image: require("~/assets/showcase/stripe-erc20.svg"),
        challenges: "Buying crypto, either for investment or to use a product, is often a complicated process with lots of friction for users, resulting in massive user adoption hurdles.",
        goals: "Create an application that can accept payments from fiat gateways like banks, or payment providers like Stripe to deliver tokens directly to buyers.",
        benefits: [
          "Any project, new or old, can now use the benefits of blockchains to tokenize anything without the steep barrier to entry that blockchains currently have.",
          "Create new ways of offering and distributing tokens.",
          "Those in the gaming industry can create in-game currencies that are actually ERC20 Tokens. Game makers can also generate and sell unique digital collectibles based on ERC721 smart contracts.",
          "Retail shops can manage inventory on the blockchain while continuing to sell collectables or currencies with simple credit card payment systems."
        ],
        opportunities: [
          "Extend these functionalities to other tokens, such as ERC721.",
          "Simultaneously support many different native blockchain-based tokens."
        ],
        video: "https://drive.google.com/file/d/1WfZZ9tcNJAEdKms9LKynR1rlle4rS_Ix/preview",
        companies: [
          require("~/assets/showcase/coinbase.svg"),
          require("~/assets/showcase/kraken.svg"),
          require("~/assets/showcase/bitstamp.svg"),
          require("~/assets/showcase/binance.svg")
        ],
        information: "Want a more in-depth look at how MESG can help connect tokens to payment processors? Head on over to our blog for the full story or take a look at our other resources.",
        resources: [
          { title: "Read the full article", to: "https://medium.com/mesg/an-app-to-buy-crypto-with-fiat-95c658ad74b7" },
          { title: "Github", to: "https://github.com/mesg-foundation/application-stripe-to-erc20" },
          { title: "Demo live", to: "http://stripe-erc20.demo.mesg.com:8080/" }
        ]
      }
    ]
  },

  exchanges() {
    return [
      { id: "Digifinex", src: require("~/assets/exchanges/digifinex.svg"), to: "https://www.digifinex.com/en-ww/trade/USDT/MESG" },
      { id: "BitForex", src: require("~/assets/exchanges/bitforex.svg"), to: "https://www.bitforex.com/en/trade/spotTrading?commodityCode=MESG&currencyCode=USDT" },
      { id: "Idex", src: require("~/assets/exchanges/idex.svg"), to: "https://idex.market/eth/mesg" }
    ]
  },

  articles() {
    return [
      { id: "yahoo", title: "New Token Release Methods Signal the Death of the ICO", img: require("~/assets/press/yahoo.svg"), to: "https://finance.yahoo.com/news/token-release-methods-signal-death-030000717.html" },
      { id: "forbes", title: "Blockchain Or Bust: Businesses Need To Seek A Middle Ground", img: require("~/assets/press/forbes.svg"), to: "https://www.forbes.com/sites/darrynpollock/2019/01/18/blockchain-or-bust-businesses-need-to-seek-a-middle-ground/#291e609c3984" },
      { id: "chipin", title: "Three Ways to Reduce the Cost of Blockchain Implementation in Your Business", img: require("~/assets/press/chipin.png"), to: "https://www.chipin.com/reduce-cost-blockchain-implementation-business/" }
    ]
  },

  externalLinks() {
    return {
      documentation: "https://docs.mesg.com/",
      marketplace: "https://marketplace.mesg.com/",
      atd: "https://atd.mesg.com/",
      github: "https://github.com/mesg-foundation/",
      blog: "https://medium.com/mesg",
      forum: "https://forum.mesg.com/",
      discord: "https://discordapp.com/invite/5tVTHJC",
      twitter: "https://twitter.com/mesgfoundation",
      linkedin: "https://www.linkedin.com/company/mesg",
      facebook: "https://www.facebook.com/mesgfoundation",
      getStarted: "https://docs.mesg.com/guide/quick-start-guide.html",
      contact: "https://docs.google.com/forms/d/e/1FAIpQLSdUymFdlMjaqcjr2ruRvxPQi1CbDp7a9cS-_3wxNvmg3UaR9Q/viewform",
      video: "https://www.youtube.com/embed/VjPG51iE_fk"
    }
  },

  links() {
    return {
      home: "/",
      enterprise: "/enterprise",
      engine: "/mesg-sdk",
      marketplace: "/mesg-marketplace",
      token: "/token",
      foundation: "/foundation",
      showcase: "/showcase",
      partners: "/partners",
      faq: "/faq",
      roadmap: "/roadmap",
      usecase: "/usecase"
    }
  }
}
