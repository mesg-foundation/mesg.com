export const getters = {
  products(_, { links }) {
    return [
      {
        id: "engine",
        title: "MESG Engine",
        img: require("~/assets/product/engine/engine.png"),
        description:
          "The MESG Engine powers connectivity between Modules and other devices and applications. Control the flow of data and level of security between your whole stack of connected technologies.",
        features: {
          primary: [
            { src: require('~/assets/product/engine/mesg-tech.png'), title: "Integrate complicated tech easily", description: "Any API or microservice can be connected to any app or workflow. Even connect apps to hard-to-reach technologies like blockchains, IoT devices, or custom software.<br><br>The Engine manages and forwards events between all components so each component can stand on its own, making it simple to add, remove or update any component.", to: links.getStarted, action: "Quick start" },
            { src: require("~/assets/product/engine/mesg-development.png"), title: "No wasted development hours", description: "A fundamental principle at MESG is DRY: Don’t Repeat Yourself. Core allows you to reuse any app component; and not just from your apps, but from the community’s apps too.<br><br>After components are built, either keep them private, or share them and earn in the Marketplace.", to: links.marketplace, action: "Go to the Marketplace" }
          ],
          secondary: [
            { src: require("~/assets/product/engine/event-driven.png"), title: "Event-driven architecture", description: "Building apps that react to real-world events is the efficient way to manage hard-to-reach technologies like blockchains or IoT devices. Your apps remain lightweight, reactive and easy to maintain." },
            { src: require("~/assets/product/engine/divergent-tech.png"), title: "Connect divergent tech", description: "MESG Modules can connect to nearly anything, including APIs, decentralized networks or standalone services. Then the MESG Engine manages interaction between all Modules and Applications." },
            { src: require("~/assets/product/engine/optimize.png"), title: "Optimize development hours", description: "The MESG Engine makes development easy by managing communication between all Modules, applications and devices on your behalf, resulting a development and maintenance process that’s far less time consuming." }
          ]
        },
        usecase: [
          { src: require("~/assets/product/engine/multi-language.png"), title: "Multi-language apps", description: "Language differences between products, features and teams can cause big setbacks when building and maintaining products. Luckily, Modules featuring any programming language or data format can be managed by the MESG Engine." },
          { src: require("~/assets/product/engine/fast-feature.png"), title: "Fast feature integration", description: "Most apps today are complex and highly interconnected, making updates challenging and inefficient. The MESG Engine allows features to be added, removed or updated without affecting the other parts of the application." },
          { src: require("~/assets/product/engine/workflow.png"), title: "Autonomous workflows", description: "Events on difficult-to-reach technologies can be easily combined into powerful workflows using the MESG Engine. React to Ethereum transactions being processed. Deploy and manage sidechains. Automate bookkeeping with QuickBooks. The possibilities are endless. " },
          { src: require("~/assets/product/engine/scalable.png"), title: "Easily-scalable apps", description: "All servers and local networks have limited bandwidth, and maintaining your own servers can be a costly endeavor. Soon, MESG will be decentralized, so applications can be distributed in an autonomous, trustless way, giving your apps effortless scalability." }
        ],
        action: "Discover the MESG Engine"
      },
      {
        id: "marketplace",
        title: "MESG Marketplace",
        img: require("~/assets/product/marketplace/marketplace.png"),
        description:
          "A decentralized marketplace to connect buyers looking to save time in development with sellers earning tokens for the reuse of their code.",
        features: {
          primary: [
            { src: require('~/assets/product/marketplace/marketengine.png'), title: "Marketplace and Engine", description: "Our Marketplace is built to be complementary to the free, open-source MESG Engine. All Modules in the Marketplace come automatically compatible with the Engine.<br><br>No more installing libraries or learning data formats before adding new features. Plug any feature or component into any app.", to: links.marketplace, action: "Go to the Marketplace" },
            { src: require('~/assets/product/marketplace/decentralized.png'), title: "Decentralized executions", description: "The Marketplace will soon be decentralized, with all Modules and applications interacting in a variably decentralized way.<br><br>When executions are not dependent on a single server or machine, apps can become unstoppable, distributed, and always available.", to: links.home, action: "Our solutions" }
          ],
          secondary: [
            { src: require("~/assets/product/marketplace/reuse.png"), title: "Reuse your work", description: "Connecting to devices, blockchains and APIs is time consuming. Reuse more of your applications so you can stop repeating yourself." },
            { src: require("~/assets/product/marketplace/earn.png"), title: "Earn while you sleep", description: "All modular app components listed on the Marketplace can earn MESG Tokens each time they are used within any application." },
            { src: require("~/assets/product/marketplace/economy.png"), title: "Economy of development", description: "Earn tokens by building or hosting apps. Or, save time building, updating, or expanding apps using Modules from the Marketplace." }
          ]
        },
        usecase: [
          { src: require("~/assets/product/marketplace/build.png"), title: "Build your own marketplace", description: "Add a decentralized marketplace to any existing solution. Because the Engine allows interoperability between any system and feature, it’s a perfect solution to build and manage your own marketplace within your product." },
          { src: require("~/assets/product/marketplace/hybrid.png"), title: "Hybrid decentralized apps", description: "We know that some data and processes are best kept centralized, but others should be decentralized. This is why MESG gives builders complete control over centralization, even offering fully decentralized executions between decentralized networks." },
          { src: require("~/assets/product/marketplace/workflow.png"), title: "Autonomous workflows", description: "Modules from the Marketplace be easily combined into powerful workflows and apps. React to Ethereum transactions being processed. Deploy and manage sidechains. Automate bookkeeping with QuickBooks. The possibilities are endless." },
          { src: require("~/assets/product/marketplace/open.png"), title: "Open marketplace", description: "The Marketplace is completely open, decentralized and self-regulating, so no single entity has control over participants or submissions. This gives all equal advantage to create the most useful and efficient Modules. The more Modules are used, the more they earn." }
        ],
        action: "Discover the MESG Marketplace"
      }
    ]
  },

  articles() {
    return [
      { id: "forbes", title: "Blockchain Or Bust: Businesses Need To Seek A Middle Ground", img: require("~/assets/press/forbes.png") },
      { id: "chipin", title: "Three Ways to Reduce the Cost of Blockchain Implementation in Your Business", img: require("~/assets/press/chipin.png") },
      { id: "finance", title: "What’s Holding Back Blockchain Adoption? The Answer is Simple – Connectivity", img: require("~/assets/press/finance-magnates.png") },
    ]
  },

  externalLinks() {
    return {
      documentation: { title: "Documentation", to: "https://docs.mesg.com/", icon: "doc" },
      marketplace: { title: "Marketplace", to: "https://marketplace.mesg.com/", icon: "marketplace" },
      github: { title: "Github", to: "https://github.com/mesg-foundation/", icon: "github" }
    }
  },

  links() {
    return {
      enterprise: "/",
      engine: "/engine",
      marketplace: "/marketplace",
      token: "/",
      foundation: "/",
      getStarted: "/",
      showcase: "/",
      partners: "/"
    }
  }
}
