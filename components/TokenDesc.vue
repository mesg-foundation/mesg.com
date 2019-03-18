<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex row space-around>
      <div flex column justify-center align-center>
        <h2>Algorithmic Token Distribution</h2>
        <div class="separator-orange" flex column justify-center align-center mb2></div>
      </div>
      <div flex row justify-center>
        <div class="paragraphe" half flex column justify-center mr2>
          <h4 mb05>Supply distribution</h4>
          <p mb1>The supply distribution of 62.5% will be released in daily allotments.</p>

          <h4 mb05>The algorithm</h4>
          <p mb1>Daily allotment will be calculated as a small percentage of the previous day’s trading volume, tying tokens released to actual demand.</p>

          <h4 mb05>Initial supply</h4>
          <p mb1>0.1% of the total supply was released on the first day of exchange listing to initiate the supply.</p>

          <h4 mb05>Transparency</h4>
          <p>Metrics will be published daily to enhance transparency between the MESG Foundation and the community.</p>
        </div>
        <div half flex column class="card" justify-center>
          <h4 mb05>Token Distribution </h4>
          <p>
            <ul mb1 mt05>
              <li>Total token supply <span>250MM</span></li>
              <li>Sale Distribution <span>62.5%</span></li>
              <li>Reserve <span>20%</span></li>
              <li>Team and Founders <span>12.5%</span></li>
              <li>Partners & Bounties <span>5%</span></li>
            </ul>
          </p>
          <nav flex mt2>
            <Button to="/roadmap" outline>Check out our current phase in our roadmap</Button>
          </nav>
        </div>
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
  padding-bottom:0;
}
.container-child {
  padding-bottom:0;
}

.card {
  border-radius: 0.3em;
  padding:3.6em;
  background-color: #ffffff;
  background-color: var(--white-content);
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.07);
}

span {
  font-weight: bold;
  color:#ffa744;
  color:var(--Orange-cta);
}

@media only screen and (max-width: 768px) {
  h2 {
    text-align: center;
  }
  .paragraphe {
    margin-bottom: 2.4em;
  }
}
@media only screen and (max-width: 414px) {
  .paragraphe {
    margin-bottom: 1.8em;
  }
  .card {
    padding:1.8em;
  }
}

</style>
