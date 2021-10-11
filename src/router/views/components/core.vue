<template>
    <div class="section__container grid grid__2">
        <figure>
            <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 480 509.59">
                <linearGradient id="a">
                    <stop offset="5%" stop-color="#0083b0" />
                    <stop offset="95%" stop-color="#00b4db" />
                </linearGradient>
                <g fill="url(#a)">
                    <path
                        d="M120 285.59H24c-13.24.04-23.96 10.76-24 24v176c.04 13.24 10.76 23.96 24 24h96c13.24-.04 23.96-10.76 24-24v-176c-.04-13.24-10.76-23.96-24-24zm-26.24 16-4 16H54.24l-4-16h43.52zm34.24 184c0 4.42-3.58 8-8 8H24c-4.42 0-8-3.58-8-8v-176c0-4.42 3.58-8 8-8h9.76l6.48 25.92a7.99 7.99 0 0 0 7.76 6.08h48a7.99 7.99 0 0 0 7.76-6.08l6.48-25.92H120c4.42 0 8 3.58 8 8v176zM456 285.59h-96c-13.24.04-23.96 10.76-24 24v176c.04 13.24 10.76 23.96 24 24h96c13.24-.04 23.96-10.76 24-24v-176c-.04-13.24-10.76-23.96-24-24zm-26.24 16-4 16h-35.52l-4-16h43.52zm34.24 184c0 4.42-3.58 8-8 8h-96c-4.42 0-8-3.58-8-8v-176c0-4.42 3.58-8 8-8h9.76l6.48 25.92a7.99 7.99 0 0 0 7.76 6.08h48a7.99 7.99 0 0 0 7.76-6.08l6.48-25.92H456c4.42 0 8 3.58 8 8v176zM262.56 389.59A24.279 24.279 0 0 0 248 375.03v-25.44h-16v25.44a24.279 24.279 0 0 0-14.56 14.56H192v16h25.44c4.36 12.46 18 19.02 30.46 14.66 6.86-2.4 12.25-7.8 14.66-14.66H288v-16h-25.44zm-22.56 16c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zM232 285.59h16v16h-16v-16zM232 317.59h16v16h-16v-16zM160 389.59h16v16h-16v-16zM304 389.59h16v16h-16v-16zM72 61.59h16v16H72v-16zM40 61.59h16v16H40v-16zM40 93.59h16v16H40v-16zM40 125.59h16v16H40v-16zM40 157.59h16v16H40v-16zM40 189.59h16v16H40v-16zM40 221.59h16v16H40v-16zM40 253.59h16v16H40v-16zM392 61.59h16v16h-16v-16zM424 61.59h16v16h-16v-16zM424 93.59h16v16h-16v-16zM424 125.59h16v16h-16v-16zM424 157.59h16v16h-16v-16zM424 189.59h16v16h-16v-16zM424 221.59h16v16h-16v-16zM424 253.59h16v16h-16v-16z"
                    />
                    <path
                        d="M384 461.59h48v16h-48v-16zM48 461.59h48v16H48v-16zM366.45 72.09v122.84L240 267.19l-126.45-72.26V72.09l65.03 36.13v50.58L240 194.93l61.42-36.13v-50.58z"
                    />
                    <path d="M366.45 36.13 240 108.39 113.55 36.13 178.58 0 240 36.13 301.42 0z" />
                </g>
            </svg>
        </figure>

        <article>
            <h3>
                MEET VEN SYSTEM
                <span>
                    Privacy — meets P2P VPN. Try out to redefine what it means <br />
                    to be connected through people-powered protocols. No central points of failure or control. <br />Browse anonymously and leave absolutely no trace.</span
                >
            </h3>
            <ul>
                <li>Pay for VPN service using one of our supported cryptocurrencies.</li>
                <li>Instant, on-demand settlement</li>
                <li>Low operational and liquidity costs</li>
            </ul>
        </article>
    </div>
</template>

<style lang="scss" scoped>
figure {
    svg {
        width: 360px;
    }
}

article {
    h3 {
        font-size: var(--scheme-m);

        span {
            display: block;
            font-size: var(--scheme-xs);
        }
    }

    ul {
        margin: var(--scheme-gap) 0 0;

        li {
            align-items: center;
            display: grid;
            grid-template-columns: auto 1fr;
            grid-column-gap: var(--scheme-gap);

            &::before {
                color: var(--scheme-v4);
                content: '◭';
                font-size: var(--scheme-m);
            }
        }
    }
}

/* ----------- Non-Retina Screens ----------- */
@media only screen and (max-width: 975px) {
    figure {
        svg {
            width: 180px;
        }
    }

    article {
        text-align: center;

        h3 {
            font-size: var(--scheme-xm);

            span {
                display: block;
                font-size: var(--scheme-xs);
                margin: var(--scheme-gap) auto;
            }
        }

        ul {
            li {
                grid-template-columns: 1fr;
            }
        }
    }
}
</style>
