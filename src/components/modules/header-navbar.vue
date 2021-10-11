<template>
    <header :class="['nav', { negative: scrollPosition > 50 }, active ? 'active' : '']">
        <nav class="nav__container">
            <figure v-on:click="switchActive()">
                <Brand />
            </figure>

            <h3>
                VENDETA
                <span>Decentralized VPN Network</span>
            </h3>

            <HeaderMenu v-on:switched="switchActive" />

            <ul>
                <li v-on:click="switchActive()">
                    <router-link to="/plans" v-text="$t('navbar[0][0]')" />
                </li>

                <li v-on:click="switchActive()">
                    <router-link to="/about" v-text="$t('navbar[0][1]')" />
                </li>

                <li v-on:click="switchActive()">
                    <router-link to="/launchpool" v-text="`Launch Pool`" />
                </li>

                <Locale />
            </ul>

            <button class="action" v-text="$t('navbar[0][2]')"></button>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            active: false,
            scrollPosition: null
        }
    },
    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY
        },
        switchActive(value) {
            value ? (this.active = !this.active) : (this.active = false)
        }
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll)
    }
}
</script>

<style lang="scss" scoped>
header {
    color: var(--scheme-v2);
    position: sticky;
    top: 0;
    z-index: 9;

    &::before {
        background: var(--scheme-v2);
        content: '';
        height: 100px;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transition: transform 0.35s;
        transform: translate3d(0, -100px, 0);
        z-index: -1;
    }

    &.negative {
        color: var(--scheme-v1);

        &::before {
            transform: translate3d(0, 0, 0);
        }

        svg {
            fill: var(--scheme-v4);
        }

        .nav {
            &__container {
                button {
                    border-color: var(--scheme-v1);
                }
            }
        }
    }

    .nav {
        &__container {
            align-items: center;

            display: grid;
            grid-template-columns: 48px 1fr auto auto;
            grid-column-gap: 20px;
            grid-row-gap: 20px;

            margin: auto;
            max-width: var(--scheme-max-width);
            min-height: var(--scheme-offset); // remove min SE height
            padding: var(--scheme-gap);
            width: 100%;

            h3 {
                font-size: var(--scheme-xm);
                line-height: 1.4;
                span {
                    display: block;
                    font-size: var(--scheme-xs);
                }
            }

            ul {
                display: inherit;
                grid-template-columns: auto auto auto 60px;
                grid-column-gap: 40px;
                grid-row-gap: 20px;
                justify-items: center;
            }

            .action {
                border: 2px solid var(--scheme-v2);
                border-radius: 25px;
                padding: 4px 32px;
            }
        }
    }
}

/* ----------- Non-Retina Screens ----------- */
@media only screen and (max-width: 975px) {
    header {
        position: relative;

        &.negative {
            color: var(--scheme-v2);

            &::before {
                transform: translate3d(0, -100px, 0);
            }

            svg {
                fill: var(--scheme-v2);
            }

            .nav {
                &__container {
                    button {
                        border-color: var(--scheme-v2);
                    }
                }
            }
        }

        &.active {
            .nav {
                &__container {
                    ul {
                        display: grid;
                    }

                    button {
                        display: block;
                    }
                }
            }
        }
        .nav {
            &__container {
                grid-template-columns: 1fr;
                justify-items: center;
                text-align: center;

                ul {
                    display: none;
                    grid-template-columns: 1fr;
                }

                .action {
                    display: none;
                }
            }
        }
    }
}
</style>
