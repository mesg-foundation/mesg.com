<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex row justify-center align-center>
      <header flex column justify-center align-center>
        <IconToken2 class="token" mb1/>
        <h1>
          Purchase the MESG token
        </h1>
        <p mb2>
          The MESG token will be listing soon, get up to date by clicking on the button below to make sure you won't miss it.
        </p>
        <nav flex>
          <Button to="token" primary>Discover the MESG token</Button>
        </nav>
      </header>
    </div>
  </div>
  </section>
</template>

<script>
import Button from '~/components/Button'
import IconToken2 from '~/components/IconToken2'
export default {
  components: {
    Button,
    IconToken2
  }
}
</script>

<style scoped>

.container-parent {
  background-image:linear-gradient(155deg, rgba(37, 20, 64, 0.9) 0%, rgba(73, 30, 140, 0.9) 100%), url("~/assets/Contact.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size:cover;
  text-align:center;
}

.token {
  max-width: 100px;
}

</style>
