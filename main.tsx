@import "tailwindcss";
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@400;700;900&display=swap');

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-display: "Space Grotesk", sans-serif;
  --color-brand-blue: #7FB3D5;
  --color-brand-purple: #A569BD;
  --color-brand-teal: #76D7C4;
  --color-brand-cyan: #AED6F1;
  --color-brand-yellow: #F9E79F;
  --color-brand-orange: #F5B041;
  --color-brand-red: #E74C3C;
}

body {
  @apply font-sans;
  background-color: #F0F0F0;
  color: #000;
}

.font-display {
  font-family: var(--font-display);
}

.brutalist-border {
  border: 4px solid #000;
}

.brutalist-shadow {
  box-shadow: 8px 8px 0px 0px #000;
}

.brutalist-shadow-sm {
  box-shadow: 4px 4px 0px 0px #000;
}

.brutalist-shadow-hover:hover {
  box-shadow: 4px 4px 0px 0px #000;
  transform: translate(4px, 4px);
}

.brutalist-shadow-active:active {
  box-shadow: 0px 0px 0px 0px #000;
  transform: translate(8px, 8px);
}

/* Brutalist Scrollbar */
::-webkit-scrollbar {
  width: 12px;
}
::-webkit-scrollbar-track {
  background: #000;
}
::-webkit-scrollbar-thumb {
  background: #fff;
  border: 3px solid #000;
}

/* Custom Animations */
@keyframes slamIn {
  0% { transform: scale(2) translateY(-100px); opacity: 0; }
  100% { transform: scale(1) translateY(0); opacity: 1; }
}

.animate-slam {
  animation: slamIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}
