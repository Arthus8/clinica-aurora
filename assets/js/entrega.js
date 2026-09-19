/* Editor local do PDF de entrega. Não faz upload, requisições ou persistência. */
"use strict";
(() => {
  const form = document.getElementById("delivery-form");
  const updateButton = document.getElementById("update-delivery");
  const printButton = document.getElementById("print-delivery");
  const status = document.getElementById("editor-status");
  if (!(form instanceof HTMLFormElement) || !updateButton || !printButton || !status) return;

  const value = (id) => document.getElementById(id).value.trim();
  const validateUrl = (id, githubOnly = false) => {
    const field = document.getElementById(id);
    field.setCustomValidity("");
    if (!field.value.trim()) return !field.required;
    try {
      const url = new URL(field.value.trim());
      if (url.protocol !== "https:" || url.username || url.password) throw new Error("HTTPS obrigatório.");
      if (githubOnly && (url.hostname !== "github.com" || url.pathname.split("/").filter(Boolean).length < 2)) {
        throw new Error("Use o link de um repositório, não apenas o perfil.");
      }
      return true;
    } catch {
      field.setCustomValidity(githubOnly ? "Informe o endereço HTTPS de um repositório em github.com, incluindo usuário e repositório." : "Informe um endereço HTTPS válido, sem credenciais na URL.");
      return false;
    }
  };
  const setText = (id, text) => { document.getElementById(id).textContent = text; };
  const setLink = (id, url) => {
    const target = document.getElementById(id);
    const link = document.createElement("a");
    link.href = url;
    link.textContent = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    target.replaceChildren(link);
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    printButton.disabled = true;
    const validGithub = validateUrl("github", true);
    const validVideo = validateUrl("video");
    const validOnline = validateUrl("online");
    const nameField = document.getElementById("aluno");
    nameField.setCustomValidity(value("aluno").length < 2 ? "Preencha seu nome, além de espaços." : "");
    if (!form.reportValidity() || !validGithub || !validVideo || !validOnline) return;
    setText("out-aluno", value("aluno"));
    setText("out-matricula", value("matricula") || "Não informada");
    setText("out-disciplina", value("disciplina") || "Não informada");
    setText("out-professor", value("professor") || "Não informado(a)");
    setLink("out-github", value("github"));
    setLink("out-video", value("video"));
    const online = value("online");
    document.getElementById("online-card").hidden = !online;
    if (online) setLink("out-online", online);
    document.getElementById("pending-warning").hidden = true;
    const date = new Intl.DateTimeFormat("pt-BR").format(new Date());
    setText("out-verification", `Em ${date}, o(a) aluno(a) declarou ter conferido o acesso aos links em janela anônima e a duração máxima de 5 minutos do vídeo. Esta ferramenta não verifica permissões de acesso automaticamente.`);
    status.textContent = "Documento atualizado. Use Salvar em PDF e confira o arquivo antes de entregar.";
    printButton.disabled = false;
  });
  form.addEventListener("input", (event) => {
    printButton.disabled = true;
    status.textContent = "Há alterações ainda não aplicadas. Atualize o documento antes de salvar.";
    if (event.target instanceof HTMLInputElement) event.target.setCustomValidity("");
  });
  printButton.addEventListener("click", () => {
    if (!printButton.disabled) window.print();
  });
  updateButton.disabled = false;
})();
