import React from 'react';
import { Helmet } from 'react-helmet';
import { canonicalFor } from '@/lib/seo';
import {
  BookOpen,
  BriefcaseBusiness,
  FileText,
  GraduationCap,
  HeartHandshake,
  Megaphone,
  Newspaper,
  PenTool,
  ScrollText,
  ShieldCheck,
  Sparkles,
  UsersRound
} from 'lucide-react';
import Footer from '@/components/Footer.jsx';
import Header from '@/components/Header.jsx';

const whyCards = [
  {
    title: 'Awareness Campaigns',
    description: 'Accessible campaigns and storytelling resources that encourage understanding and reduce stigma.',
    icon: Megaphone
  },
  {
    title: 'Workplace Inclusion',
    description: 'Guides and frameworks that help organisations create neuroinclusive environments.',
    icon: BriefcaseBusiness
  },
  {
    title: 'Education & Accessibility',
    description: 'Support materials for universities, families, and communities to improve accessible learning and participation.',
    icon: GraduationCap
  }
];

const resources = [
  {
    title: 'Awareness Campaigns',
    description: 'Digital campaigns and social toolkits promoting neurodiversity awareness.',
    icon: Megaphone
  },
  {
    title: 'Policy Discussions',
    description: 'Explore legislation, accessibility standards, and inclusive public policy topics.',
    icon: ScrollText
  },
  {
    title: 'Workplace Inclusion Resources',
    description: 'Training guides and wellbeing resources for neuroinclusive workplaces.',
    icon: BriefcaseBusiness
  },
  {
    title: 'University Accessibility Guides',
    description: 'Best practices for accessible education and campus inclusion.',
    icon: GraduationCap
  },
  {
    title: 'Public Education Materials',
    description: 'Simple educational content for families, professionals, and communities.',
    icon: BookOpen
  },
  {
    title: 'Community Campaign Tools',
    description: 'Templates and advocacy tools for local awareness initiatives.',
    icon: UsersRound
  },
  {
    title: 'Blog Articles',
    description: 'Accessible blogs discussing neurodiversity and inclusion topics.',
    icon: Newspaper
  },
  {
    title: 'Case Studies',
    description: 'Real-world stories and practical examples of inclusive support.',
    icon: HeartHandshake
  },
  {
    title: 'Downloadable Guides',
    description: 'Helpful PDFs, learning resources, and educational materials.',
    icon: FileText
  },
  {
    title: 'Petition Tools',
    description: 'Simple tools supporting advocacy and social action campaigns.',
    icon: PenTool
  },
  {
    title: 'Campaign Templates',
    description: 'Ready-to-use templates for awareness and community initiatives.',
    icon: Sparkles
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

const BrowserMockup = () => (
  <div className="relative mx-auto w-full max-w-[430px] lg:ml-auto">
    <div className="absolute -inset-5 rounded-[2rem] bg-[#dff3ec]/55 blur-2xl" aria-hidden="true" />
    <div className="relative overflow-hidden rounded-[1.7rem] border border-[#d7eee5] bg-white/72 p-3 shadow-[0_28px_80px_rgba(15,61,50,0.13)] backdrop-blur-xl">
      <div className="rounded-[1.25rem] bg-[#f7fffb] p-4 ring-1 ring-[#dceee7]">
        <div className="flex items-center justify-between border-b border-[#dceee7] pb-3">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-[#b9dfd1]" />
            <span className="h-3 w-3 rounded-full bg-[#dceee7]" />
            <span className="h-3 w-3 rounded-full bg-[#eaf5f0]" />
          </div>
          <span className="h-7 w-40 rounded-full bg-white shadow-sm ring-1 ring-[#dceee7]" />
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-3">
            <div className="rounded-[1.4rem] bg-white p-4 shadow-[0_14px_34px_rgba(15,50,40,0.06)] ring-1 ring-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#eaf5f0] text-[#2f8066]">
                <Megaphone className="h-6 w-6" aria-hidden="true" />
              </div>
              <span className="mt-4 block h-3 w-28 rounded-full bg-[#b9dfd1]" />
              <span className="mt-2.5 block h-2.5 w-36 rounded-full bg-[#dceee7]" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <span className="h-16 rounded-[1.25rem] bg-[#eaf5f0] shadow-[0_12px_28px_rgba(15,50,40,0.05)]" />
              <span className="h-16 rounded-[1.25rem] bg-white shadow-[0_12px_28px_rgba(15,50,40,0.05)] ring-1 ring-white" />
            </div>
          </div>

          <div className="space-y-3">
            {[0, 1, 2].map((item) => (
              <div key={item} className="rounded-[1.35rem] bg-white p-3.5 shadow-[0_14px_34px_rgba(15,50,40,0.055)] ring-1 ring-white">
                <div className="flex items-center gap-3">
                  <span className="h-9 w-9 rounded-2xl bg-[#eaf5f0]" />
                  <span className="h-3 flex-1 rounded-full bg-[#b9dfd1]" />
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  <span className="h-2.5 rounded-full bg-[#dceee7]" />
                  <span className="h-2.5 rounded-full bg-[#dceee7]" />
                  <span className="h-2.5 rounded-full bg-[#dceee7]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 rounded-[1.4rem] bg-[#102f27] p-3.5 text-white shadow-[0_16px_42px_rgba(15,50,40,0.12)]">
          <div className="flex items-center justify-between">
            <span className="h-3 w-36 rounded-full bg-white/32" />
            <div className="flex gap-2">
              <span className="h-7 w-7 rounded-full bg-white/14" />
              <span className="h-7 w-7 rounded-full bg-white/14" />
              <span className="h-7 w-7 rounded-full bg-white/14" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const DigitalAdvocacyHubPage = () => {
  return (
    <>
      <Helmet>
        <title>Digital Advocacy Hub | NeuroDigital Support</title>
        <meta
          name="description"
          content="The Digital Advocacy Hub brings together campaigns, educational resources, and practical tools that support neurodiversity awareness and accessible societal change."
        />
        <link rel="canonical" href={canonicalFor('/digital-advocacy-hub')} />
      </Helmet>

      <Header />

      <main className="product-detail-page min-h-screen overflow-hidden bg-[#f8fffb] text-[#10231d]">
        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#f7fffb_38%,#dff6ed_100%)]">
          <div className="absolute left-1/2 top-16 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[#b7ead8]/32 blur-3xl" />
          <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-[1220px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.95fr_0.72fr] lg:px-10">
            <div className="text-center lg:text-left">
              <div className="inline-flex rounded-full bg-[#eaf5f0] px-4 py-2 text-sm font-extrabold text-[#2f8066]">
                Advocacy & Inclusion Platform
              </div>
              <h1 className="mt-8 text-3xl font-extrabold leading-[1.15] tracking-tight text-[#082f27] sm:text-4xl lg:text-5xl">
                Empowering Awareness,
                <br />
                <span className="text-[#2f8066]">Inclusion & Change</span>
              </h1>
              <p className="mx-auto mt-7 max-w-2xl text-lg font-semibold leading-relaxed text-[#314b41] sm:text-xl lg:mx-0">
                The Digital Advocacy Hub brings together campaigns, educational resources, and practical tools that support neurodiversity awareness and accessible societal change.
              </p>
              <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                <ActionButton>Explore Resources</ActionButton>
                <ActionButton variant="outline">Join The Community</ActionButton>
              </div>
            </div>
            <BrowserMockup />
          </div>
        </section>

        <section className="bg-white py-24 sm:py-32">
          <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1fr] lg:px-10">
            <div>
              <div className="inline-flex rounded-full bg-[#eaf5f0] px-4 py-2 text-sm font-extrabold text-[#2f8066]">
                Why It Matters
              </div>
              <h2 className="mt-8 max-w-2xl text-3xl font-extrabold leading-[1.15] tracking-tight text-[#082f27] sm:text-4xl lg:text-5xl">
                Building A More
                <br />
                <span className="text-[#2f8066]">Inclusive Society</span>
              </h2>
              <p className="mt-7 max-w-xl text-lg font-semibold leading-relaxed text-[#536862]">
                The hub helps individuals, educators, employers, and organisations access practical tools that promote awareness, accessibility, and meaningful inclusion.
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
                Resources & Tools
              </div>
              <h2 className="mt-7 text-3xl font-extrabold leading-[1.15] tracking-tight text-[#082f27] sm:text-4xl lg:text-5xl">
                Practical Resources
                <br />
                <span className="text-[#2f8066]">For Real Change</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base font-semibold leading-relaxed text-[#536862]">
                Explore educational materials, advocacy tools, and accessible resources designed to support awareness and positive action.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {resources.map(({ title, description, icon: Icon }) => (
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

        <section className="bg-[linear-gradient(135deg,#dff6ed_0%,#effbf7_52%,#ffffff_100%)] py-24">
          <div className="mx-auto flex max-w-[980px] flex-col items-center px-5 text-center sm:px-8">
            <h2 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-[#10231d] sm:text-4xl lg:text-5xl">
              Awareness Starts
              <br />
              <span className="text-[#2f8066]">With Accessible Conversations</span>
            </h2>
            <p className="mt-7 max-w-3xl text-lg font-semibold leading-relaxed text-[#536862]">
              Join a growing community working toward more inclusive workplaces, education systems, and public spaces.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <ActionButton>Explore Resources</ActionButton>
              <ActionButton variant="outline">Support Advocacy</ActionButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default DigitalAdvocacyHubPage;
