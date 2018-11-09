<template>
  <section>
    <div class="container-parent">
      <div class="container-child" flex column align-center>
        <ul class="timeline" flex column justify-center>
          <li v-for="(item, i) in roadmap" :key="i">
            <div flex row align-top>
              <span flex column class="timeline-date">{{ item.releasedAt }}
              </span>
              <p class="Q" flex column justify-center align-center>{{ item.Q }}
              </p>
              <div class="timeline-content" flex column>
                <p class="user" mb1>{{ item.user }}</p>
                <h4 mb1>{{ item.title }}</h4>
                <p>{{ item.b1 }}</p>
                <p>{{ item.b2 }}</p>
                <p>{{ item.b3 }}</p>
              </div>
            </div>
          </li>
          <div flex column class="timeline">
            <div class="arrival">
              <h4 mb1 class="titlefinal">MESG Enterprise Solutions</h4>
              <p class="final">A profit-driven subsidiary of the MESG Foundation</p>
              <p class="final">Delivering the global standard for the enterprise adoption of decentralized technology</p>
            </div>
          </div>
        </ul>
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
ul {
  list-style: none;
  padding: 0;
  width: 100%;
  max-width: 720px;
  overflow: hidden;
  position: relative;
}

.Q {
  opacity:1;
  font-family: Quicksand;
  font-style: medium;
  font-size: 1.6em;
  color:#ffa744;
  color:var(--Orange-cta);
  width: 60px;
  height: 60px;
  background-color: #ffffff;
  background-color: var(--white-content);
  border-radius: 50%;
}

.timeline-date {
  font-family: Quicksand;
  font-style: medium;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  font-weight: normal;
  font-size: 1.6em;
  color:#9452ff;
  color:var(--lighter-purple);
  width: 30%;
  float: left;
  text-align: right;
  padding-right: 2.4em;
}

.timeline-content {
  width: 60%;
  float:right;
  border-left: 1px #9452ff solid;
  padding-left: 2.4em;
  padding-bottom: 3.6em;
}
.arrival {
  border-radius: 1em;
  padding:2.4em;
  width: 100%;
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
.user{
  opacity:1;
  background-color: #ffa744;
  background-color: var(--Orange-cta);
  border-radius: 3em;
  padding: 0.5em 0.5em;
  width: 60%;
}

h4 {
  color:#ffffff;
  color:var(--white-content);
}

@media only screen and (max-width: 414px) {
  .timeline-date {
    padding-right: 1.2em;
  }
  .timeline-content {
    padding-left: 1.2em;
    width: 100%;
  }
  .arrival {
    padding:1.2em;
  }
  .user {
    width: 100%;
  }
}

/*
@media screen and (min-width: 840px) {
  .timeline > li {
    overflow: hidden;
    margin: 0;
    position: relative;
  }
  .timeline-date {
		width: 100px;
    float: left;
		text-align: right;
    padding-right: 20px;
  }
  .timeline-content {
		width: 75%;
		width: calc(100% - 100px);
    float: left;
    border-left: 3px rgba(32, 19, 81, .2) solid;
		padding-left: 30px;
	}
  .timeline-content:before {
		content: '';
    width: 12px;
    height: 12px;
    background: rgba(32, 19, 81, 1);
    position: absolute;
    left: 95px;
    top: 8px;
    border-radius: 100%;
	}
	.timeline-content h4, .timeline-content p {
		text-align: justify;
    margin: 0;
	}
  .timeline-content h4 {
    margin-bottom: .5em;
  }
  .timeline-content p {
    margin-bottom: 1.5em;
  }
}*/
</style>
