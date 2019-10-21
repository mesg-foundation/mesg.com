<template>
  <div>
    {{ latestReward }}
    <hr />
    <ul>
      <li v-for="contribution in contributions" :key="contribution.id">
        {{ contribution }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  fetch: ({ store, params }) =>
    store.dispatch("contributions/bind", params.hash),
  computed: {
    ...mapGetters({
      contributions: "contributions/all"
    }),
    latestReward() {
      return this.contributions.filter(x => x.rewarded)[0];
    }
  }
};
</script>