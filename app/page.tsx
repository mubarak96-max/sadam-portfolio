"use client";

import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Code,
  BarChart,
  Globe,
  Smartphone,
  ChevronRight,
  X
} from 'lucide-react';

// --- DATA SOURCE (Based on your CV) ---

const personalInfo = {
  name: "Sadam Sidwell Ssekidde",
  title: "Digital Marketer & Web Developer",
  location: "Dubai, UAE",
  email: "sadamsidwellssekidde@gmail.com",
  phone: "+971 52946744",
  summary: "Digital marketing professional who crafts campaigns that drive business growth and brand visibility. With expertise in SEO, Google Ads, and Meta Ads, I develop targeted strategies that consistently deliver qualified leads. Simultaneously, I possess hands-on experience in full-stack web and app development, bridging the gap between technical execution and marketing strategy.",
};

const skills = {
  marketing: [
    "Google Ads", "Meta Ads", "SEO (Ahrefs, SEMrush)",
    "Google Analytics 4", "GTM", "Conversion Rate Optimization"
  ],
  development: [
    "React.js", "Next.js", "Node.js",
    "Tailwind CSS", "Python", "React Native", "MongoDB"
  ],
  tools: [
    "HubSpot", "Zapier", "WordPress", "Shopify", "Figma"
  ]
};

const experience = [
  {
    company: "Home Sweet Home Real Estate",
    role: "Digital Marketing Executive & Web Developer",
    period: "Aug 2024 - Current",
    location: "Dubai",
    achievements: [
      "Generated 60+ qualified monthly leads with 55% lead-to-showing conversion rate.",
      "Identified 50+ high-value real estate keywords using Ahrefs and Google Trends.",
      "Improved local SEO visibility by 75% through schema markup and location-specific landing pages.",
      "Reduced cost per qualified lead by 35% via optimized Meta and Google Ads."
    ]
  },
  {
    company: "BookHero",
    role: "Digital Marketing & E-commerce Manager",
    period: "Jun 2023 - Aug 2024",
    location: "Dubai",
    achievements: [
      "Reduced customer acquisition cost (CAC) by 35% using lookalike audiences.",
      "Managed full-funnel Google Ads (Search, Shopping, Discovery).",
      "Implemented heat maps (Microsoft Clarity/Hotjar) to optimize user experience.",
      "Segmented audiences for persona-based targeting (B2B bulk vs. genre enthusiasts)."
    ]
  },
  {
    company: "Solving Path",
    role: "Web/App Developer & SEO Specialist",
    period: "Jan 2021 - Jul 2023",
    location: "Dubai",
    achievements: [
      "Integrated SEO best practices directly into the web development workflow.",
      "Built and maintained analytics dashboards for apps and websites.",
      "Contributed to the development of multiple high-performance web applications."
    ]
  },
  {
    company: "Brokers Online Africa",
    role: "Social Media Manager",
    period: "Aug 2019 - Jan 2021",
    achievements: [
      "Achieved 25% higher engagement on Story Ads.",
      "Reduced cost per lead by 40% using Lead Gen forms.",
      "Executed A/B testing on ad creatives and copy."
    ]
  }
];

// --- PLACEHOLDERS FOR YOUR NEW CONTENT ---

const projects = [
  {
    title: "Jex Institute",
    desc: "A professional educational website designed and developed for Jex Institute.",
    tech: ["WordPress", "PHP", "Performance Optimization"],
    link: "https://jexbarista.ae/",
    type: "Website"
  },
  {
    title: "BookHero",
    desc: "A fully functional e-commerce store for books with optimized conversion funnels.",
    tech: ["Shopify", "Liquid", "UX/UI Design"],
    link: "https://bookhero.ae/",
    type: "E-commerce"
  },
  {
    title: "Pinoy Used Cars",
    desc: "A modern used car marketplace platform with advanced search and filtering.",
    tech: ["Next.js", "Tailwind CSS", "AWS"],
    link: "https://pinoyusedcars.com/",
    type: "Web App"
  }
];

const adGallery = [
  {
    title: "Jex Institute",
    category: "Google Ad",
    image: "/googlead.PNG"
  },
  {
    title: "Home Sweet Home Real Estate",
    category: "Meta Ad",
    image: "/metaad.png"
  }
];

// --- COMPONENTS ---

export default function Portfolio() {
  const [selectedAd, setSelectedAd] = React.useState<{ title: string; category: string; image: string } | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200">

      {/* HEADER / HERO */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="font-bold text-xl tracking-tight text-blue-600">S.S.S.</h1>
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition">About</a>
            <a href="#experience" className="hover:text-blue-600 transition">Experience</a>
            <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
            <a href="#gallery" className="hover:text-blue-600 transition">Ad Gallery</a>
          </nav>
          <a href={`mailto:${personalInfo.email}`} className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition">
            Contact Me
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="bg-white pb-20 pt-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block p-2 px-4 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
            Available for hire in Dubai & Remote
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            {personalInfo.name}
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto">
            {personalInfo.title}
          </p>
          <p className="text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.summary}
          </p>

          <div className="flex justify-center gap-4">
            <a href="#projects" className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition">
              View Projects <ChevronRight size={18} />
            </a>
            <a href="/Ssekidde Sadam sidwell_CV.pdf" download className="flex items-center gap-2 border border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-medium hover:bg-slate-50 transition">
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Marketing */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <BarChart size={20} />
              </div>
              <h3 className="font-bold text-lg mb-4">Digital Marketing</h3>
              <div className="flex flex-wrap gap-2">
                {skills.marketing.map(s => (
                  <span key={s} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Dev */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <Code size={20} />
              </div>
              <h3 className="font-bold text-lg mb-4">Development</h3>
              <div className="flex flex-wrap gap-2">
                {skills.development.map(s => (
                  <span key={s} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <Globe size={20} />
              </div>
              <h3 className="font-bold text-lg mb-4">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map(s => (
                  <span key={s} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">Work History</h2>
          <div className="space-y-12">
            {experience.map((job, idx) => (
              <div key={idx} className="relative pl-8 border-l-2 border-slate-200 md:pl-0">

                <div className="md:flex items-start justify-between mb-4 relative">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[39px] top-1 w-5 h-5 bg-blue-600 rounded-full border-4 border-slate-50 md:hidden"></div>

                  <div className="md:w-1/3 md:text-right md:pr-12 md:relative">
                    {/* Timeline Dot Desktop */}
                    <div className="hidden md:block absolute -right-[7px] top-2 w-4 h-4 bg-blue-600 rounded-full border-2 border-white"></div>
                    <h4 className="font-bold text-slate-900 text-lg">{job.company}</h4>
                    <span className="text-sm text-slate-500 block mb-1">{job.period}</span>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded uppercase">{job.location || 'Remote'}</span>
                  </div>

                  <div className="md:w-2/3 md:pl-12 pt-1">
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{job.role}</h3>
                    <ul className="space-y-2">
                      {job.achievements.map((item, i) => (
                        <li key={i} className="text-slate-600 text-sm leading-relaxed flex items-start">
                          <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Featured Projects</h2>
              <p className="text-slate-500 mt-2">Web & App Development Highlights</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="h-48 bg-slate-100 flex items-center justify-center border-b border-slate-100 relative group-hover:bg-slate-200 transition">
                  <Smartphone className="text-slate-300" size={48} />
                  {/* Overlay Link */}
                  <a href={project.link} className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300">
                    <span className="text-white font-medium flex items-center gap-2">
                      View Project <ExternalLink size={16} />
                    </span>
                  </a>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-slate-900">{project.title}</h3>
                    <span className="text-[10px] font-bold uppercase tracking-wide text-slate-400 border border-slate-200 px-2 py-0.5 rounded">
                      {project.type}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AD GALLERY SECTION */}
      <section id="gallery" className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Ad Creative Gallery</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A selection of high-performing creatives across Meta, Google, and Display networks.
              These campaigns have driven ROAS improvements and lead volume.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {adGallery.map((ad, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedAd(ad)}
                className="group relative rounded-xl overflow-hidden aspect-[16/9] bg-slate-800 block cursor-pointer"
              >
                <img
                  src={ad.image}
                  alt={ad.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end">
                  <span className="text-blue-400 text-xs font-bold uppercase mb-1">{ad.category}</span>
                  <h3 className="font-bold text-lg">{ad.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <footer id="contact" className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Let's Work Together</h2>
          <div className="flex justify-center gap-8 mb-8">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition">
              <Mail size={20} />
              <span>{personalInfo.email}</span>
            </a>
            <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition">
              <Phone size={20} />
              <span>{personalInfo.phone}</span>
            </a>
          </div>
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </footer>

      {/* IMAGE MODAL */}
      {selectedAd && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedAd(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedAd(null);
            }}
          >
            <X size={24} />
          </button>

          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedAd.image}
              alt={selectedAd.title}
              className="max-h-[85vh] w-auto rounded-lg shadow-2xl object-contain bg-slate-900"
            />
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-white">{selectedAd.title}</h3>
              <span className="text-blue-400 text-sm font-medium uppercase">{selectedAd.category}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}