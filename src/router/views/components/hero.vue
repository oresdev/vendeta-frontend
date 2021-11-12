<template>
    <div class="section__container grid grid__2">
        <h1>
            Open network for
            <b>Everyone</b>
            <span
                >Secure your data by tunneling it between blockchain nodes <br />
                & encrypting it with variable quantum-secure encryption.</span
            >
        </h1>

        <Phone-Frame />
    </div>
</template>

<style lang="scss" scoped>
h1 {
    color: var(--scheme-v2);
    font-size: var(--scheme-h);
    letter-spacing: 1px;

    b,
    span {
        display: block;
    }

    b {
        margin: -10px 0 10px 45px;
        text-transform: uppercase;
    }

    span {
        font-size: var(--scheme-s);
    }
}

/* ----------- Non-Retina Screens ----------- */
@media only screen and (max-width: 975px) {
    h1 {
        font-size: var(--scheme-m);
        text-align: center;

        b {
            margin: 0;
        }

        span {
            font-size: var(--scheme-xs);
        }
    }
}
</style>
