# Plan budowy strony-wizytówki – Piotr Adamski

## Ustalenia z Kroku 1, 2 i 3
- **Źródło danych:** Odczytano plik `C:\Users\Piotr\Desktop\linkedIn\Profile.pdf`
- **Język strony:** Angielski (zgodnie z profilem LinkedIn)
- **Technologia:** Lekki, czysty HTML + Tailwind CSS + JS (`index.html`, `styles.css`, `script.js`)
- **Styl wizualny:** Nowoczesny minimalizm (przełącznik Dark/Light mode, czcionki Inter + JetBrains Mono, animacje scroll-reveal, układ Bento Grid dla kompetencji oraz czytelna oś czasu dla doświadczenia)
- **Grafiki i dodatki (Krok 3):**
  - Wygenerowano i wstawiono dwie dedykowane grafiki technologiczne:
    - `assets/hero-tech.jpg` (izometryczna wizualizacja: kamera IoT -> strumień wideo -> chmura i sieć neuronowa AI)
    - `assets/ai-architecture.jpg` (wizualizacja architektury systemów rozproszonych i AI)
  - Dodano sloty na zdjęcie profilowe (`assets/profile.jpg`) w pasku nawigacji oraz w karcie wizytówki w sekcji Hero (z automatycznym fallbackiem do inicjałów `PA` dopóki plik `profile.jpg` nie zostanie wrzucony).
  - Dodano przyciski **Download Resume (PDF)** w nawigacji i w sekcji Hero (`assets/Piotr_Adamski_Resume.pdf`).
- **Hosting docelowy:** Vercel lub Cloudflare Pages

## Status kroków
- [x] **Krok 1:** Pobranie i analiza danych z profilu LinkedIn (PDF) oraz wybór stylu
- [x] **Krok 2:** Wygenerowanie pierwszej działającej wersji strony (`index.html`, `styles.css`, `script.js`) z pełnymi danymi z LinkedIn
- [x] **Krok 3:** Wygenerowanie i integracja grafik technologicznych, dodanie przycisku Download Resume (PDF) oraz obsługi zdjęcia profilowego (`assets/profile.jpg`)
- [ ] **Krok 4:** Konfiguracja repozytorium Git i darmowy deployment na Vercel / Cloudflare Pages
