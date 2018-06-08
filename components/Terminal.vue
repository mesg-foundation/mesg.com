<template>
  <div class="terminal-window">
    <nav>
      <span></span>
      <span></span>
      <span></span>
    </nav>
    <section>
      <div class="history">
        <div v-for="(cmd, i) in history" :key="i">
          <div>
            $&nbsp;<span class="prompt">{{ cmd.input }}</span>
            <input
              v-if="cmd.wait"
              @keyup.enter="handleKey()"
              @click="next()"
              value="█"
              class="wait"
              type="submit"/>
          </div>
          <div :class="cmd.class" v-html="cmd.output"></div>
        </div>
      </div>
      <a class="start" v-if="!play" @click="start()">▶</a>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    commands: {
      type: Array,
      required: true
    },
    delay: {
      type: Number,
      default: 20
    }
  },
  data () {
    return {
      play: false,
      history: [],
      step: 0,
      currentInput: '',
      writting: false
    }
  },
  methods: {
    start() {
      this.play = true
      this.applyCommand(this.step)
    },
    sleep(duration) { return new Promise(resolve => setTimeout(resolve, duration)) },
    updateHistory (cmd) {
      this.history = [
        ...this.history.slice(0, this.history.length - 1),
        cmd
      ]
    },
    handleKey(event) {
      if (this.writting) { return }
      debugger
    },
    next() {
      const cmd = this.commands[this.step]
      this.updateHistory({ ...cmd, input: this.currentInput })
      this.step = this.step + 1 
      this.applyCommand()
    },
    async applyCommand() {
      if (this.step >= this.commands.length) { return }
      this.writting = true
      const cmd = this.commands[this.step]
      this.history.push({})
      this.currentInput = cmd.input
      for (const key in (cmd.prompts || {})) {
        const value = prompt(cmd.prompts[key])
        this.currentInput = this.currentInput.replace(`{{${key}}}`, value)
      }
      for (const i in this.currentInput.split("")) {
        this.updateHistory({ input: this.currentInput.slice(0, i) })
        await this.sleep(this.delay)
      }
      this.writting = false
      this.updateHistory({ input: this.currentInput, wait: true })
      setTimeout(() => this.$el.querySelector('.wait').focus(), 100)
    }
  }
}
</script>

<style scoped>
.terminal-window {
  text-align: left;
  width: 640px;
  height: 460px;
  border-radius: 10px;
  margin: auto;
  position: relative;
  max-width: 100%;
}

nav {
  background: #E0E8F0;
  height: 30px;
  border-radius: 8px 8px 0 0;
  padding-left: 10px;
}

nav span {
  width: 12px;
  height: 12px;
  margin: 10px 4px 0 0;
  display: inline-block;
  border-radius: 8px;
  background: #E5C30F;
}

nav span:first-child {
  background: #3BB662;
}

nav span:last-child {
  background: #E75448;
}

section {
  color: white;
  font-family: Menlo, Monaco, "Consolas", "Courier New", "Courier";
  font-size: 11pt;
  line-height: 1.5;
  background: #30353A;
  padding: 10px;
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  top: 30px;
  bottom: 0;
  overflow: auto;
}

.wait {
  background: none;
  border: none;
  outline: none;
  color: white;
  font-family: Menlo, Monaco, "Consolas", "Courier New", "Courier";
  font-size: 11pt;
  line-height: 1.5;
  animation-name: blink;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  cursor: pointer;
}

a.start {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  height: 100%;
  width: 100%;
  background: rgba(255,255,255,0.15);
  color: white;
  text-align: center;
  font-size: 10em;
  padding-top: .5em;
  cursor: pointer;
}

.gray { color: gray; }
.green { color: rgba(12,168,108,1);}

@keyframes blink {
  from {opacity: 1;}
  50% {opacity: 0;}
  to {opacity: 1;}
}
</style>
