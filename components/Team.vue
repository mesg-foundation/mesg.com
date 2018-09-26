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
          { name: "Anthony Estebe", role: "CTO / Co-founder", pictureUrl: require("~/assets/Team/MESG-Anthony.jpg"), socialNetworks:[
            { type: "twitter", link: "https://twitter.com/antho1404" },
            { type: "linkedin", link: "https://www.linkedin.com/in/anthony-estebe-aab18831/" },
            { type: "github", link: "https://github.com/antho1404" }
          ] },
          { name: "Alexis Sirkia", role: "Co-founder", pictureUrl: require("~/assets/Team/MESG-Alexis.jpg"), socialNetworks: [
            { type: "linkedin", link: "https://www.linkedin.com/in/sirkia/" }
          ] },
          { name: "Nicolas Mahé", role: "CTO / Co-founder", pictureUrl: require("~/assets/Team/MESG-Nicolas.jpg"), socialNetworks: [
            { type: "linkedin", link: "https://www.linkedin.com/in/nicolas-mahe" },
            { type: "github", link: "https://github.com/NicolasMahe" }
          ] }
        ].sort((a, b) => a.name.localeCompare(b.name)),
        ...[
          { name: "Emmanuel Drouin", role: "Art Director", pictureUrl: require("~/assets/Team/MESG-Emmanuel.jpg"), socialNetworks: [
            { type: "twitter", link: "https://twitter.com/graphicSepion" },
            { type: "linkedin", link: "https://www.linkedin.com/in/emmanuel-drouin-2951937a/" }
          ] },
          { name: "Hubert Krauze", role: "Core Developer", pictureUrl: require("~/assets/Team/MESG-Team.jpg"), socialNetworks: [
            { type: "twitter", link: "https://twitter.com/krhubert" },
            { type: "linkedin", link: "https://www.linkedin.com/in/hubert-krauze-67a6389b/" },
            { type: "github", link: "https://github.com/krhubert" }
          ] },
          { name: "Ilker Öztürk", role: "Core Developer", pictureUrl: require("~/assets/Team/MESG-Team.jpg"), socialNetworks: [
            { type: "twitter", link: "https://twitter.com/ilgooz" },
            { type: "github", link: "https://github.com/ilgooz" }
          ] },
          { name: "Janie Lim", role: "Chief Evangelist", pictureUrl: require("~/assets/Team/MESG-Janie.jpg"), socialNetworks: [
            { type: "twitter", link: "https://twitter.com/koreanoprah" },
            { type: "linkedin", link: "https://www.linkedin.com/in/janie-lim-135968b5/" }
          ] },
          { name: "Will Morgan", role: "Executive Brand Manager", pictureUrl: require("~/assets/Team/MESG-Will.jpg"), socialNetworks: [
            { type: "twitter", link: "https://twitter.com/dwilliamsmorgan" },
            { type: "linkedin", link: "https://www.linkedin.com/in/will-morgan-02a18326/" }
          ] }
        ].sort((a, b) => a.name.localeCompare(b.name)),
        ...[
          { name: "Join the MESG Team", role: "Feel free to send us your resume", pictureUrl: require("~/assets/Team/MESG-Join.jpg"), socialNetworks: [
            { type: "mail", link: "https://docs.google.com/forms/d/e/1FAIpQLSdUymFdlMjaqcjr2ruRvxPQi1CbDp7a9cS-_3wxNvmg3UaR9Q/viewform" }
          ] }
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
