<template>
  <header class="container mb-big">
    <h1 class="mb-big">Build applications connected to <span class="animatedHeader"><AnimatedHeader :words="words"></AnimatedHeader></span></h1>
    <p class="mb-big">
      MESG is an open-source technology-agnostic framework for developing service-oriented applications.
      It’s a building platform where services can be connected to all technologies and be reused and shared so you can focus on innovation rather than implementation.
    </p>
    <p class="mb-big tagline">Event-driven architecture and interoperability meets decentralization.</p>
    <p class="mb-big">
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
  .tagline {
    font-weight: 500;
    color: white;
  }
  .mb-big {
    margin-bottom: 60px;
  }
  header {
    margin-top: 80px;
    text-align: center;
  }
  h1 {
    font-size: 40px;
  }
  p {
    max-width: 900px;
    font-size: 1.25em;
    margin: auto;
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
    color: white;
    max-width: 100%;
    display: inline-block;
    overflow: hidden;
  }
  @media only screen and (max-width: 500px) {
    .mono {
      width: 300px
    }
  }
  @media only screen and (max-width: 700px) {
    header {
      margin-top: 20px;
    }
  }
  @media only screen and (max-width: 870px) {
    h1 .animatedHeader {
      display: block;
    }
  }
</style>
