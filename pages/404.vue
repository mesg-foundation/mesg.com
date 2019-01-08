<template>
  <div>
    <Header
      id="introduction" class="dark"
      :schema="schema"
      title="Hey dude,"
      :description="description"
      smallDescription="Click on the button below to go back to Home, let's act like nothing happened"
      actionLink="/"
      actionTitle="cd $HOME"
    />
  </div>
</template>

<script>
import Header from '~/components/Header'
import Schema404 from '~/components/schema/404'
import page from './page'
export default {
  components: { Header },
  mixins: [
    page({
      title: "404",
      description: "Looks like that page doesn't exist.",
      schema: Schema404
    })
  ]
}
</script>
