import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'sonner';
import { Check, ChevronRight, ShoppingBag } from 'lucide-react';
import { canonicalFor } from '@/lib/seo';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { ProductCard, ProductImage, QuantityStepper, StoreNotice } from '@/components/store/StoreParts.jsx';
import { useCart } from '@/contexts/CartContext.jsx';
import { CATEGORIES, PRODUCTS, formatPrice, getProduct } from '@/data/storeProducts';

const ProductPage = () => {
  const { slug } = useParams();
  const product = getProduct(slug);
  const { addItem, setIsOpen, maxQty } = useCart();
  const [qty, setQty] = useState(1);
  const [choices, setChoices] = useState({});
  const [missing, setMissing] = useState([]);

  // Moving between products keeps this page mounted: start each product fresh.
  useEffect(() => {
    setQty(1);
    setChoices({});
    setMissing([]);
  }, [slug]);

  const related = useMemo(() => {
    if (!product) return [];
    const same = PRODUCTS.filter((p) => p.slug !== product.slug && p.category === product.category);
    const others = PRODUCTS.filter((p) => p.slug !== product.slug && p.category !== product.category);
    return [...same, ...others].slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <>
        <Helmet>
          <title>Product not found | NeuroDigital Support Store</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <Header />
        <main className="theme-aware-page flex min-h-[60vh] flex-col items-center justify-center gap-5 bg-[#f8fffb] px-5 py-24 text-center">
          <h1 className="text-3xl font-extrabold text-[#082f27]">We couldn&apos;t find that product</h1>
          <p className="text-[#536862]">It may have been removed or renamed.</p>
          <Link to="/store" className="rounded-full bg-[#4aa384] px-6 py-3 text-sm font-extrabold text-white hover:bg-[#3f9275]">Back to the store</Link>
        </main>
        <Footer />
      </>
    );
  }

  const optionEntries = Object.entries(product.options || {});
  const categoryLabel = CATEGORIES.find((c) => c.id === product.category)?.label;

  // Options with a single value are chosen automatically.
  const selected = Object.fromEntries(optionEntries.map(([name, values]) => [name, values.length === 1 ? values[0] : choices[name]]));

  const handleAdd = () => {
    const notChosen = optionEntries.filter(([name]) => !selected[name]).map(([name]) => name);
    if (notChosen.length) {
      setMissing(notChosen);
      toast.error(`Please choose a ${notChosen.join(' and ').toLowerCase()}.`);
      document.getElementById(`option-${notChosen[0]}`)?.querySelector('input')?.focus();
      return;
    }
    addItem(product.slug, selected, qty);
    toast.success(`${product.name} added to your basket`);
    setIsOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>{`${product.name} | NeuroDigital Support Store`}</title>
        <meta name="description" content={product.summary} />
        <link rel="canonical" href={canonicalFor(`/store/${product.slug}`)} />
      </Helmet>

      <Header />

      <main className="theme-aware-page min-h-screen bg-[#f8fffb] text-[#10231d]">
        <section className="bg-white py-10 sm:py-14">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm font-semibold text-[#536862]">
                <li><Link to="/" className="hover:underline">Home</Link></li>
                <li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li>
                <li><Link to="/store" className="hover:underline">Store</Link></li>
                <li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li>
                <li aria-current="page" className="text-[#082f27]">{product.name}</li>
              </ol>
            </nav>

            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
              <div className="overflow-hidden rounded-[2rem] border border-[#e0eee8] bg-[#f4fbf8] shadow-[0_28px_80px_rgba(15,61,50,0.1)]">
                <ProductImage product={product} eager sizes="(min-width: 1024px) 560px, 100vw" className="aspect-[4/5] h-full w-full" />
              </div>

              <div className="flex flex-col">
                {categoryLabel && (
                  <span className="w-fit rounded-full bg-[#eaf5f0] px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-[#2f8066] dark:bg-emerald-950/70">
                    {categoryLabel}
                  </span>
                )}
                <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#082f27] sm:text-4xl">{product.name}</h1>
                <p className="mt-4 text-2xl font-extrabold text-[#17483b]">{formatPrice(product.price)}</p>
                <p className="mt-5 text-base font-medium leading-relaxed text-[#536862]">{product.description}</p>

                {optionEntries.map(([name, values]) =>
                  values.length > 1 ? (
                    <fieldset key={name} id={`option-${name}`} className="mt-7" aria-describedby={missing.includes(name) ? `option-${name}-error` : undefined}>
                      <legend className="text-sm font-extrabold text-[#17483b]">
                        {name}
                        {selected[name] && <span className="font-semibold text-[#536862]">: {selected[name]}</span>}
                      </legend>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {values.map((value) => {
                          const active = selected[name] === value;
                          return (
                            <label
                              key={value}
                              className={`relative inline-flex min-h-11 min-w-12 cursor-pointer items-center justify-center rounded-xl border px-4 text-sm font-bold transition has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[#167158] has-[:focus-visible]:ring-offset-2 ${
                                active ? 'border-[#167158] bg-[#167158] text-white' : 'border-[#d2e7df] bg-white text-[#17483b] hover:border-[#8bc7ad]'
                              }`}
                            >
                              <input
                                type="radio"
                                name={`option-${name}`}
                                value={value}
                                checked={active}
                                onChange={() => {
                                  setChoices((c) => ({ ...c, [name]: value }));
                                  setMissing((m) => m.filter((n) => n !== name));
                                }}
                                className="sr-only"
                              />
                              {value}
                            </label>
                          );
                        })}
                      </div>
                      {missing.includes(name) && (
                        <p id={`option-${name}-error`} className="mt-2 text-xs font-bold text-red-600">Please choose a {name.toLowerCase()}.</p>
                      )}
                    </fieldset>
                  ) : (
                    <p key={name} className="mt-6 text-sm font-semibold text-[#536862]">
                      <span className="font-extrabold text-[#17483b]">{name}:</span> {values[0]}
                    </p>
                  )
                )}

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <QuantityStepper value={qty} max={maxQty} onChange={(n) => setQty(Math.max(1, Math.min(maxQty, n)))} />
                  <button
                    type="button"
                    onClick={handleAdd}
                    className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-[#4aa384] px-7 py-3.5 text-sm font-extrabold text-white shadow-[0_18px_42px_rgba(29,118,88,0.24)] transition hover:-translate-y-0.5 hover:bg-[#3f9275] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#167158] focus-visible:ring-offset-2 sm:flex-none"
                  >
                    <ShoppingBag className="h-4 w-4" aria-hidden="true" /> Add to basket
                  </button>
                </div>

                <StoreNotice className="mt-6" />

                {product.details?.length > 0 && (
                  <div className="mt-8 border-t border-[#e0eee8] pt-6">
                    <h2 className="text-sm font-extrabold uppercase tracking-wider text-[#17483b]">Details</h2>
                    <ul className="mt-4 space-y-2.5">
                      {product.details.map((d) => (
                        <li key={d} className="flex items-start gap-2.5 text-sm font-medium text-[#536862]">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#2f8066]" aria-hidden="true" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7fffb] py-16 sm:py-20" aria-labelledby="related-heading">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
            <div className="flex items-end justify-between gap-4">
              <h2 id="related-heading" className="text-2xl font-extrabold tracking-tight text-[#082f27] sm:text-3xl">You may also like</h2>
              <Link to="/store" className="text-sm font-extrabold text-[#167158] hover:underline">View all</Link>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
              {related.map((p) => (
                <li key={p.slug}><ProductCard product={p} /></li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ProductPage;
