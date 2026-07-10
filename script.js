(() => {
  "use strict";

  const pageData = {
    home: {
      kicker: "Summer Underwater Community",
      title: "Welcome ARC",
      intro: "Panduan cepat untuk menikmati server ARC dengan nyaman, rapi, dan seru bersama komunitas.",
      actions: [
        { label: "Mulai Guide", page: "discord" },
        { label: "Temp Voice", page: "voice" }
      ],
      cards: [
        {
          icon: "🌊",
          title: "Tentang Server",
          text: "ARC adalah ruang komunitas santai dengan nuansa laut musim panas: bersih, ramah, dan mudah dipakai untuk ngobrol, bermain, mendengar musik, serta membangun circle baru."
        },
        {
          icon: "✨",
          title: "Fitur Utama",
          items: ["Guide channel yang mudah dipahami.", "Music bot untuk menemani aktivitas server.", "Temp voice pribadi yang bisa diatur sendiri.", "Level system untuk member aktif.", "Staff siap membantu saat ada kendala."]
        },
        {
          icon: "🫧",
          title: "Cara Mulai",
          items: ["Baca aturan singkat agar server tetap nyaman.", "Pilih channel sesuai topik supaya obrolan rapi.", "Gunakan command dengan sopan dan tidak spam.", "Hubungi staff jika ada error atau konflik."],
          wide: true
        }
      ]
    },
    discord: {
      kicker: "Basic Server Guide",
      title: "Discord Guide",
      intro: "Kenali channel, mention, rules, dan tips sederhana agar pengalaman di ARC terasa mulus sejak awal.",
      cards: [
        { icon: "💬", title: "Jenis Channel", items: ["Announcement untuk info penting server.", "General chat untuk ngobrol santai.", "Media untuk berbagi gambar, video, atau momen Roblox.", "Voice channel untuk main bareng dan hangout.", "Support untuk bantuan teknis atau laporan."] },
        { icon: "@", title: "Mention", items: ["Gunakan mention hanya saat perlu perhatian langsung.", "Hindari ping massal tanpa alasan jelas.", "Balas pesan dengan reply agar konteks obrolan tetap rapi.", "Jika butuh bantuan, mention role staff sesuai kebutuhan."] },
        { icon: "📌", title: "Rules Singkat", items: ["Hormati semua member.", "Tidak spam, flood, atau promosi sembarangan.", "Jaga bahasa tetap aman untuk komunitas.", "Ikuti arahan staff saat moderasi berlangsung."] },
        { icon: "💡", title: "Tips", items: ["Cek pinned message pada channel penting.", "Gunakan search sebelum bertanya hal yang sering muncul.", "Matikan notifikasi channel yang terlalu ramai.", "Laporkan masalah dengan bukti dan kronologi singkat."] }
      ]
    },
    music: {
      kicker: "Listen Together",
      title: "Music",
      intro: "Putar lagu favorit dengan command yang simpel dan tetap nyaman untuk semua pengguna voice.",
      cards: [
        { icon: "🎵", title: "Cara Memutar Lagu", items: ["Masuk ke voice channel terlebih dahulu.", "Ketik command play di channel bot yang disediakan.", "Gunakan judul lagu atau link yang valid.", "Atur antrean dengan bijak supaya semua member kebagian."] },
        { icon: "/", title: "Command", items: ["play <judul atau link>", "pause", "resume", "skip", "queue", "stop"].map(toCommand) },
        { icon: "🎧", title: "Tips Music", items: ["Jangan spam command play.", "Gunakan queue untuk melihat antrean.", "Skip lagu hanya jika mayoritas setuju.", "Jika bot diam, cek permission dan koneksi voice."], wide: true }
      ]
    },
    voice: {
      kicker: "Private Voice Room",
      title: "Temp Voice",
      intro: "Buat voice room sementara untuk party, ngobrol, atau main bareng dengan kontrol yang jelas.",
      cards: [
        { icon: "➕", title: "Membuat Room", items: ["Masuk ke channel Create Voice.", "Sistem akan membuat room baru otomatis.", "Kamu menjadi owner room selama masih aktif.", "Room akan hilang saat kosong."] },
        { icon: "✏", title: "Rename", items: ["Gunakan menu temp voice atau command rename.", "Pilih nama yang jelas dan sopan.", "Hindari simbol berlebihan agar mudah dicari."] },
        { icon: "🔒", title: "Lock & Unlock", items: ["Lock untuk menutup room dari member baru.", "Unlock untuk membuka room kembali.", "Gunakan saat party ingin fokus atau sedang penuh."] },
        { icon: "👑", title: "Transfer Owner", items: ["Pilih member yang sedang berada di room.", "Transfer owner sebelum kamu keluar jika room masih dipakai.", "Owner baru dapat mengatur room seperti biasa."] },
        { icon: "👥", title: "Member Limit", items: ["Atur limit sesuai kebutuhan party.", "Naikkan limit jika ada teman tambahan.", "Turunkan limit untuk menjaga room tetap nyaman."], wide: true }
      ]
    },
    level: {
      kicker: "Community Progress",
      title: "Level System",
      intro: "Level menunjukkan aktivitas member di server dan memberi reward kecil untuk partisipasi yang sehat.",
      cards: [
        { icon: "⭐", title: "Cara Mendapatkan XP", items: ["Aktif ngobrol di channel yang dihitung XP.", "Ikut event atau aktivitas komunitas.", "Hindari spam karena tidak membantu progress dan bisa terkena moderasi.", "XP bertambah bertahap sesuai cooldown sistem."] },
        { icon: "🏆", title: "Reward", items: ["Role khusus untuk level tertentu.", "Akses warna atau identitas komunitas bila tersedia.", "Prioritas kecil pada event tertentu.", "Pengakuan sebagai member aktif ARC."] }
      ]
    },
    staff: {
      kicker: "People Behind ARC",
      title: "Staff",
      intro: "Staff menjaga server tetap aman, rapi, dan menyenangkan untuk semua member.",
      roles: [
        { name: "Owner", desc: "Mengatur arah server, sistem utama, partnership besar, dan keputusan final komunitas." },
        { name: "Administrator", desc: "Mengelola konfigurasi server, channel, bot, event, dan kebutuhan operasional harian." },
        { name: "Moderator", desc: "Membantu member, menjaga chat tetap nyaman, menangani laporan, dan menegakkan rules." }
      ],
      cards: [
        { icon: "🛟", title: "Kapan Menghubungi Staff", items: ["Ada member melanggar rules.", "Bot atau fitur server bermasalah.", "Butuh klarifikasi aturan.", "Terjadi konflik yang perlu ditengahi."] }
      ]
    },
    faq: {
      kicker: "Quick Help",
      title: "FAQ",
      intro: "Jawaban cepat untuk masalah yang paling sering muncul di server.",
      cards: [
        { icon: "🎶", title: "Music Tidak Berjalan", items: ["Pastikan kamu sudah masuk voice.", "Cek apakah bot punya permission connect dan speak.", "Coba command stop lalu play ulang.", "Jika masih gagal, hubungi staff dengan nama lagu dan waktu kejadian."] },
        { icon: "🔈", title: "Voice Tidak Muncul", items: ["Masuk ulang ke channel Create Voice.", "Cek apakah room lama masih aktif.", "Pastikan aplikasi Discord tidak sedang delay.", "Laporkan jika sistem tidak membuat room setelah beberapa detik."] },
        { icon: "📈", title: "XP Tidak Bertambah", items: ["XP memiliki cooldown.", "Beberapa channel mungkin tidak dihitung.", "Spam tidak mempercepat level.", "Tanyakan staff jika XP berhenti dalam waktu lama."] },
        { icon: "🧭", title: "Hubungi Staff", items: ["Gunakan channel support atau ticket bila tersedia.", "Jelaskan masalah dengan singkat dan jelas.", "Sertakan screenshot jika membantu.", "Tunggu giliran dengan sabar."] }
      ]
    }
  };

  const els = {
    title: document.getElementById("pageTitle"),
    kicker: document.getElementById("pageKicker"),
    intro: document.getElementById("pageIntro"),
    mount: document.getElementById("pageMount"),
    actions: document.getElementById("heroActions"),
    nav: document.getElementById("nav"),
    menu: document.getElementById("menuToggle"),
    sidebar: document.getElementById("sidebar"),
    scrim: document.getElementById("scrim"),
    bubbles: document.getElementById("bubbleField")
  };

  const rendered = new Map();
  let activePage = "home";

  function toCommand(text) {
    return { command: text };
  }

  function createEl(tag, className, text) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text) el.textContent = text;
    return el;
  }

  function createList(items) {
    const list = createEl("ul", "list");
    items.forEach((item) => {
      const li = document.createElement("li");
      const dot = createEl("span", "dot");
      const content = createEl("span");
      if (item && item.command) {
        const command = createEl("span", "command", item.command);
        content.append(command);
      } else {
        content.textContent = item;
      }
      li.append(dot, content);
      list.append(li);
    });
    return list;
  }

  function createCard(card) {
    const article = createEl("article", `card${card.wide ? " is-wide" : ""}`);
    const head = createEl("div", "card-head");
    const icon = createEl("span", "icon", card.icon);
    icon.setAttribute("aria-hidden", "true");
    head.append(icon, createEl("h2", "", card.title));

    const body = createEl("div", "card-body");
    if (card.text) body.append(createEl("p", "", card.text));
    if (card.items) body.append(createList(card.items));
    article.append(head, body);
    return article;
  }

  function createRoles(roles) {
    const article = createEl("article", "card is-wide");
    const head = createEl("div", "card-head");
    const icon = createEl("span", "icon", "⚓");
    icon.setAttribute("aria-hidden", "true");
    head.append(icon, createEl("h2", "", "Role Staff"));

    const body = createEl("div", "card-body");
    const grid = createEl("div", "role-grid");
    roles.forEach((role) => {
      const item = createEl("div", "role");
      item.append(createEl("strong", "", role.name), createEl("span", "", role.desc));
      grid.append(item);
    });
    body.append(grid);
    article.append(head, body);
    return article;
  }

  function buildPage(pageKey) {
    const page = pageData[pageKey] || pageData.home;
    const fragment = document.createDocumentFragment();
    if (page.roles) fragment.append(createRoles(page.roles));
    page.cards.forEach((card) => fragment.append(createCard(card)));
    return fragment;
  }

  function renderActions(actions) {
    els.actions.replaceChildren();
    if (!actions) return;
    const fragment = document.createDocumentFragment();
    actions.forEach((action) => {
      const button = createEl("button", "action", action.label);
      button.type = "button";
      button.dataset.page = action.page;
      fragment.append(button);
    });
    els.actions.append(fragment);
  }

  function setActiveButton(pageKey) {
    els.nav.querySelectorAll(".nav-link").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.page === pageKey);
    });
  }

  function navigate(pageKey, shouldFocus) {
    const page = pageData[pageKey] ? pageKey : "home";
    activePage = page;
    const data = pageData[page];
    els.kicker.textContent = data.kicker;
    els.title.textContent = data.title;
    els.intro.textContent = data.intro;
    renderActions(data.actions);
    setActiveButton(page);

    if (!rendered.has(page)) rendered.set(page, buildPage(page));
    els.mount.replaceChildren(rendered.get(page).cloneNode(true));
    history.replaceState(null, "", `#${page}`);
    closeMenu();
    if (shouldFocus) els.title.focus?.();
  }

  function openMenu() {
    els.sidebar.classList.add("is-open");
    els.scrim.hidden = false;
    els.menu.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    els.sidebar.classList.remove("is-open");
    els.scrim.hidden = true;
    els.menu.setAttribute("aria-expanded", "false");
  }

  function handlePageClick(event) {
    const target = event.target.closest("[data-page]");
    if (!target) return;
    navigate(target.dataset.page, true);
  }

  function createBubbles() {
    const count = matchMedia("(min-width: 760px)").matches ? 20 : 10;
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < count; i += 1) {
      const bubble = createEl("span", "bubble");
      const size = 10 + ((i * 7) % 22);
      bubble.style.setProperty("--size", `${size}px`);
      bubble.style.setProperty("--time", `${9 + (i % 6)}s`);
      bubble.style.setProperty("--delay", `${-(i * 1.4)}s`);
      bubble.style.setProperty("--drift", `${(i % 2 ? 28 : -22) + i}px`);
      bubble.style.left = `${(i * 17) % 94}%`;
      fragment.append(bubble);
    }
    els.bubbles.replaceChildren(fragment);
  }

  els.nav.addEventListener("click", handlePageClick);
  els.actions.addEventListener("click", handlePageClick);
  els.menu.addEventListener("click", () => {
    els.sidebar.classList.contains("is-open") ? closeMenu() : openMenu();
  });
  els.scrim.addEventListener("click", closeMenu);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
  addEventListener("hashchange", () => navigate(location.hash.slice(1) || activePage, false));

  createBubbles();
  navigate(location.hash.slice(1) || "home", false);
})();
