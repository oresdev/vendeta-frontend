<template>
    <div class="section__container grid grid__2">
        <article>
            <h3>
                PRIVACY IS PRIORITY
                <span
                    >Based on a decentralized structure, VENDETA empowers you to regain your internet privacy <br />and stay invisible from all kinds of surveillance and
                    censorship.
                </span>
            </h3>

            <ul>
                <li>Our network lasts foreverand enables you to bypass firewalls and geo-restrictions.</li>
                <li>Decentralized community is powered by individuals like you, data is generated <br />and distributed amongst users.</li>
                <li>We built a decentralized network so single points of attack or failure pose no risk at all.</li>
            </ul>
        </article>

        <figure>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 665.85 512">
                <g fill="url(#a)">
                    <path d="M361.38 185.49v140.83l-144.97 82.84-144.97-82.84V185.49L146 226.91v57.99l70.41 41.42 70.41-41.42v-57.99l74.56-41.42z" />
                    <path d="M361.38 144.26 216.41 227.1 71.44 144.26 146 102.84l70.41 41.42 70.41-41.42 74.56 41.42z" />
                    <path
                        d="M213.33 512a10.91 10.91 0 0 1-2.71-.36C208.51 511.1 0 454 0 259.84V85.33a10.64 10.64 0 0 1 7-10L209.64.66a10.76 10.76 0 0 1 7.38 0l149.34 55a10.66 10.66 0 0 1-7.38 20L213.33 22l-192 70.74v167.1c0 166.27 168.43 223.25 192 230.4 15.19-4.61 90.58-29.82 142-91.11a10.66 10.66 0 1 1 16.34 13.69c-61.63 73.41-151.83 97.81-155.63 98.82a11.06 11.06 0 0 1-2.71.36ZM623.18 85.33a41.86 41.86 0 0 1-24.3-7.7 42 42 0 0 1-18.36-35 42.67 42.67 0 1 1 42.66 42.66Zm0-64a21.36 21.36 0 0 0-21.33 21.34A21 21 0 0 0 611 60c13.93 9.88 33.54-1.19 33.54-17.36a21.36 21.36 0 0 0-21.36-21.31ZM623.18 512a42.71 42.71 0 0 1-42.66-42.67 42.07 42.07 0 0 1 18.6-35.11 41.52 41.52 0 0 1 24.06-7.55 42.67 42.67 0 1 1 0 85.33Zm0-64a20.4 20.4 0 0 0-12 3.8 21.21 21.21 0 1 0 12-3.8ZM623.18 298.67A42.67 42.67 0 1 1 665.85 256a42.71 42.71 0 0 1-42.67 42.67Zm0-64A21.33 21.33 0 1 0 644.52 256a21.35 21.35 0 0 0-21.34-21.33Z"
                    />
                    <path
                        d="M588 266.67H409.85a10.67 10.67 0 0 1 0-21.34H588a10.67 10.67 0 0 1 0 21.34ZM527.18 192H409.85a10.67 10.67 0 1 1 0-21.33h111.74l74.67-107.84A10.67 10.67 0 1 1 613.8 75l-77.87 112.41a10.58 10.58 0 0 1-8.75 4.59ZM605.05 453.76a10.69 10.69 0 0 1-8.79-4.59l-74.67-107.84H409.85a10.67 10.67 0 1 1 0-21.33h117.33a10.64 10.64 0 0 1 8.77 4.59L613.82 437a10.68 10.68 0 0 1-2.69 14.85 10.83 10.83 0 0 1-6.08 1.91Z"
                    />
                </g>
            </svg>
        </figure>
    </div>
</template>

<style lang="scss" scoped>
article {
    h3 {
        font-size: var(--scheme-m);

        span {
            display: block;
            font-size: var(--scheme-xs);
        }
    }

    ul {
        display: grid;
        grid-template-columns: 1fr;
        grid-column-gap: 0;
        grid-row-gap: var(--scheme-gap);
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

figure {
    svg {
        width: 360px;
    }
}

/* ----------- Non-Retina Screens ----------- */
@media only screen and (max-width: 975px) {
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

    figure {
        svg {
            width: 180px;
        }
    }
}
</style>
