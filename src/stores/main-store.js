import { reactive } from 'vue';
import { dt } from './data/dt';
import { fn } from './functions/fn';
import { comp } from './computed/comp';
export const store = reactive({
    dt,
    fn,
    comp
});