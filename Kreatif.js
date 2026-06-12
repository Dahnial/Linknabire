/* ===== Set --vh based on actual viewport (mobile browsers fix) ===== */
    (function setVH(){
      const set = () => document.documentElement.style.setProperty('--vh', (window.innerHeight * 0.01) + 'px');
      set();
      window.addEventListener('resize', set);
      window.addEventListener('orientationchange', set);
    })();

    // --- Data Asli ---
    const links = [
      { category: "instagram", search: "@nabire_update", url: "https://instagram.com/nabire_update", title: "@nabire_update", description: "Update terkini Nabire di Instagram", icon: "fab fa-instagram text-pink-500 text-base" },
      { category: "instagram", search: "@infonabire", url: "https://instagram.com/infonabire", title: "@info_nabire", description: "Informasi seputar Nabire", icon: "fab fa-instagram text-pink-500 text-base" },
      { category: "instagram", search: "@kotabalinabire", url: "https://instagram.com/kotabalinabire", title: "@kotabalinabire", description: "jual beli emas", icon: "fab fa-instagram text-pink-500 text-base" },
      { category: "facebook", search: "@nabire_update", url: "https://facebook.com/nabire_update", title: "@nabire_update", description: "Komunitas Nabire di Facebook", icon: "fab fa-facebook text-blue-600 text-base" },
      { category: "facebook", search: "@info_nabire", url: "https://facebook.com/info_nabire", title: "@info_nabire", description: "Berita Nabire di Facebook", icon: "fab fa-facebook text-blue-600 text-base" },
      { category: "tiktok", search: "@nabire_update", url: "https://tiktok.com/@nabire_update", title: "@nabire_update", description: "Video seru Nabire di TikTok", icon: "fab fa-tiktok text-slate-900 text-base" },
      { category: "tiktok", search: "@info_nabire", url: "https://tiktok.com/@info_nabire", title: "@info_nabire", description: "Konten informatif Nabire", icon: "fab fa-tiktok text-slate-900 text-base" },
      { category: "whatsapp", search: "Nabire Update", url: "https://chat.whatsapp.com/DqQhiYup3TbA71VZkn9tfe?mode=ac_c", title: "Nabire Update", description: "Info terkini seputar Nabire", icon: "fab fa-whatsapp text-green-500 text-base group-icon" },
      { category: "whatsapp", search: "Nabire Update 2", url: "https://chat.whatsapp.com/HCok99Fh2DL96LrzGbwUwv?mode=ac_c", title: "Nabire Update 2", description: "Berita dan update Nabire", icon: "fab fa-whatsapp text-green-500 text-base group-icon" },
      { category: "whatsapp", search: "Nabire Update 3", url: "https://chat.whatsapp.com/FVMHMQfNuiGHdx8RzLNXTK", title: "Nabire Update 3", description: "Diskusi komunitas Nabire", icon: "fab fa-whatsapp text-green-500 text-base group-icon" },
      { category: "whatsapp", search: "Toko Emas Kota Bali", url: "https://chat.whatsapp.com/G36NeIB0Vf855BJFHkopv8?mode=ac_c", title: "Toko Emas Kota Bali", description: "Jual beli emas di Nabire", icon: "fab fa-whatsapp text-green-500 text-base group-icon" },
      { category: "whatsapp", search: "Jual Beli Nabire", url: "https://chat.whatsapp.com/ChrdpEQTsPwHztI4VB7Vbt", title: "Jual Beli Nabire", description: "Grup jual beli barang di Nabire", icon: "fab fa-whatsapp text-green-500 text-base group-icon" },
      { category: "whatsapp", search: "Pasar Online Nabire", url: "https://chat.whatsapp.com/Lnv7W7ZFbiY6Tc9CFjPpX4", title: "Pasar Online Nabire", description: "Jual beli online di Nabire", icon: "fab fa-whatsapp text-green-500 text-base group-icon" },
      { category: "whatsapp", search: "Lapak Murah Nabire", url: "https://chat.whatsapp.com/C7Ikhg8LtzZ95DAOONXFQr?mode=ac_c", title: "Lapak Murah Nabire", description: "Penawaran barang murah Nabire", icon: "fab fa-whatsapp text-green-500 text-base group-icon" },
      { category: "whatsapp", search: "Nabire Food Explorers", url: "https://chat.whatsapp.com/IMANII6q5kC6N5gvTDmpcf", title: "Nabire Food Explorers", description: "Komunitas pecinta kuliner Nabire", icon: "fab fa-whatsapp text-green-500 text-base group-icon" },
      { category: "whatsapp", search: "Buka Lapak Nabire", url: "https://chat.whatsapp.com/IqJ7jzIEsfO5dynlcCX11G", title: "Buka Lapak Nabire", description: "Jual beli barang lokal Nabire", icon: "fab fa-whatsapp text-green-500 text-base group-icon" },
      { category: "whatsapp", search: "Barang Elektronik Nabire", url: "https://chat.whatsapp.com/JlNPS4V4r9B4YavESGKAqn", title: "Barang Elektronik Nabire", description: "Jual beli elektronik di Nabire", icon: "fab fa-whatsapp text-green-500 text-base group-icon" },
      { category: "whatsapp", search: "Saluran Loker Nabire", url: "https://whatsapp.com/channel/0029Vb4MRkO4tRrrUtQ3dO3V", title: "Saluran Loker Nabire", description: "Info lowongan kerja Nabire", icon: "fab fa-whatsapp text-green-500 text-base group-icon" },
      { category: "whatsapp", search: "Jamur", url: "https://wa.me/6285255133323?text=Hallo%20Admin%20Jamur%0A%0AKurir%20On/Close%20%3F", title: "Jamur", description: "Jasa kurir Murah", icon: "fab fa-whatsapp text-green-500 text-base group-icon" },
      { category: "whatsapp", search: "Kurir 88", url: "https://wa.me/6285222221394?text=Hallo%20*@Kurir%2088*%0A%0AKurir%20On/Close%20%3F", title: "Kurir 88", description: "Biar kami Yang Panas, anda di rumah saja rebahan", icon: "fab fa-whatsapp text-green-500 text-base group-icon" },
      { category: "whatsapp", search: "Kurir Al-Hafizh", url: "https://wa.me/6285322500792?text=Hallo%20*@KurirAl-hafizh*%0A%0AKurir%20On/Close%20%3F", title: "Kurir Al-Hafizh", description: "On siang dan malam", icon: "fab fa-whatsapp text-green-500 text-base group-icon" },
      { category: "whatsapp", search: "Kuyang Express", url: "https://wa.me/6282346064140?text=Hallo%20Kuyang%20Express%0A%0AKurir%20On/Close%20%3F", title: "Kuyang Express", description: "Melayani person, Cuaca bukan jadi halangan", icon: "fab fa-whatsapp text-green-500 text-base group-icon" },
      { category: "whatsapp", search: "Fibra Kurir", url: "https://wa.me/6282398772514?text=Hallo%20Fibra%20Kurir%0A%0AKurir%20On/Close%20%3F", title: "Fibra Kurir", description: "Gesit Dan Terpercaya", icon: "fab fa-whatsapp text-green-500 text-base group-icon" },
      { category: "whatsapp", search: "Kurir Fatan", url: "https://wa.me/6282297463575?text=Hallo%20KurirFatan%0A%0AKurir%20On/Close%20%3F", title: "Kurir Fatan", description: "Cepat, Tepat dan pastinya Aman", icon: "fab fa-whatsapp text-green-500 text-base group-icon" },
      { category: "whatsapp", search: "Kurir Mas Jamal", url: "https://wa.me/6285344450093?text=Hallo%20Kurir%20Masjamal%0A%0AKurir%20On/Close%20%3F", title: "Kurir Mas Jamal", description: "Melayani Antar jemput Makanan, Belanjaan dan Sayuran", icon: "fab fa-whatsapp text-green-500 text-base group-icon" },
      { category: "whatsapp", search: "Haqi Express", url: "https://wa.me/6285264415722?text=Hallo%20Haqi%20Express%0A%0AKurir%20On/Close%20%3F", title: "Haqi Express", description: "Deskripsi Kurir", icon: "fab fa-whatsapp text-green-500 text-base group-icon" },
      { category: "whatsapp", search: "Kurir Balap", url: "https://wa.me/6285217753043?text=Hallo%20Kurir%20Balap%0A%0AKurir%20On/Close%20%3F", title: "Kurir Balap", description: "Cepat, Tepat, dan Amanah", icon: "fab fa-whatsapp text-green-500 text-base group-icon" },
      { category: "whatsapp", search: "Butik Kurir", url: "https://wa.me/621252252345?text=Hallo%20Admin%0A%0AButik%20Kurir%20On/Close%20%3F", title: "Butik Kurir", description: "Ojek Online dan Delivery", icon: "fab fa-whatsapp text-green-500 text-base group-icon" },
      { category: "whatsapp", search: "Ndoro Nyai", url: "https://wa.me/6282399442511?text=Hallo%20Ndoro%20Nyai%0A%0AKurir%20On/Close%20%3F", title: "Ndoro Nyai", description: "InsyaAllah Amanah", icon: "fab fa-whatsapp text-green-500 text-base group-icon" },
      { category: "whatsapp", search: "Kurir KNH", url: "https://wa.me/6282110070481?text=Hallo%20Admin%20KNH%0A%0AKurir%20On/Close%20%3F", title: "Kurir KNH", description: "Kurir Nabire Hebat", icon: "fab fa-whatsapp text-green-500 text-base group-icon" },
      { category: "web", search: "Nabire Kreatif", url: "https://www.nabirekreatif.com", title: "Nabire Kreatif", description: "Platform kreatif Nabire", icon: "fas fa-link text-blue-500 text-base" },
      { category: "web", search: "Info Nabire", url: "https://www.infonabire.com", title: "Info Nabire", description: "Sumber informasi Nabire", icon: "fas fa-link text-blue-500 text-base" },
      { category: "web", search: "Nabire Net", url: "https://www.nabire.net", title: "Nabire Net", description: "Jaringan informasi Nabire", icon: "fas fa-link text-blue-500 text-base" },
      { category: "web", search: "Nabire News", url: "https://www.nabirenews.com", title: "Nabire News", description: "Berita terbaru Nabire", icon: "fas fa-link text-blue-500 text-base" },
      { category: "web", search: "Kota Bali Nabire", url: "https://www.kotabalinabire.com", title: "Kota Bali Nabire", description: "Toko EMAS KOTA BALI NABIRE", icon: "fas fa-link text-blue-500 text-base" },
      { category: "web", search: "Portal Nabire TV", url: "https://www.nabirekreatif.com/p/portal-nabiretv.html", title: "Portal Nabire Tv", description: "Nobar bersama warga nabire di Portal Nabire Tv", icon: "fas fa-link text-blue-500 text-base" },
      { category: "youtube", search: "Nabire Update", url: "https://youtube.com/@nabire_update", title: "Nabire Update", description: "Channel YouTube update Nabire", icon: "fab fa-youtube text-red-600 text-base" },
      { category: "youtube", search: "Info Nabire", url: "https://youtube.com/@info_nabire", title: "Info Nabire", description: "Video informasi Nabire", icon: "fab fa-youtube text-red-600 text-base" },
      { category: "bio", search: "Nabire Community Bio", url: "https://linktr.ee/nabirecommunity", title: "Nabire Community Bio", description: "Bio link komunitas Nabire", icon: "fas fa-id-card text-purple-500 text-base" },
      { category: "contact", search: "Kontak Pos Oyehe", url: "tel:+6282335509419", title: "Pos Oyehe", description: "Pos keamamnan Oyehe", icon: "fas fa-phone text-green-600 text-base" },
      { category: "contact", search: "Kontak Pos Kalibobo", url: "tel:+62811487 2216", title: "Pos Kalibobo", description: "Pos keamamnan Kalibobo", icon: "fas fa-phone text-green-600 text-base" },
      { category: "contact", search: "Kontak Pos Karang tumaritis", url: "tel:+628114872214", title: "Pos Karang tumaritis", description: "Pos keamamnan karang tumaritis", icon: "fas fa-phone text-green-600 text-base" },
      { category: "contact", search: "Kontak Pos jayanti", url: "tel:+628114872215", title: "Pos Jayanti", description: "Pos keamamnan Jayanti", icon: "fas fa-phone text-green-600 text-base" },
      { category: "contact", search: "Kontak Pos samabusa", url: "tel:+628114872217", title: "Pos samabusa", description: "Pos keamamnan samabusa", icon: "fas fa-phone text-green-600 text-base" },
      { category: "contact", search: "Kontak Pos Damkar PPT", url: "tel:+6282198550001", title: "Pos Damkar", description: "Pos Siaga Dampkar PPT", icon: "fas fa-phone text-green-600 text-base" },
      
      
      { category: "contact", search: "Kontak Admin Nabire", url: "tel:+6281514144442", title: "Kontak Admin Nabire", description: "Hubungi admin untuk info lebih lanjut", icon: "fas fa-phone text-green-600 text-base" },
      { category: "contact", search: "Kontak Jamur", url: "tel:+6285255133323", title: "Kontak Jamur", description: "Jasa kurir Murah", icon: "fas fa-phone text-green-600 text-base" },
      { category: "contact", search: "Kontak Kurir 88", url: "tel:+6285222221394", title: "Kontak Kurir 88", description: "Biar kami Yang Panas, anda di rumah saja rebahan", icon: "fas fa-phone text-green-600 text-base" },
      { category: "contact", search: "Kontak Kurir Al-Hafizh", url: "tel:+6285322500792", title: "Kontak Kurir Al-Hafizh", description: "On siang dan malam", icon: "fas fa-phone text-green-600 text-base" },
      { category: "contact", search: "Kontak Kucing Express", url: "tel:+6282346064140", title: "Kontak Kucing Express", description: "Melayani person, Cuaca bukan jadi halangan", icon: "fas fa-phone text-green-600 text-base" },
      { category: "contact", search: "Kontak Fibra Kurir", url: "tel:+6282398772514", title: "Kontak Fibra Kurir", description: "Gesit Dan Terpercaya", icon: "fas fa-phone text-green-600 text-base" },
      { category: "contact", search: "Kontak Kurir Fatan", url: "tel:+6282297463575", title: "Kontak Kurir Fatan", description: "Cepat, Tepat dan pastinya Aman", icon: "fas fa-phone text-green-600 text-base" },
      { category: "contact", search: "Kontak Kurir Mas Jamal", url: "tel:+6285344450093", title: "Kontak Kurir Mas Jamal", description: "Melayani Antar jemput Makanan, Belanjaan dan Sayuran", icon: "fas fa-phone text-green-600 text-base" },
      { category: "contact", search: "Kontak Haqi Express", url: "tel:+6285264415722", title: "Kontak Haqi Express", description: "Deskripsi Kurir", icon: "fas fa-phone text-green-600 text-base" },
      { category: "contact", search: "Kontak Kurir Balap", url: "tel:+6285217753043", title: "Kontak Kurir Balap", description: "Cepat, Tepat, dan Amanah", icon: "fas fa-phone text-green-600 text-base" },
      { category: "contact", search: "Kontak Butik Kurir", url: "tel:+6281252252345", title: "Kontak Butik Kurir", description: "Ojek Online dan Delivery", icon: "fas fa-phone text-green-600 text-base" },
      { category: "contact", search: "Kontak Ndoro Nyai", url: "tel:+6282399442511", title: "Kontak Ndoro Nyai", description: "InsyaAllah Amanah", icon: "fas fa-phone text-green-600 text-base" },
      { category: "contact", search: "Kontak Kurir KNH", url: "tel:+628211007775", title: "Kontak Kurir KNH", description: "Kurir Nabire Hebat", icon: "fas fa-phone text-green-600 text-base" }
    ];

    const products = [
      { title: "Loker Jaga Konter", description: "Dibutuhkan penjaga konter pulsa + mini ATM daerah Oyehe.", url: "https://wa.me/6281514144442?text=Loker%20Konter", iconClass: "fas fa-store text-blue-500", label: "Loker", labelColor: "bg-blue-600", whatsappNumber: "6281514144442" },
      { title: "Nasi Goreng Jakarta", description: "Menerima pesanan dan delivery area Siriwini & Kalibobo.", url: "https://wa.me/6281514144442?text=Order%20Nasgor", iconClass: "fas fa-utensils text-orange-500", label: "Kuliner", labelColor: "bg-orange-500", whatsappNumber: "6281514144442" },
      { title: "Kurir Nabire", description: "Jasa pengiriman barang & makanan super cepat se-kota Nabire.", url: "https://wa.me/6281514144442?text=Order%20Kurir", iconClass: "fas fa-motorcycle text-emerald-500", label: "Kurir", labelColor: "bg-emerald-600", whatsappNumber: "6281514144442" }
    ];

    let activeCategory = 'all';
    let displayedLinks = 0;
    const LINKS_PER_PAGE = 4;

    const escapeHTML = str => str.replace(/[&<>'"]/g, tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag));

    function showAlert(message) {
      const popup = document.getElementById('failure-popup');
      document.getElementById('failure-message').textContent = message;
      popup.classList.remove('hidden');
    }

    function verifyLogin() {
      const name = document.getElementById('login-name').value.trim();
      const address = document.getElementById('login-address').value.toLowerCase().trim();

      const nabireKeywords = ["nabire", "siriwini", "karang", "mulia", "kalibobo", "oyehe", "nabarua", "tumaritis", "bali", "bumi", "samabusa", "kimi", "sanoba", "wanggar", "sp1", "sp2", "sp3", "waroki", "merdeka"];

      if (!name || !address) {
        alert("Mohon isi nama dan alamat Anda terlebih dahulu!");
        return;
      }

      const isValid = nabireKeywords.some(keyword => address.includes(keyword));

      if (isValid) {
        document.getElementById('login-form').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
        document.getElementById('welcome-message').innerHTML = `<i class="fas fa-user-check text-[10px]"></i> Hai, ${escapeHTML(name)}!`;
        renderProducts();

        const allBtn = document.querySelector('.category-btn');
        showCategory('all', allBtn);
      } else {
        showAlert("Maaf, sistem mendeteksi alamat yang Anda masukkan di luar area Nabire.");
      }
    }

    function renderProducts() {
      const carousel = document.getElementById('product-carousel');
      carousel.innerHTML = products.map(product => `
        <div class="product-card p-3 flex-shrink-0 relative flex flex-col justify-between snap-start">
          <div>
            <div class="w-full h-20 bg-slate-50 rounded-2xl flex items-center justify-center mb-3 border border-slate-100/60">
              <i class="${product.iconClass} text-2xl"></i>
            </div>
            <span class="absolute top-4 right-4 ${product.labelColor} text-white text-[8px] font-black tracking-wider uppercase px-2 py-0.5 rounded-full">${product.label}</span>
            <h3 class="text-[12.5px] font-bold text-slate-800 truncate block w-full text-left px-0.5">${escapeHTML(product.title)}</h3>
            <p class="text-slate-400 text-[10.5px] line-clamp-2 mt-1 leading-snug text-left px-0.5">${escapeHTML(product.description)}</p>
          </div>
          <button onclick="openChat('${product.whatsappNumber}', '${escapeHTML(product.title)}')" class="mt-3 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 py-2 px-1 rounded-lg flex items-center justify-center gap-1.5 w-full text-[10.5px] font-bold">
            <i class="fab fa-whatsapp text-xs"></i> Hubungi WA
          </button>
        </div>
      `).join('');
    }

    function openChat(num, title) {
      const msg = `Halo, saya tertarik dengan info mengenai "${title}" di Website Link Nabire. Bisa minta informasi lengkapnya?`;
      window.open(`https://wa.me/${num}?text=${encodeURIComponent(msg)}`, '_blank');
    }

    function getFilteredLinks() {
      const searchTerm = document.getElementById('search-input').value.toLowerCase();
      return links.filter(link => {
        const catMatch = activeCategory === 'all' || link.category === activeCategory;
        const searchMatch = !searchTerm || link.search.toLowerCase().includes(searchTerm) || link.title.toLowerCase().includes(searchTerm);
        return catMatch && searchMatch;
      });
    }

    function renderLinks(filteredLinks) {
      const container = document.getElementById('links-container');
      container.classList.remove('hidden');
      displayedLinks = Math.min(filteredLinks.length, LINKS_PER_PAGE);

      if (filteredLinks.length === 0) {
        container.innerHTML = `<div class="text-center text-slate-400 text-xs py-12 font-medium">Tidak ada link ditemukan.</div>`;
        document.getElementById('load-more').classList.add('hidden');
        return;
      }

      container.innerHTML = filteredLinks.slice(0, displayedLinks).map(link => `
        <div class="link-card flex items-center gap-3">
          <div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 border border-slate-100">
            <i class="${link.icon}"></i>
          </div>
          <div class="min-w-0 flex-1">
            <a href="${link.url}" target="_blank" class="text-slate-800 font-bold text-[13.5px] hover:text-blue-600 block truncate">${escapeHTML(link.title)}</a>
            <p class="text-slate-400 text-[11.5px] truncate mt-0.5 font-medium">${escapeHTML(link.description)}</p>
          </div>
          <a href="${link.url}" target="_blank" class="text-slate-400 bg-slate-50 p-2 text-xs hover:text-blue-500 hover:bg-blue-50 rounded-lg"><i class="fas fa-arrow-right text-[11px]"></i></a>
        </div>
      `).join('');

      document.getElementById('load-more').classList.toggle('hidden', displayedLinks >= filteredLinks.length);
    }

    function loadMoreLinks() {
      const filteredLinks = getFilteredLinks();
      const nextBatch = Math.min(displayedLinks + LINKS_PER_PAGE, filteredLinks.length);

      const container = document.getElementById('links-container');
      const additionalHTML = filteredLinks.slice(displayedLinks, nextBatch).map(link => `
        <div class="link-card flex items-center gap-3">
          <div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 border border-slate-100">
            <i class="${link.icon}"></i>
          </div>
          <div class="min-w-0 flex-1">
            <a href="${link.url}" target="_blank" class="text-slate-800 font-bold text-[13.5px] hover:text-blue-600 block truncate">${escapeHTML(link.title)}</a>
            <p class="text-slate-400 text-[11.5px] truncate mt-0.5 font-medium">${escapeHTML(link.description)}</p>
          </div>
          <a href="${link.url}" target="_blank" class="text-slate-400 bg-slate-50 p-2 text-xs hover:text-blue-500 hover:bg-blue-50 rounded-lg"><i class="fas fa-arrow-right text-[11px]"></i></a>
        </div>
      `).join('');

      container.insertAdjacentHTML('beforeend', additionalHTML);
      displayedLinks = nextBatch;
      document.getElementById('load-more').classList.toggle('hidden', displayedLinks >= filteredLinks.length);
    }

    function showCategory(category, buttonElement) {
      activeCategory = category;
      document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));

      if(buttonElement) {
        buttonElement.classList.add('active');
        buttonElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
      renderLinks(getFilteredLinks());
    }

    function searchLinks() {
      renderLinks(getFilteredLinks());
    }

    // Perbaikan typo fungsi popup (menghilangkan garis miring terbalik)
    function openPopup() { document.getElementById('popup-form').classList.remove('hidden'); }
    function closePopup() { document.getElementById('popup-form').classList.add('hidden'); }

    function submitForm() {
      const name = document.getElementById('form-name').value.trim();
      const address = document.getElementById('form-address').value.trim();
      const link = document.getElementById('form-link').value.trim();
      const title = document.getElementById('form-title').value.trim();
      const desc = document.getElementById('form-description').value.trim();
      const cat = document.getElementById('form-category').value;

      if (!name || !link || !title) {
        alert('Mohon lengkapi kolom Nama, Judul, dan URL Link!');
        return;
      }
      const text = `Halo Admin, saya ingin mendaftarkan link baru:\n\nNama: ${name}\nAlamat: ${address}\nJudul Link: ${title}\nKategori: ${cat}\nURL Link: ${link}\nDeskripsi: ${desc}`;
      window.open(`https://wa.me/6281514144442?text=${encodeURIComponent(text)}`, '_blank');
      closePopup();
    }
