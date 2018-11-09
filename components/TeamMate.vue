<template>
  <div class="Rectangle-white" flex row space-between align-center>
    <div class="Picture" flex column :style="style">
    </div>
    <div class="content" flex column>
      <h4>{{name}}</h4>
      <p>{{role}}</p>
      <nav>
        <a v-for="company in companies" :key="company"><img :src="company.src"/></a>
      </nav>      
        <!--<nav>
        <a v-if="twitter" :href="twitter.link" target="_blank"><i class="fab fa-twitter"></i></a>
        <a v-if="linkedin" :href="linkedin.link" target="_blank"><i class="fab fa-linkedin-in"></i></a>
        <a v-if="github" :href="github.link" target="_blank"><i class="fab fa-github"></i></a>
      </nav>-->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pictureUrl: String,
    name: String,
    role: String,
    companies: Array,
    socialNetworks: Array
  },
  computed: {
    twitter () {
      return this.socialNetworks.find(x => x.type === "twitter")
    },
    linkedin () {
      return this.socialNetworks.find(x => x.type === "linkedin")
    },
    github () {
      return this.socialNetworks.find(x => x.type === "github")
    },
    style () {
      return {
        backgroundImage: `url(${this.pictureUrl})`
      }
    }

  }
}
</script>

<style scoped>
.Rectangle-white {
  width: 390px;
  object-fit: contain;
  border-radius: 10px;
  background-color: #ffffff;
  background-color: var(--white-content);
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
}
.Rectangle-white:hover {
  box-shadow: 0 0 40px 4px rgba(0, 0, 0, 0.1);
}
.Picture {
  width: 40%;
  height: 160px;
  object-fit: contain;
  border-radius: 10px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size:cover;
  border-top-right-radius: 20% 50%;
  border-bottom-right-radius: 20% 50%;
}
.Picture:hover {
  color: #491e8c;
  color: var(--purple);
}

.logo {
  width: 100%;
  height: 20px;
}

.content {
  width: 60%;
  padding: 1.2em;
}
a {
  align-items: center;
  padding-right: 1em;
  color: #cac5e4;
  color: var(--light-blue-grey)
}
a:hover {
  color: #9452ff;
  color: var(--lighter-purple);
  transition: 0.2s ease-in-out;
}
p {
  margin-bottom: 0.6em;
}

@media only screen and (max-width: 414px) {
  .Picture {
    width: 100%;
    border-radius: 10px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .content {
    width: 100%;
  }
}
</style>
