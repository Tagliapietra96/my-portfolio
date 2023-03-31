<template>
    <div class="full-container banner" 
    :style="status ? color : ''" 
    :class="{ 'active': status }">
        <AnimatedLogo v-if="store.dt.bool.homaPageAnimation"/>
        <div v-else class="container-fluid">
            <div class="row h-100 align-items-center justify-content-center">
                <div class="col-12 col-lg-5 col-xl-6">
                    <Logo3D :active="status" @click="onLogoClick()" />
                </div>
                <div class="col-12 col-lg-7 col-xl-6">
                    <Transition name="slide-fade">
                        <TitleContainer v-if="!status" />
                    </Transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../../stores/main-store';
import AnimatedLogo from './AnimatedLogo.vue';
import Logo3D from './Logo3D.vue';
import TitleContainer from './TitleContainer.vue';
export default {
    components: { Logo3D, TitleContainer, AnimatedLogo },
    data() {
        return {
            status: false,
            light: 33.33,
            store
        }
    },
    methods: {
        bannerChange() {
            if (this.light < 100) {
                this.status = true;
                this.light += .6;
                setTimeout(this.bannerChange, 1);
            }
        },
        onLogoClick(){
            store.fn.loading.startHomeAnimation();
            this.bannerChange();
        }
    },
    computed: {
        color() {
            let color = `background: linear-gradient(-215deg, #faebac ${this.light}%, #f97745 33.33%, #f97745 66.66%, #24474c 66.66%);`
            return color
        }
    },
}
</script>

<style lang="scss" scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all .4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px), scale(.5);
    opacity: 0;
}

.full-container {
    transition: height .5s 5s, min-height .5s 5s, max-height .5s 5s;

    &.active {
        min-height: 0 !important;
        max-height: 0 !important;
        height: 0 !important;
    }
}

@media screen and (min-width: 992px) {
    .full-container {
        .container-fluid {
            height: 100vh;
            transition: height .5s 5s, min-height .5s 5s, max-height .5s 5s;
        }

        &.active {
            .container-fluid {
                height: 0;
            }
        }
    }



}
</style>