import { reactive } from 'vue';
import { bool } from './bool';
import { arr } from './arr';
import { num } from './num';
import { obj } from './obj';
import { str } from './str';
export const dt = reactive({
    bool,
    arr,
    num,
    obj,
    str,
});