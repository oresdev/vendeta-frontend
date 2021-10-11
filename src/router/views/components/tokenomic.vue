<template>
    <div class="table">
        <div class="table__container">
            <h3>VDT TOKEN SALE / ECONOMICS</h3>
            <ul>
                <li class="clean">Launchpad Hard Cap</li>
                <li class="clean">100000000 TBCC</li>

                <li>Total Token Supply</li>
                <li>100 000 000 VDT</li>

                <li class="clean">Initial Circulating Supply</li>
                <li class="clean">20% of Total Token Supply</li>

                <li>Public Sale Token Price</li>
                <li>10 TBCC</li>

                <li class="clean">Launchpad Allocation</li>
                <li class="clean">1000000 VDT (19% of Total Token Supply)</li>

                <li>Public Sale Vesting Period</li>
                <li>No lockup</li>

                <li class="clean">Token Type</li>
                <li class="clean">VTD (BEP-20</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.table {
    position: sticky;
    bottom: -200px;
    margin: 100px 0 0;
    padding: 0 0 4em;
    z-index: -1;

    h3 {
        font-size: var(--scheme-m);
        margin: var(--scheme-gap) 0 0;
        text-align: center;
    }

    &__container {
        height: 100%;
        margin: auto;
        max-width: var(--scheme-max-width);
        min-height: var(--scheme-min-height); // remove min SE height
        padding: 4em var(--scheme-gap);
        width: 100%;
    }

    ul {
        display: grid;
        grid-template-columns: 0.5fr 1fr;
        gap: 6px;
        margin: 2em 0 0;

        li {
            padding: 10px 26px;
            &.clean {
                background: hsla(0, 0%, 100%, 0.1);
            }
        }
    }
}

/* ----------- Non-Retina Screens ----------- */
@media only screen and (max-width: 975px) {
    .table {
        bottom: -600px;
    }
}
</style>
