<template>
    <header 
    :class="{'visible' : store.dt.bool.headerVisibility}">

    </header>
</template>

<script>
import {store} from '../../stores/main-store';
export default {
    data() {
        return {
            store
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '../../scss/partials/variables/colors.scss';
    header{
        position: fixed;
        top: 100vh;
        right: 0;
        left: 0;
        height: 100px;
        background-color: $dark;
        transition: top .5s;
        z-index: 5;
        filter: drop-shadow(0px 0px 15px rgba(255, 255, 255, 0.3));
        -webkit-filter: drop-shadow(0px 0px 15px rgba(255, 255, 255, 0.3));
        &.visible{
            top: 0;
        }
    }
</style>