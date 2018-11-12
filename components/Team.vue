<template>
  <section>
    <div class="container-parent">
      <div class="container-child-title" flex row justify-center align-center>
          <h2>The Core of the Project</h2>
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
            :separator="t.separator"
            :companies="t.companies"
            :socialNetworks="t.socialNetworks"/>
        </div>
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
          { name: "Anthony Estebe", role: "Co-founder", pictureUrl: require("~/assets/Team/MESG-Anthony.jpg"), socialNetworks:[
            { type: "twitter", link: "https://twitter.com/antho1404" },
            { type: "linkedin", link: "https://www.linkedin.com/in/anthony-estebe-aab18831/" },
            { type: "github", link: "https://github.com/antho1404" }
          ],
          companies:[
            { alt: "Schlumberger", src: require("~/assets/Company/Schlumberger.png") },
            { alt: "Gozilio", src: require("~/assets/Company/Gozilio.png") }          ]
          },
          { name: "Nicolas Mahé", role: "Co-founder", pictureUrl: require("~/assets/Team/MESG-Nicolas.jpg"), socialNetworks: [
            { type: "linkedin", link: "https://www.linkedin.com/in/nicolas-mahe" },
            { type: "github", link: "https://github.com/NicolasMahe" }
          ],
          companies:[
            { alt: "Cryptofolio", src: require("~/assets/Company/Cryptofolio.png") },
            { alt: "Gsr", src: require("~/assets/Company/GSR.png") }          ]
          },
          { name: "Alexis Sirkia", role: "Co-founder", pictureUrl: require("~/assets/Team/MESG-Alexis.jpg"), socialNetworks: [
            { type: "linkedin", link: "https://www.linkedin.com/in/sirkia/" }
          ],
          companies:[
            { alt: "Yellow", src: require("~/assets/Company/Yellow.png") },
            { alt: "Gsr", src: require("~/assets/Company/GSR.png") },
            { alt: "Momemtum", src: require("~/assets/Company/Momemtum.png") },
            { alt: "PredictionVC", src: require("~/assets/Company/prediction.png") }          ]
          }
        ],
        ...[
          { name: "Adriaan Du Toit", role: "Head of Operations", pictureUrl: require("~/assets/Team/MESG-Adriaan.jpg"), socialNetworks: [
            { type: "linkedin", link: "https://www.linkedin.com/in/adriaandt/" }
          ],
          companies:[
            { alt: "Sage", src: require("~/assets/Company/Sage.png") },
            { alt: "Naspers", src: require("~/assets/Company/Naspers.png") }          ]
          },
          { name: "Janie Lim", role: "Chief Evangelist", pictureUrl: require("~/assets/Team/MESG-Janie.jpg"), socialNetworks: [
            { type: "telegram", link: "https://telegram.me/janielim" },
            { type: "twitter", link: "https://twitter.com/koreanoprah" },
            { type: "linkedin", link: "https://www.linkedin.com/in/janie-lim-135968b5/" }
          ],
          companies:[
            { alt: "Toyota", src: require("~/assets/Company/Toyota.png") },
            { alt: "Momemtum", src: require("~/assets/Company/Momemtum.png") }          ]
          },
          { name: "Will Morgan", role: "Executive Brand Manager", pictureUrl: require("~/assets/Team/MESG-Will.jpg"), socialNetworks: [
            { type: "twitter", link: "https://twitter.com/dwilliamsmorgan" },
            { type: "linkedin", link: "https://www.linkedin.com/in/will-morgan-02a18326/" }
          ] },
          { name: "Emmanuel Drouin", role: "UI / UX Designer", pictureUrl: require("~/assets/Team/MESG-Emmanuel.jpg"), socialNetworks: [
            { type: "linkedin", link: "https://www.linkedin.com/in/emmanuel-drouin-2951937a/" }
          ] },
          { name: "Hubert Krauze", role: "Core Developer", pictureUrl: require("~/assets/Team/MESG-Hubert.jpg"), socialNetworks: [
            { type: "linkedin", link: "https://www.linkedin.com/in/hubert-krauze-67a6389b/" },
            { type: "github", link: "https://github.com/krhubert" }
          ] },
          { name: "İlker Göktuğ Öztürk", role: "Core Developer", pictureUrl: require("~/assets/Team/MESG-Ilker.jpg"), socialNetworks: [
            { type: "twitter", link: "https://twitter.com/ilgooz" },
            { type: "linkedin", link: "https://www.linkedin.com/in/ilker-goktug-ozturk/" },
            { type: "github", link: "https://github.com/ilgooz" }
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
@media only screen and (max-width: 414px) {
  h2 {
    margin-bottom: 0;
  }
  .card {
    margin: 0em;
    margin-bottom: 1.2em;
  }
}
</style>
