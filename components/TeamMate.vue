<template>
  <div class="Rectangle-white" flex row space-between align-center>
    <div class="Picture" flex column>
      <img :src="pictureUrl" :alt="name">
    </div>
    <div class="content" flex column>
      <h4>{{name}}</h4>
      <p>{{role}}</p>
      <nav>
        <a v-if="telegram" :href="telegram.href"><i class="fab fa-telegram-plane"></i></a>
        <a v-if="mail" :href="mail.href"><i class="fas fa-envelope"></i></a>
        <a v-if="twitter" :href="twitter.href"><i class="fab fa-twitter"></i></a>
        <a v-if="linkedin" :href="linkedin.href"><i class="fab fa-linkedin-in"></i></a>
        <a v-if="github" :href="github.href"><i class="fab fa-github-alt"></i></a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pictureUrl: String,
    name: String,
    role: String,
    socialNetworks: Array
  },
  computed: {
    telegram () {
      return this.socialNetworks.find(x => x.type === "telegram")
    },
    mail () {
      return this.socialNetworks.find(x => x.type === "mail")
    },
    twitter () {
      return this.socialNetworks.find(x => x.type === "twitter")
    },
    linkedin () {
      return this.socialNetworks.find(x => x.type === "linkedin")
    },
    github () {
      return this.socialNetworks.find(x => x.type === "github")
    },


  }
}
</script>

<style scoped>
.Rectangle-white {
  width: 390px;
  object-fit: contain;
  border-radius: 10px;
  background-color: #ffffff;
  background-color: var(--blanc-background);
}
.Picture {
  width: 40%;
  height: 160px;
  object-fit: contain;
  border-radius: 10px;
  background-color: #dfe1f8;
  background-color: var(--pale-white);
}
.content {
  width: 60%;
  padding: 1.2em;
}
a {
  padding-right: 1.2em;
  color: #cac5e4;
  color: var(--light-blue-grey)
}
p {
  margin-bottom: 0.6em;
}
@media only screen and (max-width: 414px) {
  .Picture {
    width: 100%;
  }
  .content {
    width: 100%;
  }
}
</style>
