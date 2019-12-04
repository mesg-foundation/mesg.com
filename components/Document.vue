<template>
  <div flex row wrap>
    <a
      v-for="(item, i) in items"
      :key="i"
      :href="item.link"
      :download="item.title"
      flex
      align-center
      half
      mb2
    >
      <Card bordered thin flex row align-center>
        <div flex row align-center>
          <div class="preview" flex align-center justify-center>
            <img :src="item.img" :alt="item.title" />
          </div>
          <div class="content" flex align-center>
            <span>{{ item.title }}</span>
            <i class="fas fa-download"></i>
          </div>
        </div>
      </Card>
    </a>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Card from "~/components/Card";
export default {
  components: {
    Card
  },
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      _documents: "documents"
    }),
    items() {
      return this.list.map(x => this._documents[x]);
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  height: 100px;
  max-height: 100%;
  .preview {
    min-width: 100px;
    max-width: 100px;
    min-height: 100px;
    max-height: 100px;
    overflow: hidden;
    background-color: $light-purple;
    margin-right: 0;
    img {
      max-width: 40px;
      max-height: 60px;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    }
  }
  .content {
    padding: calc(#{$margin} * 2);
    span {
      font-weight: bold;
      color: $text-color;
      margin-right: $margin;
    }
    i {
      text-align: right;
    }
  }
}

@media only screen and (max-width: $mobile-only) {
  i {
    display: none;
  }
}
</style>
