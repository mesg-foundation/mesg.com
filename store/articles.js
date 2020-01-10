import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: 'https://demo.ghost.io',
  key: '22444f78447824223cefc48062',
  version: "v3"
});

export const state = () => ({
  articles: []
})

export const getters = {
  all: (state) => state.articles
}

export const mutations = {
  updateArticles: (state, list) => {
    state.articles = list
  }
}

export const actions = {
  fetchAll: async ({ commit }) => {
    const posts = await api.posts.browse({
      limit: 4
    })
    commit('updateArticles', posts)
    return posts
  }
}