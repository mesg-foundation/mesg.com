export const getters = {
  products() {
    return [
      {
        id: "engine",
        title: "MESG Engine",
        img: require("~/assets/product/engine/engine.png"),
        description:
          "The MESG Engine powers connectivity between Modules and other devices and applications. Control the flow of data and level of security between your whole stack of connected technologies.",
        features: [
          { src: require("~/assets/product/engine/event-driven.png"), title: "Event-driven architecture" },
          { src: require("~/assets/product/engine/divergent-tech.png"), title: "Connect divergent tech" },
          { src: require("~/assets/product/engine/optimize.png"), title: "Optimize development hours" }
        ],
        action: "Discover the MESG Engine"
      },
      {
        id: "marketplace",
        title: "MESG Marketplace",
        img: require("~/assets/product/marketplace/marketplace.png"),
        description:
          "A decentralized marketplace to connect buyers looking to save time in development with sellers earning tokens for the reuse of their code.<br/><br/>",
        features: [
          { src: require("~/assets/product/marketplace/reuse.png"), title: "Reuse your work" },
          { src: require("~/assets/product/marketplace/earn.png"), title: "Earn while you sleep" },
          { src: require("~/assets/product/marketplace/economy.png"), title: "Economy of development" }
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
  }
}
