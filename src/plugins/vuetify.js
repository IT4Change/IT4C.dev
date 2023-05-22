import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'
// import * as labs from 'vuetify/labs/components'
import { VDataTable, VDataTableServer } from 'vuetify/labs/VDataTable'

import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

export default createVuetify({
    components: {
        ...components,
        // ...directives,
        // ...labs,
        VDataTable,
        VDataTableServer,
    },
    defaults: {
        VDataTable: {
            fixedHeader: true,
            noDataText: 'Results not found',
        },
    },
    icons: {
        defaultSet: 'mdi',
    },
    theme: {
        defaultTheme: 'dark',
    },
})
