<template>
    <div class="launchpool">
        <div v-if="!account && !visible" class="overlay" @click="visible = true"></div>
        <div class="launchpool__container">
            <div v-if="account" class="launchpool__item">
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

            <div v-else class="launchpool__timer">
                <h3>
                    TOKEN PRE-ORDER BOOK IS LIVE!
                    <span>Learn how to stake here</span>
                </h3>

                <Countdown :date="end" size="var(--scheme-xh);" @onFinish="finish()" />

                <span>Order process ending 21 Dec, 7:00pm GMT+3</span>

                <p>No wallet connected. Please connect your wallet to stake.</p>
            </div>
        </div>

        <div class=""><Popup v-if="!account && !visible" v-on:connect="connect" /></div>

        <!-- waves devider-->
        <Divider />
    </div>
</template>

<script>
import detectProvider from '@metamask/detect-provider'
import web3U from 'web3-utils'

export default {
    data() {
        return {
            end: new Date('2021-12-21T07:00:00'),
            account: null,
            visible: false,
            eth: 0
        }
    },
    methods: {
        connect() {
            ethereum
                .request({ method: 'eth_requestAccounts' })
                .then(this.handleAccountsChanged)
                .catch((err) => {
                    if (err.code === 4001) {
                        // EIP-1193 userRejectedRequest error
                        // If this happens, the user rejected the connection request.
                        console.log('Please connect to MetaMask.')
                    } else {
                        console.error(err)
                    }
                })
        },
        run(provider) {
            // If the provider returned by detectEthereumProvider is not the same as
            // window.ethereum, something is overwriting it, perhaps another wallet.
            if (provider !== window.ethereum) {
                console.error('Do you have multiple wallets installed?')
            }

            console.log('Access the decentralized web!')
            // Access the decentralized web!
        },
        handleChainChanged(_chainId) {
            // We recommend reloading the page, unless you must do otherwise
            // window.location.reload()
        },
        handleAccountsChanged(accounts) {
            if (accounts.length === 0) {
                this.account = null

                this.$emit('connected', this.account)
                // MetaMask is locked or the user has not connected any accounts
                console.log('Please connect to MetaMask.')
            } else if (accounts[0] !== this.account) {
                this.account = accounts[0]
                // Do any other work!

                this.checkWei()
                this.$emit('connected', this.account)
            }
        },
        checkWei() {
            ethereum
                .request({
                    method: 'eth_getBalance',
                    params: [this.account]
                })
                .then((wei) => (this.eth = web3U.fromWei(wei)))
                .catch((error) => console.log(error.message))
        },
        finish() {
            console.log('expired')
        }
    },
    async mounted() {
        // this returns the provider, or null if it wasn't detected
        const provider = await detectProvider()

        if (provider) {
            this.run(provider) // Initialize your app
        } else {
            console.log('Please install MetaMask!')
        }

        // Handle chain (network) and chainChanged (per EIP-1193)
        const chainId = await ethereum.request({ method: 'eth_chainId' })

        this.handleChainChanged(chainId)

        ethereum.on('chainChanged', this.handleChainChanged)

        // Note that this event is emitted on page load.
        // If the array of accounts is non-empty, you're already
        // connected.
        ethereum.on('accountsChanged', this.handleAccountsChanged)
    }
}
</script>

<style lang="scss" scoped>
.overlay {
    background: hsla(197, 93%, 6%, 0.8);
    bottom: 0;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    z-index: 10;
}

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

    &__timer {
        background: hsla(195, 87%, 27%, 0.315);
        border-radius: 10px;
        padding: 4em var(--scheme-gap);
        text-align: center;

        h3 {
            font-size: var(--scheme-m);
            margin: 0 0 2em;

            span {
                display: block;
                font-size: var(--scheme-xs);
                opacity: 0.6;
            }
        }

        span {
            display: block;
            margin: 0 0 6em;
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

        &__timer {
            padding: 2em var(--scheme-gap);

            h3 {
                font-size: var(--scheme-xm);
                margin: 0;
            }

            span {
                margin: 0 0 4em;
            }
        }
    }
}
</style>
