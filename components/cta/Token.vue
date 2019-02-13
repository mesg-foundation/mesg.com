<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex row justify-center align-center>
      <div class="content" flex column justify-center align-center>
        <AlgorithmicToken class="token" mb1/>
        <h2>
          Build Modules, Earn Tokens
        </h2>
        <p mb2>
          The MESG Token will be available soon. Introducing the token for the new economy of development.
        </p>
        <nav flex>
          <Button to="token" primary>Discover the MESG Token</Button>
        </nav>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import Button from '~/components/Button'
import AlgorithmicToken from '~/components/schema/AlgorithmicToken'
export default {
  components: {
    Button,
    AlgorithmicToken
  }
}
</script>

<style scoped>

.container-parent {
  background-image:linear-gradient(155deg, rgba(73, 30, 140, 0.9) 0%, rgba(73, 30, 140, 0.9) 100%), url("~/assets/Contact.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size:cover;
  text-align:center;
}

.content {
  max-width: 600px;
}

.token {
  max-width: 300px;
}

</style>
