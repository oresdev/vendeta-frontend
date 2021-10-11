import Vue from 'vue'
import app from './router/views/app.vue'
import router from './router'
import store from './store'

// initialize component autoloader
import './components'

// initialize Vue I18n is internationalization plugin
import i18n from './common/i18n'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    i18n,
    render: (h) => h(app)
}).$mount('#app')
