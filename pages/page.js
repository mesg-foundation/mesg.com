export default x => {
  const dataFunc = typeof x === 'object' ? () => x : x
  return {
    head () {
      const { title, description } = dataFunc(this)
      return {
        title: title,
        meta: [
          { hid: 'og:title', property: 'og:title', content: title },
          { hid: 'description', name: 'description', content: description },
          { hid: 'og:description', property: "og:description", content: description },
        ]
      }
    },
    computed: {
      title () {
        const { title } = dataFunc(this)
        return title
      },
      description () {
        const { description } = dataFunc(this)
        return description
      },
      schema () {
        const { schema } = dataFunc(this)
        return schema
      }
    }
  }
}
