import { useEffect, useRef, useState, type SVGProps } from "react";

type IconName =
  | "arrow"
  | "brain"
  | "calendar"
  | "check"
  | "clock"
  | "code"
  | "eye"
  | "globe"
  | "layers"
  | "linkedin"
  | "mail"
  | "menu"
  | "sparkles"
  | "user"
  | "x";

const iconPaths: Record<IconName, React.ReactNode> = {
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  brain: (
    <>
      <path d="M9.5 4.5A3 3 0 0 0 4 6a3 3 0 0 0 .5 5.5A3 3 0 0 0 7 17h2.5" />
      <path d="M14.5 4.5A3 3 0 0 1 20 6a3 3 0 0 1-.5 5.5A3 3 0 0 1 17 17h-2.5" />
      <path d="M9.5 4.5v15M14.5 4.5v15M7 9h2.5M14.5 9H17M7.5 14h2M14.5 14h2" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  code: (
    <>
      <path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10v7M8 7v.01M12 17v-4a3 3 0 0 1 6 0v4M12 10v7" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  sparkles: (
    <>
      <path d="m12 3 1.4 4.1L17.5 8.5l-4.1 1.4L12 14l-1.4-4.1-4.1-1.4 4.1-1.4L12 3Z" />
      <path d="m18.5 14 .7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7.7-2.3Z" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4.5 21a7.5 7.5 0 0 1 15 0" />
    </>
  ),
  x: <path d="m6 6 12 12M18 6 6 18" />,
};

function Icon({ name, ...props }: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {iconPaths[name]}
    </svg>
  );
}

const navLinks = [
  ["Home", "home"],
  ["About", "about"],
  ["What You'll Learn", "learn"],
  ["Course Details", "details"],
  ["Instructor", "instructor"],
  ["Contact", "contact"],
];

const learningItems: { icon: IconName; title: string; description: string; number: string }[] = [
  {
    icon: "brain",
    title: "Introduction to Artificial Intelligence",
    description: "An introduction to artificial intelligence and its core concepts.",
    number: "01",
  },
  {
    icon: "code",
    title: "Python Basics",
    description: "The fundamentals of the Python programming language.",
    number: "02",
  },
  {
    icon: "layers",
    title: "Machine Learning Fundamentals",
    description: "The basics of machine learning.",
    number: "03",
  },
  {
    icon: "eye",
    title: "Introduction to Computer Vision",
    description: "An introduction to computer vision.",
    number: "04",
  },
];

const courseDetails: { icon: IconName; label: string; value: string }[] = [
  { icon: "sparkles", label: "Level", value: "Beginner" },
  { icon: "clock", label: "Duration", value: "4 Weeks" },
  { icon: "globe", label: "Format", value: "Online" },
  { icon: "calendar", label: "Language", value: "English" },
  { icon: "user", label: "Instructor", value: "Safia Saad" },
];

function ButtonLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a className={`button-link ${className}`} href={href}>
      <span>{children}</span>
      <Icon name="arrow" className="h-4 w-4" />
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`section-heading ${align === "left" ? "section-heading-left" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function AiIllustration() {
  return (
    <div
      className="ai-visual"
      aria-label="Abstract artificial intelligence neural network illustration"
    >
      <div className="visual-glow" />
      <div className="data-card data-card-top">
        <span className="data-icon">
          <Icon name="sparkles" />
        </span>
        <span>
          <small>LEARNING PATH</small>
          <strong>AI Fundamentals</strong>
        </span>
      </div>
      <svg className="brain-art" viewBox="0 0 600 520" role="img" aria-hidden="true">
        <defs>
          <linearGradient
            id="brainStroke"
            x1="90"
            y1="80"
            x2="500"
            y2="430"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#83C2FF" />
            <stop offset="1" stopColor="#4A90E2" />
          </linearGradient>
          <linearGradient id="coreFill" x1="220" y1="150" x2="370" y2="350">
            <stop stopColor="#F8FCFF" />
            <stop offset="1" stopColor="#D4E9FF" />
          </linearGradient>
          <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow
              dx="0"
              dy="15"
              stdDeviation="18"
              floodColor="#1E5C9E"
              floodOpacity=".18"
            />
          </filter>
        </defs>

        <g opacity=".28" stroke="#77B6F5" strokeWidth="1.5" strokeDasharray="4 8">
          <path d="M74 98 184 177M55 297l132-4M103 438l115-92M518 90l-96 104M553 301l-126-27M502 444l-113-97" />
        </g>
        <g fill="#4A90E2">
          <circle cx="74" cy="98" r="4" />
          <circle cx="55" cy="297" r="4" />
          <circle cx="103" cy="438" r="4" />
          <circle cx="518" cy="90" r="4" />
          <circle cx="553" cy="301" r="4" />
          <circle cx="502" cy="444" r="4" />
        </g>

        <g filter="url(#softShadow)">
          <path
            d="M300 102c-34-35-91-19-100 27-42-5-69 35-53 72-34 22-32 78 5 96-16 42 14 82 56 81 14 43 67 53 92 19V102Z"
            fill="url(#coreFill)"
            stroke="url(#brainStroke)"
            strokeWidth="5"
          />
          <path
            d="M300 102c34-35 91-19 100 27 42-5 69 35 53 72 34 22 32 78-5 96 16 42-14 82-56 81-14 43-67 53-92 19V102Z"
            fill="url(#coreFill)"
            stroke="url(#brainStroke)"
            strokeWidth="5"
          />
        </g>

        <g fill="none" stroke="#4A90E2" strokeWidth="3" strokeLinecap="round">
          <path d="M201 132c34 9 39 33 37 56M153 202c23-4 48 4 57 27M155 296c32 3 57-12 61-39M208 377c-10-31 5-52 30-60M300 163l-39 28v48l39 26M300 317l-40-26-37 23" />
          <path d="M399 132c-34 9-39 33-37 56M447 202c-23-4-48 4-57 27M445 296c-32 3-57-12-61-39M392 377c10-31-5-52-30-60M300 163l39 28v48l-39 26M300 317l40-26 37 23" />
        </g>
        <g fill="#fff" stroke="#4A90E2" strokeWidth="3">
          <circle cx="238" cy="188" r="8" />
          <circle cx="210" cy="229" r="8" />
          <circle cx="216" cy="257" r="7" />
          <circle cx="260" cy="291" r="8" />
          <circle cx="223" cy="314" r="7" />
          <circle cx="362" cy="188" r="8" />
          <circle cx="390" cy="229" r="8" />
          <circle cx="384" cy="257" r="7" />
          <circle cx="340" cy="291" r="8" />
          <circle cx="377" cy="314" r="7" />
          <circle cx="300" cy="163" r="9" />
          <circle cx="300" cy="265" r="10" fill="#4A90E2" />
          <circle cx="300" cy="317" r="9" />
        </g>
      </svg>
      <div className="data-card data-card-bottom">
        <span className="pulse-dot" />
        <span>
          <small>COURSE LEVEL</small>
          <strong>Built for beginners</strong>
        </span>
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const scrollAnimation = useRef<number | null>(null);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map(([, id]) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    let ticking = false;

    const updateActiveSection = () => {
      const navbarHeight = document.querySelector<HTMLElement>(".navbar")?.offsetHeight ?? 76;
      const marker = window.scrollY + navbarHeight + window.innerHeight * 0.24;
      let currentSection = sections[0]?.id ?? "home";

      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
        currentSection = sections.at(-1)?.id ?? currentSection;
      } else {
        for (const section of sections) {
          if (section.offsetTop <= marker) {
            currentSection = section.id;
          } else {
            break;
          }
        }
      }

      setActiveSection((active) => (active === currentSection ? active : currentSection));
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    const cancelAnimatedScroll = () => {
      if (scrollAnimation.current !== null) {
        window.cancelAnimationFrame(scrollAnimation.current);
        scrollAnimation.current = null;
        document.documentElement.style.scrollBehavior = "";
      }
    };

    window.addEventListener("wheel", cancelAnimatedScroll, { passive: true });
    window.addEventListener("touchstart", cancelAnimatedScroll, { passive: true });

    return () => {
      cancelAnimatedScroll();
      window.removeEventListener("wheel", cancelAnimatedScroll);
      window.removeEventListener("touchstart", cancelAnimatedScroll);
    };
  }, []);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    const section = document.getElementById(id);

    if (section) {
      setActiveSection(id);
      window.history.replaceState(null, "", `#${id}`);

      if (scrollAnimation.current !== null) {
        window.cancelAnimationFrame(scrollAnimation.current);
      }

      const navbarHeight = document.querySelector<HTMLElement>(".navbar")?.offsetHeight ?? 76;
      const startPosition = window.scrollY;
      const destination = Math.max(
        0,
        section.getBoundingClientRect().top + startPosition - navbarHeight - 8,
      );
      const distance = destination - startPosition;
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reducedMotion || Math.abs(distance) < 2) {
        window.scrollTo(0, destination);
      } else {
        const duration = Math.min(900, Math.max(500, Math.abs(distance) * 0.32));
        const startTime = performance.now();
        document.documentElement.style.scrollBehavior = "auto";

        const animateScroll = (currentTime: number) => {
          const progress = Math.min((currentTime - startTime) / duration, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 4);
          window.scrollTo(0, startPosition + distance * easedProgress);

          if (progress < 1) {
            scrollAnimation.current = window.requestAnimationFrame(animateScroll);
          } else {
            scrollAnimation.current = null;
            document.documentElement.style.scrollBehavior = "";
          }
        };

        scrollAnimation.current = window.requestAnimationFrame(animateScroll);
      }
    }

    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <header className="navbar">
        <div className="nav-inner">
          <a href="#home" className="logo" aria-label="AI with Safia home">
            <span className="logo-mark">
              <Icon name="brain" />
            </span>
            <span>
              AI <i>with</i> Safia
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navLinks.map(([label, href]) => (
              <a
                href={`#${href}`}
                key={href}
                className={activeSection === href ? "active" : ""}
                aria-current={activeSection === href ? "page" : undefined}
                onClick={(event) => handleNavClick(event, href)}
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="mailto:safiakotb40@gmail.com?subject=Introduction%20to%20AI%20Course"
            className="nav-cta"
          >
            Enroll Now
          </a>
          <button
            className="menu-button"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <Icon name={menuOpen ? "x" : "menu"} />
          </button>
        </div>
        <nav
          id="mobile-menu"
          className={`mobile-nav ${menuOpen ? "is-open" : ""}`}
          aria-label="Mobile navigation"
        >
          {navLinks.map(([label, href]) => (
            <a
              href={`#${href}`}
              key={href}
              className={activeSection === href ? "active" : ""}
              aria-current={activeSection === href ? "page" : undefined}
              onClick={(event) => handleNavClick(event, href)}
            >
              {label}
            </a>
          ))}
          <a
            className="mobile-enroll"
            href="mailto:safiakotb40@gmail.com?subject=Introduction%20to%20AI%20Course"
            onClick={() => setMenuOpen(false)}
          >
            Enroll Now
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid page-container">
            <div className="hero-copy">
              <div className="badge">
                <span>
                  <Icon name="sparkles" />
                </span>
                Beginner-Friendly AI Course
              </div>
              <h1>
                Introduction to <span>Artificial Intelligence</span>
              </h1>
              <p className="hero-subtitle">Start Your AI Journey from Scratch</p>
              <p className="hero-description">
                Learn the fundamentals of Artificial Intelligence, Machine Learning, and Python
                through simple explanations and practical examples.
              </p>
              <div className="hero-actions">
                <ButtonLink href="mailto:safiakotb40@gmail.com?subject=Introduction%20to%20AI%20Course">
                  Enroll Now
                </ButtonLink>
                <p>
                  <span>
                    <Icon name="check" />
                  </span>
                  No prior experience required.
                </p>
              </div>
            </div>
            <AiIllustration />
          </div>
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
        </section>

        <section className="section about-section" id="about">
          <div className="page-container about-grid">
            <div className="about-title-wrap">
              <SectionHeading
                eyebrow="BEGINNER COURSE"
                title="About the Course"
                description="Your First Step into the World of Artificial Intelligence"
                align="left"
              />
              <div className="section-number">01</div>
            </div>
            <div className="about-content">
              <p className="about-lead">
                This course is designed for beginners who are interested in AI but don't have
                previous experience.
              </p>
              <p>
                It will introduce students to basic AI concepts and help them understand how AI is
                used in real-world applications.
              </p>
              <div className="highlight-list">
                {[
                  "Beginner Friendly",
                  "No Previous Experience Required",
                  "Practical Real-World Applications",
                ].map((item) => (
                  <div className="highlight-item" key={item}>
                    <span>
                      <Icon name="check" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section learn-section" id="learn">
          <div className="page-container">
            <SectionHeading
              eyebrow="CURRICULUM"
              title="What You'll Learn"
              description="Explore the essential concepts and technologies that will help you begin your AI journey."
            />
            <div className="learning-grid">
              {learningItems.map((item) => (
                <article className="learning-card" key={item.title}>
                  <div className="card-top">
                    <span className="learning-icon">
                      <Icon name={item.icon} />
                    </span>
                    <span className="card-number">{item.number}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="card-line" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section details-section" id="details">
          <div className="page-container">
            <SectionHeading eyebrow="AT A GLANCE" title="Course Details" />
            <div className="details-grid">
              {courseDetails.map((detail) => (
                <div className="detail-card" key={detail.label}>
                  <span className="detail-icon">
                    <Icon name={detail.icon} />
                  </span>
                  <div>
                    <p>{detail.label}</p>
                    <h3>{detail.value}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section instructor-section" id="instructor">
          <div className="page-container instructor-grid">
            <div className="instructor-copy">
              <p className="eyebrow">ABOUT THE INSTRUCTOR</p>
              <h2>Meet Your Instructor</h2>
              <div className="name-block">
                <h3>Safia Saad</h3>
                <p>AI Engineer | Data Science &amp; Computer Vision</p>
              </div>
              <blockquote>
                "I'm Safia Saad, an AI Engineer with experience in Data Science and Computer Vision.
                I'm passionate about making Artificial Intelligence easier to understand and helping
                beginners take their first steps into the field."
              </blockquote>
              <a
                href="https://www.linkedin.com/in/safia-saad/"
                className="linkedin-link"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="linkedin" />
                Connect on LinkedIn
                <Icon name="arrow" />
              </a>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-grid" aria-hidden="true" />
          <div className="contact-orb" aria-hidden="true" />
          <div className="page-container contact-inner">
            <div className="contact-icon">
              <Icon name="mail" />
            </div>
            <p className="eyebrow">YOUR NEXT CHAPTER</p>
            <h2>Ready to Start Your AI Journey?</h2>
            <p>
              Take your first step into Artificial Intelligence and discover the possibilities of
              this exciting field.
            </p>
            <ButtonLink
              href="mailto:safiakotb40@gmail.com?subject=Introduction%20to%20AI%20Course"
              className="contact-button"
            >
              Enroll Now
            </ButtonLink>
            <div className="contact-links" aria-label="Contact links">
              <a href="mailto:safiakotb40@gmail.com">
                <Icon name="mail" />
                <span>safiakotb40@gmail.com</span>
              </a>
              <span className="contact-divider" aria-hidden="true" />
              <a href="https://www.linkedin.com/in/safia-saad/" target="_blank" rel="noreferrer">
                <Icon name="linkedin" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="page-container footer-inner">
          <a href="#home" className="logo footer-logo">
            <span className="logo-mark">
              <Icon name="brain" />
            </span>
            <span>
              AI <i>with</i> Safia
            </span>
          </a>
          <p>Introduction to Artificial Intelligence · Beginner Course</p>
          <p>© {new Date().getFullYear()} Safia Saad</p>
        </div>
      </footer>
    </div>
  );
}
