<template>
  <div>
    <nuxt-link to="/token" class="banner" flex row space-between justify-center align-center>
      <div flex row justify-center align-center>
        <IconToken2 mr1/>
        <p>
          MESG Token Available Feb 14th on DigiFinex
        </p>
      </div>
      <div flex row justify-center align-center>
        <nav>
          Learn More <i class="fas fa-arrow-right"></i>
        </nav>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import IconToken2 from '~/components/icon/Token2'
export default {
   components: {
     IconToken2
   }
}
</script>

<style scoped>

.banner {
  z-index:20;
  position: relative;
  padding-left:2.4em;
  padding-right:2.4em;
  padding-top:0.8em;
  padding-bottom:0.8em;
  border-bottom: solid 1px #491e8c;
  background-color: #9452ff;
  background-color: var(--lighter-purple);
}
.banner:hover {
  transition: calc(var(--animation-speed) * 0.1s) ease;
  background-color: #5D28B2;
  background-color: var(--lighter-purple-hover);
}

i {
  margin-left:0.6em;
}

p {
  color:#ffffff;
  color:var(--white-content);
}
a {
  font-size: 1em;
  font-weight: bold;
  text-decoration: none;
  color: #ffffff;
  color: var(--white-content);
  cursor: pointer;
}

svg {
  margin-top:0;
  width: 50%;
  max-width: 30px;
}

@media only screen and (max-width: 590px) {
  svg {
    display:none;
  }
  p {
    font-size: 0.8em;
  }
}
@media only screen and (max-width: 480px) {
  .banner {
    padding-left:1.8em;
    padding-right:1.8em;
    padding-top:0.6em;
    padding-bottom:0.6em;
    flex-direction: column;
  }
}
@media only screen and (max-width: 414px) {
  p {
    text-align: center;
  }
  .banner {
    padding-left:1.2em;
    padding-right:1.2em;

  }
}

</style>
