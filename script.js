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
          text: "ARC adalah server gaming santai untuk bermain bersama, mencari teman mabar, dan menikmati waktu luang. Di sini member bisa ngobrol, bermain game favorit, mendengarkan musik, serta ikut berbagai aktivitas bersama."
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
        { icon: "📌", title: "Rules Singkat", items: ["Dilarang menghina atau menyerang orang lain (SARA).", "Jangan spam, flood, atau mengganggu chat.", "Toxic boleh bercanda, tapi jangan sampai berlebihan atau bikin orang lain tidak nyaman.", "Dilarang mengirim konten NSFW (foto/video tidak pantas).", "Saling menghargai dan respect semua member."] },
        { icon: "💡", title: "Tips", items: ["Cek pinned message pada channel penting.", "Gunakan search sebelum bertanya hal yang sering muncul.", "Matikan notifikasi channel yang terlalu ramai.", "Laporkan masalah dengan bukti dan kronologi singkat."] }
      ]
    },
    music: {
      kicker: "Listen Together",
      title: "Music",
      intro: "Putar lagu favorit dengan command yang simpel dan tetap nyaman untuk semua pengguna voice.",
      cards: [
        { icon: "🎵", title: "Cara Memutar Lagu", items: ["Masuk ke voice channel terlebih dahulu.", "Ketik command play di channel bot yang disediakan.", "Gunakan judul lagu atau link yang valid.", "Atur antrean dengan bijak supaya semua member kebagian."] },
        { icon: "m!p", title: "Music Command", items: ["m!p <judul/link> - Putar lagu atau masukin ke queue.", "m!pause - Pause lagu.", "m!resume - Lanjutkan lagu.", "m!s - Skip lagu sekarang.", "m!queue / m!q - Lihat antrean lagu."] },
        { icon: "🎧", title: "Tips Music", items: ["Pakai m!p buat request lagu.", "Cek m!queue kalau mau lihat lagu yang lagi ngantri.", "Request lagu bebas, asal jangan bikin queue penuh.", "Kalau bot bermasalah coba tunggu sebentar atau cek VC."] }
      ]
    },
    voice: {
      kicker: "Private Voice Room",
      title: "Temp Voice",
      intro: "Buat voice room sementara untuk party, ngobrol, atau main bareng dengan kontrol yang jelas.",
      cards: [
        { icon: "➕", title: "Buat Channel", items: ["Masuk ke channel Buat Channel untuk membuat room sendiri.", "Room akan dibuat otomatis setelah kamu masuk.", "Kamu jadi owner room dan bisa mengatur room tersebut.", "Room akan otomatis terhapus kalau sudah kosong."] },
        { icon: "✏️", title: "Rename", items: ["Gunakan menu temp voice atau command rename.", "Pilih nama yang jelas dan sopan.", "Hindari simbol berlebihan agar mudah dicari."] },
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
      intro: "Staff membantu menjaga ARC tetap nyaman, rapi, dan seru untuk semua member.",
      roles: [
        { name: "Owner", desc: "Pasep - Mengatur arah server, keputusan utama, dan perkembangan ARC." },
        { name: "Staff", desc: "Dyon, Nnux, dan Napzio - Mengelola server, membantu member, mengatur channel, bot, event, serta menangani masalah yang ada." }
      ],
      cards: [
        { icon: "🛟", title: "Kapan Menghubungi Staff", items: ["Ada member yang melanggar rules.", "Bot atau fitur server bermasalah.", "Butuh bantuan atau penjelasan tentang server.", "Ada masalah yang perlu dibantu selesaikan."] }
      ]
    },
    faq: {
      kicker: "Quick Help",
      title: "FAQ",
      intro: "Jawaban singkat untuk beberapa pertanyaan yang sering muncul di ARC.",
      cards: [
        { icon: "🎶", title: "Music Bermasalah", items: ["Pastikan bot sudah masuk ke voice channel.", "Cek permission bot jika musik tidak berjalan.", "Coba tunggu sebentar jika bot mengalami delay.", "Hubungi staff jika masalah tetap terjadi."] },
        { icon: "🔈", title: "Room Tidak Terbuat", items: ["Pastikan masuk ke channel Buat Channel.", "Tunggu beberapa detik setelah masuk.", "Cek apakah sistem sedang mengalami gangguan.", "Laporkan ke staff jika tetap tidak muncul."] },
        { icon: "📈", title: "XP atau Level Tidak Bertambah", items: ["XP memiliki cooldown agar tetap seimbang.", "Tidak semua aktivitas memberikan XP.", "Jika ada masalah lama, tanyakan staff."] },
        { icon: "⚓", title: "Masalah di Server", items: ["Hubungi staff jika menemukan masalah.", "Jelaskan masalah yang terjadi.", "Berikan bukti jika diperlukan agar lebih mudah dibantu."] }
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
      content.textContent = item;
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
