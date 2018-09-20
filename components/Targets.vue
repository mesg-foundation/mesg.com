<template>
  <section>
    <div class="container" flex row space-between column-reverse-mobile>
      <div half justify-center>
        <nav flex row>
          <span flex column justify-center align-center>
            <IconDevelopers mb2 />
            Developers
          </span>
          <span flex column justify-center align-center>
            <IconEnterprises mb2 />
            Enterprises
          </span>
          <span flex column justify-center align-center mb0>
            <IconEntrepreneurs mb2 />
            Entrepreneurs
          </span>
          <span flex column justify-center align-center mb0>
            <IconIncubators mb2 />
            Incubators
          </span>
        </nav>
      </div>
      <div half>
        <h2 mb1>An ultra-efficient solution built for you</h2>
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
  font-size: 24px;
  text-decoration: none;
  color: #9452ff;
  color: var(--lighter-purple);
  margin-bottom: 60px;
  width: 50%;
}

h2 {
  margin-top: 20px;
}
</style>
