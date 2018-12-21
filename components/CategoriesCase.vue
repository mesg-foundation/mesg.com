<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex row justify-center>
      <div v-for="usecase in usecases" :key="usecase.id" class="usecase" third flex column space-between>
        <div :style="pictureStyle" class="picture" flex column>
        </div>
        <div class="content" flex column justify-center>
          <div flex row>
            <h2 mb1>{{usecase.title}}</h2>
            <p mb1>{{usecase.resume}}</p>
          </div>
          <div fles row>
            <nuxt-link class="link" :to="`/showcases/${usecase.id}`">Read the case<i class="fas fa-arrow-right" ml05></i></nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
export default {
  props: {
    usecases: {
      type: Array,
      required: true
    },
    usecase: {
      type:Object,
      required:true
    }
  },
  computed: {
    pictureStyle () {
      return {
        backgroundImage: `url(${this.usecases.picture})`
      }
    }
  }
}
</script>

<style scoped>

h2 {
  margin-bottom:0;
}

.picture {
  height: 200px;
  border-radius: 10px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.content {
  padding:2.4em;
}

.usecase {
  border-radius: 10px;
  background-color: #ffffff;
  background-color: var(--white-content);
  box-shadow: 0 0 40px 4px rgba(0, 0, 0, 0.1);
  margin:1.2em;
}

@media only screen and (max-width: 768px) {
  .usecase {
    margin:0;
    margin-bottom:2.4em;
  }
  .picture {
    height: 160px;
  }
  [mr1] { margin-right: 1.2em!important; }
  [mb1] { margin-bottom: 1.2em!important; }
  [third] { width: 100%; }
}
@media only screen and (max-width: 414px) {
  .picture {
    height: 120px;
  }
  .usecase {
    margin:0;
    margin-bottom:1.8em;
  }
}

</style>
