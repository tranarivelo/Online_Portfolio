// Page d'accueil : grille des projets, CV et formulaire de contact.
(function () {
  const { t, tr, escapeHtml } = Site;
  const CATEGORIES = ["apps", "games", "mods"];

  function projectCard(p) {
    const title = escapeHtml(tr(p.title));
    const media = p.cover
      ? `<img src="assets/img/projects/${p.id}/${p.cover}" alt="" loading="lazy" decoding="async">`
      : `<span class="card-placeholder"><span>${title}</span><small>${escapeHtml(t("projects.noImage"))}</small></span>`;
    return `
      <li>
        <a class="card" href="project.html?id=${encodeURIComponent(p.id)}">
          <span class="card-media">${media}</span>
          <span class="card-body">
            <span class="card-title">${title}</span>
            <span class="card-stack">${p.stack.map(escapeHtml).join(" · ")}</span>
            <span class="card-summary">${escapeHtml(tr(p.summary))}</span>
          </span>
        </a>
      </li>`;
  }

  function renderProjects() {
    const root = document.getElementById("project-groups");
    root.innerHTML = CATEGORIES.map((cat) => {
      const items = PROJECTS.filter((p) => p.category === cat);
      if (!items.length) return "";
      return `
        <section class="project-group" aria-labelledby="cat-${cat}">
          <h3 class="group-title" id="cat-${cat}">
            ${escapeHtml(t("projects.cat." + cat))}
            <span class="group-count">${String(items.length).padStart(2, "0")}</span>
          </h3>
          <ul class="cards">${items.map(projectCard).join("")}</ul>
        </section>`;
    }).join("");
  }

  function timelineItem(item) {
    const meta = [item.org, item.place, tr(item.type)].filter(Boolean).map(escapeHtml).join(" · ");
    return `
      <li class="timeline-item">
        <span class="timeline-period">${escapeHtml(item.period)}</span>
        <div>
          <h4 class="timeline-title">${escapeHtml(tr(item.title))}</h4>
          <p class="timeline-meta">${meta}</p>
          <ul class="timeline-points">${tr(item.points).map((pt) => `<li>${escapeHtml(pt)}</li>`).join("")}</ul>
        </div>
      </li>`;
  }

  function renderCv() {
    document.getElementById("cv-profile").textContent = tr(CV.profile);
    document.getElementById("cv-experience").innerHTML = CV.experience.map(timelineItem).join("");
    document.getElementById("cv-education").innerHTML = CV.education.map(timelineItem).join("");
    document.getElementById("cv-skills").innerHTML = CV.skills
      .map((s) => `<div class="skill-row"><dt>${escapeHtml(tr(s.group))}</dt><dd>${tr(s.items).map(escapeHtml).join(" · ")}</dd></div>`)
      .join("");
  }

  function setupContactLinks() {
    const email = document.getElementById("contact-email");
    email.href = "mailto:" + SITE.email;
    email.textContent = SITE.email;
    document.getElementById("contact-linkedin").href = SITE.linkedin;
    document.getElementById("contact-github").href = SITE.github;
    document.getElementById("cv-download").href = SITE.cvPdf;
  }

  function setupForm() {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");
    const button = form.querySelector("button[type=submit]");

    function setStatus(key, kind) {
      status.textContent = key ? t(key) : "";
      status.dataset.key = key || "";
      status.dataset.kind = kind || "";
    }

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      if (form.elements.botcheck.checked) return;

      if (!SITE.web3formsKey || SITE.web3formsKey.startsWith("YOUR_")) {
        setStatus("contact.notConfigured", "error");
        return;
      }

      button.disabled = true;
      setStatus("contact.sending");
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: SITE.web3formsKey,
            subject: t("contact.subject"),
            from_name: "Portfolio",
            name: form.elements.name.value.trim(),
            email: form.elements.email.value.trim(),
            message: form.elements.message.value.trim(),
          }),
        });
        const result = await response.json();
        if (!response.ok || !result.success) throw new Error(result.message);
        form.reset();
        setStatus("contact.success", "success");
      } catch (err) {
        setStatus("contact.error", "error");
      } finally {
        button.disabled = false;
      }
    });

    // Un message déjà affiché suit le changement de langue.
    Site.onLangChange(() => setStatus(status.dataset.key, status.dataset.kind));
  }

  Site.onLangChange(() => {
    renderProjects();
    renderCv();
  });

  document.addEventListener("DOMContentLoaded", () => {
    setupContactLinks();
    setupForm();
    Site.start();
  });
})();
