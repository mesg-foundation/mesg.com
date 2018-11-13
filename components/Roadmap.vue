<template>
  <section>
    <div class="container-parent">
      <div class="container-child" flex column align-center>
        <ul class="timeline-years" flex column justify-center>
          <li v-for="year in roadmap" :key="year">
            <div class="year" flex column justify-center align-right>
              <h2 mr2>{{year.year}}</h2>
            </div>
            <ul class="quarters" flex column justify-center>
              <li v-for="quarter in year.quarters" :key="quarter">
                <p class="Q" flex column justify-center align-center mb05><strong>{{ quarter.name }}</strong></p>
                <div class="timeline" flex column>
                  <div class="content" mb05>
                    <p class="user" flex column align-center>{{ quarter.users }}</p>
                    <div v-for="goal in quarter.goals" :key="goal">
                      <h4 mb1 mt1>{{ goal.title }}</h4>
                      <p v-for="sub in goal.subgoals" :key="sub" mb05>{{ sub }}</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
        <div class="solutions" flex column justify-center>
          <div class="arrival">
            <h4 mb1 class="titlefinal">MESG Enterprise Solutions</h4>
            <p class="final" mb05>A profit-driven subsidiary of the MESG Foundation</p>
            <p class="final">Delivering the global standard for the enterprise adoption of decentralized technology</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const roadmap = require("~/assets/roadmap")
export default {
  computed: {
    roadmap () { return roadmap }
  }
}
</script>

<style scoped>

ul{
  width: 100%;
  max-width: 600px;
  list-style: none;
}

h2 {
  color:#9452ff;
  color:var(--lighter-purple);
  margin-bottom: 0;
}
h4 {
  color:#ffffff;
  color:var(--white-content);
}

.container-parent {
  padding-top:0;
}
.container-child {
  padding-top:0;
}
.content {
  position: relative;
  margin-top:-64px;
  margin-left:1.2em;
}
.quarters {
  width: 85%;
  max-width: 600px;
  float: right;
}
.year {
  width: 10%;
  max-width: 600px;
  height: 60px;
  float: left;
  position: relative;
}

.Q {
  opacity:1;
  font-family: QuickSand;
  font-style: medium;
  font-size: 1.6em;
  color:#ffa744;
  color:var(--Orange-cta);
  width: 60px;
  height: 60px;
  background-color: #ffffff;
  background-color: var(--white-content);
  border-radius: 50%;
  position:relative;
}

.solutions {
  width: 100%;
  max-width: 720px;
}
.arrival {
  border-radius: 1em;
  padding:2.4em;
  background-color: #ffffff;
  background-color: var(--white-content);
}
.titlefinal {
  color:#ffa744;
  color:var(--Orange-cta);
}
.final {
  color:#57577e;
  color: var(--dark-grey);
}
.user {
  opacity:1;
  background-color: #ffa744;
  background-color: var(--Orange-cta);
  border-radius: 3em;
  padding: 0.5em 0.5em;
  width: 55%;
}


.timeline {
  padding-left: 2.4em;
  padding-right: 1.8em;
  left: 1.8em;
  border-left: dotted 2px #9452ff;
  position: relative;
  margin-bottom: 1.2em;
}

.timeline:before {
  content: "";
  width: 15px;
  height: 15px;
  left:-9px;
  top:0;
  border-radius: 100%;
  border: solid 2px #9452ff;
  position: absolute;
  background: #251440;
}

.timeline:after {
  content: "";
  width: 15px;
  height: 15px;
  left:-9px;
  bottom:0px;
  border-radius: 100%;
  border: solid 2px #9452ff;
  position: absolute;
  background: #9452ff;
}
@media screen and (max-width: 768px) {
  .timeline {
    padding-right: 1.8em;
  }
  .user {
    width: 60%;
  }
}
@media screen and (max-width: 639px) {
  .year {
    width: 100%;
    height: auto;
    padding-bottom: 1.2em;
  }
  .quarters {
    width: 100%;
  }
  .user {
    width: 70%;
  }
}
@media screen and (max-width: 535px) {
  .user {
    width: 100%;
  }
}
@media screen and (max-width: 414px) {
  .timeline {
    padding-right: 1.8em;
  }
  .user {
    width: 100%;
  }
}



</style>
