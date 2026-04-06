import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowUp,
  ChevronRight,
  ExternalLink,
  FlaskConical,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Phone,
  Trophy,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { ConstellationGraphic } from "./components/ConstellationGraphic";

const PROFILE_PHOTO =
  "/assets/dominic-019d631b-fe21-7442-b9a8-6b69eb3c74ec.jpeg";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = [
  { category: "Languages", items: ["C", "Python", "Java"] },
  { category: "Database", items: ["MySQL"] },
  {
    category: "Core Skills",
    items: ["Data Structures & Algorithms", "Problem Solving"],
  },
  {
    category: "Concepts",
    items: [
      "Object-Oriented Programming",
      "Machine Learning",
      "Predictive Modeling",
    ],
  },
];

const PROJECTS = [
  {
    title: "Smart City Safety System",
    description:
      "A radar-based traffic system integrating automated barricades, intelligent signal control, and QR code navigation to improve urban safety.",
    tags: ["IoT", "Radar", "QR Code"],
  },
  {
    title: "Farm Blockchain System",
    description:
      "A blockchain-based platform designed to bring transparency and trust to agricultural supply chains — farmers and buyers on the same page.",
    tags: ["Blockchain", "Agriculture", "Web3"],
  },
  {
    title: "AI-Based Driving Safety Simulator",
    description:
      "Predicts vehicle movement, detects potential collisions before they happen, and alerts drivers with RGB indicators in real time.",
    tags: ["AI", "Computer Vision", "Safety"],
  },
];

const RESEARCH = [
  {
    title: "Machine Learning-Based Emissions Prediction",
    description:
      "Developed predictive models using cross-validation techniques to estimate vehicle emissions from engine parameters with high accuracy.",
  },
  {
    title: "Data-Driven Analysis using Random Forest & LightGBM",
    description:
      "Worked on improving prediction accuracy through ensemble learning techniques and feature engineering — pushing model performance further.",
  },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(window.location.hostname);
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* NAV */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[oklch(0.165_0.018_240/0.97)] shadow-[0_1px_0_oklch(0.28_0.022_240)]"
            : "bg-[oklch(0.165_0.018_240/0.85)] backdrop-blur-sm"
        }`}
        data-ocid="nav.section"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <span className="text-foreground font-semibold text-base tracking-tight">
            Dominic Assisi B
          </span>
          <nav
            className="hidden md:flex items-center"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link, i) => (
              <span key={link.href} className="flex items-center">
                <a
                  href={link.href}
                  className="text-[13px] text-[oklch(0.73_0.018_240)] hover:text-teal transition-colors px-3 py-1"
                  data-ocid={`nav.${link.label.toLowerCase()}.link`}
                >
                  {link.label}
                </a>
                {i < NAV_LINKS.length - 1 && (
                  <span className="text-[oklch(0.28_0.022_240)] text-xs select-none">
                    /
                  </span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.165 0.018 240) 0%, oklch(0.18 0.022 235) 50%, oklch(0.155 0.025 230) 100%)",
        }}
      >
        {/* Constellation background — full width, lower opacity */}
        <div className="absolute inset-0 opacity-40">
          <ConstellationGraphic />
        </div>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, transparent 40%, oklch(0.12 0.018 240 / 0.6) 100%)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 py-32 w-full">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-xl flex-1"
            >
              <p className="text-teal text-sm font-medium tracking-widest uppercase mb-4">
                Hi, I&apos;m
              </p>
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-foreground leading-none mb-4"
                style={{ letterSpacing: "-0.02em" }}
              >
                Dominic
                <br />
                Assisi B
              </h1>
              <p className="text-lg sm:text-xl text-[oklch(0.73_0.018_240)] font-medium mb-4">
                CSE Student &nbsp;|&nbsp; Aspiring Software Engineer
              </p>
              <p className="text-[oklch(0.60_0.016_240)] text-base leading-relaxed mb-8 max-w-sm">
                I build things, break things, and learn from both. Focused on
                AI, systems, and making software that actually matters.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-teal hover:bg-teal-dark text-[oklch(0.165_0.018_240)] font-semibold px-6 py-2 rounded-md transition-all shadow-teal"
                  data-ocid="hero.view_projects.button"
                >
                  <a href="#projects">
                    View Projects
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[oklch(0.28_0.022_240)] text-foreground hover:border-teal hover:text-teal bg-transparent px-6 py-2 rounded-md transition-all"
                  data-ocid="hero.contact_me.button"
                >
                  <a href="#contact">Contact Me</a>
                </Button>
              </div>
            </motion.div>

            {/* Profile photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              className="shrink-0 flex items-center justify-center"
            >
              <div
                className="relative"
                style={{
                  filter: "drop-shadow(0 0 60px oklch(0.55 0.14 195 / 0.25))",
                }}
              >
                {/* Teal glow ring */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    boxShadow: "0 0 48px 8px oklch(0.55 0.14 195 / 0.18)",
                  }}
                />
                <img
                  src={PROFILE_PHOTO}
                  alt="Dominic Assisi B"
                  className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] lg:w-[280px] lg:h-[280px] rounded-full object-cover object-top ring-2 ring-[oklch(0.55_0.14_195/0.4)] relative z-10"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              About Me
              <span className="h-px flex-1 bg-border max-w-[80px]" />
            </h2>
            <Card className="bg-[oklch(0.215_0.020_240)] border-[oklch(0.28_0.022_240)] shadow-card">
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  {/* Small profile photo */}
                  <div className="shrink-0 flex justify-center sm:justify-start w-full sm:w-auto">
                    <img
                      src={PROFILE_PHOTO}
                      alt="Dominic Assisi B"
                      className="w-24 h-24 rounded-full object-cover object-top ring-2 ring-[oklch(0.55_0.14_195/0.2)] shadow-[0_0_20px_oklch(0.55_0.14_195/0.12)]"
                    />
                  </div>
                  {/* Text content */}
                  <div>
                    <p className="text-[oklch(0.73_0.018_240)] text-base leading-[1.8] mb-4">
                      I&apos;m a Computer Science student who genuinely enjoys
                      solving problems — the kind that make you stare at a blank
                      screen for a while before something clicks. I&apos;m
                      interested in AI, system design, and research that leads
                      to real-world impact, not just papers.
                    </p>
                    <p className="text-[oklch(0.73_0.018_240)] text-base leading-[1.8]">
                      Right now, I&apos;m focused on machine learning research
                      and practical implementations — particularly around
                      predictive systems and safety. I care about writing code
                      that&apos;s clean, efficient, and actually solves the
                      problem at hand.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 bg-[oklch(0.185_0.020_240)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              Technical Skills
              <span className="h-px flex-1 bg-border max-w-[80px]" />
            </h2>
            <div className="space-y-5">
              {SKILLS.map((group, i) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex flex-col sm:flex-row sm:items-start gap-3"
                >
                  <span className="text-[13px] text-[oklch(0.60_0.016_240)] font-medium w-40 shrink-0 pt-1">
                    {group.category}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge
                        key={item}
                        variant="outline"
                        className="border-[oklch(0.28_0.022_240)] text-[oklch(0.73_0.018_240)] bg-[oklch(0.23_0.022_240)] hover:border-teal hover:text-teal transition-colors text-[13px] py-1 px-3 rounded-md"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              Projects
              <span className="h-px flex-1 bg-border max-w-[80px]" />
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-ocid={`projects.item.${i + 1}`}
              >
                <Card className="h-full bg-[oklch(0.215_0.020_240)] border-[oklch(0.28_0.022_240)] shadow-card hover:border-teal/50 transition-all duration-300 group rounded-xl">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base font-semibold text-foreground leading-snug">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 flex flex-col gap-4">
                    <p className="text-[oklch(0.60_0.016_240)] text-sm leading-[1.7]">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] text-teal bg-teal/10 border border-teal/20 px-2 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-teal text-sm font-medium">
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>View Details</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH + ACHIEVEMENTS */}
      <section className="py-20 bg-[oklch(0.185_0.020_240)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div
              id="research"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <FlaskConical className="h-5 w-5 text-teal" />
                Research
              </h2>
              <div className="space-y-4">
                {RESEARCH.map((item, i) => (
                  <Card
                    key={item.title}
                    className="bg-[oklch(0.215_0.020_240)] border-[oklch(0.28_0.022_240)] shadow-card"
                    data-ocid={`research.item.${i + 1}`}
                  >
                    <CardContent className="p-5">
                      <h3 className="text-sm font-semibold text-foreground mb-2 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-[oklch(0.60_0.016_240)] text-[13px] leading-[1.7]">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            <motion.div
              id="achievements"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Trophy className="h-5 w-5 text-teal" />
                Achievements
              </h2>
              <Card className="bg-[oklch(0.215_0.020_240)] border-[oklch(0.28_0.022_240)] shadow-card">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-teal/15 flex items-center justify-center shrink-0">
                      <Trophy className="h-5 w-5 text-teal" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-1">
                        PLAYTO 2022 – 2nd Place
                      </h3>
                      <p className="text-[oklch(0.60_0.016_240)] text-[13px]">
                        IIT Bombay
                      </p>
                      <Badge
                        className="mt-2 text-[11px] bg-teal/10 text-teal border-teal/20"
                        variant="outline"
                      >
                        National Level
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EDUCATION + CONTACT */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div
              id="education"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-teal" />
                Education
              </h2>
              <Card className="bg-[oklch(0.215_0.020_240)] border-[oklch(0.28_0.022_240)] shadow-card">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-teal/15 flex items-center justify-center shrink-0">
                      <GraduationCap className="h-5 w-5 text-teal" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-1">
                        B.E. Computer Science and Engineering
                      </h3>
                      <p className="text-[oklch(0.73_0.018_240)] text-[13px] mb-1">
                        SRM Easwari Engineering College
                      </p>
                      <p className="text-[oklch(0.60_0.016_240)] text-[13px]">
                        2023 – 2028
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              id="contact"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Mail className="h-5 w-5 text-teal" />
                Contact
              </h2>
              <Card className="bg-[oklch(0.215_0.020_240)] border-[oklch(0.28_0.022_240)] shadow-card">
                <CardContent className="p-5 space-y-4">
                  <a
                    href="mailto:dominicassisib@gmail.com"
                    className="flex items-center gap-3 text-[oklch(0.73_0.018_240)] hover:text-teal transition-colors group"
                    data-ocid="contact.email.link"
                  >
                    <div className="h-9 w-9 rounded-lg bg-[oklch(0.23_0.022_240)] flex items-center justify-center group-hover:bg-teal/15 transition-colors">
                      <Mail className="h-4 w-4" />
                    </div>
                    <span className="text-sm">dominicassisib@gmail.com</span>
                  </a>
                  <a
                    href="tel:+918610942629"
                    className="flex items-center gap-3 text-[oklch(0.73_0.018_240)] hover:text-teal transition-colors group"
                    data-ocid="contact.phone.link"
                  >
                    <div className="h-9 w-9 rounded-lg bg-[oklch(0.23_0.022_240)] flex items-center justify-center group-hover:bg-teal/15 transition-colors">
                      <Phone className="h-4 w-4" />
                    </div>
                    <span className="text-sm">+91 86109 42629</span>
                  </a>
                  <a
                    href="https://github.com/Dominic624"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[oklch(0.73_0.018_240)] hover:text-teal transition-colors group"
                    data-ocid="contact.github.link"
                  >
                    <div className="h-9 w-9 rounded-lg bg-[oklch(0.23_0.022_240)] flex items-center justify-center group-hover:bg-teal/15 transition-colors">
                      <Github className="h-4 w-4" />
                    </div>
                    <span className="text-sm">github.com/Dominic624</span>
                  </a>
                  <a
                    href="http://linkedin.com/in/dominic-assisi-b-6872811bb/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[oklch(0.73_0.018_240)] hover:text-teal transition-colors group"
                    data-ocid="contact.linkedin.link"
                  >
                    <div className="h-9 w-9 rounded-lg bg-[oklch(0.23_0.022_240)] flex items-center justify-center group-hover:bg-teal/15 transition-colors">
                      <Linkedin className="h-4 w-4" />
                    </div>
                    <span className="text-sm">
                      linkedin.com/in/dominic-assisi-b
                    </span>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[oklch(0.155_0.018_240)] border-t border-[oklch(0.28_0.022_240)] py-10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col items-center gap-6">
            <nav
              className="flex flex-wrap justify-center items-center"
              aria-label="Footer navigation"
            >
              {NAV_LINKS.map((link, i) => (
                <span key={link.href} className="flex items-center">
                  <a
                    href={link.href}
                    className="text-[12px] text-[oklch(0.60_0.016_240)] hover:text-teal transition-colors px-2 py-1"
                    data-ocid={`footer.${link.label.toLowerCase()}.link`}
                  >
                    {link.label}
                  </a>
                  {i < NAV_LINKS.length - 1 && (
                    <span className="text-[oklch(0.28_0.022_240)] text-xs select-none">
                      /
                    </span>
                  )}
                </span>
              ))}
            </nav>
            <div className="flex items-center gap-4">
              <a
                href="mailto:dominicassisib@gmail.com"
                aria-label="Email"
                className="h-9 w-9 rounded-full bg-[oklch(0.23_0.022_240)] flex items-center justify-center text-[oklch(0.60_0.016_240)] hover:text-teal hover:bg-teal/15 transition-all"
                data-ocid="footer.email.link"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/Dominic624"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="h-9 w-9 rounded-full bg-[oklch(0.23_0.022_240)] flex items-center justify-center text-[oklch(0.60_0.016_240)] hover:text-teal hover:bg-teal/15 transition-all"
                data-ocid="footer.github.link"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="http://linkedin.com/in/dominic-assisi-b-6872811bb/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="h-9 w-9 rounded-full bg-[oklch(0.23_0.022_240)] flex items-center justify-center text-[oklch(0.60_0.016_240)] hover:text-teal hover:bg-teal/15 transition-all"
                data-ocid="footer.linkedin.link"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
            <p className="text-[12px] text-[oklch(0.60_0.016_240)] text-center">
              &copy; {year} Dominic Assisi B. Built with{" "}
              <span className="text-teal">&hearts;</span> using{" "}
              <a
                href={caffeineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* SCROLL TO TOP */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 h-10 w-10 rounded-full bg-teal text-[oklch(0.165_0.018_240)] flex items-center justify-center shadow-teal hover:bg-teal-dark transition-all"
            aria-label="Scroll to top"
            data-ocid="scroll_to_top.button"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
