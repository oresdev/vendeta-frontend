<template>
    <body id="app">
        <HeaderNavbar :account="account" />

        <router-view v-on:connected="accountData" />

        <FooterNavbar />
    </body>
</template>

<script>
export default {
    data() {
        return {
            account: null
        }
    },
    methods: {
        accountData(data) {
            this.account = data
        }
    },
    mounted() {
        const device = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent)
        if (device) {
            document.body.classList.add('__mobile')
        } else {
            document.body.classList.add('__desktop')
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
// initialize project fonts from @assets
@font-face {
    font-family: 'Jost';
    src: local('~@/assets/fonts/Jost-400-Book'), url('~@/assets/fonts/Jost-400-Book.ttf') format('truetype');
    font-weight: 400;
}

@font-face {
    font-family: 'Jost';
    src: local('~@/assets/fonts/Jost-700-Bold'), url('~@/assets/fonts/Jost-700-Bold.ttf') format('truetype');
    font-weight: 700;
}

@font-face {
    font-family: 'remixicon';
    src: url('~@/assets/fonts/icons/remixicon.eot?t=1636719158817');
    src: url('~@/assets/fonts/icons/remixicon.eot?t=1636719158817#iefix') format('embedded-opentype'), url('~@/assets/fonts/icons/remixicon.woff2?t=1636719158817') format('woff2'),
        url('~@/assets/fonts/icons/remixicon.woff?t=1636719158817') format('woff'), url('~@/assets/fonts/icons/remixicon.ttf?t=1636719158817') format('truetype'),
        url('~@/assets/fonts/icons/remixicon.svg?t=1636719158817#remixicon') format('svg');
    font-display: swap;
}

:root {
    // project color palete
    --scheme-v1: #374550; // primary scheme
    --scheme-v2: #ffffff;
    --scheme-v3: #0083b0;
    --scheme-v4: #00b4db;

    // project gradient palete
    --scheme-gradient: linear-gradient(to right, var(--scheme-v3), var(--scheme-v4));

    // project font-family
    --scheme-font: 400 var(--scheme-xs) / 1.64 'Jost', sans-serif;
    --scheme-h: 56px;
    --scheme-xh: 46px;
    --scheme-m: 32px;
    --scheme-xm: 26px;
    --scheme-s: 18px;
    --scheme-xs: 16px;

    // project icons font-family
    --scheme-icon: 'remixicon';

    // project default template width
    --scheme-max-width: 1230px; // 5 SE
    --scheme-min-width: 320px; // 5 SE

    // project default template height
    --scheme-min-height: 568px; // 5 SE

    // project default template gap
    --scheme-gap: 20px;

    // project ex. header & footer height
    --scheme-offset: 100px;
}

// project reset css
* {
    box-sizing: border-box;
}

// remove highlights on tap on mobile
* {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

html,
body {
    margin: 0;
}

body {
    background: var(--scheme-gradient);
    color: var(--scheme-v1);
    font: var(--scheme-font);

    // user-select: none;
    ::selection {
        background: var(--scheme-v4);
    }
    position: relative;
}

main,
section {
    position: relative;
}

h1,
h2,
h3,
h4,
h5 {
    font-weight: 400;
    margin: 0;
}

a {
    color: inherit;
    text-decoration: none;
}

b {
    font-weight: 700;
}

ul {
    margin: 0;
    padding: 0;

    li {
        list-style: none;
    }
}

img {
    display: block;
    width: 100%;
    // object-fit: cover;
}

figure {
    margin: 0;

    svg {
        vertical-align: middle;
    }
}

input,
button {
    background: none;
    border: none;
    box-shadow: none;

    font: var(--scheme-font);

    margin: 0;
    outline: none;
    padding: 0;
}

// set default button properties
button {
    cursor: pointer;
    color: inherit;
}
</style>
