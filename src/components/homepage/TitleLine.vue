<template>
    <p class="big-text bolder light-text text-center text-lg-start">
        <span v-for="letter in string"
        :class="(letter !== ' ') ? 'active' : ''">
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
    mounted() {
        console.log(this.string);
    },
}
</script>

<style lang="scss" scoped>
@import '../../scss/partials/variables/spacing.scss';
span {
    cursor: default;
    line-height: calc($big + .5rem);
    filter: drop-shadow(0px 10px 25px rgba(255, 255, 255, 0.3));
    -webkit-filter: drop-shadow(0px 10px 25px rgba(255, 255, 255, 0.3));
    transition: filter .3s, -webkit-filter .3s, font-size .3s;

    &.active:hover {
        filter: drop-shadow(0px 10px 25px rgba(255, 255, 255, 1));
        -webkit-filter: drop-shadow(0px 10px 25px rgba(255, 255, 255, 1));
        font-size: calc($big + .5rem);
    }
}
</style>