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
        ...contribution
      }
    }
  }
}

export const actions = {
  // Fetch data based on the contributions spreadsheet with the sheety api (https://sheety.co/)
  fetchAll: async ({ commit }) => {
    const resp = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTue8aX3Elluv80uSsc7IMg4x0GZvy5VeFdicpi1xdXMDY49aVLpf2ybyqed-sILoENjR1vhcSFkWWH/pub?gid=634814968&single=true&output=tsv')
    const text = await resp.text()
    const [_, ...data] = text.split('\n')
    const contributions = data.map((x) => {
      const [name, link, title, category, description, profile, createdAt, id, rewarded] = x.split('\t')
      return {
        id,
        name,
        link,
        title,
        category,
        description,
        profile,
        createdAt: new Date(createdAt),
        rewarded: rewarded.startsWith("TRUE")
      }
    })
    contributions
      .forEach((x) => commit('addContribution', x))
    return contributions
  }
}