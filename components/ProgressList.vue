<template>
  <ul mb1>
    <li v-for="(item, i) in items" :key="i" flex row mb1>
      <div flex column class="start">
        <span :style="`background-color: ${item.color}`"></span>
      </div>
      <div flex column>
        <div class="bar">
          <div class="progress" :style="`background-color: ${item.color}; width: ${item.width}`"></div>
        </div>
        <div flex row space-between>
          <div flex column>{{item.title}}</div>
          <div flex column class="percent">{{item.percent}}</div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
}
li span {
  width: 10px;
  height: 10px;
  border-radius: 100px;
  display: inline-block;
  vertical-align: middle;
}
.start {
  max-width: 10px;
}

.bar {
  width: 100%;
  height: 20px;
  border-radius: 6px;
  background-color: var(--light-background);
}

.progress {
  height: 20px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  overflow: hidden;
}
.percent {
  text-align: right;
}
</style>
