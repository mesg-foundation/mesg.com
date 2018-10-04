<template>
  <nav  hide-responsive>
    <div class="container" p0 flex row space-between>
      <a href="/">
        <IconBrandmarkWhite class="brandmark" />
      </a>
      <div>
        <a mr2 href="#overview">Overview</a>
        <a mr2 href="https://github.com/mesg-foundation/awesome#readme" target="_blank">Marketplace</a>
        <a mr2 href="https://docs.mesg.com">Documentation</a>
        <a mr2 href="https://forum.mesg.com">Get Help</a>
        <Button href="https://docs.mesg.com/guide/start-here/quick-start-guide.html" small purple>Get Started</Button>
      </div>
    </div>
  </nav>
</template>

<script>
import Button from '~/components/Button'
import IconBrandmarkWhite from '~/components/IconBrandmarkWhite'
export default {
  components: {
    Button,
    IconBrandmarkWhite
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
}

a {
  font-size: 1em;
  font-weight: bold;
  height: 2.4em;
  text-decoration: none;
  color: #f1f0f8;
  color: var(--pale-grey);
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

.brandmark {
  width: 2.4em;
  max-width: 2.4em;
}
@media only screen and (max-width: 414px) {
  nav {
    width: 100%;
    padding: 1.8em;
  }
}

</style>
