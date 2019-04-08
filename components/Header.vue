<template>
  <header class="intro">
    <nav v-if="backTitle && backLink" flex row>
      <nuxt-link :to="backLink" class="link">
        <i class="fas fa-arrow-left" mr05></i>
        {{ backTitle }}
      </nuxt-link>
    </nav>
    <section class="content" :class="{ fullHeight }" flex align-center  row space-between column-reverse-responsive>
      <div class="info">
        <h1 class="title" v-html="title"></h1>
        <div class="description">
          <slot v-if="$slots.default" />
          <div v-else>
            <p v-html="description"></p>
            <p v-if="smallDescription" class="small" mt1>{{ smallDescription }}</p>
          </div>
        </div>
        <nav v-if="actionTitle || $slots.action" flex mt2 class="actions">
          <slot name="action">
            <Button v-if="actionLink" :href="actionLink" target="_blank" primary :icon="actionIcon">{{ actionTitle }}</Button>
            <Button v-else @click="$emit('actionClicked')" primary :icon="actionIcon">{{ actionTitle }}</Button>
          </slot>
        </nav>
      </div>
      <div class="schema">
        <component column justify-center align-center :is="schema" />
      </div>
    </section>
  </header>
</template>

<script>
import Button from '~/components/Button'

export default {
  components: {
    Button
  },

  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    schema: {
      type: Object
    },
    backLink: {
      type: [String, Object]
    },
    backTitle: {
      type: String
    },
    actionLink: {
      type: String
    },
    actionTitle: {
      type: String
    },
    actionIcon: {
      type: String
    },
    smallDescription: {
      type: String
    },
    fullHeight: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
.intro {
  padding: 90px 210px 150px 210px;
  background-image: linear-gradient(to bottom, #fff, #f2f0f7);
  clip-path: polygon(100% 0, 100% 79%, 0 100%, 0 0);

  .content {
    .info {
      flex: 1;
      margin-right: 60px;

      h1.title {
        font-family: 'Open Sans';
        font-size: 38px;
        font-weight: 800;
        color: #0e061c;
      }

      .description, .description p {
        font-family: 'Open Sans';
        font-size: 20px;
        font-weight: 400;
        color: #3c3940;
      }
    }

    .schema {
      width: 40%;
    }
  }
}

.small {
  font-size: 1em;
}


// .schema {
//   max-height: calc(30vh - 15em);
//   min-height:450px;
//   margin-top:0;
// }

// @media only screen and (min-width: 1025px) {
//  .container-child {
//    min-height:calc(30vh - 10em);
//  }
//  .fullHeight {
//     min-height: 80vh;
//   }
//   .fullHeight .schema {
//     min-height: 600px;
//   }
// }
// @media only screen and (max-width: 768px) {
//  section {
//    padding-top:4.8em;
//    min-height: 0;
//  }
//  header{
//    text-align:center;
//  }
//  p {
//    font-size: 1.4em;
//  }
//  nav {
//     justify-content: center;
//   }
//  .schema {
//    min-height:280px;
//    margin-bottom:2.4em;
//  }
//  .container-parent {
//    padding-top: 2.4em;
//  }
//  .container-child {
//    max-width: 600px;
//  }
//  .actions a {
//     margin: auto;
//   }
// }

//  @media only screen and (max-width: 414px) {
//    p {
//      font-size: 1.2em;
//    }
//    section {
//      padding-top:3.8em;
//    }
//    .schema {
//      max-height: 280px;
//      max-width: 280px;
//      margin-bottom:1.8em;
//    }
//    .container-parent {
//      padding-top: 0em;
//    }
//  }

</style>
