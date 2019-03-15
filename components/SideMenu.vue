<template>
  <nav v-sticky="shouldStick" sticky-offset="offset" sticky-side="top" flex column class="sidebar">
    <a v-for="item in items" :key="item.id" :href="`#${item.id}`">{{item.text}}</a>
  </nav>
</template>

<script>
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

  props: {
    items: {
      type: Array,
      required: true
    }
  },
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
  border-radius: 1px;
}

@media only screen and (max-width: 768px) {
  a {
    font-size: 1em;
  }
}

@media only screen and (max-width: 767px) {
  a {
    font-size: 1em;
  }
}
</style>
