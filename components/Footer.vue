<template>
  <footer hide-responsive class="white">
  <div class="container-parent">
    <div class="container-child">
      <nav flex row space-between>
        <div flex column>
          <MESGLogoVerticalPurple />
        </div>
        <div flex column>
          <h3>Community</h3>
          <a href="https://medium.com/mesg">Medium</a>
          <a href="https://github.com/mesg-foundation">Github</a>
          <a href="https://forum.mesg.com/">Forum</a>
          <a href="https://discord.gg/SaZ5HcE">Discord</a>
        </div>
        <div flex column>
          <h3>Developer Resources</h3>
          <a href="https://medium.com/mesg/mesg-core-v1-0-launch-a-new-era-89c534855413" target="_blank">What is MESG? Get started</a>
          <a href="https://github.com/mesg-foundation/core">Browse our source code on Github</a>
          <a href="https://docs.mesg.com">Read the documentation</a>
        </div>
      </nav>
    </div>
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
  border-top: solid 0.05em #cac5e4;
  border-top: solid 0.05em var(--light-blue-grey);
}

footer .container-parent {
  padding-top: 0;
  padding-bottom: 0;
}


a {
  font-size: 0.9em;
  font-weight: bold;
  color: #251440;
  color: var(--dark-blue-grey);
  text-decoration: none;
  margin-bottom: 1.2em;
}

svg {
  width: 9.8em;
  max-width: 9.8em;
}
</style>
