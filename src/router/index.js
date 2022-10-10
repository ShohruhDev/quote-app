import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import HomeQuoteAdd from '@/components/HomeQuoteAdd.vue';
import UpdateQuote from '@/components/UpdateQuote.vue';

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/update:id',
        name: 'update',
        component: UpdateQuote,
    },
    {
        path: '/quoteadd',
        name: 'homeQuoteAdd',
        component: HomeQuoteAdd,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;