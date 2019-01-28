<template>
  <div class="Rectangle-white" flex row space-between align-center>
    <div class="Picture" flex column :style="style">
      <div class="picture-hover">
        <nav class="social" flex row justify-center align-center>
          <a
            v-for="network in socialNetworks" :key="network.link"
            class="social-networks"
            :href="network.link" target="_blank" flex justify-center align-center>
            <i class="fab" :class="`fa-${network.icon}`"></i>
          </a>
        </nav>
      </div>
    </div>
    <div class="content" flex column>
      <h4>{{name}}</h4>
      <p>{{role}}</p>
      <div v-if="companies">
        <div class="Separator-dotted"></div>
      </div>
      <nav>
        <a v-for="(company, i) in companies" :key="i"><img :src="company.src" class="logo"/></a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pictureUrl: String,
    name: String,
    role: String,
    companies: Array,
    socialNetworks: Array
  },
  computed: {
    style () {
      return {
        backgroundImage: `url(${this.pictureUrl})`
      }
    }

  }
}
</script>

<style scoped>
.Rectangle-white {
  width: 390px;
  object-fit: contain;
  border-radius: 10px;
  background-color: #ffffff;
  background-color: var(--white-content);
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.07);
}
.Rectangle-white:hover {
  transition: calc(var(--animation-speed) * 0.1s) ease;
  box-shadow: 0 0 40px 4px rgba(0, 0, 0, 0.07);
}

.Rectangle-white:hover .picture-hover {
  display: block;
}

.Picture {
  position: relative;
  width: 40%;
  height: 160px;
  object-fit: contain;
  border-radius: 10px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size:cover;
  border-top-right-radius: 20% 50%;
  border-bottom-right-radius: 20% 50%;
  overflow: hidden;
}

.picture-hover {
  display: none;
  background: rgba(73,30,140,0.8);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: Opac calc(var(--animation-speed) * 0.1s) ease;
}
@keyframes Opac {
  from {
    opacity: 0;
    }
  to {
    opacity: 1;
    }
}

.logo {
  max-width: 80px;
  margin-right: 0.6em;
  max-height: 34px;
}

.Separator-dotted {
  border: 0.5px #d6d0e7 dotted;
  width: 100%;
  height: 0.05em;
  margin-top:0.6em;
  margin-bottom: 0.6em;
}

.content {
  width: 60%;
  padding: 1.2em;
}

.social {
  height: 100%;
  width: 100%;
}
.social-networks {
  text-decoration: none;
  margin-left: 0.4em;
  margin-right: 0.4em;
  color: #57577e;
  color: var(--dark-grey);
  height: 36px;
  width: 36px;
  background-color: #ffffff;
  background-color: var(--white-content);
  border-radius:50%;
  animation: Bubble calc(var(--animation-speed) * 0.2s) ease-out;
}
@keyframes Bubble {
  from {
    opacity: 0;
    transform: scale(0);
    }
  to {
    opacity: 1;
    transform: scale(1);
    }
}

.social-networks:hover {
  opacity:0.8;
  transition: calc(var(--animation-speed) * 0.1s) ease;
}

@media only screen and (max-width: 414px) {
  .Picture {
    width: 100%;
    border-radius: 10px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .content {
    width: 100%;
  }
}
</style>
