<template>
    <router-link to="/" custom v-slot="{ navigate }">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 739.54" v-on:click="navigate" v-on:keypress.enter="navigate" role="link">
            <path d="M700 100 350 300 0 100 180 0l170 100L520 0l180 100z" style="opacity: 0.2" />
            <path d="M700 199.54v340l-350 200-350-200v-340l180 100v140l170 100 170-100v-140l180-100z" />
        </svg>
    </router-link>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
svg {
    cursor: pointer;
    fill: var(--scheme-v2);
    height: 52px;
}
</style>
