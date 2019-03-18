<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex row justify-center align-center>
      <div class="content" flex column justify-center align-center>
        <h2>
          Next Use Case
        </h2>
        <p mb2>Discover our next use case to take a look at the solution we provided for our client.</p>
        <nav flex>
          <Button to="/" primary>Discover the Use Case</Button>
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
  background-image:linear-gradient(155deg, rgba(73, 30, 140, 0.9) 0%, rgba(73, 30, 140, 0.9) 100%), url("~assets/Contact.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size:cover;
  text-align: center;
}

.content {
  max-width: 600px;
}

</style>
