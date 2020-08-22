import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: 'https://blog.mesg.com',
  key: '74344c6ee1d2462b27a2e637d1',
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
    // const posts = await api.posts.browse({
    //   limit: 4,
    //   include: 'tags'
    // })
    // commit('updateArticles', posts)
    // return posts
    return []
  }
}