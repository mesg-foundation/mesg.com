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
        createdAt: new Date(contribution.createdAt),
        rewarded: contribution.rewarded.startsWith("TRUE")
      }
    }
  }
}

export const actions = {
  // Fetch data based on the contributions spreadsheet with the sheety api (https://sheety.co/)
  fetchAll: async ({ commit }) => {
    const resp = await fetch('https://spreadsheets.google.com/feeds/cells/1s46XIcnmGd-XMXNhXo5eSl8-3U0MW96S5eFdszuDIuk/1/public/full?alt=json')
    const data = await resp.json()
    const cols = ['name', 'link', 'title', 'category', 'description', 'profile', 'createdAt', 'id', 'rewarded']
    const contributions = []
    for (const entry of data.feed.entry) {
      const cell = entry["gs$cell"]
      if (cell.row === "1") {
        continue
      }
      contributions[cell.row - 2] = contributions[cell.row - 2] || {}
      contributions[cell.row - 2][cols[cell.col - 1]] = cell["$t"]
    }
    contributions.splice(1).forEach((x) => commit('addContribution', x))
  }
}