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
            <v-list class="mt-4">
                <v-list-group value="Gradido Wallet">
                    <template #activator="{ props }">
                        <v-list-item v-bind="props" title="Gradido Wallet"  prepend-avatar="/image/gdd-logo.png"  subtitle="Zeittauscheinheit"></v-list-item>
                    </template>

                    <v-list-item
                        v-for="([title, logo, to], i) in gradido"
                        :key="i"
                        :title="title"
                        :prepend-avatar="logo"
                        :value="title"
                        active-class="text-h5"
                        to="/readme"
                        @click="loadGitHubReadme(to)"
                       
                    ></v-list-item>
                </v-list-group>
            </v-list>
            <v-divider></v-divider>
            <v-list class="mt-4 mb-4">
                <v-list-group value="Ocelot">
                    <template #activator="{ props }">
                        <v-list-item v-bind="props" title="Ocelot"  prepend-avatar="/image/ocelot-logo.png"  subtitle="Social Network"></v-list-item>
                    </template>

                    <v-list-item
                        v-for="([title, logo, link], i) in ocelot"
                        :key="i"
                        :title="title"
                        :prepend-avatar="logo"
                        :value="title"
                        to="/readme"
                        @click="loadGitHubReadme(link)"
                    ></v-list-item>
                </v-list-group>
            </v-list>
            <v-divider></v-divider>
            <v-list class="mt-4 mb-4">
                <v-list-group value="Ocelot">
                    <template #activator="{ props }">
                        <v-list-item v-bind="props" title="Kleinanzeigen"  prepend-icon="mdi-account-convert"  subtitle="suche & biete"></v-list-item>
                    </template>

                    <v-list-item
                        v-for="([title, icon, link], i) in kleinanzeigenmarkt"
                        :key="i"
                        :title="title"
                        :prepend-icon="icon"
                        :value="title"
                        to="/readme"
                        @click="loadGitHubReadme(link)"
                    ></v-list-item>
                </v-list-group>
            </v-list>
            <template #append>
                <div class="pa-2">
                    <v-btn block prepend-icon="mdi-currency-eur" append-icon="mdi-bitcoin" to="/support">Unterstützen</v-btn>
                </div>
            </template>
        </v-navigation-drawer>
        <v-main class="my-5 mx-5">
            <router-view class="main" :gradido-r="gradidoR" :ocelot-r="ocelotR" :README_MD="README_MD"></router-view>
        </v-main>
    </v-app>
</template>
<script>
import axios from 'axios'
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            window,
            drawer: true,
            ocelotR: [],
            gradidoR: [],
            README_MD:'',
            items: [
                {
                    prependAvatar: '/image/logo.png',
                    title: 'Wellcome',
                    subtitle: 'by IT4C',
                    to: '/',
                },
            
                {
                    prependAvatar: '/image/logo.png',
                    title: 'Manifest',
                    subtitle: 'O Position',
                    to: '/manifesto',
                },
        
                {
                    prependAvatar: '/image/logo.png',
                    title: 'Regeln',
                    subtitle: '& Workflow',
                    to: '/rules',
                },
      
                { type: 'subheader', title: 'OS Projekte' },
             
                { type: 'divider', inset: true },
            ],
            gradido: [
                ['start', '/image/gdd-logo.png', 'https://raw.githubusercontent.com/gradido/gradido/master/README.md'],
                ['admin', '/image/gdd-logo.png', 'https://raw.githubusercontent.com/gradido/gradido/master/admin/README.md'],
                ['backend', '/image/gdd-logo.png', 'https://raw.githubusercontent.com/gradido/gradido/master/backend/README.md'],
                ['database', '/image/gdd-logo.png', 'https://raw.githubusercontent.com/gradido/gradido/master/database/README.md'],
                ['dht-node', '/image/gdd-logo.png', ''],
                ['docu', '/image/gdd-logo.png', 'https://raw.githubusercontent.com/gradido/gradido/master/docu/README.md'],
                ['e2e-tests', '/image/gdd-logo.png', 'https://raw.githubusercontent.com/gradido/gradido/master/e2e-tests/README.md'],
                ['federation', '/image/gdd-logo.png', ''],
                ['frontend', '/image/gdd-logo.png', 'https://raw.githubusercontent.com/gradido/gradido/master/frontend/README.md'],
                ['support', '/image/gdd-logo.png', 'https://raw.githubusercontent.com/gradido/gradido/master/support/README.md'],
                ['deployment', '/image/gdd-logo.png', 'https://raw.githubusercontent.com/gradido/gradido/master/deployment/bare_metal/setup.md'],
            ],
            ocelot: [
                ['start', '/image/ocelot-logo.png', 'https://raw.githubusercontent.com/Ocelot-Social-Community/Ocelot-Social/master/README.md'],
                ['backend', '/image/ocelot-logo.png', 'https://raw.githubusercontent.com/Ocelot-Social-Community/Ocelot-Social/master/backend/README.md'],
                ['cypress', '/image/ocelot-logo.png', 'https://raw.githubusercontent.com/Ocelot-Social-Community/Ocelot-Social/master/cypress/README.md'],
                ['deployment', '/image/ocelot-logo.png', 'https://raw.githubusercontent.com/Ocelot-Social-Community/Ocelot-Social/master/deployment/README.md'],
                ['neo4j', '/image/ocelot-logo.png', 'https://raw.githubusercontent.com/Ocelot-Social-Community/Ocelot-Social/master/neo4j/README.md'],
                ['webapp', '/image/ocelot-logo.png', 'https://raw.githubusercontent.com/Ocelot-Social-Community/Ocelot-Social/master/README.md'],
            ],
            kleinanzeigenmarkt: [
                ['start', 'mdi-account-convert', 'https://raw.githubusercontent.com/ZGD-Dresden/kleinanzeigenmarkt/master/README.md'],
            ],
         
        }
    },
    created() {
        this.ocelotRelases()
        this.gradidoRelases()
    },
    methods: {
        gradidoRelases() {
            axios
                .get('https://api.github.com/repos/gradido/gradido/releases?per_page=5')
                .then((response) => {
                    // console.log('gradidoRelases', response.data)
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
                    // console.log('ocelotRelases', response.data)
                    this.ocelotR = response.data
                })
                .catch((err) => {
                    console.error(err)
                })
            // .finally(() => console.error(`this.loading = false`))
        },
        loadGitHubReadme(link) {
            console.log('loadGitHubReadme', `'${link}'`)
            axios
                .get(link, {
                        // headers: { 'Access-Control-Allow-Origin': '*' },
                })
                .then((response) => {
                    console.log('loadGitHubReadme response: ', response.data)
                    this.README_MD = response.data

            //         const content = response.data.content;
            // const decodedContent = window.atob(content); // Base64 decoding
            // const readmeText = window.decodeURIComponent(decodedContent);
            // console.log('loadGitHubReadme response: ', readmeText);
            // this.README_MD = readmeText;
                })
                .catch((err) => {
                    console.error(err)
                    this.README_MD = err.message
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
