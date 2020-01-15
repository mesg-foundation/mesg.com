<template>
  <Card>
    <div class="picture" flex column>
      <div>
        <nav flex row justify-center align-center>
          <a :href="to" target="_blank" flex justify-center align-center>
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
  .picture {
    position: relative;
    object-fit: contain;
    overflow: hidden;
    &:hover div {
      display: block;
    }
    div {
      display: none;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      position: absolute;
      animation: social 0.2s ease-in;
      transition: 0.1s ease-in;
      &:before {
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
      nav {
        height: 100%;
        width: 100%;
        a {
          z-index: 1;
          text-decoration: none;
          margin-left: 0.4em;
          margin-right: 0.4em;
          color: $primary;
          height: 50px;
          max-width: 50px;
          background-color: $white;
          border-radius: 100%;
          transition: 0.1s ease-in;
          animation: Bubble 0.2s ease-in;
          &:hover {
            transform: scale(1.1);
          }
          i {
            text-align: center;
          }
        }
      }
    }
    img {
      width: 100%;
      height: auto;
      overflow: hidden;
    }
  }
  .text {
    padding: $margin;
  }
}

@keyframes social {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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
</style>
