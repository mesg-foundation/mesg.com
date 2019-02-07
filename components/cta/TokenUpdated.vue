<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex row justify-center align-center>
      <div class="content" flex column justify-center align-center>
        <IconToken2 class="token" mb1/>
        <h2>
          Build Modules, Earn Tokens
        </h2>
        <p mb2>
          The MESG Token will be available soon. Introducing the token for the new economy of development.
        </p>
        <Subscribe flex justify-center></Subscribe>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import IconToken2 from '~/components/icon/Token2'
import Subscribe from '~/components/Subscribe'
export default {
  components: {
    Subscribe,
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
