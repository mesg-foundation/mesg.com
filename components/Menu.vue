<template>
  <nav  hide-responsive>
    <div class="container" p0 flex row space-between justify-center align-center>
      <a href="/">
        <MESGLogoHorizontalWhite class="logo" />
      </a>
      <div>
        <a mr2 href="#team">Team</a>
        <a mr2 href="#roadmap">Roadmap</a>
        <a mr2 href="https://github.com/mesg-foundation/awesome#readme" target="_blank">Marketplace</a>
        <a mr2 href="https://docs.mesg.com">Documentation</a>
        <a mr2 href="https://forum.mesg.com">Get Help</a>
        <Button href="https://docs.mesg.com/guide/start-here/quick-start-guide.html" small primary>Get Started</Button>
      </div>
    </div>
  </nav>
</template>

<script>
import Button from '~/components/Button'
import MESGLogoHorizontalWhite from '~/components/MESGLogoHorizontalWhite'
export default {
  components: {
    Button,
    MESGLogoHorizontalWhite
  }
}
</script>


<style scoped>
nav {
  padding: 1.8em 2.4em;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: solid 0.025em #491e8c;
  border-bottom: solid 0.025em var(--purple);
}

a {
  font-size: 1em;
  font-weight: bold;
  height: 2.4em;
  text-decoration: none;
  color: #ffffff;
  color: var(--white-content);
}

a:hover {
  color: #9452ff;
  color: var(--lighter-purple);
  transition: 0.2s ease-in-out;
}


code {
  display: block;
  background: black;
  padding: 0.6em;
  color: white;
  text-align: center;
}

.logo {
  width: 50%;
  max-width: 100%;
}

@media only screen and (max-width: 414px) {
  nav {
    width: 100%;
    padding: 1.8em;
  }
}

</style>
