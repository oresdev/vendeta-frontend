<template>
    <svg :class="[rotate ? 'rotate' : '']" xmlns="http://www.w3.org/2000/svg"><path d="M0 59.35c645.58 120.24 1132.73-180.67 1920 0v209.24H0Z" /></svg>
</template>

<script>
export default {
    props: {
        rotate: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
svg {
    background: var(--scheme-gradient);
    fill: var(--scheme-v2);
    height: var(--scheme-offset);
    margin: 0 0 -8px 0;
    width: 100%;
    position: relative;
    z-index: 2;

    &.rotate {
        background: transparent;
        transform: rotate(180deg);
    }
}
</style>
