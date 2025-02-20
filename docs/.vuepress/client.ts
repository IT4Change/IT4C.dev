import { defineClientConfig } from 'vuepress/client'
import ServiceCard from './components/ServiceCard.vue'
import ProcessStep from './components/ProcessStep.vue'
import ContactForm from './components/ContactForm.vue'
import TeamMember from './components/TeamMember.vue'
import ProjectCard from './components/ProjectCard.vue'
import ContentSection from './components/ContentSection.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('ContactForm', ContactForm)
    app.component('ContentSection', ContentSection)
    app.component('ServiceCard', ServiceCard)
    app.component('ProcessStep', ProcessStep)
    app.component('ProjectCard', ProjectCard)
    app.component('TeamMember', TeamMember)
  },
})