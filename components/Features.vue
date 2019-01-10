<template>
  <section>
  <div class="container-parent">
    <div class="container-child features" flex row space-between>
      <div third flex column hide-responsive>
        <nav v-sticky="shouldStick" sticky-offset="offset" sticky-side="top" flex column class="sidebar">
          <a v-for="feature in features" :key="feature.id" :href="`#${feature.id}`">{{feature.title}}</a>
        </nav>
      </div>
      <div thirdtwo flex column>
        <div v-for="feature in features" :key="feature.id" :id="feature.id">
          <h2>{{feature.title}}</h2>
          <div class="separator-orange"></div>
          <div v-html="feature.text" mt2></div>
          <div class="separator"></div>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
const features = require("~/assets/features")
export default {
  data () {
    return {
      offset: { top: 70 },
      shouldStick: true,
    }
  },
  mounted () {
    // find out what size the window is loaded in and configure the stickiness.
    this.$nextTick(() => { this.setShouldStick() })

    // configure stickiness on each change to window's size.
    window.addEventListener('resize', this.setShouldStick)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setShouldStick)
  },
  methods: {
    // setShouldStick ensures to make sidebar sticky when it's not vertically
    // aligned with the content.
		setShouldStick() {
      this.shouldStick = document.documentElement.clientWidth > 768
		},
  },
  computed: {
    features () {
      return features
    }
  }
}
</script>


<style scoped>

.sidebar {
  border: solid 1px #d6d0e7;
  border-radius:4px;
  margin-bottom: 1.8em;
}

a {
  font-size: 1.2em;
  font-weight: bold;
  text-decoration: none;
  padding: 1.2em;
  color: #57577e;
  color: var(--dark-grey);
  border-bottom: dotted 1px #d6d0e7;
}
a:hover {
  opacity:0.8;
  transition: calc(var(--animation-speed) * 0.1s) ease;
  border-left: solid 2px #9452ff;
  border-radius:1px;
}

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
  a {
    font-size: 1em;
  }
  [third] { width: calc(33% - 2.4em) }
  [thirdtwo] { width: calc(66% - 2.4em) }
}
@media only screen and (max-width: 767px) {
  a {
    font-size: 1em;
  }
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
