<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex row justify-center align-center>
      <div class="content" flex column justify-center align-center>
        <h2>
          Get started today
        </h2>
        <p mb05>
          MESG’s revolutionary development tool is available now, allowing you to build and connect apps and Modules.
        </p>
        <p mb05>
          <strong>To get started, open your terminal and run:</strong>
        </p>
          <code flex column justify-center align-center mb2>
            bash &lt;(curl -fsSL https://mesg.com/install)
          </code>
        <nav flex justify-center align-center>
          <Button href="https://docs.mesg.com/" target="_blank" primary>Get Started</Button>
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
  background-image:linear-gradient(155deg, rgba(73, 30, 140, 0.9) 0%, rgba(73, 30, 140, 0.9) 100%), url("~assets/Build.jpg");
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
