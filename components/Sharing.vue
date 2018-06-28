<template>
  <section>
    <div class="container">
      <h2>Share and Reuse Services</h2>
      <p>By connecting services to Core rather than your application, they can be re-used and shared, effectively transforming services into sharable commodities.</p>
      <p>Core features event-driven architecture, allowing you to experiment with different services, including cross-chain transactions. This allows maximum flexibility to keep iterating your application until your perfect solution is developed. </p>
      <p class="no-border">That’s just the beginning. Together we're building a decentralized infrastructure so developers can just plug and play and be rewarded for their contributions. </p>
      <nuxt-link class="button hover button--success" to="/marketplace">Check out existing services →</nuxt-link>
    </div>
  </section>
</template>

<style scoped>
  .container {
    max-width: 100%;
    width: 790px;
  }
  p {
    text-align: justify;
    margin-bottom: 1.5em;
  }
  .no-border {
    margin-bottom: 0px
  }
  a {
    margin-top: 40px;
  }
</style>
