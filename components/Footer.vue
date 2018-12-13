<template>
  <footer>
    <div class="container-parent">
      <div class="container-child" flex row column-responsive space-between align-center>
        <div flex row space-between align-center>
          <MESGLogoHorizontalPurple />
          <div class="incubator">
            <p>Incubated by</p>
            <img src="~/assets/Partners/Yellow.png" alt="Yellow" class="logo">
          </div>
        </div>
        <div class="container-nav">
          <a mr2 href="https://medium.com/mesg/mesg-core-v1-0-launch-a-new-era-89c534855413" target="_blank" class="nav">What is MESG? Get started</a>
          <a mr2 href="https://github.com/mesg-foundation/core"  target="_blank" class="nav">Browse our source code on Github</a>
          <a href="https://docs.mesg.com"  target="_blank" class="nav">Read the documentation</a>
        </div>
      </div>
        <div class="container-child"  flex row space-between>
              <p class="copyright">
                Copyright MESG Foundation 2018
              </p>
              <div>
                <a mr1 href="https://medium.com/mesg" target="_blank" class="social"><i class="fab fa-medium-m"></i></a>
                <a mr1 href="https://github.com/mesg-foundation" target="_blank" class="social"><i class="fab fa-github"></i></a>
                <a mr1 href="https://forum.mesg.com/" target="_blank" class="social"><i class="fas fa-comments"></i></a>
                <a mr1 href="https://discordapp.com/invite/SaZ5HcE" target="_blank" class="social"><i class="fab fa-discord"></i></a>
                <a mr1 href="https://twitter.com/mesgfoundation" target="_blank" class="social"><i class="fab fa-twitter"></i></a>
                <a mr1 href="https://www.linkedin.com/company/mesg/" target="_blank" class="social"><i class="fab fa-linkedin-in"></i></a>
                <a href="https://www.facebook.com/mesgfoundation/" target="_blank" class="social"><i class="fab fa-facebook-f"></i></a>
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
.container-child {
  border-top: solid 0.5px #d6d0e7;
  border-top: solid 0.5px var(--lighter-grey);
}

footer {
  position: relative;
  background-color: #fafafe;
  background-color: var(--pale-white);
  border-top: solid 0.5px #d6d0e7;
  border-top: solid 0.5px var(--lighter-grey);
}

.container-parent {
  padding: 0;
}

.copyright {
  font-size: 0.8em;
  text-decoration: none;
  color: #57577e;
  color: var(--dark-grey);
}

a {
  opacity:1;
  width: auto;
  font-size: 1em;
  font-weight: bold;
  height: 2.4em;
  text-decoration: none;
  color: #57577e;
  color: var(--dark-grey);
}
a:hover {
  opacity:0.8;
  transition: calc(var(--animation-speed) * 0.1s) ease;
}

svg {
  width: 190px;
  height: 50px;
  padding-right:1.2em;
}
.logo {
  max-width: 80px;
}
.incubator {
  font-size: 0.6em;
  font-weight: bold;
  padding-left: 1.2em;
  border-left: solid 1px #d6d0e7;
}

@media only screen and (max-width: 1024px) {
  .container-nav {
    width: 100%;
    height: auto;
    padding-top: 1.2em;
  }
}
@media only screen and (max-width: 768px) {
  .social {
    padding-right: 0.6em;
  }
}
@media only screen and (max-width: 414px) {
  .container-nav {
    padding-top: 0em;
  }
  .nav {
    width: 100%;
    height: auto;
    display: flex;
    padding-top: 1.2em;
  }
  .copyright {
    padding-bottom: 1.2em;
  }
}

</style>
