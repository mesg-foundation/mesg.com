<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex row space-between>
      <header flex column justify-center half>
          <h1>
            Hey dude,
          </h1>
          <p mb05>
            Looks like that page doesn't exist.
          </p>
          <p class="min" mb2>
            Click on the button below to go back to Home, let's act like nothing happened
          </p>
          <nav flex>
            <Button href="/" primary>cd $HOME</Button>
          </nav>
      </header>
      <div flex column half align-center justify-center>
        <Schema404 />
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import Button from '~/components/Button'
import Schema404 from '~/components/Schema404'
export default {
  components: {
    Button,
    Schema404
  }
}
</script>

<style scoped>

p {
  font-size: 1.6em;
  font-weight: normal;
}
.min {
  font-size: 1em;
}

section {
  padding-top: 5.4em;
  min-height: 30vh;
}
.content {
  width: 100%;
  max-width: 960px;
}

@media only screen and (max-width: 768px) {
 header {
   text-align: center;
   align-items: center;
 }
 section {
   padding-top:4.8em;
   min-height: 0;
 }
 p {
   font-size: 1.4em;
 }
}

 @media only screen and (max-width: 414px) {
   p {
     font-size: 1.2em;
   }
   section {
     padding-top:3.8em;
   }
 }

</style>
