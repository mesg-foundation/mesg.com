<template>
  <section>
    <div class="container-parent">
      <nav v-if="backTitle && backLink" flex row>
        <nuxt-link :to="backLink" class="link">
          <i class="fas fa-arrow-left" mr05></i>
          {{ backTitle }}
        </nuxt-link>
      </nav>
      <div class="container-child" :class="{ fullHeight }" flex row space-between column-reverse-responsive>
        <header half flex column justify-center>
          <h1 v-html="title"></h1>
          <slot v-if="$slots.default" />
          <div v-else>
            <p v-html="description"></p>
            <p v-if="smallDescription" class="small" mt1>{{ smallDescription }}</p>
          </div>
          <nav v-if="actionTitle || $slots.action" flex mt2 class="actions">
            <slot name="action">
              <Button v-if="actionLink" :href="actionLink" target="_blank" primary :icon="actionIcon">{{ actionTitle }}</Button>
              <Button v-else @click="$emit('actionClicked')" primary :icon="actionIcon">{{ actionTitle }}</Button>
            </slot>
          </nav>
        </header>
        <div half flex column justify-center align-center>
          <component :is="schema" class="schema" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from '~/components/Button'
export default {
  components: { Button },
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

<style scoped>

.container-parent > nav {
  width: 100%;
  max-width: 1440px;
  padding: 2.4em;
  margin: auto;
}

.container-parent {
  z-index:-1;
  padding-top: 5.4em;
  background-image:linear-gradient(155deg, rgba(73, 30, 140, 1) 0%, rgba(73, 30, 140, 0.95) 100%), url("~assets/Contact.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size:cover;
}

.small {
  font-size: 1em;
}

p {
  font-size: 1.6em;
  font-weight: normal;
}

.schema {
  max-height: calc(30vh - 15em);
  min-height:450px;
  margin-top:0;
}

@media only screen and (min-width: 1025px) {
 .container-child {
   min-height:calc(30vh - 10em);
 }
 .fullHeight {
    min-height: 80vh;
  }
  .fullHeight .schema {
    min-height: 600px;
  }
}
@media only screen and (max-width: 768px) {
 section {
   padding-top:4.8em;
   min-height: 0;
 }
 header{
   text-align:center;
 }
 p {
   font-size: 1.4em;
 }
 nav {
    justify-content: center;
  }
 .schema {
   min-height:280px;
   margin-bottom:2.4em;
 }
 .container-parent {
   padding-top: 2.4em;
 }
 .container-child {
   max-width: 600px;
 }
 .actions a {
    margin: auto;
  }
}

 @media only screen and (max-width: 414px) {
   p {
     font-size: 1.2em;
   }
   section {
     padding-top:3.8em;
   }
   .schema {
     max-height: 280px;
     max-width: 280px;
     margin-bottom:1.8em;
   }
   .container-parent {
     padding-top: 0em;
   }
 }

</style>
