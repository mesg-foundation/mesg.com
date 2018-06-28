<template>
  <div class="footer">
    <footer class="dark">
      <div class="container">
        <h2>Get started and join us now!</h2>
        <Links docs github blog discussion small></Links>
      </div>
    </footer>
    <Discord id="448501704388902912"></Discord>
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
  padding: 80px 0;
}
.dark {
  text-align: center;
}
</style>
