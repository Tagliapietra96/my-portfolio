<template>
    <div>
        <TitleLine :data="'Welcome to my portfolio!'"/>
        <em><TitleLine :data="'I am a ...'"/></em>
    </div>
</template>

<script>
import TitleLine from './TitleLine.vue';

export default {
    components: { TitleLine }
}
</script>

<style lang="scss" scoped>
    
</style>