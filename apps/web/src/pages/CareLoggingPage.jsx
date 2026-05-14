import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Activity,
  Bell,
  CalendarCheck,
  ClipboardList,
  Download,
  FileText,
  HeartPulse,
  Mic,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UsersRound
} from 'lucide-react';
import Footer from '@/components/Footer.jsx';
import Header from '@/components/Header.jsx';

const whyCards = [
  {
    title: 'Fast Daily Logging',
    description: 'Quickly record meals, appointments, medication prompts, and routines.',
    icon: ClipboardList
  },
  {
    title: 'Wellbeing Monitoring',
    description: 'Track moods, behaviour changes, and sensory triggers with structured observations.',
    icon: HeartPulse
  },
  {
    title: 'Team Collaboration',
    description: 'Keep staff connected through secure multi-user access and real-time updates.',
    icon: UsersRound
  }
];

const features = [
  {
    title: 'Daily Activity Logs',
    description: 'Record routines, meals, activities, and appointments throughout the day.',
    icon: ClipboardList
  },
  {
    title: 'Mood Tracking',
    description: 'Monitor emotional wellbeing and behavioural patterns over time.',
    icon: HeartPulse
  },
  {
    title: 'Behaviour Notes',
    description: 'Capture structured observations and support responses securely.',
    icon: FileText
  },
  {
    title: 'Sensory Trigger Reports',
    description: 'Track environmental triggers like noise, lighting, or disruptions.',
    icon: Activity
  },
  {
    title: 'Incident Reporting',
    description: 'Create secure time-stamped reports for important events or concerns.',
    icon: ShieldCheck
  },
  {
    title: 'Multi-User Staff Access',
    description: 'Allow teams and managers to collaborate with role-based permissions.',
    icon: UsersRound
  },
  {
    title: 'Voice Input Logging',
    description: 'Add notes quickly using voice support while working.',
    icon: Mic
  },
  {
    title: 'Real-Time Updates',
    description: 'Keep staff informed instantly across devices and shifts.',
    icon: Bell
  },
  {
    title: 'Exportable Reports',
    description: 'Generate professional summaries for reviews, audits, or healthcare teams.',
    icon: Download
  }
];

const benefits = [
  {
    title: 'Easy To Use',
    description: 'Designed for quick learning and simple daily workflows.',
    icon: Sparkles
  },
  {
    title: 'Professional Reporting',
    description: 'Structured logs and reports suitable for audits and reviews.',
    icon: FileText
  },
  {
    title: 'Works Anywhere',
    description: 'Available across mobile and tablet devices for flexible care support.',
    icon: Download
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

const DashboardMockup = () => (
  <div className="relative mx-auto w-full max-w-[430px] lg:ml-auto">
    <div className="absolute -inset-5 rounded-[2rem] bg-[#dff3ec]/55 blur-2xl" aria-hidden="true" />
    <div className="relative overflow-hidden rounded-[1.7rem] border border-[#d7eee5] bg-white/72 p-3 shadow-[0_28px_80px_rgba(15,61,50,0.13)] backdrop-blur-xl">
      <div className="rounded-[1.25rem] bg-[#f7fffb] p-4 ring-1 ring-[#dceee7]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eaf5f0] text-[#2f8066]">
              <Stethoscope className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="space-y-2">
              <span className="block h-3 w-32 rounded-full bg-[#b9dfd1]" />
              <span className="block h-2.5 w-20 rounded-full bg-[#dceee7]" />
            </div>
          </div>
          <span className="h-8 w-20 rounded-full bg-white shadow-sm ring-1 ring-[#dceee7]" />
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <div className="rounded-[1.4rem] bg-white p-4 shadow-[0_14px_34px_rgba(15,50,40,0.06)] ring-1 ring-white">
              <div className="flex items-center justify-between">
                <span className="h-3 w-28 rounded-full bg-[#b9dfd1]" />
                <span className="h-7 w-16 rounded-full bg-[#eaf5f0]" />
              </div>
              <div className="mt-4 space-y-3">
                {[72, 86, 58].map((width) => (
                  <div key={width} className="flex items-center gap-3">
                    <span className="h-8 w-8 rounded-full bg-[#eaf5f0]" />
                    <span className="h-2.5 flex-1 rounded-full bg-[#dceee7]">
                      <span className="block h-full rounded-full bg-[#70b79a]" style={{ width: `${width}%` }} />
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <span className="h-20 rounded-[1.25rem] bg-white shadow-[0_12px_28px_rgba(15,50,40,0.05)] ring-1 ring-white" />
              <span className="h-20 rounded-[1.25rem] bg-[#eaf5f0] shadow-[0_12px_28px_rgba(15,50,40,0.05)]" />
              <span className="h-20 rounded-[1.25rem] bg-white shadow-[0_12px_28px_rgba(15,50,40,0.05)] ring-1 ring-white" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[1.4rem] bg-white p-4 shadow-[0_14px_34px_rgba(15,50,40,0.06)] ring-1 ring-white">
              <span className="block h-3 w-24 rounded-full bg-[#b9dfd1]" />
              <div className="mt-4 flex h-24 items-end gap-2">
                {[46, 76, 54, 88, 64].map((height) => (
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
      </div>
    </div>
  </div>
);

const CareLoggingPage = () => {
  return (
    <>
      <Helmet>
        <title>Care Logging App</title>
        <meta
          name="description"
          content="The Care Logging App helps care homes and supported living teams record daily support, wellbeing observations, incidents, and communication in a secure and easy-to-use system."
        />
      </Helmet>

      <Header />

      <main className="product-detail-page min-h-screen overflow-hidden bg-[#f8fffb] text-[#10231d]">
        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#f7fffb_38%,#dff6ed_100%)]">
          <div className="absolute left-1/2 top-16 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[#b7ead8]/32 blur-3xl" />
          <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-[1220px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.95fr_0.72fr] lg:px-10">
            <div className="text-center lg:text-left">
              <div className="inline-flex rounded-full bg-[#eaf5f0] px-4 py-2 text-sm font-extrabold text-[#2f8066]">
                Professional Care Support Tools
              </div>
              <h1 className="mt-8 text-3xl font-extrabold leading-[1.15] tracking-tight text-[#082f27] sm:text-4xl lg:text-5xl">
                Smarter Support
                <br />
                <span className="text-[#2f8066]">For Care Teams</span>
              </h1>
              <p className="mx-auto mt-7 max-w-2xl text-lg font-semibold leading-relaxed text-[#314b41] sm:text-xl lg:mx-0">
                The Care Logging App helps care homes and supported living teams record daily support, wellbeing observations, incidents, and communication in a secure and easy-to-use system.
              </p>
              <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                <ActionButton>Explore Features</ActionButton>
                <ActionButton variant="outline">Download App</ActionButton>
              </div>
            </div>
            <DashboardMockup />
          </div>
        </section>

        <section className="bg-white py-24 sm:py-32">
          <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1fr] lg:px-10">
            <div>
              <div className="inline-flex rounded-full bg-[#eaf5f0] px-4 py-2 text-sm font-extrabold text-[#2f8066]">
                Why Care Teams Use It
              </div>
              <h2 className="mt-8 max-w-2xl text-3xl font-extrabold leading-[1.15] tracking-tight text-[#082f27] sm:text-4xl lg:text-5xl">
                Designed For
                <br />
                <span className="text-[#2f8066]">Everyday Care Support</span>
              </h2>
              <p className="mt-7 max-w-xl text-lg font-semibold leading-relaxed text-[#536862]">
                Built for support workers, care homes, and assisted living environments that need fast, reliable, and structured record keeping.
              </p>
            </div>

            <div className="grid gap-4">
              {whyCards.map(({ title, description, icon: Icon }) => (
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
              <h2 className="mt-7 text-3xl font-extrabold leading-[1.15] tracking-tight text-[#082f27] sm:text-4xl lg:text-5xl">
                Simple Logging.
                <br />
                <span className="text-[#2f8066]">Professional Reporting.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base font-semibold leading-relaxed text-[#536862]">
                Every feature is designed to reduce paperwork, improve communication, and support better care outcomes.
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

        <section className="bg-white py-20">
          <div className="mx-auto max-w-[1160px] px-5 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex rounded-full bg-[#eaf5f0] px-4 py-2 text-sm font-extrabold text-[#2f8066]">
                Why Care Teams Choose It
              </div>
              <h2 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-[#082f27] sm:text-4xl lg:text-5xl">
                Simple Enough For
                <br />
                <span className="text-[#2f8066]">Everyday Use</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base font-semibold leading-relaxed text-[#536862]">
                Powerful enough for professional reporting, yet simple and accessible for non-technical care staff and support teams.
              </p>
            </div>

            <div className="mt-14 grid gap-5 rounded-[2rem] bg-[#f4fbf8] p-6 shadow-[0_22px_70px_rgba(15,50,40,0.055)] md:grid-cols-3">
              {benefits.map(({ title, description, icon: Icon }) => (
                <article key={title} className="rounded-[1.5rem] bg-white/82 p-8 text-center shadow-[0_16px_44px_rgba(15,50,40,0.045)]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eaf5f0] text-[#2f8066]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-lg font-extrabold tracking-tight text-[#17483b]">{title}</h3>
                  <p className="mx-auto mt-3 text-sm font-medium leading-relaxed text-[#536862]">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(135deg,#dff6ed_0%,#effbf7_52%,#ffffff_100%)] py-24">
          <div className="mx-auto flex max-w-[980px] flex-col items-center px-5 text-center sm:px-8">
            <h2 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-[#10231d] sm:text-4xl lg:text-5xl">
              Care Documentation
              <br />
              <span className="text-[#2f8066]">Made Simpler</span>
            </h2>
            <p className="mt-7 max-w-2xl text-lg font-semibold leading-relaxed text-[#536862]">
              Available for mobile and tablet devices.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <ActionButton>Download App</ActionButton>
              <ActionButton variant="outline">Contact Team</ActionButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CareLoggingPage;
