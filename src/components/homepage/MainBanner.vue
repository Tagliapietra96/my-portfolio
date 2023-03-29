<template>
  <div class="full-container banner">
    <div class="container-fluid">
        <div class="row h-100 align-items-center justify-content-center">
            <div class="col-12 col-lg-5 col-xl-6 d-flex justify-content-center">
                <img src="logo.svg" alt="my-personal-logo" >
            </div>
            <div class="col-12 col-lg-7 col-xl-6">
                <div>
                    <p class="big-text bolder light-text text-center text-lg-start">Welcome to my portfolio!</p>
                    <em><p class="big-text bolder light-text text-center text-lg-start">I am a ...</p></em>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { store } from '../../stores/main-store';
export default {

}
</script>

<style lang="scss" scoped>

@media screen and (min-width: 992px) {
    .container-fluid{
        height: 100vh;
    }
}

</style>