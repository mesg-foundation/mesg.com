<template>
  <Container flex column align-center>
    <h2 class="text-center" mb2>Already building on MESG</h2>
    <ul flex row wrap>
      <li>
        <a href="https://omisego.co/" target="_blank" class="link-secondary">
          <img mr2 src="~/assets/partners/omisego.svg" alt="OmiseGO logo" />
        </a>
      </li>
      <li>
        <a href="https://projecthydro.org/" target="_blank" class="link-secondary">
          <img mr2 src="~/assets/partners/hydro.svg" alt="Hydro logo" />
        </a>
      </li>
      <li>
        <a href="https://beachhead.com/" target="_blank" class="link-secondary">
          <img mr2 src="~/assets/partners/beachhead.svg" alt="BeachHead logo" />
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
img {
  height: 40px;
  width: auto;
}
ul {
  li {
    margin-left: 0;
    &:before {
      display: none;
    }
  }
}
@media only screen and (max-width: $mobile-only) {
  img,
  li {
    width: 100%;
    margin-right: 0 !important;
    margin-bottom: var(--margin);
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
