<template>
    <p class="very-big-text bolder secondary2-text text-center text-lg-start">
        <span class="typer">{{ string }}</span>
        <span class="cursor" :class="{ 'typing': status }">&nbsp;</span>
    </p>
</template>

<script>
export default {
    data() {
        return {
            string: '',
            status: false,
            words: ['Human', 'Web Developer', 'Creator', 'Innovator', 'Problem Solver'],
            typingSpeed: 150,
            erasingSpeed: 100,
            newTextDelay: 2000,
            wordIndex: 0,
            charIndex: 0
        }
    },
    methods: {
        typeText() {
            if (this.charIndex < this.words[this.wordIndex].length) {
                if (!this.status) {
                    this.status = true;
                }

                this.string += this.words[this.wordIndex].charAt(this.charIndex);
                this.charIndex++;
                setTimeout(this.typeText, this.typingSpeed);
            } else {
                this.status = false;
                setTimeout(this.eraseText, this.newTextDelay);
            }
        },
        eraseText() {
            if (this.charIndex > 0) {
                if (!this.status) {
                    this.status = true;
                }

                this.string = this.words[this.wordIndex].substring(0, this.charIndex - 1);
                this.charIndex--;
                setTimeout(this.eraseText, this.erasingSpeed);
            } else {
                this.status = false;
                this.wordIndex++;
                if (this.wordIndex >= this.words.length) {
                    this.wordIndex = 0;
                }
                setTimeout(this.typeText, this.newTextDelay);
            }
        }
    },
    created() {
        setTimeout(this.typeText, this.newTextDelay + 200);
    },
}
</script>

<style lang="scss" scoped>
@import '../../scss/partials/variables/colors.scss';

span {
    filter: drop-shadow(0px 10px 25px rgba(255, 255, 255, .3));
    -webkit-filter: drop-shadow(0px 10px 25px rgba(255, 255, 255, .3));
    cursor: default;
}

.cursor {
    display: inline-block;
    margin-left: 10px;
    background-color: $light;
    border-radius: 2px;
    animation: cursorBlink 1s infinite;

    &.typing {
        animation: none;
    }
}

@keyframes cursorBlink {
    49% {
        background-color: $light;
    }

    50% {
        background-color: transparent;
    }

    99% {
        background-color: transparent;
    }
}
</style>