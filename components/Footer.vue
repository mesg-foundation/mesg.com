<template>
  <footer hide-mobile class="white">
    <div class="container">
      <nav flex row space-between>
        <div flex column>
          <MESGLogoVerticalPurple />
        </div>
        <div flex column>
          <h3 mb1>Community</h3>
          <a href="https://medium.com/mesg">Medium</a>
          <a href="https://github.com/mesg-foundation">Github</a>
          <a href="https://forum.mesg.com/">Forum</a>
          <a href="https://discord.gg/SaZ5HcE">Discord</a>
        </div>
        <div flex column>
          <h3 mb1>Developer Resources</h3>
          <a href="https://medium.com/mesg/mesg-core-v1-0-launch-a-new-era-89c534855413" target="_blank">What is MESG? Get started</a>
          <a href="https://github.com/mesg-foundation/core">Browse our source code on Github</a>
          <a href="https://docs.mesg.com">Read the documentation</a>
        </div>
      </nav>
    </div>
  </footer>
</template>

<script>
import MESGLogoVerticalPurple from '~/components/MESGLogoVerticalPurple'
export default {
  components: {
    MESGLogoVerticalPurple
  }
}
</script>

<style scoped>
footer {
  border-top: solid 1px #cac5e4;
  border-top: solid 1px var(--light-blue-grey);
}

footer .container {
  padding-top: 40px;
  padding-bottom: 40px;
}

a {
  font-size: 15px;
  font-weight: bold;
  color: #251440;
  color: var(--dark-blue-grey);
  text-decoration: none;
  margin-bottom: 20px;
}
</style>
