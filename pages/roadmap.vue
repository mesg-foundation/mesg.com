<template>
  <div>
    <HeaderRoadmap id="introduction" class="dark"/>
    <Roadmap id="roadmap" class="white"/>
  </div>
</template>

<script>
import HeaderRoadmap from '~/components/HeaderRoadmap'
import Roadmap from '~/components/Roadmap'
export default {
  components: {
    HeaderRoadmap,
    Roadmap
  }
}
</script>
