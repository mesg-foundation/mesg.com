<template>
  <div class="footer">
    <footer class="gray">
      <div class="container">
        <h2>Get started and join us now !</h2>
        <Links docs github blog discussion small></Links>
      </div>
    </footer>
    <footer class="dark">
      <Discord id="448501704388902912"></Discord>
    </footer>
  </div>
</template>

<script>
import Discord from '~/components/Discord'
import Links from '~/components/Links'
export default {
  components: {
    Discord,
    Links
  }
}
</script>

<style scoped>
footer {
  padding: 3em;
}
.gray {
  border-top: solid 1px #DDD;
  border-bottom: solid 1px #DDD;
  text-align: center;
}
</style>
