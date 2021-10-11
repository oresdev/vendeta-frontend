<template>
    <qrcode-vue :value="value" render-as="svg" :size="size" level="L" class="qr" />
</template>

<script>
import QrcodeVue from 'qrcode.vue'

export default {
    props: {
        value: {
            type: String,
            default: 'https://vendeta.network/'
        }
    },
    data() {
        return {
            size: 220
        }
    },
    components: {
        QrcodeVue
    }
}
</script>

<style lang="scss" scoped>
.qr {
    background: var(--scheme-v2);
    box-sizing: content-box;
    margin: 2em auto;
    padding: 3em 0;
    width: var(--scheme-min-width);
}

/* ----------- Non-Retina Screens ----------- */
@media only screen and (max-width: 975px) {
    .qr {
        width: auto;
    }
}
</style>
