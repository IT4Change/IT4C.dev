import { createWebHistory, createRouter } from 'vue-router'
import StartPage from '@/components/StartPage.vue'
import ManiFesto from '@/components/ManiFesto.vue'
import RulesPage from '@/components/RulesPage.vue'
import README from '@/components/README.vue'
import SupportPage from '@/components/SupportPage.vue'
import MedienPage from '@/components/MedienPage.vue'

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
        path: '/readme',
        component: README,
    },
    {
        path: '/support',
        name: 'SupportPage',
        component: SupportPage,
    },
    ,
    {
        path: '/medien',
        name: 'MedienPage',
        component: MedienPage,
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
