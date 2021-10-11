<template>
    <main class="section">
        <section class="section__hero">
            <Hero />
            <Waves />
        </section>

        <section class="section__services">
            <Services />
        </section>

        <section class="section__core">
            <Core />
        </section>

        <section class="section__privacy">
            <Privacy />
        </section>

        <!-- waves devider-->
        <Divider rotate />

        <span id="trig"></span>

        <section id="cloud" class="section__cloud">
            <Cloud />
        </section>

        <section class="section__social">
            <Social />
        </section>
    </main>
</template>

<script>
import Hero from '@/router/views/components/hero.vue'
import Services from '@/router/views/components/services.vue'
import Core from '@/router/views/components/core.vue'
import Privacy from '@/router/views/components/privacy.vue'
import Cloud from '@/router/views/components/cloud.vue'
import Social from '@/router/views/components/social.vue'

export default {
    data() {
        return {
            scrollPosition: null
        }
    },
    components: {
        Hero,
        Services,
        Core,
        Privacy,
        Cloud,
        Social
    },
    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY

            let t = document.getElementById('trig').offsetTop
            let e = document.getElementById('cloud')

            this.scrollPosition >= t ? (e.style.zIndex = '0') : (e.style.zIndex = '-1')
        }
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll)
    }
}
</script>

<style lang="scss" scoped>
.section {
    &__container {
        height: 100%;
        margin: auto;
        max-width: var(--scheme-max-width);
        min-height: var(--scheme-min-height); // remove min SE height
        padding: 4em var(--scheme-gap);
        width: 100%;
    }

    &__hero {
        background: var(--scheme-gradient);
        position: relative;
        z-index: 2;
    }

    &__services {
        background: var(--scheme-v2);
        position: relative;
        z-index: 2;
    }

    &__core {
        background: var(--scheme-v2);
        position: relative;
        z-index: 2;
    }

    &__privacy {
        background: var(--scheme-v2);
        position: relative;
        z-index: 2;
    }

    &__cloud {
        bottom: calc(-4 * var(--scheme-offset)); // offset from header height
        position: sticky;
        z-index: -1;
    }

    &__social {
        background: var(--scheme-v2);
        position: relative;
        z-index: 2;
    }
}

// grid helper
.grid {
    align-items: center;
    display: grid;
    justify-content: center;

    &__2 {
        // grid-template-columns: repeat(2, 1fr);
        grid-template-columns: repeat(2, auto);
        justify-content: space-between;
    }

    &__3 {
        // grid-template-columns: repeat(3, 1fr);
        grid-template-columns: repeat(3, auto);
        justify-content: space-between;
    }
}

/* ----------- Non-Retina Screens ----------- */
@media only screen and (max-width: 975px) {
    .section {
        &__cloud {
            bottom: calc(-5 * var(--scheme-offset)); // offset from header height
        }
    }

    .grid {
        &__2 {
            grid-template-columns: auto;
            grid-column-gap: 0;
            grid-row-gap: 60px;
            justify-content: center;
            justify-items: center;
        }

        &__3 {
            grid-template-columns: auto;
            grid-column-gap: 0;
            grid-row-gap: 60px;
            justify-items: center;
        }
    }
}
</style>
