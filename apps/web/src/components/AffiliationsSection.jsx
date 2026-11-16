import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const affiliations = [
  {
    name: 'University of Roehampton London',
    logoUrl: '/images/products/roehampton.jpeg',
    link: 'https://blog.roehampton.ac.uk/2026/07/13/from-support-worker-to-digital-inclusion-advocate-how-my-extended-masters-at-roehampton-helped-me-find-my-purpose/',
    tag: 'Academic Partner',
    description: 'Project Coordinator, Research Assistant & MSc Digital Marketing Researcher'
  },
  {
    name: 'Business Insider Africa',
    logoUrl: '/images/products/buissness.jpeg',
    link: 'https://africa.businessinsider.com/local/careers/exclusive-interview-with-kofi-ofori-mensah-head-of-sales-and-marketing-at-prabon/qp58m6n',
    tag: 'Media Feature',
    description: 'Featured Expert Commentary on Digital Marketing, Inclusion & Ethics'
  }
];

// Press coverage and social impact features (supplied by the client in Online_Visibility).
const pressFeatures = [
  {
    outlet: 'News Ghana',
    logo: '/images/press/news-ghana.webp',
    title: "Ghanaian researcher takes neurodivergent users' case to app design",
    link: 'https://newsghana.com.gh/ghanaian-researcher-takes-neurodivergent-users-case-to-app-design/',
    tag: 'Press'
  },
  {
    outlet: 'News Ghana',
    logo: '/images/press/news-ghana.webp',
    title: 'Ghanaian founder pitches ADHD-aware design for digital platforms',
    link: 'https://newsghana.com.gh/ghanaian-founder-pitches-adhd-aware-design-for-digital-platforms/',
    tag: 'Press'
  },
  {
    outlet: 'MyJoyOnline',
    logo: '/images/press/myjoyonline.webp',
    title: 'The Ghanaian researcher challenging how social media platforms treat neurodivergent users',
    link: 'https://www.myjoyonline.com/kofi-ofori-mensah-the-ghanaian-researcher-challenging-how-social-media-platforms-treat-neurodivergent-users/',
    tag: 'Press'
  },
  {
    outlet: 'Adom Online',
    logo: '/images/press/adom-online.webp',
    title: 'Kofi Ofori-Mensah: the Ghanaian researcher challenging how social media platforms treat neurodivergent users',
    link: 'https://www.adomonline.com/kofi-ofori-mensah-the-ghanaian-researcher-challenging-how-social-media-platforms-treat-neurodivergent-users/',
    tag: 'Press'
  },
  {
    outlet: 'GhanaWebbers',
    logo: '/images/press/ghanawebbers.webp',
    logoDark: true,
    title: 'Ghanaian researcher advocates for neurodivergent users on social media',
    link: 'https://www.ghanawebbers.com/GhanaHomePage/entertainment/Ghanaian-Researcher-Advocates-for-Neurodivergent-Users-on-Social-Media-2164525',
    tag: 'Press'
  },
  {
    outlet: 'The Ghana Report',
    logo: '/images/press/the-ghana-report.webp',
    title: 'The Ghanaian researcher challenging how social media platforms treat neurodivergent users',
    link: 'https://theghanareport.com/opinion/the-ghanaian-researcher-challenging-how-social-media-platforms-treat-neurodivergent-users/',
    tag: 'Opinion'
  },
  {
    outlet: 'The Hub Web',
    logo: '/images/press/the-hub-web.webp',
    title: 'Rethinking diaspora parenting and youth crime in the UK: a case of the Ghanaian community',
    link: 'https://www.thehubweb.com/rethinking-diaspora-parenting-youth-crime-uk-ghanaian-community',
    tag: 'Social Impact'
  }
];

const AffiliationsSection = () => {
  return (
    <section className="w-full overflow-hidden border-y border-emerald-100 bg-gradient-to-b from-[#fbfdfc] to-[#f2f9f6] py-14 dark:border-border dark:bg-background dark:from-background dark:to-background sm:py-16">
      <div className="mx-auto w-full max-w-[1240px] px-4 text-center sm:px-6 lg:px-10">
        <span className="inline-block rounded-full border border-emerald-200 bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-emerald-700 shadow-sm dark:border-border dark:bg-card dark:text-foreground">
          Academic Affiliations &amp; Media
        </span>

        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          Trusted By &amp; Featured In
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-muted-foreground sm:text-base">
          Bridging academic research with industry-leading digital marketing, ethics, and neurodiversity discussions.
        </p>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 items-stretch gap-8 md:grid-cols-2 md:gap-10">
          {affiliations.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-full min-h-[19rem] flex-col justify-between overflow-hidden rounded-2xl border border-emerald-100 bg-white p-8 text-left shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-[#5aa88f]/40 hover:shadow-[0_16px_36px_-8px_rgba(90,168,143,0.22)] focus-visible-ring dark:border-border dark:bg-card dark:shadow-none dark:hover:border-[#5aa88f]/50"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#5aa88f] to-[#8ecdb8] transition-transform duration-300 group-hover:scale-x-100"
              />

              <span className="absolute left-4 top-4 rounded bg-emerald-50 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-emerald-700 dark:bg-muted dark:text-foreground">
                {item.tag}
              </span>

              <div className="mb-6 mt-4 flex h-28 w-full items-center justify-center rounded-xl bg-emerald-50/40 transition-colors duration-300 group-hover:bg-emerald-50 dark:bg-muted/30 dark:group-hover:bg-muted/60">
                <img
                  src={item.logoUrl}
                  alt={`${item.name} logo`}
                  className="max-h-20 max-w-[75%] transform object-contain opacity-90 grayscale transition-all duration-500 ease-in-out group-hover:scale-[1.04] group-hover:opacity-100 group-hover:grayscale-0"
                />
              </div>

              <div className="border-t border-emerald-50 pt-4 text-center dark:border-border">
                <p className="mb-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-muted-foreground">
                  {item.name}
                </p>
                <p className="mb-5 text-sm font-medium leading-relaxed text-slate-600 dark:text-muted-foreground">
                  {item.description}
                </p>

                <div className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#5aa88f] transition-colors duration-300 group-hover:text-[#4a957e]">
                  <span>View Profile</span>
                  <ArrowRight className="ml-1.5 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <h3 className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-xl">
            In the Press
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-muted-foreground">
            Coverage of our work on neurodivergent-inclusive digital design and community impact.
          </p>

          <ul className="mt-7 flex flex-wrap justify-center gap-4">
            {pressFeatures.map((item) => (
              <li key={item.link} className="w-[calc(50%-0.5rem)] sm:w-[13.5rem]">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-emerald-100 bg-white text-left shadow-[0_4px_16px_-4px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#5aa88f]/40 hover:shadow-[0_12px_26px_-10px_rgba(90,168,143,0.28)] focus-visible-ring dark:border-border dark:bg-card dark:shadow-none dark:hover:border-[#5aa88f]/50"
                >
                  <span className={`flex h-20 items-center justify-center px-5 transition-colors duration-300 ${item.logoDark ? 'bg-[#1d2b3a]' : 'bg-emerald-50/40 group-hover:bg-emerald-50 dark:bg-white/95 dark:group-hover:bg-white'}`}>
                    <img
                      src={item.logo}
                      alt={`${item.outlet} logo`}
                      loading="lazy"
                      decoding="async"
                      className="max-h-12 max-w-full object-contain opacity-90 grayscale transition-all duration-500 group-hover:scale-[1.04] group-hover:opacity-100 group-hover:grayscale-0"
                    />
                  </span>
                  <span className="flex flex-1 flex-col border-t border-emerald-50 p-3.5 dark:border-border">
                    <span className="flex items-center justify-between gap-2">
                      <span className="text-xs font-extrabold text-slate-900 dark:text-white">{item.outlet}</span>
                      <span className="rounded bg-emerald-50 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-emerald-700 dark:bg-muted dark:text-foreground">
                        {item.tag}
                      </span>
                    </span>
                    <span className="mt-1.5 line-clamp-2 flex-1 text-xs leading-snug text-slate-600 dark:text-muted-foreground">{item.title}</span>
                    <span className="mt-2.5 inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-[#5aa88f] transition-colors duration-300 group-hover:text-[#4a957e]">
                      Read article
                      <ArrowUpRight className="ml-0.5 h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                      <span className="sr-only"> on {item.outlet} (opens in a new tab)</span>
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AffiliationsSection;