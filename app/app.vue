<script setup lang="ts">
useHead({
  htmlAttrs: { lang: "de" },
  title: "Geld Sparen mit dem Doppio Trick",
  meta: [
    {
      name: "description",
      content: "Mit dem Doppio Trick sparst du bis zu 700 CHF pro Jahr – ein Doppio statt zwei Espressos.",
    },
    { name: "robots", content: "noindex, nofollow" },
    { name: "googlebot", content: "noindex, nofollow" },
  ],
  link: [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap",
    },
  ],
});
</script>

<template>
  <main>
    <section class="hero">
      <div class="hero__inner">
        <div class="hero__content">
          <h1 class="hero__title">
            Geld Sparen mit dem
            <span class="hero__title-accent">Doppio-Trick</span>
          </h1>
          <p class="hero__subtitle">
            Mit dem Doppio-Trick kannst du bis zu
            <span class="hero__highlight">700&nbsp;CHF pro Jahr</span>
            sparen.
          </p>
          <p class="hero__note">* beim Kauf von 3&nbsp;SBB-Doppios anstatt 6&nbsp;SBB-Espressos pro Woche</p>

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

    <div class="content">
      <section id="details" class="content__inner">
        <p class="details__lead">
          Ein Doppio kostet oftmals nur ein bisschen mehr als ein Espresso, beinhaltet aber die
          <strong class="details__mark">doppelte Menge</strong>.
        </p>

        <p>
          Deshalb lohnt es sich, anstatt zwei Espressos nur <strong>einen</strong> Doppio zu bestellen. Es bietet sich zusätzlich
          an, einen zweiten Becher dazuzubestellen, damit beide Personen ihren Espresso separat geniessen können.
        </p>

        <p class="details__sub">An diesen Orten kannst du sparen:</p>

        <div class="table-wrap">
          <table class="price-table">
            <thead>
              <tr>
                <th scope="col">Ort</th>
                <th scope="col" class="num">Espresso</th>
                <th scope="col" class="num">Doppio</th>
                <th scope="col" class="num">Gespart</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">SBB Restaurant</th>
                <td class="num">5.20</td>
                <td class="num">5.90</td>
                <td class="num"><span class="saving">+4.50</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="table-note">Preise in CHF. Gespart: zwei Espressos im Vergleich zu einem Doppio.</p>
      </section>
      <section class="content__inner tips">
        <h2>Zusätzliche Tipps & Tricks</h2>
        <h3>Alternative Behälter</h3>
        <p>
          Der Erhalt eines zweiten Bechers oder einer zweiten Tasse ist nicht immer möglich. Wir empfehlen folgende
          alternative Behälter zum selbst mitbringen:
        </p>
        <ul class="vessels">
          <li><a href="https://tribeka.at/">tribeka-Glas</a></li>
          <li><a href="https://www.recircle.ch/produkte/verpackungen/">reCIRCLE&nbsp;CUP</a></li>
          <li>
            <a href="https://www.barilla.com/en-us/products/pesto/pesto-pasta-sauce">Barilla-Pesto-Glas</a>
            <span class="vessels__note">Gutes Auswaschen zwingend nötig.</span>
          </li>
        </ul>
        <p class="small-print">
          * Doppio Consulting bekommt kein Geld und steht in keinem Verhältnis mit den oben genannten Produkten und
          Firmen. Es handelt sich um eine persönliche Empfehlung basierend auf Erfahrung.
        </p>
      </section>
    </div>
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
  --font-display: "Fraunces", ui-serif, Georgia, "Times New Roman", serif;
  --font-body: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
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

/* Links: a thin amber underline that fills up into a highlight on hover */
a:not(.hero__cta) {
  color: var(--teal-dark);
  font-weight: 500;
  text-decoration: none;
  background: linear-gradient(rgba(216, 155, 85, 0.45), rgba(216, 155, 85, 0.45)) no-repeat 0 100% / 100% 2px;
  padding: 0 0.1em;
  margin: 0 -0.1em;
  transition: background-size 0.25s cubic-bezier(0.2, 0.7, 0.2, 1);
}

a:not(.hero__cta):hover {
  background-size: 100% 100%;
}

:focus-visible {
  outline: 2px solid var(--amber);
  outline-offset: 3px;
  border-radius: 2px;
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
  background: linear-gradient(rgba(216, 155, 85, 0.42), rgba(216, 155, 85, 0.42)) no-repeat 0 88% / 100% 40%;
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
  border-radius: 6px;
  background: var(--teal);
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s ease;
}

.hero__cta:hover {
  background: var(--teal-dark);
}

.hero__cta-arrow {
  display: inline-block;
  transition: transform 0.25s ease;
}

.hero__cta:hover .hero__cta-arrow {
  transform: translateY(3px);
}

/* ---------- Details / table section ---------- */
.content {
  padding: 1rem 1rem 20vh 1rem;
  display: flex;
  flex-direction: column;
  gap: clamp(4rem, 9vw, 7rem);
  background: var(--bg-bottom);
  font-size: 1.0625rem;
  line-height: 1.65;
  color: var(--ink-soft);
}

.content p {
  margin: 0 0 1em;
  max-width: 65ch;
}

.content strong {
  color: var(--ink);
  font-weight: 600;
}

.content h2 {
  margin: 0 0 1.5rem;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(1.75rem, 3.4vw, 2.4rem);
  line-height: 1.15;
  letter-spacing: -0.01em;
  color: var(--ink);
}

.content h3 {
  margin: 0 0 0.4rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--teal);
}

.vessels {
  list-style: none;
  margin: 1.25rem 0 2.5rem;
  padding: 0;
}

.vessels li {
  position: relative;
  padding-left: 1.75rem;
}

.vessels li + li {
  margin-top: 0.6rem;
}

.vessels li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.8em;
  width: 0.9rem;
  height: 2px;
  border-radius: 1px;
  background: var(--amber);
}

.vessels a {
  font-size: 1.125rem;
}

.vessels__note {
  display: block;
  font-size: 0.9375rem;
  color: var(--ink-faint);
}

.content .small-print {
  font-size: 0.875rem;
  font-style: italic;
  line-height: 1.55;
  color: var(--ink-faint);
}

.content__inner {
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
}

.content .details__lead {
  margin: 0 0 1.25rem;
  max-width: none;
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  line-height: 1.3;
  letter-spacing: -0.01em;
  color: var(--ink);
}

.details__lead .details__mark {
  color: var(--teal);
  font-weight: 600;
  background: linear-gradient(rgba(216, 155, 85, 0.42), rgba(216, 155, 85, 0.42)) no-repeat 0 88% / 100% 34%;
}

.content .details__sub {
  margin: 1.75rem 0 1.5rem;
  font-size: clamp(1.05rem, 1.6vw, 1.25rem);
  font-weight: 500;
  color: var(--ink-soft);
}

.table-wrap {
  overflow-x: auto;
}

.price-table {
  width: 100%;
  border-collapse: collapse;
  font-size: clamp(1rem, 1.4vw, 1.0625rem);
  font-variant-numeric: tabular-nums;
}

.price-table th,
.price-table td {
  padding: 0.8rem 1rem;
  text-align: left;
  white-space: nowrap;
}

.price-table th:first-child,
.price-table td:first-child {
  padding-left: 0;
}

.price-table th:last-child,
.price-table td:last-child {
  padding-right: 0;
}

.price-table .num {
  text-align: right;
}

.price-table thead th {
  padding-bottom: 0.6rem;
  border-bottom: 2px solid var(--ink);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--ink-faint);
}

.price-table tbody th,
.price-table tbody td {
  border-bottom: 1px solid rgba(33, 65, 76, 0.15);
}

.price-table tbody th {
  font-weight: 600;
  color: var(--ink);
}

.price-table tbody td {
  color: var(--ink-soft);
}

.saving {
  padding: 0.05em 0.25em;
  margin-right: -0.25em;
  font-weight: 700;
  color: var(--teal-dark);
  background: linear-gradient(rgba(216, 155, 85, 0.42), rgba(216, 155, 85, 0.42)) no-repeat 0 85% / 100% 45%;
}

.content .table-note {
  margin: 0.9rem 0 0;
  font-size: 0.875rem;
  color: var(--ink-faint);
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
  -webkit-mask-image: radial-gradient(ellipse 90% 86% at 50% 49%, #000 48%, transparent 82%);
  mask-image: radial-gradient(ellipse 90% 86% at 50% 49%, #000 48%, transparent 82%);
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

  .price-table th,
  .price-table td {
    padding-inline: 0.6rem;
  }
}

/* ---------- Load sequence ---------- */
@media (prefers-reduced-motion: no-preference) {
  .hero__title,
  .hero__subtitle,
  .hero__note,
  .hero__cta {
    animation: rise 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) backwards;
  }

  .hero__subtitle {
    animation-delay: 0.15s;
  }

  .hero__note {
    animation-delay: 0.25s;
  }

  .hero__cta {
    animation-delay: 0.35s;
  }

  /* The cup slides onto the table and settles */
  .hero__media img {
    animation: settle 1.4s cubic-bezier(0.2, 0.7, 0.2, 1) 0.1s backwards;
  }

  .hero__highlight {
    animation: underline 0.7s cubic-bezier(0.6, 0, 0.2, 1) 0.9s backwards;
  }

  .hero__cta-arrow {
    animation: nudge 1s ease-in-out 1.8s 2;
  }
}

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
}

@keyframes settle {
  from {
    opacity: 0;
    transform: translate(4%, -3%) rotate(-14deg) scale(0.96);
  }
}

@keyframes underline {
  from {
    background-size: 0% 40%;
  }
}

@keyframes nudge {
  50% {
    transform: translateY(4px);
  }
}

/* ---------- Scroll-driven ---------- */
@supports (animation-timeline: view()) {
  @media (prefers-reduced-motion: no-preference) {
    /* The cup turns on its saucer as the hero scrolls away */
    .hero__media {
      animation: turn linear both;
      animation-timeline: scroll(root);
      animation-range: 0 100vh;
    }

    .details__lead,
    .table-wrap,
    .tips h2,
    .vessels li {
      animation: reveal linear both;
      animation-timeline: view();
      animation-range: entry 0% entry 80%;
    }

    .details__mark {
      animation: underline linear both;
      animation-timeline: view();
      animation-range: entry 60% cover 40%;
    }

    .saving {
      animation: underline linear both;
      animation-timeline: view();
      animation-range: entry 50% cover 35%;
    }
  }
}

@keyframes turn {
  to {
    transform: rotate(40deg) translateY(6%);
    opacity: 0.5;
  }
}

@keyframes reveal {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
</style>
