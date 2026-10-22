// Page projet : rendu d'un projet à partir de project.html?id=<id>.
(function () {
  const { t, tr, escapeHtml } = Site;
  const id = new URLSearchParams(location.search).get("id");
  const index = PROJECTS.findIndex((p) => p.id === id);
  const project = PROJECTS[index];
  let images = [];
  let current = 0;

  function imgPath(file) {
    return `assets/img/projects/${project.id}/${file}`;
  }

  function metaRow(labelKey, value) {
    return value ? `<div><dt>${escapeHtml(t(labelKey))}</dt><dd>${escapeHtml(value)}</dd></div>` : "";
  }

  function render() {
    const root = document.getElementById("project");

    if (!project) {
      document.title = "Tiavina Ranarivelo";
      root.innerHTML = `<p class="project-missing">${escapeHtml(t("project.notFound"))}</p>`;
      return;
    }

    const title = tr(project.title);
    document.title = `${title} — Tiavina Ranarivelo`;
    document.querySelector('meta[name="description"]').setAttribute("content", tr(project.summary));

    const highlights = tr(project.highlights);
    const paragraphs = tr(project.description);
    images = project.images.map(imgPath);

    const prev = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
    const next = PROJECTS[(index + 1) % PROJECTS.length];

    root.innerHTML = `
      <header class="project-head">
        <p class="eyebrow">${escapeHtml(t("projects.cat." + project.category))}</p>
        <h1 class="project-title">${escapeHtml(title)}</h1>
        <p class="project-summary">${escapeHtml(tr(project.summary))}</p>
        <dl class="project-meta">
          ${metaRow("project.stack", project.stack.join(" · "))}
          ${metaRow("project.context", tr(project.context))}
          ${metaRow("project.year", project.year)}
        </dl>
      </header>

      ${images.length
        ? `<button class="project-hero" type="button" data-index="0"><img src="${images[0]}" alt="${escapeHtml(title)}" fetchpriority="high"></button>`
        : `<div class="project-hero card-placeholder"><span>${escapeHtml(title)}</span><small>${escapeHtml(t("projects.noImage"))}</small></div>`}

      <div class="project-body">
        <div class="prose">
          ${paragraphs.map((para) => `<p>${escapeHtml(para)}</p>`).join("")}
        </div>
        <aside class="project-side">
          ${highlights.length
            ? `<h2 class="cv-label">${escapeHtml(t("project.highlights"))}</h2>
               <ul class="highlights">${highlights.map((h) => `<li>${escapeHtml(h)}</li>`).join("")}</ul>`
            : ""}
          ${project.links.length
            ? `<h2 class="cv-label">${escapeHtml(t("project.links"))}</h2>
               <ul class="project-links">${project.links
                 .map((l) => `<li><a class="link" href="${escapeHtml(l.url)}" target="_blank" rel="noopener">${escapeHtml(tr(l.label))} ↗</a></li>`)
                 .join("")}</ul>`
            : ""}
        </aside>
      </div>

      ${project.video
        ? `<section class="project-section">
             <h2 class="cv-label">${escapeHtml(t("project.video"))}</h2>
             <div class="video"><iframe src="${escapeHtml(project.video)}" title="${escapeHtml(title)}" loading="lazy" allow="fullscreen; picture-in-picture" allowfullscreen></iframe></div>
           </section>`
        : ""}

      ${images.length > 1
        ? `<section class="project-section">
             <h2 class="cv-label">${escapeHtml(t("project.gallery"))}</h2>
             <ul class="gallery">${images
               .slice(1)
               .map((src, i) => `<li><button type="button" data-index="${i + 1}"><img src="${src}" alt="${escapeHtml(title)} — ${i + 2}" loading="lazy" decoding="async"></button></li>`)
               .join("")}</ul>
           </section>`
        : ""}

      <nav class="project-nav" aria-label="Projets">
        <a href="project.html?id=${encodeURIComponent(prev.id)}">
          <span class="eyebrow">← ${escapeHtml(t("project.prev"))}</span>
          <span class="project-nav-title">${escapeHtml(tr(prev.title))}</span>
        </a>
        <a href="project.html?id=${encodeURIComponent(next.id)}" class="is-next">
          <span class="eyebrow">${escapeHtml(t("project.next"))} →</span>
          <span class="project-nav-title">${escapeHtml(tr(next.title))}</span>
        </a>
      </nav>`;
  }

  // Visionneuse d'images
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = lightbox.querySelector("img");
  const lightboxCount = lightbox.querySelector(".lightbox-count");

  function show(i) {
    current = (i + images.length) % images.length;
    lightboxImg.src = images[current];
    lightboxImg.alt = `${tr(project.title)} — ${current + 1}`;
    lightboxCount.textContent = `${current + 1} / ${images.length}`;
    lightbox.classList.toggle("is-single", images.length < 2);
  }

  document.getElementById("project").addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-index]");
    if (!trigger) return;
    show(Number(trigger.dataset.index));
    lightbox.showModal();
  });

  lightbox.addEventListener("click", (event) => {
    const action = event.target.closest("[data-action]")?.dataset.action;
    if (action === "close" || event.target === lightbox) lightbox.close();
    else if (action === "prev") show(current - 1);
    else if (action === "next") show(current + 1);
  });

  lightbox.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") show(current - 1);
    if (event.key === "ArrowRight") show(current + 1);
  });

  Site.onLangChange(render);
  document.addEventListener("DOMContentLoaded", Site.start);
})();
