# Plan budowy strony-wizytówki – Piotr Adamski

## Status kroków
- [x] **Krok 1:** Pobranie i analiza danych z profilu LinkedIn (PDF) oraz wybór stylu
- [x] **Krok 2:** Wygenerowanie strony (`index.html`, `styles.css`, `script.js`) z pełnymi danymi z LinkedIn
- [x] **Krok 3:** Czysty, minimalistyczny wariant karty menedżerskiej (Cloud Backend, Media Streaming, Cloud Camera Firmware – bez IoT), przycisk Download Resume (PDF) oraz obsługa zdjęcia profilowego (`assets/profile.jpg`)
- [ ] **Krok 4 (Na jutro):** Wypchnięcie kodu na GitHub (`executeinshell/piotr-adamski-portfolio`) i włączenie darmowego hostingu (GitHub Pages lub Vercel)

---

## Instrukcja ręczna na jutro (Krok po kroku – 2 minuty)

### Sposób 1: Przez zwykłe okno PowerShell / Git Bash (z okienkiem logowania)
Kiedy Git jest uruchamiany bezpośrednio przez Ciebie w normalnym oknie terminala (a nie w tle przez agenta), okienko logowania GitHub wyświetla się normalnie na ekranie:

1. Otwórz zwykły **PowerShell** lub **Git Bash** w Windowsie.
2. Wklej i uruchom te dwie komendy:
   ```powershell
   cd "C:\Users\Piotr\.gemini\antigravity\scratch\wizytowka"
   git push -u origin main
   ```
3. Gdy pojawi się okienko logowania GitHub (lub prośba o token), zaloguj się na konto **`executeinshell`**.

*(Alternatywnie, jeśli nie chcesz używać terminala: wejdź na `https://github.com/executeinshell/piotr-adamski-portfolio`, kliknij link **"uploading an existing file"**, przeciągnij myszką pliki `index.html`, `styles.css`, `script.js` z folderu `C:\Users\Piotr\.gemini\antigravity\scratch\wizytowka` i kliknij **Commit changes**).*

---

### Sposób 2: Dlaczego strona na GitHubie jeszcze się nie pokazuje i jak ją włączyć?
Sam upload plików do repozytorium na GitHubie pokazuje tylko kod. Żeby strona wyświetlała się jako żywa witryna WWW pod publicznym adresem, wykonaj jeden z dwóch poniższych kroków:

#### Wariant A: Darmowy GitHub Pages (bez zakładania nowych kont)
1. Wejdź w swoim repozytorium na GitHubie w zakładkę **Settings** (na górnym pasku).
2. Po lewej stronie w menu kliknij **Pages**.
3. W sekcji **Build and deployment** -> **Source**:
   - Wybierz **Deploy from a branch**, a poniżej ustaw gałąź **`main`** oraz folder **`/ (root)`** i kliknij **Save** (LUB wybierz **GitHub Actions**, bo przygotowałem już gotowy plik `.github/workflows/static.yml`).
4. Po ok. 60 sekundach odśwież stronę **Settings -> Pages** – na samej górze pojawi się Twój publiczny link:
   **`https://executeinshell.github.io/piotr-adamski-portfolio/`**

#### Wariant B: Darmowy Vercel (jeszcze ładniejszy adres `.vercel.app`)
1. Wejdź na **[vercel.com](https://vercel.com)** i kliknij **Log in with GitHub**.
2. Kliknij **Add New... -> Project**.
3. Wybierz z listy swoje repozytorium `piotr-adamski-portfolio` i kliknij **Deploy**.
4. Po 15 sekundach strona będzie dostępna pod adresem `https://piotr-adamski-portfolio.vercel.app`.
