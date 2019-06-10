<template>
  <a :href="document.link" :download="document.title" :alt="document.title">
    <Card bordered thin>
      <div flex row align-center>
        <div class="preview" flex align-center justify-center>
          <img :src="document.img" :alt="document.title">
        </div>
        <div class="content" flex align-center>
          <h4>{{ document.title }}</h4>
          <i class="fas fa-download icon"></i>
        </div>
      </div>
    </Card>
  </a>
</template>

<script>
import Card from "~/components/Card";
export default {
  components: {
    Card
  },
  props: {
    document: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  max-width: 100%;
  height: 100px;
  max-height: 100%;
}

img {
  max-width: 40px;
  max-height: 60px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
}

.icon {
  text-align: right;
  margin-right: 20px;
}

.content {
  padding: 20px;
  padding-left: 0;
  width: 100%;
}

.preview {
  width: 140px;
  height: 100px;
  overflow: hidden;
  border: solid 1px var(--light-purple);
  background-color: var(--light-purple);
}

@media only screen and (max-width: $mobile-breakpoint) {
  i {
    display: none;
  }
  .preview {
    margin-bottom: 0;
  }
  .content {
    padding-left: 20px;
  }
}
</style>
