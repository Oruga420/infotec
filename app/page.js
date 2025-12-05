'use client';

const summary =
  "AI Solutions Architect and Salesforce Expert with over 9 years of experience integrating Generative AI into enterprise ecosystems. Proven track record of architecting end-to-end solutions using Einstein, Copilot, and external LLMs (OpenAI, Anthropic, Vertex AI) to drive over $1M in savings and reclaim 20,000+ man-hours annually. Specialized in bridging the gap between technical innovation and business strategy through rigorous model governance, ethical AI design, and scalable architecture on GCP, AWS, and Vercel.";

const expertise = [
  "AI Architecture",
  "Einstein Copilot",
  "Agentforce",
  "Generative AI",
  "RAG",
  "Prompt Engineering",
  "OpenAI API",
  "Anthropic",
  "Vertex AI",
  "MLOps",
  "GCP",
  "AWS",
  "Vercel",
  "Next.js",
  "Zapier",
  "Python",
  "Data Privacy",
  "Model Governance",
  "Compliance Auditing",
  "English (Native/Bilingual)",
  "Spanish (Full Professional)",
];

const experience = [
  {
    role: "AI Solutions Architect",
    company: "Assent",
    location: "Canada",
    dates: "Feb 2025 - Present",
    bullets: [
      "Architected and deployed highly secure GenAI strategies for a regulated compliance platform, utilizing Salesforce, GCP, and internal tools to replace repetitive operational tasks.",
      "Achieved over $1M in operational savings and 20,000+ man-hours reclaimed by implementing agentic workflows and live RAG connections.",
      "Increased AI adoption from 47% to 97% by designing custom MCP tools that empowered teams to achieve significant proficiency gains.",
      "Established comprehensive documentation and governance frameworks, ensuring all AI implementations were auditable, safe, and aligned with enterprise security standards.",
    ],
  },
  {
    role: "Salesforce Consultant",
    company: "Online Business Systems",
    location: "Toronto, Ontario",
    dates: "Jun 2024 - Nov 2024",
    bullets: [
      "Led Salesforce delivery with a focus on Agentforce and Einstein Copilot, defining use cases and wiring secure data access for AI assistants.",
      "Designed prompt and response pipelines, ensuring agents integrated smoothly into existing sales and service workflows.",
      "Developed reusable configuration patterns that accelerated client onboarding and ensured maintainable, scalable architectures.",
    ],
  },
  {
    role: "AI Solutions Architect",
    company: "Sesh | Ai Solutions",
    location: "Toronto, Ontario",
    dates: "Nov 2021 - Present",
    bullets: [
      "Designed architecture for over 120 GenAI applications and 90+ production chatbots, solving complex day-to-day business problems for diverse clients.",
      "Run a community of 100+ professionals, providing training on AI news, tutorials, and demos to facilitate technology extrapolation into daily work.",
      "Delivered webinars and talks for organizations such as Latinas in Tech and Somos Latinos in Tech Ottawa.",
      "Provided pro-bono consulting to 40+ small businesses, implementing automation stacks that saved thousands of dollars in manual labor.",
    ],
  },
  {
    role: "Salesforce Manager",
    company: "Globalization Partners",
    location: "Ontario, Canada",
    dates: "Nov 2018 - Nov 2023",
    bullets: [
      "Managed a Salesforce environment with 1,000+ licenses, overseeing the full data model, security, and integration roadmap.",
      "Spearheaded early AI adoption by building GIA (internal chatbot) and implementing GenAI-powered workflows for Jira and development support.",
      "Transitioned from Administrator to Manager, aligning platform growth with business-critical capabilities across sales, marketing, and operations.",
    ],
  },
];

const education = [
  {
    degree: "B.S. Systems Engineering (Ingenieria en Sistemas)",
    school: "Universidad Marista de MAcrida",
    dates: "2004 - 2007",
  },
];

const contact = [
  { label: "Phone", value: "+1 437 243 3693", href: "tel:+14372433693" },
  { label: "Email", value: "alex@seshwithfriends.org", href: "mailto:alex@seshwithfriends.org" },
  { label: "LinkedIn", value: "linkedin.com/in/amorac", href: "https://www.linkedin.com/in/amorac/" },
  { label: "Website", value: "eloruga.com/about", href: "https://www.eloruga.com/about/index.html" },
  { label: "GitHub", value: "github.com/Oruga420", href: "https://github.com/Oruga420" },
];

export default function Page() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="page">
      <div className="toolbar">
        <button className="btn" onClick={handlePrint}>
          Download as PDF
        </button>
      </div>
      <div className="canvas sparkles">
        <div className="header">
          <div>
            <h1 className="name">Alejandro De La Mora</h1>
            <div className="role">AI Solutions Architect & Salesforce Expert</div>
            <div className="summary">{summary}</div>
          </div>
          <aside className="contact-card">
            <div className="contact-label">Contact</div>
            {contact.map((item) => (
              <a key={item.label} className="contact-link" href={item.href} rel="noreferrer">
                <span>{item.value}</span>
              </a>
            ))}
          </aside>
        </div>

        <section className="section">
          <h2 className="section-title">Areas of Expertise</h2>
          <div className="badge-row">
            {expertise.map((skill) => (
              <span key={skill} className="pill">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="section experience">
          <h2 className="section-title">Work Experience</h2>
          {experience.map((job) => (
            <div key={job.company + job.role} className="card">
              <div className="card-header">
                <h3 className="card-title">
                  {job.role} | {job.company}
                </h3>
                <span className="card-subtitle">{job.dates}</span>
              </div>
              <div className="card-subtitle">{job.location}</div>
              <div>
                {job.bullets.map((point) => (
                  <div key={point} className="bullet">
                    {point}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="section">
          <h2 className="section-title">Education</h2>
          <div className="education-grid">
            {education.map((item) => (
              <div key={item.degree} className="edu-card">
                <div className="card-title">{item.degree}</div>
                <div className="card-subtitle">{item.school}</div>
                <div className="card-subtitle">{item.dates}</div>
              </div>
            ))}
          </div>
        </section>

        <p className="note">Tip: Use the download button to save this page exactly as it appears.</p>
      </div>
    </main>
  );
}
