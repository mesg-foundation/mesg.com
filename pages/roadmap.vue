<template>
  <div>
    <HeaderRoadmap id="introduction" class="dark"/>
    <Roadmap id="roadmap" class="white"/>
  </div>
</template>

<script>
const title = 'The MESG Roadmap'
const description = 'Our vision is to make business integration simple by becoming the universally-used platform for connecting traditional technology to trustless systems.'

import HeaderRoadmap from '~/components/header/Roadmap'
import Roadmap from '~/components/Roadmap'
export default {
  components: {
    HeaderRoadmap,
    Roadmap
  },
  head: {
    title: title,
    meta: [
      { hid: 'og:title', property: 'og:title', content: title },
      { hid: 'description', name: 'description', content: description },
      { hid: 'og:description', property: "og:description", content: description },
    ]
  }
}
</script>
