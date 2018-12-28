<template>
  <section>
    <div class="container-parent">
      <div class="container-child-title" flex column justify-center align-center>
        <h2>The MESG documents</h2>
        <div class="separator-orange"></div>
      </div>
      <div class="container-child" flex row justify-center spacebetween>
        <nav flex row justify-center align-center>
          <a href="https://drive.google.com/open?id=15oygF6uYjzh3KnYVEBOvYW86KWkG6ZVA" target="blank" class="card" flex column justify-center align-center>
            <div class="picture" flex column justify-center align-center>
              <img src="~/assets/documents/MESG 2 pager-1.jpg"/>
            </div>
            <div class="title" flex column justify-center align-center>
              <h3>Technical One pager</h3>
            </div>
          </a>
          <a href="https://drive.google.com/open?id=1jPWQnI-kR-iXjqmYr9Y-2mqtS3TNSQv2" target="blank" class="card" flex column justify-center align-center>
            <div class="picture" flex column justify-center align-center>
              <img src="~/assets/documents/Decentralized Network of Services.jpg"/>
            </div>
            <div class="title" flex column justify-center align-center>
              <h3>Decentralized Network of Services</h3>
            </div>
          </a>
          <a href="https://drive.google.com/open?id=15oygF6uYjzh3KnYVEBOvYW86KWkG6ZVA" target="blank" class="card" flex column justify-center align-center>
            <div class="picture" flex column justify-center align-center>
              <img src="~/assets/documents/MESG 2 pager-2.jpg"/>
            </div>
            <div class="title" flex column justify-center align-center>
              <h3>Business One pager</h3>
            </div>
          </a>
          <a href="https://drive.google.com/open?id=1jVdhjKPF5qe8EL6vIQ38jtMPUz-VMgql" target="blank" class="card" flex column justify-center align-center>
            <div class="picture" flex column justify-center align-center>
              <img src="~/assets/documents/MESG Business Plan Summary.jpg"/>
            </div>
            <div class="title" flex column justify-center align-center>
              <h3>Business Plan</h3>
            </div>
          </a>
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
  text-align: center;
}

h3 {
  text-align:center;
  margin-bottom:0;
  text-decoration: none;
}

svg{
  margin-top:0;
}

img {
  width: 50%;
  max-width: 145px;
  margin-bottom:1.6em;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.1);
}

.picture {
  width: 100%;
  height: 60%;
  border-top-left-radius:10px;
  border-top-right-radius:10px;
  padding:0;
  background-color: #491e8c;
  background-color: var(--purple);
}

.title {
  position: relative;
  height: 40%;
  padding:1.2em;
  background-color: #ffffff;
  background-color: var(--white-content);
}

.card {
  text-decoration: none;
  width: 300px;
  height: 300px;
  border-radius:10px;
  background-color: #ffffff;
  background-color: var(--white-content);
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
  margin:1.2em;
}
.card:hover {
  transition: calc(var(--animation-speed) * 0.1s) ease;
  box-shadow: 0 0 40px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.card:hover .picture {
  transition: calc(var(--animation-speed) * 0.1s) ease;
  border-bottom: solid 16px #9452ff;
  background-color: #5D28B2;
  background-color: var(--lighter-purple-hover);
}

@media only screen and (max-width: 1024px) {
  .card {
    margin: 2.4em;
  }
  img {
    margin-bottom:1.4em;
  }
}
@media only screen and (max-width: 768px) {
  .card {
    width: 100%;
  }
}
@media only screen and (min-width: 414px) {
  .container-child-title {
    padding-top:0;
  }
  .container-child {
    padding-bottom:0;
  }
}
@media only screen and (max-width: 414px) {
  .card {
    margin: 1.8em;
  }
  img {
    width: 55%;
    margin-bottom:1.4em;
  }
}


</style>
