<template>
  <section>
    <div class="container">
      <h2>The right tool for all your needs</h2>
      <p>
        With MESG, you will be able to create an application connected to any technology you want,<br/>
        from traditional web services to Blockchain technologies, with ease.
      </p>

      <div class="features">
        <select v-model="currentFeature">
          <option
            v-for="(feature, i) in features" :key="i"
            :value="feature">
            {{ feature.title }}
          </option>
        </select>
        <aside>
          <nav>
            <a
              v-for="(feature, i) in features" :key="i"
              class="button hover"
              :class="extraClass(feature)"
              @click="currentFeature = feature">
              {{ feature.title }}
              <span>▶</span>
            </a>
          </nav>
        </aside>
        <main class="shadow light">
          <h3>{{ currentFeature.title }}</h3>
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
    flex-wrap: wrap;
  }

  aside {
    width: 280px;
    margin: .5em;
    max-width: 100%;
  }

  select {
    display: none;
    width: 600px;
    max-width: 100%;
    margin: .5em;
    margin-bottom: 1em;
  }

  aside a {
    display: block;
    margin-bottom: 1em;
    display: flex;
    justify-content: space-between;
  }

  aside a span {
    transition: all 300ms;
    color: rgba(0,0,0,.1);
  }

  aside a:hover span {
    transform: translateX(2px);
  }

  main {
    width: 600px;
    margin: .5em;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 2px;
  }

  main p {
    flex: 1;
    padding: 1.5em;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    padding: 1.5em;
    margin-top: 1.25em;
  }
  
  @media only screen and (max-width: 944px) {
    aside {
      display: none;
    }
    select {
      display: block;
    }
  }
</style>
