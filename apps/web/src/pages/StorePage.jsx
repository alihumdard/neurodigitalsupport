import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { HeartHandshake, Palette, ShoppingBag, Sparkles } from 'lucide-react';
import { canonicalFor } from '@/lib/seo';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import AffiliationsSection from '@/components/AffiliationsSection.jsx';
import { ProductCard, StoreNotice } from '@/components/store/StoreParts.jsx';
import { CATEGORIES, PRODUCTS } from '@/data/storeProducts';

const SORTS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: low to high' },
  { id: 'price-desc', label: 'Price: high to low' },
  { id: 'name', label: 'Name A–Z' }
];

const highlights = [
  { title: 'Calm, colourful designs', text: 'Our playful ND support branding on everyday essentials.', icon: Palette },
  { title: 'Comfort & sensory picks', text: 'Headphones, blankets and pouches chosen with comfort in mind.', icon: Sparkles },
  { title: 'Wear the mission', text: 'Every item helps share our message of digital inclusion.', icon: HeartHandshake }
];

const StorePage = () => {
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('featured');

  const products = useMemo(() => {
    const list = category === 'all' ? [...PRODUCTS] : PRODUCTS.filter((p) => p.category === category);
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    if (sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [category, sort]);

  return (
    <>
      <Helmet>
        <title>Store | NeuroDigital Support Merchandise</title>
        <meta name="description" content="Shop NeuroDigital Support merchandise: T-shirts, hoodies, mugs, tote bags, notebooks and comfort and sensory items featuring our colourful ND support branding." />
        <link rel="canonical" href={canonicalFor('/store')} />
      </Helmet>

      <Header />

      <main className="theme-aware-page min-h-screen overflow-hidden bg-[#f8fffb] text-[#10231d]">
        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#f7fffb_38%,#dff6ed_100%)]">
          <div className="pointer-events-none absolute left-1/2 top-10 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-[#b7ead8]/30 blur-3xl" aria-hidden="true" data-focus-distraction />
          <div className="relative mx-auto max-w-[1220px] px-5 py-7 text-center sm:px-8 lg:px-10 lg:py-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf5f0] px-4 py-2 text-sm font-extrabold text-[#2f8066] dark:bg-emerald-950/70">
              <ShoppingBag className="h-4 w-4" aria-hidden="true" /> NeuroDigital Support Merchandise
            </span>
            <h1 className="mt-7 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#082f27] sm:text-5xl">
              The ND Support <span className="text-[#2f8066]">Store</span>
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-lg font-semibold leading-relaxed text-[#314b41]">
              Colourful everyday essentials and comfort picks, designed to share our message of neurodivergent-inclusive digital life.
            </p>
            <StoreNotice className="mx-auto mt-5 max-w-2xl text-left" />
          </div>
        </section>

        <section className="bg-white pt-6 pb-5 lg:pt-8 lg:pb-6" aria-labelledby="products-heading">
          <div className="mx-auto max-w-[1220px] px-5 sm:px-8 lg:px-10">
            <h2 id="products-heading" className="sr-only">Products</h2>
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden" role="group" aria-label="Filter by category">
                {CATEGORIES.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    aria-pressed={category === c.id}
                    onClick={() => setCategory(c.id)}
                    className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#167158] focus-visible:ring-offset-2 ${
                      category === c.id ? 'bg-[#167158] text-white' : 'border border-[#d2e7df] bg-white text-[#17483b] hover:border-[#8bc7ad]'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <label htmlFor="store-sort" className="shrink-0 text-sm font-bold text-[#17483b]">Sort by</label>
                <select id="store-sort" value={sort} onChange={(e) => setSort(e.target.value)} className="h-11 flex-1 rounded-xl border border-[#d2e7df] bg-white px-3 text-sm sm:flex-none font-medium text-[#102f28] outline-none focus-visible:ring-2 focus-visible:ring-[#167158]">
                  {SORTS.map((s) => (
                    <option key={s.id} value={s.id}>{s.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <p className="mt-4 text-sm font-semibold text-[#536862]" aria-live="polite">
              {products.length} {products.length === 1 ? 'product' : 'products'}
            </p>

            <ul className="mt-4 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
              {products.map((product) => (
                <li key={product.slug}>
                  <ProductCard product={product} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-[#f7fffb] py-4 lg:py-5">
          <ul className="mx-auto grid max-w-[1220px] gap-4 px-5 sm:px-8 md:grid-cols-3 lg:px-10">
            {highlights.map(({ title, text, icon: Icon }) => (
              <li key={title} className="flex items-start gap-4 rounded-[1.25rem] border border-[#e0eee8] bg-white p-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eaf5f0] text-[#2f8066] dark:bg-emerald-950/70">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-base font-extrabold text-[#082f27]">{title}</span>
                  <span className="mt-1 block text-sm font-medium leading-relaxed text-[#536862]">{text}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <AffiliationsSection />
      <Footer />
    </>
  );
};

export default StorePage;
