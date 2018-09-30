<template>
  <footer class="white">
  <div class="container-parent">
    <div class="container-child">
      <nav flex row space-between>
        <div class="footer" flex column hide-responsive>
          <MESGLogoVerticalPurple class="logo"/>
        </div>
        <div class="footer" flex column>
          <h3>Community</h3>
          <a href="https://medium.com/mesg"><i class="fab fa-medium-m"></i>Medium</a>
          <a href="https://github.com/mesg-foundation"><i class="fab fa-github-alt"></i>Github</a>
          <a href="https://forum.mesg.com/"><i class="fas fa-comments"></i>Forum</a>
          <a href="https://discord.gg/SaZ5HcE"><i class="fab fa-discord"></i>Discord</a>
        </div>
        <div class="footer" flex column>
          <h3>Follow us</h3>
          <a href="https://twitter.com/mesgfoundation"><i class="fab fa-twitter"></i>Twitter</a>
          <a href="https://www.linkedin.com/company/mesg/"><i class="fab fa-linkedin-in"></i>Linkedin</a>
          <a href="https://www.facebook.com/mesgfoundation/"><i class="fab fa-facebook-f"></i>Facebook</a>
        </div>
        <div class="footer" flex column mb0>
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

.container-parent {
  padding: 0;
}

a {
  font-size: 0.9em;
  font-weight: bold;
  color: #251440;
  color: var(--dark-blue-grey);
  text-decoration: none;
  margin-bottom: 1em;
}
a:hover {
  color: #9452ff;
  color: var(--lighter-purple);
  transition: 0.3s;
}

i {
  margin-right: 0.6em;
}

.logo {
  width: 136px;
  max-width: 136px;
  height: 180px;
  max-height: 180px;
}

@media only screen and (max-width: 768px) {
  .footer {
    margin-right: 1.2em;
    margin-bottom: 2.4em;
  }
}
@media only screen and (max-width: 414px) {
  .container-child {
      padding: 0;
  }
  nav {
    flex-direction: column;
    padding: 1.8em;
  }
  .footer {
    margin-bottom: 1.2em;
  }
}

</style>
