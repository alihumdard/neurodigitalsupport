import React from 'react';
import { Helmet } from 'react-helmet';
import {
  BadgeCheck,
  Building2,
  CalendarCheck,
  CheckCircle2,
  HeartHandshake,
  Home,
  MessageCircle,
  MessagesSquare,
  Mic,
  ShieldCheck,
  Sparkles,
  UserCheck,
  UsersRound,
  Video,
  Workflow
} from 'lucide-react';
import Footer from '@/components/Footer.jsx';
import Header from '@/components/Header.jsx';

const philosophyCards = [
  {
    title: 'Verified & Trained Volunteers',
    description: 'Every volunteer completes safeguarding checks, identity verification, and specialist neurodiversity training.',
    icon: BadgeCheck
  },
  {
    title: 'Smart Personal Matching',
    description: 'Users are matched based on communication style, shared interests, personality fit, and comfort preferences.',
    icon: Workflow
  },
  {
    title: 'Safe Flexible Communication',
    description: 'Choose text, voice, or video support within a moderated environment designed around emotional safety.',
    icon: MessageCircle
  }
];

const featureCategories = [
  {
    category: 'Safety & Trust',
    items: [
      {
        title: 'Volunteer Verification',
        description: 'Every volunteer undergoes identity checks, safeguarding reviews, behavioural suitability assessments, and reference verification.',
        icon: BadgeCheck
      },
      {
        title: 'Safeguarding Support',
        description: 'Welfare concerns or inappropriate behaviour are reviewed quickly by the safeguarding team.',
        icon: ShieldCheck
      },
      {
        title: 'Performance Monitoring',
        description: 'Regular reviews, feedback scoring, and quality assurance ensure high support standards.',
        icon: Sparkles
      },
      {
        title: 'Family Confidence Tools',
        description: 'Optional updates and trusted oversight features for care providers or families.',
        icon: Building2
      }
    ]
  },
  {
    category: 'Communication & Support',
    items: [
      {
        title: 'Safe Messaging',
        description: 'Secure in-platform messaging with moderation filters and wellbeing prompts.',
        icon: MessageCircle
      },
      {
        title: 'Voice & Video Options',
        description: 'Choose text-only, voice call, or video support depending on comfort levels.',
        icon: Video
      },
      {
        title: 'One-to-One Support',
        description: 'Build ongoing friendships through regular scheduled chats with a consistent volunteer companion.',
        icon: HeartHandshake
      },
      {
        title: 'Scheduled Sessions',
        description: 'Book structured companionship sessions for conversation or routine social interaction.',
        icon: CalendarCheck
      }
    ]
  },
  {
    category: 'Wellbeing & Community',
    items: [
      {
        title: 'Smart Matching',
        description: 'Users are paired based on interests, age group, personality traits, and support goals.',
        icon: Workflow
      },
      {
        title: 'Group Hangouts',
        description: 'Small online social groups focused on hobbies, wellbeing, gaming, or shared interests.',
        icon: UsersRound
      },
      {
        title: 'Wellbeing Check-Ins',
        description: 'Simple check-ins to track confidence, loneliness levels, and connection progress.',
        icon: CheckCircle2
      },
      {
        title: 'Training Programme',
        description: 'Approved volunteers complete training in autism awareness, neurodiversity inclusion, and sensory-sensitive support.',
        icon: UserCheck
      }
    ]
  }
];

const benefits = [
  { text: 'Reduces loneliness and isolation', icon: HeartHandshake },
  { text: 'Builds confidence in communication', icon: Mic },
  { text: 'Creates safe friendships online', icon: ShieldCheck },
  { text: 'Encourages routine social connection', icon: CalendarCheck },
  { text: 'Supports emotional wellbeing', icon: CheckCircle2 },
  { text: 'Offers trusted companionship with trained volunteers', icon: UserCheck }
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

const PhoneMockup = () => (
  <div className="relative mx-auto h-[500px] w-[242px] [perspective:1400px]">
    <div className="absolute -inset-12 rounded-full bg-[#b7ead8]/34 blur-3xl" />
    <div className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/55" />
    <div className="absolute -bottom-8 left-1/2 h-16 w-[82%] -translate-x-1/2 rounded-full bg-[#123b2f]/20 blur-2xl" />
    <div className="relative h-full w-full rounded-[3.1rem] border-[8px] border-[#09120f] bg-[#09120f] shadow-[0_50px_115px_rgba(11,43,33,0.3),0_22px_46px_rgba(15,23,42,0.22)] [transform:rotate(-8deg)_rotateY(-16deg)_rotateX(4deg)]">
      <div className="absolute -right-3 top-28 h-20 w-1 rounded-r bg-[#18241f]" />
      <div className="absolute left-1/2 top-3 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
      <div className="relative h-full overflow-hidden rounded-[2.35rem] bg-gradient-to-b from-white via-[#f6fffb] to-[#dff4ec]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_26%_16%,rgba(154,230,205,0.5),transparent_28%),radial-gradient(circle_at_80%_28%,rgba(255,255,255,0.92),transparent_30%)]" />
        <div className="absolute bottom-20 left-7 right-7 h-44 rounded-[2rem] bg-white/34 blur-xl" />
        <div className="relative flex h-full flex-col px-4 pb-4 pt-11">
          <div className="flex items-center justify-between text-[7px] font-black text-[#8abfab]">
            <span>9:41</span>
            <span className="h-2 w-10 rounded-full bg-[#d5f0e6]" />
          </div>
          <div className="mt-7 rounded-[1.5rem] bg-white/82 p-4 shadow-[0_16px_38px_rgba(15,50,40,0.08)] ring-1 ring-white/80">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eaf5f0] text-[#2f8066]">
                <HeartHandshake className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <p className="text-[9px] font-black text-[#0e3a30]">Welcome card</p>
                <p className="mt-1 text-[6px] font-bold text-[#60756e]">Safe Digital Companionship</p>
                <div className="mt-2 space-y-1.5">
                <span className="block h-3 rounded-full bg-[#b9dfd1]" />
                <span className="block h-2.5 w-2/3 rounded-full bg-[#e0f1eb]" />
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              <span className="h-12 rounded-2xl bg-[#f0faf6]" />
              <span className="h-12 rounded-2xl bg-[#dff4ec]" />
              <span className="h-12 rounded-2xl bg-[#f0faf6]" />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {[
              ['Support Chat', MessageCircle],
              ['Volunteer', UserCheck]
            ].map(([title, Icon]) => (
              <div key={title} className="rounded-[1.15rem] bg-white/72 p-3 shadow-[0_12px_30px_rgba(15,50,40,0.06)] ring-1 ring-white/70">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#eaf5f0] text-[#2f8066]">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </div>
                <p className="mt-3 text-[7px] font-black text-[#0e3a30]">{title}</p>
                <span className="mt-1 block h-1.5 w-12 rounded-full bg-[#cbe8dd]" />
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-2.5">
            {[0, 1, 2].map((item) => (
              <div key={item} className="rounded-[1.25rem] bg-white/76 p-3 shadow-[0_12px_30px_rgba(15,50,40,0.06)] ring-1 ring-white/70">
                <div className="flex items-center gap-3">
                  <span className="h-9 w-9 rounded-full bg-[#dff4ec]" />
                  <div className="flex-1 space-y-2">
                    <span className="block h-2.5 rounded-full bg-[#c9eadf]" />
                    <span className="block h-2.5 w-2/3 rounded-full bg-[#e0f1eb]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-auto grid grid-cols-4 gap-4 rounded-[1.4rem] bg-white/62 p-3 shadow-[0_14px_32px_rgba(20,83,45,0.07)] ring-1 ring-white/70">
            <Home className="mx-auto h-4 w-4 text-[#2f8066]" aria-hidden="true" />
            <MessageCircle className="mx-auto h-4 w-4 text-[#8aa19a]" aria-hidden="true" />
            <HeartHandshake className="mx-auto h-4 w-4 text-[#8aa19a]" aria-hidden="true" />
            <UsersRound className="mx-auto h-4 w-4 text-[#8aa19a]" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ConnectionIllustration = () => (
  <div className="relative mx-auto h-[420px] w-full max-w-[440px]">
    <div className="absolute inset-10 rounded-full bg-[#dff4ec] blur-3xl" />
    <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b9dfd1] bg-white/72 shadow-[0_24px_70px_rgba(15,50,40,0.08)]" />
    <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] bg-[#4aa384] text-white shadow-[0_22px_60px_rgba(29,118,88,0.24)]">
      <HeartHandshake className="h-10 w-10" aria-hidden="true" />
    </div>
    {[
      ['left-10 top-16', UserCheck],
      ['right-8 top-24', ShieldCheck],
      ['bottom-16 left-16', MessageCircle],
      ['bottom-12 right-14', CalendarCheck]
    ].map(([position, Icon]) => (
      <div key={position} className={`absolute ${position} flex h-20 w-20 items-center justify-center rounded-[1.5rem] border border-[#dceee7] bg-white/86 text-[#2f8066] shadow-[0_18px_46px_rgba(15,50,40,0.08)]`}>
        <Icon className="h-8 w-8" aria-hidden="true" />
      </div>
    ))}
    <div className="absolute left-20 top-28 h-px w-32 rotate-[28deg] bg-[#b9dfd1]" />
    <div className="absolute right-20 top-36 h-px w-28 -rotate-[30deg] bg-[#b9dfd1]" />
    <div className="absolute bottom-28 left-24 h-px w-28 -rotate-[28deg] bg-[#b9dfd1]" />
    <div className="absolute bottom-28 right-24 h-px w-28 rotate-[32deg] bg-[#b9dfd1]" />
  </div>
);

const OliTokPage = () => {
  return (
    <>
      <Helmet>
        <title>OliTok</title>
        <meta
          name="description"
          content="OliTok is a safe, structured companionship platform that connects autistic and neurodivergent individuals with trained volunteers who provide friendship, encouragement, conversation, and emotional support in a respectful online environment."
        />
      </Helmet>

      <Header />

      <main className="product-detail-page min-h-screen overflow-hidden bg-[#f8fffb] text-[#10231d] transition-colors duration-300 dark:bg-background dark:text-foreground">
        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#f7fffb_38%,#dff6ed_100%)] dark:bg-none dark:bg-background">
          <div className="absolute left-1/2 top-16 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[#b7ead8]/32 blur-3xl dark:bg-emerald-900/15" />
          <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-[1200px] items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_0.82fr] lg:px-10">
            <div className="text-center lg:text-left">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-[0_18px_46px_rgba(15,23,42,0.12)] ring-1 ring-[#dceee7] lg:mx-0">
                <img
                  src="/images/products/oiltok.jpeg"
                  alt="OliTok logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="inline-flex rounded-full bg-[#eaf5f0] px-4 py-2 text-sm font-extrabold text-[#2f8066]">
                Safe Digital Companionship
              </div>
              <h1 className="mt-8 text-3xl font-extrabold leading-[1.15] tracking-tight text-[#226f59] drop-shadow-[0_20px_46px_rgba(74,163,132,0.16)] sm:text-4xl lg:text-5xl">
                OliTok
              </h1>
              <p className="mt-6 text-2xl font-extrabold tracking-tight text-[#082f27] dark:text-foreground sm:text-3xl">
                Safe Friendship & Support Online
              </p>
              <p className="mx-auto mt-7 max-w-2xl text-lg font-semibold leading-relaxed text-[#314b41] dark:text-muted-foreground sm:text-xl lg:mx-0">
                OliTok connects neurodivergent individuals with trained volunteers for safe friendship, encouragement, and emotional support in a respectful online space.
              </p>
              <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                <ActionButton>Request Support</ActionButton>
                <ActionButton variant="outline">Become a Volunteer</ActionButton>
              </div>
            </div>
            <PhoneMockup />
          </div>
        </section>

        <section className="bg-white py-24 dark:bg-background sm:py-32">
          <div className="mx-auto grid max-w-[1240px] items-center gap-16 px-5 sm:px-8 lg:grid-cols-[0.95fr_0.8fr] lg:px-10">
            <div>
              <div className="inline-flex rounded-full bg-[#eaf5f0] px-4 py-2 text-sm font-extrabold text-[#2f8066]">
                Why OliTok?
              </div>
              <h2 className="mt-8 max-w-2xl text-3xl font-extrabold leading-[1.15] tracking-tight text-[#082f27] sm:text-4xl lg:text-5xl">
                Built Around
                <br />
                <span className="text-[#2f8066]">Trust & Human Connection</span>
              </h2>
              <p className="mt-7 max-w-xl text-lg font-semibold leading-relaxed text-[#536862]">
                OliTok creates safe and structured companionship experiences designed to reduce loneliness and support meaningful social connection.
              </p>

              <div className="mt-10 grid gap-4">
                {philosophyCards.map(({ title, description, icon: Icon }) => (
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
            <ConnectionIllustration />
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#f7fffb] py-24 sm:py-32">
          <div className="absolute left-1/2 top-16 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-[#dff6ed]/36 blur-3xl" />
          <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex rounded-full bg-[#eaf5f0] px-4 py-2 text-sm font-extrabold text-[#2f8066]">
                Platform Features
              </div>
              <h2 className="mt-7 text-3xl font-extrabold leading-[1.15] tracking-tight text-[#082f27] sm:text-4xl lg:text-5xl">
                Thoughtful Features
                <br />
                <span className="text-[#2f8066]">Designed For Safe Connection</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base font-semibold leading-relaxed text-[#536862]">
                Every feature in OliTok is carefully designed to create safer companionship, meaningful interaction, and emotionally supportive online experiences.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {featureCategories.map(({ category, items }) => (
                <article
                  key={category}
                  className="rounded-[1.8rem] border border-white/72 bg-white/72 p-6 shadow-[0_22px_70px_rgba(15,50,40,0.055)] backdrop-blur-sm"
                >
                  <h3 className="text-2xl font-extrabold tracking-tight text-[#082f27]">{category}</h3>
                  <div className="mt-6 space-y-4">
                    {items.map(({ title, description, icon: Icon }) => (
                      <div
                        key={title}
                        className="group rounded-[1.25rem] border border-[#e1efe9] bg-[linear-gradient(145deg,rgba(255,255,255,0.96),rgba(246,251,248,0.84))] p-5 shadow-[0_14px_40px_rgba(15,50,40,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#cde8dd] hover:shadow-[0_22px_58px_rgba(15,50,40,0.08)]"
                      >
                        <div className="flex gap-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#eaf5f0] text-[#2f8066] transition-colors duration-300 group-hover:bg-[#dff3ec]">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </div>
                          <div>
                            <h4 className="text-sm font-extrabold leading-snug tracking-tight text-[#082f27]">{title}</h4>
                            <p className="mt-2 text-xs font-medium leading-relaxed text-[#536862]">{description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-[#082f27] sm:text-4xl lg:text-5xl">
                Positive Support.
                <br />
                <span className="text-[#2f8066]">Meaningful Growth.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base font-semibold leading-relaxed text-[#536862]">
                OliTok helps users build confidence, reduce isolation, and feel supported through safe, trusted companionship.
              </p>
            </div>

            <div className="mt-14 grid gap-5 rounded-[2rem] bg-[#f4fbf8] p-6 shadow-[0_22px_70px_rgba(15,50,40,0.055)] sm:grid-cols-2 lg:grid-cols-6">
              {benefits.map(({ text, icon: Icon }) => (
                <div key={text} className="flex flex-col items-center justify-center gap-4 rounded-[1.25rem] bg-white/78 p-6 text-center">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eaf5f0] text-[#2f8066]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <p className="text-sm font-extrabold leading-snug text-[#17483b]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(135deg,#dff6ed_0%,#effbf7_52%,#ffffff_100%)] py-24">
          <div className="mx-auto flex max-w-[980px] flex-col items-center px-5 text-center sm:px-8">
            <h2 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-[#10231d] sm:text-4xl lg:text-5xl">
              Everyone Deserves
              <br />
              <span className="text-[#2f8066]">Safe Human Connection</span>
            </h2>
            <p className="mt-7 max-w-3xl text-lg font-semibold leading-relaxed text-[#536862]">
              Whether you’re looking for support, volunteering your time, or partnering with us — OliTok helps create safer online companionship experiences.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <ActionButton>Request Support</ActionButton>
              <ActionButton variant="outline">Become a Volunteer</ActionButton>
              <ActionButton variant="outline">Partner as an Organisation</ActionButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default OliTokPage;
