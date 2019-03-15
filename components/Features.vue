<template>
  <section>
  <div class="container-parent">
    <div class="container-child features" flex row space-between>
      <div third flex column hide-responsive>
        <SideMenu :items="menuItems" />
      </div>
      <div thirdtwo flex column>
        <div v-for="feature in features" :key="feature.id" :id="feature.id">
          <h2>{{feature.title}}</h2>
          <div class="separator-orange"></div>
          <img :src="feature.picture" :alt="feature.title" mt2>
          <div v-html="feature.text" mt1></div>
          <div class="separator"></div>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
const features = [
  {
    id: "rapid-integration",
    title: "Rapid feature integration",
    text: "<p class='caption'><em>Plug features into <strong>any</strong> application - we are even using MESG to build MESG itself.</em></p><p>The highly-interconnected nature of most applications can make testing out new technologies, functionalities and solutions inefficient and challenging. Even the removal of a single feature can require the complex reconfiguration of an entire application. </p><p>MESG Modules make prototyping and updates efficient, because all Modules are automatically compatible with any other Module or application. This means the addition or removal of any feature can be done easily, without heavy reconfiguration. </p><p>Connect to new features, blockchains or even custom software, including monolithic applications, through the MESG Engine. Update or test out features without needing to break your entire application.</p>",
    picture: require('~/assets/features/feature-integration.svg')
  },
  {
    id: "multi-language",
    title: "Multi-language applications",
    text: "<p class='caption'><em>MESG mixes a gRPC API and a container based module approach to offer the most flexibility to developers.</em></p><p>Language differences between products, features and teams can become a big setback when building new products. First, learning a language requires a time investment, then once a project’s language is chosen, teams are often forced to stick with it despite limitations. </p><p>MESG Modules featuring different programming languages or data formats can be connected to the MESG Engine, making adding new features with differing languages, or juggling between separate teams a non-issue.</p>",
    picture: require('~/assets/features/multi-language.svg')
  },
  {
    id: "event-driven",
    title: "Event-driven architecture",
    text: "<p class='caption'><em>Event-driven architecture allows any services to produce events and react to other with loosely coupled dependencies.</em></p><p>Today’s modular app-building methods often require the access of features from third-party technologies. Systems like SaaS providers typically restrict the functionalities that developers can access, however, all systems feature events. And events are easier to work with. </p><p>Using MESG Modules, you create any applications simply by connecting a third-party event to the execution of a Module. By design, MESG lets you easily have a reactive application that listens for events from any data source, whether it be a web service or a blockchain, allowing for simple and easy-to-maintain modular applications. </p>",
    picture: require('~/assets/features/event-driven.svg')
  },
  {
    id: "autonomous-workflows",
    title: "Autonomous workflows",
    text: "<p class='caption'><em>MESG features flow-based programming to create reactive applications with endless possibility.</em></p><p>Events on blockchains or other difficult-to-reach technologies can be easily combined into powerful workflows using the MESG Engine. </p><p>Creating event workflows with blockchains can make atomic swaps, sidechain or lightning network deployment fast and easy. These features can make businesses more efficient and profitable, or add entirely new business cases that were not previously possible.</p><p>React to Ethereum transactions being processed. Emit user data to SendGrid to enhance customer onboarding. Automate bookkeeping processes using QuickBooks. The possibilities are endless.</p>",
    picture: require('~/assets/features/autonomous-workflows.svg')
  },
  {
    id: "hybrid-decentralized-applications",
    title: "Hybrid decentralized applications",
    text: "<p class='caption'><em>MESG’s decentralized network will enable you to run centralized services in decentralized trustless environments.</em></p><p>Adding features to decentralized products often means compromising on the values of decentralization itself, as connectors are most often centralized. </p><p>MESG applications can be created using the latest paradigms of programming to create flexible and scalable applications. This flexibility extends beyond traditional features, and into decentralized network and blockchain support.  </p><p>When the full decentralized network is released (Q1 of 2020), MESG’s flexibility will extend to decentralization itself. You’ll be able to connect decentralized components together in a decentralized way. Centralizing critical features is no longer required just to add third-party features. </p>",
    picture: require('~/assets/features/decentralized-applications.svg')
  },
  {
    id: "scalable",
    title: "Scalable applications",
    text: "<p class='caption'><em>The mix of Event-Driven Architecture and a decentralized network provides a highly scalable and redundant infrastructure</em></p><p>Centralized app infrastructures are inherently limited. Servers and local networks can only accommodate so much, plus maintaining your own server can be a costly endeavor.</p><p>To make matters even more difficult, compatibility issues throughout software often mean that choosing a technology or infrastructure limits you to a predefined future trajectory. Restricting possible integrations limits vertical and horizontal scalability.</p><p>Truly serverless applications are the end goal of MESG. Upon the release of MESG’s decentralized network (Q1 2020),  your application can be distributed in a trustless way giving your application unique properties like limitless scalability.</p>",
    picture: require('~/assets/features/scalable-applications.svg')
  }
]

import SideMenu from '~/components/SideMenu'

export default {
  components: {
    SideMenu
  },

  computed: {
    features() {
      return features
    },

    menuItems() {
      return this.features.map(({ id, title }) => {
        return { id, text: title }
      })
    }
  }
}
</script>

<style scoped>
.separator {
  margin-top:2.4em;
  margin-bottom: 2.4em;
  border: dotted 0.5px #d6d0e7;
}

.separator-orange {
  width: 60px;
  height: 6px;
  border-radius: 3px;
  background-color:#ffa744;
  background-color: var(--Orange-cta);
}

@media only screen and (max-width: 768px) {
  [third] { width: calc(33% - 2.4em) }
  [thirdtwo] { width: calc(66% - 2.4em) }
}

@media only screen and (max-width: 767px) {
  [third] { width: 100%; }
  [thirdtwo] { width: 100%; }
}

@media only screen and (max-width: 414px) {
  .separator {
    margin-top:1.8em;
    margin-bottom: 1.8em;
  }
  [mt2] { margin-top: 1.8em!important; }
}

@media only screen and (max-width: 1023px) {
  [thirdtwo] { width: 100%; }
}
</style>

<style>
.features p {
  margin-bottom: 1em;
}
</style>
