import { reactive } from 'vue';
import {store} from '../main-store';

export const loading = reactive({
    initPage(){
        store.dt.bool.loading = true;
        setTimeout(()=>{
            store.dt.bool.loading = false;
        }, 5000);
    }
});