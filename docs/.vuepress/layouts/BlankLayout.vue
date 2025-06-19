<template>
  <div class="theme-container blank-layout">
    <Content />
    <VPFooter />
  </div>
</template>

<script>
export default {
  name: 'BlankLayout',
}
</script>

<style>
@layer theme, base, components, utilities;

@import 'tailwindcss/theme.css' layer(theme);
@import 'tailwindcss/preflight.css' layer(base);
@import 'tailwindcss/utilities.css' layer(utilities);

@custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *));

/* Conflicts with vuepress */
@layer base {
  .vp-sidebar {
    box-sizing: content-box;
  }
  .vp-nav-logo {
    display: inline;
  }
  .theme-hope-content p {
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  .theme-hope-content ul {
    list-style: unset;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  .theme-hope-content figure {
    margin: inherit;
    padding: inherit;
  }
}

.blank-layout {
  --content-width: 1160px;
}

.blank-layout h1,
.blank-layout h2,
.blank-layout h3,
.blank-layout h4,
.blank-layout h5,
.blank-layout h6 {
  font-family: var(--font-family-heading);
}

.blank-layout h1,
.blank-layout h2 {
  border-bottom: none;
  padding-bottom: 2rem;
  font-weight: bold;
}

.blank-layout .content-width {
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 0 2.5rem;

  @media (max-width: 768px) {
    padding: 0 1.75rem;
  }
  @media (max-width: 400px) {
    padding: 0 1rem;
  }
}

/* iOS Safari specific global fixes */
@supports (-webkit-touch-callout: none) {
  html {
    /* Fix for iOS Safari viewport height issues */
    height: -webkit-fill-available;
  }

  body {
    /* Fix for iOS Safari bounce scrolling */
    -webkit-overflow-scrolling: touch;
    /* Prevent zoom on input focus */
    -webkit-text-size-adjust: 100%;
    /* Fix for iOS Safari height issues */
    min-height: -webkit-fill-available;
  }

  /* Fix for iOS Safari input zoom */
  input, textarea, select {
    font-size: 16px !important;
    -webkit-appearance: none;
    border-radius: 0;
  }

  /* Fix for iOS Safari button styling */
  button, .hero-button {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    border-radius: 0;
  }
}

/* Additional responsive fixes for older iOS versions */
@media screen and (max-width: 768px) {
  /* Fix for older iOS Safari transform issues */
  .hero-section img {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  /* Prevent horizontal scrolling on older iOS */
  body {
    overflow-x: hidden;
  }
}
</style>
