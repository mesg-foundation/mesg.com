export const getters = {
  products(_, { links, externalLinks }) {
    return [
      {
        id: "engine",
        label: "Install the Engine",
        img: require("~/assets/engine/engine.svg"),
        title: "SDK",
        description:
          "An open event channel, Engine, and CLI for building and running modular applications. Control the flow of data and level of security between your whole stack of connected systems.",
        features: {
          primary: [
            {
              src: require('~/assets/engine/tech.svg'), title: "Use complex tech easily", description: "Any blockchain, API, machine learning system, P2P network or IoT device can be integrated into a process.</br></br>Implement to hard-to-reach technologies without managing the complexities.", href: externalLinks.github, action: "Github"
            },
            {
              src: require("~/assets/engine/development.svg"), title: "Save development hours", description: "A fundamental principle at MESG is DRY: Don’t Repeat Yourself.</br></br>The tools in the SDK make it easy to reuse any services, whether they are custom-built or shared on the integrated decentralized registry.", to: links.marketplace, action: "Services"
            }
          ],
          secondary: [
            { src: require("~/assets/engine/event-driven.svg"), title: "Event-driven architecture", description: "Building modular apps that automatically react to real-world events is an efficient way to manage hard-to-reach technologies like blockchains or IoT devices. Applications remain lightweight, reactive and easy to maintain." },
            { src: require("~/assets/engine/divergent-tech.svg"), title: "Connect divergent tech", description: "MESG services can connect to nearly anything, including APIs, decentralized networks or standalone applications. Then the Engine manages the interactions between services and applications automatically." },
            { src: require("~/assets/engine/development-hours.svg"), title: "Optimize development hours", description: "The tools in the SDK manage communication between all services and processes on your behalf, so you can spend far less time developing and maintaining your applications." }
          ]
        },
        usecase: [
          { src: require("~/assets/engine/multi-language.svg"), title: "Multi-language", description: "Language and organizational differences between teams cause major setbacks. The MESG SDK manages interaction between services regardless of languages or data formats, so you don't have to." },
          { src: require("~/assets/engine/fast-feature.svg"), title: "Fast integration", description: "Most applications today are complex and highly interconnected, making updates challenging and inefficient. With the MESG SDK, add, remove or update features without affecting other components." },
          { src: require("~/assets/engine/workflows.svg"), title: "Autonomous processes", description: "Events on simple or complex technologies can be easily leveraged within powerful processes. Process a payment. Send a notification. React to blockchain transactions. The possibilities are endless." },
          { src: require("~/assets/engine/scalable-apps.svg"), title: "Easy scalability", description: "By default, servers and local networks have limited bandwidth. Plus, maintaining servers can be costly. Our tools are decentralized, so applications can scale autonomously in a trustless way." }
        ],
      },
      {
        id: "marketplace",
        label: "Build and reuse",
        img: require("~/assets/marketplace/marketplace.svg"),
        title: "Services",
        description:
          "Reuse existing services to save time building applications. Publish on a decentralized registry to get rewarded anytime your service is used by others.",
        features: {
          primary: [
            { src: require('~/assets/marketplace/marketplace-engine.svg'), title: "Compatible by default", description: "All services in the decentralized registry are automatically compatible with each other thanks to the open-source tools in the MESG SDK.<br/><br/>No more installing libraries or learning new data formats before you begin.", href: externalLinks.github, action: "Github" },
            { src: require('~/assets/marketplace/decentralized.svg'), title: "Decentralized executions", description: "Decentralized service executions are open to all who want to contribute.<br/><br/>When executions are not dependent on a single server or machine, apps become unstoppable, distributed and always available.", to: links.engine, action: "SDK" }
          ],
          secondary: [
            { src: require("~/assets/marketplace/reuse-work.svg"), title: "Reuse your work", description: "It's time consuming to forge new connections to devices, blockchains and APIs. Reuse more of your applications so you can stop repeating yourself." },
            { src: require("~/assets/enterprise/connect-systems.svg"), title: "Rewarded contributions", description: "Each time services listed on the decentralized registry are used within other users' applications, new execution tokens are sent to the original creator." },
            { src: require("~/assets/enterprise/custom-built.svg"), title: "Development economy", description: "Earn tokens by building and hosting applications, or by validating executions for others in the decentralized network." }
          ]
        },
        usecase: [
          { src: require("~/assets/marketplace/build-marketplace.svg"), title: "Save time integrating features", description: "Reusing components from the decentralized registry saves significant time in building new applications. The SDK ensures seamless interoperability between services, so you don't have to worry about managing service interaction." },
          { src: require("~/assets/marketplace/decentralized-apps.svg"), title: "Hybrid decentralized apps", description: "Some processes are best kept centralized, while others are better decentralized. MESG gives builders complete control over their level of centralization. You can even enable decentralized executions between decentralized networks." },
          { src: require("~/assets/marketplace/workflows.svg"), title: "Autonomous processes", description: "Any services from the decentralized registry can be easily combined into reactive autonomous processes. React when a new user signs up, a new Ethereum transaction is processed, or a new file is uploaded. The possibilities are endless." },
          { src: require("~/assets/marketplace/open-marketplace.svg"), title: "Self-regulating economy", description: "The registry is completely open, decentralized, and self-regulating, so no single entity has control over participants or submissions, including MESG itself. Anyone can add their services and have full ownership over it." }
        ],
      },
      {
        id: "orchestrator",
        label: "Orchestrate services",
        img: require("~/assets/orchestrator.svg"),
        title: "Process",
        description: "Orchestrate decentralized services with a process to build highly scalable, interoperable and maintainable applications.",
        features: {
          primary: [
            {
              title: "Describe your feature", description: "Orchestrate your applications simply by connecting the events and tasks from any service.</br></br>Implement complex technologies without managing the complexities.</br></br>Any new services, or existing services from the decentralized registry can be used to create features.</br></br>Currently, services are managed through a config. file."
            }
          ],
          secondary: [
            {
              src: require("~/assets/marketplace/reuse-work.svg"), title: "Feature-based", description: "Create any feature with a configuration file and have the relationships between your services through events and tasks automatically managed."
            },
            { src: require("~/assets/engine/workflows.svg"), title: "Keep it simple", description: "Focus only on the critical parts of your applications and let Orchestrator manage all of the features for you." },
            { src: require("~/assets/engine/scalable-apps.svg"), title: "Decentralization-ready", description: "Service-based apps make scaling, distribution and decentralization super easy. Distribute or scale any service or application through a decentralized network of executions." }
          ]
        }
      },
      {
        id: "token",
        label: "Fuel the ecosystem",
        img: require("~/assets/token/token.svg"),
        title: "Economy",
        description: "Delegate application processing and validation to network participants with the native token. Or receive tokens by sharing components in the decentralized service registry.",
        features: {
          primary: [
            { src: require('~/assets/token/decentralize-executions.svg'), title: "Decentralize executions", description: "Become a part of the decentralized network by executing transactions for other applications, and get rewarded for your participation." },
            { src: require("~/assets/token/secure-network.svg"), title: "Secure the network", description: "All participants are required to deposit a stake, committing to availability and good behavior. Then, participants are rewarded for validating executions." },
            { src: require("~/assets/marketplace/build-marketplace.svg"), title: "Use and reuse services", description: "When services are shared on the decentralized registry and ran by others, rewards are sent to the runner and the initial developer of the service." }
          ]
        }
      }
    ]
  },

  home() {
    return {
      features: {
        primary: [
          { src: require('~/assets/marketplace/open-marketplace.svg'), title: "Decentralized registry", description: "Stored interoperable services can be reused and processed by anyone. Every service on the registry is compatible with every other." },
          { src: require("~/assets/engine/development-hours.svg"), title: "Build efficiently", description: "Don’t repeat yourself. Reuse and orchestrate centralized and decentralized features through a highly-scalable infrastructure." },
          { src: require("~/assets/token/decentralize-executions.svg"), title: "Maintain control", description: "Build software running on any combination of trustless networks, trusted cloud providers, or even your own private infrastructures." }
        ]
      },
    }
  },

  team() {
    return {
      members: [
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
        },
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
          src: require("~/assets/team/Benz.jpg"),
          title: "Thotsaphon Ruthamnong",
          description: "Developer",
          linkedin: "https://www.linkedin.com/in/thotsaphon-ruthamnong-a5889b111/"
        }
      ]
    }
  },

  documents() {
    return {
      whitepaper: {
        title: "Whitepaper", img: require("~/assets/documents/Decentralized-Network-of-Services.jpg"), link: "/documents/decentralized-network-of-services.pdf"
      },
      implementation: {
        title: "Technical Implementation", img: require("~/assets/documents/MESG-Application-of-the-Decentralized-Network-of-Services.jpg"), link: "/documents/MESG-application-of-the-decentralized-network-of-services.pdf"
      },
      twopager: {
        title: "Two-Pager", img: require("~/assets/documents/MESG-Two-Pager.jpg"), link: "/documents/MESG-2-pager.pdf"
      },
      business: {
        title: "Business Plan", img: require("~/assets/documents/MESG-Business-Plan-Summary.jpg"), link: "/documents/MESG-business-plan-summary.pdf"
      }
    }
  },

  questions() {
    return [{
      key: "general",
      text: "General",
      href: "#general",
      contents: [{
        title: "What is MESG?",
        description: "MESG is an application development platform made of a decentralized network of inter-compatible services. Any API, blockchain or decentralized network can be connected to services.<br/><br/>Interoperability between all services are managed by the MESG Engine regardless of languages or data formats. Users share inter-compatible services on a decentralized registry, allowing developers to save significant time and/or get rewarded from their work."
      }],
    },
    {
      key: "getting-started",
      text: "Getting Started",
      href: "#getting-started",
      contents: [{
        title: "Can “any technology” actually be used?",
        description: "Any data can be accessed via the internet can be used within MESG applications.<br/><br/>This includes blockchains, decentralized networks, databases, web services, smartphones, wearables, custom corporate software, biometric devices, vehicles, video games, medical devices, or nearly any IoT device.<br/><br/>It’s the events on these technologies, however, which are most useful to combine and automate. Events could look like a transaction completed on a blockchain, a button clicked on a website, a location reached on a GPS, the opening of a garage door, a full charge on an electric car, or even weather conditions that reach a certain threshold.<br/><br/>All of the above technologies and events, plus many more, can be combined, decentralized, and automated using MESG, regardless of programming languages or data formats."
      },
      {
        title: "What is “Event Driven Architecture”?",
        description: "Event Driven Architecture (EDA) is a programming style based on modular applications with components that are set to react to real-world events.<br/><br/>Real-world events could be anything happening on a technology, but might look like a transaction posted on a blockchain, a button clicked on a website, a location reached on a GPS, the opening of a garage door, a full charge on an electric car, or even weather conditions that reach a certain threshold.<br/><br/>The EDA style consists of many fully-independent connections to technologies, unified by a common event stream and communications manager. Services are built to execute tasks or connect to technologies, and can be configured to react to events and execute tasks on those technologies.<br/><br/>Rather than applications being responsible for the cooperation of other technologies and features, each technology stands on its own without a direct connection to anything else. Instead, each service (or feature) is set up to listen for a command by any other service. When that command is heard, the service reacts by executing its respective task.<br/><br/>This setup allows all elements of applications to function in an independent way, without direct connections to any other feature, so adding, removing or updating features doesn’t affect the other parts of the application.<br/><br/>This results in an application that is easy to update, runs autonomously and works automatically.<br/><br/>While MESG itself uses and recommends EDA, any application, regardless of the programming style, is compatible with MESG."
      },
      {
        title: "What problems does MESG solve?",
        description: "MESG solves major issues in the tech and business industries.<br/><br/><strong>These problems are as follows:</strong><br/><br/><ul><li>There is no common channel for blockchains to communicate with everyday technologies.</li><li>Business IT infrastructures require inefficient and costly updates to maintain old features, or accommodate new features.</li><li>As new technologies and devices enter the market, interoperability between these devices increasingly becomes an issue.</li><li>Prototyping products or features, particularly those based in blockchain, requires immense overhead and a large resource commitment, simply to test out a single technology.</li></ul><br/>We see opportunity in these issues. To solve them, we are tackling three large challenges within the business and tech industries simultaneously:<br/><br/><ul><li><strong>Interoperability</strong><br/><br/><p>Effortless communication between any combination of blockchains, web and IoT.</p></li><br/><li><strong>Scalability</strong><br/><br/><p>A single infrastructure from startup to multinational corporation.</p></li><br/><li><strong>Efficiency</strong><br/><br/><p>Streamline business functions with set-and-forget automation.</p></li></ul>"
      }]
    },
    {
      key: "transactions",
      text: "Transactions",
      href: "#transactions",
      contents: [{
        title: "How much does MESG cost?",
        description: "MESG is free to use. Anyone can use the MESG technology to create their own network and monetize this network if they want too with the way they want. The tool is payment agnostic, and you control the creation and distribution of your tokens however you want.<br/><br/>Keep in mind that to provide proper incentives for runners in the network, the participant should have something to lose to guarantee their good behavior, so free networks may not be fully secured."
      },
      {
        title: "How can I earn tokens with MESG?",
        description: "A self-regulating economy is a major part of MESG. Firstly, each time a new service is built, it can be shared and reused. The creators of services are free to choose the number of tokens required that participants deposit to use the service. As part of this, service builders also decide how much each participant (emitters, validators, and executors) receives for their help.<br/><br/>Secondly, participants who commit to running their computers to support data processing in the Network are rewarded for their participation. The number of tokens each of these participants earn is determined by the Service’s creator."
      }]
    },
    {
      key: "compatibility",
      text: "Compatibility",
      href: "#compatibility",
      contents: [{
        title: "Is MESG compatible with my business?",
        description: "Short answer: <strong>yes</strong><br/><br/>MESG’s nearly infinite compatibility means that it works with any data that’s accessible through the internet, including legacy or custom-built software. Only a single service must be built to connect your software to MESG, then that service can be reused by yourself or others for any new feature or update made henceforth. This can drastically reduce development time after the initial connection is made."
      }]
    },
    {
      key: "community",
      text: "Community",
      href: "#community",
      contents: [{
        title: "Is MESG open source?",
        description: "Yes. Our software is not patented, but rather is protected by an open-source software license. This means there are no secrets: it’s free to view the source code and anyone from the community can help improve features or fix bugs in our software.<br/><br/>A collaborative element is inherent to open source software, meaning that any developer can help build any part of MESG itself. We encourage everyone to get involved and help build MESG into the foremost solution connecting blockchains to traditional technologies."
      },
      {
        title: "Who can benefit from MESG?",
        description: "We’ve identified a few target markets who are immediately in need of our solution:<br/><br/><ul><li><strong>Blockchain developers</strong><br/><br/><p>Compatibility with any blockchain, plus the ability to reuse components and not need to worry about managing communication or DevOps between them makes it one of the most powerful blockchain development tools around.</p></li><br/><li><strong>Legacy companies interested in moving to a decentralized system</strong><br/><br/><p>MESG can connect to any legacy software stack. By connecting to MESG, companies can easily adopt a variable level of decentralization into current practices, allowing for customized security or unrestricted growth.</p></li><br/><li><strong>Entrepreneurs looking to cut costs by optimizing their infrastructures</strong><br/><br/><p>Connecting previously-incompatible technologies means entrepreneurs can streamline business processes that weren’t previously able to be streamlined through autonomous, event-driven applications.</p></li><br/><li><strong>Innovators wanting to push the boundaries of what’s possible with technology</strong><br/><br/><p>With many reusable and interchangeable connections to any technologies available to build with, innovators can shift their focus from implementation to creativity.</p></li></ul>"
      }]
    },
    {
      key: "business-and-strategy",
      text: "Business and Strategy",
      href: "#business-and-strategy",
      contents: [{
        title: "How can decentralization help my business?",
        description: "Today, most large internet corporations store (and own) your personal data and can share it with other large corporations or even governmental agencies. In addition to privacy and ownership concerns, their sole control of data creates a single point of failure if something were to go wrong.<br/><br/>For example, in recent years, there have been highly-publicized cases of data breaches where login information and identities have been leaked, in addition to corporations being reprimanded for their misuse of customer data.<br/><br/>Decentralized networks, on the other hand, have no central, regulated hub in which all data passes through. This means that no single entity or corporation can hold, control and profit off of your data, and it also means that there is no single point of failure if something were to go wrong.<br/><br/>If one server, or even a group of servers, fails, data will still be available because it’s shared throughout the network. And because all data is distributed rather than centralized, no entity (including MESG itself) can have ownership over your data.<br/><br/>In addition to improved trust and reliability for users and customers, the ability to avoid purchasing, managing, and maintaining servers entirely can cut costs drastically for many types of businesses."
      },
      {
        title: "How is MESG more efficient than our competitors?",
        description: "MESG is all about reusing application components. This essentially means: no more busy work in development.<br/><br/>When an app or business makes an initial connection to the MESG Infrastructure with a service (at industry-average development times), they can reuse the service and will not need to modify it again until changes are made to their software. This translates to a huge reduction of development time for all development work after any app or company’s first service.<br/><br/>If developers want to update their apps with a desired feature that has already been implemented by another developer (for example, a previously- built service connecting to Spotify’s track playback), you can simply plug in this service. When using shared or repurposed services, development time can be reduced to a small fraction of what it was before.<br/><br/>The MESG Network adds additional efficiency. Developers and companies can utilize the decentralized network in lieu of running and maintaining their own servers. This provides easier scalability, with more processing power becoming available as the network grows."
      }]
    },
    {
      key: "development",
      text: "Development",
      href: "#development",
      contents: [{
        title: "How much time can I save by using MESG?",
        description: "Sharing and reusing code translates into significant time savings for developers.<br/><br/>Services built on MESG are reusable, so when reused, work is saved each time henceforth. Additionally, since the tools in the <a href='/mesg-sdk' class=link target='_blank'>MESG SDK</a> handle communications between services, the portion of time spent getting the two services to connect and cooperate with each other is done automatically through the Engine, directed by processes.<br/><br/>These significant time savings can increase even more than if the desired service has already been built."
      },
      {
        title: "Do I need to be a developer to use MESG?",
        description: "Yes. Development skills are required to build services, and to combine services into processes.<br/><br/>Processes are accessible to non-developers as long as all the services are already built on the decentralized registry but still require technical thinking."
      }]
    }]
  },

  policies() {
    return [{
      key: "personal-information",
      text: "Personal information",
      href: "#personal-information",
      title: "Collection of personal information",
      description: "We receive and store any information you knowingly provide to us when you fill any online forms on the Website. You may choose not to provide us with certain information, but then you may not be able to take advantage of some of the Website's features. Users who are uncertain about what information is mandatory are welcome to contact us."
    },
    {
      key: "non-personal-information",
      text: "Non-personal information",
      href: "#non-personal-information",
      title: "Collection of non-personal information",
      description: "When you visit the Website our servers automatically record information that your browser sends. This data may include information such as your device's IP address, browser type and version, operating system type and version, language preferences or the webpage you were visiting before you came to our Website, pages of our Website that you visit, the time spent on those pages, interaction with our Website, information you search for on our Website, access times and dates, and other statistics."
    },
    {
      key: "collected-information",
      text: "Collected information",
      href: "#collected-information",
      title: "Use and processing of collected information",
      description: "Any of the information we collect from you may be used to personalize your experience; improve our Website; improve user experience and respond to queries and emails of our users; send newsletters; send notification emails, updates, etc; run and operate our Website and Services. Non-Personal Information collected is used only to identify potential cases of abuse and establish statistical information regarding Website usage. This statistical information is not otherwise aggregated in such a way that would identify any particular user of the system. We may process Personal Information related to you if one of the following applies: (i) You have given your consent for one or more specific purposes.Note that under some legislations we may be allowed to process information until you object to such processing(by opting out), without having to rely on consent or any other of the following legal bases below.This, however, does not apply, whenever the processing of Personal Information is subject to European data protection law; (ii) Provision of information is necessary for the performance of an agreement with you and/ or for any pre - contractual obligations thereof; (iii) Processing is necessary for compliance with a legal obligation to which you are subject; (iv) Processing is related to a task that is carried out in the public interest or in the exercise of official authority vested in us; (v) Processing is necessary for the purposes of the legitimate interests pursued by us or by a third party.In any case, we will be happy to clarify the specific legal basis that applies to the processing, and in particular whether the provision of Personal Data is a statutory or contractual requirement, or a requirement necessary to enter into a contract."
    },
    {
      key: "transfer-storage",
      text: "Transfer & storage",
      href: "#transfer-storage",
      title: "Information transfer and storage",
      description: "Depending on your location, data transfers may involve transferring and storing your information in a country other than your own. You are entitled to learn about the legal basis of information transfers to a country outside the European Union or to any international organization governed by public international law or set up by two or more countries, such as the UN, and about the security measures taken by us to safeguard your information. If any such transfer takes place, you can find out more by checking the relevant sections of this document or inquire with us using the information provided in the contact section."
    },
    {
      key: "rights-of-users",
      text: "Rights of users",
      href: "#rights-of-users",
      title: "The rights of users",
      description: "You may exercise certain rights regarding your information processed by us. In particular, you have the right to do the following: (i) you have the right to withdraw consent where you have previously given your consent to the processing of your information; (ii) you have the right to object to the processing of your information if the processing is carried out on a legal basis other than consent; (iii) you have the right to learn if information is being processed by us, obtain disclosure regarding certain aspects of the processing and obtain a copy of the information undergoing processing; (iv) you have the right to verify the accuracy of your information and ask for it to be updated or corrected; (v) you have the right, under certain circumstances, to restrict the processing of your information, in which case, we will not process your information for any purpose other than storing it; (vi) you have the right, under certain circumstances, to obtain the erasure of your Personal Information from us; (vii) you have the right to receive your information in a structured, commonly used and machine readable format and, if technically feasible, to have it transmitted to another controller without any hindrance. This provision is applicable provided that your information is processed by automated means and that the processing is based on your consent, on a contract which you are part of or on pre-contractual obligations thereof."
    },
    {
      key: "object-processing",
      text: "Object to processing",
      href: "#object-processing",
      title: "The right to object to processing",
      description: "Where Personal Information is processed for the public interest, in the exercise of an official authority vested in us or for the purposes of the legitimate interests pursued by us, you may object to such processing by providing a ground related to your particular situation to justify the objection. You must know that, however, should your Personal Information be processed for direct marketing purposes, you can object to that processing at any time without providing any justification. To learn, whether we are processing Personal Information for direct marketing purposes, you may refer to the relevant sections of this document."
    },
    {
      key: "exercise-these-rights",
      text: "Exercise these rights",
      href: "#exercise-these-rights",
      title: "How to exercise these rights",
      description: "Any requests to exercise User rights can be directed to the Owner through the contact details provided in this document. These requests can be exercised free of charge and will be addressed by the Owner as early as possible and always within one month."
    },
    {
      key: "privacy-children",
      text: "Privacy of children",
      href: "#privacy-children",
      title: "Privacy of children",
      description: "We do not knowingly collect any Personal Information from children under the age of 13. If you are under the age of 13, please do not submit any Personal Information through our Website or Service. We encourage parents and legal guardians to monitor their children's Internet usage and to help enforce this Policy by instructing their children never to provide Personal Information through our Website or Service without their permission. If you have reason to believe that a child under the age of 13 has provided Personal Information to us through our Website or Service, please contact us. You must also be at least 16 years of age to consent to the processing of your personal data in your country (in some countries we may allow your parent or guardian to do so on your behalf)."
    },
    {
      key: "newsletters",
      text: "Newsletters",
      href: "#newsletters",
      title: "Newsletters",
      description: "We offer electronic newsletters to which you may voluntarily subscribe at any time. You may choose to stop receiving our newsletter or marketing emails by following the unsubscribe instructions included in these emails or by contacting us. However, you will continue to receive essential transactional emails."
    },
    {
      key: "cookies",
      text: "Cookies",
      href: "#cookies",
      title: "Cookies",
      description: "The Website uses 'cookies' to help personalize your online experience. A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you, and can only be read by a web server in the domain that issued the cookie to you. We may use cookies to collect, store, and track information for statistical purposes to operate our Website and Services. You have the ability to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. To learn more about cookies and how to manage them, visit <a href='https://www.internetcookies.org/' class='link' target='_blank'>internetcookies.org</a>"
    },
    {
      key: "track-signals",
      text: "Do Not Track signals",
      href: "#track-signals",
      title: "Do Not Track signals",
      description: "Some browsers incorporate a Do Not Track feature that signals to websites you visit that you do not want to have your online activity tracked. Tracking is not the same as using or collecting information in connection with a website. For these purposes, tracking refers to collecting personally identifiable information from consumers who use or visit a website or online service as they move across different websites over time. How browsers communicate the Do Not Track signal is not yet uniform. As a result, this Website is not yet set up to interpret or respond to Do Not Track signals communicated by your browser. Even so, as described in more detail throughout this Policy, we limit our use and collection of your personal information."
    },
    {
      key: "other-websites",
      text: "Other websites",
      href: "#other-websites",
      title: "Links to other websites",
      description: "Our Website contains links to other websites that are not owned or controlled by us. Please be aware that we are not responsible for the privacy practices of such other websites or third-parties. We encourage you to be aware when you leave our Website and to read the privacy statements of each and every website that may collect Personal Information."
    },
    {
      key: "information-security",
      text: "Information security",
      href: "#information-security",
      title: "Information security",
      description: "We secure information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use, or disclosure. We maintain reasonable administrative, technical, and physical safeguards in an effort to protect against unauthorized access, use, modification, and disclosure of Personal Information in its control and custody. However, no data transmission over the Internet or wireless network can be guaranteed. Therefore, while we strive to protect your Personal Information, you acknowledge that (i) there are security and privacy limitations of the Internet which are beyond our control; (ii) the security, integrity, and privacy of any and all information and data exchanged between you and our Website cannot be guaranteed; and (iii) any such information and data may be viewed or tampered with in transit by a third-party, despite best efforts."
    },
    {
      key: "data-breach",
      text: "Data breach",
      href: "#data-breach",
      title: "Data breach",
      description: "In the event we become aware that the security of the Website has been compromised or users Personal Information has been disclosed to unrelated third parties as a result of external activity, including, but not limited to, security attacks or fraud, we reserve the right to take reasonably appropriate measures, including, but not limited to, investigation and reporting, as well as notification to and cooperation with law enforcement authorities. In the event of a data breach, we will make reasonable efforts to notify affected individuals if we believe that there is a reasonable risk of harm to the user as a result of the breach or if notice is otherwise required by law. When we do, we will post a notice on the Website, send you an email."
    },
    {
      key: "legal-disclosure",
      text: "Legal disclosure",
      href: "#legal-disclosure",
      title: "Legal disclosure",
      description: "We will disclose any information we collect, use or receive if required or permitted by law, such as to comply with a subpoena, or similar legal process, and when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request. In the event we go through a business transition, such as a merger or acquisition by another company, or sale of all or a portion of its assets, your user account, and personal data will likely be among the assets transferred."
    },
    {
      key: "changes-amendments",
      text: "Changes & amendments",
      href: "#changes-amendments",
      title: "Changes & amendments",
      description: "We reserve the right to modify this Policy relating to the Website or Services at any time, effective upon posting of an updated version of this Policy on the Website. When we do we will revise the updated date at the bottom of this page. Continued use of the Website after any such changes shall constitute your consent to such changes."
    },
    {
      key: "acceptance",
      text: "Acceptance of this policy",
      href: "#acceptance",
      title: "Acceptance of this policy",
      description: "You acknowledge that you have read this Policy and agree to all its terms and conditions. By using the Website or its Services you agree to be bound by this Policy. If you do not agree to abide by the terms of this Policy, you are not authorized to use or access the Website and its Services."
    },
    {
      key: "contact-us",
      text: "Contact us",
      href: "#contact-us",
      title: "Contact us",
      description: "If you have any questions about this Policy, please contact us by email at <a href='mailto:contact@mesg.com' class='link'>contact@mesg.com</a> or by mail using the details provided below:<br/><br/><strong>MESG Foundation</strong><br/><br/>Willow House,<br/>Cricket Square,<br/>PO Box 709,<br/>Grand Cayman KY1- 1107,<br/>Cayman Islands"
    }
    ]
  },

  usecases(_, { links }) {
    return [
      {
        id: "expand-dao-functionalities",
        tag: {
          title: "MESG Partner",
          type: "orange"
        },
        to: `${links.showcase}/expand-dao-functionalities`,
        logos: [
          require("~/assets/showcase/aragon.svg"),
          require("~/assets/showcase/webhook.svg")
        ],
        headerimage: require("~/assets/showcase/aragon-webhook.svg"),
        title: "Expand DAO functionalities",
        label: "Aragon - Webhook",
        description: "Easily connect the events from any Aragon decentralized autonomous organization (DAO) to web services like Zapier, Email, SMS, Slack, Telegram, Twitter or webhooks.",
        technology: "Aragon Project - MESG - Webhook",
        paragraphe: "Connect Aragon Project’s Ethereum smart contracts to webhooks, Zapier and more.",
        image: require("~/assets/showcase/aragon-mesg-webhook.svg"),
        challenges: "Ethereum smart contracts have a usability problem. It’s a challenge to connect to centralized technologies which are known to enhance user experience and boost adoption.",
        goals: "To build an Aragon application that allows users of any Aragon decentralized autonomous organization to boost UX by connecting to a suite of web services through a UI.",
        benefits: [
          "Connect any Aragon DAO to external web services within the native dashboard using the MESG Application.",
          "Automatically react to smart contract events in real time."
        ],
        opportunities: [
          "Users can use subscription-based services, such as Sendgrid, without paying for a subscription first.",
          "Notifications: Get notified when actions occur on your DAO instead of needing to actively check.",
          "Set and forget: Be reactive instead of active on DAO decisions. Either be lazy or avoid thinking about it when you don’t need to.",
          "A public website allowing anyone to connect any event from an Aragon DAO to a list of available connectors, connecting your DAO to the outside world."
        ],
        video: "https://www.youtube.com/embed/MctlHrLSm70",
        information: "Want a deeper look at how MESG can be used to leverage actions from smart contracts? Head on over to the following resources for updates on this integration.",
        resources: [
          { title: "Read the full article", to: "https://blog.mesg.com/aragon-dao-integration-milestone-2/?utm_source=mesg.com&utm_medium=usecase_link&utm_campaign=aragon_usecase" },
          { title: "Github", to: "https://github.com/mesg-foundation/aragon" },
          { title: "Aragon forum", to: "https://forum.aragon.org/t/mesg-integration-with-aragon-daos-milestone-1/1814/4" }
        ],
        cta: "https://github.com/mesg-foundation/aragon"
      },
      {
        id: "plasma-exit-challenge",
        tag: {
          title: "MESG Partner",
          type: "orange"
        },
        to: `${links.showcase}/plasma-exit-challenge`,
        logos: [
          require("~/assets/showcase/omisego.svg"),
          require("~/assets/showcase/ethereum.svg")
        ],
        headerimage: require("~/assets/showcase/plasma-guard.svg"),
        title: "Plasma Guard",
        label: "OmiseGO - Ethereum",
        description: "Ensure that your funds in the Plasma framework are secure and automatically exit, or challenge any invalid exit or byzantine event.",
        technology: "OmiseGO - Plasma - Ethereum",
        paragraphe: "Invalid user exits and plasma operator errors pose a serious risk of loss to all plasma users, unless the chain can be consistently monitored.",
        image: require("~/assets/showcase/omisego-ethereum.svg"),
        challenges: "Plasma is a great layer-2 solution for Ethereum with a high level of security for your funds, as long as you monitor the network yourself which can be a challenge.",
        goals: "To create a tool that watches Plasma chains and automatically challenges invalid exits and exits when a Plasma operator goes byzantine.",
        benefits: [
          "Security of the blockchain, with scalability.",
          "Ensure your funds can safely be exited.",
          "React immediately when an error occurs."
        ],
        opportunities: [
          "To reduce friction for adoption and increase the use of layer-2 solutions like Plasma.",
          "The creation of products and businesses that secure your funds by watching the network.",
        ],
        video: "https://www.youtube.com/embed/tj9kqiylObk",
        information: "Want a more in-depth look at how MESG can help you secure your Plasma framework? Check out the following resources.",
        companies: [
          { src: require("~/assets/showcase/omisego-logo.svg"), to: "https://omisego.network/" },
          { src: require("~/assets/showcase/loom-network.svg"), to: "https://loomx.io/" },
          { src: require("~/assets/showcase/hoard.svg"), to: "https://hoard.exchange/" },
          { src: require("~/assets/showcase/cryptokitties.svg"), to: "https://www.cryptokitties.co/" }
        ],
        resources: [
          { title: "Read the full article", to: "https://blog.mesg.com/plasma-is-not-secure/?utm_source=mesg.com&utm_medium=usecase_link&utm_campaign=plasma_usecase" },
          { title: "Application", to: "https://github.com/mesg-foundation/application-plasma-exit" },
          { title: "Watcher", to: "https://github.com/mesg-foundation/service-plasma-omisego-watcher" }
        ],
        cta: "https://github.com/mesg-foundation/application-plasma-exit"
      },
      {
        id: "send-messages-from-a-satellite",
        tag: {
          title: "Community",
          type: "blue"
        },
        to: `${links.showcase}/send-messages-from-a-satellite`,
        logos: [
          require("~/assets/showcase/opennode.svg"),
          require("~/assets/showcase/blockstream.svg")
        ],
        headerimage: require("~/assets/showcase/satellite.svg"),
        label: "OpenNode - Blockstream",
        title: "Send messages from a satellite",
        description: "A showcase of MESG’s sheer versatility: send messages from outer space using the MESG Token, the Lightning Network, a satellite, and a web-based UI.",
        technology: "OpenNode - MESG Token - Blockstream",
        paragraphe: "Connect multiple cryptocurrencies with other technologies to securely send a message from space.",
        image: require("~/assets/showcase/opennode-blockstream.svg"),
        challenges: "Creating a single app which executes a Bitcoin-based transaction via the Lightning Network in exchange for a separate ERC-20 token payment.",
        goals: "To build a business with a MESG App which accepts tokens in exchange for actions completed, and to allow multiple cryptocurrencies to interact within a single application.",
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
          { title: "Read the full article", to: "https://blog.mesg.com/use-case-send-messages-from-space/?utm_source=mesg.com&utm_medium=usecase_link&utm_campaign=space_usecase" },
          { title: "Github", to: "https://github.com/RyanMilb/spaceforce-mesg-app" },
        ],
        cta: "https://github.com/RyanMilb/spaceforce-mesg-app"
      },
      {
        id: "enhance-zapier-workflows",
        tag: {
          title: "Community",
          type: "blue"
        },
        to: `${links.showcase}/enhance-zapier-workflows`,
        logos: [
          require("~/assets/showcase/zapier.svg"),
          require("~/assets/showcase/mesg.svg")
        ],
        headerimage: require("~/assets/showcase/zapier-workflow.svg"),
        label: "Zapier - MESG",
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
          { title: "Read the full article", to: "https://blog.mesg.com/use-case-connecting-zapier-mesg/?utm_source=mesg.com&utm_medium=usecase_link&utm_campaign=zapier_usecase" },
          { title: "Github", to: "https://github.com/JBarna/MESG-Z" },
        ],
        cta: "https://github.com/JBarna/MESG-Z"
      },
      {
        id: "monitor-erc20-transactions",
        to: `${links.showcase}/monitor-erc20-transactions`,
        logos: [
          require("~/assets/showcase/ethereum.svg"),
          require("~/assets/showcase/grafana.svg")
        ],
        headerimage: require("~/assets/showcase/monitor.svg"),
        label: "ERC20 - Grafana",
        title: "Monitor ERC-20 transactions",
        description: "There’s immense power in data. New analytics tools allow for the creation of massive efficiencies, avenues of income, or new businesses altogether.",
        technology: "ERC-20 - InfluxDB - Grafana",
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
          "Easily expand to ERC-721 to monitor the performance of digital collectables."
        ],
        picture: "https://forum.mesg.com/uploads/default/original/1X/dd3e09715411d90152680d614d77abd9bce19a37.png",
        companies: [
          { src: require("~/assets/showcase/coinbase.svg"), to: "https://www.coinbase.com/" },
          { src: require("~/assets/showcase/kraken.svg"), to: "https://www.kraken.com/" },
          { src: require("~/assets/showcase/bitstamp.svg"), to: "https://www.bitstamp.net/" },
          { src: require("~/assets/showcase/binance.svg"), to: "https://www.binance.com/" }
        ],
        information: "Want a more in-depth look at how MESG can be used to monitor blockchain transactions? Head on over to our blog for the full story or take a look at our other resources.",
        resources: [
          { title: "Read the full article", to: "https://blog.mesg.com/how-to-monitor-erc-20-transactions/?utm_source=mesg.com&utm_medium=usecase_link&utm_campaign=monitor_erc20_usecase" },
          { title: "Github", to: "https://github.com/antho1404/application-erc20-analytics" },
          { title: "Forum post", to: "https://forum.mesg.com/t/analytics-tool-for-erc20-transfers/209?utm_source=mesg.com&utm_medium=usecase_link&utm_campaign=monitor_erc20_usecase" }
        ],
        cta: "https://github.com/antho1404/application-erc20-analytics"
      },
      {
        id: "replace-subscriptions-with-on-demand-payments",
        to: `${links.showcase}/replace-subscriptions-with-on-demand-payments`,
        logos: [
          require("~/assets/showcase/ethereum.svg"),
          require("~/assets/showcase/sendgrid.svg")
        ],
        headerimage: require("~/assets/showcase/payments.svg"),
        label: "Ethereum - SendGrid",
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
          { src: require("~/assets/showcase/sendgrid-logo.svg"), to: "https://sendgrid.com/" },
          { src: require("~/assets/showcase/heroku.svg"), to: "https://www.heroku.com/" },
          { src: require("~/assets/showcase/firebase.svg"), to: "https://firebase.google.com/" },
          { src: require("~/assets/showcase/twilio.svg"), to: "https://www.twilio.com/" }
        ],
        information: "Want a more in-depth look at how MESG can help redefine businesses with on-demand payments? Head on over to our blog for the full story or take a look at our other resources.",
        resources: [
          { title: "Read the full article", to: "https://blog.mesg.com/could-this-cause-the-death-of-the-subscription-plan/?utm_source=mesg.com&utm_medium=usecase_link&utm_campaign=payments_usecase" },
          { title: "Github", to: "https://github.com/antho1404/pegasys-hackathon" },
          { title: "Forum post", to: "https://forum.mesg.com/t/monetizing-api-through-blockchain/223?utm_source=mesg.com&utm_medium=usecase_link&utm_campaign=payments_usecase" },
          { title: "Hackathon post", to: "https://devpost.com/software/pegasys-hackathon" }
        ],
        cta: "https://github.com/antho1404/pegasys-hackathon"
      },
      {
        id: "directly-buy-crypto-with-fiat",
        to: `${links.showcase}/directly-buy-crypto-with-fiat`,
        logos: [
          require("~/assets/showcase/stripe.svg"),
          require("~/assets/showcase/ethereum.svg")
        ],
        headerimage: require("~/assets/showcase/crypto.svg"),
        label: "Stripe - ERC20",
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
          { src: require("~/assets/showcase/coinbase.svg"), to: "https://www.coinbase.com/" },
          { src: require("~/assets/showcase/kraken.svg"), to: "https://www.kraken.com/" },
          { src: require("~/assets/showcase/bitstamp.svg"), to: "https://www.bitstamp.net/" },
          { src: require("~/assets/showcase/binance.svg"), to: "https://www.binance.com/" }
        ],
        information: "Want a more in-depth look at how MESG can help connect tokens to payment processors? Head on over to our blog for the full story or take a look at our other resources.",
        resources: [
          { title: "Read the full article", to: "https://blog.mesg.com/directly-buy-crypto-with-fiat/?utm_source=mesg.com&utm_medium=usecase_link&utm_campaign=buy_crypto_usecase" },
          { title: "Github", to: "https://github.com/mesg-foundation/application-stripe-to-erc20" },
          { title: "Demo live", to: "http://stripe-erc20.demo.mesg.com:8080/" }
        ],
        cta: "https://github.com/mesg-foundation/application-stripe-to-erc20"
      }
    ]
  },

  community() {
    return [
      {
        icon: "fal fa-code",
        category: "Development",
        list: [
          "Improve the Engine <a href='https://github.com/mesg-foundation/engine/issues?q=label%3A%22help+wanted%22+is%3Aissue+is%3Aopen' target='_blank' class='link'>(1)</a> & <a href='https://github.com/orgs/mesg-foundation/projects/' target='_blank' class='link'>(2)</a>",
          "Feedback on <a href='https://github.com/mesg-foundation/engine/pulls' target='_blank' class='link'>PRs</a> & <a href='https://forum.mesg.com/c/development?utm_source=mesg.com&utm_medium=community_link&utm_campaign=forum_development' target='_blank' class='link'>Forum</a>",
          "Build apps using MESG",
          "..."
        ]
      },
      {
        icon: "fal fa-layer-plus",
        category: "Dev UX",
        list: [
          "Create <a href='https://blog.mesg.com/tag/tutorials/?utm_source=mesg.com&utm_medium=community_link&utm_campaign=tutorials_home' target='_blank' class='link'>tutorials</a>",
          "Improve the <a href='https://github.com/mesg-foundation/cli/issues?q=label%3A%22help+wanted%22+is%3Aissue+is%3Aopen' target='_blank' class='link'>CLI</a>",
          "..."
        ]
      },
      {
        icon: "fal fa-comment-alt-edit",
        category: "Communication",
        list: [
          "Write <a href='https://handbook.mesg.com/assets/#brand-assets' target='_blank' class='link'>articles</a> about MESG",
          "Create informative diagrams",
          "..."
        ]
      },
      {
        icon: "fal fa-pencil-ruler",
        category: "Design",
        list: [
          "Create MESG <a href='https://handbook.mesg.com/assets/#brand-assets' target='_blank' class='link'>illustrations</a>",
          "Create a GIF",
          "Create graphic concepts",
          "..."
        ]
      },
      {
        icon: "fal fa-bullhorn",
        category: "Marketing",
        list: [
          "Share on social media",
          "Create advertisements",
          "Add MESG to product sites",
          "..."
        ]
      },
      {
        icon: "fal fa-handshake-alt",
        category: "Partnerships",
        list: [
          "Introduce projects to MESG",
          "Test or use partner projects",
          "Send a collaboration idea",
          "..."
        ]
      },
      {
        icon: "fal fa-user-headset",
        category: "Support",
        list: [
          "Answer community questions",
          "Contribute on the <a href='https://forum.mesg.com/c/development?utm_source=mesg.com&utm_medium=community_link&utm_campaign=forum_development' target='_blank' class='link'>forum</a>",
          "Suggest best practices",
          "..."
        ]
      }
    ]
  },


  icons(_, { externalLinks }) {
    return {
      twitter: {
        to: externalLinks.twitter,
        icon: "fab fa-twitter",
        color: "twitter",
        description: "Engage with us",
      },
      github: {
        to: externalLinks.github,
        icon: "fab fa-github",
        color: "github",
        description: "Contribute",
      },
      telegram: {
        to: externalLinks.telegram,
        icon: "fab fa-telegram-plane",
        color: "telegram",
        description: "Community Chat",
      },
      forum: {
        to: externalLinks.forumSocial,
        icon: "fas fa-comments",
        color: "forum",
        description: "Help & Guidance",
      },
      discord: {
        to: externalLinks.discord,
        icon: "fab fa-discord",
        color: "discord",
        description: "Chat with us",
      },
      reddit: {
        to: externalLinks.reddit,
        icon: "fab fa-reddit-alien",
        color: "reddit",
        description: "General news",
      },
      blog: {
        to: externalLinks.blogSocial,
        icon: "fab fa-medium",
        color: "blog",
        description: "Check out the news",
      }
    }
  },

  forms() {
    return {
      addContribution: "bOJ0qz",
      editContribution: "AFQb2X",
      contactForm: "jLp6WZ"
    }
  },

  tutorials() {
    return {
      emailService: {
        title: "Email service",
        to: "https://blog.mesg.com/send-emails-with-sendgrid/?utm_source=mesg.com&utm_medium=getstarted_link&utm_campaign=tutorial_email_service"
      },
      erc20Service: {
        title: "ERC-20 service",
        to: "https://blog.mesg.com/listen-for-transfers-of-an-ethereum-erc20-token/?utm_source=mesg.com&utm_medium=getstarted_link&utm_campaign=tutorial_erc20_service"
      },
      erc20Notifier: {
        title: "ERC-20 notifier",
        to: "https://blog.mesg.com/receive-email-when-there-is-an-erc20-transfer/?utm_source=mesg.com&utm_medium=getstarted_link&utm_campaign=tutorial_erc20_notifier"
      },
      networkEngine: {
        title: "Create a network with multiple Engines",
        to: "https://blog.mesg.com/tutorial-create-a-network-with-multiple-engines/?utm_source=mesg.com&utm_medium=getstarted_link&utm_campaign=tutorial_multiple_engines"
      },
      processEmailerc20transfer: {
        title: "Create a process to receive an email when an ERC-20 transfer occurs",
        to: "https://blog.mesg.com/create-a-process-to-receive-an-email-when-an-erc20-transfer-occurs/?utm_source=mesg.com&utm_medium=getstarted_link&utm_campaign=tutorial_process_email"
      }
    }
  },

  externalLinks() {
    return {
      blogHome: "https://blog.mesg.com/?utm_source=mesg.com&utm_medium=home_link&utm_campaign=blog_home",
      blogFooter: "https://blog.mesg.com/?utm_source=mesg.com&utm_medium=footer_link&utm_campaign=blog_home",
      blogSocial: "https://blog.mesg.com/?utm_source=mesg.com&utm_medium=social_link&utm_campaign=blog_home",
      blogShowcase: "https://blog.mesg.com/?utm_source=mesg.com&utm_medium=showcase_link&utm_campaign=blog_home",
      forumFooter: "https://forum.mesg.com/?utm_source=mesg.com&utm_medium=footer_link&utm_campaign=forum_home",
      forumSocial: "https://forum.mesg.com/?utm_source=mesg.com&utm_medium=social_link&utm_campaign=forum_home",
      github: "https://github.com/mesg-foundation/",
      discord: "https://discordapp.com/invite/5tVTHJC",
      twitter: "https://twitter.com/mesgfoundation",
      telegram: "https://t.me/mesg_community",
      linkedin: "https://www.linkedin.com/company/mesg",
      facebook: "https://www.facebook.com/mesgfoundation",
      reddit: "https://www.reddit.com/r/MESG/",
      video: "https://www.youtube.com/embed/VjPG51iE_fk",
      press: "https://handbook.mesg.com/assets/",
      liteflowCTAHead: "http://liteflow.com/?utm_source=mesg.com&utm_medium=cta_header&utm_campaign=mesg_to_liteflow",
      liteflowHome: "http://liteflow.com/?utm_source=mesg.com&utm_medium=home_section&utm_campaign=mesg_to_liteflow",
      liteflowCTABottom: "http://liteflow.com/?utm_source=mesg.com&utm_medium=cta_bottom&utm_campaign=mesg_to_liteflow",
      roadmap: "https://github.com/orgs/mesg-foundation/projects/25",
      tokenUtility: "https://blog.mesg.com/token-utility-in-the-mesg-economy/?utm_source=mesg.com&utm_medium=token_page_cta&utm_campaign=token_utility"
    }
  },

  links() {
    return {
      home: "/",
      orchestrator: "/mesg-orchestrator",
      engine: "/mesg-sdk",
      marketplace: "/mesg-marketplace",
      token: "/token",
      foundation: "/foundation",
      showcase: "/showcase",
      contributions: "/contributions",
      faq: "/faq",
      usecase: "/usecase",
      policy: "/privacy-cookie-policy",
    }
  },

  menu(_, { links, externalLinks }) {
    return [{
      text: 'Technology',
      to: '#',
      subMenu: [
        { text: 'SDK', to: links.engine },
        { text: 'Services', to: links.marketplace },
        { text: 'Process', to: links.orchestrator },
        { text: 'Token', to: links.token }
      ]
    },
    { text: 'Showcase', to: links.showcase },
    { text: 'Github', to: externalLinks.github }
    ]
  }
}

