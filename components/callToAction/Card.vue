<template>
  <card p2>
    <div flex row align-center space-between>
      <div>
        <h3 mb1>{{title}}</h3>
        <p mb1>{{description}}</p>
        <nav flex row space-between>
          <Button v-for="(link, i) in links" :key="i" :to="link.to">
            <span v-if="link.icon">{{ link.icon }}</span>
            {{link.title}}
          </Button>
        </nav>
      </div>
      <div>
        <Button primary :to="to">{{action}}</Button>
      </div>
    </div>
  </card>
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
      required: true
    },
    description: {
      type: String,
      required: true
    },
    links: {
      type: Array,
      required: true
    },
    action: {
      type: String,
      required: true
    },
    to: {
      type: [String, Object],
      required: true
    }
  }
};
</script>
