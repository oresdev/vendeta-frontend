<template>
    <div class="launchpool">
        <div class="launchpool__container">
            <div class="launchpool__item">
                <h1>LAUNCH POOL</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo hic ab incidunt nemo, eum magni animi placeat maxime fugit fugiat vitae quisquam totam libero
                    distinctio optio odio atque aliquid cumque.
                </p>

                <ul>
                    <li>
                        <span>$ 646,560</span>
                        Total currently staked, <br />
                        out of $4 million hard cap
                    </li>
                    <li>
                        <span>1,259,590 <a href="/" class="ethscan"></a></span>
                        Tokens currently pre-ordered by 90 stakers
                    </li>
                    <li>
                        <Countdown :date="end" @onFinish="finish()" />
                        Order process ending 21 Dec, <br />7:00pm GMT+3
                    </li>
                </ul>

                <h3>
                    TOKEN PRE-ORDER BOOK IS LIVE!
                    <span>Learn how to stake here</span>
                </h3>

                <line-chart :height="400"></line-chart>

                <button>Unstake</button>
                <button class="primary">Stake Now!</button>
            </div>
        </div>

        <!-- waves devider-->
        <Divider />
    </div>
</template>

<script>
export default {
    data() {
        return {
            end: new Date('2021-12-21T07:00:00')
        }
    },
    methods: {
        finish() {
            console.log('expired')
        }
    }
}
</script>

<style lang="scss" scoped>
.launchpool {
    color: var(--scheme-v2);

    &__container {
        height: 100%;
        margin: auto;
        max-width: var(--scheme-max-width);
        min-height: var(--scheme-min-height); // remove min SE height
        padding: 4em var(--scheme-gap);
        width: 100%;
    }

    &__item {
        h1 {
            font-size: var(--scheme-m);
        }

        h3 {
            font-size: var(--scheme-m);
            margin: 2em 0;

            span {
                display: block;
                font-size: var(--scheme-xs);
                opacity: 0.6;
            }
        }

        ul {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-column-gap: var(--scheme-gap);
            grid-row-gap: var(--scheme-gap);
            margin: 4em auto;

            li {
                align-content: center;
                background: hsla(195, 87%, 27%, 0.315);
                border-radius: 20px;
                box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.06);
                display: inherit;
                padding: 2em;
                text-align: center;

                span {
                    display: block;
                    font-size: var(--scheme-xm);
                }

                .ethscan {
                    margin: 0 0 0 10px;

                    &:hover {
                        opacity: 0.6;
                    }

                    &::before {
                        content: '\ee59';
                        font-family: var(--scheme-icon);
                        font-size: var(--scheme-xm);
                        vertical-align: -0.16em;
                    }
                }

                &:first-child {
                    background: linear-gradient(270deg, #096381, hsla(191, 100%, 43%, 0.473));
                }
            }
        }

        button {
            border: 2px solid var(--scheme-v2);
            border-radius: 25px;
            color: var(--scheme-v2);
            margin: 2em 0 0;
            padding: 8px 64px;

            &.primary {
                background-image: linear-gradient(270deg, #096381, hsla(191, 100%, 43%, 0.473));
                border: none;
                margin: 0 0 0 var(--scheme-gap);
                padding: 10px 64px;
            }
        }
    }
}

/* ----------- Non-Retina Screens ----------- */
@media only screen and (max-width: 975px) {
    .launchpool {
        text-align: center;

        h1 {
            font-size: var(--scheme-xm);
        }

        h3 {
            font-size: var(--scheme-xm);
        }

        ul {
            grid-template-columns: repeat(1, auto);

            li {
                span {
                    font-size: var(--scheme-s);
                }

                .ethscan {
                    &::before {
                        font-size: var(--scheme-s);
                    }
                }
            }
        }

        &__item {
            button {
                display: block;
                margin: 1em auto 0 !important;
            }
        }
    }
}
</style>
