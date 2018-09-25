<template>
  <section>
    <div class="container-parent">
      <div class="container-child-title" flex row justify-center align-center>
          <h2>The MESG Team</h2>
      </div>
      <div class="container-child">
        <div flex row justify-center>
          <TeamMate
            v-for="(t, i) in team" :key="i"
            class="card"
            flex row
            :name="t.name"
            :pictureUrl="t.pictureUrl"
            :role="t.role"
            :socialNetworks="t.socialNetworks"/>
        </div>
      </div>
      <div class="container-child-title" flex row justify-center align-center>
          <h2>Our Amazing partners</h2>
      </div>
    </div>
  </section>
</template>

<script>
import TeamMate from '~/components/TeamMate'
export default {
  components: {
    TeamMate
  },
  data () {
    return {
      team: [
        ...[
          { name: "Anthony Estebe", role: "CTO / Co-founder", pictureUrl: require("~/assets/AnthonyEstebe.jpg"), socialNetworks: [
            { type: "telegram", link: "safsafasda" },
            { type: "mail", link: "affeaffeafea" },
            { type: "twitter", link: "faejbfea" },
            { type: "linkedin", link: "faejbfea" },
            { type: "github", link: "faejbfea" }
          ] },
          { name: "Alexis Sirkia", role: "Co-founder", pictureUrl: require("~/assets/AlexisSirkia.jpeg"), socialNetworks: [
            { type: "telegram", link: "sdsafafa" },
            { type: "mail", link: "affeaffeafea" },
            { type: "twitter", link: "faejbfea" },
            { type: "linkedin", link: "faejbfea" }
          ] },
          { name: "Nicolas Mahé", role: "CTO / Co-founder", pictureUrl: require("~/assets/NicolasMahe.jpg"), socialNetworks: [
            { type: "telegram", link: "safsafasda" },
            { type: "mail", link: "affeaffeafea" },
            { type: "twitter", link: "faejbfea" },
            { type: "linkedin", link: "faejbfea" },
            { type: "github", link: "faejbfea" }
          ] }
        ].sort((a, b) => a.name.localeCompare(b.name)),
        ...[
          { name: "Emmanuel Drouin", role: "Art Director", pictureUrl: require("~/assets/EmmanuelDrouin.jpg"), socialNetworks: [
            { type: "telegram", link: "safsafasda" },
            { type: "twitter", link: "faejbfea" },
            { type: "linkedin", link: "faejbfea" }
          ] },
          { name: "Hubert Krauze", role: "Core Developer", pictureUrl: "https://picture.com", socialNetworks: [
            { type: "telegram", link: "safsafasda" },
            { type: "twitter", link: "faejbfea" },
            { type: "linkedin", link: "faejbfea" },
            { type: "github", link: "faejbfea" }
          ] },
          { name: "Ilker Öztürk", role: "Core Developer", pictureUrl: "https://picture.com", socialNetworks: [
            { type: "telegram", link: "safsafasda" },
            { type: "twitter", link: "faejbfea" },
            { type: "linkedin", link: "faejbfea" },
            { type: "github", link: "faejbfea" }
          ] },
          { name: "Janie Lim", role: "Chief Evangelist", pictureUrl: require("~/assets/JanieLim.jpg"), socialNetworks: [
            { type: "telegram", link: "safsafasda" },
            { type: "twitter", link: "faejbfea" },
            { type: "linkedin", link: "faejbfea" }
          ] },
          { name: "Will Morgan", role: "Executive Brand Manager", pictureUrl: require("~/assets/WillMorgan.jpg"), socialNetworks: [
            { type: "telegram", link: "safsafasda" },
            { type: "twitter", link: "faejbfea" },
            { type: "linkedin", link: "faejbfea" }
          ] }
        ].sort((a, b) => a.name.localeCompare(b.name)),
        ...[
          { name: "Join the MESG Team", role: "Feel free to send us your resume", pictureUrl: "", socialNetworks: [] }
        ]
      ]
    }
  }
}
</script>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 0;
}
h3 {
  margin-bottom: 0em;
}

.card {
  margin: 1.2em;
}
@media only screen and (max-width: 768px) {
  .card {
    margin: 0em;
    margin-bottom: 2.4em;
  }
}
</style>
