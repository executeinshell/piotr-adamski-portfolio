// Initialize Lucide icons
if (window.lucide) {
  lucide.createIcons();
}

// Current year in footer
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Theme toggle (Dark / Light mode with localStorage persistence)
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  htmlEl.classList.remove('dark');
} else {
  htmlEl.classList.add('dark');
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    htmlEl.classList.toggle('dark');
    const isDark = htmlEl.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

// Copy email button feedback
const copyEmailBtn = document.getElementById('copy-email-btn');
const copyEmailText = document.getElementById('copy-email-text');

if (copyEmailBtn && copyEmailText) {
  copyEmailBtn.addEventListener('click', async () => {
    const email = copyEmailBtn.getAttribute('data-email');
    try {
      await navigator.clipboard.writeText(email);
      const original = copyEmailText.textContent;
      copyEmailText.textContent = 'Copied!';
      setTimeout(() => {
        copyEmailText.textContent = original;
      }, 2000);
    } catch (err) {
      window.location.href = `mailto:${email}`;
    }
  });
}

// Scroll reveal observer
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealElements.forEach((el) => revealObserver.observe(el));
