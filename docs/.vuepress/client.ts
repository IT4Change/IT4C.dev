import { defineClientConfig } from 'vuepress/client'
import ServiceCard from './components/ServiceCard.vue'
import ProcessStep from './components/ProcessStep.vue'
import ContactForm from './components/ContactForm.vue'
import TeamMember from './components/TeamMember.vue'
import ProjectCard from './components/ProjectCard.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('ServiceCard', ServiceCard)
    app.component('ProcessStep', ProcessStep)
    app.component('ContactForm', ContactForm)
    app.component('TeamMember', TeamMember)
    app.component('ProjectCard', ProjectCard)
  },
})