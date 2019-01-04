<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex row space-between>
      <div class="paragraphe" half flex column justify-center>
        <h2>Fueling the new economy of development</h2>
        <p mb1>
          The MESG token is a utility token that has three purposes: <strong>access, incentives and governance</strong>.
        </p>
        <h4 mb05>Access</h4>
        <p mb1>
          Tokens provide access to the MESG Market where users buy and sell the components of applications.
        </p>
        <h4 mb05>Incentives</h4>
        <p mb1>
          Participants of all levels are rewarded for helping maintain the functionality and governance of the network, or to provide new components of applications
        </p>
        <h4 mb05>Governance</h4>
        <p mb2>
          Governance in MESG is based on a proof of stake system where users are required to stake tokens as collateral to participate. The more tokens a user stakes, the more potential income is earned.
        </p>
        <nav>
          <nuxt-link to="/market" class="link">Find out more about the economy<i class="fas fa-arrow-right"></i></nuxt-link>
        </nav>
      </div>
      <div half flex column>
        <h2>The MESG Token</h2>
        <p mb2>
          <strong>Token Distribution </strong>
            <ul mb1 mt05>
              <li>Token supply <span>250MM</span></li>
              <li>Sale Distribution <span>62.5%</span></li>
              <li>Reserve <span>20%</span></li>
              <li>Team and Founders <span>12.5%</span></li>
              <li>Partners <span>5%</span></li>
            </ul>
        </p>
        <nav>
          <nuxt-link to="/roadmap" class="link">Check out our current phase in our roadmap<i class="fas fa-arrow-right"></i></nuxt-link>
        </nav>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import SchemaBusiness from '~/components/SchemaBusiness'
export default {
  components: {
    SchemaBusiness
  }
}
</script>

<style scoped>

i {
  padding-left:0.6em;
}

span {
  font-weight: bold;
  color:#ffa744;
  color:var(--Orange-cta);
}

@media only screen and (max-width: 768px) {
  .paragraphe {
    margin-bottom: 2.4em;
  }
}
@media only screen and (min-width: 414px) {
  .container-child {
    padding-bottom:0;
  }
}
@media only screen and (max-width: 414px) {
  .paragraphe {
    margin-bottom: 1.8em;
  }
}

</style>
