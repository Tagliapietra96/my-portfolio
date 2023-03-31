<template>
    <Transition name="fade" mode="out-in">
        
        <div class="page">
            <MainBanner/>
    
        </div>
    </Transition>
</template>

<script>
import MainBanner from '../components/homepage/MainBanner.vue';
import { store } from '../stores/main-store';
export default {
    components: { MainBanner },
    data() {
        return {
            store
        }
    },
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>