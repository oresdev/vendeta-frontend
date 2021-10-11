<template>
    <section class="notfound">
        <div class="notfound__container">
            <figure>
                <svg xmlns="http://www.w3.org/2000/svg" data-name="Слой 1" viewBox="0 0 95.6 95.6">
                    <path
                        d="M87 20.5c-.7 1.1-1.4 2.2-2.1 3.4A43.58 43.58 0 0 1 92 47.8 44.21 44.21 0 0 1 47.8 92a43.58 43.58 0 0 1-23.9-7.1 31.3 31.3 0 0 1-3.4 2.1 47.76 47.76 0 0 0 75.1-39.2A46 46 0 0 0 87 20.5ZM16.4 78.8a44.123 44.123 0 0 1 62.4-62.4c.7-1.2 1.4-2.3 1.9-3.3a47.82 47.82 0 0 0-67.6 67.6c1-.5 2.1-1.2 3.3-1.9Z"
                    />
                    <path
                        d="M37.6 66.4a195.13 195.13 0 0 1-17.2 13.2C9.6 86.7 5 86.9 4.1 86c-.7-.7-.7-3.4 2.2-9.2-.8-1.1-1.6-2.3-2.3-3.5-3.8 6.8-5.3 12.5-2.5 15.2a5.21 5.21 0 0 0 3.9 1.4c7.6 0 21.4-9.6 34.3-20.6-.7-.9-1.4-1.9-2.1-2.9ZM84.5 3.7a2.11 2.11 0 0 1 1.4.4c.9.9.7 5.4-6.4 16.3a156.33 156.33 0 0 1-12.1 15.9 21.41 21.41 0 0 1 .7 4.8c13.8-16 26-33.9 20.4-39.6C85.8-1.2 80.1.2 73.2 4c1.2.8 2.4 1.5 3.5 2.3 3.9-1.9 6.4-2.6 7.8-2.6ZM64.18 41.12v15.92L47.8 66.4l-16.38-9.36V41.12l8.42 4.68v6.56l7.96 4.68 7.96-4.68V45.8l8.42-4.68z"
                    />
                    <path d="M64.18 36.46 47.8 45.83l-16.38-9.37 8.42-4.68 7.96 4.68 7.96-4.68 8.42 4.68z" />
                </svg>
            </figure>
            <h1>
                <span>{{ $t('errors[0][0]') }}</span>
                {{ $t('errors[0][1]') }}
            </h1>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg"><path d="M0 59.35c645.58 120.24 1132.73-180.67 1920 0v209.24H0Z" /></svg>
    </section>
</template>

<style lang="scss" scoped>
.notfound {
    background: #00b4db; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #0083b0, #00b4db); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #0083b0, #00b4db); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    &__container {
        align-items: center;
        color: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: -100px auto 0;
        max-width: var(--parrent-width);
        min-height: 600px;
        padding: 1.5em var(--parrent-padding);

        figure {
            margin: 100px 0 2em;

            svg {
                fill: #ffffff;
                width: 260px;
                height: 260px;
            }
        }
    }

    svg {
        fill: #ffffff;
        height: 92px;
        margin: 0 0 -7px 0;
        width: 100%;
        position: relative;
        z-index: 1;
    }
}
</style>
