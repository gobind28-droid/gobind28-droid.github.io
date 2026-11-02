/* Gobind Singh portfolio — renders everything from data/content.js.
   You shouldn't need to edit this file to add projects or photos. */
(function () {
  'use strict';
  var D = window.PORTFOLIO;
  var main = document.getElementById('main');
  var sidebar = document.getElementById('sidebar');
  var activeFilter = 'All';

  if (!D) {
    main.innerHTML = '<p class="label" style="padding:2rem">Could not load data/content.js. Check it for a missing comma or quote.</p>';
    return;
  }

  /* ---------- helpers ---------- */
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function initials(name) { return name.split(/\s+/).map(function (w) { return w[0]; }).join('').slice(0, 2).toUpperCase(); }
  function list(arr, fn) { return (arr || []).map(fn).join(''); }
  function isLive(status) { return /ongoing|design|progress/i.test(status || ''); }
  function firstImage(p) { var m = (p.media || []).filter(function (x) { return x.type === 'image'; })[0]; return m ? m.src : ''; }
  function blank(p) { return '<div class="blank" aria-hidden="true"><div><b>' + esc(p.dwg || '') + '</b><span class="label">' + esc(p.status || '') + '</span></div></div>'; }
  var hasCad = (D.cad || []).length > 0;

  var modelViewerLoaded = false;
  function ensureModelViewer() {
    if (modelViewerLoaded) return;
    modelViewerLoaded = true;
    var s = document.createElement('script');
    s.type = 'module';
    s.src = 'https://cdn.jsdelivr.net/npm/@google/model-viewer@3.5.0/dist/model-viewer.min.js';
    document.head.appendChild(s);
  }

  /* ---------- sidebar ---------- */
  var routes = [
    { id: 'about', name: 'About' },
    { id: 'projects', name: 'Projects' },
    hasCad ? { id: 'cad', name: 'CAD library' } : null,
    { id: 'experience', name: 'Experience' },
    { id: 'skills', name: 'Skills' },
    { id: 'contact', name: 'Contact' }
  ].filter(Boolean);

  function buildSidebar() {
    var P = D.profile;
    var avatar = P.avatar ? '<img src="' + esc(P.avatar) + '" alt="' + esc(P.name) + '">' : initials(P.name);
    sidebar.innerHTML =
      '<div class="sb-block sb-id">' +
        '<div class="avatar">' + avatar + '</div>' +
        '<div><h1>' + esc(P.name) + '</h1><p class="role">' + esc(P.title) + '</p></div>' +
      '</div>' +
      '<ul class="nav" id="nav">' + routes.map(function (r, i) {
        return '<li><a href="#' + r.id + '" data-route="' + r.id + '">' + r.name + '<span class="label">' + String(i + 1).padStart(2, '0') + '</span></a></li>';
      }).join('') + '</ul>' +
      '<div class="sb-block sb-contact" style="border-top:1px solid var(--line)">' +
        '<div class="label" style="margin-bottom:10px">Links</div>' +
        '<div class="sb-links">' +
          (P.github ? '<a href="' + esc(P.github) + '" target="_blank" rel="noopener">GitHub ↗</a>' : '') +
          (P.linkedin ? '<a href="' + esc(P.linkedin) + '" target="_blank" rel="noopener">LinkedIn ↗</a>' : '') +
          (P.resume ? '<a href="' + esc(P.resume) + '" target="_blank" rel="noopener">Résumé (PDF) ↗</a>' : '') +
          '<a href="mailto:' + esc(P.email) + '">' + esc(P.email) + '</a>' +
        '</div>' +
      '</div>' +
      '<div class="sb-foot"><span class="label">Drawing set GS</span><button class="theme-btn" id="theme" type="button">Theme</button></div>';

    document.getElementById('theme').addEventListener('click', function () {
      var root = document.documentElement;
      var cur = root.getAttribute('data-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      var next = cur === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  function setActive(route) {
    var r = route === 'project' ? 'projects' : route;
    document.querySelectorAll('#nav a').forEach(function (a) {
      if (a.getAttribute('data-route') === r) a.classList.add('active'); else a.classList.remove('active');
    });
  }

  /* ---------- pages ---------- */
  function pageAbout() {
    var P = D.profile;
    var parts = P.name.split(' ');
    var feat = D.projects.filter(function (p) { return p.featured; })[0] || D.projects[0];
    var img = firstImage(feat);
    return '<section class="block hero">' +
        '<div class="label">' + esc(P.title) + ' · ' + esc(P.location || '') + '</div>' +
        '<h2>' + esc(parts[0]) + ' <span>' + esc(parts.slice(1).join(' ')) + '</span></h2>' +
        '<p class="tagline">' + esc(P.tagline) + '</p>' +
        list(P.about, function (t) { return '<p>' + t + '</p>'; }) +
        '<div class="btn-row">' +
          '<a class="btn primary" href="#projects">See the projects</a>' +
          (P.resume ? '<a class="btn" href="' + esc(P.resume) + '" target="_blank" rel="noopener">Résumé ↗</a>' : '') +
          '<a class="btn" href="#contact">Get in touch</a>' +
        '</div>' +
        (P.highlights && P.highlights.length ? '<div class="facts">' + list(P.highlights, function (h) {
          return '<div><span class="label">' + esc(h.label) + '</span><b>' + esc(h.value) + '</b></div>';
        }) + '</div>' : '') +
      '</section>' +
      '<section class="block">' +
        '<div class="sec-head"><h2>Featured</h2><span class="label">DWG ' + esc(feat.dwg) + '</span></div>' +
        '<a class="feature" href="#project/' + esc(feat.id) + '">' +
          '<div class="ph" style="position:relative">' + (img ? '<img src="' + esc(img) + '" alt="' + esc(feat.title) + '">' : blank(feat)) + '</div>' +
          '<div class="txt">' +
            '<span class="label">' + esc(feat.category) + '</span>' +
            '<h3>' + esc(feat.title) + '</h3>' +
            '<p style="margin:0;color:var(--muted)">' + esc(feat.summary) + '</p>' +
            (feat.revisions ? '<p class="label" style="margin:0">Revisions ' + feat.revisions.map(function (r) { return r.rev; }).join(' → ') + '</p>' : '') +
            '<span class="go label" style="margin-top:auto">Open project →</span>' +
          '</div>' +
        '</a>' +
      '</section>';
  }

  function card(p) {
    var img = firstImage(p);
    return '<a class="card" href="#project/' + esc(p.id) + '">' +
      '<div class="cover">' + (img ? '<img src="' + esc(img) + '" alt="' + esc(p.title) + '" loading="lazy">' : blank(p)) + '</div>' +
      '<div class="body">' +
        '<span class="label">' + esc(p.category) + '</span>' +
        '<h3>' + esc(p.title) + '</h3>' +
        '<p class="sub">' + esc(p.summary) + '</p>' +
        '<div class="meta"><span class="label status' + (isLive(p.status) ? ' live' : '') + '">' + esc(p.status) + '</span><span class="label">' + esc(p.dwg) + '</span></div>' +
      '</div></a>';
  }

  function pageProjects() {
    var cats = D.categories || ['All'];
    return '<section class="block">' +
      '<div class="sec-head"><h2>Projects</h2><span class="label">' + D.projects.length + ' sheets</span></div>' +
      '<div class="filters" role="group" aria-label="Filter projects">' + list(cats, function (c) {
        return '<button class="filter" type="button" data-filter="' + esc(c) + '" aria-pressed="' + (c === activeFilter) + '">' + esc(c) + '</button>';
      }) + '</div>' +
      '<div class="grid" id="grid"></div>' +
    '</section>';
  }
  function renderGrid() {
    var g = document.getElementById('grid');
    if (!g) return;
    var items = D.projects.filter(function (p) { return activeFilter === 'All' || p.category === activeFilter; });
    g.innerHTML = items.length ? items.map(card).join('') : '<p class="label">No projects in this category yet.</p>';
  }

  function mediaItem(m, p) {
    if (m.type === 'image') return '<img src="' + esc(m.src) + '" alt="' + esc(m.caption || p.title) + '">';
    if (m.type === 'video') return '<video src="' + esc(m.src) + '" controls playsinline preload="metadata"' + (m.poster ? ' poster="' + esc(m.poster) + '"' : '') + '></video>';
    if (m.type === 'youtube') return '<iframe src="https://www.youtube-nocookie.com/embed/' + esc(m.id) + '" title="' + esc(m.caption || p.title) + '" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>';
    if (m.type === 'model') { ensureModelViewer(); return '<model-viewer src="' + esc(m.src) + '" camera-controls auto-rotate shadow-intensity="1" alt="3D model of ' + esc(p.title) + '"></model-viewer>'; }
    return '';
  }
  function thumb(m, i) {
    var inner = m.type === 'image' ? '<img src="' + esc(m.src) + '" alt="">' : (m.type === 'youtube' ? '<img src="https://i.ytimg.com/vi/' + esc(m.id) + '/mqdefault.jpg" alt="">' : (m.type === 'model' ? '3D' : 'VIDEO'));
    return '<button class="thumb" type="button" data-i="' + i + '" aria-label="Show item ' + (i + 1) + '">' + inner + '</button>';
  }

  function pageProject(id) {
    var idx = -1;
    D.projects.forEach(function (p, i) { if (p.id === id) idx = i; });
    if (idx < 0) return '<p>Project not found. <a href="#projects">Back to projects</a></p>';
    var p = D.projects[idx];
    var media = p.media || [];
    var prev = D.projects[(idx - 1 + D.projects.length) % D.projects.length];
    var next = D.projects[(idx + 1) % D.projects.length];

    var gallery = media.length
      ? '<div class="media-wrap"><div class="viewer" id="viewer">' + mediaItem(media[0], p) + '</div>' +
        '<div class="caption"><span id="cap">' + esc(media[0].caption || '') + '</span><span class="label" id="count">1 / ' + media.length + '</span></div>' +
        (media.length > 1 ? '<div class="thumbs" id="thumbs">' + media.map(thumb).join('') + '</div>' : '') + '</div>'
      : '<div class="viewer" style="aspect-ratio:21/9">' + blank(p) + '</div>';

    return '<section class="block">' +
      '<a class="btn back" href="#projects">← All projects</a>' +
      '<div class="detail-head"><div><span class="label">' + esc(p.category) + '</span><h2>' + esc(p.title) + '</h2>' + (p.subtitle ? '<p class="sub">' + esc(p.subtitle) + '</p>' : '') + '</div></div>' +
      gallery +
      '<article class="sheet">' +
        '<div class="content">' +
          '<p style="font-weight:500">' + esc(p.summary) + '</p>' +
          list(p.description, function (t) { return '<p>' + t + '</p>'; }) +
          (p.revisions ? '<div class="revs"><table><thead><tr><th>Rev</th><th>Change</th><th>Result</th></tr></thead><tbody>' +
            list(p.revisions, function (r) { return '<tr' + (r.current ? ' class="current"' : '') + '><td>' + esc(r.rev) + '</td><td>' + esc(r.change) + '</td><td>' + esc(r.result) + '</td></tr>'; }) +
            '</tbody></table></div>' : '') +
          '<div class="two">' +
            (p.specs && p.specs.length ? '<div><span class="label">Technical specifications</span><ul class="specs">' + list(p.specs, function (s) { return '<li>' + esc(s) + '</li>'; }) + '</ul></div>' : '') +
            '<div class="stack">' +
              (p.tags && p.tags.length ? '<div><span class="label">Tools &amp; methods</span><div class="tags" style="margin-top:10px">' + list(p.tags, function (t) { return '<span class="tag">' + esc(t) + '</span>'; }) + '</div></div>' : '') +
              (p.learning && p.learning.length ? '<div><span class="label">What I learned</span><div class="tags" style="margin-top:10px">' + list(p.learning, function (t) { return '<span class="tag">' + esc(t) + '</span>'; }) + '</div></div>' : '') +
            '</div>' +
          '</div>' +
        '</div>' +
        '<aside class="tb">' +
          '<div><span class="label">Dwg no.</span><span class="v">' + esc(p.dwg) + '</span></div>' +
          (p.revisions ? '<div><span class="label">Revision</span><span class="v">' + esc(p.revisions[p.revisions.length - 1].rev) + '</span></div>' : '') +
          '<div><span class="label">Dates</span><span class="v">' + esc(p.time) + '</span></div>' +
          '<div><span class="label">Status</span><span class="v status' + (isLive(p.status) ? ' live' : '') + '">' + esc(p.status) + '</span></div>' +
          (p.link ? '<div><span class="label">Files</span><span class="v"><a href="' + esc(p.link) + '" target="_blank" rel="noopener">Source ↗</a></span></div>' : '') +
        '</aside>' +
      '</article>' +
      '<nav class="pager" aria-label="More projects">' +
        '<a href="#project/' + esc(prev.id) + '"><span class="label">← Previous</span><b>' + esc(prev.title) + '</b></a>' +
        '<a class="next" href="#project/' + esc(next.id) + '"><span class="label">Next →</span><b>' + esc(next.title) + '</b></a>' +
      '</nav>' +
    '</section>';
  }
  function wireGallery(id) {
    var p = D.projects.filter(function (x) { return x.id === id; })[0];
    var thumbs = document.getElementById('thumbs');
    if (!p || !thumbs) return;
    var media = p.media;
    function show(i) {
      document.getElementById('viewer').innerHTML = mediaItem(media[i], p);
      document.getElementById('cap').textContent = media[i].caption || '';
      document.getElementById('count').textContent = (i + 1) + ' / ' + media.length;
      thumbs.querySelectorAll('.thumb').forEach(function (t, j) { t.setAttribute('aria-current', j === i); });
    }
    thumbs.addEventListener('click', function (e) {
      var b = e.target.closest('.thumb'); if (b) show(+b.getAttribute('data-i'));
    });
    show(0);
  }

  function pageCad() {
    return '<section class="block">' +
      '<div class="sec-head"><h2>CAD library</h2><span class="label">' + D.cad.length + ' models</span></div>' +
      '<div class="grid">' + list(D.cad, function (c) {
        var cover = c.model ? (ensureModelViewer(), '<model-viewer src="' + esc(c.model) + '" camera-controls auto-rotate style="position:absolute;inset:0;width:100%;height:100%" alt="' + esc(c.title) + '"' + (c.image ? ' poster="' + esc(c.image) + '"' : '') + '></model-viewer>')
          : (c.image ? '<img src="' + esc(c.image) + '" alt="' + esc(c.title) + '" loading="lazy">' : '');
        return '<div class="card cad-card">' +
          '<div class="cover">' + cover + '</div>' +
          '<div class="body"><span class="label">' + esc(c.software || '') + '</span><h3>' + esc(c.title) + '</h3>' +
          (c.note ? '<p class="sub">' + esc(c.note) + '</p>' : '') +
          (c.files ? '<div class="meta"><a class="label" href="' + esc(c.files) + '" target="_blank" rel="noopener">Source files ↗</a></div>' : '') +
          '</div></div>';
      }) + '</div></section>';
  }

  function pageExperience() {
    return '<section class="block"><div class="sec-head"><h2>Experience</h2><span class="label">Most recent first</span></div>' +
      '<div class="xp">' + list(D.experience, function (x) {
        return '<article><div class="label">' + esc(x.time) + '</div><div><h3>' + esc(x.role) + '</h3><p class="org">' + esc(x.org) + '</p><ul>' + list(x.points, function (t) { return '<li>' + esc(t) + '</li>'; }) + '</ul></div></article>';
      }) + '</div></section>' +
      '<section class="block"><div class="sec-head"><h2>Education</h2></div>' +
      '<div class="xp">' + list(D.education, function (e) {
        return '<article><div class="label">' + esc(e.time) + '</div><div><h3>' + esc(e.degree) + '</h3><p class="org">' + esc(e.school) + '</p></div></article>';
      }) + '</div></section>';
  }

  function pageSkills() {
    return '<section class="block"><div class="sec-head"><h2>Skills</h2><span class="label">Design · Simulate · Control</span></div>' +
      '<div class="skills">' + list(D.skills, function (s) {
        return '<div class="panel"><span class="label">' + esc(s.group) + '</span><ul style="margin-top:8px">' + list(s.items, function (i) { return '<li>' + esc(i) + '</li>'; }) + '</ul></div>';
      }) + '</div></section>' +
      '<section class="block"><div class="sec-head"><h2>Certifications</h2></div><div class="skills">' +
        list(D.certifications, function (c) {
          return '<div class="panel"><span class="label">' + esc(c.issuer) + '</span><h3>' + esc(c.name) + '</h3>' +
            (c.link ? '<a class="label" href="' + esc(c.link) + '" target="_blank" rel="noopener">View certificate ↗</a>' : '') + '</div>';
        }) +
        (D.extras && D.extras.length ? '<div class="panel"><span class="label">Beyond engineering</span><ul style="margin-top:8px">' + list(D.extras, function (x) { return '<li>' + esc(x) + '</li>'; }) + '</ul></div>' : '') +
      '</div></section>';
  }

  function pageContact() {
    var P = D.profile;
    function row(label, value, href, copyable) {
      return '<div><span class="label">' + label + '</span><span class="v">' + (href ? '<a href="' + esc(href) + '"' + (/^http/.test(href) ? ' target="_blank" rel="noopener"' : '') + '>' + esc(value) + '</a>' : esc(value)) + '</span>' +
        (copyable ? '<button class="copy" type="button" data-copy="' + esc(value) + '">Copy</button>' : '<span></span>') + '</div>';
    }
    return '<section class="block contact"><div class="label">Contact</div><h2 class="big">Let\'s build something that moves.</h2>' +
      '<p style="color:var(--muted);max-width:60ch;margin:0">I\'m applying to master\'s programmes and looking for roles in robotics, mechatronics and mechanical design. Email is the quickest way to reach me.</p>' +
      '<div class="contact-rows">' +
        row('Email', P.email, 'mailto:' + P.email, true) +
        (P.linkedin ? row('LinkedIn', P.linkedin.replace(/^https?:\/\/(www\.)?/, ''), P.linkedin) : '') +
        (P.github ? row('GitHub', P.github.replace(/^https?:\/\/(www\.)?/, ''), P.github) : '') +
        (P.location ? row('Based in', P.location) : '') +
      '</div></section>';
  }

  /* ---------- router ---------- */
  function route() {
    var h = (location.hash || '#about').slice(1);
    var parts = h.split('/');
    var r = parts[0] || 'about';
    var html;
    switch (r) {
      case 'projects': html = pageProjects(); break;
      case 'project': html = pageProject(parts[1]); break;
      case 'cad': html = hasCad ? pageCad() : pageAbout(); break;
      case 'experience': html = pageExperience(); break;
      case 'skills': html = pageSkills(); break;
      case 'contact': html = pageContact(); break;
      default: r = 'about'; html = pageAbout();
    }
    main.innerHTML = '<div class="page">' + html + '</div>';
    setActive(r);
    if (r === 'projects') renderGrid();
    if (r === 'project') wireGallery(parts[1]);
    var titles = { about: '', projects: 'Projects', cad: 'CAD library', experience: 'Experience', skills: 'Skills', contact: 'Contact' };
    var pr = r === 'project' ? (D.projects.filter(function (p) { return p.id === parts[1]; })[0] || {}).title : titles[r];
    document.title = (pr ? pr + ' | ' : '') + D.profile.name + ' | Mechatronics Portfolio';
    window.scrollTo(0, 0);
  }

  main.addEventListener('click', function (e) {
    var f = e.target.closest('.filter');
    if (f) {
      activeFilter = f.getAttribute('data-filter');
      document.querySelectorAll('.filter').forEach(function (b) { b.setAttribute('aria-pressed', b === f); });
      renderGrid();
      return;
    }
    var c = e.target.closest('.copy');
    if (c) {
      var text = c.getAttribute('data-copy');
      var done = function () { c.textContent = 'Copied'; setTimeout(function () { c.textContent = 'Copy'; }, 1500); };
      try { navigator.clipboard.writeText(text).then(done, function () {}); } catch (err) {}
    }
  });

  buildSidebar();
  window.addEventListener('hashchange', route);
  route();
})();
