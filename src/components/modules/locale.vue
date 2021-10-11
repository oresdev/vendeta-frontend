<template>
    <li class="locale" v-on:click="setLocale = !setLocale">
        <span v-text="$i18n.locale" />
        <ul v-if="setLocale">
            <li v-for="locale in locales" v-bind:key="locale.id" v-on:click="sessionLocale(locale), ($i18n.locale = locale)" v-text="locale" />
        </ul>
    </li>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            setLocale: false
        }
    },
    created() {
        window.addEventListener('click', this.clickInElement)
    },
    beforeDestroy() {
        window.removeEventListener('click', this.clickInElement)
    },
    computed: {
        locales: (self) => self.$i18n.availableLocales.filter((locale) => locale !== self.$i18n.locale)
    },
    methods: {
        ...mapActions('Session', ['sessionLocale']),
        clickInElement(e) {
            if (!this.$el.contains(e.target)) {
                this.setLocale = false
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.locale {
    position: relative;

    li,
    span {
        cursor: pointer;
        text-transform: uppercase;
    }

    span {
        &::before {
            content: '\ec7a';
            font-family: var(--scheme-icon);
            font-size: 20px;
            left: -26px;
            position: absolute;
            top: -3.6px;
        }
    }

    ul {
        position: absolute;
    }
}

/* ----------- Non-Retina Screens ----------- */
@media only screen and (max-width: 975px) {
    .locale {
        ul {
            position: relative;
            li {
                margin: 10px 0 0;
            }
        }
    }
}
</style>
