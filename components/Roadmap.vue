<template>
  <section>
    <div class="container-parent">
      <div class="container-child" flex column align-center>
        <ul class="timeline-years" flex column justify-center>
          <li v-for="year in roadmap" :key="year.year" class="list-year">
            <div class="year" flex column justify-center align-right>
              <h2 mr2>{{year.year}}</h2>
            </div>
            <ul class="quarters" flex column justify-center>
              <li v-for="quarter in year.quarters" :key="quarter.name" class="list-quarter">
                <p class="Q" flex column justify-center align-center mb05><strong>{{ quarter.name }}</strong></p>
                <div class="timeline" flex column>
                  <div class="content" mb05>
                    <p class="user" flex column align-center>{{ quarter.users }}</p>
                    <div v-for="goal in quarter.goals" :key="goal.title">
                      <h4 mb05 mt1>{{ goal.title }}</h4>
                      <ul class="list">
                        <li v-for="sub in goal.subgoals" :key="sub" mb05 class="list-content">
                          {{ sub }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
        <div class="solutions" flex column justify-center>
          <div class="arrival">
            <h4 mb05 class="titlefinal">MESG Enterprise Solutions</h4>
            <ul class="list">
              <li class="list-final" mb05>A profit-driven subsidiary of the MESG Foundation</li>
              <li class="list-final">Delivering the global standard for the enterprise adoption of decentralized technology</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState([ 'roadmap' ])
}
</script>

<style scoped>

.container-parent {
  padding-top:0;
}

.content {
  position: relative;
  margin-top:-64px;
  padding-left:1.2em;
}

ul{
  width: 100%;
  max-width: 600px;
  list-style: none;
}

li.list-year::before {
  background: none;
  width: 0;
  height: 0;
}
li.list-quarter::before {
  background: none;
  width: 0;
  height: 0;
}
ul.quarters {
  padding-left:0;
}

.timeline-years {
  padding-left:0;
}

h2 {
  margin-bottom: 0;
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
  font-family: 'QuickSand', sans-serif;
  font-style: medium;
  font-size: 1.6em;
  color:#ffa744;
  color:var(--Orange-cta);
  width: 60px;
  height: 60px;
  background-color: #ffffff;
  background-color: var(--white-content);
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  position:relative;
}
.list {
  padding-left: 1.2em;
}
.list-content {
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  font-weight: normal;
  font-size: 1em;
  opacity:0.65;
}
.list-final {
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  font-weight: normal;
  font-size: 1em;
  opacity:1;
  color:#57577e;
  color: var(--dark-grey);
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
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
}
.titlefinal {
  color:#ffa744;
  color:var(--Orange-cta);
}
.user {
  opacity:1;
  color:#ffffff;
  color:var(--white-content);
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
  background: #fafafe;
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
