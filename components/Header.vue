<template>
  <header class="container">
    <h1>Build applications connected to <AnimatedHeader :words="words"></AnimatedHeader></h1>
    <p>
      MESG is an open-source technology-agnostic framework for developing service-oriented applications.
      It’s a building platform where services can be connected to all technologies and be reused and shared so you can focus on innovation rather than implementation.
    </p>
    <p>
      <span class="mono shadow">bash &lt;(curl -s https://mesg.com/install)</span>
    </p>
    <Links docs github>
    </Links>
  </header>
</template>

<script>
import Links from '~/components/Links'
import AnimatedHeader from '~/components/AnimatedHeader'
export default {
  components: {
    Links,
    AnimatedHeader
  },
  computed: {
    words () {
      return [
        "Blockchain",
        "IoT",
        "Ethereum",
        "AWS",
        "Bitcoin",
        "Web API",
        "Anything"
      ]
    }
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
  @media only screen and (max-width: 480px) {
    h1 {
      font-size: 30px;
    }
    header {
      margin-top: 0;
    }
  }
  .mono {
    font-family: Menlo, Monaco, "Consolas", "Courier New", "Courier";
    background: #30353A;
    border-radius: 2px;
    border: solid .5px #555;
    padding: 1em 2em;
    font-weight: lighter;
    font-size: .8em;
    margin: 15px;
    color: white;
    max-width: 100%;
    display: inline-block;
    overflow: hidden;
  }
</style>
