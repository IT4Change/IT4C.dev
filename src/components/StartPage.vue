<template>
    <v-img height="400" src="/image/logo2.png" class="text-white" />

    <div>Willkommen bei unserem freien Entwicklerteam! Wir betreuen zwei große Open-Source-Projekte und arbeiten auch 
    an anderen freien Projekten mit. Darüber hinaus entwickeln wir selbst Open-Source-Tools und Codesnippets. 
    Hier sind die Kurzübersichten der beiden Projekte, einschließlich ihres technischen Umfangs:</div>

    <div class="mt-5 text-h5">Projekt 1: Ocelot-Social</div>

    <div>Ocelot-Social ist ein umfangreiches Open-Source-Projekt, das sich auf die Entwicklung einer sozialen Community-Plattform 
    konzentriert. Mit diesem Projekt wollen wir eine Plattform schaffen, die es Benutzern ermöglicht, miteinander zu interagieren, 
    Inhalte zu teilen und gemeinsame Interessen zu entdecken. Der technische Umfang von Ocelot-Social umfasst die Verwendung 
    moderner Webtechnologien wie HTML, CSS und JavaScript für die Frontend-Entwicklung. Das Backend wird mithilfe von Frameworks wie 
    Ruby on Rails entwickelt. Zusätzlich integrieren wir Funktionen wie Benutzerverwaltung, Beitragsverwaltung, Benachrichtigungen und 
    vieles mehr, um eine reibungslose und ansprechende Benutzererfahrung zu gewährleisten.</div>

    <div class="mt-5 text-h5">Projekt 2: Gradido</div>

    <div>Gradido ist ein weiteres bedeutendes Open-Source-Projekt, an dem wir arbeiten. Es handelt sich um ein innovatives System zur Schaffung 
    einer nachhaltigen und gerechten Wirtschaft. Das Ziel von Gradido ist es, eine Alternative zu herkömmlichen Geldsystemen zu bieten, die 
    auf dem Prinzip des exponentiellen Wachstums beruhen. Der technische Umfang von Gradido umfasst die Implementierung von Blockchain-Technologie, 
    um eine sichere und transparente Transaktionsverarbeitung zu gewährleisten. Wir verwenden Programmiersprachen wie Java und Solidity, 
    um Smart Contracts zu entwickeln und die Integrität des Systems sicherzustellen. Zusätzlich arbeiten wir an der Entwicklung von Wallets und anderen 
    Funktionen, um eine benutzerfreundliche Plattform für den Gradido-Austausch zu schaffen.</div>

    <div>Wir sind stolz darauf, Teil dieser spannenden Projekte zu sein und freuen uns darauf, unsere Expertise und Leidenschaft für Open Source weiterhin einzusetzen.</div>

    <hr class="mt-5" />

    <v-row justify="space-around" class="mt-5">
        <v-col cols="12" md="6">
            <v-card width="auto">
                <v-img height="200" src="/image/ocelot-logo.png" cover class="text-white"> </v-img>

                <v-card-text>
                    <div class="text-h4 font-weight-bold ms-1 mb-2">
                        Ocelot
                        <v-chip prepend-icon="mdi-github" class="ma-2" color="orange" text-color="white">
                            GitHub - Ocelot Community
                        </v-chip>
                    </div>

                    <v-timeline density="compact" align="start">
                        <v-timeline-item v-for="item in ocelotR" :key="item.id" :dot-color="orange" size="x-small">
                            <div class="mb-4">
                                <a :href="item.html_url" target="_blank">{{ item.tag_name }}</a>

                                <v-expansion-panels>
                                    <v-expansion-panel :title="item.created_at">
                                        <v-expansion-panel-text>
                                            <ChangeLog>{{ item.body }}</ChangeLog>
                                        </v-expansion-panel-text>
                                    </v-expansion-panel>
                                </v-expansion-panels>
                            </div>
                        </v-timeline-item>
                    </v-timeline>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" md="6">
            <v-card width="auto">
                <v-img height="200" src="/image/gdd-logo.png" cover class="text-white"> </v-img>

                <v-card-text>
                    <div class="text-h4 font-weight-bold ms-1 mb-2">
                        GDD Wallet
                        <v-chip prepend-icon="mdi-github" class="ma-2" color="orange" text-color="white">
                            GitHub - Gradido Wallet
                        </v-chip>
                    </div>

                    <v-timeline density="compact" align="start">
                        <v-timeline-item v-for="item in gradidoR" :key="item.id" :dot-color="orange" size="x-small">
                            <div class="mb-4">
                                <a :href="item.html_url" target="_blank">{{ item.tag_name }}</a>

                                <v-expansion-panels>
                                    <v-expansion-panel :title="item.created_at">
                                        <v-expansion-panel-text>
                                            <ChangeLog>{{ item.body }}</ChangeLog>
                                        </v-expansion-panel-text>
                                    </v-expansion-panel>
                                </v-expansion-panels>
                            </div>
                        </v-timeline-item>
                    </v-timeline>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
    <hr />
    <people-index></people-index>
</template>
<script>
import { defineComponent } from 'vue'
import PeopleIndex from '@/components/people/PeopleIndex.vue'
import MarkdownIt from 'markdown-it'

export default defineComponent({
    components: {
        PeopleIndex,
    },
    data() {
        return {
            md: new MarkdownIt()
        }
    },
    props: {
        ocelotR: {
            type: Array,
        },
        gradidoR: {
            type: Array,
        },
    },
})
</script>
<style scoped>
.read-the-docs {
    color: #888;
}
.textAligneRight {
    text-align: -webkit-right;
}
</style>
