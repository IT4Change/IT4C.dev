<template>
    <v-app>
        <v-app-bar title="IT Team for Change">
            <template #prepend>
                <v-btn icon="$menu" @click="drawer = !drawer"></v-btn>
            </template>

            <v-toolbar-title class="text-h6"> Bussiness Page </v-toolbar-title>

            <template #append>
                <v-btn icon="mdi-dots-vertical"></v-btn>
            </template>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" app theme="dark">
            <v-list :items="items" item-props lines="three">
                <template #title="{ title }">
                    <div class="text-h6">{{ title }}</div>
                </template>
                <template #subtitle="{ subtitle }">
                    <div>{{ subtitle }}</div>
                </template>
            </v-list>
            <v-list>
                <v-list-group value="Admin">
                    <template #activator="{ props }">
                        <v-list-item v-bind="props" title="ocelot"></v-list-item>
                    </template>

                    <v-list-item
                        v-for="([title, icon, to], i) in gradido"
                        :key="i"
                        :title="title"
                        :prepend-icon="icon"
                        :value="title"
                        :to="to"
                    ></v-list-item>
                </v-list-group>
            </v-list>
            <!-- <template #append>
                <div class="pa-2">
                    <v-img height="100" src="/image/logo.png" class="mt-8" />
                    <v-btn block prepend-icon="mdi-github"> IT4C Organisation </v-btn>
                </div>
            </template> -->
        </v-navigation-drawer>
        <v-main class="my-5 mx-5">
            <router-view class="main" :gradido-r="gradidoR" :ocelot-r="ocelotR"></router-view>
        </v-main>
    </v-app>
</template>
<script>
import axios from 'axios'
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            drawer: true,
            ocelotR: [],
            gradidoR: [],
            items: [
                { type: 'subheader', title: 'IT4C' },
                {
                    prependAvatar: '/image/logo.png',
                    title: 'Wellcome',
                    subtitle: 'IT4C Team',
                    to: '/',
                },
                { type: 'divider', inset: true },
                {
                    prependAvatar: '/image/logo.png',
                    title: 'Manifest',
                    subtitle: 'IT4C Team',
                    to: '/manifesto',
                },
                { type: 'divider', inset: true },
                {
                    prependAvatar: '/image/logo.png',
                    title: 'Regeln & Workflow',
                    subtitle: 'IT4C Team',
                    to: '/rules',
                },
                { type: 'divider', inset: true },
                { type: 'subheader', title: 'OS Projekte' },
                {
                    prependAvatar: '/image/ocelot-logo.png',
                    title: 'Ocelot',
                    subtitle: 'Social Network',
                    to: 'ocelot',
                },
                {
                    prependAvatar: '/image/gdd-logo.png',
                    title: 'GDD Wallet',
                    subtitle: 'Zeittauscheinheit',
                    to: 'gradido',
                },
                { type: 'divider', inset: true },
                { type: 'subheader', title: 'OS Projekte WIP' },
                {
                    prependAvatar: '/image/logo.png',
                    title: 'Kleinanzeigen',
                    subtitle: 'suchen & bieten',
                },
            ],
            gradido: [
                ['admin', 'mdi-plus-outline', '/gradido-admin'],
                ['backend', 'mdi-plus-outline'],
                ['database', 'mdi-plus-outline'],
                ['dht-node', 'mdi-plus-outline'],
                ['docu', 'mdi-plus-outline'],
                ['e2e-tests', 'mdi-plus-outline'],
                ['federation', 'mdi-plus-outline'],
                ['frontend', 'mdi-plus-outline'],
                ['mariadb', 'mdi-plus-outline'],
            ],
        }
    },
    created() {
        this.ocelotRelases()
        this.gradidoRelases()
        this.ocelotReadmes()
    },
    methods: {
        gradidoRelases() {
            axios
                .get('https://api.github.com/repos/gradido/gradido/releases?per_page=5')
                .then((response) => {
                    console.log('gradidoRelases', response.data)
                    this.gradidoR = response.data
                })
                .catch((err) => {
                    console.error(err)
                })
            // .finally(() => console.error(`this.loading = false`))
        },
        ocelotRelases() {
            axios
                .get('https://api.github.com/repos/Ocelot-Social-Community/Ocelot-Social/releases?per_page=5')
                .then((response) => {
                    console.log('ocelotRelases', response.data)
                    this.ocelotR = response.data
                })
                .catch((err) => {
                    console.error(err)
                })
            // .finally(() => console.error(`this.loading = false`))
        },
        ocelotReadmes() {
            axios
                .get('https://github.com/Ocelot-Social-Community/Ocelot-Social/blob/master/README.md', {
                    headers: { 'Access-Control-Allow-Origin': '*' },
                })
                .then((response) => {
                    console.log('ocelotReadmes: ', response.data)
                    // this.ocelot_r = response.data
                })
                .catch((err) => {
                    console.error(err)
                })
            // .finally(() => console.error(`this.loading = false`))
        },
    },
})
</script>
<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
