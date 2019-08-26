<template>
  <Card p1>
    <div class="circles" mb1 flex row space-between>
      <span class="circle" flex column></span>
      <span class="circle" flex column></span>
      <span class="circle" flex column></span>
    </div>
    <VueEmbedGist :gist-id="id" />
  </Card>
</template>

<script>
import VueEmbedGist from "vue-embed-gist";
import Card from "~/components/Card";
export default {
  components: {
    VueEmbedGist,
    Card
  },
  props: {
    id: {
      type: String,
      default: "antho1404/8a02ac0dc79b3e8435fa1495dac0a51e"
    }
  }
};
</script>

<style>
@import url("https://github.githubassets.com/assets/gist-embed-4ac6018bcc05457cde2f66d2e7299d11.css");
.gist .gist-file {
  margin-bottom: 0;
  border: transparent;
}
.gist .gist-meta {
  display: none;
}
.gist .gist-data {
  border: transparent;
  max-height: 600px;
}

.circles {
  max-width: 50px;
}
.circle {
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: var(--light-background);
  margin-right: 10px;
}
</style>