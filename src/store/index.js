import { createStore } from 'vuex'

const store = createStore({
    state: {
        status: '',
        loading: false,
        jsFramework: {
            main: 'Vue 3.0',
            list: ['Router 4.x'],
        },
        webServer: 'Vite',
        features: ['ESLint', 'Prettier'],
    },
    getters: {},
    mutations: {},
})

export default store
