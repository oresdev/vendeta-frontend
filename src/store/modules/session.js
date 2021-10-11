import storage from '../../common/storage'

// import axios from '../../common/api'

const state = {}

const getters = {}

const actions = {
    sessionLocale({ commit }, locale) {
        storage.set('session_data', { locale: locale })
    }
}

const mutations = {}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
