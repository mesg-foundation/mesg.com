<template>
  <section>
    <div class="container" flex row>
      <header flex column justify-center half>
        <img mb1 class="logo" src="~/assets/mesg-logo-horizontal-white.svg" alt="MESG">
        <h2 mb1 mt0>Build applications connecting any technologies</h2>
        <p mb1 mt0>Automate and expand business functions through a decentralized reward-driven ecosystem.</p>
        <nav flex>
          <Button href="#" mr1 primary>Get in Touch</Button>
          <Button href="#" outline>Learn More</Button>
        </nav>
      </header>
      <div flex half align-center justify-center>
        <img class="schema" src="~/assets/mesg-schema-header@3x.png" alt="MESG-header">
      </div>
    </div>
  </section>
</template>

<script>
import Button from '~/components/Button'
export default {
  components: {
    Button
  }
}
</script>


<style scoped>
section {
  height: 1024px;
  padding-top: 80px;
  background-image: linear-gradient(55deg, #251440, #491e8c);
  background-image: linear-gradient(55deg, var(--dark-blue-grey), var(--purple));
}

.container > * {
  width: 50%;
}

.schema {
  width: 100%;
  height: 701px;
  object-fit: contain;
}

.logo {
  width: 376px;
}

h2 {
  font-family: Quicksand;
  font-size: 38px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #f1f0f8;
  color: var(--pale-grey);
}

p {
  font-family: Quicksand;
  font-size: 24px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #f1f0f8;
  color: var(--pale-grey);
}
</style>
