<template>
  <section>
    <div class="container-parent">
      <div class="container-child" flex row justify-center spacebetween>
        <div class="card dark" flex row justify-center align-center>
          <div class="third" flex column justify-center align-center>
            <Iconhackathon class="icon"/>
          </div>
          <div class="third resp" flex column justify-center>
            <h2 mb05>MESG Online Hackathon</h2>
            <p mb05><strong>Build a kickass application with MESG and win up to <span>$10,000 in MESG tokens</span><i class="fas fa-terminal" ml05></i></strong></p>
            <p class="date"><i class="far fa-calendar-check" mr05></i>January 18th to February 17th</p>
          </div>
          <div class="third" flex column justify-center align-center>
            <Button href="https://mesg-hackathon.devpost.com/" target="_blank" outline>Register Now</Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Iconhackathon from '~/components/icon/hackathon'
import Button from '~/components/Button'
export default {
  components: {
    Iconhackathon,
    Button
  },
  props: {
    to: String
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

.date {
  opacity:0.65;
}

h2 {
  margin-bottom:0;
  text-decoration: none;
}

svg {
  margin-top:0;
}

span {
  color: #ffa744;
  color: var(--Orange-cta);
}

.icon {
  max-width: 180px;
}

.card {
  width: 100%;
  border-radius:0.3em;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
}

.third {
  width: 33%;
  padding:1.2em;
}

@media only screen and (max-width: 768px) {
  .third {
    width: 100%;
    padding:1.8em;
  }
  h2 {
    text-align:center;
  }
  p {
    text-align:center;
  }
  .icon {
    padding-bottom:0;
  }
  .resp {
    padding-top:0;
    padding-bottom:0;
  }
}
</style>
