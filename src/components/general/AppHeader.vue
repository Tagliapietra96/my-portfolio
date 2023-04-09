<template>
    <div class="spacer">
        <header :class="{ 'visible': store.dt.bool.headerVisibility }">
            <div class="link-div">
                <router-link to="/">ABOUT ME</router-link>
                <router-link to="/">PROJECTS</router-link>
            </div>

            <router-link to="/" class="link-div">
                <img src="logo.svg" alt="" class="box-3d" @click="store.fn.loading.initPage()">
            </router-link>

            <div class="link-div">
                <router-link to="/">CONTACTS</router-link>
                <router-link to="/">GAMES</router-link>
                <HeaderBtn/>
            </div>
        </header>
    </div>
</template>

<script>
import { store } from '../../stores/main-store';
import HeaderBtn from './HeaderBtn.vue';
export default {
    data() {
        return {
            store
        };
    },
    mounted() {
        store.dt.bool.hamburegerOpen = false;
        VanillaTilt.init(document.querySelector(".box-3d"), {
            max: 40,
            speed: 400,
            "full-page-listening": true,
            reverse: true,
            scale: 1.1,
        });
    },
    components: { HeaderBtn }
}
</script>

<style lang="scss" scoped>
@import '../../scss/partials/variables/variables.scss';

.spacer {
    height: $headerHeight;
}

header {
    position: fixed;
    top: 100vh;
    right: 0;
    left: 0;
    background-color: $dark;
    transition: top .5s;
    z-index: 5;
    filter: drop-shadow(0px 0px 15px rgba(255, 255, 255, 0.3));
    -webkit-filter: drop-shadow(0px 0px 15px rgba(255, 255, 255, 0.3));
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &.visible {
        top: 0;

        .link-div {
            padding: 1rem;
            display: flex;
            justify-content: space-around;
            flex-basis: calc(100% / 3);

            *:not(img):not(.hamburger) {
                color: $light;
                text-decoration: none;
                font-weight: bold;
                padding: 1.1rem;
                position: relative;
                filter: drop-shadow(0px 5px 5px rgba(255, 255, 255, .3));
                -webkit-filter: drop-shadow(0px 5px 5px rgba(255, 255, 255, .3));
                transition: filter .5s;

                &::after {
                    content: '';
                    position: absolute;
                    background-color: $light;
                    bottom: 0;
                    left: 50%;
                    right: 50%;
                    height: 1px;
                    opacity: 0;
                    transition: right .5s, left .5s, opacity .3s;
                    filter: drop-shadow(0px 0px 5px rgba(255, 255, 255, .5));
                    -webkit-filter: drop-shadow(0px 0px 5px rgba(255, 255, 255, .5));
                }

                &:hover {
                    filter: drop-shadow(0px 5px 5px rgba(255, 255, 255, .5));
                    -webkit-filter: drop-shadow(0px 5px 5px rgba(255, 255, 255, .5));

                    &::after {
                        left: 0;
                        right: 0;
                        opacity: 1;
                    }
                }
            }

            img {
                width: 45px;
                transform-style: preserve-3d;
                border: 1px solid $light;
                border-radius: 50%;
                filter: drop-shadow(0px 5px 5px rgba(255, 255, 255, .5));
                -webkit-filter: drop-shadow(0px 5px 5px rgba(255, 255, 255, .5));
                cursor: pointer;

            }

        }
    }

}

@media (max-width:900px) {
    header.visible {
        height: $headerHeight;

        .link-div {
            *:not(img) {
                display: none;
            }

            .hamburger {
                display: block;
            }
        }
    }

}
</style>