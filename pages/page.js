export default ({ title, description, schema }) => ({
  head: {
    title: title,
    meta: [
      { hid: 'og:title', property: 'og:title', content: title },
      { hid: 'description', name: 'description', content: description },
      { hid: 'og:description', property: "og:description", content: description },
    ]
  },
  computed: {
    title () { return title },
    description () { return description },
    schema () { return schema }
  }
})