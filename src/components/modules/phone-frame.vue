<template>
    <div class="phone">
        <div class="phone__container">
            <div class="phone__speaker"></div>
            <div class="phone__settings"></div>
            <div class="phone__label">VEN VPN</div>
            <div class="phone__bugs"></div>
            <div class="phone__button">
                <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <linearGradient id="button">
                        <stop offset="5%" stop-color="#0083b0" />
                        <stop offset="95%" stop-color="#00b4db" />
                    </linearGradient>
                    <path
                        fill="url('#button')"
                        d="m6.265 3.807 1.147 1.639a8 8 0 1 0 9.176 0l1.147-1.639A9.988 9.988 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12a9.988 9.988 0 0 1 4.265-8.193zM11 12V2h2v10h-2z"
                    />
                </svg> -->
                <span>Connected to AP-0 (EU, Norway)</span>
            </div>
            <div class="phone__footer">
                <button>CONNECTION INFO</button>
                <button>CHANGE SERVER</button>
            </div>
        </div>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.phone {
    background-color: #fefefe;
    border-radius: 30px;
    box-shadow: 0 0 60px 10px rgba(70, 70, 70, 0.03), -10px 10px 50px rgba(0, 0, 0, 0.1), -50px 50px 70px rgba(0, 0, 0, 0.05), -100px 100px 100px rgba(0, 0, 0, 0.03),
        -150px 150px 150px rgba(0, 0, 0, 0.02);
    height: 600px;
    position: relative;
    width: 300px;

    &__container {
        align-items: center;
        background-color: #fefefe;
        background-image: linear-gradient(45deg, #fcfcfc, white);
        border-radius: 30px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, auto) 1fr auto;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        height: 100%;
        justify-items: center;
        padding: 30px;
    }

    &__speaker {
        grid-area: 1 / 1 / 2 / 4;
        width: 50px;
        height: 7px;
        border-radius: 10px;
        background-color: #f3f3f3;
        margin: 0 0 20px;
    }

    &__settings {
        grid-area: 2 / 1 / 3 / 2;
        margin: 0 auto 0 0;

        &::before {
            content: '\f0e8';
            font-family: var(--scheme-icon);
            font-size: 22px;
            vertical-align: -0.2em;
        }
    }

    &__label {
        grid-area: 2 / 2 / 3 / 3;
    }

    &__bugs {
        grid-area: 2 / 3 / 3 / 4;
        margin: 0 0 0 auto;

        &::before {
            content: '\eb07';
            font-family: var(--scheme-icon);
            font-size: 22px;
            vertical-align: -0.2em;
        }
    }

    &__button {
        grid-area: 3 / 1 / 4 / 4;
        text-align: center;

        &::before {
            content: '\f126';
            background: var(--scheme-gradient);
            background-clip: text;
            font-family: var(--scheme-icon);
            font-size: 154px;
            line-height: 1;

            -webkit-text-fill-color: transparent;
        }

        span {
            color: var(--scheme-v3);
            display: block;
            font-size: 14px;
        }
    }

    &__footer {
        grid-area: 4 / 1 / 5 / 4;
        text-align: center;

        button {
            border-radius: 25px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.06);
            color: var(--scheme-v3);
            cursor: default;
            font-size: 14px;
            padding: 5px 26px;
            transition: all 0.3s ease 0s;

            &:last-child {
                background: var(--scheme-gradient);
                color: #f3f3f3;
                margin: 20px 0 0;
            }
        }
    }
}

/* ----------- Non-Retina Screens ----------- */
@media only screen and (max-width: 975px) {
    .phone {
        height: var(--scheme-min-height);
        width: 280px;
    }
}
</style>
