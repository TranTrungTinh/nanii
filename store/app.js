import Vue from 'vue'

import {
  config,
  DEFAULT_THEME,
} from '@/configs/defaultSettings'

const initialState = () => {
  return {
    theme: Vue.ls.get(DEFAULT_THEME, config.current),
  }
}

// initial state
export const state = () => initialState()

// getters
export const getters = {
  theme: state => state.theme
}

// actions
export const actions = {
  toggleTheme ({ commit }, theme) {
    commit('TOGGLE_THEME', theme)
  }
}

// mutations
export const mutations = {
  TOGGLE_THEME: (state, theme) => {
    Vue.ls.set(DEFAULT_THEME, theme)
    Vue.set(state, 'theme', theme)
  }
}
