<template>
    <div class="animation-container">
        <div class="row h-100 justify-content-center align-items-center">
            <div class="col-8 col-md-6 col-lg-5 col-xl-4">
                <img src="logo.svg" class="w-100">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.animation-container {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    img {
        transform-style: preserve-3d;
        filter: drop-shadow(0px 10px 25px rgba(255, 255, 255, 0.5));
        -webkit-filter: drop-shadow(0px 10px 25px rgba(255, 255, 255, 0.5));
        animation: logoAnimation 5.5s forwards;
    }
}
@keyframes logoAnimation{
    0%{
        opacity: 1;
        transform: scale(.00000001) rotateY(-3600deg) rotateZ(-520deg);
    }
    30%{
        opacity: 1;
        transform: scale(1) rotateY(0deg) rotateZ(0deg) translateX(0) translateY(0);
    }
    95%{
        opacity: 1;
        transform: scale(.1) rotateY(-360deg) rotateZ(-360deg) translateX(0) translateY(-450vh);
    }
    100%{
        opacity: 1;
        transform: scale(.1) rotateY(-360deg) rotateZ(-360deg) translateX(0) translateY(-450vh);
    }
}
</style>