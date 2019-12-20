<template>
  <Card>
    <Container class="tab" p1>
      <div flex row>
        <span class="circle close" flex column></span>
        <span class="circle reduce" flex column></span>
        <span class="circle extend" flex column></span>
      </div>
    </Container>
    <Container p1>
      <VueEmbedGist :gist-id="id" />
    </Container>
  </Card>
</template>

<script>
import VueEmbedGist from "vue-embed-gist";
import Container from "~/components/Container";
import Card from "@mesg-components/card";
export default {
  components: {
    VueEmbedGist,
    Card,
    Container
  },
  props: {
    id: {
      type: String,
      default: "antho1404/8a02ac0dc79b3e8435fa1495dac0a51e"
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/_variables";
@import url("https://github.githubassets.com/assets/gist-embed-4ac6018bcc05457cde2f66d2e7299d11.css");

.card {
  padding: 0;
}

.tab {
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background-color: $grey-light;
  .circle {
    width: 10px;
    height: 10px;
    max-width: 10px;
    max-height: 10px;
    border-radius: 100%;
    margin-right: calc(#{$margin} / 2);
  }
  .close {
    background-color: #fc5b57;
  }
  .reduce {
    background-color: #e5bf3c;
  }
  .extend {
    background-color: #57c038;
  }
}
</style>

<style lang="scss">
.gist {
  .gist-file {
    margin-bottom: 0;
    border: transparent;
  }
  .gist-meta {
    display: none;
  }
  .gist-data {
    border: transparent;
    max-height: 600px;
  }
}
</style>