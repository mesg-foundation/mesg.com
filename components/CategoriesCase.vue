<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex row justify-center>
      <div v-for="usecase in usecases" :key="usecase" class="usecase" half flex column space-between>
        <div class="content" flex column justify-center>
          <div flex row align-center mb1>
            <img :src="usecase.picture" mr1>
            <h2>{{usecase.title}}</h2>
          </div>
            <p>{{usecase.content}}</p>
          <div flex row>
            <nuxt-link class="link" :to="usecase.link">Read the case<i class="fas fa-arrow-right" ml05></i></nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
export default {
  computed: {
    usecases () {
      return require('~/assets/usecases.json')
    }
  }
}
</script>

<style scoped>

h2 {
  margin-bottom:0;
}

.link {
  padding-top:1.2em;
}

.content {
  padding:2.4em;
}

img {
  border-radius: 100%;
  width: 60px;
  height: 60px;
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
  [mr1] { margin-right: 1.2em!important; }
  [mb1] { margin-bottom: 1.2em!important; }
}
@media only screen and (max-width: 414px) {
  .usecase {
    margin:0;
    margin-bottom:1.8em;
  }
}
@media only screen and (max-width: 375px) {
  img {
    margin:0;
    margin-bottom:1.2em;
  }
}

</style>
