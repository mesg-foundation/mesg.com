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
      <Card bordered thin>
        <div flex row align-center>
          <div class="preview" flex align-center justify-center>
            <img :src="item.img" :alt="item.title" />
          </div>
          <div class="content" flex align-center>
            <h4>{{ item.title }}</h4>
            <i class="fas fa-download icon"></i>
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
  margin-right: var(--margin);
}

.content {
  padding: var(--margin);
  padding-left: 0;
  width: 100%;
}

.preview {
  width: 140px;
  height: 100px;
  overflow: hidden;
  background-color: var(--light-purple);
}

@media only screen and (max-width: $mobile-breakpoint) {
  .preview {
    margin-bottom: 0;
  }
  .content {
    padding-left: var(--margin);
  }
  a {
    margin-bottom: calc(var(--margin) * 2) !important;
  }
}
@media only screen and (max-width: $mobile-only) {
  i {
    display: none;
  }
}
</style>
