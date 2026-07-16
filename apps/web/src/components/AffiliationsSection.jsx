import React from 'react';
import { ArrowRight } from 'lucide-react';

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
      </div>
    </section>
  );
};

export default AffiliationsSection;