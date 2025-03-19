<template>
  <div class="theme-container blank-layout">
    <Content />
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'BlankLayout'
}
</script>

<style>
@layer theme, base, components, utilities;

@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/preflight.css" layer(base);
@import "tailwindcss/utilities.css" layer(utilities);

/* Conflicts with vuepress */
@layer base {
  .vp-sidebar {
    box-sizing: content-box;
  }
  .vp-nav-logo {
    display: inline;
  }
}

.blank-layout {
  --content-width: 1160px;
}

.blank-layout h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-family-heading);
  }

.blank-layout h1, h2 {
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
</style>