import { createWebHistory, createRouter } from 'vue-router'
import StartPage from '@/components/StartPage.vue'
import ManiFesto from '@/components/ManiFesto.vue'
import RulesPage from '@/components/RulesPage.vue'
import OcelotPage from '@/components/OcelotPage.vue'
import GradidoPage from '@/components/GradidoPage.vue'

const routes = [
    {
        path: '/',
        name: 'StartPage',
        component: StartPage,
    },
    {
        path: '/maniFesto',
        name: 'ManiFesto',
        component: ManiFesto,
    },
    {
        path: '/rules',
        name: 'RulesPage',
        component: RulesPage,
    },
    {
        path: '/ocelot',
        component: OcelotPage,
    },
    {
        path: '/gradido',
        component: GradidoPage,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach(() => {
    // console.log('router before')
})
router.afterEach(() => {})
export default router
