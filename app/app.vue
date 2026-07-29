<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'de' },
  title: 'Geld Sparen mit dem Doppio Trick',
  meta: [
    {
      name: 'description',
      content:
        'Mit dem Doppio Trick sparst du bis zu 700 CHF pro Jahr – ein Doppio statt zwei Espressos.',
    },
    { name: 'robots', content: 'noindex, nofollow' },
    { name: 'googlebot', content: 'noindex, nofollow' },
  ],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap',
    },
  ],
})
</script>

<template>
  <main>
    <section class="hero">
      <div class="hero__inner">
        <div class="hero__content">
          <h1 class="hero__title">
            Geld Sparen mit dem
            <span class="hero__title-accent">Doppio&nbsp;Trick</span>
          </h1>
          <p class="hero__subtitle">
            Mit dem Doppio Trick kannst du bis zu
            <span class="hero__highlight">700&nbsp;CHF pro Jahr</span>
            sparen.
          </p>
          <p class="hero__note">
            * bei 3 Doppios pro Woche im Vergleich zu 2 Espressos
          </p>

          <a class="hero__cta" href="#details">
            Erfahre wie
            <span class="hero__cta-arrow" aria-hidden="true">↓</span>
          </a>
        </div>

        <figure class="hero__media">
          <img
            src="/doppio.jpg"
            alt="Ein frischer Doppio Espresso in einer petrolfarbenen Tasse auf hellem Hintergrund"
            width="2988"
            height="3735"
          />
        </figure>
      </div>
    </section>

    <section id="details" class="details">
      <div class="details__inner">
        <p class="details__lead">
          Ein Doppio kostet oftmals nur ein bisschen mehr wie ein Espresso,
          beinhaltet aber die <strong>doppelte Menge</strong>.
        </p>
        <p class="details__sub">An diesen Orten kannst du sparen:</p>

        <div class="table-wrap">
          <table class="price-table">
            <thead>
              <tr>
                <th scope="col">Ort</th>
                <th scope="col" class="num">Preis Espresso</th>
                <th scope="col" class="num">Preis Doppio</th>
                <th scope="col" class="num">gespart</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">SBB Restaurant</th>
                <td class="num">5.20 CHF</td>
                <td class="num">5.90 CHF</td>
                <td class="num"><span class="saving">+ 4.50 CHF</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
:root {
  --bg-top: #eef0f0;
  --bg-mid: #eaebeb;
  --bg-bottom: #e6e6e5;
  --teal: #2c4f5c;
  --teal-dark: #21414c;
  --amber: #d89b55;
  --ink: #23292b;
  --ink-soft: #4d585c;
  --ink-faint: #8a9296;
  --font-display: 'Fraunces', ui-serif, Georgia, 'Times New Roman', serif;
  --font-body: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

html,
body {
  margin: 0;
  padding: 0;
}

body {
  background: var(--bg-mid);
  color: var(--ink);
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

.hero {
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  align-items: center;
  background:
    radial-gradient(120% 90% at 78% 42%, rgba(255, 255, 255, 0.55) 0%, transparent 55%),
    linear-gradient(178deg, var(--bg-top) 0%, var(--bg-mid) 52%, var(--bg-bottom) 100%);
}

.hero__inner {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: center;
  gap: clamp(2rem, 5vw, 5rem);
}

/* ---------- Text column ---------- */
.hero__content {
  max-width: 34rem;
}

.hero__title {
  margin: 0;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(2.6rem, 6vw, 4.4rem);
  line-height: 1.04;
  letter-spacing: -0.015em;
  color: var(--ink);
}

.hero__title-accent {
  display: block;
  color: var(--teal);
}

.hero__subtitle {
  margin: 1.6rem 0 0;
  font-size: clamp(1.15rem, 1.6vw, 1.5rem);
  line-height: 1.5;
  color: var(--ink-soft);
}

.hero__highlight {
  font-weight: 600;
  color: var(--teal-dark);
  background: linear-gradient(transparent 60%, rgba(216, 155, 85, 0.42) 0);
  padding: 0 0.08em;
  white-space: nowrap;
}

.hero__note {
  margin: 1.5rem 0 0;
  font-size: 0.9rem;
  font-style: italic;
  color: var(--ink-faint);
}

.hero__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: 2.25rem;
  padding: 0.95rem 1.7rem;
  border-radius: 999px;
  background: var(--teal);
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 10px 24px -12px rgba(33, 65, 76, 0.7);
  transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
}

.hero__cta:hover {
  background: var(--teal-dark);
  transform: translateY(-2px);
  box-shadow: 0 16px 30px -12px rgba(33, 65, 76, 0.75);
}

.hero__cta-arrow {
  display: inline-block;
  transition: transform 0.25s ease;
}

.hero__cta:hover .hero__cta-arrow {
  transform: translateY(3px);
}

/* ---------- Details / table section ---------- */
.details {
  padding: clamp(4rem, 9vw, 7rem) 2rem clamp(5rem, 10vw, 8rem);
  background: var(--bg-bottom);
}

.details__inner {
  max-width: 760px;
  margin: 0 auto;
}

.details__lead {
  margin: 0;
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  line-height: 1.3;
  letter-spacing: -0.01em;
  color: var(--ink);
}

.details__lead strong {
  color: var(--teal);
  font-weight: 600;
}

.details__sub {
  margin: 1.75rem 0 1.5rem;
  font-size: clamp(1.05rem, 1.6vw, 1.25rem);
  font-weight: 500;
  color: var(--ink-soft);
}

.table-wrap {
  overflow-x: auto;
  border-radius: 16px;
  box-shadow: 0 24px 50px -28px rgba(33, 65, 76, 0.45);
}

.price-table {
  width: 100%;
  border-collapse: collapse;
  background: #fbfbfa;
  font-size: clamp(0.95rem, 1.4vw, 1.05rem);
  overflow: hidden;
  border-radius: 16px;
}

.price-table thead th {
  background: var(--teal);
  color: #fff;
  font-weight: 600;
  text-align: left;
  padding: 1.1rem 1.25rem;
  white-space: nowrap;
}

.price-table th.num,
.price-table td.num {
  text-align: right;
  font-variant-numeric: tabular-nums;
}

.price-table tbody th,
.price-table tbody td {
  padding: 1.1rem 1.25rem;
  border-top: 1px solid rgba(33, 65, 76, 0.1);
}

.price-table tbody th {
  font-weight: 600;
  color: var(--ink);
  text-align: left;
}

.price-table tbody td {
  color: var(--ink-soft);
}

.price-table tbody tr:hover {
  background: rgba(216, 155, 85, 0.07);
}

.saving {
  display: inline-block;
  padding: 0.3rem 0.65rem;
  border-radius: 999px;
  background: rgba(216, 155, 85, 0.2);
  color: var(--teal-dark);
  font-weight: 700;
  white-space: nowrap;
}

/* ---------- Image column ---------- */
.hero__media {
  margin: 0;
  display: flex;
  justify-content: center;
}

.hero__media img {
  display: block;
  width: 100%;
  height: auto;
  max-width: 520px;
  /* Feather the edges so the photo dissolves into the matching page background */
  -webkit-mask-image: radial-gradient(
    ellipse 90% 86% at 50% 49%,
    #000 48%,
    transparent 82%
  );
  mask-image: radial-gradient(
    ellipse 90% 86% at 50% 49%,
    #000 48%,
    transparent 82%
  );
}

/* ---------- Responsive ---------- */
@media (max-width: 860px) {
  .hero__inner {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 3rem 1.5rem;
    gap: 1rem;
  }

  .hero__content {
    max-width: 40rem;
    margin: 0 auto;
    order: 1;
  }

  .hero__media {
    order: 2;
  }

  .hero__media img {
    max-width: 380px;
  }

  .hero__title-accent {
    display: inline;
  }
}
</style>
