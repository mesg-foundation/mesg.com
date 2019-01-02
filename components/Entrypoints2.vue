<template>
  <section>
    <div class="container-parent">
      <div class="container-child" flex row justify-center spacebetween>
        <nav flex row justify-center align-center>
          <nuxt-link to="team" class="card">
            <div flex column justify-center align-center>
              <IconTeam class="icon" mb1/>
              <h2 mb05>Team</h2>
              <p>The people behind MESG</p>
            </div>
          </nuxt-link>
          <nuxt-link to="/roadmap" class="card">
            <div flex column justify-center align-center>
              <IconRoadmap class="icon" mb1/>
              <h2 mb05>Roadmap</h2>
              <p>Our vision and goals</p>
            </div>
          </nuxt-link>
          <nuxt-link to="faq" class="card">
            <div flex column justify-center align-center>
              <IconFAQ class="icon" mb1/>
              <h2 mb05>FAQ</h2>
              <p>Find more about MESG</p>
            </div>
          </nuxt-link>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
import IconRoadmap from '~/components/IconRoadmap'
import IconTeam from '~/components/IconTeam'
import IconFAQ from '~/components/IconFAQ'
export default {
  components: {
    IconRoadmap,
    IconTeam,
    IconFAQ
  },
  props: {
    to: String
  }
}
</script>

<style scoped>

h2 {
  margin-bottom:0;
  text-decoration: none;
}

P {
  text-align:center;
}

svg{
  margin-top:0;
}

.icon {
  max-width: 100px;
}

.card {
  text-decoration: none;
  width: 390px;
  border-radius:10px;
  background-color: #ffffff;
  background-color: var(--white-content);
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
  padding:2.4em;
  margin:1.2em;
}
.card:hover {
  transition: calc(var(--animation-speed) * 0.1s) ease;
  box-shadow: 0 0 40px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

@media only screen and (max-width: 768px) {
  .card {
    width: 100%;
    margin: 1.2em;
  }
}
@media only screen and (max-width: 768px) {
  .card {
    padding:1.8em;
  }
}


</style>
