<template>
  <div>
    {{ latestReward }}
    <hr />
    <ul>
      <li v-for="contribution in contributions" :key="contribution.id">
        {{ contribution }}
      </li>
    </ul>
    <form @submit.prevent="submit">
      <label>
        Username
        <input type="text" v-model="contribution.username">
      </label>
      <label>
        Link
        <input type="url" v-model="contribution.url">
      </label>
      <label>
        Description
        <input type="description" v-model="contribution.description">
      </label>
      <input type="submit" value="submit">
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  fetch: ({ store, params }) =>
    store.dispatch("contributions/bind", params.hash),
  data() {
    return {
      contribution: {}
    }
  },
  computed: {
    ...mapGetters({
      contributions: "contributions/all"
    }),
    latestReward() {
      return this.contributions.filter(x => x.rewarded)[0];
    }
  },
  methods: {
    ...mapActions({
      createContribution: 'contributions/create'
    }),
    async submit() {
      await this.createContribution(this.contribution)
      this.contribution = {}
    }
  }
};
</script>