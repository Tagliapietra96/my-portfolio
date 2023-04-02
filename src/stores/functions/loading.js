import { reactive } from 'vue';
import {store} from '../main-store';

export const loading = reactive({
    initPage(){
        store.dt.bool.loading = true;
        store.dt.bool.homaPageAnimation = false;
        store.dt.bool.headerVisibility = false;
        store.dt.bool.animatedLogoVisibility = true;
        setTimeout(()=>{
            store.dt.bool.loading = false;
        }, 5000);
    },
    startHomeAnimation(){
        setTimeout(()=>{
            store.dt.bool.homaPageAnimation = true;
        }, 500);
        setTimeout(()=>{
            store.dt.bool.headerVisibility = true;
            setTimeout(()=>{
                store.dt.bool.animatedLogoVisibility = false;
            }, 600);
        }, 5000);
    }
});