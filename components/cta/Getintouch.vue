<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex row justify-center align-center>
      <div class="content" flex column justify-center align-center>
        <h2>
          Start optimizing today
        </h2>
        <p mb2>
          Find out how you can start automating, streamlining and expanding your business today with MESG.
        </p>
        <nav flex>
          <Button href="https://goo.gl/forms/ifXyNfaQn8VC7pfu1" target="_blank" primary>Get in touch</Button>
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
  background-image:linear-gradient(155deg, rgba(73, 30, 140, 0.9) 0%, rgba(73, 30, 140, 0.9) 100%), url("~assets/Business.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size:cover;
  text-align: center;
}

.content {
  max-width: 600px;
}

code {
  text-align:center;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  font-weight: normal;
  font-size: 1em;
  color: #ffffff;
  color:var(--white-content);
  border: 1px solid #9452ff;
  background-color: #251440;
  background-color: var(--dark-purple);
  border-radius: 0.5em;
  padding:1.2em;
}

@media only screen and (max-width: 414px) {
  code {
    font-size: 0.8em;
  }
  [mb2] { margin-bottom: 2.4em!important; }
  [mb05] { margin-bottom: 0.8em!important; }
}
</style>
