<template>
    <div class="speed">
        <div class="speed__title">
            <h3>VTBC® CLI <span>Internet connection measurement for developers</span></h3>
        </div>
        <div class="speed__data">
            <div class="">
                <div class="speed__form">
                    <ul>
                        <li>Select provider</li>
                    </ul>
                    <button>Test your speed</button>
                </div>
                <div class="indicators">
                    <div class="indicators__upload">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path
                                d="M12 12.586l4.243 4.242-1.415 1.415L13 16.415V22h-2v-5.587l-1.828 1.83-1.415-1.415L12 12.586zM12 2a7.001 7.001 0 0 1 6.954 6.194 5.5 5.5 0 0 1-.953 10.784v-2.014a3.5 3.5 0 1 0-1.112-6.91 5 5 0 1 0-9.777 0 3.5 3.5 0 0 0-1.292 6.88l.18.03v2.014a5.5 5.5 0 0 1-.954-10.784A7 7 0 0 1 12 2z"
                            />
                        </svg>
                        90MbS
                    </div>
                    / Good

                    <div class="indicators__download">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path
                                d="M13 13v5.585l1.828-1.828 1.415 1.415L12 22.414l-4.243-4.242 1.415-1.415L11 18.585V13h2zM12 2a7.001 7.001 0 0 1 6.954 6.194 5.5 5.5 0 0 1-.953 10.784v-2.014a3.5 3.5 0 1 0-1.112-6.91 5 5 0 1 0-9.777 0 3.5 3.5 0 0 0-1.292 6.88l.18.03v2.014a5.5 5.5 0 0 1-.954-10.784A7 7 0 0 1 12 2z"
                            />
                        </svg>
                        98MbS
                    </div>
                    / Perfect
                </div>
            </div>
            <p>
                VTBC CLI brings the trusted technology and global server network behind Speedtest to the command line. Built for software developers, system administrators and
                computer enthusiasts alike, Speedtest CLI is the first official Linux-native Speedtest application backed by Ookla®.
            </p>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.speed {
    background: #ffffff;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 80px auto;
    max-width: var(--parrent-width);
    padding: 1.5em var(--parrent-padding);
    justify-content: center;
    position: relative;
    z-index: 1;

    &__title {
        h3 {
            font: 400 32px / 1.64 var(--main-font-family);
            text-align: center;

            span {
                display: block;
                font: 400 18px / 1.64 var(--main-font-family);
            }
        }
    }

    &__data {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    &__form {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 60px 0 40px;
        background: #f8fbfc;
        padding: 40px;
        border-radius: 100px;

        ul {
            border: 2px solid #bfd2d6;
            border-radius: 30px;
            padding: 10px 24px;
            margin: 0 20px 0 0;
            min-width: 280px;
        }
        button {
            background: #00b4db;
            color: #ffffff;
            border: 2px solid #ffffff;
            border-radius: 30px;
            padding: 12px 32px;
        }
    }

    .indicators {
        display: flex;
        align-items: baseline;

        &__upload {
            margin: 0 20px 0 60px;

            svg {
                vertical-align: text-bottom;
                margin: 0 10px 0 0;
                fill: #00b4db;
            }
        }

        &__download {
            margin: 0 20px 0 60px;

            svg {
                vertical-align: text-bottom;
                margin: 0 10px 0 0;
                fill: #999999;
            }
        }
    }

    p {
        flex: 100%;
        max-width: 600px;
    }
}
</style>
