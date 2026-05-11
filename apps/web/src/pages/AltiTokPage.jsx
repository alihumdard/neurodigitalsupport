import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Gauge,
  HeartHandshake,
  Home,
  Leaf,
  MessageCircle,
  MessagesSquare,
  PauseCircle,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Star,
  UserRoundCheck,
  UsersRound
} from 'lucide-react';
import Footer from '@/components/Footer.jsx';
import Header from '@/components/Header.jsx';

const features = [
  {
    title: 'Adjustable Scroll Speed',
    description: 'Control feed movement for a calmer browsing experience.',
    icon: Gauge
  },
  {
    title: 'Reduced Motion Feeds',
    description: 'Limit animations and fast-moving content.',
    icon: PauseCircle
  },
  {
    title: 'Trigger & Content Filters',
    description: 'Hide content categories that may cause distress.',
    icon: SlidersHorizontal
  },
  {
    title: 'Hidden Likes & Followers',
    description: 'Reduce social pressure and comparison.',
    icon: UserRoundCheck
  },
  {
    title: 'Comment Delay System',
    description: 'Encourages thoughtful and respectful communication.',
    icon: MessageCircle
  },
  {
    title: 'AI Tone Moderation',
    description: 'Detects hostile language and promotes healthier conversations.',
    icon: Sparkles
  },
  {
    title: 'Shield Mode for Creators',
    description: 'Extra protection tools for content creators.',
    icon: ShieldCheck
  },
  {
    title: 'Safe Messaging',
    description: 'Optional message controls and wellbeing settings.',
    icon: MessagesSquare
  },
  {
    title: 'Community Spaces',
    description: 'Interest-based groups built around inclusion.',
    icon: UsersRound
  }
];

const wellbeingCards = [
  {
    title: 'Calm Browsing',
    text: 'Reduce visual fatigue with softer feeds and adjustable scroll speed.',
    icon: Leaf
  },
  {
    title: 'Emotional Safety',
    text: 'Smart filters and hidden metrics reduce anxiety and protect your peace.',
    icon: ShieldCheck
  },
  {
    title: 'Respectful Communities',
    text: 'Moderated spaces and mindful conversations encourage healthier interactions.',
    icon: UsersRound,
    wide: true
  }
];

const JoinButton = ({ className = '' }) => (
  <button
    type="button"
    className={`inline-flex h-14 items-center justify-center rounded-full bg-[#4aa384] px-8 text-sm font-extrabold text-white shadow-[0_18px_42px_rgba(29,118,88,0.24),inset_0_1px_0_rgba(255,255,255,0.34)] ring-1 ring-white/45 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3f9275] hover:shadow-[0_26px_64px_rgba(29,118,88,0.32),inset_0_1px_0_rgba(255,255,255,0.4)] active:translate-y-0 ${className}`}
  >
    Join Platform
  </button>
);

const PhoneMockup = ({ compact = false }) => (
  <div className={`relative mx-auto ${compact ? 'h-[360px] w-[178px]' : 'h-[500px] w-[242px]'} [perspective:1400px]`}>
    <div className="absolute -inset-12 rounded-full bg-[#b7ead8]/36 blur-3xl" />
    <div className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/55" />
    <div className="absolute -bottom-8 left-1/2 h-16 w-[82%] -translate-x-1/2 rounded-full bg-[#123b2f]/20 blur-2xl" />
    <div className="absolute right-0 top-24 h-32 w-32 rounded-full bg-[#9fdac6]/24 blur-sm" />
    <div className="relative h-full w-full rounded-[3.1rem] border-[8px] border-[#09120f] bg-[#09120f] shadow-[0_50px_115px_rgba(11,43,33,0.3),0_22px_46px_rgba(15,23,42,0.22),inset_0_1px_0_rgba(255,255,255,0.14)] [transform:rotate(-8deg)_rotateY(-16deg)_rotateX(4deg)] [transform-style:preserve-3d]">
      <div className="absolute -right-3 top-28 h-20 w-1 rounded-r bg-[#18241f]" />
      <div className="absolute left-1/2 top-3 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
      <div className="relative h-full overflow-hidden rounded-[2.35rem] bg-gradient-to-b from-white via-[#f5fffb] to-[#d9f4eb]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_12%,rgba(154,230,205,0.54),transparent_28%),radial-gradient(circle_at_84%_30%,rgba(255,255,255,0.92),transparent_30%),linear-gradient(145deg,rgba(255,255,255,0.7),transparent_45%)]" />
        <div className="absolute bottom-20 left-7 right-7 h-48 rounded-[2rem] bg-white/34 blur-xl" />
        <div className="relative flex h-full flex-col px-4 pb-4 pt-11">
          <div className="flex items-center justify-between text-[7px] font-black text-[#8abfab]">
            <span>9:41</span>
            <span className="h-2 w-10 rounded-full bg-[#d5f0e6]" />
          </div>
          <div className="mt-8 flex items-start justify-between">
            <div>
              <p className="text-[12px] font-semibold text-[#2f8066]">Welcome to</p>
              <p className="mt-0.5 text-[25px] font-black leading-none tracking-tight text-[#0e3a30]">AltiTok</p>
              <p className="mt-2 text-[8px] font-bold text-[#4f6a62]">You're not alone here.</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#dff4ec] text-[#2f8066] shadow-[0_14px_32px_rgba(15,50,40,0.08)]">
              <HeartHandshake className="h-5 w-5" aria-hidden="true" />
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {[
              ['Calm Space', Leaf],
              ['Safe Connections', UsersRound]
            ].map(([title, Icon]) => (
              <div key={title} className="rounded-[1.15rem] bg-white/74 p-3 shadow-[0_12px_30px_rgba(15,50,40,0.07)] ring-1 ring-white/70">
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
                  <span className="h-9 w-9 rounded-full bg-[#bfe4d6]" />
                  <div className="flex-1 space-y-2">
                    <span className="block h-2.5 rounded-full bg-[#bfe4d6]" />
                    <span className="block h-2.5 w-2/3 rounded-full bg-[#dbeee7]" />
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

const AltiTokPage = () => {
  return (
    <>
      <Helmet>
        <title>AltiTok</title>
        <meta
          name="description"
          content="A new kind of social media platform designed around safety, calm interaction, and meaningful connection rather than addictive engagement."
        />
      </Helmet>

      <Header />

      <main className="product-detail-page min-h-screen overflow-hidden bg-[#f8fffb] text-[#10231d] transition-colors duration-300 dark:bg-background dark:text-foreground">
        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#f7fffb_38%,#dff6ed_100%)] dark:bg-none dark:bg-background">
          <div className="absolute left-1/2 top-16 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[#b7ead8]/32 blur-3xl dark:bg-emerald-900/15" />
          <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_55%_42%,rgba(255,255,255,0.86),transparent_36%)] dark:bg-[radial-gradient(circle_at_55%_42%,rgba(16,185,129,0.12),transparent_36%)]" />
          <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-[1200px] items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_0.82fr] lg:px-10">
            <div className="text-center lg:text-left">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-[0_18px_46px_rgba(15,23,42,0.12)] ring-1 ring-[#dceee7] lg:mx-0">
                <img
                  src="/images/products/AltiTok.png"
                  alt="AltiTok logo"
                  className="h-16 w-16 object-contain"
                />
              </div>
              <h1 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-[#226f59] drop-shadow-[0_20px_46px_rgba(74,163,132,0.16)] dark:text-emerald-300 sm:text-4xl lg:text-5xl">
                AltiTok
              </h1>
              <p className="mx-auto mt-7 max-w-2xl text-lg font-semibold leading-relaxed text-[#314b41] dark:text-muted-foreground sm:text-xl lg:mx-0">
                A new kind of social media platform designed around safety, calm interaction, and meaningful connection rather than addictive engagement.
              </p>
              <div className="mt-10 flex justify-center lg:justify-start">
                <JoinButton />
              </div>
            </div>
            <div className="relative">
              <div className="absolute bottom-4 left-1/2 h-12 w-72 -translate-x-1/2 rounded-full bg-[#0f3529]/12 blur-xl" />
              <PhoneMockup />
            </div>
          </div>
        </section>

        <section className="bg-[#f8fbf9] px-4 py-24 dark:bg-card/20 sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto grid max-w-[1340px] gap-14 rounded-[2rem] bg-white/82 px-6 py-16 shadow-[0_30px_100px_rgba(15,50,40,0.08)] ring-1 ring-[#e4f0eb] backdrop-blur-sm dark:bg-card/80 dark:ring-white/10 sm:px-10 lg:grid-cols-[0.72fr_1.08fr] lg:px-16 lg:py-20">
            <div className="flex flex-col justify-center">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#eaf5f0] px-4 py-2 text-sm font-bold text-[#0d4d3e]">
                <Leaf className="h-4 w-4" aria-hidden="true" />
                Designed for Well-Being
              </div>
              <h2 className="mt-12 max-w-xl text-3xl font-extrabold leading-[1.15] tracking-tight text-[#082f27] dark:text-foreground sm:text-4xl lg:text-5xl">
                A Social Space Built Around <span className="text-[#2f8066]">Human Comfort</span>
              </h2>
              <div className="mt-8 h-1 w-16 rounded-full bg-[#2f8066]" />
              <p className="mt-8 max-w-md text-lg font-medium leading-relaxed text-[#40534d] dark:text-muted-foreground">
                Modern platforms are built to capture attention.
                <br />
                <span className="font-bold text-[#2f8066]">AltiTok</span> creates a calmer, safer, and more mindful social experience.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {wellbeingCards.map(({ title, text, icon: Icon, wide }) => (
                <article
                  key={title}
                  className={`relative min-h-[300px] overflow-hidden rounded-[1.75rem] bg-white/92 p-8 shadow-[0_20px_60px_rgba(15,50,40,0.07)] ring-1 ring-[#dfece7] dark:bg-background/70 dark:ring-white/10 ${wide ? 'md:col-span-2 md:min-h-[270px]' : ''}`}
                >
                  <div className="relative z-10">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf5f0] text-[#0d4d3e] shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <h3 className="mt-8 text-2xl font-extrabold tracking-tight text-[#082f27] dark:text-foreground">{title}</h3>
                    <p className={`mt-5 text-lg font-medium leading-relaxed text-[#4c5b57] dark:text-muted-foreground ${wide ? 'max-w-md' : 'max-w-xs'}`}>
                      {text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#f7fffb] py-24 dark:bg-background sm:py-28">
          <div className="absolute left-1/2 top-16 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-[#dff6ed]/36 blur-3xl dark:bg-emerald-900/10" />
          <div className="relative mx-auto max-w-[1160px] px-5 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#eaf5f0] px-3 py-1.5 text-[11px] font-extrabold text-[#2f8066]">
                <Star className="h-3.5 w-3.5" aria-hidden="true" />
                Our Features
              </div>
              <h2 className="mt-7 text-3xl font-extrabold leading-[1.15] tracking-tight text-[#082f27] dark:text-foreground sm:text-4xl lg:text-5xl">
                Thoughtful Features.
                <br />
                <span className="text-[#2f8066]">Healthier Experiences.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base font-semibold leading-relaxed text-[#4c6a5f] dark:text-muted-foreground">
                Every feature in AltiTok is designed to reduce overwhelm, support well-being, and encourage more meaningful digital interaction.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {features.map(({ title, description, icon: Icon }) => (
                <article
                  key={title}
                  className="group rounded-[1.6rem] border border-[#e0eee8] bg-white p-8 shadow-[0_18px_54px_rgba(15,50,40,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-[#cde8dd] hover:shadow-[0_26px_72px_rgba(15,50,40,0.08)] dark:border-white/10 dark:bg-card"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf5f0] text-[#2f8066] transition-colors duration-300 group-hover:bg-[#dff3ec]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-7 text-base font-extrabold tracking-tight text-[#082f27] dark:text-foreground">{title}</h3>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-[#536862] dark:text-muted-foreground">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(135deg,#dff6ed_0%,#effbf7_52%,#ffffff_100%)] py-24 dark:bg-none dark:bg-card/35">
          <div className="mx-auto flex max-w-[980px] flex-col items-center px-5 text-center sm:px-8">
            <h2 className="text-3xl font-black leading-[1.15] tracking-normal text-[#10231d] dark:text-foreground sm:text-4xl lg:text-5xl">
              Create your free account today.
            </h2>
            <div className="mt-10">
              <JoinButton />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AltiTokPage;
