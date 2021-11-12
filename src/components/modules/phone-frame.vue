<template>
    <div class="phone">
        <div class="phone__container">
            <div class="phone__header">
                <svg width="56" height="10" xmlns="http://www.w3.org/2000/svg">
                    <rect height="7" width="55" y="2.5" x="0.5" fill="#f3f3f3" />
                </svg>
                VPN Connected <span>56 : 30 : 10</span>
            </div>

            <div class="phone__main">
                <Switch-button />

                <ul class="phone__speedtest">
                    <li>120 Mb/s <small>DOWNLOAD</small></li>
                    <li>34.7 Mb/s <small>UPLOAD</small></li>
                </ul>

                <div class="phone__button">
                    <small>231:532:531:20</small>
                    North America - Canada
                </div>
            </div>

            <div class="phone__footer">
                <div class="phone__button phone__settings"></div>
                <div class="phone__button-reversed phone__logo">
                    <figure>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 739.54" fill="var(--scheme-v4)">
                            <path d="M700 100 350 300 0 100 180 0l170 100L520 0l180 100z" style="opacity: 0.2" />
                            <path d="M700 199.54v340l-350 200-350-200v-340l180 100v140l170 100 170-100v-140l180-100z" />
                        </svg>
                    </figure>
                </div>
                <div class="phone__button phone__stats"></div>
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
        background-color: #fefefe;
        background-image: linear-gradient(45deg, #fcfcfc, #ffffff);
        border-radius: 30px;
        height: 100%;
        padding: 30px;
        text-align: center;
    }

    &__header {
        color: var(--scheme-v4);
        svg {
            display: block;
            margin: 0 auto 20px;
        }
        span {
            color: var(--scheme-v1);
            display: block;
            line-height: 1.2;

            &::before {
                content: '・';
                color: #00db8f;
                font-size: 28px;
                margin: 0 0 0 -6px;
                vertical-align: -0.16em;
            }
        }
    }

    &__speedtest {
        display: flex;
        justify-content: space-around;

        small {
            display: block;
            font-size: 10px;
            color: #bbbbbb;
        }
    }

    &__button {
        box-shadow: -5px -5px 2px #fff, 2px 2px 5px #eee;
        border-radius: 5px;
        margin: 20px auto;
        padding: 15px;
        min-width: 66px;

        small {
            display: block;
            font-size: 10px;
            color: #bbbbbb;
        }
    }

    &__button-reversed {
        box-shadow: inset -5px -5px 2px #fff, inset 2px 2px 5px #eee;
        border-radius: 5px;
        margin: 20px auto;
        min-width: 66px;
        padding: 10px 15px;
    }

    &__logo {
        figure {
            width: 28px;
            margin: 6.6px auto auto;
        }
    }

    &__footer {
        display: flex;

        .phone__button {
            &:first-child {
                padding: 10px 15px;
                &::before {
                    color: #bbbbbb;
                    content: '\f0e8';
                    font-family: var(--scheme-icon);
                    font-size: 26px;
                }
            }
            &:last-child {
                padding: 10px 15px;
                &::before {
                    color: #bbbbbb;
                    content: '\f19d';
                    font-family: var(--scheme-icon);
                    font-size: 26px;
                }
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
