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
            <div class="hamburger" :class="{ 'open': store.dt.bool.hamburegerOpen }"
            @click="store.dt.bool.hamburegerOpen = !store.dt.bool.hamburegerOpen">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</header>
</div>
</template>

<script>
import { store } from '../../stores/main-store';
export default {
    data() {
        return {
            store
        }
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

            .hamburger {
                display: none;
                width: 15px;
                height: 13px;
                position: relative;
                -webkit-transform: rotate(0deg);
                -moz-transform: rotate(0deg);
                -o-transform: rotate(0deg);
                transform: rotate(0deg);
                -webkit-transition: .5s ease-in-out;
                -moz-transition: .5s ease-in-out;
                -o-transition: .5s ease-in-out;
                transition: .5s ease-in-out;
                cursor: pointer;

                span {
                    padding: 0;
                    display: block;
                    position: absolute;
                    height: 1px;
                    width: 100%;
                    background: $light;
                    border-radius: 9px;
                    opacity: 1;
                    left: 0;
                    -webkit-transform: rotate(0deg);
                    -moz-transform: rotate(0deg);
                    -o-transform: rotate(0deg);
                    transform: rotate(0deg);
                    -webkit-transition: .25s ease-in-out;
                    -moz-transition: .25s ease-in-out;
                    -o-transition: .25s ease-in-out;
                    transition: .25s ease-in-out;
                }

                span:nth-child(1) {
                    top: 0px;
                    -webkit-transform-origin: left center;
                    -moz-transform-origin: left center;
                    -o-transform-origin: left center;
                    transform-origin: left center;
                }

                span:nth-child(2) {
                    top: 6px;
                    -webkit-transform-origin: left center;
                    -moz-transform-origin: left center;
                    -o-transform-origin: left center;
                    transform-origin: left center;
                }

                span:nth-child(3) {
                    top: 12px;
                    -webkit-transform-origin: left center;
                    -moz-transform-origin: left center;
                    -o-transform-origin: left center;
                    transform-origin: left center;
                }

                &.open {
                    span:nth-child(1) {
                        -webkit-transform: rotate(45deg);
                        -moz-transform: rotate(45deg);
                        -o-transform: rotate(45deg);
                        transform: rotate(45deg);
                        width: 115%;
                    }

                    span:nth-child(2) {
                        width: 0%;
                        opacity: 0;
                    }

                    span:nth-child(3) {
                        -webkit-transform: rotate(-45deg);
                        -moz-transform: rotate(-45deg);
                        -o-transform: rotate(-45deg);
                        transform: rotate(-45deg);
                        width: 115%;
                    }
                }
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