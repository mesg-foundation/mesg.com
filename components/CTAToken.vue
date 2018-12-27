<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex row justify-center align-center>
      <div class="content" flex column justify-center align-center>
        <h2>
          The MESG Token
        </h2>
        <p mb2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum orci eget convallis efficitur. Morbi urna massa.<br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum orci eget convallis efficitur. Morbi urna massa.
        </p>
        <nav flex justify-center align-center>
          <Button to="/" primary>Discover the MESG Token</Button>
        </nav>
      </div>
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

.container-parent {
  background-image:linear-gradient(155deg, rgba(37, 20, 64, 0.9) 0%, rgba(73, 30, 140, 0.9) 100%), url("~/assets/Build.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size:cover;
  text-align: center;
}

</style>
