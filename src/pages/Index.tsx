import { useState, useEffect } from "react";
import heroImg from "@/assets/hero.jpg";
import resumePdf from "@/assets/Amit_resume_full stack.pdf";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = [
  { icon: "web", title: "Frontend", color: "orange", items: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"] },
  { icon: "dns", title: "Backend", color: "purple", items: ["Node.js", "Express.js"] },
  { icon: "database", title: "Database", color: "cyan", items: ["MongoDB", "MySQL"] },
  { icon: "build", title: "Tools", color: "orange", items: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Render"] },
];

const PROJECTS = [
  {
    title: "AI Powered Plant Selling WebApp",
    desc: "Developed a full-stack AI-powered plant selling platform using the MERN stack, featuring a responsive customer website, secure backend APIs, and an admin panel for product, order, and user management with AI-powered plant recommendations.",
    tags: ["React", "Tailwind", "Express", "MongoDB", "Razorpay", "Gemini", "Google Auth"],
    image: "/plant-vigor.png",
    demoUrl: "https://plant-vigor.vercel.app/",
    codeUrl: "https://github.com/amit-kumar1511/plant-vigor"
  },
  {
    title: "Food Delivery App",
    desc: "A full-stack food delivery platform with User and Admin panels, Stripe payment integration, real-time order tracking, menu management, secure authentication, responsive design, customer management, and efficient order processing for a seamless food ordering experience.",
    tags: ["React", "Express", "MongoDB", 'Stripe', 'Multer'],
    image: "/food-dedlivery.png",
    demoUrl: "https://food-delivery-frontend-fwtb.onrender.com",
    codeUrl: "https://github.com/amit-kumar1511/Food-Delivery-WebApp"
  },
  {
    title: "AI Trip Planner",
    desc: "AI-powered travel assistant that creates personalized itineraries based on user preferences, budgets, and travel dates using Gemini AI.",
    tags: ["React", "Tailwind CSS", "Gemini", "Google Auth"],
    image: "/trip-planner.png",
    demoUrl: "https://ai-trip-plan1511.vercel.app/",
    codeUrl: "https://github.com/amit-kumar1511/ai-trip-planner-web"
  },
];

const CERTIFICATES = [
  { title: "Full Stack Web Development", issuer: "Udemy", date: "2024" },
  { title: "React.js Certification", issuer: "Coursera", date: "2024" },
  { title: "JavaScript Certification", issuer: "freeCodeCamp", date: "2023" },
  { title: "Git & GitHub Certification", issuer: "GitHub", date: "2023" },
];

export function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  return (
    <div id="home" className="relative min-h-screen overflow-x-hidden bg-background text-foreground transition-colors duration-300">
      {/* Ambient orbs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-orange/20 blur-[140px]" />
        <div className="absolute top-[30%] -right-40 h-[480px] w-[480px] rounded-full bg-purple/20 blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-cyan/10 blur-[140px]" />
      </div>

      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} theme={theme} toggleTheme={toggleTheme} />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

function Navbar({
  menuOpen,
  setMenuOpen,
  theme,
  toggleTheme,
}: {
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
  theme: string;
  toggleTheme: () => void;
}) {
  return (
    <>
      <nav className="fixed top-4 left-1/2 z-50 w-[92%] max-w-6xl -translate-x-1/2 glass-panel rounded-full px-5 py-3 shadow-2xl sm:px-7">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-1.5 font-display text-lg font-bold tracking-tight sm:text-xl">
            <span className="font-code text-base font-bold text-orange">&lt;/&gt;</span>
            <span>Amit Kumar</span>
          </a>
          <div className="hidden items-center gap-8 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="font-display text-sm font-medium text-on-surface-variant transition-colors hover:text-orange"
              >
                {n.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-foreground/10 bg-foreground/5 text-foreground hover:bg-foreground/10 transition-colors"
              aria-label="Toggle Theme"
            >
              <span className="material-symbols-outlined text-[20px]">
                {theme === "dark" ? "light_mode" : "dark_mode"}
              </span>
            </button>
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hidden rounded-full px-5 py-2 font-display text-sm font-semibold sm:inline-flex"
            >
              View Resume
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-foreground/10 bg-foreground/5 lg:hidden"
            >
              <div className="relative h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-5 bg-foreground transition-all duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
                />
                <span
                  className={`absolute left-0 top-[7px] h-0.5 w-5 bg-foreground transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`absolute left-0 top-[14px] h-0.5 w-5 bg-foreground transition-all duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-x-4 top-20 z-40 glass-panel rounded-3xl p-6 transition-all duration-300 lg:hidden ${menuOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
          }`}
      >
        <div className="flex flex-col gap-1">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-2xl px-4 py-3 font-display text-base font-medium text-on-surface-variant transition-colors hover:bg-foreground/5 hover:text-orange"
            >
              {n.label}
            </a>
          ))}
          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="btn-primary mt-3 inline-flex justify-center rounded-2xl px-5 py-3 font-display text-sm font-semibold"
          >
            View Resume
          </a>
        </div>
      </div>
    </>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center pt-32 pb-20">
      <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="z-10 flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left">
          <div className="relative mb-6 inline-flex p-[1px] rounded-full overflow-hidden">
            <span className="absolute inset-[-1000%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_0deg,var(--orange),transparent)]" />
            <div className="relative inline-flex items-center gap-2.5 rounded-full bg-background/90 px-4 py-2 backdrop-blur-md">
              <span className="relative flex h-6 w-6 items-center justify-center">
                <span className="font-code text-[10px] text-orange">&lt;/&gt;</span>
              </span>
              <span className="font-code text-[11px] uppercase tracking-[0.18em] text-on-surface-variant">
                FullStack Developer
              </span>
            </div>
          </div>
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-7xl">
            <span className="text-foreground">Hi, I'm</span>
            <br />
            <span className="bg-gradient-to-r from-orange to-orange-soft bg-clip-text text-transparent">
              Amit Kumar
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-on-surface-variant sm:text-lg">
            I'm a Full Stack Developer passionate about creating modern and responsive web applications. I enjoy working with React.js, Node.js, Express.js, MongoDB, and RESTful APIs to build seamless user experiences and continuously enhance my development skills through hands-on projects.

          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            {/* GitHub */}
            <a
              href="https://github.com/amit-kumar1511"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-xl text-on-surface-variant hover:text-orange hover:scale-110 transition-all duration-300"
              title="GitHub"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/amit-kumar-a43279321"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-xl text-on-surface-variant hover:text-orange hover:scale-110 transition-all duration-300"
              title="LinkedIn"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            {/* WhatsApp */}
            <a
              href="https://wa.me/918002786529"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-xl text-on-surface-variant hover:text-orange hover:scale-110 transition-all duration-300"
              title="WhatsApp"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.738-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.019-5.117-2.877-6.974-1.858-1.857-4.34-2.879-6.983-2.88-5.438 0-9.865 4.42-9.869 9.865-.001 1.748.461 3.454 1.341 4.975l-.979 3.574 3.663-.961zm11.236-7.72c-.27-.136-1.597-.787-1.845-.877-.248-.09-.43-.136-.61.136-.18.27-.697.877-.855 1.057-.158.18-.315.203-.585.068-1.093-.547-1.806-1.012-2.521-2.233-.19-.328.19-.304.543-1.012.09-.18.046-.338-.023-.473-.069-.136-.61-1.464-.836-2.003-.22-.53-.442-.457-.61-.466-.156-.008-.338-.009-.52-.009-.18 0-.476.068-.724.338-.249.27-.948.923-.948 2.25 0 1.328.966 2.61 1.101 2.79.135.18 1.9 2.9 4.606 4.07.643.278 1.145.443 1.536.567.646.206 1.233.177 1.697.108.518-.077 1.597-.652 1.823-1.282.225-.63.225-1.17.157-1.282-.068-.113-.248-.18-.518-.316z" />
              </svg>
            </a>
          </div>
          <div className="mt-6 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="#projects"
              className="btn-primary inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 font-display text-sm font-semibold"
            >
              View Projects
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
            <a
              href={resumePdf}
              download="Amit_resume_full_stack.pdf"
              className="btn-ghost inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 font-display text-sm font-semibold"
            >
              Download Resume
              <span className="material-symbols-outlined text-[18px]">download</span>
            </a>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-orange/30 via-purple/20 to-cyan/20 blur-3xl" />
          <div className="glass-panel relative overflow-hidden rounded-3xl p-2 transition-transform duration-700 hover:scale-[1.02]">
            <img
              src={heroImg}
              alt="Futuristic developer workspace"
              width={1280}
              height={1280}
              className="h-auto w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12 flex flex-col items-start">
      <p className="mb-3 font-code text-[11px] uppercase tracking-[0.22em] text-orange">{eyebrow}</p>
      <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-28 py-24 lg:py-32">
      <SectionHeader eyebrow="About Me" title="A developer who cares about the details." />
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="glass-panel rounded-3xl p-5 sm:p-8 lg:col-span-3">
          <p className="text-base leading-relaxed text-on-surface-variant sm:text-lg">
            I’m Amit Kumar, a Full Stack MERN Developer currently pursuing a B.Tech in Computer Science at Satyug Darshan Institute of Engineering & Technology, Faridabad.
            <br />
            <br />
            I build modern, responsive, and user-friendly web applications using the MERN stack. My core technologies include React.js, Node.js, Express.js, MongoDB, JavaScript, Tailwind CSS, and RESTful APIs. I'm comfortable with both frontend and backend development and continuously expanding my backend knowledge.
            <br /><br />
            I enjoy turning ideas into real-world applications and improving my skills through hands-on projects. I also practice Data Structures & Algorithms using Java to strengthen my problem-solving skills.
          </p>

        </div>
        <div className="glass-panel rounded-3xl p-5 sm:p-8 lg:col-span-2">
          <p className="font-code text-[11px] uppercase tracking-widest text-purple">Quick Facts</p>
          <ul className="mt-5 space-y-4">
            {[
              { icon: "school", label: "B.Tech CSE 2026" },
              { icon: "code", label: "Full Stack Developer" },
              { icon: "bolt", label: "Loves Clean & Responsive UI" },
              { icon: "public", label: "Open to work" },
            ].map((f) => (
              <li key={f.label} className="flex items-center gap-3 text-on-surface-variant">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-foreground/5 text-orange">
                  <span className="material-symbols-outlined text-[18px]">{f.icon}</span>
                </span>
                <span className="text-sm">{f.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="scroll-mt-28 py-24 lg:py-32">
      <SectionHeader eyebrow="My Skills" title="Technical arsenal." />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((s) => {
          const colorMap: Record<string, string> = {
            orange: "bg-orange/15 text-orange",
            purple: "bg-purple/15 text-purple",
            cyan: "bg-cyan/15 text-cyan",
          };
          return (
            <div
              key={s.title}
              className="glass-panel group rounded-3xl p-5 sm:p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-orange/30"
            >
              <div className={`mb-5 grid h-12 w-12 place-items-center rounded-2xl ${colorMap[s.color]} transition-transform group-hover:scale-110`}>
                <span className="material-symbols-outlined">{s.icon}</span>
              </div>
              <h3 className="font-display text-xl font-bold">{s.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <span
                    key={i}
                    className="rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 font-code text-[11px] text-on-surface-variant"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, 3);

  return (
    <section id="projects" className="scroll-mt-28 py-24 lg:py-32">
      <SectionHeader eyebrow="My Projects" title="Things I've built." />
      <div className="flex flex-col gap-8 lg:gap-12">
        {visibleProjects.map((p, i) => {
          const isEven = i % 2 === 0;
          return (
            <article
              key={p.title}
              className="glass-panel group grid grid-cols-1 gap-8 items-center lg:grid-cols-12 rounded-3xl p-4 sm:p-6 lg:p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-orange/30 hover:shadow-[0_0_45px_rgba(249,115,22,0.08)]"
            >
              {/* Image Preview */}
              <div
                className={`lg:col-span-6 relative aspect-video overflow-hidden rounded-2xl border border-white/10 ${isEven ? "lg:order-1" : "lg:order-2"
                  }`}
              >
                <div className="relative h-full w-full overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                </div>
              </div>

              {/* Project Details */}
              <div
                className={`lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left ${isEven ? "lg:order-2" : "lg:order-1"
                  }`}
              >
                <h3 className="font-display text-2xl font-extrabold text-foreground sm:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-on-surface-variant">
                  {p.desc}
                </p>
                <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1.5 font-code text-[11px] text-on-surface-variant"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex w-full justify-center lg:justify-start gap-4">
                  <a
                    href={p.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex whitespace-nowrap flex-1 sm:flex-none sm:w-36 lg:w-40 items-center justify-center gap-2 rounded-2xl px-6 py-3 font-display text-sm font-semibold"
                  >
                    Live Demo
                    <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  </a>
                  <a
                    href={p.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost inline-flex whitespace-nowrap flex-1 sm:flex-none sm:w-36 lg:w-40 items-center justify-center gap-2 rounded-2xl px-6 py-3 font-display text-sm font-semibold"
                  >
                    <span className="material-symbols-outlined text-[16px]">code</span>
                    Code
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {PROJECTS.length > 3 && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn-primary inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 font-display text-sm font-semibold transition-all hover:scale-105 duration-300"
          >
            {showAll ? "Show Less" : "View All Projects"}
            <span className="material-symbols-outlined text-[18px]">
              {showAll ? "keyboard_arrow_up" : "keyboard_arrow_down"}
            </span>
          </button>
        </div>
      )}
    </section>
  );
}

function Certificates() {
  return (
    <section id="certificates" className="scroll-mt-28 py-24 lg:py-32">
      <SectionHeader eyebrow="My Certificates" title="Continuous learning." />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {CERTIFICATES.map((c) => (
          <div
            key={c.title}
            className="glass-panel group flex items-center gap-4 sm:gap-5 rounded-3xl p-4 sm:p-6 transition-all duration-500 hover:-translate-y-1 hover:border-orange/30"
          >
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-orange/30 to-purple/30 text-orange-soft transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined">workspace_premium</span>
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="truncate font-display text-base font-bold sm:text-lg">{c.title}</h3>
              <p className="mt-0.5 text-xs text-on-surface-variant">
                {c.issuer} · {c.date}
              </p>
            </div>
            <a
              href="#"
              className="hidden shrink-0 items-center gap-1.5 rounded-full border border-foreground/10 bg-foreground/5 px-4 py-2 font-display text-xs font-semibold text-foreground transition-colors hover:bg-foreground/10 sm:inline-flex"
            >
              View
              <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="scroll-mt-28 py-24 lg:py-32">
      <SectionHeader eyebrow="Get in Touch" title="Let's build something together." />
      <div className="grid gap-12 lg:grid-cols-12">
        {/* Left Column - Contact Info & Socials */}
        <div className="flex flex-col justify-between lg:col-span-5">
          <div>
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Let's Connect
            </h2>
            <p className="mt-4 text-base leading-relaxed text-on-surface-variant sm:text-lg">
              Love connecting with new people! Drop me a message anytime i would be happy to chat.
            </p>

            <div className="mt-8 space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple/10 border border-purple/20 text-purple">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-foreground">Email</p>
                  <a href="mailto:amit55421kumar@gmail.com" className="text-sm text-on-surface-variant hover:text-orange transition-colors mt-0.5 block">
                    amit55421kumar@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple/10 border border-purple/20 text-purple">
                  <span className="material-symbols-outlined text-[20px]">phone</span>
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-foreground">Phone</p>
                  <a href="tel:+918002786529" className="text-sm text-on-surface-variant hover:text-orange transition-colors mt-0.5 block">
                    +91 8002786529
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple/10 border border-purple/20 text-purple">
                  <span className="material-symbols-outlined text-[20px]">location_on</span>
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-foreground">Location</p>
                  <p className="text-sm text-on-surface-variant mt-0.5">
                    Janakpuri Delhi
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-12 lg:mt-0">
            <p className="font-display text-sm font-semibold mb-4">Follow Me</p>
            <div className="flex gap-4">
              <a
                href="https://github.com/amit-kumar1511"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl text-on-surface-variant hover:text-orange hover:scale-110 transition-all duration-300"
                aria-label="GitHub"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/amit-kumar-a43279321"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl text-on-surface-variant hover:text-orange hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-xl text-on-surface-variant hover:text-orange hover:scale-110 transition-all duration-300"
                aria-label="Twitter"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Form inside Card */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const firstName = (formData.get("firstName") as string) || "";
            const lastName = (formData.get("lastName") as string) || "";
            const email = (formData.get("email") as string) || "";
            const message = (formData.get("message") as string) || "";

            const name = `${firstName.trim()} ${lastName.trim()}`.trim();

            const whatsappMessage = `Name: ${name}
Email: ${email}

Message:
${message}`;

            const encodedMessage = encodeURIComponent(whatsappMessage);
            const whatsappUrl = `https://wa.me/918002786529?text=${encodedMessage}`;

            window.open(whatsappUrl, "_blank");

            setSent(true);
            e.currentTarget.reset();
            setTimeout(() => setSent(false), 3500);
          }}
          className="glass-panel rounded-3xl p-5 sm:p-8 lg:col-span-7"
        >
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Field label="First Name" name="firstName" type="text" placeholder="Amit" />
              <Field label="Last Name" name="lastName" type="text" placeholder="Kumar" />
            </div>
            <Field label="Email" name="email" type="email" placeholder="amit.kr423@gmail.com" />
            <div>
              <label className="mb-2 block font-code text-[11px] uppercase tracking-widest text-on-surface-variant">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-2xl border border-foreground/10 bg-foreground/5 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-on-surface-variant/60 focus:border-orange/50"
              />
            </div>
            <button
              type="submit"
              className="btn-primary inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3.5 font-display text-sm font-semibold"
            >
              {sent ? "Message Sent ✓" : "Send Message"}
              {!sent && <span className="material-symbols-outlined text-[18px]">mail</span>}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type, placeholder }: { label: string; name: string; type: string; placeholder: string }) {
  return (
    <div>
      <label className="mb-2 block font-code text-[11px] uppercase tracking-widest text-on-surface-variant">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-2xl border border-foreground/10 bg-foreground/5 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-on-surface-variant/60 focus:border-orange/50"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        <p className="font-display text-sm text-on-surface-variant">© 2026 Amit Kumar. All rights reserved.</p>
        <div className="flex gap-5 text-sm text-on-surface-variant">
          <a href="https://github.com/amit-kumar1511" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-orange">GitHub</a>
          <a href="https://www.linkedin.com/in/amit-kumar-a43279321" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-orange">LinkedIn</a>
          <a href="mailto:amitkumar55423@gmail.com" className="transition-colors hover:text-orange">Email</a>
        </div>
      </div>
    </footer>
  );
}
