<template>
  <div class="light">
    <section>
      <div class="container">
        <select v-model="type">
          <option
            v-for="(graph, key) in graphs" :key="key"
            :value="key">
            {{graph.title}}
          </option>
        </select>
        <div class="tree-container">
          <component :is="component"
            ref="tree"
            v-if="component"
            :data="graphs[type].data"
            nodeText="name"
            class="tree"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const connections = require("~/assets/graphs/connections.json")
export default {
  data () {
    return {
      component: null,
      type: "featureToBusiness"
    }
  },
  computed: {
    graphs () {
      return {
        featureToBusiness: {
          title: "feature to business",
          data: require("~/assets/graphs/feature-business.json")
        },
        featureToTech: {
          title: "feature to tech",
          data: require("~/assets/graphs/feature-tech.json")
        },
        techToFeature: {
          title: "tech to feature",
          data: require("~/assets/graphs/tech-feature.json")
        },
        businessToFeature: {
          title: "business to feature",
          data: require("~/assets/graphs/business-feature.json")
        }
      }
    }
  },
  mounted () {
    const { tree } = require('vued3tree')
    this.component = tree
  }
}
</script>

<style>
.tree {
  height: 800px;
  width: 100%;
}
.graph-root {
  height: 800px;
  width: 100%;
}
</style>
