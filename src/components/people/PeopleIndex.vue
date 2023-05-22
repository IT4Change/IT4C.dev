<template>
    <h3>Freies IT4C Team</h3>
    <v-sheet class="d-flex align-content-center flex-wrap bg-black justify-center">
        <v-sheet
            v-for="member in members"
            :key="member.name"
            class="ma-2 pa-2"
            min-height="200"
            width="31%"
            min-width="300px"
            @click="showMember(member.to)"
        >
            <div>
                <v-img :height="200" :src="`/image/${member.img}.png`" />
                <div class="text-break">{{ member.bi }}</div>
            </div>
        </v-sheet>
    </v-sheet>

    <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition">
        <v-card>
            <v-toolbar dark color="primary">
                <v-btn icon dark @click="dialog = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>IT4C</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn variant="text" @click="dialog = false"> Close </v-btn>
                </v-toolbar-items>
            </v-toolbar>
            <v-container>
                <Ulf v-if="selected === members[0].to" />
                <Moriz v-if="selected === members[1].to" />
                <Hannes v-if="selected === members[2].to" />
                <Wolfgang v-if="selected === members[3].to" />
                <Mathias v-if="selected === members[4].to" />
                <Maeckes v-if="selected === members[5].to" />
                <Alex v-if="selected === members[6].to" />
            </v-container>
        </v-card>
    </v-dialog>
</template>
<script>
import Ulf from '@/components/people/ulf-gebhardt.md'
import Moriz from '@/components/people/moriz-wahl.md'
import Wolfgang from '@/components/people/wolfgang-huss.md'
import Mathias from '@/components/people/mathias-lenz.md'
import Maeckes from '@/components/people/maeckes.md'
import Hannes from '@/components/people/hannes-heine.md'
import Alex from '@/components/people/alexander-friedland.md'
import { defineComponent } from 'vue'

export default defineComponent({
    components: {
        Ulf,
        Moriz,
        Hannes,
        Wolfgang,
        Mathias,
        Maeckes,
        Alex,
    },
    data() {
        return {
            dialog: false,
            selected: '',
            members: [
                {
                    id: 0,
                    name: 'Ulf Gebhardt',
                    bi: '010101010110110001100110',
                    img: 'ulf-gebhardt',
                    to: '/ulf-gebhardt',
                },
                {
                    id: 1,
                    name: 'Moriz Wahl',
                    bi: '0100110101101111011100100110100101111010',
                    img: 'moriz-wahl',
                    to: '/moriz-wahl',
                },
                {
                    id: 2,
                    name: 'Hannes Heine',
                    bi: '010010000110000101101110011011100110010101110011',
                    img: 'hannes-heine',
                    to: '/hannes-heine',
                },
                {
                    id: 3,
                    name: 'Wolfgang Huss',
                    bi: '0101011101101111011011000110011001100111011000010110111001100111',
                    img: 'wolfgang-huss',
                    to: '/wolfgang-huss',
                },
                {
                    id: 4,
                    name: 'Mathias Lenz',
                    bi: '01001101011000010111010001101000011010010110000101110011',
                    img: 'mathias-lenz',
                    to: '/mathias-lenz',
                },
                {
                    id: 5,
                    name: 'Maeckes',
                    bi: '01001101011000010110010101100011011010110110010101110011',
                    img: 'logo',
                    to: '/maeckes',
                },
                {
                    id: 6,
                    name: 'Alexander Friedland',
                    bi: '010000010110110001100101011110000110000101101110011001000110010101110010',
                    img: 'alexander-friedland',
                    to: '/alexander-friedland',
                },
            ],
        }
    },
    methods: {
        showMember(to) {
            console.log('showMember', to)
            this.selected = to
            if (!this.dialog) {
                this.dialog = true
            }
        },
    },
})
</script>
