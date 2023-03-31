import { reactive } from 'vue';
import {store} from '../main-store';

export const loading = reactive({
    initPage(){
        store.dt.bool.loading = true;
        store.dt.bool.homaPageAnimation = false;
        setTimeout(()=>{
            store.dt.bool.loading = false;
        }, 5000);
    },
    startHomeAnimation(){
        setTimeout(()=>{
            store.dt.bool.homaPageAnimation = true;
        }, 500);
    }
});