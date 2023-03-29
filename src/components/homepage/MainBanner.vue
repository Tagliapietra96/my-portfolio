<template>
  <div class="full-container banner">
    <div class="container-fluid">
        <div class="row h-100 align-items-center justify-content-center">
            <div class="col-12 col-lg-5 col-xl-6">
                <Logo3D/>
            </div>
            <div class="col-12 col-lg-7 col-xl-6">
                <TitleContainer/>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { store } from '../../stores/main-store';
import Logo3D from './Logo3D.vue';
import TitleContainer from './TitleContainer.vue';
export default {
    components: { Logo3D, TitleContainer }
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 992px) {
    .container-fluid{
        height: 100vh;
    }
}
</style>