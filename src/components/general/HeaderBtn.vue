<template>
    <div class="hamburger" :class="{ 'open': store.dt.bool.hamburegerOpen }"
        @click="store.dt.bool.hamburegerOpen = !store.dt.bool.hamburegerOpen">
        <span></span>
        <span></span>
        <span></span>
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
}
</script>

<style lang="scss" scoped>
@import '../../scss/partials/variables/variables.scss';

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

@media (max-width:900px) {
            .hamburger {
                display: block !important;
            }
}
</style>