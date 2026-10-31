import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Chrome, Heart, Lock, Shield, Timer, Users, Waves } from 'lucide-react';

/**
 * Everything the NuroTok app does, grouped the way the app is, so a visitor can see the whole of
 * it before downloading. Kept in step with the app: Android has every feature; on iPhone the parts
 * that need Android's system access are noted.
 */
const GROUPS = [
  {
    title: 'Calm and sensory tools',
    icon: Waves,
    items: [
      'Sensory profile: tell NuroTok what overwhelms you (sights, sounds, touch, people) and it shapes its suggestions around you.',
      'Breathing guides (4-7-8 and more), 5-4-3-2-1 grounding and a two-minute reset, narrated and offline.',
      'Soundscapes: white, brown and pink noise and rain, with a suggestion for the time of day.',
      'Screen comfort: warm tint, auto-dim and batched notifications.',
      'Calm mode: turn everything down at once, by hand or by tapping an NFC calm card.',
      'How I feel: a picture board for when words are hard, with a big card to show someone.',
      'A guided meditation library, multi-day programmes, sleep stories and mood check-ins.',
      'An AI chat companion for a calm conversation (not medical advice).',
    ],
  },
  {
    title: 'Scrolling and reels',
    icon: Timer,
    items: [
      'Reel counter for Instagram, YouTube, TikTok, Snapchat and Facebook, with a daily goal and a gentle check-in.',
      'Rapid-scroll pause: a breather when reels go by fast, stepping in sooner on harder days.',
      'Overload heads-up from your sensory profile, recent moods, the time and today’s scrolling, with its reasons.',
      'App switches: hide Explore, Shorts or Reels tabs inside the apps you choose.',
      'Ask for more time, earn time with a short walk or a grounding exercise.',
    ],
  },
  {
    title: 'Protection',
    icon: Shield,
    items: [
      'On-device content filter: blur, warn or hide by category, with a "why was this covered?" explanation you can correct.',
      'App blocking and schedules, a sleep schedule, and website blocking in every browser.',
      'Hard Mode, so NuroTok can’t be removed in a weak moment, and parent controls behind a PIN.',
      'Protection health: a quick check that everything is switched on and working.',
    ],
  },
  {
    title: 'Focus and routines',
    icon: Lock,
    items: [
      'Focus sessions that keep chosen apps closed for a while.',
      'Focus with your calendar: as a busy event starts, a notification offers focus until it ends.',
      'Tap-to-focus NFC tags, to start or end focus with a tap.',
      'Routines: mornings, after school, winding down, one step at a time with a reminder.',
      'Intention sessions: say what you opened an app for, then how it went.',
    ],
  },
  {
    title: 'Insights and progress',
    icon: BarChart3,
    items: [
      'Calm Score: one kind number for the day, made of parts that say what they are.',
      '"What your month says": patterns in your own days in plain words, each with one thing to try.',
      'Screen time per app from Android’s own records, your usual day, and a weekly target that adapts.',
      'A companion that grows with calm days and streaks, and badges for practice.',
    ],
  },
  {
    title: 'Family and friends',
    icon: Users,
    items: [
      'Family linking: see a child’s NuroTok usage and set their protection from your phone. They keep their messages, journal and moods private.',
      'Breathe together: a parent and child breathe to the same pace on two phones, wherever they are.',
      'Battles: fewer reels wins, with a weekly league, groups and friendly nudges.',
      'Share with a therapist: a private, time-limited summary link you can stop at any time.',
      'Family Premium covers linked children.',
    ],
  },
  {
    title: 'Your computer and account',
    icon: Chrome,
    items: [
      'NuroTok for Chrome hides YouTube Shorts and Instagram and Facebook Reels, adds a breathing pause and a daily limit.',
      'Connect it to the app so your phone and computer share one daily reel goal.',
      'Your account online: see your trends, download your data or delete your account from the website.',
      'Sign in with Google, Apple or email; see every signed-in device and sign any of them out.',
    ],
  },
];

export default function NuroTokAllFeatures() {
  return (
    <section className="bg-white py-20 dark:bg-background" aria-labelledby="all-features">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-10">
        <div className="text-center">
          <h2 id="all-features" className="text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-950 dark:text-foreground sm:text-4xl lg:text-5xl">
            Everything NuroTok can do
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base font-medium leading-relaxed text-slate-600 dark:text-muted-foreground">
            A calmer phone, made for neurodivergent minds and anyone who finds it all a bit much. Here is the whole of it.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {GROUPS.map(({ title, icon: Icon, items }) => (
            <article key={title} className="rounded-2xl border border-emerald-100 bg-[#fbfefd] p-6 shadow-[0_10px_26px_rgba(15,23,42,0.06)] dark:border-border dark:bg-card">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-extrabold text-slate-950 dark:text-foreground">{title}</h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm font-medium leading-relaxed text-slate-700 dark:text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6 dark:border-border dark:bg-card">
            <h3 className="flex items-center gap-2 text-lg font-extrabold text-slate-950 dark:text-foreground">
              <Heart className="h-5 w-5 text-emerald-700" aria-hidden="true" /> Private by design
            </h3>
            <p className="mt-3 text-sm font-medium leading-relaxed text-slate-700 dark:text-muted-foreground">
              Your journal, moods, sensory profile and what the filter sees stay on your phone. An account is optional. Usage sharing is off
              until you switch it on, and switching it off deletes what was sent. No adverts, and we never sell your information.
            </p>
            <p className="mt-3 text-sm font-semibold">
              <Link to="/nurotok/privacy" className="text-emerald-800 underline dark:text-emerald-300">Privacy policy</Link>
              {' · '}
              <Link to="/nurotok/easy-read" className="text-emerald-800 underline dark:text-emerald-300">Easy Read</Link>
              {' · '}
              <Link to="/nurotok/account" className="text-emerald-800 underline dark:text-emerald-300">Your account</Link>
            </p>
          </article>
          <article className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6 dark:border-border dark:bg-card">
            <h3 className="text-lg font-extrabold text-slate-950 dark:text-foreground">Works on</h3>
            <ul className="mt-3 space-y-2 text-sm font-medium leading-relaxed text-slate-700 dark:text-muted-foreground">
              <li><strong>Android:</strong> everything on this page.</li>
              <li>
                <strong>iPhone:</strong> the calm tools, meditation, check-ins, insights, routines, family, breathe together and your
                account. Reel counting (and so battles), app switches, focus blocking and the content filter need Android’s system access, so on iPhone
                use Screen Time alongside NuroTok for now.
              </li>
              <li><strong>Computer:</strong> NuroTok for Chrome.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
