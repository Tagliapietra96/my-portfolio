<template>
    <div class="loader-container">
        <div class="canvas">
            <div class="triangle left rotate1" id="p1"></div>
            <div class="triangle right" id="p2"></div>
            <div class="triangle left" id="p3"></div>
            <div class="triangle right" id="p4"></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../../scss/partials/variables/colors.scss';

.loader-container{
    background-color: $dark;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999999999999;
}
.canvas {
  position:absolute;
  top:120px;
  left:30vw;
  animation: move-back 4s linear 0s infinite;
}
.triangle {
  box-sizing:border-box;
  position:relative;
}
.triangle.left {
  width: 30px;
  height: 60px;
  border-right: solid 30px $light;
  border-bottom: solid 30px transparent;
  border-top: solid 30px transparent;
}
.triangle.right {
  width: 30px;
  height: 60px;
  border-left: solid 30px $light;
  border-bottom: solid 30px transparent;
  border-top: solid 30px transparent;
}

#p2 {
  top:-30px;
  animation: rotate-left-1 4s ease-in-out 0s infinite normal forwards running;
}
#p3 {
  top:-60px;
  animation: rotate-right-2 4s ease-in-out 0s infinite normal forwards running;
}
#p4 {
  top:-90px;
  animation: rotate-left-2 4s ease-in-out 0s infinite normal forwards running;
}

#p1 {
  animation: rotate-right-1 4s ease-in-out 0s infinite normal forwards running;
}

@keyframes rotate-right-1 {
  0% {
    transform:rotate(0);
    border-right: solid 30px $light;
  }
  11%,13% {
    transform-origin:30px 60px;
    transform:rotate(180deg);
    border-right: solid 30px $primary;
  }
  25%,100% {
    transform-origin:90px top;
    transform:rotate(360deg) translatey(120px);
    border-right: solid 30px $light;
  }
}

@keyframes rotate-right-2 {
  0%,50%{
    transform:rotate(0);
    border-right: solid 30px $light;
  }
  61%,63%{
    transform-origin:30px 60px;
    transform:rotate(180deg);
    border-right: solid 30px $primary;
  }
  75%,100% {
    transform-origin:90px top;
    transform:rotate(360deg) translatey(120px);
    border-right: solid 30px $light;
  }
}

@keyframes rotate-left-1 {
  0%,25% {
    transform:rotate(0) translatey(0);
    border-left: solid 30px $light;
  }
  36%,38% {
    transform-origin:0px 60px;
    transform:rotate(-180deg) translatey(0);
    border-left: solid 30px $primary;
  }
  50%,100% {
    transform-origin:-60px 120px;
    transform:rotate(-360deg) translatey(120px);
    border-left: solid 30px $light;
  }
}
@keyframes rotate-left-2 {
  0%,75% {
    transform:rotate(0) translatey(0);
    border-left: solid 30px $light;
  }
  86%,88% {
    transform-origin:0px 60px;
    transform:rotate(-180deg) translatey(0);
    border-left: solid 30px $primary;
  }
  100% {
    transform-origin:-60px 120px;
    transform:rotate(-360deg) translatey(120px);
    border-left: solid 30px $light;
  }
}

@keyframes move-back {
  0%{
    top:120px;
  }
  100%{
    top:0px;
  }
}

</style>