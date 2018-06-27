<template>
  <span :class="{ blink, selected }">{{ word }}</span>
</template>

<script>
export default {
  props: {
    words: {
      type: Array,
      required: true
    },
    duration: {
      type: Number,
      default: 100
    }
  },
  data () {
    return {
      word: '',
      wordIndex: -1,
      letterIndex: 0,
      forward: true,
      blink: true,
      selected: false
    }
  },
  methods: {
    sleep (duration) {
      return new Promise((resolve, reject) => setTimeout(resolve, duration))
    },
    async nextStep () {
      // New word
      if (this.letterIndex === 0) {
        this.wordIndex = (this.wordIndex + 1) % this.words.length
        await this.sleep(this.duration * 3)
      }
      // End of the typing of the word
      if (this.word.length === this.words[this.wordIndex].length) {
        await this.sleep(this.duration * 10)
        this.selected = true
        await this.sleep(this.duration * 5)
        this.selected = false
        this.letterIndex = 0
        this.wordIndex = (this.wordIndex + 1) % this.words.length
      }
      this.letterIndex++
      this.word = this.words[this.wordIndex].slice(0, this.letterIndex)
      await this.sleep(this.duration)
      this.nextStep()
    }
  },
  mounted () {
    this.nextStep()
    setInterval(() => this.blink = !this.blink, 750)
  }
}
</script>

<style scoped>
span {
  color: #FFCB1B;
}
span::after {
  display: inline-block;
  width: 2px;
  height: 1.15em;
  content: "";
  margin-left: .1em;
  margin-bottom: -.2em;
  background: #FFCB1B;
  opacity: 0;
}
span.blink::after {
  opacity: 1;
}
span.selected {
  background: rgba(255, 255, 255, .3);
  padding-left: .1em;
  margin-left: -.1em;
}
</style>
