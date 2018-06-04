<template>
  <div class="discord">
    <div class="popup" :class="{ open }">
      <iframe
        :src="url"
        :width="width"
        :height="height"
        allowtransparency="true"
        frameborder="0">
      </iframe>
    </div>
    <a @click="toggle">
      <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 245 240"><style>.st0{fill:#FFFFFF;}</style><path class="st0" d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"/><path class="st0" d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"/></svg>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      required: true
    },
    theme: {
      type: String,
      default: 'dark'
    },
    width: {
      type: Number,
      default: 350
    },
    height: {
      type: Number,
      default: 500
    }
  },
  data() {
    return {
      open: false
    }
  },
  computed: {
    url () {
      return `https://discordapp.com/widget?id=${this.id}&theme=${this.theme}`
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  }
}
</script>

<style scoped>
  a {
    cursor: pointer;
    position: fixed;
    bottom: 1em;
    right: 1em;
    width: 4em;
    height: 4em;
    background: #7289DA;
    padding: 0.75em;
    border-radius: 50%;
    box-shadow: 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07);
    border: solid 1px rgb(96, 123, 219);
  }
  .popup {
    position: fixed;
    bottom: 5.5em; 
    right: 1em; 
    opacity: 0;
    right: -1000px;
    transition: opacity 300ms, transform 300ms;
    transform: translateY(-20px);
  }

  .popup.open {
    transform: translateY(0px);
    right: 1em; 
    opacity: 1;
  }
</style>
