<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex row space-between>
      <div class="paragraphe" half flex column justify-center>
        <h2>Algorithmic token offering</h2>
        
        <h4 mb05>Supply Distribution</h4>
        <p mb1>The supply distribution of 62.5% will be released in daily allotments.</p>
        
        <h4 mb05>Algorithm</h4>
        <p mb1>Daily allotment will be calculated as a small percentage of the previous day’s trading volume, tying tokens released to actual demand.</p>
        
        <h4 mb05>Initial supply</h4>
        <p mb1>On the first day of the exchange listing, 0.1% of the total supply will be released to initiate the supply.</p>

        <h4 mb05>Transparency</h4>
        <p mb1>Metrics will be published daily to enhance transparency between the MESG Foundation and the community.</p>
      </div>
      <div half flex column>
        <h2>The MESG Token</h2>
        <p mb2>
          <strong>Token Distribution </strong>
          <ul mb1 mt05>
            <li>Total token supply <span>250MM</span></li>
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
import SchemaBusiness from '~/components/schema/Business'
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
