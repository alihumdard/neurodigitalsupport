import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Bell,
  BrainCircuit,
  Flame,
  Globe2,
  Hash,
  Layers3,
  LineChart,
  LockKeyhole,
  MessageSquareText,
  Network,
  Radar,
  ScanSearch,
  ShieldCheck,
  TrendingUp,
  UsersRound
} from 'lucide-react';
import Footer from '@/components/Footer.jsx';
import Header from '@/components/Header.jsx';

const overviewCards = [
  {
    title: 'Trend Monitoring',
    description: 'Track how conversations evolve across days, weeks, and months.',
    icon: TrendingUp
  },
  {
    title: 'Topic Clustering',
    description: 'Group related discussions into meaningful themes and insights.',
    icon: Layers3
  },
  {
    title: 'Real-Time Alerts',
    description: 'Receive notifications when important issues rapidly gain attention.',
    icon: Bell
  }
];

const features = [
  {
    title: 'Trend Graphs',
    description: 'Visualise discussion patterns and topic growth over time.',
    icon: LineChart
  },
  {
    title: 'Topic Clusters',
    description: 'Identify common themes across online conversations.',
    icon: Layers3
  },
  {
    title: 'Keyword Mapping',
    description: 'Track frequently used words and emerging phrases.',
    icon: Hash
  },
  {
    title: 'Heatmaps',
    description: 'View where conversations and engagement are most active.',
    icon: Flame
  },
  {
    title: 'Community Alerts',
    description: 'Receive alerts when significant topics gain momentum.',
    icon: Bell
  },
  {
    title: 'Researcher View',
    description: 'Focused dashboards designed for academic and evidence-led analysis.',
    icon: ScanSearch
  },
  {
    title: 'Organisation View',
    description: 'Simplified insights tailored for organisations and support teams.',
    icon: UsersRound
  },
  {
    title: 'Admin Controls',
    description: 'Manage reporting, moderation, and dashboard settings securely.',
    icon: LockKeyhole
  }
];

const sources = ['Reddit', 'Facebook', 'LinkedIn'];

const tracks = [
  'Autism Discussions',
  'Neurodivergence Trends',
  'Sensory Challenges',
  'Online Experiences',
  'Public Sentiment'
];

const ActionButton = ({ children }) => (
  <button
    type="button"
    className="inline-flex h-13 items-center justify-center rounded-full bg-[#4aa384] px-7 py-4 text-sm font-extrabold text-white shadow-[0_18px_42px_rgba(29,118,88,0.24),inset_0_1px_0_rgba(255,255,255,0.34)] ring-1 ring-white/45 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3f9275] hover:shadow-[0_26px_64px_rgba(29,118,88,0.32)] active:translate-y-0"
  >
    {children}
  </button>
);

const AnalyticsMockup = () => (
  <div className="relative mx-auto w-full max-w-[570px]">
    <div className="absolute -inset-8 rounded-full bg-[#6bc5a7]/18 blur-3xl" />
    <div className="relative rounded-[2.2rem] border border-white/80 bg-white/84 p-4 shadow-[0_38px_110px_rgba(11,43,33,0.18)] backdrop-blur-sm">
      <div className="rounded-[1.6rem] bg-[#f7fffb] p-5 ring-1 ring-[#dceee7]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eaf5f0] text-[#2f8066]">
              <BrainCircuit className="h-5 w-5" aria-hidden="true" />
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
              <path d="M12 120 C42 92, 68 108, 92 78 S146 38, 174 62 S216 110, 248 42" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.84" />
              <path d="M12 128 C48 116, 78 118, 108 96 S160 80, 190 94 S226 106, 248 86" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.2" />
              {[44, 96, 172, 228].map((cx) => (
                <circle key={cx} cx={cx} cy={cx === 44 ? 94 : cx === 96 ? 76 : cx === 172 ? 62 : 72} r="7" fill="currentColor" opacity="0.18" />
              ))}
            </svg>
          </div>

          <div className="space-y-4">
            <div className="rounded-[1.4rem] bg-white p-4 shadow-[0_14px_34px_rgba(15,50,40,0.06)] ring-1 ring-white">
              <span className="block h-3 w-24 rounded-full bg-[#b9dfd1]" />
              <div className="mt-5 grid grid-cols-4 gap-2">
                {[0.22, 0.5, 0.32, 0.72, 0.42, 0.9, 0.62, 0.28, 0.7, 0.38, 0.58, 0.8].map((opacity, index) => (
                  <span key={`${opacity}-${index}`} className="h-8 rounded-lg bg-[#2f8066]" style={{ opacity }} />
                ))}
              </div>
            </div>
            <div className="rounded-[1.4rem] bg-[#102f27] p-4 text-white shadow-[0_16px_42px_rgba(15,50,40,0.12)]">
              <div className="flex items-center gap-3">
                <span className="h-9 w-9 rounded-full bg-white/16" />
                <span className="h-2.5 flex-1 rounded-full bg-white/30" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {[40, 64, 52, 76].map((width) => (
                  <span key={width} className="h-7 rounded-full bg-white/14" style={{ width }} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          <div className="rounded-[1.25rem] bg-white p-4 shadow-[0_12px_28px_rgba(15,50,40,0.05)] ring-1 ring-white">
            <Radar className="h-5 w-5 text-[#2f8066]" aria-hidden="true" />
            <span className="mt-5 block h-2.5 rounded-full bg-[#dceee7]" />
          </div>
          <div className="rounded-[1.25rem] bg-[#eaf5f0] p-4 shadow-[0_12px_28px_rgba(15,50,40,0.05)]">
            <Network className="h-5 w-5 text-[#2f8066]" aria-hidden="true" />
            <span className="mt-5 block h-2.5 rounded-full bg-[#b9dfd1]" />
          </div>
          <div className="rounded-[1.25rem] bg-white p-4 shadow-[0_12px_28px_rgba(15,50,40,0.05)] ring-1 ring-white">
            <MessageSquareText className="h-5 w-5 text-[#2f8066]" aria-hidden="true" />
            <span className="mt-5 block h-2.5 rounded-full bg-[#dceee7]" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SocialListeningDashboardPage = () => {
  return (
    <>
      <Helmet>
        <title>Social Listening Dashboard</title>
        <meta
          name="description"
          content="A smart analytics dashboard designed to monitor public conversations, identify emerging themes, and support evidence-led understanding of neurodivergent digital experiences."
        />
      </Helmet>

      <Header />

      <main className="min-h-screen overflow-hidden bg-[#f8fffb] text-[#10231d]">
        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#f7fffb_38%,#dff6ed_100%)]">
          <div className="absolute left-1/2 top-16 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[#b7ead8]/32 blur-3xl" />
          <div className="relative mx-auto grid min-h-screen max-w-[1240px] items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1fr] lg:px-10">
            <div className="text-center lg:text-left">
              <div className="inline-flex rounded-full bg-[#eaf5f0] px-4 py-2 text-sm font-extrabold text-[#2f8066]">
                AI-Powered Research Analytics
              </div>
              <h1 className="mt-8 text-4xl font-extrabold leading-tight tracking-tight text-[#082f27] sm:text-5xl lg:text-6xl">
                Real-Time
                <br />
                <span className="text-[#2f8066]">Neurodiversity Insights</span>
              </h1>
              <p className="mx-auto mt-7 max-w-2xl text-lg font-semibold leading-relaxed text-[#314b41] sm:text-xl lg:mx-0">
                A smart analytics dashboard designed to monitor public conversations, identify emerging themes, and support evidence-led understanding of neurodivergent digital experiences.
              </p>
              <div className="mt-10 flex justify-center lg:justify-start">
                <ActionButton>Explore Dashboard</ActionButton>
              </div>
            </div>
            <AnalyticsMockup />
          </div>
        </section>

        <section className="bg-white py-24 sm:py-32">
          <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1fr] lg:px-10">
            <div>
              <div className="inline-flex rounded-full bg-[#eaf5f0] px-4 py-2 text-sm font-extrabold text-[#2f8066]">
                Insight Overview
              </div>
              <h2 className="mt-8 max-w-2xl text-5xl font-extrabold leading-tight tracking-tight text-[#082f27] sm:text-6xl">
                Understanding
                <br />
                <span className="text-[#2f8066]">Community Conversations</span>
              </h2>
              <p className="mt-7 max-w-xl text-lg font-semibold leading-relaxed text-[#536862]">
                Monitor trends, public sentiment, and emerging discussions relating to autism, neurodiversity, sensory experiences, and digital wellbeing.
              </p>
            </div>

            <div className="grid gap-4">
              {overviewCards.map(({ title, description, icon: Icon }) => (
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
                Dashboard Features
              </div>
              <h2 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-[#082f27] sm:text-5xl">
                AI-Powered Tools
                <br />
                <span className="text-[#2f8066]">For Smarter Analysis</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base font-semibold leading-relaxed text-[#536862]">
                Designed for researchers, organisations, and decision-makers seeking real-time neurodiversity insights.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {features.map(({ title, description, icon: Icon }) => (
                <article
                  key={title}
                  className="group rounded-[1.6rem] border border-[#e0eee8] bg-white p-7 shadow-[0_18px_54px_rgba(15,50,40,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-[#cde8dd] hover:shadow-[0_26px_72px_rgba(15,50,40,0.08)]"
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
          <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.86fr_1fr] lg:px-10">
            <div>
              <div className="inline-flex rounded-full bg-[#eaf5f0] px-4 py-2 text-sm font-extrabold text-[#2f8066]">
                Data Sources
              </div>
              <h2 className="mt-8 max-w-2xl text-5xl font-extrabold leading-tight tracking-tight text-[#082f27] sm:text-6xl">
                Public Conversations
                <br />
                <span className="text-[#2f8066]">Analysed Responsibly</span>
              </h2>
              <p className="mt-7 max-w-xl text-lg font-semibold leading-relaxed text-[#536862]">
                The platform analyses publicly available discussions to identify trends, sentiment, and community experiences while maintaining ethical data practices.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <article className="rounded-[1.6rem] border border-[#dceee7] bg-[#f7fffb] p-7 shadow-[0_18px_54px_rgba(15,50,40,0.045)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#2f8066] shadow-sm">
                  <Globe2 className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-7 text-xl font-extrabold tracking-tight text-[#082f27]">Sources</h3>
                <div className="mt-5 space-y-3">
                  {sources.map((source) => (
                    <div key={source} className="rounded-2xl bg-white px-4 py-3 text-sm font-extrabold text-[#17483b] shadow-sm ring-1 ring-[#e0eee8]">
                      {source}
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-[1.6rem] border border-[#dceee7] bg-[#f7fffb] p-7 shadow-[0_18px_54px_rgba(15,50,40,0.045)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#2f8066] shadow-sm">
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-7 text-xl font-extrabold tracking-tight text-[#082f27]">Tracks</h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {tracks.map((track) => (
                    <span key={track} className="rounded-full bg-white px-4 py-2 text-sm font-extrabold text-[#17483b] shadow-sm ring-1 ring-[#e0eee8]">
                      {track}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(135deg,#dff6ed_0%,#effbf7_52%,#ffffff_100%)] py-24">
          <div className="mx-auto flex max-w-[980px] flex-col items-center px-5 text-center sm:px-8">
            <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-[#10231d] sm:text-5xl">
              Smarter Insights
              <br />
              <span className="text-[#2f8066]">For Inclusive Digital Futures</span>
            </h2>
            <p className="mt-7 max-w-3xl text-lg font-semibold leading-relaxed text-[#536862]">
              Helping researchers and organisations better understand neurodivergent online experiences through ethical AI-powered analytics.
            </p>
            <div className="mt-10">
              <ActionButton>Explore Dashboard</ActionButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default SocialListeningDashboardPage;
