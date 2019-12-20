<template>
  <Card>
    <div class="picture" flex column>
      <div class="picture-hover">
        <nav class="social" flex row justify-center align-center>
          <a class="social-networks" :href="to" target="_blank" flex justify-center align-center>
            <i class="fab fa-linkedin-in"></i>
          </a>
        </nav>
      </div>
      <img :src="src" :alt="title" />
    </div>
    <div class="text">
      <h4>{{ title }}</h4>
      <p v-html="text"></p>
    </div>
  </Card>
</template>

<script>
import Card from "@mesg-components/card";
export default {
  components: {
    Card
  },
  props: {
    src: {
      type: String,
      default: true
    },
    title: {
      type: String,
      default: true
    },
    text: {
      type: String
    },
    to: {
      type: String,
      required: true
    }
  }
};
</script>


<style lang="scss" scoped>
@import "~/assets/_variables";

.card {
  padding: 0;
}

img {
  width: 100%;
  height: auto;
  overflow: hidden;
}

.text {
  padding: $margin;
}

.picture {
  position: relative;
  object-fit: contain;
  overflow: hidden;
}
.picture:hover .picture-hover {
  display: block;
}

.picture-hover {
  display: none;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  animation: social 0.2s ease-in;
}
@keyframes social {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.picture-hover::before {
  content: "";
  display: block;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0.8;
  background-color: $primary;
}

.social {
  height: 100%;
  width: 100%;
}

i {
  text-align: center;
}

.social-networks {
  z-index: 1;
  text-decoration: none;
  margin-left: 0.4em;
  margin-right: 0.4em;
  color: $primary;
  height: 50px;
  max-width: 50px;
  background-color: $white;
  border-radius: 100%;
  animation: Bubble 0.2s ease-in;
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
  opacity: 0.7;
  transition: 0.2s ease;
}
</style>
