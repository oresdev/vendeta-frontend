<template>
    <footer class="footer">
        <div class="footer__container">
            <figure>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 739.54">
                    <path d="M700 100 350 300 0 100 180 0l170 100L520 0l180 100z" />
                    <path d="M700 199.54v340l-350 200-350-200v-340l180 100v140l170 100 170-100v-140l180-100z" />
                </svg>
                <figcaption>VENDETA</figcaption>
            </figure>
            <p>Copyright <i></i> 2021, All right reserved.</p>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    background: var(--scheme-v2);
    min-height: var(--scheme-offset);
    position: relative;

    &__container {
        align-items: center;
        display: grid;
        grid-template-columns: repeat(2, auto);
        height: 100%;
        justify-content: space-between;
        margin: auto;
        max-width: var(--scheme-max-width);
        padding: var(--scheme-gap);
        width: 100%;
    }

    p {
        i {
            font-style: normal;

            &::before {
                content: '\ebe2';
                font-family: var(--scheme-icon);
                vertical-align: -0.164em;
            }
        }
    }

    figure {
        svg {
            fill: var(--scheme-v4);
            width: 33px;
        }

        figcaption {
            display: inline-block;
            margin: 0 0 0 var(--scheme-gap);
        }
    }
}

/* ----------- Non-Retina Screens ----------- */
@media only screen and (max-width: 975px) {
    .footer {
        &__container {
            grid-template-columns: repeat(1, auto);
            justify-content: center;
            justify-items: center;
        }

        figure {
            text-align: center;

            svg {
                width: 48px;
            }

            figcaption {
                display: block;
                margin: var(--scheme-gap) auto;
            }
        }
    }
}
</style>
