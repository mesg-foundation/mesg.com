<template>
  <a :href="issue.html_url" target="_blank">
    <div class="top">
      <h4>
        <svg v-if="issue.pull_request" :class="issue.state" viewBox="0 0 12 16" version="1.1" aria-hidden="true">
          <path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path>
        </svg>
        <svg v-else :class="issue.state" aria-label="Open Issue" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img">
          <path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path>
        </svg>
        <strong>#{{ issue.number }}</strong>
        {{ issue.title }}
      </h4>
      <time>{{ new Date(event.created_at).toLocaleString() }}</time>
    </div>
    <div class="bottom">
      <div>
        <img :src="actor.avatar_url" :alt="actor.display_login" class="shadow--soft">
        {{ event.event }}
      </div>
      <div>
        <span
          v-for="label in issue.labels" :key="label.id"
          :style="{ background: `#${label.color}` }"
          class="shadow--soft">
          {{ label.name }}
        </span>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  computed: {
    actor () { return this.event.actor },
    issue () { return this.event.issue },
  }
}
</script>

<style scoped>
  a {
    display: block;
    padding: .75em 1em;
    text-align: left;
    text-decoration: none;
    color: #333;
    border-top: solid 1px rgba(0, 0, 0, 0.05);
  }

  a:first-child {
    border-top: none;
  }

  a:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  .top, .bottom {
    display: flex;
    justify-content: space-between;
  }

  .top {
    margin-bottom: .5em;
  }

  h4 {
    font-weight: normal;
    white-space: nowrap; 
    max-width: 65%;
    overflow: hidden;
    text-overflow: ellipsis; 
    margin: 0;
  }

  strong {
    color: #666;
  }

  time {
    font-size: 75%;
  }

  img {
    height: 1.5em;
    width: 1.5em;
    margin-right: .25em;
    vertical-align: middle;
    border-radius: 3px;
  }

  span {
    padding: .25em .5em;
    border-radius: 2px;
    display: inline-block;
    margin-left: .5em;
    font-size: 75%;
  }

  svg {
    height: 1em;
    margin-right: .5em;
    vertical-align: top;
  }

  svg.open { fill: #28a745; }
  svg.merged { fill: #6f42c1; }
  svg.closed { fill: #cb2431; }
</style>
