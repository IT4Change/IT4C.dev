<template>
    <v-card>
        <v-card-title class="text-h3 mb-12">Regeln und Workflow</v-card-title>
        <v-card-text>
            <v-list>
                <v-list-item-group>
                    <v-list-item v-for="(data, index) in dataList" :key="index">
                        <v-list-item-content>
                            <v-list-item-title>
                                <div v-if="data.slice(0, 3) === '## '" class="text-h4">{{ data.slice(3) }}</div>
                                <div v-else>
                                    <v-list-item-avatar>
                                        <v-icon color="amber-lighten-3">mdi-hand-pointing-right</v-icon>
                                    </v-list-item-avatar>
                                    {{ data }}
                                </div>
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-card-text>
    </v-card>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'DataList',
    data() {
        return {
            selectedItem: null,
            dataList: [
                '## Regeln und Workflow:',
                'Alle Regeln sind zu befolgen, können aber im Team besprochen werden, um sie zu brechen.',
                'Kommunikation soll ehrlich, offen und respektvoll sein, um ein harmonisches Umfeld zu schaffen und aufrechtzuerhalten.',
                'Lösungsorientiertes und Themenorientiertes arbeiten und umsichtiges Handeln sind wichtig.',
                '## Anforderungen:',
                'Das Thema sollte so genau wie möglich beschrieben werden, mit Details und Priorisierung.',
                'Es muss ein Deckungsabgleich zwischen Open Source Software und Thema geben (Ja/Nein = Businessmodell).',
                'Spezielle Kundenanforderungen sind getrennt zum OS Projekt zu betrachten.',
                'Zeit- und Budgetmanagement sind wichtige Aspekte.',
                '## Planung:',
                'Fachliche Anforderungen/Konzeption (Vision, umfangreich und abschließend) sollten berücksichtigt werden.',
                'Technische Anforderungen/Konzeption für Client/Backend/Server sollten erstellt werden.',
                'Die Entwickler benötigen ein genaues technisches Bild, Definitionen und Rahmenbedingungen.',
                'Infrastrukturerweiterungen sollten in Absprache mit den Entwicklern aus den jeweiligen Bereichen erfolgen.',
                'Die Planungspower sollte auf das reduziert werden, was benötigt wird.',
                'EPICs für umfangreiche Anforderungen sollten in kleine Anforderungspakete aufgeteilt werden.',
                '## Sprintplanung:',
                '## Issues:',
                'Das höchste Maß an Freiheit sollte gewährt werden.',
                'Ein Issues sollte immer nur eine Aufgabe enthalten.',
                'Umfangreiche Aufgaben sollten als EPICs behandelt werden.',
                'Alle relevanten Daten, Skizzen, Screenshots und Links zum Konzept sollten enthalten sein.',
                'Alle Teammitglieder sind angehalten, das Issues zu lesen und zu verstehen.',
                'Der Entwickler sollte große Issues eigenständig in kleinere aufteilen, um die Regeln einzuhalten.',
                '## Entwicklung:',
                'Absprachen sind einzuhalten und Änderungen sollten immer besprochen werden.',
                'Ein Branch sollte immer nur eine Arbeit enthalten.',
                'Ein Branch sollte funktionsfähig, schlüssig und vollständig sein.',
                'Aufbauende Abhängigkeiten von Branches sollten vermieden werden.',
                'Ungenutzte Daten, Datenfelder, Plugins und Bibliotheken sollten nicht implementiert werden, auch wenn sie in Zukunft verwendet werden könnten.',
                'Namensmanagement ist wichtig, Namen, die in der Datenbank und API verwendet werden, sollten im Code gleich sein.',
                'So wenig wie möglich Ausnahmeregeln für Lint sollten verwendet werden.',
                'Inline-Styles im Frontend sollten vermieden werden und eigene Klassen sollten nur sparsam genutzt werden. Wenn möglich, sollte die UI verwendet werden.',
                '## Testing:',
                'Jeder geschriebene Code muss getestet werden.',
                'Die Tests sollten sinnvoll sein und Funktionstests beinhalten.',
                'Jeder ist angehalten, die besten Tests zu schreiben und sich mit JEST auseinanderzusetzen.',
                'Müll einsammeln im Wald ist erfreulich.',
                '## Review:',
                'Verstehe die Anforderungen und Aufgabe.',
                'Jeder, der etwas gebaut hat, hat dies nach bestem Wissen und Gewissen getan. Der Reviewer sollte dies respektieren und wertschätzen.',
                'Prüfe immer den Code lokal auf Lauffähigkeit (falls erforderlich).',
                'Abhängigkeiten zwischen Branches müssen kommuniziert werden.',
                'Reviewer dürfen am Code nicht arbeiten.',
                'Abgelehnte Vorschläge müssen begründet und argumentiert werden und nicht einfach abgelehnt werden.',
                '## Merging:',
                'Überholte Reviews können abgelehnt werden.',
                'Jeder merge seine(n) Pull Request(s) selbst. (Bei Zeitdruck gilt dies nicht.)',
                'Derjenige, der den Merge durchführt, ist für alles, was in den Code kommt, verantwortlich.',
                'Konflikte müssen von jedem selbst behoben werden.',
                '## Kernänderungen:',
                'Änderungen sollten dem Team ausführlich und rechtzeitig kommuniziert werden.',
            ],
        }
    },
})
</script>
