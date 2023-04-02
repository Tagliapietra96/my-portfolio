<template>
    <header :class="{ 'visible': store.dt.bool.headerVisibility }">
        <div class="link-div">
            <router-link to="/">ABOT ME</router-link>
            <router-link to="/">PROJECTS</router-link>
        </div>

        <div class="link-div">
            <img src="logo.svg" alt="" class="box-3d">
        </div>

        <div class="link-div">
            <router-link to="/">CONTACTS</router-link>
            <router-link to="/">GAMES</router-link>
        </div>
    </header>
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
        VanillaTilt.init(document.querySelector(".box-3d"), {
            max: 40,
            speed: 400,
            reverse: true,
            scale: 1.1,
        });
    },
}
</script>

<style lang="scss" scoped>
@import '../../scss/partials/variables/colors.scss';

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

            *:not(img) {
                color: $light;
                text-decoration: none;
                font-weight: bold;
                padding: 1.1rem;
            }

            img {
                width: 45px;
                transform-style: preserve-3d;
                filter: drop-shadow(0px 5px 5px rgba(255, 255, 255, .5));
                -webkit-filter: drop-shadow(0px 5px 5px rgba(255, 255, 255, .5));
            }
        }
    }

}
</style>