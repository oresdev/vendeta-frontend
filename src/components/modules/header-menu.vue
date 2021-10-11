<template>
    <button class="menu" v-on:click="switchActive()"></button>
</template>

<script>
export default {
    methods: {
        switchActive() {
            this.$emit('switched', 'switched')
        }
    }
}
</script>

<style lang="scss" scoped>
.menu {
    color: var(--scheme-v2);
    display: none;
    line-height: 1;
    position: relative;

    &::before {
        content: '\ef3e';
        font-family: var(--scheme-icon);
        font-size: 32px;
    }
}

/* ----------- Non-Retina Screens ----------- */
@media only screen and (max-width: 975px) {
    .menu {
        cursor: pointer;
        display: block;
    }
}
</style>
