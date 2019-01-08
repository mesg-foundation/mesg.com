<template>
  <section>
  <div class="container-parent">
    <div class="container-child-title" flex column justify-center align-center>
        <h2>Project progress</h2>
        <div class="separator-orange"></div>
    </div>
    <div v-for="(progress, i) in usecase.progress" :key="i"
      class="container-child" :class="{ reverse: i % 2 === 1 }" flex row space-between>
      <div :style="progressPicture(progress)" class="picture" half flex column>
      </div>
      <div half flex column justify-center>
        <div flex row>
          <h3>{{ progress.title }}</h3>
          <p v-html="progress.text">
          </p>
        </div>
        <div flex row>
          <a :href="progress.link" target="_blank" class="link">Read the post<i class="fas fa-arrow-right" ml05></i></a>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
export default {
  props: {
    usecase: {
      type: Object,
      required: true
    }
  },
  methods: {
    progressPicture (progress) {
      return {
        backgroundImage: `url(${progress.picture})`
      }
    }
  }
}
</script>

<style scoped>

a {
  padding-top:1.2em;
}

.picture {
  height: 300px;
  border-radius: 10px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

@media only screen and (max-width: 768px) {
  .picture {
    height: 250px;
    margin-bottom:2.4em;
  }
}
@media only screen and (max-width: 414px) {
  .picture {
    height: 200px;
    margin-bottom:1.2em;
  }
}

.container-child.reverse {
  flex-direction: row-reverse;
}

</style>
