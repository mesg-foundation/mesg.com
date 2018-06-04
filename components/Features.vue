<template>
  <section>
    <div class="container">
      <h1>The right tool for all your needs</h1>
      <p>
        With MESG you will be able to create an application connected to any technology you want<br/>
        from traditional web service to Blockchain technologies with ease.
      </p>

      <div class="features">
        <aside>
          <nav>
            <a
              v-for="(feature, i) in features" :key="i"
              class="button"
              :class="extraClass(feature)"
              @click="currentFeature = feature">
              {{ feature.title }}
            </a>
          </nav>
        </aside>
        <main class="shadow light">
          <h2>{{ currentFeature.title }}</h2>
          <p v-html="currentFeature.description"></p>
          <div class="actions">
            <a href="https://docs.mesg.tech" class="button button--success">
              Get started 
            </a>
          </div>
        </main>
      </div>
    </div>
  </section>
</template>

<script>
const features = require("~/assets/features")
export default {
  data () {
    return {
      currentFeature: features[0]
    }
  },
  computed: {
    features() { return features }
  },
  methods: {
    extraClass(feature) {
      return {
        "shadow": this.currentFeature === feature,
        "shadow--soft": this.currentFeature !== feature
      }
    }
  }
}
</script>

<style scoped>
  .features {
    margin-top: 3em;
    display: flex;
    justify-content: center;
    text-align: left;
  }

  aside {
    width: 280px;
    margin: .5em;
    max-width: 100%;
  }

  aside a {
    display: block;
    margin-bottom: 1em;
  }

  main {
    width: 600px;
    margin: .5em;
    max-width: 100%;
    padding: 1.5em;
    display: flex;
    flex-direction: column;
    border-radius: 2px;
  }

  main p {
    flex: 1;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    margin-top: 1.25em;
  }
</style>
