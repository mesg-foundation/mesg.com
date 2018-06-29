<template>
  <section>
    <div class="container">
      <div class="marging">
        <h2>The right tool for all your needs</h2>
        <p>
          With MESG, you can create an application connected to any technology you’d like,<br/>
          from traditional web services to Blockchain technologies.
        </p>
      </div>

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
            <a href="https://docs.mesg.com" class="button button--success">
              Get started →
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
  .marging {
    margin: 0 20px;
  }
  .container {
    padding: 0
  }
  .features {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    text-align: left;
    flex-wrap: wrap;
  }

  aside {
    margin: 20px;
    max-width: 100%;
    width: 280px;
  }

  select {
    display: none;
    width: 750px;
    max-width: 100%;
    margin: 20px;
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
    margin: 20px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 2px;
    width: 720px
  }

  main h3 {
    padding: 20px;
  }

  main p {
    flex: 1;
    padding: 20px;
    text-align: justify;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    padding: 20px;
  }
  
  @media only screen and (max-width: 1079px) {
    aside {
      display: none;
    }
    select {
      display: block;
    }
    main {
      width: 750px;
    }
  }
</style>
