<template>
  <Container flex column align-center>
    <h2 class="text-center" mb2>Already building on MESG</h2>
    <ul flex row align-center>
      <li>
        <a href="https://omisego.co/" target="_blank" class="link-secondary">
          <img src="~/assets/partners/omisego.svg" alt="OmiseGO logo" />
        </a>
      </li>
      <li>
        <a href="https://aragon.org/" target="_blank" class="link-secondary">
          <img src="~/assets/partners/aragon.svg" alt="Aragon logo" />
        </a>
      </li>
      <li>
        <a href="https://projecthydro.org/" target="_blank" class="link-secondary">
          <img src="~/assets/partners/hydro.svg" alt="Hydro logo" />
        </a>
      </li>
      <li>
        <a href="https://beachhead.com/" target="_blank" class="link-secondary">
          <img src="~/assets/partners/beachhead.svg" alt="BeachHead logo" />
        </a>
      </li>
      <li>
        <a href="https://www.yellow.com/" target="_blank" class="link-secondary">
          <img src="~/assets/partners/yellow.svg" alt="Yellow logo" />
        </a>
      </li>
    </ul>
  </Container>
</template>

<script>
import Container from "~/components/Container";
export default {
  components: { Container }
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  margin-left: 0;
  li {
    margin-bottom: 0;
    max-width: 170px;
    height: 40px;
    text-align: center;
    img {
      height: 40px;
    }
  }
}
@media only screen and (max-width: $mobile-breakpoint) {
  li {
    margin-right: $margin;
  }
}
@media only screen and (max-width: $mobile-only) {
  ul {
    flex-direction: column;
    li {
      text-align: center;
      margin-bottom: $margin !important;
      margin-right: 0;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
