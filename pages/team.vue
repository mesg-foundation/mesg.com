<template>
  <div>
    <HeaderTeam id="introduction" class="dark"/>
    <Team id="team" class="white"/>
    <CtaHiring id="ctahiring" class="dark"/>
  </div>
</template>

<script>
const title = 'The MESG Team'
const description = 'The MESG Foundation is a group of world-class impassioned individuals, dedicated to solving major issues in tech interoperability.'

import HeaderTeam from '~/components/header/Team'
import Team from '~/components/Team'
import CtaHiring from '~/components/cta/Hiring'
export default {
  components: {
    HeaderTeam,
    Team,
    CtaHiring,
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
