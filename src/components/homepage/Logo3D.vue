<template>
    <div class=" w-100 d-flex justify-content-center">
        <img src="logo.svg" alt="my-personal-logo" class="box-3d">
    </div>
</template>

<script>
import VanillaTilt from 'vanilla-tilt';
export default {
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
.box-3d {
    transform-style: preserve-3d;
    filter: drop-shadow(0px 10px 25px rgba(255, 255, 255, 0.5));
    width: 170px;
    padding-top: 100px;
    margin-bottom: 100px;
    transition: filter .7s ease-out;
    &:hover{
        filter: drop-shadow(0px 10px 25px rgba(255, 255, 255, 0.9)); 
    }
}

@media screen and (min-width: 300px) {
    .box-3d {
        width: 270px;
    }
}
@media screen and (min-width: 540px) {
    .box-3d {
        width: 400px;
        padding-top: 80px;
        margin-bottom: 50px;
    }
}
@media screen and (min-width: 850px) {
    .box-3d {
        padding-top: 50px;
        margin-bottom: 30px;
    }
}
@media screen and (min-width: 992px) {
    .box-3d {
        width: 600px;
        padding-top: 0;
        margin-bottom: 0;
    }
}
@media screen and (min-width: 1400px) {
    .box-3d {
        width: 650px;
    }
}
</style>