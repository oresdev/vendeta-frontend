<template>
    <div class="section__container grid grid__2">
        <article>
            <h3>
                GOT QUESTIONS?
                <span
                    >For further assistance, you can check out our <a href="/">VPN guides</a>, or get in touch <br />with our Customer Support team via social or email services.
                    <br />
                    They’re available 24/7.</span
                >
            </h3>
            <button v-on:click="sendMail">Let`s talk?</button>
        </article>

        <div>
            <ul class="social">
                <li class="social__item facebook"></li>

                <li class="social__item twitter"></li>

                <li class="social__item telegram"></li>
            </ul>

            <ul class="terms">
                <li class="terms__item">
                    <a href="/">Privacy Policy</a>
                </li>

                <li class="terms__item">
                    <a href="/">Terms & Conditons</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        sendMail() {
            const url = 'mailto:vendeta.network@outlook.com'
            window.location.href = url
        }
    }
}
</script>

<style lang="scss" scoped>
article {
    h3 {
        font-size: var(--scheme-m);

        span {
            display: block;
            font-size: var(--scheme-xs);
        }
    }

    button {
        border: 2px solid var(--scheme-v1);
        border-radius: 25px;
        color: var(--scheme-v1);
        margin: var(--scheme-gap) 0 0;
        padding: 8px 48px;
    }
}

.social {
    margin: 2em 0 0;

    &__item {
        display: inline-block;
        margin: 0 calc(var(--scheme-gap) * 3.5) 0 0;

        &::before {
            color: var(--scheme-v4);
            font-family: var(--scheme-icon);
            font-size: 31px;
            margin: 0 calc(var(--scheme-gap) / 2) 0 0;
            vertical-align: -0.2em;
        }

        &.facebook {
            &::before {
                content: '\ecbc';
            }
        }

        &.twitter {
            &::before {
                content: '\f23a';
            }
        }

        &.telegram {
            &::before {
                content: '\f0d9';
            }
        }
    }
}

.terms {
    margin: 2em 0 0;

    &__item {
        display: inline-block;
        margin: 0 calc(var(--scheme-gap) * 2) 0 0;
    }
}

/* ----------- Non-Retina Screens ----------- */
@media only screen and (max-width: 975px) {
    article {
        text-align: center;
        h3 {
            font-size: var(--scheme-xm);

            span {
                margin: var(--scheme-gap) auto;
            }
        }
    }

    .social {
        text-align: center;
        &__item {
            margin: 0 calc(var(--scheme-gap) * 1.2);
        }
    }

    .terms {
        text-align: center;
        &__item {
            display: block;
            margin: var(--scheme-gap) 0;
        }
    }
}
</style>
