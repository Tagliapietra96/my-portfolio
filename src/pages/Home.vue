<template>
    <Transition name="fade" mode="out-in">
        <Loader v-if="store.dt.bool.loading"/>
        <div v-else class="page">
            <MainBanner/>
            <AppHeader/>
    
        </div>
    </Transition>
</template>

<script>
import AppHeader from '../components/general/AppHeader.vue';
import Loader from '../components/general/Loader.vue';
import MainBanner from '../components/homepage/MainBanner.vue';
import { store } from '../stores/main-store';
export default {
    components: { MainBanner, Loader, AppHeader },
    data() {
        return {
            store
        }
    },
    created() {
        store.fn.loading.initPage();
    },
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


</style>