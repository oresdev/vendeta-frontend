<template>
    <div class="section__container grid">
        <h3>
            DOWNLOAD APPLICATION
            <span>
                No matter where you are or what devices you’re using, <br />VENDETA VPN has you connected and secure your online activity through a truly secure decentralised VPN
                <br />just <b>one tap</b> away.
            </span>
        </h3>

        <article>
            <ul class="device">
                <li class="device__item android" v-on:click="value = 'http://182.92.107.179/vpn/TBCCVPN-arm64-v8a-latest/'">Android</li>

                <li class="device__item ios" v-on:click="value = ''">IOS</li>

                <li class="device__item windows" v-on:click="value = 'http://182.92.107.179/vpn/TBCCVPN-amd64-windows-latest/'">Windows</li>
            </ul>

            <Qr :value="value" />

            <p>Select the type of device to download the application or use the qr-code.</p>

            <button v-on:click="download" :disabled="this.value == ''">Download</button>
        </article>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: ''
        }
    },
    methods: {
        download() {
            const url = this.value
            window.location.href = url
        }
    }
}
</script>

<style lang="scss" scoped>
h3 {
    color: var(--scheme-v2);
    font-size: var(--scheme-m);
    text-align: center;

    span {
        display: block;
        font-size: var(--scheme-xs);
    }
}

article {
    color: var(--scheme-v2);
    text-align: center;

    .device {
        display: grid;
        grid-template-columns: repeat(3, auto);
        justify-content: space-around;
        margin: var(--scheme-gap) 0 0;

        &__item {
            cursor: pointer;
            transition: opacity 0.35s;

            &:hover {
                opacity: 0.6;
            }

            &::before {
                font-family: var(--scheme-icon);
                font-size: 31px;
                margin: 0 calc(var(--scheme-gap) / 2) 0 0;
                vertical-align: -0.264em;
            }

            &.android {
                &::before {
                    content: '\ea35';
                    font-size: 28px;
                }
            }

            &.ios {
                &::before {
                    content: '\ea3f';
                }
            }

            &.windows {
                &::before {
                    content: '\f2c7';
                }
            }
        }
    }

    button {
        border: 2px solid var(--scheme-v2);
        border-radius: 25px;
        color: var(--scheme-v2);
        padding: 8px 48px;
    }
}

/* ----------- Non-Retina Screens ----------- */
@media only screen and (max-width: 975px) {
    h3 {
        font-size: var(--scheme-xm);

        span {
            margin: var(--scheme-gap) auto;
        }
    }

    article {
        .device {
            &__item {
                &::before {
                    display: block;
                    height: 47px;
                    margin: 0;
                }
            }
        }

        button {
            border: 2px solid var(--scheme-v2);
            border-radius: 25px;
            color: var(--scheme-v2);
            padding: 8px 48px;
        }
    }
}
</style>
