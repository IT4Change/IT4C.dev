import { defineClientConfig } from 'vuepress/client'
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";
import BlankLayout from './layouts/BlankLayout.vue'
import ContactForm from './components/ContactForm.vue'
import ContentSection from './components/ContentSection.vue'
import Footer from './components/Footer.vue'
import ProcessStep from './components/ProcessStep.vue'
import ProjectCard from './components/ProjectCard.vue'
import ServiceCard from './components/ServiceCard.vue'
import TeamMember from './components/TeamMember.vue'
import CaptionedImage from './components/CaptionedImage.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('ContactForm', ContactForm)
    app.component('ContentSection', ContentSection)
    app.component('Footer', Footer)
    app.component('ProcessStep', ProcessStep)
    app.component('ProjectCard', ProjectCard)
    app.component('TeamMember', TeamMember)
    app.component('ServiceCard', ServiceCard)
    app.component('CaptionedImage', CaptionedImage)
  },
  setup() {
    setupTransparentNavbar({ type: "homepage" });
  },
  // You can override or add layouts here
  layouts: {
    // For example, here we change the default layout of vuepress-theme-hope to layouts/Layout.vue
    BlankLayout,
  }
})
