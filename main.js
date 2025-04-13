document.addEventListener("DOMContentLoaded", function () {
  const themeSelect = document.getElementById("theme-select");
  const languageSelect = document.getElementById("language-select");
  const shareBtn = document.getElementById('share-btn');
  const shareSection = document.querySelector(".share-section");
  const shareUrlInput = document.getElementById("share-url");
  const body = document.body;
  let lastSharedCode = '';

  const textarea = document.getElementById("code-editor");
  const initialContent = textarea.value;

  // Initialise CodeMirror
  const editor = CodeMirror.fromTextArea(textarea, {
    mode: "xml",
    theme: "default",
    lineNumbers: true,
    value: initialContent,
    lineWrapping: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    viewportMargin: Infinity
  });

  // Initialisation de la mini-map
  const miniMap = CodeMirror(document.getElementById("mini-map-container"), {
    value: editor.getValue(),
    readOnly: true,
    lineNumbers: false,
    theme: "default",
    mode: "xml",
    lineWrapping: false,
    cursorBlinkRate: -1,
    scrollbarStyle: null,
    viewportMargin: Infinity
  });

  // Fonctions pour gérer les thèmes
  function updateMiniMapTheme(theme) {
    miniMap.setOption("theme", theme === "vs-dark" ? "dracula" : "default");
  }

  function updateTheme(theme) {
    if (theme === "vs-dark") {
      body.classList.add("dark-mode");
      editor.setOption("theme", "dracula");
    } else {
      body.classList.remove("dark-mode");
      editor.setOption("theme", "default");
    }
    updateMiniMapTheme(theme);
  }

  // Chargement d'un code partagé si ID présent
  const urlParams = new URLSearchParams(window.location.search);
  const codeId = urlParams.get('id');

  if (codeId) {
    const savedCode = localStorage.getItem(`shared-code-${codeId}`);
    if (savedCode) {
      editor.setValue(savedCode);
      miniMap.setValue(savedCode);
      shareUrlInput.value = `${window.location.origin}${window.location.pathname}?id=${codeId}`;
      shareSection.classList.remove("hidden");
      shareBtn.disabled = true;
      shareBtn.classList.add('disabled');
      lastSharedCode = savedCode;
    }
  }

  // Configuration initiale du thème
  if (localStorage.getItem("theme")) {
    updateTheme(localStorage.getItem("theme"));
    themeSelect.value = localStorage.getItem("theme");
  }

  // Événements
  themeSelect.addEventListener("change", function () {
    const selectedTheme = this.value;
    localStorage.setItem("theme", selectedTheme);
    updateTheme(selectedTheme);
  });

  languageSelect.addEventListener("change", function () {
    const selectedLanguage = this.value;
    const mode = selectedLanguage === "html" ? "xml" : selectedLanguage;
    editor.setOption("mode", mode);
    miniMap.setOption("mode", mode);
  });

  // Gestion du partage
  shareBtn.addEventListener('click', () => {
    const codeContent = editor.getValue();
    const generatedID = generateRandomID();
    
    localStorage.setItem(`shared-code-${generatedID}`, codeContent);
    lastSharedCode = codeContent;
    
    shareBtn.disabled = true;
    shareBtn.classList.add('disabled');
    
    const shareUrl = `${window.location.origin}${window.location.pathname}?id=${generatedID}`;
    shareUrlInput.value = shareUrl;
    // Affiche la section de partage quand on clique sur Share
    shareSection.classList.remove("hidden");
    
    miniMap.setValue(codeContent);
  });

  // Réactivation du bouton Share lors des modifications
  editor.on("change", () => {
    const currentCode = editor.getValue();
    miniMap.setValue(currentCode);
    
    if (currentCode !== lastSharedCode) {
        shareBtn.disabled = false;
        shareBtn.classList.remove('disabled');
        // Cache la section de partage quand le code est modifié
        shareSection.classList.add("hidden");
    }
  });

  // Synchronisation du scroll
  editor.on("scroll", () => {
    miniMap.scrollTo(0, editor.getScrollInfo().top);
  });

  // Copie du lien avec notification
  document.querySelector(".copy-btn").addEventListener("click", function() {
    shareUrlInput.select();
    document.execCommand("copy");
    
    const notification = document.getElementById("copy-notification");
    notification.classList.remove("hidden");
    
    setTimeout(() => {
      notification.classList.add("hidden");
      notification.style.animation = 'none';
      notification.offsetHeight;
      notification.style.animation = null;
    }, 2500);
  });

  // Navigation dans la mini-map
  document.getElementById("mini-map-container").addEventListener("click", function (e) {
    const ratio = (e.clientY - this.getBoundingClientRect().top) / this.clientHeight;
    const newScrollTop = editor.getScrollInfo().height * ratio - editor.getScrollInfo().clientHeight / 2;
    editor.scrollTo(0, newScrollTop);
  });

  function generateRandomID() {
    return Math.random().toString(36).substr(2, 9);
  }
});