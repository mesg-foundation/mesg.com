<template>
  <section>
    <div class="container-parent">
      <div class="container-child" flex row justify-center spacebetween>
        <nav flex row justify-center align-center>
          <nuxt-link to="team" class="card">
            <div flex column justify-center align-center>
              <IconEntrepreneurs mb1/>
              <h2 mb05>Team</h2>
              <p>The people behind MESG</p>
            </div>
          </nuxt-link>
          <nuxt-link to="/roadmap" class="card">
            <div flex column justify-center align-center>
              <IconIncubators mb1/>
              <h2 mb05>Roadmap</h2>
              <p>Our vision and goals</p>
            </div>
          </nuxt-link>
          <nuxt-link to="faq" class="card">
            <div flex column justify-center align-center>
              <IconDevelopers mb1/>
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
import IconIncubators from '~/components/IconIncubators'
import IconEntrepreneurs from '~/components/IconEntrepreneurs'
import IconDevelopers from '~/components/IconDevelopers'
export default {
  components: {
    IconIncubators,
    IconEntrepreneurs,
    IconDevelopers
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

svg{
  margin-top:0;
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


</style>
