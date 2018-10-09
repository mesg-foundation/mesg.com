<template>
  <div id="business">
    <div class="container">
      <v-tree :data="tree" />
    </div>
  </div>
</template>

<script>
import { VTree, VSelectTree } from 'vue-tree-halower'
import 'vue-tree-halower/dist/halower-tree.min.css'
const data = require("~/assets/graphs/business-feature.json")
export default {
  components: {
    VTree
  },
  data () {
    return {
      tree: data.children
    }
  }
}
</script>

<style>
#business {
  margin-top: 100px;
}

.halo-tree .tree-expand {
  line-height: 11px;
}

.node-title {
  font-family: Quicksand;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  font-weight: normal;
}
</style>