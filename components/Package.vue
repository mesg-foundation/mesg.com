<template>
  <Card p2>
    <div flex column>
      <h3 class="text-center" mb1>{{ title }}</h3>
      <hr mb1>
      <p class="pricing text-center" mb1>{{ text }}</p>
      <hr mb2>
      <div flex row>
        <ul mb2>
          <li mb1 v-for="(item, i) in items" :key="i">
            <i mr1 v-if="item.icon" :class="icon"></i>
            <p v-html="description"></p>
          </li>
        </ul>
      </div>
      <Button primary :href="to" target="_blank">{{ action }}</Button>
    </div>
  </Card>
</template>

<script>
import Card from "~/components/Card";
import Button from "~/components/Button";
export default {
  components: {
    Card,
    Button
  },
  props: {
    title: {
      type: String,
      default: true
    },
    description: {
      type: String
    },
    text: {
      type: String
    },
    icon: {
      type: Boolean,
      default: true
    },
    items: {
      type: Array,
      required: true
    },
    to: {
      type: [String, Object],
      required: true
    },
    action: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
}

.pricing {
  font-size: 17px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
}

hr {
  margin: 0;
}
</style>
