import React from 'react';
import { Helmet } from 'react-helmet';
import {
  AreaChart,
  BarChart3,
  BookOpen,
  Database,
  FileText,
  LineChart,
  Library,
  Search,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';
import Footer from '@/components/Footer.jsx';
import Header from '@/components/Header.jsx';

const focusCards = [
  {
    title: 'Searchable Research Library',
    description: 'Quickly access studies, reports, and publications by topic or category.',
    icon: Search
  },
  {
    title: 'Digital Sensory Reports',
    description: 'Explore how digital environments affect neurodivergent users and wellbeing.',
    icon: FileText
  },
  {
    title: 'Visual Analytics',
    description: 'Transform complex data into accessible charts, trends, and summaries.',
    icon: AreaChart
  }
];

const features = [
  {
    title: 'Searchable Research Library',
    description: 'Browse studies, publications, and evidence resources efficiently.',
    icon: Library
  },
  {
    title: 'Published Studies',
    description: 'Peer-reviewed research focused on autism and neurodiversity.',
    icon: BookOpen
  },
  {
    title: 'Digital Sensory Environment Reports',
    description: 'Insights into interfaces, notifications, and digital wellbeing experiences.',
    icon: FileText
  },
  {
    title: 'Ethical Anonymised Data Sets',
    description: 'Privacy-safe datasets supporting ethical innovation and research.',
    icon: Database
  },
  {
    title: 'Visual Analytics Dashboards',
    description: 'Clear visual summaries, trends, and accessible research insights.',
    icon: BarChart3
  },
  {
    title: 'Trend Reports',
    description: 'Track emerging topics and patterns across neurodiversity research.',
    icon: TrendingUp
  }
];

const ActionButton = ({ children, variant = 'primary' }) => (
  <button
    type="button"
    className={`inline-flex h-13 items-center justify-center rounded-full px-7 py-4 text-sm font-extrabold transition-all duration-300 active:translate-y-0 ${
      variant === 'primary'
        ? 'bg-[#4aa384] text-white shadow-[0_18px_42px_rgba(29,118,88,0.24),inset_0_1px_0_rgba(255,255,255,0.34)] ring-1 ring-white/45 hover:-translate-y-0.5 hover:bg-[#3f9275] hover:shadow-[0_26px_64px_rgba(29,118,88,0.32)]'
        : 'border border-[#b7dcca] bg-white/70 text-[#17483b] shadow-[0_12px_34px_rgba(15,50,40,0.06)] hover:-translate-y-0.5 hover:border-[#8bc7ad] hover:bg-white'
    }`}
  >
    {children}
  </button>
);

const ResearchDashboardMockup = () => (
  <div className="relative mx-auto w-full max-w-[560px]">
    <div className="absolute -inset-8 rounded-full bg-[#6bc5a7]/18 blur-3xl" />
    <div className="relative rounded-[2.2rem] border border-white/80 bg-white/84 p-4 shadow-[0_38px_110px_rgba(11,43,33,0.18)] backdrop-blur-sm">
      <div className="rounded-[1.6rem] bg-[#f7fffb] p-5 ring-1 ring-[#dceee7]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eaf5f0] text-[#2f8066]">
              <LineChart className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="space-y-2">
              <span className="block h-3 w-36 rounded-full bg-[#b9dfd1]" />
              <span className="block h-2.5 w-24 rounded-full bg-[#dceee7]" />
            </div>
          </div>
          <span className="h-8 w-20 rounded-full bg-white shadow-sm ring-1 ring-[#dceee7]" />
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1.4rem] bg-white p-4 shadow-[0_14px_34px_rgba(15,50,40,0.06)] ring-1 ring-white">
            <div className="flex items-center justify-between">
              <span className="h-3 w-28 rounded-full bg-[#b9dfd1]" />
              <span className="h-7 w-16 rounded-full bg-[#eaf5f0]" />
            </div>
            <svg viewBox="0 0 260 150" className="mt-5 h-40 w-full text-[#2f8066]" aria-hidden="true">
              <path d="M12 118 C46 78, 70 94, 96 68 S158 38, 190 64 S224 104, 248 42" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.82" />
              <path d="M12 126 C54 110, 82 116, 112 92 S166 76, 194 92 S230 104, 248 82" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.22" />
              {[40, 98, 162, 218].map((cx) => (
                <circle key={cx} cx={cx} cy={cx === 40 ? 88 : cx === 98 ? 68 : cx === 162 ? 50 : 74} r="7" fill="currentColor" opacity="0.18" />
              ))}
            </svg>
          </div>

          <div className="space-y-4">
            <div className="rounded-[1.4rem] bg-white p-4 shadow-[0_14px_34px_rgba(15,50,40,0.06)] ring-1 ring-white">
              <span className="block h-3 w-24 rounded-full bg-[#b9dfd1]" />
              <div className="mt-5 flex h-28 items-end gap-2">
                {[44, 78, 56, 92, 66].map((height) => (
                  <span key={height} className="flex-1 rounded-t-xl bg-[#98ccb7]" style={{ height }} />
                ))}
              </div>
            </div>
            <div className="rounded-[1.4rem] bg-[#102f27] p-4 text-white shadow-[0_16px_42px_rgba(15,50,40,0.12)]">
              <div className="flex items-center gap-3">
                <span className="h-9 w-9 rounded-full bg-white/16" />
                <span className="h-2.5 flex-1 rounded-full bg-white/30" />
              </div>
              <div className="mt-4 space-y-2">
                <span className="block h-2.5 rounded-full bg-white/18" />
                <span className="block h-2.5 w-2/3 rounded-full bg-white/18" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          <span className="h-20 rounded-[1.25rem] bg-white shadow-[0_12px_28px_rgba(15,50,40,0.05)] ring-1 ring-white" />
          <span className="h-20 rounded-[1.25rem] bg-[#eaf5f0] shadow-[0_12px_28px_rgba(15,50,40,0.05)]" />
          <span className="h-20 rounded-[1.25rem] bg-white shadow-[0_12px_28px_rgba(15,50,40,0.05)] ring-1 ring-white" />
        </div>
      </div>
    </div>
  </div>
);

const ResearchInsightsHubPage = () => {
  return (
    <>
      <Helmet>
        <title>Research & Insights Hub</title>
        <meta
          name="description"
          content="The Research & Insights Hub provides trusted studies, reports, dashboards, and evidence-based insights focused on neurodiversity and digital wellbeing."
        />
      </Helmet>

      <Header />

      <main className="product-detail-page min-h-screen overflow-hidden bg-[#f8fffb] text-[#10231d]">
        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#f7fffb_38%,#dff6ed_100%)]">
          <div className="absolute left-1/2 top-16 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[#b7ead8]/32 blur-3xl" />
          <div className="relative mx-auto grid min-h-screen max-w-[1240px] items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1fr] lg:px-10">
            <div className="text-center lg:text-left">
              <div className="inline-flex rounded-full bg-[#eaf5f0] px-4 py-2 text-sm font-extrabold text-[#2f8066]">
                Evidence-Led Research Platform
              </div>
              <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight text-[#082f27] sm:text-6xl lg:text-7xl">
                Innovation For
                <br />
                <span className="text-[#2f8066]">Inclusive Digital Futures</span>
              </h1>
              <p className="mx-auto mt-7 max-w-2xl text-lg font-semibold leading-relaxed text-[#314b41] sm:text-xl lg:mx-0">
                The Research & Insights Hub provides trusted studies, reports, dashboards, and evidence-based insights focused on neurodiversity and digital wellbeing.
              </p>
              <div className="mt-10 flex justify-center lg:justify-start">
                <ActionButton>Explore Research</ActionButton>
              </div>
            </div>
            <ResearchDashboardMockup />
          </div>
        </section>

        <section className="bg-white py-24 sm:py-32">
          <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1fr] lg:px-10">
            <div>
              <div className="inline-flex rounded-full bg-[#eaf5f0] px-4 py-2 text-sm font-extrabold text-[#2f8066]">
                Research Focus
              </div>
              <h2 className="mt-8 max-w-2xl text-5xl font-extrabold leading-tight tracking-tight text-[#082f27] sm:text-6xl">
                Trusted Research
                <br />
                <span className="text-[#2f8066]">Designed For Impact</span>
              </h2>
              <p className="mt-7 max-w-xl text-lg font-semibold leading-relaxed text-[#536862]">
                Access evidence-based insights, studies, and sensory environment research that support inclusive digital experiences and informed decision-making.
              </p>
            </div>

            <div className="grid gap-4">
              {focusCards.map(({ title, description, icon: Icon }) => (
                <article
                  key={title}
                  className="group rounded-[1.5rem] border border-[#dceee7] bg-[#f7fffb] p-6 shadow-[0_18px_50px_rgba(15,50,40,0.045)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_70px_rgba(15,50,40,0.08)]"
                >
                  <div className="flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[#2f8066] shadow-sm">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold tracking-tight text-[#082f27]">{title}</h3>
                      <p className="mt-2 text-sm font-medium leading-relaxed text-[#536862]">{description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#f7fffb] py-24 sm:py-32">
          <div className="absolute left-1/2 top-16 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-[#dff6ed]/36 blur-3xl" />
          <div className="relative mx-auto max-w-[1160px] px-5 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex rounded-full bg-[#eaf5f0] px-4 py-2 text-sm font-extrabold text-[#2f8066]">
                Core Features
              </div>
              <h2 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-[#082f27] sm:text-5xl">
                Research Tools
                <br />
                <span className="text-[#2f8066]">& Evidence Resources</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base font-semibold leading-relaxed text-[#536862]">
                Designed to support researchers, institutions, charities, and policymakers with accessible and evidence-led insights.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {features.map(({ title, description, icon: Icon }) => (
                <article
                  key={title}
                  className="group rounded-[1.6rem] border border-[#e0eee8] bg-white p-8 shadow-[0_18px_54px_rgba(15,50,40,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-[#cde8dd] hover:shadow-[0_26px_72px_rgba(15,50,40,0.08)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf5f0] text-[#2f8066] transition-colors duration-300 group-hover:bg-[#dff3ec]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-7 text-base font-extrabold tracking-tight text-[#082f27]">{title}</h3>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-[#536862]">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-[1080px] px-5 sm:px-8 lg:px-10">
            <article className="overflow-hidden rounded-[2rem] border border-[#dceee7] bg-[linear-gradient(145deg,rgba(255,255,255,0.96),rgba(247,255,251,0.84))] p-8 shadow-[0_28px_90px_rgba(15,50,40,0.075)] sm:p-12">
              <div className="inline-flex rounded-full bg-[#eaf5f0] px-4 py-2 text-sm font-extrabold text-[#2f8066]">
                Featured Dissertation
              </div>
              <h2 className="mt-8 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-[#082f27] sm:text-5xl">
                Exploring The Lived Experiences
                <br />
                <span className="text-[#2f8066]">Of Autistic Adults With Social Media Marketing In The UK</span>
              </h2>
              <p className="mt-7 max-w-3xl text-lg font-semibold leading-relaxed text-[#536862]">
                A lived-experience research project exploring digital interaction, accessibility, and social media experiences for autistic adults in the UK.
              </p>
              <p className="mt-5 text-sm font-extrabold text-[#2f8066]">
                Designed for researchers, institutions, charities, and policymakers.
              </p>
              <div className="mt-9">
                <ActionButton variant="outline">View Dissertation</ActionButton>
              </div>
            </article>
          </div>
        </section>

        <section className="bg-[linear-gradient(135deg,#dff6ed_0%,#effbf7_52%,#ffffff_100%)] py-24">
          <div className="mx-auto flex max-w-[980px] flex-col items-center px-5 text-center sm:px-8">
            <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-[#10231d] sm:text-5xl">
              Supporting Inclusive
              <br />
              <span className="text-[#2f8066]">Research & Innovation</span>
            </h2>
            <p className="mt-7 max-w-3xl text-lg font-semibold leading-relaxed text-[#536862]">
              Helping organisations and researchers access trustworthy neurodiversity-focused insights and evidence.
            </p>
            <div className="mt-10">
              <ActionButton>Explore Research</ActionButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ResearchInsightsHubPage;
