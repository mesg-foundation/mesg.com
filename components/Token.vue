<template>
  <div>
    <div class="banner" flex row space-between justify-center align-center>
      <div flex row justify-center align-center>
        <div class="token" mr1></div>
        <p>
          The MESG token is coming
        </p>
      </div>
      <div flex row justify-center align-center>
        <nav class="more">
          <a @click="open = !open" :class="{ animated: open }">
            Learn More<i class="fas fa-angle-down" ml1></i>
          </a>
        </nav>
      </div>
    </div>
    <transition name="appear">
      <div v-if="open" class="infos" @click="open = !open" flex row space-between justify-center align-center>
        <div flex row thirdtwo justicy-center align-center>
          <div class="content-picture" flex column justify-center align-center>
            <SchemaConnection />
          </div>
          <div class="content-text" flex column justify-center align-center>
            <p>
              <span>
              The MESG token
            </span>
            <br/>
            <br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum orci eget convallis efficitur. Morbi urna massa.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum orci eget convallis efficitur. Morbi urna massa.
            </p>
          </div>
        </div>
          <nav flex column third>
            <Button href="https://goo.gl/forms/ifXyNfaQn8VC7pfu1" primary>Buy the MESG token</Button>
          </nav>
        </div>
      </transition>
  </div>
</template>

<script>
import Button from '~/components/Button'
import SchemaConnection from '~/components/SchemaConnection'
export default {
  components: {
    Button,
    SchemaConnection
  },
  data () {
    return {
      open: false
    }
  }
}
</script>

<style scoped>

[third] { width: calc(33% - 1.2em);}
[thirdtwo] { width: calc(66% - 1.2em);}

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

.infos {
  z-index:10;
  position: fixed;
  padding:4.8em;
  left:0;
  right:0;
  background-color: #9452ff;
  background-color: var(--lighter-purple);
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
span {
  font-family: 'Quicksand', sans-serif;
  font-size: 1.6em;
  font-weight: bold;
}

svg {
  margin-top:0;
  width: 50%;
}

.token {
  border-radius: 100%;
  width: 30px;
  height: 30px;
  background-color: #ffa744;
  background-color: var(--Orange-cta);
}

.picture {
  width: 220px;
  height: 220px;
  border-radius:100%;
  background-color: #D8D8D8;
}

.content-picture {
  width: 33%
}
.content-text {
  width: 67%;
}

.fa-angle-down {
  transition: all calc(var(--animation-speed) * 0.2s) ease-in;
}
.animated .fa-angle-down {
  transform: rotate(180deg);
}

.appear-enter-active {
  animation: appear-in calc(var(--animation-speed) * 0.4s) ease-out;
}
.appear-leave-active {
  animation: appear-in calc(var(--animation-speed) * 0.4s) reverse ease-in;
}
@keyframes appear-in {
  0% {
    transform: translateY(-300px);
  }
  100% {
    transform: translateY(0);
  }
}

@media only screen and (max-width: 768px) {
  .content-picture {
    align-items:center;
    width: 100%;
    padding-bottom:2.4em;
  }
  .content-text {
    align-items:center;
    width: 100%;
    padding-bottom:2.4em;
  }
  .infos {
    padding:2.4em;
  }
  [third] { width: 100%;}
  [thirdtwo] { width: 100%;}
}

@media only screen and (max-width: 414px) {
  .infos {
    padding:1.8em;
  }
  .more {
    align-items:center;
    padding-top:1.2em;
  }
  .banner {
    padding-left:1.8em;
    padding-right:1.8em;
    padding-top:0.6em;
    padding-bottom:0.6em;
  }
}

</style>
