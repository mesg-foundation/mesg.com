export const state = () => ({
  contributions: {}
})

export const getters = {
  all: (state) => state.contributions
}

export const mutations = {
  addContribution: (state, contribution) => {
    state.contributions = {
      ...state.contributions,
      [contribution.id]: {
        ...contribution,
        createdAt: new Date(contribution.createdAt)
      }
    }
  }
}

export const actions = {
  // Fetch data based on the contributions spreadsheet with the sheety api (https://sheety.co/)
  fetchAll: async ({ commit }) => {
    const resp = await fetch('https://sheetdb.io/api/v1/mtqfsj1rfa5ro')
    const data = await resp.json()
    data.forEach((x) => commit('addContribution', x))
    return data
  }
}