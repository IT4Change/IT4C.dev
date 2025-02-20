---
containerClass: home
home: true
icon: home
title: IT4Change
bgImage: https://theme-hope-assets.vuejs.press/bg/6-light.svg
bgImageDark: https://theme-hope-assets.vuejs.press/bg/6-dark.svg
bgImageStyle:
  background-attachment: fixed
heroText: Software­entwicklung für eine bessere Welt
tagline: Wir sind Softwareentwickler, die deine alternative Vision verstehen und umsetzen. Mit technischer Expertise und persönlicher Betreuung unterstützen wir Projekte, die Positives bewirken.
actions:
    - text: "Projekt starten"
      link: "#kontakt"
      type: "primary"
      gradient: true
    - text: "Unsere Leistungen"
      link: "#leistungen"
      type: "default"

copyright: false
footer: CC BY IT4C.dev & Authors
---

<ContentSection title="Leistungen">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
    <ServiceCard
      title="Webentwicklung"
      :items="['Frontend', 'Responsive Design', 'Barrierefreiheit', 'Backend']"
    />
    <ServiceCard
      title="Hosting"
      :items="['Wordpress', 'Ocelot.social', 'Zugeschnittene Lösungen', 'Nachhaltige Serverinfrastrukturen']"
    />
    <ServiceCard
      title="Mobile Anwendungen"
      :items="['Android', 'iOS', 'PWA']"
    />
    <ServiceCard
      title="Beratung & Betreuung"
      :items="['Systemarchitektur', 'DevOps & Prozessbegleitung', 'Monitoring & Security', 'Technische Konzeption', 'Agiles Projektmanagement', 'Nachhaltigkeitsanalyse']"
    />
    <ServiceCard
      title="Software-Entwicklung"
      :items="['API-Entwicklung', 'Datenbank-Design', 'Performance-Optimierung', 'Deployment-Automatisierung', 'Code-Qualität & Testing']"
    />
  </div>
</ContentSection>

<ContentSection title="Team & Werte" backgroundColor="bg-gray-50">
  <p>Wir glauben an die Kraft der Technologie für positiven Wandel. Unser diverses Team verbindet technische Expertise mit nachhaltigem Denken und sozialer Verantwortung.</p>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
    <TeamMember
      name="Hannes"
      role="Backend"
      profileUrl="/people/hannes-heine.html"
      image="/images/portrait/hannes-heine.jpg"
    />
    <TeamMember
      name="Mathias"
      role="Testing"
      profileUrl="/people/hannes-heine.html"
      image="/images/portrait/ml-portrait.jpg"
    />
    <TeamMember
      name="Max"
      role="Frontend"
      profileUrl="/people/moriz-wahl.html"
      image="/images/portrait/moriz-wahl.jpg"
    />    
    <TeamMember
      name="Moriz"
      role="Backend"
      profileUrl="/people/moriz-wahl.html"
      image="/images/portrait/moriz-wahl.jpg"
    /> 
    <TeamMember
      name="Sebastian"
      role="Frontend"
      profileUrl="/people/sebastian-stein.html"
      image="/images/portrait/moriz-wahl.jpg"
    />
    <TeamMember
      name="Ulf"
      role="Backend, Hosting"
      profileUrl="/people/ulf-gebhardt.html"
      image="/images/portrait/ulf-gebhardt.jpg"
    />
    <TeamMember
      name="Wolfgang"
      role="Backend"
      profileUrl="/people/wolfgang-huss.html"
      image="/images/portrait/Wolfgang_Huss.jpeg"
    />
  </div>
</ContentSection>

<ContentSection title="Referenzen">
  <div class="grid md:grid-cols-2 gap-8">
    <ProjectCard
      title="Nachhaltigkeits-Portal"
      description="Vernetzungsplattform für lokale Initiativen mit 50% Energieeinsparung durch optimierte Architektur."
      image="/projects/sustainability.jpg"
      :tags="['Webentwicklung', 'API', 'Datenbank']"
    />
    <ProjectCard
      title="Sharing Economy App"
      description="Mobile Anwendung für ressourcenschonendes Teilen mit 10.000+ aktiven Nutzern."
      image="/projects/sharing.jpg"
      :tags="['Mobile App', 'Backend', 'DevOps']"
    />
  </div>
</ContentSection>

<ContentSection title="Unser Prozess" backgroundColor="bg-gray-50">
  <ProcessStep
    number="1"
    title="Kennenlernen & Vision"
    description="Persönliches Gespräch und detaillierte Bedarfsanalyse"
  />
  <ProcessStep
    number="2"
    title="Agile Entwicklung"
    description="Technische Konzeption und iterative Umsetzung mit kontinuierlichem Feedback und automatisierten Tests"
  />
  <ProcessStep
    number="3"
    title="Launch"
    description="Deployment und Übergabe mit ausführlicher Dokumentation"
  />
  <ProcessStep
    number="4"
    title="Support"
    description="Langfristige Betreuung und Weiterentwicklung"
  />
</ContentSection>

<ContentSection title="Kontakt">
  <ContactForm />
</ContentSection>

<style>
  @import "tailwindcss";
</style>
