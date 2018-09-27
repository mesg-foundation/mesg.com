<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex row space-between column-reverse-responsive align-center>
      <div half>
        <nav flex row>
          <span flex column align-center>
            <IconDevelopers mb1 />
            Developers
          </span>
          <span flex column align-center>
            <IconEnterprises mb1 />
            Enterprises
          </span>
          <span flex column align-center mb0>
            <IconEntrepreneurs mb1 />
            Entrepreneurs
          </span>
          <span flex column align-center mb0>
            <IconIncubators mb1 />
            Incubators
          </span>
        </nav>
      </div>
      <div half>
        <h2>An ultra-efficient solution built for you</h2>
        <p>
          <strong>MESG is fueled by a single vision: to create a building platform powered by automation that is infinitely compatible and massively efficient.</strong>
          <br>
          <br>
          The MESG infrastructure is a combination of best processes that deliver power and efficiency: an open source infrastructure featuring event-driven architecture for building businesses and apps connecting technologies through a decentralized Core.
          <br>
          <br>
          It gives developers and entrepreneurs complete freedom to own their ideas, plus the flexibility to implement them when and how they want to, all while getting rewarded for their participation in the network.
        </p>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import IconDevelopers from '~/components/IconDevelopers'
import IconEnterprises from '~/components/IconEnterprises'
import IconEntrepreneurs from '~/components/IconEntrepreneurs'
import IconIncubators from '~/components/IconIncubators'
export default {
  components: {
    IconDevelopers,
    IconEnterprises,
    IconEntrepreneurs,
    IconIncubators
  }
}
</script>

<style scoped>
span {
  font-family: Quicksand;
  font-size: 1.4em;
  text-decoration: none;
  color: #9452ff;
  color: var(--lighter-purple);
  width: 50%;
  margin-bottom: 2.4em;
}
@media only screen and (max-width: 768px) {
  span {
    margin-bottom: 0;
  }
  svg {
    margin-top: 2.4em;
  }
}
@media only screen and (max-width: 320px) {
  span {
    width: 100%;
    margin-bottom: 0;
  }
}
@media only screen and (max-width: 414px) {
  span {
    margin-bottom: 0;
  }
}


</style>
