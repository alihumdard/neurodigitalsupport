import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  Bell,
  BookOpen,
  Brain,
  CheckCircle2,
  ClipboardList,
  FileText,
  Gauge,
  HeartHandshake,
  Layers3,
  Megaphone,
  MessageCircle,
  Radar,
  ShieldCheck,
  Sparkles,
  UsersRound
} from 'lucide-react';
import Footer from '@/components/Footer.jsx';
import Header from '@/components/Header.jsx';
import { useAccessibility } from '@/hooks/useAccessibility.jsx';

const products = [
  {
    id: 'nurotok',
    name: 'NuroTok',
    label: 'Sensory Regulation App',
    description: 'A calming wellbeing companion for sensory overload, emotional stress, daily check-ins, adaptive regulation tools, and personal wellbeing insights.',
    image: '/images/products/nurotok.jpeg',
    logo: '/images/products/nurotok-logo.jpeg',
    detailPath: '/nurotok',
    accent: 'emerald',
    icon: Brain,
    metrics: ['Sensory profile', 'Calm toolkit', 'Weekly insights'],
    features: [
      ['Personal sensory profile', 'Capture light, sound, routine, touch, and environmental preferences.', Brain],
      ['Adaptive regulation toolkit', 'Breathing, white noise, dim modes, routines, and grounding support.', Activity],
      ['Predictive wellbeing alerts', 'Gentle prompts when patterns suggest rising sensory stress.', Bell]
    ]
  },
  {
    id: 'altitok',
    name: 'AltiTok',
    label: 'Sensory-Aware Social Platform',
    description: 'A calmer social platform built around safer feeds, reduced pressure, thoughtful messaging, creator protection, and inclusive community spaces.',
    image: '/images/products/altitok.jpeg',
    logo: '/images/products/AltiTok.png',
    detailPath: '/altitok',
    accent: 'teal',
    icon: Gauge,
    metrics: ['Scroll control', 'Tone moderation', 'Safer spaces'],
    features: [
      ['Adjustable scroll speed', 'Slow down feeds and reduce fast-moving content overload.', Gauge],
      ['Content comfort controls', 'Filter triggers, hide social metrics, and reduce comparison pressure.', ShieldCheck],
      ['Respectful communication', 'Comment delays and AI tone support encourage healthier conversations.', MessageCircle]
    ]
  },
  {
    id: 'olitok',
    name: 'OliTok',
    label: 'Online Friendship & Support Network',
    description: 'A structured companionship platform connecting neurodivergent adults with trained volunteers for safe friendship, conversation, and confidence-building support.',
    image: '/images/products/olitok.jpeg',
    logo: '/images/products/oiltok.jpeg',
    detailPath: '/olitok',
    accent: 'amber',
    icon: HeartHandshake,
    metrics: ['Volunteer matching', 'Safe messaging', 'Group hangouts'],
    features: [
      ['Verified volunteers', 'Safeguarding checks, identity review, and specialist neurodiversity training.', CheckCircle2],
      ['Smart personal matching', 'Match by interests, communication style, comfort needs, and goals.', Sparkles],
      ['Flexible communication', 'Text, voice, video, scheduled sessions, and small group support.', UsersRound]
    ]
  },
  {
    id: 'care-logging',
    name: 'Care Logging App',
    label: 'Secure Support System',
    description: 'A professional digital companion for care teams, making daily record-keeping, incident notes, mood tracking, and exportable reports simple and reliable.',
    image: '/images/products/logging app.jpeg',
    detailPath: '/care-logging',
    accent: 'emerald',
    icon: ClipboardList,
    metrics: ['Daily logs', 'Mood tracking', 'Export reports'],
    features: [
      ['Fast daily logging', 'Record routines, meals, appointments, medication prompts, and care notes.', ClipboardList],
      ['Wellbeing monitoring', 'Track mood, behaviour, sensory triggers, and support responses over time.', Activity],
      ['Team-ready reporting', 'Multi-user access, incident records, real-time updates, and exports.', FileText]
    ]
  },
  {
    id: 'advocacy-hub',
    name: 'Digital Advocacy Hub',
    label: 'Awareness & Inclusion',
    description: 'A resource centre for neurodiversity awareness, workplace inclusion, public education, policy support, and practical campaign materials.',
    image: '/images/products/Digital Advocacy Hub.jpeg',
    detailPath: '/digital-advocacy-hub',
    accent: 'sky',
    icon: Megaphone,
    metrics: ['Campaign guides', 'Policy support', 'Inclusion tools'],
    features: [
      ['Awareness campaigns', 'Accessible campaign resources that improve understanding and reduce stigma.', Megaphone],
      ['Workplace inclusion', 'Guides and frameworks for more neuroinclusive organisations.', UsersRound],
      ['Policy and education resources', 'Briefs, templates, learning guides, and community action tools.', BookOpen]
    ]
  },
  {
    id: 'research-hub',
    name: 'Research & Insights Hub',
    label: 'Evidence-Led Innovation',
    description: 'A research intelligence hub for trusted studies, anonymised datasets, digital sensory reports, visual analytics, and evidence-led decision making.',
    image: '/images/products/research and insight hub.jpeg',
    detailPath: '/research-insights-hub',
    accent: 'violet',
    icon: BarChart3,
    metrics: ['Research library', 'Data sets', 'Visual analytics'],
    features: [
      ['Searchable research library', 'Browse studies, publications, reports, and evidence resources quickly.', BookOpen],
      ['Ethical data intelligence', 'Privacy-safe datasets supporting research and responsible innovation.', ShieldCheck],
      ['Visual analytics', 'Charts, trend reports, and clear summaries for complex research findings.', BarChart3]
    ]
  },
  {
    id: 'social-listening',
    name: 'Social Listening Dashboard',
    label: 'Real-Time AI Insights',
    description: 'An AI-powered analytics dashboard tracking public conversations, emerging themes, sentiment patterns, and community alerts across key online sources.',
    image: '/images/products/researchworker.jpeg',
    detailPath: '/social-listening-dashboard',
    accent: 'teal',
    icon: Radar,
    metrics: ['Trend graphs', 'Topic clusters', 'Community alerts'],
    features: [
      ['Trend monitoring', 'Visualise topic growth and public conversation patterns over time.', Radar],
      ['Topic clustering', 'Group discussions into meaningful themes, keywords, and insights.', Layers3],
      ['Real-time alerts', 'Notify teams when important community issues gain momentum.', Bell]
    ]
  }
];

const accentClasses = {
  emerald: {
    text: 'text-emerald-700 dark:text-emerald-300',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    border: 'border-emerald-200/80 dark:border-emerald-800/40',
    icon: 'bg-emerald-600 text-white'
  },
  teal: {
    text: 'text-teal-700 dark:text-teal-300',
    bg: 'bg-teal-50 dark:bg-teal-950/30',
    border: 'border-teal-200/80 dark:border-teal-800/40',
    icon: 'bg-teal-600 text-white'
  },
  amber: {
    text: 'text-amber-700 dark:text-amber-300',
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    border: 'border-amber-200/80 dark:border-amber-800/40',
    icon: 'bg-amber-500 text-white'
  },
  sky: {
    text: 'text-sky-700 dark:text-sky-300',
    bg: 'bg-sky-50 dark:bg-sky-950/30',
    border: 'border-sky-200/80 dark:border-sky-800/40',
    icon: 'bg-sky-600 text-white'
  },
  violet: {
    text: 'text-violet-700 dark:text-violet-300',
    bg: 'bg-violet-50 dark:bg-violet-950/30',
    border: 'border-violet-200/80 dark:border-violet-800/40',
    icon: 'bg-violet-600 text-white'
  },
};

const FeatureCard = ({ feature, accent }) => {
  const [title, description, Icon] = feature;
  const tone = accentClasses[accent];

  return (
    <div className={`rounded-lg border ${tone.border} ${tone.bg} p-4`}>
      <Icon className={`mb-4 h-5 w-5 ${tone.text}`} aria-hidden="true" />
      <h3 className="text-base font-extrabold text-slate-950 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  );
};

const ProductVisual = ({ product }) => {
  const tone = accentClasses[product.accent];
  const Icon = product.icon;

  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className={`absolute -inset-6 rounded-full ${tone.bg} blur-3xl`} />
      <div className="relative overflow-hidden rounded-lg border border-white/80 bg-white shadow-[0_32px_90px_rgba(15,23,42,0.16)] dark:border-white/10 dark:bg-card">
        <div className="aspect-[4/3] overflow-hidden">
          <img src={product.image} alt={`${product.name} preview`} className="h-full w-full object-cover" />
        </div>
        <div className="grid gap-3 p-5 sm:grid-cols-3">
          {product.metrics.map((metric) => (
            <div key={metric} className={`rounded-lg border ${tone.border} ${tone.bg} px-3 py-3`}>
              <Icon className={`mb-2 h-4 w-4 ${tone.text}`} aria-hidden="true" />
              <p className="text-xs font-extrabold leading-tight text-slate-900 dark:text-white">{metric}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FeaturesPage = () => {
  const { reducedMotion } = useAccessibility();

  const motionProps = reducedMotion ? {} : {
    initial: { opacity: 0, y: 26 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-120px' },
    transition: { duration: 0.55, ease: 'easeOut' }
  };

  return (
    <>
      <Helmet>
        <title>Features - NeuroDigital Support Ecosystem</title>
        <meta name="description" content="Explore every NeuroDigital Support product in one long-scroll master features page." />
      </Helmet>

      <Header />

      <main className="bg-[#f7fbf9] text-slate-950 transition-colors duration-300 dark:bg-background dark:text-white">
        <section className="relative overflow-hidden border-b border-emerald-100/80 bg-[linear-gradient(135deg,#ffffff_0%,#f6fffb_48%,#e8f7f2_100%)] py-16 dark:border-white/10 dark:bg-none dark:bg-card/40 sm:py-20 lg:py-24">
          <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_60%_34%,rgba(52,150,124,0.16),transparent_34%)]" aria-hidden="true" />
          <div className="absolute left-0 top-10 h-56 w-56 rounded-full bg-sky-100/55 blur-3xl dark:bg-sky-900/10" aria-hidden="true" />

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-[0.98fr_0.72fr]">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-400">
                  NeuroDigital Support Ecosystem
                </p>
                <h1 className="mt-5 max-w-4xl text-3xl font-black leading-[1.15] tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
                  7 products, 1 support vision
                </h1>
                <p className="mt-6 max-w-3xl text-base font-semibold leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
                  A complete digital ecosystem for sensory regulation, safer social connection, care documentation, advocacy, research intelligence, and real-time community insight.
                </p>

                <nav className="mt-10 flex flex-wrap gap-2.5" aria-label="Feature product sections">
                  {products.map((product) => (
                    <a
                      key={product.id}
                      href={`#${product.id}`}
                      className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/90 px-4 py-2 text-xs font-extrabold text-emerald-950 shadow-sm shadow-emerald-950/5 transition hover:-translate-y-0.5 hover:border-emerald-400 hover:bg-emerald-50 dark:border-white/10 dark:bg-background/80 dark:text-emerald-300"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                      {product.name}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="relative">
                <div className="rounded-lg border border-white/80 bg-white/88 p-5 shadow-[0_28px_90px_rgba(15,23,42,0.12)] backdrop-blur dark:border-white/10 dark:bg-background/70">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4 dark:border-white/10">
                    <div>
                      <p className="text-[11px] font-black uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">Product Suite</p>
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-slate-950 text-xl font-black text-white dark:bg-white dark:text-slate-950">
                      7
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3">
                    {products.slice(0, 3).map((product) => (
                      <a
                        key={product.id}
                        href={`#${product.id}`}
                        className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50/80 p-3 transition hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50/70 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                      >
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white ring-1 ring-slate-100 dark:bg-background dark:ring-white/10">
                          <img src={product.logo} alt={`${product.name} logo`} className="h-full w-full object-cover" />
                        </span>
                        <span>
                          <span className="block text-sm font-black text-slate-950 dark:text-white">{product.name}</span>
                          <span className="block text-xs font-bold text-slate-500 dark:text-slate-400">{product.label}</span>
                        </span>
                      </a>
                    ))}
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-lg bg-emerald-50 px-4 py-4 text-left dark:bg-emerald-950/25">
                      <p className="text-2xl font-black text-emerald-800 dark:text-emerald-300">3</p>
                      <p className="text-xs font-bold text-emerald-900/70 dark:text-emerald-200/80">User-facing apps</p>
                    </div>
                    <div className="rounded-lg bg-sky-50 px-4 py-4 text-left dark:bg-sky-950/25">
                      <p className="text-2xl font-black text-sky-800 dark:text-sky-300">4</p>
                      <p className="text-xs font-bold text-sky-900/70 dark:text-sky-200/80">Care, research & insight tools</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {products.map((product, index) => {
          const tone = accentClasses[product.accent];
          const Icon = product.icon;
          const isReversed = index % 2 === 1;

          return (
            <section
              key={product.id}
              id={product.id}
              className={`scroll-mt-24 border-b border-slate-200/70 py-20 dark:border-white/10 lg:py-28 ${index % 2 === 0 ? 'bg-white dark:bg-background' : 'bg-[#eef8f4] dark:bg-card/25'}`}
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${isReversed ? 'lg:[&>*:first-child]:order-2' : ''}`}
                  {...motionProps}
                >
                  <div>
                    <div className={`inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-lg ${tone.icon} shadow-lg shadow-slate-950/10`}>
                      {product.logo ? (
                        <img
                          src={product.logo}
                          alt={`${product.name} logo`}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      )}
                    </div>
                    <p className={`mt-6 text-xs font-black uppercase tracking-[0.22em] ${tone.text}`}>
                      {String(index + 1).padStart(2, '0')} / {product.label}
                    </p>
                    <h2 className="mt-3 text-3xl font-black leading-[1.15] tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
                      {product.name}
                    </h2>
                    <p className="mt-5 text-base font-semibold leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
                      {product.description}
                    </p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-3">
                      {product.features.map((feature) => (
                        <FeatureCard key={feature[0]} feature={feature} accent={product.accent} />
                      ))}
                    </div>

                    <Link
                      to={product.detailPath}
                      className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#34967C] px-6 py-3 text-sm font-extrabold text-white shadow-lg shadow-emerald-900/20 transition hover:-translate-y-0.5 hover:bg-[#2a7a65]"
                    >
                      Open Product Page
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>

                  <ProductVisual product={product} />
                </motion.div>
              </div>
            </section>
          );
        })}
      </main>

      <Footer />
    </>
  );
};

export default FeaturesPage;
