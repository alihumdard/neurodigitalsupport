import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import {
  BarChart3,
  Bell,
  BookOpen,
  Database,
  FileText,
  Mail,
  Network,
  Search,
  ShieldCheck,
  TrendingUp,
  Users
} from 'lucide-react';
import { canonicalFor } from '@/lib/seo';
import Footer from '@/components/Footer.jsx';
import Header from '@/components/Header.jsx';

const researchCards = [
  {
    title: 'Algorithmic Exclusion and Neurodivergent Users: How Platform Design Shapes Belonging and Mental Health Online',
    metadata: 'Author: Kofi Ofori-Mensah (2026) | Type: Conceptual review | Read time: ~25 min',
    highlightTitle: 'The NAM Framework Highlight:',
    intro:
      'This paper introduces the Neurodivergent Algorithmic Misfit (NAM) framework, identifying four structural mechanisms of exclusion:',
    points: [
      'Attentional exploitation: how infinite scroll and variable rewards harm users with ADHD.',
      'Social ambiguity amplification: how algorithmic curation worsens the “double empathy problem”.',
      'Identity suppression: how content moderation penalises neurodivergent modes of expression.',
      'Community fragmentation: how segmentation isolates while also enabling connection.'
    ],
    download: 'Download PDF (320 KB)',
    documentHref: '/documents/Algorithmic Exclusion_Neurodivergent Users How Platform Design Shapes Belonging and Mental Health Online.pdf',
    documentName: 'Algorithmic Exclusion_Neurodivergent Users How Platform Design Shapes Belonging and Mental Health Online.pdf',
    icon: Network
  },
  {
    title: 'Diagnosis Based on Content: The Role of Social Media in Late Autism and ADHD Self-Identification Among Adults in the UK',
    metadata: 'Author: Kofi Ofori-Mensah (2026) | Type: Systematic narrative review | Read time: ~20 min',
    highlightTitle: 'The 4 Tensions Highlight:',
    intro:
      'This paper examines the phenomenon of social media-mediated self-identification through four key tensions:',
    points: [
      'Epistemic legitimacy vs. clinical accuracy',
      'Community affirmation vs. misinformation',
      'Empowerment vs. exploitation',
      'Digital access vs. diagnostic inequity'
    ],
    download: 'Download PDF (410 KB)',
    documentHref: '/documents/Diagnosis Based on Content_The Role of Social Media in Late Autism and ADHD Self-Identification Among Adults in the UK.pdf',
    documentName: 'Diagnosis Based on Content_The Role of Social Media in Late Autism and ADHD Self-Identification Among Adults in the UK.pdf',
    icon: Users
  }
];

const hubCards = [
  {
    title: 'Searchable Research Library',
    description: 'Find studies, reports, and publications by topic, keyword, or category.',
    icon: Search
  },
  {
    title: 'Published Studies',
    description: 'Peer-reviewed work on autism, sensory environments, workplace inclusion, and digital wellbeing.',
    icon: BookOpen
  },
  {
    title: 'Digital Sensory Environment Reports',
    description: 'How notifications, interface patterns, and app design affect neurodivergent users.',
    icon: Bell
  },
  {
    title: 'Ethical Anonymised Data Sets',
    description: 'Privacy-safe data for researchers and innovators.',
    icon: Database
  },
  {
    title: 'Visual Analytics Dashboards',
    description: 'Charts, maps, and trend summaries that make complex data easy to interpret.',
    icon: BarChart3
  },
  {
    title: 'Trend Reports',
    description: 'Regular updates on neurodiversity conversations from our Social Listening Dashboard.',
    icon: TrendingUp
  }
];

const collaborationItems = [
  'Use our anonymised datasets (subject to ethics agreement)',
  'Request custom analytics from the Social Listening Dashboard',
  'Partner on co-produced studies with our community.'
];

const ButtonLink = ({ children, variant = 'primary' }) => (
  <button
    type="button"
    className={`inline-flex min-h-[52px] items-center justify-center rounded-full px-6 text-center text-sm font-semibold transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4aa384] focus-visible:ring-offset-2 sm:px-7 ${
      variant === 'primary'
        ? 'bg-[#0f3d32] text-white shadow-[0_18px_40px_rgba(15,61,50,0.18)] hover:-translate-y-0.5 hover:bg-[#165846]'
        : 'border border-[#b8ded0] bg-white/80 text-[#123d32] shadow-[0_14px_34px_rgba(15,61,50,0.08)] hover:-translate-y-0.5 hover:border-[#7abda4] hover:bg-white'
    }`}
  >
    {children}
  </button>
);

const SectionHeading = ({ children, className = '' }) => (
  <h2 className={`text-3xl font-semibold leading-[1.15] tracking-normal text-[#0e332b] sm:text-4xl lg:text-5xl ${className}`}>
    {children}
  </h2>
);

const HeroImageMockup = () => (
  <div className="relative mx-auto w-full max-w-[430px] -translate-y-4 lg:-translate-y-8 lg:ml-auto">
    <div className="absolute -inset-5 rounded-[2rem] bg-[#dff3ec]/55 blur-2xl dark:bg-emerald-500/10" aria-hidden="true" />
    <div className="relative overflow-hidden rounded-[1.7rem] border border-[#d7eee5] bg-white/72 p-3 shadow-[0_28px_80px_rgba(15,61,50,0.13)] backdrop-blur-xl dark:border-border dark:bg-card/85 dark:shadow-[0_28px_80px_rgba(0,0,0,0.34)]">
      <img
        src="/images/products/research and insight hub.jpeg"
        alt="Research & Insights Hub"
        className="aspect-[4/3] w-full rounded-[1.25rem] object-cover"
      />
    </div>
  </div>
);

const ResearchInsightsHubPage = () => {
  const { pathname } = useLocation();
  const isResearchAlias = pathname === '/research';

  return (
  <>
    <Helmet>
      {isResearchAlias ? (
        <>
          <title>Research | NeuroDigital Support</title>
          <meta
            name="description"
            content="Explore NeuroDigital Support's ongoing research initiatives and evidence-based approach to neurodivergent digital care."
          />
          <link rel="canonical" href={canonicalFor('/research-insights-hub')} />
        </>
      ) : (
        <>
          <title>Research & Insights Hub | NeuroDigital Support</title>
          <meta
            name="description"
            content="A research intelligence hub offering a searchable research library, ethical data intelligence, and visual analytics for evidence-led decision making."
          />
          <link rel="canonical" href={canonicalFor('/research-insights-hub')} />
        </>
      )}
    </Helmet>

    <Header />

    <main className="theme-aware-page min-h-screen overflow-hidden bg-[#fbfffd] text-[#142d26]">
      <section className="relative bg-[linear-gradient(140deg,#ffffff_0%,#fbfffd_46%,#e8f8f2_100%)]">
        <div className="absolute left-1/2 top-20 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[#bceada]/24 blur-3xl" />
        <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-[1220px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.95fr_0.72fr] lg:px-10">
          <div className="max-w-[640px] text-center lg:text-left">
            <h1 className="text-balance text-4xl font-semibold leading-[1.08] tracking-normal text-[#0c3028] sm:text-5xl lg:text-[4rem]">
              Research & Insights Hub
            </h1>
            <p className="mt-8 max-w-xl text-balance text-2xl font-semibold leading-snug text-[#28745f] sm:text-3xl">
              Evidence-Led Innovation for Inclusive Digital Futures
            </p>
            <p className="mt-7 max-w-xl text-lg font-medium leading-8 text-[#4f665f] sm:text-xl">
              Our Research Hub provides access to trusted studies, dashboards, reports, and insights focused on autism, neurodivergence, and digital well-being.
            </p>
            <p className="mt-7 max-w-xl text-base font-semibold leading-7 text-[#173f34] sm:text-lg">
              Every resource is shaped by lived experience, peer-reviewed academic work, and a commitment to making knowledge accessible.
            </p>
          </div>

          <HeroImageMockup />
        </div>
      </section>

      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            <SectionHeading className="max-w-4xl text-balance">Featured Research – Available for Download</SectionHeading>
            <p className="mt-6 max-w-3xl text-balance text-lg font-medium leading-8 text-[#536b64]">
              Two landmark papers from Kofi Ofori-Mensah (MSc, University of Roehampton), founder of NeuroDigital Support, form the evidence base for our ecosystem.
            </p>
            <p className="mt-5 max-w-3xl text-balance text-base font-semibold leading-7 text-[#173f34]">
              These works directly inform the design of NuroTok, AltiTok, the Social Listening Dashboard, and every other tool we build.
            </p>
          </div>

          <div className="mt-14 grid gap-7 lg:grid-cols-2">
            {researchCards.map(({ title, metadata, highlightTitle, intro, points, download, documentHref, documentName, icon: Icon }) => (
              <article
                key={title}
                className="flex flex-col rounded-[2rem] border border-[#d9eee6] bg-[linear-gradient(145deg,#ffffff_0%,#f7fffb_100%)] p-7 shadow-[0_24px_80px_rgba(15,61,50,0.08)] sm:p-9"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e7f7f1] text-[#28745f]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-8 text-2xl font-semibold leading-tight tracking-normal text-[#0c3028]">
                  {title}
                </h3>
                <p className="mt-5 text-sm font-semibold leading-6 text-[#5b716a]">{metadata}</p>
                <div className="mt-7 rounded-[1.5rem] bg-white/82 p-5 ring-1 ring-[#e2f1ec]">
                  <p className="text-base font-semibold text-[#123d32]">{highlightTitle}</p>
                  <p className="mt-3 text-sm font-medium leading-6 text-[#536b64]">{intro}</p>
                  <ul className="mt-4 space-y-3">
                    {points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm font-medium leading-6 text-[#344d45]">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#63b898]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={documentHref}
                  download={documentName}
                  className="mt-auto inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-[#b8ded0] bg-white px-6 text-sm font-semibold text-[#123d32] shadow-[0_14px_34px_rgba(15,61,50,0.08)] transition duration-300 hover:-translate-y-0.5 hover:border-[#7abda4] hover:bg-[#f7fffb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#63b898] focus-visible:ring-offset-2"
                >
                  <FileText className="h-4 w-4" aria-hidden="true" />
                  {download}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#f7fffb] py-24 sm:py-28">
        <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-[#c8efe1]/28 blur-3xl" />
        <div className="relative mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading>More from the Research Hub</SectionHeading>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {hubCards.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="rounded-[1.6rem] border border-[#d9eee6] bg-white p-7 shadow-[0_18px_54px_rgba(15,61,50,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,61,50,0.09)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e7f7f1] text-[#28745f]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight tracking-normal text-[#0c3028]">{title}</h3>
                <p className="mt-4 text-sm font-medium leading-6 text-[#536b64]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto grid max-w-[1180px] gap-7 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
          <article className="rounded-[2rem] border border-[#d9eee6] bg-[#fbfffd] p-8 shadow-[0_22px_70px_rgba(15,61,50,0.07)] sm:p-10">
            <SectionHeading className="max-w-xl !text-2xl sm:!text-3xl lg:!text-[2.15rem]">For Researchers, Institutions, Charities & Policymakers</SectionHeading>
            <ul className="mt-8 space-y-4">
              {collaborationItems.map((item) => (
                <li key={item} className="flex gap-3 text-base font-medium leading-7 text-[#3b554d]">
                  <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[#28745f]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-base font-semibold text-[#123d32]">
              Research enquiries: info@neurodigitalsupport.com
            </p>
          </article>

          <article className="rounded-[2rem] border border-[#d9eee6] bg-[linear-gradient(145deg,#e7f7f1_0%,#ffffff_100%)] p-8 shadow-[0_22px_70px_rgba(15,61,50,0.07)] sm:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#28745f] shadow-sm">
              <Mail className="h-5 w-5" aria-hidden="true" />
            </div>
            <SectionHeading className="mt-8 !text-2xl sm:!text-3xl lg:!text-[2.15rem]">Stay Updated</SectionHeading>
            <p className="mt-6 text-base font-medium leading-7 text-[#3b554d]">
              Subscribe to our research newsletter to receive new studies, sensory environment reports, and data briefs.
            </p>
            <form className="mt-8 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Email Input"
                className="min-h-[52px] flex-1 rounded-full border border-[#b8ded0] bg-white px-5 text-sm font-medium text-[#123d32] outline-none transition placeholder:text-[#78928a] focus:border-[#63b898] focus:ring-2 focus:ring-[#c8efe1]"
              />
              <ButtonLink>Subscribe to Research Updates</ButtonLink>
            </form>
          </article>
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,#e3f7f0_0%,#fbfffd_52%,#ffffff_100%)] py-24">
        <div className="mx-auto max-w-[1000px] px-5 text-center sm:px-8 lg:px-10">
          <p className="mx-auto max-w-4xl text-sm font-semibold leading-7 text-[#536b64]">
            Both papers are unpublished manuscripts deposited in the University of Roehampton institutional repository and made available under open access for non-commercial use.
          </p>
          <h2 className="mt-9 text-3xl font-semibold leading-[1.15] tracking-normal text-[#0c3028] sm:text-4xl lg:text-5xl">
            Explore the Evidence
          </h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink>Browse the Research Library</ButtonLink>
            <ButtonLink variant="outline">Request Data Access</ButtonLink>
            <ButtonLink variant="outline">Book a Demo of the Social Listening Dashboard</ButtonLink>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </>
  );
};

export default ResearchInsightsHubPage;
