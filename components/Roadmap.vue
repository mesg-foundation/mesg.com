<template>
  <section>
    <div class="container">
      <h2>Roadmap</h2>
      <ul class="timeline">
        <li v-for="(item, i) in roadmap" :key="i">
          <span class="timeline-date">{{ item.releasedAt }}</span>
          <div class="timeline-content">
            <h4>{{ item.title }}</h4>
            <p>{{ item.description }}</p>
          </div>
        </li>
      </ul>
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
h2 {
  margin-bottom: 4em;
}

.timeline {
	list-style: none;
  padding: 0;
}

.timeline > li {
	margin-bottom: 60px;
}

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
}
</style>
