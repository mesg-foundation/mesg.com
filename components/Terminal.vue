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
          <div>$&nbsp;<span class="prompt">{{ cmd.input }}</span></div>
          <div :class="cmd.class" v-html="cmd.output"></div>
        </div>
      </div>
      <a v-if="!play" @click="play = !play">▶</a>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      delay: 20,
      play: false,
      history: []
    }
  },
  computed: {
    commands () {
      return [{ 
        input: 'mesg-core service deploy mesg-examples/webhook',
        class: 'green',
        output: 'Service "Webhook" deployed with the ID: 331rjkq3qi3ugr31iurib13',
      }, { 
        input: 'mesg-core service deploy mesg-examples/sendgrid',
        class: 'green',
        output: 'Service "Sendgrid" deployed with the ID: 3rbi318y4feqt9hou24t24t',
      }, {
        input: 'cat application.yml',
        type: 'file',
        output: `<strong>source:
<br/>&nbsp;&nbsp;service: '331rjkq3qi3ugr31iurib13'
<br/>&nbsp;&nbsp;event: onRequest
<br/>tasks:
<br/>&nbsp;&nbsp;sendInvitationEmail:
<br/>&nbsp;&nbsp;&nbsp;&nbsp;service: '3rbi318y4feqt9hou24t24t'
<br/>&nbsp;&nbsp;&nbsp;&nbsp;task: send
<br/>&nbsp;&nbsp;&nbsp;&nbsp;data:
<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;email: $source.data.email</strong>`
      }, {
        input: 'mesg-core application start application.yml',
        class: 'green',
        output: 'Your application is up and running'
      }, {
        prompt: {
          email: 'What is your email'
        },
        input: `curl https://address-of-my-server.com -d email="{{email}}"`,
        class: 'green',
        output: 'Request executed and invitation email sent'
      }]
    }
  },
  watch: {
    async play () {
      if (!this.play) {
        this.history = []
        return
      }
      const sleep = duration => new Promise(resolve => setTimeout(resolve, duration))
      const updateHistory = cmd => (this.history = [
        ...this.history.slice(0, this.history.length - 1),
        cmd
      ])
      for (const cmd of this.commands) {
        this.history.push({})
        let input = cmd.input
        const prompts = cmd.prompt || {}
        for (const key in prompts) {
          const value = prompt(prompts[key])
          input = input.replace(`{{${key}}}`, value)
        }
        for (const i in input.split("")) {
          updateHistory({ input: input.slice(0, i) })
          await sleep(this.delay)
        }
        updateHistory({ input })
        await sleep(this.delay * 10)
        updateHistory({ ...cmd, input })
      }
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

a {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  height: 100%;
  width: 100%;
  background: rgba(255,255,255,0.25);
  text-align: center;
  font-size: 10em;
  padding-top: .5em;
  cursor: pointer;
}

.gray { color: gray; }
.green { color: rgba(12,168,108,1);}
</style>
