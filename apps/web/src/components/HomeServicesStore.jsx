import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpenCheck, Compass, Presentation, ShoppingBag } from 'lucide-react';
import { ProductCard } from '@/components/store/StoreParts.jsx';
import { getProduct } from '@/data/storeProducts';

// Home page teasers for the Consultancy & Training page and the Store.

const services = [
  { label: 'Consultancy', icon: Compass },
  { label: '10 training modules', icon: BookOpenCheck },
  { label: 'Interactive workshops', icon: Presentation }
];

const FEATURED = ['nd-support-classic-tshirt', 'nd-support-canvas-tote', 'lavender-water-bottle', 'sensory-friendly-headphones'];

const primary =
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#4aa384] px-7 py-3.5 text-sm font-extrabold text-white shadow-[0_18px_42px_rgba(29,118,88,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3f9275] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#167158] focus-visible:ring-offset-2';
const outline =
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#b7dcca] bg-white/80 px-7 py-3.5 text-sm font-extrabold text-[#17483b] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8bc7ad] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#167158] focus-visible:ring-offset-2';

const HomeServicesStore = () => {
  const featured = FEATURED.map(getProduct).filter(Boolean);

  return (
    <div className="theme-aware-page">
      {/* Consultancy, Training & Workshops */}
      <section className="bg-white py-20 sm:py-28" aria-labelledby="home-training-heading">
        <div className="mx-auto grid max-w-[1220px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-10">
          <img
            src="/images/training/workshops-1600.webp"
            srcSet="/images/training/workshops-800.webp 800w, /images/training/workshops-1600.webp 1600w"
            sizes="(min-width: 1024px) 580px, 100vw"
            width="1600"
            height="900"
            loading="lazy"
            decoding="async"
            alt="Adults contributing to an inclusive small-group workshop. AI-generated illustrative image."
            className="aspect-[16/10] w-full rounded-[1.75rem] object-cover shadow-[0_28px_80px_rgba(15,61,50,0.14)]"
          />
          <div>
            <span className="inline-flex rounded-full bg-[#eaf5f0] px-4 py-2 text-sm font-extrabold text-[#2f8066] dark:bg-emerald-950/70">
              Consultancy, Training &amp; Workshops
            </span>
            <h2 id="home-training-heading" className="mt-6 text-3xl font-extrabold leading-[1.15] tracking-tight text-[#082f27] sm:text-4xl lg:text-[2.75rem]">
              Help your team build
              <br />
              <span className="text-[#2f8066]">more inclusive digital spaces</span>
            </h2>
            <p className="mt-5 max-w-xl text-base font-semibold leading-relaxed text-[#536862] sm:text-lg">
              Practical consultancy, structured training and interactive workshops for care providers, employers, educators, charities and public services supporting autistic and neurodivergent adults.
            </p>
            <ul className="mt-7 flex flex-wrap gap-3">
              {services.map(({ label, icon: Icon }) => (
                <li key={label} className="inline-flex items-center gap-2 rounded-full border border-[#e0eee8] bg-[#fbfffd] px-4 py-2 text-sm font-bold text-[#17483b]">
                  <Icon className="h-4 w-4 text-[#2f8066]" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/consultancy-training-workshops" className={primary}>
                Explore our services <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link to="/contact" className={outline}>
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Store */}
      <section className="bg-[#f7fffb] py-20 sm:py-28" aria-labelledby="home-store-heading">
        <div className="mx-auto max-w-[1220px] px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf5f0] px-4 py-2 text-sm font-extrabold text-[#2f8066] dark:bg-emerald-950/70">
                <ShoppingBag className="h-4 w-4" aria-hidden="true" /> NeuroDigital Support Store
              </span>
              <h2 id="home-store-heading" className="mt-6 text-3xl font-extrabold leading-[1.15] tracking-tight text-[#082f27] sm:text-4xl lg:text-[2.75rem]">
                Wear the mission, <span className="text-[#2f8066]">share the message</span>
              </h2>
              <p className="mt-5 text-base font-semibold leading-relaxed text-[#536862] sm:text-lg">
                Colourful T-shirts, hoodies, bags, bottles and comfort picks featuring our ND support branding.
              </p>
            </div>
            <Link to="/store" className={`${primary} shrink-0`}>
              Visit the store <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <ul className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {featured.map((product) => (
              <li key={product.slug}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HomeServicesStore;
