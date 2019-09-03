<template>
  <div>
    <nav flex column class="sidebar">
      <p mb1>All categories</p>
      <a
        v-for="question in questions"
        :key="question.id"
        :href="`#${question.id}`"
        class="link-secondary"
      >
        <i class="far fa-chevron-right"></i>
        {{question.category}}
      </a>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters({
    questions: "questions"
  })
};
</script>

<style scoped>
.sidebar {
  position: sticky;
  top: 40px;
}
.sidebar a {
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 17px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
}
i {
  margin-right: 10px;
  font-size: 12px;
}
</style>

