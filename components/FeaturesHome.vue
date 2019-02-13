<template>
  <section>
    <div class="container-parent">
      <div class="container-child" flex row justify-center>
        <div class="content" flex column justify-center align-center>
          <h2>What can MESG do for you?</h2>
          <div class="separator-orange" mb2></div>
        </div>
        <nav flex row justify-center align-center>
          <nuxt-link v-for="feature in featuresicon" :key="feature.id" :id="feature.id" :to="feature.link" class="entry">
            <div flex column justify-center align-center>
              <img :src="feature.icon" :alt="feature.title" class="icon">
              <p mt1>{{feature.title}}</p>
            </div>
          </nuxt-link>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
const featuresicon = [
  {
    id: "rapid-integration",
    title: "Rapid feature integration",
    icon: require('~/assets/icons/features-integration.svg'),
    link: "/features#rapid-integration"
  },
  {
    id: "multi-language",
    title: "Multi-language applications",
    icon: require('~/assets/icons/multi-language.svg'),
    link: "/features#multi-language"
  },
  {
    id: "event-driven",
    title: "Event-driven architecture",
    icon: require('~/assets/icons/event-driven.svg'),
    link: "/features#event-driven"
  },
  {
    id: "autonomous-workflows",
    title: "Autonomous workflows",
    icon: require('~/assets/icons/workflows.svg'),
    link: "/features#autonomous-workflows"
  },
  {
    id: "hybrid-decentralized-applications",
    title: "Decentralized applications",
    icon: require('~/assets/icons/decentralized.svg'),
    link: "/features#hybrid-decentralized-applications"
  },
  {
    id: "scalable",
    title: "Scalable applications",
    icon: require('~/assets/icons/scalability.svg'),
    link: "/features#scalable"
  }
]
export default {
  computed: {
    featuresicon () {
      return featuresicon
    }
  }
}
</script>

<style scoped>

h2 {
  text-align: center;
}

p {
  text-decoration: none;
  text-align:center;
}

svg{
  margin-top:0;
}

.icon {
  max-width: 50px;
}

.entry {
  border-radius:0.3em;
  text-decoration: none;
  width: 200px;
  height: 170px;
  padding:1.8em;
}
.entry:hover {
  position:relative;
  transition: calc(var(--animation-speed) * 0.1s) ease;
  background-color: #ffffff;
  background-color: var(--white-content);
  box-shadow: 0 0 40px 2px rgba(0, 0, 0, 0.07);
  cursor: pointer;
}

@media only screen and (max-width: 414px) {
  .entry {
    width: 100%;
    height: auto;
  }
}

</style>
