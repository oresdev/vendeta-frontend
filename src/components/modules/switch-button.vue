<template>
    <label class="switch-holder">
        <input class="input" type="checkbox" checked />
        <span class="switch"></span>
    </label>
</template>

<style lang="scss" scoped>
.switch-holder {
    align-items: center;
    display: flex;
    margin: 60px auto;
    width: 120px;
}

.input {
    border-width: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}

.switch {
    --switch-container-width: 120px;
    --switch-size: calc(var(--switch-container-width) / 2);

    align-items: center;
    background-color: var(--scheme-v4);
    border-radius: var(--switch-size);
    box-shadow: inset 2px 2px 4px var(--scheme-v3), inset -5px -5px 10px var(--scheme-v4);
    display: flex;
    flex-basis: var(--switch-container-width);
    height: calc(var(--switch-size) - 8px);
    position: relative;
}

.switch::before {
    background-color: #ffffff;
    border-radius: 9999px;
    box-shadow: 2px 2px 2px #f3f3f3;
    color: var(--scheme-v4);
    content: '\f126';
    font-family: var(--scheme-icon);
    font-size: 45px;
    height: calc(var(--switch-size) + 12px);
    width: calc(var(--switch-size) + 12px);
    position: absolute;
    transform: translateX(calc(var(--switch-container-width) - var(--switch-size)));
}
</style>
