<template>
  <section class="card" flex column justify-center align-center>
    <a target="blank" :href="link" :download="linkFileName" v-show-only-children="!link">
      <div class="picture" flex column justify-center align-center>
        <img :src="thumbnail" :alt="thumbnailName"/>
      </div>
      <div class="title" flex column justify-center align-center>
        <h3>{{ title }}</h3>
      </div>
    </a>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    thumbnailName: String,
    link: String,
    linkFileName: String
  }
}
</script>

<style scoped>
h3 {
  text-align: center;
  margin-bottom: 0;
  text-decoration: none;
}

img {
  width: 50%;
  max-width: 145px;
  margin-bottom: 1.5em;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.07);
}

.picture {
  width: 100%;
  height: 60%;
  border-top-left-radius: 0.3em;
  border-top-right-radius: 0.3em;
  padding: 0;
  background-color: #491e8c;
  background-color: var(--purple);
}

.title {
  position: relative;
  height: 40%;
  padding: 1.2em;
  background-color: #ffffff;
  background-color: var(--white-content);
}

.card {
  width: 300px;
  height: 300px;
  border-radius: 0.3em;
  background-color: #ffffff;
  background-color: var(--white-content);
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.07);
  margin: 1.2em 1.2em 2.6em 1.2em;
}

.card a {
  text-decoration: none;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.card:hover {
  transition: calc(var(--animation-speed) * 0.1s) ease;
  box-shadow: 0 0 40px 4px rgba(0, 0, 0, 0.07);
}

.card:hover .picture {
  transition: calc(var(--animation-speed) * 0.1s) ease;
  border-bottom: solid 16px #9452ff;
  background-color: #5D28B2;
  background-color: var(--lighter-purple-hover);
}

@media only screen and (max-width: 1024px) {
  .card {
    margin: 2.4em;
  }

  img {
    margin-bottom:1.4em;
  }
}

@media only screen and (max-width: 768px) {
  .card {
    width: 100%;
  }
}

@media only screen and (max-width: 414px) {
  .card {
    margin: 1.8em;
  }
  
  img {
    width: 55%;
  }
}
</style>
