<template>
  <div class="full-container banner" 
  :style="status ? color : ''"
  >
    <div class="container-fluid">
        <div class="row h-100 align-items-center justify-content-center">
            <div class="col-12 col-lg-5 col-xl-6">
                <Logo3D :active="status" @click="bannerChange()"/>
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
    components: { Logo3D, TitleContainer },
    data() {
        return {
            status: false,
            light: 33.33,
        }
    },
    methods: {
        bannerChange(){
            if(this.light < 100){
                this.status = true;
                this.light += .6;
                setTimeout(this.bannerChange, 1);
            }
        },
    },
    computed: {
        color(){
            let color = `background: linear-gradient(-215deg, #faebac ${this.light}%, #f97745 33.33%, #f97745 66.66%, #24474c 66.66%);`
            return color
        }
    },
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 992px) {
    .container-fluid{
        height: 100vh;
    }
}
</style>