<template>
    <section class="token">
        <div class="token__description">
            <div class="token__container">
                <h1>INFORMATION</h1>
                <h3>PROJECT INTRODUCTION</h3>
                <p>
                    Vendeta is a decentralized blockchain based VPN that uses quantum encryption to protect your privacy, we don't collect user's personal data. We protect you
                    without affecting the quality of your browsing experience.
                </p>

                <h3>KEY FEATURES</h3>
                <p>
                    Scalability: The most common problems of modern VPN services is lack of user's data security and limited possibilities even in paid tariff plans. We know, how
                    to solve this problems for you. We don't collect your data. We don't cooperate with the governments. We protect your traffic from possible hacker attacks with
                    the help of our quantum encryption, so even supercomputer can't hack you. We offer you reliable, fast, secure VPN for a cheap price.
                </p>
            </div>
        </div>

        <!-- waves devider-->
        <Divider />

        <div class="token__stats">
            <div class="token__container">
                <h3>
                    TOKEN ALLOCATION
                    <span
                        >Fast low-cost and secure transactions on Matic sidechains with finality achieved <br />on mainchain and Ethereum as the first compatible Layer 1
                        basechain</span
                    >
                </h3>

                <doughnut-chart class="token__chart" :height="600"></doughnut-chart>
            </div>
        </div>

        <Tokenomic />

        <!-- waves devider-->
        <Divider />
    </section>
</template>

<script>
import Tokenomic from '@/router/views/components/tokenomic.vue'

export default {
    components: {
        Tokenomic
    }
}
</script>

<style lang="scss" scoped>
.token {
    color: var(--scheme-v2);

    &__container {
        height: 100%;
        margin: auto;
        max-width: var(--scheme-max-width);
        min-height: var(--scheme-min-height); // remove min SE height
        padding: 4em var(--scheme-gap);
        width: 100%;
    }

    &__description {
        background: var(--scheme-gradient);
        position: relative;
        z-index: 1;

        h1 {
            font-size: var(--scheme-m);
        }

        h3 {
            font-size: var(--scheme-xm);
            margin: 2em 0 0;
        }
    }
    &__stats {
        background: var(--scheme-v2);
        position: relative;
        z-index: 1;

        h3 {
            font-size: var(--scheme-m);
            margin: var(--scheme-gap) 0 0;
            text-align: center;

            span {
                display: block;
                font-size: var(--scheme-s);
            }
        }

        p {
            text-align: center;
            margin: var(--scheme-gap) auto;
        }

        .token__container {
            color: var(--scheme-v1);
            margin: -1px auto 0;
        }
    }

    &__chart {
        margin: 2em auto 4em;
    }
}

/* ----------- Non-Retina Screens ----------- */
@media only screen and (max-width: 975px) {
    .token {
        &__container {
            text-align: center;
        }

        h1 {
            font-size: var(--scheme-xm);
        }

        h3 {
            font-size: var(--scheme-xm);

            span {
                display: block;
                font-size: var(--scheme-xs);
                margin: var(--scheme-gap) auto;
            }
        }
    }
}
</style>
