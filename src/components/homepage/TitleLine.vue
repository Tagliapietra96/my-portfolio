<template>
    <p class="big-text bolder light-text text-center text-lg-start">
        <span v-for="letter in string"
        :class="{'active' : (letter !== ' ')}">
            {{ letter }}
        </span>
    </p>
</template>

<script>
export default {
    props: {
        data: String
    },
    computed: {
        string() {
            return this.data.split('');
        }
    },
}
</script>

<style lang="scss" scoped>
span {
    cursor: default;
    filter: drop-shadow(0px 10px 25px rgba(255, 255, 255, 0.3));
    -webkit-filter: drop-shadow(0px 10px 25px rgba(255, 255, 255, 0.3));
    transition: filter .3s, -webkit-filter .3s;

    &.active:hover {
        filter: drop-shadow(0px 10px 25px rgba(255, 255, 255, 1));
        -webkit-filter: drop-shadow(0px 10px 25px rgba(255, 255, 255, 1));
    }
}
</style>