export const siteConfig = {
  personal: {
    name: "Mochamad Farid",
    shortName: "RIDZ",
    title: "Informatics Student & Creative Developer",
    tagline: ["PORTONAH", "SENGKOK"], // Multi-line tagline
    university: "Universitas PGRI Wiranegara",
    year: "2023",
    heroImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
  },

  social: {
    github: "https://github.com/ifalfahri",
    linkedin: "https://www.linkedin.com/in/ifalfahri/",
    twitter: "",
    email: "farid@example.com", // Update with real email
  },

  // SEO Metadata
  metadata: {
    siteName: "Mochamad Farid - Portfolio",
    title: "Mochamad Farid | Creative Developer Portfolio",
    description:
      "Portfolio website showcasing creative web development projects by Mochamad Farid, an Informatics student specializing in modern web technologies, interactive design, and immersive user experiences.",
    keywords: [
      "web developer",
      "portfolio",
      "creative developer",
      "frontend developer",
      "Next.js",
      "React",
      "Three.js",
      "GSAP",
      "Framer Motion",
      "UI/UX",
      "Mochamad Farid",
    ],
    author: "Mochamad Farid",
    siteUrl: "https://yoursite.com",
    image: "/og-image.jpg",
  },

  // Skills
  skills: ["Next.js", "Laravel", "Node.js", "Flutter", "React", "TypeScript"],

  // About Section
  about: {
    greeting: "Hai, saya Mochamad Farid.",
    description:
      "Mahasiswa Ilmu Komputer. Fokus membangun website yang fungsional, intuitif, dan menarik.",
    statement: {
      line1: "Motion is not decoration.",
      line2: "It is communication.",
    },
  },

  // CTA Section
  cta: {
    title: "Let's build something unforgettable.",
    buttonText: "Start a Project",
  },

  // Projects Data
  projects: [
    {
      slug: "orderin-qr",
      title: "Orderin QR",
      subtitle: "Fullstack + Mobile App",
      bgImage:
        "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=1200",
      previewImage:
        "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&q=80&w=800",
      description:
        "Sistem pemesanan self-service berbasis QR Code. Mengintegrasikan web interaktif untuk pelanggan di meja dengan aplikasi mobile kasir guna mengelola pesanan secara real-time.",
      tech: [
        "TypeScript",
        "Dart",
        "Flutter",
        "Next.js",
        "PostgreSQL",
        "Supabase",
      ],
      link: "https://github.com/ridztzy/order_in_qr",
    },
    {
      slug: "web-desa-wringinanom",
      title: "Web Desa Wringinanom",
      subtitle: "Information Portal",
      bgImage:
        "https://i.ibb.co.com/4nJ6cp06/Cuplikan-layar-2026-04-30-224400.png",
      previewImage:
        "https://i.ibb.co.com/4nJ6cp06/Cuplikan-layar-2026-04-30-224400.png",
      description:
        "Portal informasi digital desa untuk meningkatkan transparansi layanan masyarakat dan menjadi pusat publikasi konten lokal yang terstruktur dan mudah diakses.",
      tech: ["TypeScript", "Next.js", "Tailwind CSS"],
      link: "https://portal-wringinanom.web.id/",
    },
    {
      slug: "bromoboom",
      title: "Bromoboom",
      subtitle: "Tourism Catalogue",
      bgImage:
        "https://i.ibb.co.com/4nJ6cp06/Cuplikan-layar-2026-04-30-224400.png",
      previewImage:
        "https://i.ibb.co.com/4nJ6cp06/Cuplikan-layar-2026-04-30-224400.png",
      description:
        "Website katalog layanan pariwisata Tour Bromo yang modern dan cepat untuk menampilkan profil destinasi serta informasi paket wisata secara komprehensif.",
      tech: ["TypeScript", "Next.js", "PostgreSQL", "Supabase"],
      link: "https://bromoboom.com",
    },
    {
      slug: "nongki-app",
      title: "Nongki (UI/UX)",
      subtitle: "Mobile App Design",
      bgImage:
        "https://i.ibb.co.com/4nJ6cp06/Cuplikan-layar-2026-04-30-224400.png",
      previewImage:
        "https://i.ibb.co.com/4nJ6cp06/Cuplikan-layar-2026-04-30-224400.png",
      description:
        "Rancangan antarmuka aplikasi pencarian tempat nongkrong terdekat. Berfokus pada kemudahan navigasi, tata letak modern, dan pengalaman pengguna yang intuitif.",
      tech: ["Figma", "UI/UX Design", "Prototyping"],
      link: "https://www.figma.com/design/twiu5ANP9XXOStOobIrtCD/Aplikasi-Nongki-Kita",
    },
    {
      slug: "kasirku",
      title: "Kasirku",
      subtitle: "Point of Sales System",
      bgImage:
        "https://i.ibb.co.com/4nJ6cp06/Cuplikan-layar-2026-04-30-224400.png",
      previewImage:
        "https://i.ibb.co.com/4nJ6cp06/Cuplikan-layar-2026-04-30-224400.png",
      description:
        "Sistem kasir berbasis web untuk mempermudah manajemen transaksi, pencatatan stok barang, dan efisiensi rekapitulasi data penjualan harian.",
      tech: ["PHP Native", "MySQL", "Bootstrap"],
      link: "https://github.com/ridztzy/kasirku",
    },
  ],
};
