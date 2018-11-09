<template>
  <footer>
    <div class="container-parent">
      <div class="container-child" flex row space-between align-center>
        <a href="/">
          <MESGLogoHorizontalPurple class="logo" />
        </a>
        <div>
          <a mr2 href="https://medium.com/mesg/mesg-core-v1-0-launch-a-new-era-89c534855413" target="_blank">What is MESG? Get started</a>
          <a mr2 href="https://github.com/mesg-foundation/core">Browse our source code on Github</a>
          <a href="https://docs.mesg.com">Read the documentation</a>
        </div>
      </div>
      <div class="container-social">
        <div class="container-child-2" flex row space-between align-center>
          <p class="copyright">
            Copyright MESG Foundation 2018
          </p>
          <div>
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
  border-top: solid 0.05em #d6d0e7;
  border-top: solid 0.05em var(--lighter-grey);
}
.container-child-2 {
  width: 100%;
  max-width: 1440px;
  padding: 2.4em;
  margin: auto;
}

footer {
  background-color: #fafafe;
  background-color: var(--pale-white);
}

.container-parent {
  padding: 0;
}
.container-social {
  border-top: solid 0.05em #d6d0e7;
  border-top: solid 0.05em var(--lighter-grey);
  width: 100%;
  background-color: #ffffff;
  background-color: var(--white-content);
}

.copyright {
  font-size: 0.8em;
  text-decoration: none;
  color: #57577e;
  color: var(--dark-grey);
}

a {
  font-size: 1em;
  font-weight: bold;
  height: 2.4em;
  text-decoration: none;
  color: #57577e;
  color: var(--dark-grey);
}
a:hover {
  color: #9452ff;
  color: var(--lighter-purple);
  transition: 0.2s ease-in-out;
}

.logo {
  width: 50%;
  max-width: 100%;
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
