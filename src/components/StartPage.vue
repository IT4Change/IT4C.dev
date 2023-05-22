<template>
    <v-img height="400" src="/image/logo2.png" class="text-white" />
    <hr />
    <v-row justify="space-around">
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

export default defineComponent({
    components: {
        PeopleIndex,
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
