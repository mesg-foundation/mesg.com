<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex row justify-center align-center>
      <div class="content" flex column justify-center align-center>
        <IconToken2 class="token" mb1/>
        <h1>
          Build Modules, Earn Tokens
        </h1>
        <p mb2>
          The MESG Token will be available soon. Introducing the token for the new economy of development.
        </p>
        <nav flex>
          <Button href="http://eepurl.com/drKt-5" target="_blank" primary>Keep me updated</Button>
        </nav>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import Button from '~/components/Button'
import IconToken2 from '~/components/icon/Token2'
export default {
  components: {
    Button,
    IconToken2
  }
}
</script>

<style scoped>

svg {
  margin-top:0;
}

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
  max-width: 100px;
}

</style>
