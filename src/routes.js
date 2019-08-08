import Home from './components/home/Home.vue';
import Filtro from './components/filter/Filter.vue'

export const routes = [
    {
        path: '/',
        component: Home,
        titulo: 'Home',
    },
    {
        path: '/filtro',
        component: Filtro,
        titulo: 'Filtro',
    },
];
