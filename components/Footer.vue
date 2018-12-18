<template>
  <footer>
    <div class="container-parent">
      <div class="container-child" flex row space-between justify-center align-center>
        <div class="logo" flex row space-between align-center>
          <MESGLogoHorizontalPurple />
          <div class="incubator">
            <p>Incubated by</p>
            <img src="~/assets/Partners/Yellow.png" alt="Yellow" class="yellow" mr1>
          </div>
        </div>
        <div class="container-nav" flex row align-center>
          <nuxt-link to="/faq" class="nav" mr1>FAQ</nuxt-link>
          <a href="https://medium.com/mesg/mesg-core-v1-0-launch-a-new-era-89c534855413" target="_blank" class="nav" mr1>What is MESG?</a>
          <a href="https://docs.mesg.com/" target="_blank" class="nav" mr1>Documentation</a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdUymFdlMjaqcjr2ruRvxPQi1CbDp7a9cS-_3wxNvmg3UaR9Q/viewform" target="_blank" class="nav">Get in touch</a>
        </div>
      </div>
      <div class="container-child separator"  flex row space-between column-reverse-responsive>
          <div flex row>
            <p class="copyright">
              Copyright MESG Foundation 2018
            </p>
          </div>
          <div class="social" flex row >
            <a mr1 href="https://medium.com/mesg" target="_blank"><i class="fab fa-medium-m"></i></a>
            <a mr1 href="https://github.com/mesg-foundation" target="_blank"><i class="fab fa-github"></i></a>
            <a mr1 href="https://forum.mesg.com/" target="_blank"><i class="fas fa-comments"></i></a>
            <a mr1 href="https://discordapp.com/invite/SaZ5HcE" target="_blank"><i class="fab fa-discord"></i></a>
            <a mr1 href="https://twitter.com/mesgfoundation" target="_blank"><i class="fab fa-twitter"></i></a>
            <a mr1 href="https://www.linkedin.com/company/mesg/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
            <a href="https://www.facebook.com/mesgfoundation/" target="_blank"><i class="fab fa-facebook-f"></i></a>
          </div>
        </div>
    </div>
  </footer>
</template>

<script>
import MESGLogoHorizontalPurple from '~/components/MESGLogoHorizontalPurple'
export default {
  components: {
    MESGLogoHorizontalPurple
  }
}
</script>

<style scoped>

.container-parent {
  padding: 0;
}

footer {
  position: relative;
  background-color: #fafafe;
  background-color: var(--pale-white);
  border-top: solid 0.5px #d6d0e7;
  border-top: solid 0.5px var(--lighter-grey);
}

svg {
  width: 190px;
  height: 50px;
  padding-right:1.2em;
}
.yellow {
  max-width: 80px;
}
.incubator {
  font-size: 0.6em;
  font-weight: bold;
  padding-left: 1.2em;
  border-left: solid 1px #d6d0e7;
}

.separator {
  border-top: solid 0.5px #d6d0e7;
  border-top: solid 0.5px var(--lighter-grey);
}

.copyright {
  font-size: 0.8em;
  text-decoration: none;
  color: #57577e;
  color: var(--dark-grey);
}

a {
  opacity:1;
  font-size: 1em;
  font-weight: bold;
  text-decoration: none;
  color: #57577e;
  color: var(--dark-grey);
}
a:hover {
  opacity:0.8;
  transition: calc(var(--animation-speed) * 0.1s) ease;
}

@media only screen and (max-width: 768px) {
  .container-nav {
    padding-top:1.2em;
  }
  [mr1] { margin-right: 1.2em!important; }
  [column-reverse-responsive] { flex-direction: row; }
}
@media only screen and (max-width: 414px) {
  .container-nav {
    padding-top: 0em;
  }
  .social {
    padding-bottom:1.2em;
  }
  .nav {
    width: 100%;
    height: auto;
    padding-top: 1.2em;
  }
  [column-reverse-responsive] { flex-direction: column-reverse; }
}

</style>
