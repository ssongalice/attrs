import Main from './component/main.vue';
import AllList from './component/allList.vue';

export const routes = [
        {
            path: '/', component: Main, props: true
        },
        {
            path: '/all', component: AllList, props: true
        },
        {
            path: '*', redirect: '/'
        }
];
