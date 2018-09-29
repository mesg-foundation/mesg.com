<template>
  <section>
  <div class="container-parent">
      <div class="container-child" flex row space-between align-center>
        <div half flex column justify-center align-center>
        <h2>Join our community</h2>
        <p mb2>MESG is fueled by participation and is truly community-driven.
          Take the reigns: building is in your hands. Start by building applications, connecting businesses, or contributing to the community.</p>
          <nav flex>
            <Button href="https://docs.mesg.com/" target="_blank" purple><i class="fas fa-code"></i> Developers</Button>
          </nav>
        </div>
        <div class="line-separator" flex column justify-center align-center>
        </div>
        <div half flex column justify-center align-center>
        <h2>Get involved today</h2>
        <p mb2>Find out how you can get involved and start benefiting from this massively powerful tool today.</p>
          <nav flex>
            <Button href="https://goo.gl/forms/ifXyNfaQn8VC7pfu1" target="_blank" primary><i class="fas fa-chart-line"></i> Business</Button>
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
h2 {
  text-align: center;
}

p {
  text-align: center;
}

i {
  margin-right: 0.3em;
}

.line-separator {
  height: 245px;
  max-height: 100%;
  border-style: solid;
  border-width: 1px;
  border-image-source: linear-gradient(to top, #9452ff 0%, #30b24b 100%);
  border-image-source: linear-gradient(to top, var(--lighter-purple) 0%, var(--green-cta) 100%);
  border-image-slice: 1;
}
@media only screen and (max-width: 768px) {
  .line-separator {
    width: 100%;
    max-width: 100%;
    height: 1px;
    margin: 0;
    margin-top: 2.4em;
    margin-bottom: 2.4em;
    border-image-source: linear-gradient(to right, #9452ff 0%, #30b24b 100%);
    border-image-source: linear-gradient(to right, var(--lighter-purple) 0%, var(--green-cta) 100%);
    border-image-slice: 1;
  }
}
@media only screen and (max-width: 414px) {
  .line-separator {
    margin-top: 1.6em;
    margin-bottom: 1.6em;
  }
}
</style>
