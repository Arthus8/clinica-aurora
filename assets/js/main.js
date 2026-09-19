/* Clínica Aurora — interações locais da página estática.
 * Não há fetch, banco de dados, cookies, armazenamento ou envio de formulário.
 * O carregamento das fotografias externas é feito apenas pelas tags <img>.
 */
"use strict";

(() => {
  const menuButton = document.getElementById("menu-toggle");
  const navigation = document.getElementById("menu-principal");

  if (menuButton && navigation) {
    const closeMenu = (returnFocus = false) => {
      menuButton.setAttribute("aria-expanded", "false");
      navigation.classList.remove("is-open");
      if (returnFocus) menuButton.focus();
    };

    menuButton.addEventListener("click", () => {
      const expanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!expanded));
      navigation.classList.toggle("is-open", !expanded);
    });
    navigation.addEventListener("click", (event) => {
      if (event.target instanceof Element && event.target.closest("a")) closeMenu();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
        closeMenu(true);
      }
    });
    document.addEventListener("click", (event) => {
      if (event.target instanceof Element && !event.target.closest(".site-header")) closeMenu();
    });
    window.matchMedia("(max-width: 760px)").addEventListener("change", () => closeMenu());
    // Sem JS, o menu permanece visível e utilizável. Só recolher após registrar eventos.
    document.documentElement.classList.add("js");
    menuButton.hidden = false;
  }

  const form = document.getElementById("contact-form");
  const submitButton = document.getElementById("submit-button");
  const status = document.getElementById("form-status");
  if (form instanceof HTMLFormElement && submitButton && status) {
    // Este listener é registrado antes de habilitar o botão.
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      // Não ler, montar, enviar, registrar nem armazenar os valores preenchidos.
      status.textContent = "Demonstração concluída. Nenhum dado foi enviado ou armazenado. Não foi criado um agendamento.";
      status.hidden = false;
    });
    // Impede entradas compostas apenas de espaços, sem limitar nomes a letras ASCII.
    for (const field of form.querySelectorAll('input[type="text"]')) {
      field.addEventListener("input", () => {
        field.setCustomValidity(field.value.trim().length < 2
          ? "Digite pelo menos dois caracteres, além de espaços."
          : "");
      });
    }
    form.addEventListener("input", () => {
      status.hidden = true;
      status.textContent = "";
    });
    submitButton.disabled = false;
  }

  const showPhotoFallback = (image) => {
    if (!(image instanceof HTMLImageElement)) return;
    const frame = image.closest(".photo-frame");
    const message = frame?.querySelector(".image-fallback");
    if (frame && message) {
      frame.classList.add("image-failed");
      message.hidden = false;
    }
  };
  // O evento error de imagem não propaga por bubbling; usamos a fase de captura.
  document.addEventListener("error", (event) => showPhotoFallback(event.target), true);
  document.addEventListener("load", (event) => {
    if (!(event.target instanceof HTMLImageElement)) return;
    const frame = event.target.closest(".photo-frame");
    const message = frame?.querySelector(".image-fallback");
    if (frame && message) {
      frame.classList.remove("image-failed");
      message.hidden = true;
    }
  }, true);
  // Cobre imagens cujo erro ocorreu antes da execução deste script com defer.
  document.querySelectorAll(".photo-frame img").forEach((image) => {
    if (image.complete && image.naturalWidth === 0) showPhotoFallback(image);
  });
})();
