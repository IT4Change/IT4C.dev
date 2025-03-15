---
layout: BlankLayout
---

<section class="full-width-section h-screen relative">
  <!-- Desktop Hintergrundbild -->
  <img 
    src="/images/hero-bg-desktop.jpg" 
    alt="Softwareentwicklung für eine bessere Welt" 
    class="w-full h-screen object-cover hidden md:block"
  />

  <!-- Desktop-Verlauf: von links nach rechts -->
  <div class="absolute inset-0 bg-gradient-to-r from-[#22596c]/100 via-[#22596c]/80 to-transparent hidden md:block" style="width: 65%;"></div>

  <!-- Mobile Bild-Container (mit fester Höhe und Überlauf versteckt) -->
  <div class="w-full h-screen md:hidden relative overflow-hidden">
    <!-- Mobile Hintergrundbild mit object-cover und position:absolute -->
    <img
      src="/images/hero-bg-mobile.jpg"
      alt="Softwareentwicklung für eine bessere Welt"
      class="absolute top-0 left-0 w-full h-auto object-cover max-h-none"
      style="min-width: 100%;"
    />
  </div>

  <!-- Mobile-Verlauf: von unten nach oben, ragt in Bild hinein -->
  <div class="absolute left-0 right-0 bottom-0 md:hidden bg-gradient-to-t from-[#22596c]/100 via-[#22596c]/100 via-[#22596c]/90 to-transparent" 
       style="height: 70vh;">
  </div>

  <!-- Gemeinsamer Content-Bereich -->
  <div class="absolute inset-0 flex flex-col md:justify-start md:pt-36 justify-end pb-16">
    <div class="content-width mx-auto px-4 md:px-6">
      <!-- Für Desktop: Normal positioniert mit margin-top -->
      <!-- Für Mobile: Am unteren Rand fixiert ohne margin -->
      <div class="w-full md:w-3/5 lg:w-1/2 z-10 md:mt-0 relative">
        <div
          role="heading" 
          aria-level="1"
          class="text-3xl md:text-4xl lg:text-5xl mb-6 text-white font-montserrat leading-tight text-shadow"
        >
          Software­entwicklung für eine bessere Welt
        </div>
        <p 
          class="text-xl md:text-2xl text-white font-sourcesans mb-8 max-w-2xl text-shadow-sm"
        >
          Wir sind Softwareentwickler, die deine alternative Vision verstehen und umsetzen. Mit technischer Expertise und persönlicher Betreuung unterstützen wir Projekte, die Positives bewirken.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <a 
            href="#kontakt" 
            class="hero-button hero-button-primary px-6 py-3 bg-[#ececec] !text-black rounded-full font-medium text-center shadow-md no-underline relative overflow-hidden"
          >
            <span class="relative z-10">Projekt starten</span>
          </a>
          <a 
            href="#leistungen" 
            class="hero-button hero-button-secondary px-6 py-3 bg-black/20 !text-white rounded-full font-medium text-center border border-white shadow-md no-underline relative overflow-hidden"
          >
            <span class="relative z-10">Unsere Leistungen</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<ContentSection id="leistungen" title="Leistungen">
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

<ContentSection id="team" title="Team & Werte" backgroundColor="bg-gray-50">
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
      profileUrl="/people/maximilian-harz.html"
      image="/images/portrait/max.jpg"
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

<ContentSection id="referenzen" title="Referenzen">
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

<ContentSection id="prozess" title="Unser Prozess" backgroundColor="bg-gray-50">
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

<ContentSection id="kontakt" title="Kontakt">
  <ContactForm />
</ContentSection>


<style lang="scss" scoped>
  @import "tailwindcss";
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Source+Sans+3:wght@400;500;600&display=swap');

  .font-montserrat {
    font-family: 'Montserrat', sans-serif !important;
  }

  .font-sourcesans {
    font-family: 'Source Sans 3', sans-serif !important;
  }

  .text-shadow {
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    
    &-sm {
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    }
  }

  .hero {
    &-title {
      font-family: 'Montserrat', sans-serif !important;
      font-weight: 700 !important;
      margin: 0 0 1.5rem 0 !important;
      line-height: 1.1 !important;
    }

    &-button {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      
      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      }

      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 9999px;
        opacity: 0;
        transform: scale(0.5);
        transition: transform 0.5s ease, opacity 0.5s ease;
        z-index: 0;
      }

      &:hover::after {
        opacity: 1;
        transform: scale(1);
      }

      &-primary::after {
        background: radial-gradient(circle, rgba(253, 224, 71, 0.3) 0%, rgba(253, 224, 71) 70%, rgba(253, 224, 71) 100%);
      }

      &-secondary::after {
        background: radial-gradient(circle, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.2) 70%, rgba(0, 0, 0, 0) 100%);
      }
    }
  }

</style>