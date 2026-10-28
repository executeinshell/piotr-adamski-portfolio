// Initialize Lucide icons
if (window.lucide) {
  lucide.createIcons();
}

// Current year in footer
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Theme toggle (Defaults to warm Editorial Paper Light mode to showcase ink illustrations, supports Dark mode)
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  htmlEl.classList.add('dark');
} else {
  htmlEl.classList.remove('dark');
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    htmlEl.classList.toggle('dark');
    const isDark = htmlEl.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

// Interactive Hero Stage Switcher (Coding & Sync vs Say Hi Coffee vs Real Portrait Photo)
const heroModeBtns = document.querySelectorAll('.hero-mode-btn');
const viewWork = document.getElementById('hero-view-work');
const viewCoffee = document.getElementById('hero-view-coffee');
const viewPhoto = document.getElementById('hero-view-photo');
const stageCaption = document.getElementById('hero-stage-caption');

const captions = {
  work: 'Hands-On Leader + Team Sync',
  coffee: 'Always Open for Coffee & Tech Talk',
  photo: 'Verified LinkedIn Profile'
};

heroModeBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const mode = btn.getAttribute('data-hero-mode');

    // Update active button style
    heroModeBtns.forEach((b) => {
      b.classList.remove('bg-accent-amber', 'border', 'border-ink');
    });
    btn.classList.add('bg-accent-amber', 'border', 'border-ink');

    // Toggle stage views
    if (viewWork && viewCoffee && viewPhoto) {
      viewWork.classList.toggle('hidden', mode !== 'work');
      viewCoffee.classList.toggle('hidden', mode !== 'coffee');
      if (mode === 'photo') {
        viewPhoto.classList.remove('hidden');
        viewPhoto.classList.add('flex');
      } else {
        viewPhoto.classList.add('hidden');
        viewPhoto.classList.remove('flex');
      }
    }

    if (stageCaption && captions[mode]) {
      stageCaption.textContent = captions[mode];
    }
  });
});

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
  { threshold: 0.1 }
);

revealElements.forEach((el) => revealObserver.observe(el));
