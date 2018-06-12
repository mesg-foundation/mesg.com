<template>
  <header class="container">
    <h1>Build future-proof applications</h1>
    <p>
      MESG is an open-source decentralized infrastructure for advanced application development that makes all technologies, including blockchains, interoperable.
    </p>
    <p class="extra">
      It’s a building platform for developers.
    </p>
    <Links docs github></Links>
  </header>
</template>

<script>
import Links from '~/components/Links'
export default {
  components: {
    Links
  }
}
</script>

<style scoped>
  header {
    margin-top: 120px;
    margin-bottom: 75px;
    text-align: center;
  }
  h1 {
    font-size: 40px;
  }
  p {
    max-width: 800px;
    font-size: 1.25em;
    margin: auto;
    margin-bottom: 80px;
  }
  .extra {
    font-weight: bold;
  }
  @media only screen and (max-width: 480px) {
    h1 {
      font-size: 30px;
    }
    header {
      margin-top: 0;
    }
    .extra {
      display: none;
    }
  }
</style>
