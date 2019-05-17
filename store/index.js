export const getters = {
  products(_, { links }) {
    return [
      {
        id: "engine",
        title: "MESG Engine",
        img: require("~/assets/engine/engine.svg"),
        description:
          "The MESG Engine powers connectivity between Modules and other devices and applications. Control the flow of data and level of security between your whole stack of connected technologies.",
        features: {
          primary: [
            {
              src: require('~/assets/engine/tech.svg'), title: "Integrate complicated tech easily", description: "Any API or microservice can be connected to any app or workflow. Even connect apps to hard-to-reach technologies like blockchains, IoT devices, or custom software.<br/><br/>The Engine manages and forwards events between all components so each component can stand on its own, making it simple to add, remove or update any component.", to: "https://docs.mesg.com/guide/quick-start-guide.html", action: "Quick start"
            },
            { src: require("~/assets/engine/development.svg"), title: "No wasted development hours", description: "A fundamental principle at MESG is DRY: Don’t Repeat Yourself. The Engine allows you to reuse any app component; and not just from your apps, but from the community’s apps too.<br/><br/>After components are built, either keep them private, or share them to earn in the Marketplace.", to: "https://marketplace.mesg.com/", action: "Go to the Marketplace" }
          ],
          secondary: [
            { src: require("~/assets/engine/event-driven.svg"), title: "Event-driven architecture", description: "Building apps that react to real-world events is the efficient way to manage hard-to-reach technologies like blockchains or IoT devices. Your apps remain lightweight, reactive and easy to maintain." },
            { src: require("~/assets/engine/divergent-tech.svg"), title: "Connect divergent tech", description: "MESG services can connect to nearly anything, including APIs, decentralized networks or standalone applications. Then the MESG Engine manages interaction between all services and applications." },
            { src: require("~/assets/engine/development-hours.svg"), title: "Optimize development hours", description: "The MESG Engine makes development easy by managing communication between all Modules, applications and devices on your behalf, resulting a development and maintenance process that’s far less time consuming." }
          ]
        },
        usecase: [
          { src: require("~/assets/engine/multi-language.svg"), title: "Multi-language apps", description: "Language differences between products, features and teams can cause big setbacks when building and maintaining products. Luckily, services featuring any programming language or data format can be managed by the MESG Engine." },
          { src: require("~/assets/engine/fast-feature.svg"), title: "Fast feature integration", description: "Most apps today are complex and highly interconnected, making updates challenging and inefficient. The MESG Engine allows features to be added, removed or updated without affecting the other parts of the application." },
          { src: require("~/assets/engine/workflows.svg"), title: "Autonomous workflows", description: "Events on difficult-to-reach technologies can be easily combined into powerful workflows using the MESG Engine. React to Ethereum transactions being processed. Deploy and manage sidechains. Automate bookkeeping with QuickBooks. The possibilities are endless." },
          { src: require("~/assets/engine/scalable-apps.svg"), title: "Easily-scalable apps", description: "All servers and local networks have limited bandwidth, and maintaining your own servers can be costly. MESG will soon be decentralized, so applications can be distributed in an autonomous, trustless way, giving apps scalability." }
        ],
        action: "Discover the MESG Engine"
      },
      {
        id: "marketplace",
        title: "MESG Marketplace",
        img: require("~/assets/marketplace/marketplace.svg"),
        description:
          "A decentralized marketplace to connect buyers looking to save time in development with sellers earning tokens for the reuse of their code.",
        features: {
          primary: [
            { src: require('~/assets/marketplace/marketplace-engine.svg'), title: "Marketplace and Engine", description: "Our Marketplace is built to be complementary to the free, open-source MESG Engine. All services in the Marketplace come automatically compatible with the Engine.<br/><br/>No more installing libraries or learning data formats before adding new features.Plug any feature or component into any app.", to: "https://marketplace.mesg.com/", action: "Go to the Marketplace" },
            { src: require('~/assets/marketplace/decentralized.svg'), title: "Decentralized executions", description: "The Marketplace will soon be decentralized, with all services and applications interacting in a variably decentralized way.<br/><br/>When executions are not dependent on a single server or machine, apps can become unstoppable, distributed, and always available.", to: links.enterprise, action: "Our solutions" }
          ],
          secondary: [
            { src: require("~/assets/marketplace/reuse-work.svg"), title: "Reuse your work", description: "Connecting to devices, blockchains and APIs is time consuming. Reuse more of your applications so you can stop repeating yourself." },
            { src: require("~/assets/marketplace/earn-sleep.svg"), title: "Earn while you sleep", description: "All modular app components listed on the Marketplace can earn MESG Tokens each time they are used within any application." },
            { src: require("~/assets/marketplace/economy-development.svg"), title: "Economy of development", description: "Earn tokens by building or hosting apps. Or, save time building, updating, or expanding apps using services from the Marketplace." }
          ]
        },
        usecase: [
          { src: require("~/assets/marketplace/build-marketplace.svg"), title: "Build your own marketplace", description: "Add a decentralized marketplace to any existing solution. Because the Engine allows interoperability between any system and feature, it’s a perfect solution to build and manage your own marketplace within your product." },
          { src: require("~/assets/marketplace/decentralized-apps.svg"), title: "Hybrid decentralized apps", description: "We know that some data and processes are best kept centralized, but others should be decentralized. This is why MESG gives builders complete control over centralization, even offering fully decentralized executions between decentralized networks." },
          { src: require("~/assets/marketplace/workflows.svg"), title: "Autonomous workflows", description: "Services from the Marketplace be easily combined into powerful workflows and apps. React to Ethereum transactions being processed. Deploy and manage sidechains. Automate bookkeeping with QuickBooks. The possibilities are endless." },
          { src: require("~/assets/marketplace/open-marketplace.svg"), title: "Open marketplace", description: "The Marketplace is completely open, decentralized and self-regulating, so no single entity has control over participants or submissions. This gives all equal advantage to create the most useful and efficient application components. The more they are used, the more they earn." }
        ],
        action: "Discover the MESG Marketplace"
      }
    ]
  },

  enterprise() {
    return {
      features: {
        primary: [
          { src: require('~/assets/enterprise/connect-systems.svg'), title: "Connect systems", description: "Build and share APIs and connections to blockchains to save time in development, or boost revenues. Managed by the free, open source MESG Engine." },
          { src: require("~/assets/enterprise/automate-tasks.svg"), title: "Automate tasks", description: "Create autonomous reactive applications and workflows using any API, IoT device or blockchain, that can execute and function entirely from a decentralized cloud." },
          { src: require("~/assets/enterprise/process-data.svg"), title: "Process data", description: "By listening for digital events, data can be gathered and processed more efficiently than ever before. Use more blockchains and databases without the headache." }
        ],
        secondary: [
          { src: require("~/assets/enterprise/engineering-support.svg"), title: "Engineering support", description: "Receive priority technical support from a team of engineers dedicated to your project, day or night." },
          { src: require("~/assets/enterprise/architecture-advisory.svg"), title: "Architecture advisory", description: "Our advisors are committed to creating optimum efficiency between all of your connected systems." },
          { src: require("~/assets/enterprise/custom-built.svg"), title: "Custom-built solutions", description: "Don’t want to built it yourself? Let us build apps for you, enhancing legacy software with blockchains, IoT devices and more." },
          { src: require("~/assets/enterprise/community-support.svg"), title: "Community support", description: "MESG has a strong community and economy built to support development. Share app components, or get support on the forum." }
        ]
      },
      faq: [
        { title: "Are apps dependent on MESG to run?", description: "No, MESG’s software is free and open-source, so apps will always be accessible regardless of MESG’s status. You retain ownership over the application components you build, plus the decentralization network allows apps to execute without any centralized dependencies." },
        { title: "How does MESG manage intellectual property?", description: "We take privacy seriously and set clear expectations with new clients. MESG keeps intellectual property secure through agreements signed with new clients, plus, services and apps can always be kept private, designed to function on your own private network and nowhere else." },
        { title: "Who owns the apps that MESG builds for me?", description: "When our team of dedicated engineers build apps and components for our enterprise clients, the full ownership of will remain in the client’s hands. We provide additional integration options as well, such as the ability to rent services from MESG." },
        { title: "MESG is free, so why purchase advisory services?", description: "Apps and components on MESG can be created for free and will always remain free, but great app architectures are hard to come by. Our architects and engineers help you save time throughout the life of the app by designing a strong, efficient architecture." }
      ],
      packages: {
        premium: [
          {
            title: "PREMIUM",
            text: "Custom Pricing",
            items: [
              {
                valid: true, description: "Access to the Marketplace"
              },
              {
                valid: true, description: "Access to the Engine"
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
                valid: true, description: "Creation of Modules"
              }
            ],
            to: "https://docs.google.com/forms/d/e/1FAIpQLSdUymFdlMjaqcjr2ruRvxPQi1CbDp7a9cS-_3wxNvmg3UaR9Q/viewform",
            action: "Contact us"
          }
        ],
        business: [
          {
            title: "BUSINESS",
            text: "Custom Pricing",
            items: [
              {
                valid: true, description: "Access to the Marketplace"
              },
              {
                valid: true, description: "Access to the Engine"
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
                valid: false, description: "Creation of Modules"
              }
            ],
            to: "https://docs.google.com/forms/d/e/1FAIpQLSdUymFdlMjaqcjr2ruRvxPQi1CbDp7a9cS-_3wxNvmg3UaR9Q/viewform",
            action: "Contact us"
          }
        ],
        essential: [
          {
            title: "ESSENTIAL",
            text: "Open Source - FREE",
            items: [
              {
                valid: true, description: "Access to the Marketplace"
              },
              {
                valid: true, description: "Access to the Engine"
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
                valid: false, description: "Creation of Modules"
              }
            ],
            to: "https://docs.mesg.com/guide/quick-start-guide.html",
            action: "Get started"
          }
        ]
      }
    }
  },

  token() {
    return {
      features: {
        primary: [
          { src: require('~/assets/token/decentralize-executions.svg'), title: "Decentralize executions", description: "You can become a part of the decentralized network by executing transactions for other applications, all while being rewarded for your participation." },
          { src: require("~/assets/token/secure-network.svg"), title: "Secure the network", description: "All participants stake MESG Tokens to commit to their availability and good behavior. Then, participants are rewarded for validating each execution." },
          { src: require("~/assets/token/buy-sell.svg"), title: "Buy and sell Modules", description: "App components, called Modules, are bought and sold using the MESG Token. Then Modules can be used in any app, no complex coding required." }
        ],
        secondary: [
          { src: require("~/assets/token/algorithm.svg"), title: "The algorithm", description: "Daily allotment will be calculated as a small percentage of the previous day’s trading volume, tying tokens released to actual demand." },
          { src: require("~/assets/token/transparency.svg"), title: "Transparency", description: "Metrics will be published daily to enhance transparency between the MESG Foundation and the community." },
          { src: require("~/assets/token/initial-supply.svg"), title: "Initial supply", description: "0.1% of the total supply was released on the first day of exchange listing to initiate the supply." },
          { src: require("~/assets/token/supply-distribution.svg"), title: "Supply distribution", description: "The supply distribution of 62.5% will be released in daily allotments." }
        ]
      },
      faq: [
        { title: "How do you use the MESG Token?", description: "Today, the MESG Token can be used in the <a href=https://marketplace.mesg.com/ target=_blank>Marketplace</a> to buy and sell application components. Purchasing them saves developers time, while providing new ways to earn from coding." },
        { title: "What’s the future of the MESG Token?", description: "Soon the MESG Token will used in the decentralized network to reward participants who execute, emit, or validate tasks for other users’ applications. Plus, it will secure the network through a mandatory staking system." },
        { title: "How does the ATD promote stability?", description: "The Algorithmic Token Distribution (ATD) limits daily Token releases to no more than 6% of the previous day’s total volume. This means gradual large payouts for all, plus limited sales to promote a stable volume of MESG Tokens entering the market." },
        { title: "Where can I buy MESG Tokens?", description: "The MESG Tokens is available to purchase now on <a href=https://www.digifinex.com/en-ww/trade/USDT/MESG target=_blank>DigiFinex</a> and <a href=https://idex.market/eth/mesg target=_blank>IDEX</a>, and soon, it will be listed BitForex. Also, now MyEtherWallet supports MESG Tokens natively for ease of trading." }
      ]
    }
  },

  exchanges() {
    return [
      { id: "Digifinex", src: require("~/assets/exchanges/digifinex.svg"), to: "https://www.digifinex.com/en-ww/trade/USDT/MESG" },
      { id: "Idex", src: require("~/assets/exchanges/idex.svg"), to: "https://www.digifinex.com/en-ww/trade/USDT/MESG" },
      { id: "Bitforex", src: require("~/assets/exchanges/bitforex.svg"), to: "https://www.digifinex.com/en-ww/trade/USDT/MESG" }
    ]
  },

  articles() {
    return [
      { id: "forbes", title: "Blockchain Or Bust: Businesses Need To Seek A Middle Ground", img: require("~/assets/press/forbes.png"), to: "https://www.forbes.com/sites/darrynpollock/2019/01/18/blockchain-or-bust-businesses-need-to-seek-a-middle-ground/#291e609c3984" },
      { id: "chipin", title: "Three Ways to Reduce the Cost of Blockchain Implementation in Your Business", img: require("~/assets/press/chipin.png"), to: "https://www.chipin.com/reduce-cost-blockchain-implementation-business/" },
      { id: "finance", title: "What’s Holding Back Blockchain Adoption? The Answer is Simple – Connectivity", img: require("~/assets/press/finance-magnates.png"), to: "https://www.financemagnates.com/thought-leadership/whats-holding-back-blockchain-adoption-the-answer-is-simple-connectivity/" }
    ]
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
          description: "BeachHead is a decentralized platform, based on both Ethereum and Ripple blockchains, where players can participate in trading of assets with real world value within a virtual reality social platform that also includes an annex gaming environment.",
          to: "https://beachhead.com/",
          action: "beachhead.com"
        },
        {
          src: require("~/assets/partners/windprotocol.png"),
          title: "Wind Protocol",
          description: "Wind Protocol matches startups with investors. Startups can grow their communities, get feedback and opportunity to receive funding. Investors access deals through a network of venture scouts and tech geeks from the world’s innovative companies and startup ecosystems.",
          to: "https://windprotocol.com/",
          action: "windprotocol.com"
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
        primary: [
          {
            src: require("~/assets/team/Anthony.jpg"),
            title: "Anthony Estebe",
            description: "CEO, Co-founder",
            company: ""
          },
          {
            src: require("~/assets/team/Nicolas.jpg"),
            title: "Nicolas Mahe",
            description: "CTO, Co-founder",
            company: ""
          },
          {
            src: require("~/assets/team/Alexis.jpg"),
            title: "Alexis Sirkia",
            description: "Co-founder",
            company: ""
          },
          {
            src: require("~/assets/team/Will.jpg"),
            title: "Will Morgan",
            description: "Executive Brand Manager",
            company: ""
          },
          {
            src: require("~/assets/team/Emmanuel.jpg"),
            title: "Emmanuel Drouin",
            description: "UI / UX Designer",
            company: ""
          },
          {
            src: require("~/assets/team/Hubert.jpg"),
            title: "Hubert Krauze",
            description: "Core Developer",
            company: ""
          },
          {
            src: require("~/assets/team/Ilker.jpg"),
            title: "İlker Göktuğ Öztürk",
            description: "Core Developer",
            company: ""
          },
          {
            src: require("~/assets/team/Wayne.jpg"),
            title: "Wayne Skeen",
            description: "Advisor",
            company: ""
          },
          {
            src: require("~/assets/team/Janie.jpg"),
            title: "Janie Lim",
            description: "Evangelist",
            company: ""
          }
        ]
      },
    }
  },

  discover(_, { links }) {
    return {
      showcase: {
        title: "Showcase",
        description: "Not sure what to build on MESG? Find your inspiration here.",
        action: "Explore the showcase",
        to: links.showcase
      },
      foundation: {
        title: "MESG Foundation",
        description: "MESG is developed for the MESG Foundation, a nonprofit organization.",
        action: "Visit MESG Foundation",
        to: links.foundation
      },
      marketplace: {
        title: "MESG Marketplace",
        description: "Speed up application development and earn from sharing your code.",
        action: "Access MESG Marketplace",
        to: links.marketplace
      },
      engine: {
        title: "MESG Engine",
        description: "Build feature-rich apps without needing to manage dependencies.",
        action: "Access MESG Engine",
        to: links.engine
      },
      token: {
        title: "MESG Token",
        description: "Powering the new economy of streamlined application development.",
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
      { title: "Two pager", img: require('~/assets/documents/MESG-Two-Pager.jpg'), link: '/documents/MESG-2-pager.pdf' },
      { title: "Business Plan", img: require('~/assets/documents/MESG-Business-Plan-Summary.jpg'), link: '/documents/MESG-business-plan-summary.pdf' }
    ]
  },

  externalLinks() {
    return {
      documentation: { title: "Documentation", to: "https://docs.mesg.com/", icon: "fas fa-file-alt" },
      marketplace: { title: "Marketplace", to: "https://marketplace.mesg.com/", icon: "fas fa-store" },
      github: { title: "Github", to: "https://github.com/mesg-foundation/", icon: "fab fa-github" },
    }
  },

  links() {
    return {
      home: "/",
      enterprise: "/enterprise",
      engine: "/engine",
      marketplace: "/marketplace",
      token: "/token",
      foundation: "/foundation",
      getStarted: "/",
      showcase: "/showcase",
      partners: "/partners",
      demo: "/",
      faq: "/faq",
      roadmap: "/roadmap"
    }
  }
}
