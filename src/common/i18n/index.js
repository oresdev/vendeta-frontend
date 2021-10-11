import storage from '../storage'

import Vue from 'vue'
// import Vue I18n is internationalization plugin
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// get locale from localstorage
const getLocale = () => storage.get('session_data').locale

// check browser default language
const getNavigatorLanguage = () => (navigator.language || navigator.browserLanguage).toLowerCase().slice(3)

// get available .json from locale folder
function loadLocaleMessages() {
    const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
    const messages = {}
    locales.keys().forEach((key) => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i)
        if (matched && matched.length > 1) {
            const locale = matched[1]
            messages[locale] = locales(key)
        }
    })
    return messages
}

export default new VueI18n({
    // set default locale
    // get browser language || getNavigatorLanguage()
    locale: getLocale() || process.env.VUE_APP_I18N_LOCALE || 'en',
    // set fallback if locale not recogonized
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
    // set available locale
    messages: loadLocaleMessages()
})
