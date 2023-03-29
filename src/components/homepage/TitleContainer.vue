<template>
    <div>
        <TitleLine :data="'Welcome to my portfolio!'"/>
        <em><TitleLine :data="'I am a ...'"/></em>
        <AutoTyping/>
    </div>
</template>

<script>
import AutoTyping from './AutoTyping.vue';
import TitleLine from './TitleLine.vue';

export default {
    components: { TitleLine, AutoTyping }
}
</script>

<style lang="scss" scoped>
    
</style>