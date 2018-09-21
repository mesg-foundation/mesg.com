<template>
  <nav>
    <div class="container" p0 flex row space-between>
      <a href="/">
        <IconBrandmarkWhite class="brandmark" />
      </a>
      <div hide-responsive>
        <a mr1 href="#overview">Overview</a>
        <a mr1 href="https://github.com/mesg-foundation/awesome#readme" target="_blank">Marketplace</a>
        <a mr1 href="https://docs.mesg.com">Documentation</a>
        <a mr1 href="https://forum.mesg.com">Get Help</a>
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
  padding: 30px 40px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

a {
  font-size: 17px;
  font-weight: bold;
  height: 20px;
  text-decoration: none;
  color: #f1f0f8;
  color: var(--pale-grey);
}

p a {
  font-weight: bold;
  color: #251440;
  color: var(--dark-blue-grey);
}

code {
  display: block;
  background: black;
  padding: 10px;
  color: white;
  text-align: center;
}

.brandmark {
  width: 40px;
  max-width: 40px;
}
@media only screen and (max-width: 414px) {
  nav {
    width: 100%;
    padding: 30px;
  }
}

</style>
