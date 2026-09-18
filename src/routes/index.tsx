import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Languages,
  MapPin,
  Menu,
  Scale,
  ShieldCheck,
  Stethoscope,
  Mail,
  Phone,
} from "lucide-react";
import heroImage from "@/assets/migrant-center-hero.jpg";
import Logo from "@/assets/logo.png";
import LogoWhite from "@/assets/logo-white.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Migran Center UNPRI | Siap Kerja, Siap Mendunia" },
      {
        name: "description",
        content:
          "Pusat layanan terpadu Pekerja Migran Indonesia untuk pelatihan, sertifikasi, penempatan aman, dan perlindungan menyeluruh.",
      },
      { property: "og:title", content: "Migran Center Universitas Prima Indonesia" },
      {
        property: "og:description",
        content:
          "Menyiapkan tenaga kerja profesional, unggul, global, dan terlindungi dari Sumatera Utara.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const missions = [
  [
    "Layanan terpadu",
    "Rekrutmen, pelatihan kompetensi, pemeriksaan kesiapan, hingga penempatan yang aman dan legal.",
  ],
  [
    "Kompetensi global",
    "Meningkatkan keterampilan medium-high skill di sektor strategis sesuai standar internasional.",
  ],
  [
    "Perlindungan menyeluruh",
    "Pendampingan hukum dari pra-penempatan, masa penempatan, purna penempatan, hingga kepulangan.",
  ],
  [
    "Integrasi pendidikan",
    "Menghubungkan perguruan tinggi, Balai Latihan Kerja, dan sistem penempatan nasional.",
  ],
  [
    "Edukasi masyarakat",
    "Sosialisasi peluang dan prosedur migrasi aman bagi masyarakat Sumatera Utara dan sekitarnya.",
  ],
  [
    "Kemitraan strategis",
    "Kolaborasi dengan pemerintah, lembaga internasional, dan industri global.",
  ],
  [
    "Tata kelola nasional",
    "Mendukung transformasi penempatan PMI sesuai arah kebijakan nasional Presiden RI.",
  ],
];

const services = [
  {
    icon: GraduationCap,
    title: "Pelatihan & Sertifikasi",
    text: "Bahasa asing, soft skill, kurikulum profesi, dan ujian kompetensi berstandar global.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Penempatan & Job Matching",
    text: "Informasi peluang kerja, basis data PMI, pendampingan, dan koneksi ke agensi resmi.",
  },
  {
    icon: Scale,
    title: "Perlindungan & Konseling",
    text: "Edukasi hak pekerja, konseling, literasi keuangan, dan dukungan sebelum hingga setelah penempatan.",
  },
  {
    icon: Handshake,
    title: "Kerja Sama Global",
    text: "Jejaring pemerintah, perguruan tinggi, industri, dan lembaga internasional yang tepercaya.",
  },
];

const people = [
  {
    name: "Kristina L. Silalahi, S.Kep., Ners, M.Kep.",
    role: "Direktur Migran Center",
    pos: "0% 0%",
  },
  {
    name: "Junita Sari Puspa Bu’ulolo, A.Md.Kep.",
    role: "Informasi, Penempatan & Job Matching",
    pos: "50% 0%",
  },
  {
    name: "Luthfiah Ramadhani, S.S.",
    role: "Pelatihan, Sertifikasi & Administrasi",
    pos: "100% 0%",
  },
  {
    name: "Yan Raja David Hamonangan Damanik, S.E., M.M.",
    role: "Pelatihan, Sertifikasi & Administrasi",
    pos: "0% 100%",
  },
  {
    name: "Dr. Emir Syarif Fatahillah Pakpahan, S.H., M.H.",
    role: "Perlindungan, Konseling & Kerja Sama",
    pos: "50% 100%",
  },
  {
    name: "Myrna Pratiwi Nasution, S.P., M.P.",
    role: "Perlindungan, Konseling & Kerja Sama",
    pos: "100% 100%",
  },
];

const programs = [
  {
    icon: Stethoscope,
    title: "Caregiver & Home Care",
    meta: "Pendaftaran dibuka",
    text: "Kelas persiapan kerja layanan kesehatan dan pendampingan lansia.",
  },
  {
    icon: Languages,
    title: "Bahasa Asing Profesional",
    meta: "Kelas baru",
    text: "Komunikasi kerja praktis untuk kebutuhan penempatan internasional.",
  },
  {
    icon: ShieldCheck,
    title: "Orientasi Migrasi Aman",
    meta: "Wajib peserta",
    text: "Pemahaman kontrak, hak pekerja, keuangan, dan prosedur keberangkatan.",
  },
];

function Brand() {
  return (
    <a
      href="#beranda"
      className="flex shrink-0 items-center gap-3"
      aria-label="Migran Center UNPRI"
    >
      <img src={Logo} alt="Logo" className="h-18" />
      <span className="border-l-2 border-primary pl-3 text-[11px] font-extrabold leading-[1.05] text-foreground">
        MIGRAN
        <br />
        CENTER
      </span>
    </a>
  );
}

function Index() {
  const director = people[0];
  if (!director) return null;

  return (
    <main id="beranda" className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/70 bg-background/92 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-5 px-5 lg:px-8">
          <Brand />
          <nav
            className="hidden items-center gap-5 text-[13px] font-semibold text-muted-foreground xl:flex"
            aria-label="Navigasi utama"
          >
            {[
              ["Tentang", "tentang"],
              ["Layanan", "layanan"],
              ["Info Program", "program"],
              ["Program Saya", "program-saya"],
              ["Berita", "berita"],
              ["Album", "album"],
              ["Pengumuman", "pengumuman"],
              ["Mitra", "mitra"],
              ["FAQ", "faq"],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`} className="transition-colors hover:text-primary">
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#verifikasi"
            className="hidden items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:flex"
          >
            Konsultasi Sekarang
          </a>
          <details className="relative xl:hidden">
            <summary
              className="grid size-10 cursor-pointer list-none place-items-center rounded-xl border border-border bg-card"
              aria-label="Buka menu"
            >
              <Menu className="size-5" />
            </summary>
            <div className="absolute right-0 top-12 w-64 rounded-2xl border border-border bg-card p-3 shadow-xl">
              {[
                "Tentang",
                "Layanan",
                "Info Program",
                "Program Saya",
                "Berita",
                "Album",
                "Pengumuman",
                "Mitra",
                "FAQ",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
                  className="block rounded-lg px-3 py-2 text-sm font-semibold hover:bg-muted"
                >
                  {item}
                </a>
              ))}
            </div>
          </details>
        </div>
      </header>

      <section className="relative h-screen  bg-hero" aria-labelledby="hero-title">
        <img
          src={heroImage}
          width={1600}
          height={1000}
          alt="Calon tenaga kerja profesional Indonesia di pusat pelatihan modern"
          className="absolute inset-0 size-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto flex min-h-[710px] max-w-7xl items-center px-5 py-20 lg:px-8">
          <div className="max-w-2xl  mt-28">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-background/85 px-4 py-2 text-xs font-extrabold uppercase text-primary shadow-sm backdrop-blur">
              <span /> Universitas Prima Indonesia
            </p>
            <h1
              id="hero-title"
              className="text-4xl font-extrabold leading-[1.08] sm:text-6xl lg:text-7xl"
            >
              Siap kerja.
              <br />
              <span className="text-primary">Siap mendunia.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg font-medium leading-relaxed text-foreground/75 sm:text-xl">
              Pusat layanan terpadu untuk menyiapkan Pekerja Migran Indonesia yang unggul,
              profesional, aman, dan terlindungi.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#program"
                className="inline-flex items-center gap-2 rounded-xl bg-foreground px-6 py-3.5 text-sm font-bold text-background transition-transform hover:-translate-y-0.5"
              >
                Temukan Program
              </a>
              <a
                href="#tentang"
                className="rounded-xl border border-border bg-background/85 px-6 py-3.5 text-sm font-bold backdrop-blur hover:bg-background"
              >
                Pelajari Visi Kami
              </a>
            </div>
            <div className="mt-12 flex flex-wrap gap-7 border-t border-foreground/15 pt-7">
              <div>
                <strong className="block text-3xl font-extrabold">500.000</strong>
                <span className="text-xs font-bold uppercase text-muted-foreground">
                  Target tenaga profesional
                </span>
              </div>
              <div>
                <strong className="block text-3xl font-extrabold">2026–2029</strong>
                <span className="text-xs font-bold uppercase text-muted-foreground">
                  Periode strategis
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="layanan" className="section-pad bg-background">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Layanan satu pintu</p>
              <h2>Dari persiapan hingga pulang dengan aman.</h2>
            </div>
            <p>
              Setiap tahap perjalanan kerja Anda didampingi oleh tim yang kompeten dan terhubung
              dengan ekosistem nasional.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, text }, i) => (
              <article key={title} className="service-card">
                <span className="mb-8 flex size-12 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <Icon className="size-6" />
                </span>
                <span className="text-xs font-extrabold text-primary">0{i + 1}</span>
                <h3 className="mt-2 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="tentang" className="section-pad bg-warm">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
          <div>
            <p className="eyebrow">Visi kami</p>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
              Pusat keunggulan PMI dari Sumatera Utara untuk dunia.
            </h2>
            <blockquote className="mt-8 border-l-4 border-primary pl-6 text-lg font-semibold leading-relaxed text-foreground/80">
              “Menjadi Pusat Layanan Terpadu Pekerja Migran Indonesia yang Unggul, Global,
              Profesional, dan Terlindungi Berbasis Socio-Technopreneurship di Sumatera Utara untuk
              menyiapkan 500.000 tenaga kerja profesional pada periode 2026–2029.”
            </blockquote>
          </div>
          <div>
            <p className="eyebrow">Tujuh misi utama</p>
            <div className="mt-5 divide-y divide-border">
              {missions.map(([title, text], i) => (
                <div key={title} className="grid grid-cols-[44px_1fr] gap-4 py-5">
                  <span className="font-extrabold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-bold">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="program" className="section-pad bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="section-heading border-background/15">
            <div>
              <p className="eyebrow text-highlight">Program unggulan</p>
              <h2>Kompetensi yang dibutuhkan pasar global.</h2>
            </div>
            <p className="text-background/60">
              Program lain seperti Nurse, Welder, Hospitality, Manufaktur, IT, tenaga pendidik, dan
              industri akan segera tersedia.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {programs.map(({ icon: Icon, title, meta, text }) => (
              <article
                key={title}
                className="rounded-2xl border border-background/10 bg-background/5 p-7"
              >
                <Icon className="size-7 text-highlight" />
                <p className="mt-8 text-xs font-bold uppercase text-highlight">{meta}</p>
                <h3 className="mt-2 text-2xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-background/60">{text}</p>
                <a href="#kontak" className="mt-7 inline-flex items-center gap-2 text-sm font-bold">
                  Lihat program <ArrowRight className="size-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="program-saya" className="section-pad bg-background">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <p className="eyebrow">Struktur organisasi</p>
            <h2 className="text-3xl font-extrabold sm:text-5xl">
              Orang-orang yang mendampingi Anda.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Di bawah arahan KP2MI/BP2MI, tim kami bekerja lintas disiplin untuk pelayanan PMI yang
              utuh.
            </p>
          </div>
          <div className="mx-auto mt-14 max-w-sm text-center">
            <Portrait person={director} large />
            <span className="mt-5 inline-flex rounded-full bg-primary-soft px-4 py-2 text-xs font-extrabold uppercase text-primary">
              Direktur Migran Center
            </span>
            <h3 className="mt-3 text-xl font-bold">{director.name}</h3>
          </div>
          <div className="mt-16 grid gap-9 sm:grid-cols-2 lg:grid-cols-5">
            {people.slice(1).map((person) => (
              <article key={person.name} className="text-center">
                <Portrait person={person} />
                <p className="mt-5 text-[11px] font-extrabold uppercase leading-snug text-primary">
                  {person.role}
                </p>
                <h3 className="mt-2 text-sm font-bold leading-snug">{person.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-warm">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Uraian tugas</p>
              <h2>Kerja terarah, layanan terukur.</h2>
            </div>
            <p>Setiap bagian memiliki tanggung jawab yang jelas untuk menjaga mutu layanan.</p>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <Task
              title="Dewan Pengarah (BP3MI)"
              items={[
                "Rekomendasi kebijakan, standar layanan, kurikulum, dan digitalisasi vokasi.",
                "Integrasi Migran Center dengan Sisko P2MI, KKNI, serta standar internasional.",
                "Koordinasi lintas SKPD dan rekomendasi penempatan aman.",
              ]}
            />
            <Task
              title="Direktur Migran Center"
              items={[
                "Memimpin perencanaan dan pelaksanaan program setiap divisi.",
                "Menjalin kerja sama, mengawasi, dan mengevaluasi kinerja.",
                "Menyusun program jangka pendek dan jangka panjang.",
              ]}
            />
            <Task
              title="Informasi, Penempatan & Job Matching"
              items={[
                "Pusat informasi peluang kerja dan basis data PMI.",
                "Pendampingan penempatan serta penyelenggaraan job matching.",
                "Kerja sama dengan agensi luar negeri.",
              ]}
            />
            <Task
              title="Pelatihan, Sertifikasi & Administrasi"
              items={[
                "Pelatihan bahasa asing, soft skill, dan penyusunan kurikulum.",
                "Koordinasi ujian kompetensi serta pengelolaan SDM internal.",
                "Layanan keuangan dan sarana prasarana.",
              ]}
            />
            <Task
              title="Perlindungan, Konseling & Kerja Sama"
              items={[
                "Konseling dan edukasi hak calon pekerja migran.",
                "Layanan literasi keuangan.",
                "Penguatan jejaring kementerian, pemda, kampus, industri, dan lembaga internasional.",
              ]}
            />
          </div>
        </div>
      </section>

      <section id="berita" className="section-pad bg-background">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Kabar terbaru</p>
              <h2>Informasi dan pengumuman.</h2>
            </div>
            <a
              href="#pengumuman"
              className="hidden items-center gap-2 text-sm font-bold text-primary sm:flex"
            >
              Lihat semua <ArrowRight className="size-4" />
            </a>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <News
              category="Berita"
              date="12 September 2026"
              title="UNPRI memperkuat kolaborasi penyiapan tenaga profesional global"
            />
            <News
              category="Pengumuman"
              date="8 September 2026"
              title="Pendaftaran pelatihan Caregiver gelombang pertama telah dibuka"
            />
            <News
              category="Kegiatan"
              date="2 September 2026"
              title="Sosialisasi migrasi aman untuk masyarakat Sumatera Utara"
            />
          </div>
        </div>
      </section>

      <section id="album" className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center lg:px-8">
          <div>
            <p className="text-xs font-extrabold uppercase text-primary-foreground/70">
              Mulai perjalanan Anda
            </p>
            <h2 className="mt-2 max-w-2xl text-3xl font-extrabold sm:text-4xl">
              Karier global dimulai dari persiapan yang tepat.
            </h2>
          </div>
          <a
            href="#kontak"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-background px-6 py-3.5 text-sm font-bold text-foreground"
          >
            Konsultasi sekarang
          </a>
        </div>
      </section>

      <section id="faq" className="section-pad bg-background">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="text-center">
            <p className="eyebrow">FAQ</p>
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Pertanyaan yang sering diajukan.
            </h2>
          </div>
          <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-card px-6">
            {[
              [
                "Siapa yang dapat mengikuti program Migran Center?",
                "Masyarakat yang memenuhi persyaratan dasar program dan berkomitmen mengikuti tahapan pelatihan serta penempatan resmi.",
              ],
              [
                "Apakah penempatan kerja dijamin aman dan legal?",
                "Setiap proses diarahkan melalui jalur resmi, dengan pemeriksaan kesiapan, kontrak, serta pendampingan perlindungan.",
              ],
              [
                "Bidang pekerjaan apa saja yang tersedia?",
                "Bidang prioritas meliputi Caregiver, Home Care, Nurse, Welder, Hospitality, Manufaktur, IT, tenaga pendidik, dan industri.",
              ],
              [
                "Bagaimana cara memulai pendaftaran?",
                "Pilih program yang diminati lalu hubungi tim Migran Center untuk jadwal konsultasi dan pemeriksaan persyaratan.",
              ],
            ].map(([q, a]) => (
              <details key={q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold">
                  {q}
                  <ChevronDown className="size-5 shrink-0 text-primary transition-transform group-open:rotate-180" />
                </summary>
                <p className="max-w-2xl pt-3 text-sm leading-relaxed text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer id="kontak" className="bg-foreground py-16 text-background">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 border-b border-background/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <a
                href="#beranda"
                className="flex shrink-0 items-center gap-3"
                aria-label="Migran Center UNPRI"
              >
                <img src={LogoWhite} alt="Logo" className="h-18" />
                <span className="border-l-2 border-primary pl-3 text-[11px] font-extrabold leading-[1.05] ">
                  <span className="text-white mb-5 pb-5">MIGRAN</span>
                  <br />
                  <span className="text-white">CENTER</span>
                </span>
              </a>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-background/55">
                Pusat keunggulan penyiapan PMI kompeten melalui pendidikan, perlindungan, dan
                penempatan kerja internasional.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold">Layanan</h3>
              <ul className="mt-5 space-y-3 text-sm text-background/55">
                <li>Pelatihan kompetensi</li>
                <li>Job matching</li>
                <li>Konseling hukum</li>
                <li>Literasi keuangan</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold">Kontak</h3>
              <ul className="mt-5 space-y-3 text-sm text-background/55">
                <li className="flex gap-2">
                  <MapPin className="mt-0.5 size-4 shrink-0" />
                  Jl. Sampul No.3, Sei Putih Barat, Kecamatan Medan Petisah, Kota Medan, Sumatera
                  Utara 20118
                </li>
                <li className="flex gap-2">
                  <Mail className=" mt-0.5 size-4 shrink-0" />
                  info@migrancenter.unpri.ac.id
                </li>
                <li className="flex gap-2">
                  <Phone className=" mt-0.5 size-4 shrink-0" />
                  +62 812 0000 2029
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-7 text-xs text-background/40 sm:flex-row sm:justify-between">
            <span>© 2026 Migran Center Universitas Prima Indonesia.</span>
            <span>Data kontak dan program sementara.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Portrait({ person, large = false }: { person: (typeof people)[number]; large?: boolean }) {
  return (
    <div
      className={`mx-auto overflow-hidden rounded-2xl bg-muted ${large ? "size-52" : "aspect-[4/5] w-full max-w-48"}`}
    >
      <img
        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(person.name)}&background=random&color=fff&size=512`}
        loading="lazy"
        width={1536}
        height={1024}
        alt={`Foto ilustrasi ${person.name}`}
        className="size-full object-cover portrait-sheet"
        style={{ objectPosition: person.pos }}
      />
    </div>
  );
}

function Task({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="rounded-2xl border border-border bg-card p-6">
      <h3 className="text-lg font-bold">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

function News({ category, date, title }: { category: string; date: string; title: string }) {
  return (
    <article className="rounded-2xl border border-border bg-card p-6 transition-transform hover:-translate-y-1">
      <span className="text-xs font-extrabold uppercase text-primary">{category}</span>
      <h3 className="mt-5 text-xl font-bold leading-snug">{title}</h3>
      <p className="mt-6 text-xs font-semibold text-muted-foreground">{date}</p>
    </article>
  );
}
