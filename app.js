// WhistleType project page: language switch (EN/PL) and two small benchmark charts. No dependencies.
(function () {
  "use strict";

  // English lives in the HTML; Polish here. Values are static page text (trusted), some with inline markup.
  var PL = {
    skip: "Przejdź do treści",
    nav_features: "Funkcje",
    nav_engines: "FAST czy ACCURATE",
    nav_screens: "Zrzuty ekranu",
    nav_privacy: "Prywatność",
    nav_download: "Pobierz",
    lang_aria: "Switch the language to English",
    gh_aria: "Kod źródłowy na GitHubie",
    eyebrow: "Darmowy i otwarty · Windows 10 / 11",
    h1: "Przytrzymaj klawisz. Mów. Puść.",
    lead: "WhistleType wpisuje to, co mówisz, tam, gdzie stoi kursor — w Claude Code, VS Code, terminalu, przeglądarce czy czacie. Mowa jest rozpoznawana <strong>w całości na Twoim komputerze</strong>: nic nie trafia do chmury.",
    cta_download: "Pobierz dla Windows",
    cta_source: "Kod źródłowy",
    meta: "Wersja 1.1.0 · instalator 4,5 MB · licencja MIT · <a href=\"#notice\">projekt hobbystyczny, pliki niepodpisane</a>",
    demo_text: "Sprawdź useEffect w tym komponencie React i uruchom testy.",
    how_title: "Jak to działa",
    s1_t: "Przytrzymaj F8",
    s1_d: "Mała nakładka pokazuje <em>Słucham…</em> z poziomem głosu na żywo. Klawisz nie trafia do aplikacji, w której jesteś.",
    s2_t: "Mów",
    s2_d: "Po polsku, po angielsku albo po polsku z angielskimi terminami technicznymi — to główny scenariusz.",
    s3_t: "Puść",
    s3_d: "Tekst zostaje wklejony przy kursorze, a schowek wraca dokładnie do poprzedniego stanu.",
    f_title: "Wszystko, co powinno robić narzędzie do dyktowania — i nic ponadto",
    f1_t: "Globalny push-to-talk",
    f1_d: "Przytrzymaj albo naciśnij, aby zacząć i skończyć; dowolny skrót, Esc anuluje. Działa też w oknach administratora (tekst czeka w schowku).",
    f2_t: "W 100% lokalnie",
    f2_d: "Bez API w chmurze, bez konta, bez telemetrii. Po pobraniu modelu działa offline — sprawdzone testami, które obserwują połączenia sieciowe aplikacji.",
    f3_t: "Dwa silniki",
    f3_d: "<strong>FAST</strong>: Whistle od Cactus Compute na CPU, ~0,1 s na frazę. <strong>ACCURATE</strong>: Whisper od OpenAI przez whisper.cpp. <strong>AUTO</strong> wybiera za Ciebie.",
    f4_t: "Przyspieszenie na GPU NVIDIA",
    f4_d: "Opcjonalny pakiet GPU (oficjalna wersja CUDA whisper.cpp) uruchamia Whisper large-v3-turbo w ~0,5 s na zdanie, z automatycznym powrotem na CPU.",
    f5_t: "Bezpieczny dla schowka",
    f5_d: "Każdy format schowka jest zapisywany i przywracany; dyktowany tekst nie trafia do historii schowka. Można też wpisywać znaki bez użycia schowka.",
    f6_t: "Twój słownik",
    f6_d: "Dodaj nazwy, produkty i żargon (Kubernetes, useEffect, Gradle…). Whistle stosuje keyword biasing, a Whisper dostaje je jako podpowiedź.",
    f7_t: "Ignoruje hałas",
    f7_d: "Bramka mowy odrzuca ciszę, pisanie na klawiaturze, oddech i kliknięcia przed rozpoznaniem — żadne „Dziękuję.” nie pojawi się znikąd.",
    f8_t: "Lekki i cichy",
    f8_d: "Jedna mała natywna aplikacja (Rust + Win32): 0% CPU w spoczynku, ~40 MB RAM w trybie FAST. Interfejs po polsku i po angielsku.",
    e_title: "FAST czy ACCURATE?",
    e_lead: "Przełączasz w Ustawieniach albo z menu w zasobniku. AUTO (domyślny) używa Whispera, gdy jest gotowy na karcie graficznej, a w innym razie Whistle.",
    c_engine: "Silnik",
    c_engine_acc: "OpenAI Whisper (od base do large-v3-turbo) przez whisper.cpp",
    c_runs: "Działa na",
    c_runs_acc: "karcie NVIDIA (CUDA), awaryjnie na CPU",
    c_download: "Pobieranie",
    c_download_acc: "model 60–574 MB + pakiet GPU 675 MB",
    c_download_fast: "16,9 MB",
    c_short_fast: "~0,1 s",
    c_short: "Krótka fraza",
    c_short_acc: "~0,4 s (GPU)",
    c_memory: "Pamięć w gotowości",
    c_memory_acc: "~0,5 GB RAM + ~1 GB VRAM",
    c_best: "Najlepszy do",
    c_best_fast: "każdy komputer, błyskawiczne krótkie polecenia",
    c_best_acc: "najlepsza jakość polskiego, długie dyktowanie, terminy techniczne",
    ch1_t: "Odsetek błędnych słów na prawdziwej polskiej mowie",
    ch1_s: "FLEURS pl, 60 wypowiedzi · Whisper na GPU · mniej = lepiej",
    ch1_aria: "Odsetek błędnych słów: Whistle 35,5%, Whisper base 33,4%, small 15,5%, medium 8,4%, large-v3-turbo 5,7%",
    ch2_t: "Czas na zdanie",
    ch2_s: "te same 60 wypowiedzi (4–16 s) · Whisper na GPU · mniej = lepiej",
    ch2_aria: "Średni czas rozpoznawania: Whistle 0,73 s, Whisper base 0,36 s, small 0,49 s, medium 0,88 s, large-v3-turbo 0,52 s",
    tbl_summary: "Pokaż pomiary w tabeli",
    t_config: "Konfiguracja",
    t_time: "Czas / zdanie",
    t_small_cpu: "Whisper small · tylko CPU",
    bench_note: "Zmierzone na laptopie z Ryzen 7 5800H i RTX 3060 Laptop (6 GB), modele Whisper skwantyzowane do q5. Bez karty NVIDIA modele Whisper lepsze od Whistle potrzebują kilku sekund na zdanie — dlatego AUTO przełącza się na Whispera tylko na GPU. Pełna metodologia i surowe wyniki: <a href=\"https://github.com/apkmasondev/whistle-type/blob/main/PERFORMANCE.md\">PERFORMANCE.md</a>.",
    sc_title: "Zrzuty ekranu",
    alt_settings: "Okno ustawień: mikrofon, skrót, silnik rozpoznawania, sposób wstawiania i stan",
    cap_settings: "Ustawienia — jedno natywne okno, każda zmiana zapisuje się od razu.",
    alt_models: "Okno Modele mowy z listą: Whistle, cztery modele Whisper i pakiet GPU, z rozmiarem, jakością polskiego i stanem",
    cap_models: "Modele mowy — pobieranie i usuwanie modeli oraz pakietu GPU. Nic nie jest pobierane, dopóki nie klikniesz.",
    alt_listening: "Nakładka: Słucham… z licznikiem czasu i poziomem głosu",
    alt_transcribing: "Nakładka: Rozpoznaję…",
    alt_nospeech: "Nakładka: Nie wykryto mowy",
    cap_overlay: "Nakładka nigdy nie zabiera fokusu, pojawia się na aktywnym monitorze i pokazuje stan ikoną i tekstem, nie tylko kolorem.",
    p_title: "Prywatność od podstaw",
    p_lead: "Twój głos jest przetwarzany na Twoim komputerze i nigdzie indziej.",
    p1: "Żadnego API mowy w chmurze, konta, telemetrii ani reklam.",
    p2: "Nagrania nigdy nie są zapisywane na dysku; transkrypcje nie trafiają do logów.",
    p3: "Mikrofon jest otwarty tylko wtedy, gdy trzymasz klawisz.",
    p4: "Sieć służy wyłącznie do pobrania modelu po kliknięciu <em>Pobierz</em> — z przypiętego źródła, weryfikowane SHA-256.",
    p5: "Dyktowany tekst jest wykluczony z historii schowka i schowka w chmurze.",
    p6: "Otwarty kod: każdą linijkę przeczytasz na GitHubie.",
    d_title: "Pobieranie i instalacja",
    d1_t: "Instalator",
    d1_d: "Instalacja dla bieżącego użytkownika, bez uprawnień administratora. Opcjonalny start z Windows; czyste odinstalowanie w Ustawienia → Aplikacje.",
    d1_btn: "WhistleType-1.1.0-setup-x64.exe · 4,5 MB",
    d2_t: "Wersja przenośna",
    d2_d: "Rozpakuj gdziekolwiek. Utwórz pusty plik <code>WhistleType.portable</code> obok pliku exe, aby ustawienia i modele były w <code>.\\data</code>.",
    d2_btn: "WhistleType-1.1.0-portable-x64.zip · 5,2 MB",
    r_title: "Wymagania",
    r1: "Windows 10 (1809+) lub Windows 11, 64-bit.",
    r2: "Mikrofon (<em>Ustawienia → Prywatność i zabezpieczenia → Mikrofon → Zezwalaj aplikacjom klasycznym na dostęp</em>).",
    r3: "FAST: dowolny procesor x64. ACCURATE na GPU: karta NVIDIA z ≥ 2 GB VRAM i aktualnym sterownikiem — bez instalowania CUDA Toolkit.",
    g_title: "Pierwsze uruchomienie",
    g1: "WhistleType zaproponuje jednorazowe pobranie modelu Whistle (16,9 MB).",
    g2: "Dla ACCURATE: Ustawienia → Rozpoznawanie → <em>Modele…</em> → pobierz pakiet GPU i Whisper large-v3-turbo, potem uruchom aplikację ponownie.",
    g3: "Przytrzymaj F8 i mów.",
    smartscreen: "Sumy kontrolne: <a href=\"https://github.com/apkmasondev/whistle-type/releases/download/v1.1.0/SHA256SUMS.txt\">SHA256SUMS.txt</a> · <a href=\"https://github.com/apkmasondev/whistle-type/releases\">wszystkie wydania</a> · <a href=\"https://github.com/apkmasondev/whistle-type/issues\">zgłoś problem</a>.",
    n_title: "Projekt hobbystyczny, pliki niepodpisane",
    n_p1: "WhistleType tworzy jedna osoba w wolnym czasie. Jest darmowy i otwarty, udostępniany <strong>„tak jak jest”, bez gwarancji</strong> (licencja MIT) — nie stoi za nim firma, wsparcie techniczne ani gwarancja.",
    n_p2: "Instalator i aplikacja <strong>nie są podpisane cyfrowo</strong> (certyfikat do podpisu kosztuje). Przy pierwszym uruchomieniu Windows SmartScreen może pokazać <em>„System Windows ochronił ten komputer”</em> — kliknij <em>Więcej informacji → Uruchom mimo to</em>. Jeśli wolisz najpierw sprawdzić: porównaj SHA-256 pliku (<code>Get-FileHash</code> w PowerShell) z <a href=\"https://github.com/apkmasondev/whistle-type/releases/download/v1.1.0/SHA256SUMS.txt\">SHA256SUMS.txt</a>, przejrzyj kod albo zbuduj aplikację sam.",
    l_title: "Licencje i podziękowania",
    l_lead: "WhistleType jest udostępniony na <a href=\"https://github.com/apkmasondev/whistle-type/blob/main/LICENSE\">licencji MIT</a>. Korzysta z poniższych projektów, każdy na własnej licencji:",
    l_component: "Komponent",
    l_author: "Autor",
    l_licence: "Licencja",
    l_how: "Jak jest używany",
    l_whistle: "silnik FAST; biblioteka dołączona, model pobierany przy pierwszym uruchomieniu",
    l_ggml_author: "autorzy ggml",
    l_wcpp: "silnik ACCURATE; biblioteki CPU dołączone, wersja CUDA do pobrania opcjonalnie",
    l_whisper: "wagi modeli, pobierane na żądanie",
    l_cuda_lic: "CUDA EULA (redystrybucja dozwolona)",
    l_cuda: "w opcjonalnym pakiecie GPU",
    l_vc_lic: "redystrybucja dozwolona",
    l_vc: "wymagany przez whisper.cpp, dołączony",
    l_crates: "Biblioteki Rust",
    l_crates_author: "różni autorzy",
    l_crates_how: "wkompilowane w aplikację",
    l_full: "Pełna lista z wersjami i tekstami licencji: <a href=\"https://github.com/apkmasondev/whistle-type/blob/main/THIRD_PARTY_NOTICES.md\">THIRD_PARTY_NOTICES.md</a>. WhistleType jest niezależnym projektem, niezwiązanym z Cactus Compute, OpenAI, NVIDIA ani Microsoft i niepromowanym przez nie. Nagrania do testów: Google FLEURS (CC-BY-4.0).",
    foot_mit: "Licencja MIT",
    foot_source: "Kod źródłowy",
    foot_issues: "Zgłoś problem",
    foot_research: "Notatki z badań",
    foot_privacy: "Ta strona nie używa ciasteczek, analityki ani zewnętrznych zasobów."
  };

  var META = {
    en: { title: document.title, desc: "" },
    pl: {
      title: "WhistleType — lokalne dyktowanie push-to-talk dla Windows",
      desc: "Przytrzymaj klawisz, mów, puść — tekst pojawia się tam, gdzie kursor. Darmowe, otwarte dyktowanie dla Windows działające w 100% lokalnie: Whistle na CPU, Whisper na karcie NVIDIA."
    }
  };

  var EN = {}; // originals, captured from the HTML on first switch
  var lang = "en";

  function store(key, val) { try { localStorage.setItem(key, val); } catch (e) { /* private mode: ignore */ } }
  function load(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }

  function applyLang(next) {
    lang = next;
    var d = document;
    d.documentElement.lang = next;
    d.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (!(k in EN)) EN[k] = el.innerHTML;
      if (next === "pl" && !PL[k] && window.console) console.warn("missing Polish text: " + k);
      el.innerHTML = next === "pl" && PL[k] ? PL[k] : EN[k];
    });
    d.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-aria"), ek = "aria:" + k;
      if (!(ek in EN)) EN[ek] = el.getAttribute("aria-label");
      el.setAttribute("aria-label", next === "pl" && PL[k] ? PL[k] : EN[ek]);
    });
    d.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-alt"), ek = "alt:" + k;
      if (!(ek in EN)) EN[ek] = el.getAttribute("alt");
      el.setAttribute("alt", next === "pl" && PL[k] ? PL[k] : EN[ek]);
    });
    d.querySelectorAll("img[data-src-pl]").forEach(function (img) {
      img.src = img.getAttribute(next === "pl" ? "data-src-pl" : "data-src-en");
    });
    var desc = d.querySelector('meta[name="description"]');
    if (!META.en.desc) META.en.desc = desc.getAttribute("content");
    d.title = META[next].title;
    desc.setAttribute("content", META[next].desc);
    var btn = d.getElementById("lang-toggle");
    btn.textContent = next === "pl" ? "EN" : "PL";
    btn.setAttribute("lang", next === "pl" ? "en" : "pl");
    renderCharts();
  }

  // ---- charts -------------------------------------------------------------------------------------------
  var ROWS = [
    { name: "Whistle (FAST)", full: "Whistle 2.0.0 · CPU", wer: 35.5, cer: 11.0, sec: 0.73, vram: null },
    { name: "Whisper base", full: "Whisper base · GPU", wer: 33.4, cer: 9.3, sec: 0.36, vram: 0.39 },
    { name: "Whisper small", full: "Whisper small · GPU", wer: 15.5, cer: 4.7, sec: 0.49, vram: 0.65 },
    { name: "Whisper medium", full: "Whisper medium · GPU", wer: 8.4, cer: 2.9, sec: 0.88, vram: 1.30 },
    { name: "Whisper turbo", full: "Whisper large-v3-turbo · GPU", wer: 5.7, cer: 2.1, sec: 0.52, vram: 0.98 }
  ];

  function num(v, digits) {
    var s = v.toFixed(digits);
    return lang === "pl" ? s.replace(".", ",") : s;
  }

  var SVGNS = "http://www.w3.org/2000/svg";
  function el(name, attrs, parent) {
    var n = document.createElementNS(SVGNS, name);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  }

  // Horizontal bars: one series, one hue; 20px bars, 4px rounded data end, square at the baseline.
  function barChart(host, opts) {
    host.textContent = "";
    // drawn at the container's real width, so text stays 12-13 px on phones too
    var W = Math.max(280, Math.round(host.clientWidth || 520));
    var labelW = W < 400 ? 112 : 132, right = 52, top = 6, rowH = 36, barH = 20;
    var H = top + ROWS.length * rowH + 26;
    var x0 = labelW, x1 = W - right, span = x1 - x0;
    var svg = el("svg", { viewBox: "0 0 " + W + " " + H, "aria-hidden": "true", focusable: "false" }, host);
    // recessive grid + axis labels
    var ticks = W < 400 ? opts.ticks.filter(function (t, i) { return i % 2 === 0; }) : opts.ticks;
    ticks.forEach(function (t) {
      var x = x0 + (t / opts.max) * span;
      el("line", { x1: x, x2: x, y1: top, y2: top + ROWS.length * rowH, "class": "grid" }, svg);
      var tx = el("text", { x: x, y: H - 6, "text-anchor": "middle", "class": "axis" }, svg);
      tx.textContent = opts.tick(t);
    });
    ROWS.forEach(function (r, i) {
      var v = r[opts.key];
      var y = top + i * rowH + (rowH - barH) / 2;
      var w = Math.max(2, (v / opts.max) * span);
      var g = el("g", { "class": "row", tabindex: "0" }, svg);
      var label = el("text", { x: x0 - 10, y: y + barH / 2 + 4.5, "text-anchor": "end", "class": "label" }, g);
      label.textContent = r.name;
      var rr = Math.min(4, w / 2);
      el("path", {
        "class": "bar",
        d: "M" + x0 + "," + y + " H" + (x0 + w - rr) + " Q" + (x0 + w) + "," + y + " " + (x0 + w) + "," + (y + rr) +
           " V" + (y + barH - rr) + " Q" + (x0 + w) + "," + (y + barH) + " " + (x0 + w - rr) + "," + (y + barH) + " H" + x0 + " Z"
      }, g);
      var val = el("text", { x: x0 + w + 6, y: y + barH / 2 + 4.5, "class": "value" }, g);
      val.textContent = opts.fmt(v);
      // hit target: the whole row, bigger than the mark
      el("rect", { "class": "hit", x: 0, y: top + i * rowH, width: W, height: rowH, rx: 6 }, g);
      g.addEventListener("mouseenter", function (e) { tipFor = null; showTip(r, e.clientX, e.clientY); });
      g.addEventListener("mousemove", function (e) { moveTip(e.clientX, e.clientY); });
      g.addEventListener("mouseleave", hideTip);
      g.addEventListener("focus", function () { tipFor = g; tipRow = r; placeAtRow(); });
      g.addEventListener("blur", hideTip);
    });
  }

  var tip, tipFor = null, tipRow = null; // tipFor: the focused chart row (keyboard), null for the mouse
  function placeAtRow() {
    var b = tipFor.getBoundingClientRect();
    showTip(tipRow, b.left + Math.min(b.width * 0.55, 260), b.top);
  }
  function showTip(r, x, y) {
    tip.innerHTML = "";
    var b = document.createElement("b");
    b.textContent = r.full || r.name;
    tip.appendChild(b);
    var lines = [
      (lang === "pl" ? "Błędne słowa (WER): " : "Word errors (WER): ") + num(r.wer, 1) + "%",
      (lang === "pl" ? "Błędne znaki (CER): " : "Character errors (CER): ") + num(r.cer, 1) + "%",
      (lang === "pl" ? "Czas na zdanie: " : "Time per sentence: ") + num(r.sec, 2) + " s",
      "VRAM: " + (r.vram == null ? "—" : num(r.vram, 2) + " GB")
    ];
    lines.forEach(function (t) { var s = document.createElement("span"); s.textContent = t; s.style.display = "block"; tip.appendChild(s); });
    tip.hidden = false;
    moveTip(x, y);
  }
  function moveTip(x, y) {
    var w = tip.offsetWidth, h = tip.offsetHeight;
    var left = Math.min(window.innerWidth - w - 8, x + 14);
    var top = y - h - 12 < 8 ? y + 18 : y - h - 12;
    tip.style.left = Math.max(8, left) + "px";
    tip.style.top = top + "px";
  }
  function hideTip() { tip.hidden = true; tipFor = null; }
  function onScroll() {
    if (tip.hidden) return;
    if (tipFor && document.activeElement === tipFor) placeAtRow(); // keyboard: follow the row
    else hideTip(); // mouse: the pointer is no longer over the same spot
  }

  function renderCharts() {
    var wer = document.getElementById("chart-wer");
    var ms = document.getElementById("chart-ms");
    if (!wer || !ms) return;
    barChart(wer, { key: "wer", max: 40, ticks: [0, 10, 20, 30, 40], tick: function (t) { return t + "%"; }, fmt: function (v) { return num(v, 1) + "%"; } });
    barChart(ms, { key: "sec", max: 1, ticks: [0, 0.25, 0.5, 0.75, 1], tick: function (t) { return num(t, 2) + " s"; }, fmt: function (v) { return num(v, 2) + " s"; } });
  }

  document.addEventListener("DOMContentLoaded", function () {
    tip = document.getElementById("tooltip");
    var saved = load("wt-lang");
    var start = saved === "pl" || saved === "en" ? saved : ((navigator.language || "").toLowerCase().indexOf("pl") === 0 ? "pl" : "en");
    applyLang(start);
    document.getElementById("lang-toggle").addEventListener("click", function () {
      var next = lang === "pl" ? "en" : "pl";
      store("wt-lang", next);
      applyLang(next);
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") hideTip(); });
    window.addEventListener("scroll", onScroll, { passive: true });
    var lastW = window.innerWidth, timer = 0;
    window.addEventListener("resize", function () {
      if (window.innerWidth === lastW) return; // mobile URL-bar height changes do not need a redraw
      lastW = window.innerWidth;
      clearTimeout(timer);
      timer = setTimeout(renderCharts, 120);
    });
  });
})();
