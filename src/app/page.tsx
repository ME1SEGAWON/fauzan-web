"use client";

import { useEffect } from "react";

const featuredItems = [
  { img: "/tea-ori.jpg", cat: "Minuman", title: "Es Teh Jumbo Original" },
  { img: "/lemon (1).jpg", cat: "Minuman", title: "Es Teh Jumbo Lemon" },
  { img: "/booth.jpeg", cat: "Jasa Foto", title: "Selfie Cermin Cembung" },
  { img: "/tea-ori.jpg", cat: "Minuman", title: "Es Teh Jumbo Original" },
  { img: "/lemon (1).jpg", cat: "Minuman", title: "Es Teh Jumbo Lemon" },
];

export default function Home() {
  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-pill a[href^="#"]');
    const sections: { id: string; el: HTMLElement }[] = [];
    navLinks.forEach((link) => {
      const id = link.getAttribute("href")?.slice(1);
      const section = document.getElementById(id || "");
      if (section) sections.push({ id: id as string, el: section });
    });

    function setActive(id: string) {
      navLinks.forEach((link) => {
        const isMatch = link.getAttribute("href") === "#" + id;
        link.classList.toggle("active", isMatch);
      });
    }

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        const href = link.getAttribute("href");
        if (href) setActive(href.slice(1));
      });
    });

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(entry.target.id);
            }
          });
        },
        { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
      );
      sections.forEach((s) => observer.observe(s.el));
    }
  }, []);

  return (
    <div className="site-home">
      <header className="topbar">
        <div className="container topbar-inner">
          <a href="#beranda" className="brand-bubble" aria-label="Logo">
            <img src="/logo.jpg" alt="Mak Udin" className="brand-logo" />
          </a>

          <div className="nav-wrap">
            <nav className="nav-pill" aria-label="Navigasi utama">
              <a
                href="#beranda"
                className="active"
                aria-label="Beranda"
                title="Beranda"
              >
                <span className="nav-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </span>
              </a>
              <a href="#featured" aria-label="Featured" title="Featured">
                <span className="nav-icon">
                  <svg viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </span>
              </a>
              <a href="#produk" aria-label="Produk" title="Produk">
                <span className="nav-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                </span>
              </a>
              <a href="#flyer" aria-label="Flyer CFD" title="Flyer CFD">
                <span className="nav-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </span>
              </a>
              <a href="#lokasi" aria-label="Lokasi" title="Lokasi">
                <span className="nav-icon">
                  <svg viewBox="0 0 24 24">
                    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                    <line x1="8" y1="2" x2="8" y2="18"></line>
                    <line x1="16" y1="6" x2="16" y2="22"></line>
                  </svg>
                </span>
              </a>
              <a href="#keunggulan" aria-label="Info" title="Info">
                <span className="nav-icon">
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                </span>
              </a>
            </nav>
          </div>

          <a
            href="https://wa.me/6287870062667"
            target="_blank"
            rel="noopener noreferrer"
            className="partner-bubble"
            aria-label="Pesan WA"
          >
            <svg viewBox="0 0 24 24">
              <path d="M7 17L17 7"></path>
              <path d="M9 7h8v8"></path>
            </svg>
          </a>
        </div>
      </header>

      <section className="hero hero-custom-banner" id="beranda">
        <div className="hero-banner-wrapper">
          <img
            src="/promo-header-banner.jpg"
            alt="Es Teh Manis Mak Udin! Segar dan Nikmat!"
            className="hero-banner-img"
          />
          <div className="hero-banner-overlay">
            <div className="sr-only">
              <h1>Es Teh Manis Mak Udin - Segar & Nikmat!</h1>
              <p>
                CFD Depok, Depan Mitra 10 Depok. Cuma 5.000 aja! 100% Gula Asli.
              </p>
            </div>
            <div className="hero-actions-container">
              <div className="hero-actions">
                <a href="#produk" className="btn btn-primary">
                  Mulai Belanja
                </a>
                <a
                  href="https://wa.me/6287870062667"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-hero-outline"
                >
                  PO Acara (WA)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-section">
        <div className="brand-wrapper">
          <div className="brand-content">
            {[...Array(15)].map((_, i) => (
              <span
                key={`b1-${i}`}
                className="font-bold tracking-widest text-gray-300 uppercase text-xs md:text-sm whitespace-nowrap"
              >
                MAK UDIN STORE
              </span>
            ))}
          </div>
          <div className="brand-content" aria-hidden="true">
            {[...Array(15)].map((_, i) => (
              <span
                key={`b2-${i}`}
                className="font-bold tracking-widest text-gray-300 uppercase text-xs md:text-sm whitespace-nowrap"
              >
                MAK UDIN STORE
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="featured-section" id="featured">
        <div className="marquee-wrapper">
          {[0, 1, 2, 3].map((i) => (
            <div
              className="marquee-content"
              key={i}
              aria-hidden={i > 0 ? "true" : undefined}
            >
              {featuredItems.map((item, index) => (
                <a href="#produk" className="featured-item" key={index}>
                  <div className="img-box">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className="featured-cat">{item.cat}</div>
                  <div className="featured-title">{item.title}</div>
                </a>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="flyer-section" id="flyer">
        <div className="container">
          <div className="flyer-header">
            <span className="flyer-label">Info CFD</span>
            <h2 className="flyer-heading">Booth Kami di CFD Depok</h2>
          </div>
          <div className="flyer-container">
            <div className="flyer-wrapper">
              <a
                href="/flyer-cfd.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="flyer-link"
              >
                <img
                  src="/flyer-cfd.jpg"
                  alt="Flyer Mak Udin Store - Es Teh Manis Jumbo dan Jasa Selfie Convex Mirror"
                  className="flyer-img"
                />
                <div className="flyer-overlay-info">
                  <span className="flyer-tag">Lihat Flyer</span>
                </div>
              </a>
            </div>
            <div className="flyer-details">
              <div className="flyer-detail-item">
                <span className="detail-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <h4>Lokasi Booth</h4>
                  <p>Depan Mitra 10 Margonda, CFD Depok</p>
                </div>
              </div>
              <div className="flyer-detail-item">
                <span className="detail-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                <div>
                  <h4>Jadwal Buka</h4>
                  <p>Minggu pagi, 06.00 – 09.00 WIB</p>
                </div>
              </div>
              <div className="flyer-detail-item">
                <span className="detail-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                    <circle cx="12" cy="13" r="4" />
                  </svg>
                </span>
                <div>
                  <h4>Foto Cermin Cembung</h4>
                  <p>Rp5.000 / 3 menit. Gratis buat yang beli Es Teh!</p>
                </div>
              </div>
              <div className="flyer-detail-item">
                <span className="detail-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </span>
                <div>
                  <h4>Chat Mak Udin</h4>
                  <p>Mau tanya menu atau PO buat acara? Langsung aja.</p>
                  <a
                    href="https://wa.me/6287870062667"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flyer-wa-btn"
                  >
                    WhatsApp Sekarang
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="produk">
        <div className="container">
          <div className="cards">
            <a href="#produk" className="card">
              <div className="card-media">
                <img src="/tea-ori.jpg" alt="Es Teh Original" />
              </div>
              <div className="card-body">
                <div className="card-category">Minuman</div>
                <div className="card-title">Es Teh Racikan Mak Udin</div>
              </div>
            </a>

            <a href="#produk" className="card">
              <div className="card-media">
                <img src="/booth.jpeg" alt="Selfie Cermin Cembung" />
              </div>
              <div className="card-body">
                <div className="card-category">Jasa Foto</div>
                <div className="card-title">Selfie Cermin Cembung</div>
              </div>
            </a>

            <a href="#produk" className="card">
              <div className="card-media">
                <img src="/lemon (1).jpg" alt="Es Teh Lemon" />
              </div>
              <div className="card-body">
                <div className="card-category">Tambahan</div>
                <div className="card-title">Topping & Varian Lain</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="info" id="keunggulan">
        <div className="container">
          <div className="info-grid">
            <div className="info-box dark">
              <div className="eyebrow">Kenapa Mak Udin?</div>
              <h3>Es Teh yang Beda</h3>
              <p>
                Pakai 100% gula asli, bukan pemanis buatan. Tehnya diseduh tiap
                pagi, bukan teh sisa kemarin. Porsi jumbo, harga tetap Rp5.000.
                <br />
                <br />
                Mau pesan banyak buat acara? Bisa PO lewat WhatsApp. Atau
                langsung mampir ke booth kami di CFD Depok tiap Minggu pagi.
              </p>
            </div>

            <div className="info-box light" id="aboutme">
              <div className="eyebrow">Tentang</div>
              <h3>Siapa Mak Udin?</h3>
              <p>
                Booth es teh dan spot foto cermin cembung di CFD Depok, buka
                tiap Minggu pagi. Mulai dari iseng jualan, sekarang sudah jadi
                langganan warga Depok yang olahraga pagi.
              </p>

              <div className="social-grid">
                <a
                  href="https://www.tiktok.com/@makudinstore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="TikTok"
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.12-1.02 4.13-2.65 5.51-1.66 1.4-3.83 2.1-6.04 1.82-2.19-.28-4.2-1.38-5.54-3.08-1.36-1.72-1.97-3.92-1.65-6.07.3-2.12 1.46-4.04 3.16-5.34 1.71-1.32 3.91-1.87 6.03-1.54.02.01.03.02.05.03v4.11c-1.04-.15-2.12-.02-3.05.45-.96.47-1.68 1.31-2.01 2.32-.34 1.05-.21 2.21.35 3.15.54.91 1.46 1.53 2.5 1.73 1.05.19 2.16-.01 3.05-.56.9-.56 1.5-1.48 1.72-2.52.09-.43.11-.88.11-1.32V.02z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/6287870062667"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="WhatsApp"
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M12.031 0A12.034 12.034 0 0 0 0 12.034c0 2.123.553 4.195 1.603 5.992L.092 23.518l5.656-1.48A12.022 12.022 0 0 0 12.03 24a12.035 12.035 0 0 0 12.033-12.033A12.036 12.036 0 0 0 12.03 0zm0 22.014c-1.803 0-3.56-.484-5.11-1.4L6.6 20.421l-3.37.882.898-3.284-.216-.346A9.998 9.998 0 0 1 2.016 12.03 10.02 10.02 0 0 1 12.03 2.017a10.021 10.021 0 0 1 10.016 10.017 10.022 10.022 0 0 1-10.015 9.98zm5.5-7.514c-.302-.15-1.782-.878-2.06-.98-.277-.1-.478-.15-.68.15-.202.302-.782.98-.958 1.18-.176.202-.352.228-.654.078-.302-.15-1.272-.468-2.42-1.493-.896-.802-1.502-1.79-1.68-2.092-.177-.302-.02-.465.132-.615.135-.136.302-.352.453-.528.15-.176.202-.302.302-.503.1-.202.05-.378-.025-.528-.076-.15-.68-1.636-.93-2.242-.244-.593-.49-.512-.68-.52-.176-.01-.377-.01-.578-.01-.202 0-.528.076-.804.378-.276.302-1.056 1.03-1.056 2.512 0 1.482 1.082 2.915 1.232 3.116.15.202 2.124 3.242 5.143 4.544.718.31 1.278.495 1.716.634.72.23 1.374.198 1.892.12.58-.088 1.782-.728 2.032-1.432.25-.703.25-1.306.175-1.432-.075-.126-.276-.202-.578-.352z" />
                  </svg>
                </a>
              </div>

              <div className="info-actions">
                <a
                  href="https://wa.me/6287870062667"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hubungi Kami
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lokasi-section" id="lokasi">
        <div className="container">
          <div className="lokasi-header">
            <span className="eyebrow">Lokasi Kami</span>
            <h2>Kunjungi Booth Kami</h2>
            <p>Depan Mitra 10 Margonda, CFD Depok</p>
          </div>
          <div className="map-container">
            <iframe
              src="https://maps.google.com/maps?q=-6.3848713,106.8294192&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
