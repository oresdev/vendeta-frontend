<template>
    <section class="plans">
        <div class="plans__container">
            <h1>
                CHOOSE YOUR VEN VPN PLAN
                <span>VENDETA`s nanopayments mean you are never locked into a subscription and pay only for actual use. <br />Choose your plan and start browsing.</span>
            </h1>

            <div class="plans__items">
                <div class="plans__item">
                    <Plan period="1 MONTH" percent="" amount="$4.98" description="$4.98" />
                </div>

                <div class="plans__item">
                    <Plan period="12 MONTHS" percent="SAVE 40%" amount="$2.99" description="$35.88" active />
                </div>

                <div class="plans__item">
                    <Plan period="6 MONTHS" percent="SAVE 10%" amount="$4.48" description="$26.88" />
                </div>
            </div>
        </div>

        <!-- waves devider-->
        <Divider />
    </section>
</template>

<style lang="scss" scoped>
.plans {
    color: var(--scheme-v2);

    h1 {
        color: var(--scheme-v2);
        font-size: var(--scheme-m);
        text-align: center;

        span {
            display: block;
            font-size: var(--scheme-s);
        }
    }

    &__container {
        height: 100%;
        margin: auto;
        max-width: var(--scheme-max-width);
        min-height: var(--scheme-min-height); // remove min SE height
        padding: 4em var(--scheme-gap);
        width: 100%;
    }

    &__items {
        align-items: center;
        display: grid;
        grid-template-columns: repeat(3, auto);
        grid-column-gap: var(--scheme-gap);
        grid-row-gap: var(--scheme-gap);
        margin: 4em auto;
    }

    &__item {
        &:nth-child(2) {
            .plan {
                &::after {
                    color: var(--scheme-v2);
                    content: '\ed32';
                    font-family: var(--scheme-icon);
                    font-size: 31px;
                    opacity: 0.6;
                    vertical-align: -0.2em;
                }
            }
        }
    }
}

/* ----------- Non-Retina Screens ----------- */
@media only screen and (max-width: 975px) {
    .plans {
        h1 {
            font-size: var(--scheme-xm);

            span {
                display: block;
                font-size: var(--scheme-xs);
                margin: var(--scheme-gap) auto;
            }
        }

        &__items {
            grid-template-columns: repeat(1, auto);
        }
    }
}
</style>
