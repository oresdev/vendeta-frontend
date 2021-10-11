<template>
    <div :class="['plan', active ? 'active' : '']">
        <h3>{{ period }} <span v-text="percent" /></h3>
        <div class="plan__amount">
            {{ amount }}
            <span>monthly</span>
        </div>

        <button>SELECT</button>
        <p>billed {{ description }} once</p>
    </div>
</template>

<script>
export default {
    props: {
        period: String,
        percent: String,
        amount: String,
        description: String,
        active: Boolean
    }
}
</script>

<style lang="scss" scoped>
.plan {
    background: var(--scheme-v2);
    border-radius: 20px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.06);
    color: var(--scheme-v1);
    cursor: default;
    display: grid;
    grid-template-rows: repeat(4, auto);
    grid-row-gap: var(--scheme-gap);
    padding: 4em 2em 2em;
    text-align: center;

    h3 {
        font-size: var(--scheme-xm);

        span {
            display: block;
            font-size: var(--scheme-xs);
            opacity: 0.6;
        }
    }

    &__amount {
        font-size: var(--scheme-xh);

        span {
            display: block;
            font-size: var(--scheme-s);
            opacity: 0.6;
        }
    }

    button {
        background-image: var(--scheme-gradient);
        border-radius: 25px;
        color: var(--scheme-v2);
        margin: 2em 0 0;
        padding: 10px 64px;
    }

    p {
        opacity: 0.6;
    }

    &.active {
        background: linear-gradient(270deg, #096381, hsla(191, 100%, 43%, 0.473));
        color: var(--scheme-v2);
        opacity: 1;

        button {
            background: var(--scheme-v2);
            color: var(--scheme-v3);
        }

        .plan__amount {
            margin: 0.5em 0;
        }
    }
}

/* ----------- Non-Retina Screens ----------- */
@media only screen and (max-width: 975px) {
    .plan {
        h3 {
            font-size: var(--scheme-s);
        }

        &__amount {
            font-size: var(--scheme-m);
        }
    }
    .active {
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.08);
    }
}
</style>
