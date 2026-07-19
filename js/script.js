(function () {
  var body = document.body;
  var toggle = document.getElementById("modeToggle");
  var titleBlockValue = document.getElementById("titleBlockValue");
  var heroModeWord = document.getElementById("heroModeWord");
  var bioText = document.getElementById("bioText");
  var skillsGrid = document.getElementById("skillsGrid");
  var projectsGrid = document.getElementById("projectsGrid");
  var resumeLink = document.getElementById("resumeLink");

  var currentMode = "mech";
  var mediaIndex = {}; // project id -> current media index shown on its card

  function slugify(str) {
    return String(str).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }

  function projectId(p) {
    return p.id || slugify(p.title);
  }

  function renderSkills(mode) {
    var groups = CONTENT[mode].skills;
    skillsGrid.innerHTML = groups.map(function (g) {
      var chips = g.items.map(function (i) {
        return '<span class="skill-chip">' + i + '</span>';
      }).join("");
      return (
        '<div class="skill-group">' +
          '<div class="skill-group-title">' + g.group + '</div>' +
          '<div class="skill-chips">' + chips + '</div>' +
        '</div>'
      );
    }).join("");
  }

  function projectLinks(links) {
    if (!links) return "";
    var map = { report: "Report", files: "Files", repo: "Repo", viewer: "3D view" };
    return Object.keys(map).filter(function (k) { return links[k]; }).map(function (k) {
      return '<a class="project-link" href="' + links[k] + '" target="_blank" rel="noopener">' + map[k] + ' &rarr;</a>';
    }).join("");
  }

  function youtubeEmbedUrl(url) {
    var m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([A-Za-z0-9_-]{6,})/);
    return m ? "https://www.youtube.com/embed/" + m[1] : null;
  }

  function renderMediaItem(item) {
    if (!item) return "";
    if (item.type === "video") {
      var yt = youtubeEmbedUrl(item.src);
      if (yt) {
        return '<iframe class="project-media-frame" src="' + yt + '" title="Project demo video" ' +
               'frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
      }
      return '<video class="project-media-frame" src="' + item.src + '" controls muted playsinline preload="metadata"></video>';
    }
    return '<img class="project-media-frame" src="' + item.src + '" alt="" loading="lazy">';
  }

  function buildThumb(p, id, tag) {
    var media = p.media || [];
    if (media.length === 0) {
      return (
        '<div class="project-thumb" aria-hidden="true"><span>' + tag + '</span></div>'
      );
    }
    var idx = mediaIndex[id] || 0;
    if (idx >= media.length) idx = 0;
    var nav = media.length > 1 ? (
      '<button type="button" class="media-nav media-nav--prev" onclick="__cycleProjectMedia(\'' + id + '\', -1)" aria-label="Previous media">&#8249;</button>' +
      '<button type="button" class="media-nav media-nav--next" onclick="__cycleProjectMedia(\'' + id + '\', 1)" aria-label="Next media">&#8250;</button>' +
      '<div class="media-dots">' + media.map(function (_, i) {
        return '<span class="media-dot' + (i === idx ? ' media-dot--active' : '') + '"></span>';
      }).join("") + '</div>'
    ) : "";
    return (
      '<div class="project-thumb project-thumb--media">' +
        renderMediaItem(media[idx]) +
        nav +
      '</div>'
    );
  }

  function renderProjects(mode) {
    var items = PROJECTS.filter(function (p) { return p.mode === mode; });
    projectsGrid.innerHTML = items.map(function (p) {
      var id = projectId(p);
      var tools = p.tools.map(function (t) { return '<span class="tool-chip">' + t + '</span>'; }).join("");
      return (
        '<article class="project-card" id="project-' + id + '">' +
          buildThumb(p, id, p.tag) +
          '<div class="project-body">' +
            '<div class="project-tag">' + p.tag + '</div>' +
            '<h3 class="project-title">' + p.title + '</h3>' +
            '<p class="project-summary">' + p.summary + '</p>' +
            '<div class="project-tools">' + tools + '</div>' +
            '<div class="project-links">' + projectLinks(p.links) + '</div>' +
          '</div>' +
        '</article>'
      );
    }).join("");
  }

  window.__cycleProjectMedia = function (id, delta) {
    var proj = PROJECTS.find(function (p) { return projectId(p) === id; });
    if (!proj || !proj.media || proj.media.length === 0) return;
    var len = proj.media.length;
    var cur = mediaIndex[id] || 0;
    mediaIndex[id] = (cur + delta + len) % len;
    renderProjects(currentMode);
  };

  function applyMode(mode) {
    currentMode = mode;
    var c = CONTENT[mode];
    body.setAttribute("data-mode", mode);
    toggle.setAttribute("aria-checked", mode === "fin" ? "true" : "false");
    titleBlockValue.textContent = c.titleBlockValue;
    heroModeWord.textContent = c.heroWord;
    bioText.textContent = c.bio;
    resumeLink.setAttribute("href", c.resume.href);
    resumeLink.textContent = c.resume.label;
    renderSkills(mode);
    renderProjects(mode);
  }

  toggle.addEventListener("click", function () {
    var next = body.getAttribute("data-mode") === "mech" ? "fin" : "mech";
    applyMode(next);
  });

  function scrollToHashProject() {
    var hash = window.location.hash.replace("#", "");
    if (!hash) return;
    var el = document.getElementById("project-" + hash);
    if (!el) return;
    setTimeout(function () {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.classList.add("project-card--linked");
      setTimeout(function () { el.classList.remove("project-card--linked"); }, 2600);
    }, 250);
  }

  var urlMode = new URLSearchParams(window.location.search).get("mode");
  var initialMode = (urlMode === "fin" || urlMode === "mech") ? urlMode : "mech";
  applyMode(initialMode);
  scrollToHashProject();
})();
