import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { BellRing, CreditCard, Lock, ShoppingBag, Truck, UserRound } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { ProductImage, QuantityStepper, optionText } from '@/components/store/StoreParts.jsx';
import { useCart } from '@/contexts/CartContext.jsx';
import { formatPrice } from '@/data/storeProducts';
import { submitNewsletterSignup } from '@/api/api';

// Checkout layout for the store preview. Payments are intentionally not connected yet: the form is
// shown (disabled) so the client can review the flow. To go live, enable the fieldsets and post the
// basket to a payment provider (e.g. Stripe Checkout) or a print-on-demand / dropshipping partner.
const CHECKOUT_ENABLED = false;

const inputClass =
  'h-12 w-full rounded-xl border border-[#d2e7df] bg-white px-4 text-sm font-medium text-[#102f28] outline-none disabled:cursor-not-allowed disabled:bg-[#f4f7f6] disabled:text-[#8aa39b]';

const Section = ({ icon: Icon, title, children }) => (
  <fieldset disabled={!CHECKOUT_ENABLED} className="rounded-[1.5rem] border border-[#e0eee8] bg-white p-6 sm:p-7">
    <legend className="sr-only">{title}</legend>
    <h2 className="flex items-center gap-3 text-lg font-extrabold tracking-tight text-[#082f27]" aria-hidden="true">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#eaf5f0] text-[#2f8066] dark:bg-emerald-950/70">
        <Icon className="h-4 w-4" />
      </span>
      {title}
    </h2>
    <div className="mt-5 grid gap-4 sm:grid-cols-2">{children}</div>
  </fieldset>
);

const Input = ({ id, label, wide, ...props }) => (
  <div className={wide ? 'sm:col-span-2' : ''}>
    <label htmlFor={id} className="mb-1.5 block text-sm font-bold text-[#17483b]">{label}</label>
    <input id={id} className={inputClass} {...props} />
  </div>
);

const CheckoutPage = () => {
  const { items, subtotal, setQty, maxQty } = useCart();
  const [email, setEmail] = useState('');
  const [sending, setSending] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const notifyMe = async (event) => {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      toast.error('Please enter a valid email address.');
      return;
    }
    setSending(true);
    try {
      await submitNewsletterSignup(email.trim());
      setSubscribed(true);
      setEmail('');
    } catch (error) {
      toast.error(error.message || 'We could not save your email right now. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Checkout | NeuroDigital Support Store</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <Header />

      <main className="theme-aware-page min-h-screen bg-[#f8fffb] text-[#10231d]">
        <div className="mx-auto max-w-[1180px] px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
          <h1 className="text-3xl font-extrabold tracking-tight text-[#082f27] sm:text-4xl">Checkout</h1>

          <div className="mt-6 rounded-[1.5rem] border border-[#f1dfb8] bg-[#fffaf0] p-6 dark:border-amber-900/50 dark:bg-amber-950/30 sm:p-7">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-[#a16d0b] dark:bg-amber-900/40 dark:text-amber-200">
                  <BellRing className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-lg font-extrabold text-[#5a4210] dark:text-amber-100">Online checkout is opening soon</h2>
                  <p className="mt-1 max-w-xl text-sm font-medium leading-relaxed text-[#6b5320] dark:text-amber-100/90">
                    We are setting up secure card payments. No order will be placed and no payment taken. Leave your email and we will let you know when the store opens.
                  </p>
                </div>
              </div>
              {subscribed ? (
                <p role="status" className="rounded-xl bg-white px-4 py-3 text-sm font-bold text-[#167158] dark:bg-emerald-950/60 dark:text-emerald-200">
                  Thank you, we will email you when the store opens.
                </p>
              ) : (
                <form onSubmit={notifyMe} className="flex w-full flex-col gap-2 sm:flex-row lg:max-w-md" noValidate>
                  <label htmlFor="notify-email" className="sr-only">Email address</label>
                  <input id="notify-email" type="email" autoComplete="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className="h-12 flex-1 rounded-xl border border-[#e8d6ae] bg-white px-4 text-sm font-medium text-[#102f28] outline-none focus-visible:ring-2 focus-visible:ring-[#167158]" />
                  <button type="submit" disabled={sending} className="h-12 rounded-xl bg-[#167158] px-5 text-sm font-extrabold text-white transition hover:bg-[#0f5c47] disabled:opacity-70">
                    {sending ? 'Saving…' : 'Notify me'}
                  </button>
                </form>
              )}
            </div>
          </div>

          {items.length === 0 ? (
            <div className="mt-10 flex flex-col items-center gap-4 rounded-[1.5rem] border border-[#e0eee8] bg-white px-6 py-16 text-center">
              <ShoppingBag className="h-10 w-10 text-[#2f8066]" aria-hidden="true" />
              <h2 className="text-xl font-extrabold text-[#082f27]">Your basket is empty</h2>
              <Link to="/store" className="rounded-full bg-[#4aa384] px-6 py-3 text-sm font-extrabold text-white hover:bg-[#3f9275]">Browse the store</Link>
            </div>
          ) : (
            <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1.25fr_0.9fr]">
              <div className="space-y-6" aria-describedby="checkout-disabled-note">
                <p id="checkout-disabled-note" className="sr-only">The checkout form is disabled until online ordering opens.</p>
                <Section icon={UserRound} title="Contact">
                  <Input id="co-name" label="Full name" autoComplete="name" />
                  <Input id="co-email" label="Email address" type="email" autoComplete="email" />
                  <Input id="co-phone" label="Phone (optional)" type="tel" autoComplete="tel" wide />
                </Section>
                <Section icon={Truck} title="Delivery address">
                  <Input id="co-address1" label="Address line 1" autoComplete="address-line1" wide />
                  <Input id="co-address2" label="Address line 2 (optional)" autoComplete="address-line2" wide />
                  <Input id="co-city" label="Town or city" autoComplete="address-level2" />
                  <Input id="co-postcode" label="Postcode" autoComplete="postal-code" />
                  <Input id="co-country" label="Country" autoComplete="country-name" defaultValue="United Kingdom" wide />
                </Section>
                <Section icon={CreditCard} title="Payment">
                  <Input id="co-card" label="Card number" inputMode="numeric" placeholder="1234 1234 1234 1234" wide />
                  <Input id="co-expiry" label="Expiry date" placeholder="MM / YY" />
                  <Input id="co-cvc" label="Security code" placeholder="CVC" />
                </Section>
              </div>

              <aside className="theme-surface rounded-[1.5rem] border border-[#e0eee8] bg-white p-6 shadow-[0_22px_70px_rgba(15,50,40,0.06)] sm:p-7 lg:sticky lg:top-24" aria-labelledby="summary-heading">
                <h2 id="summary-heading" className="text-lg font-extrabold tracking-tight text-[#082f27]">Order summary</h2>
                <ul className="mt-5 divide-y divide-[#e0eee8]">
                  {items.map((line) => (
                    <li key={line.id} className="flex gap-4 py-4">
                      <div className="h-20 w-16 shrink-0 overflow-hidden rounded-xl bg-[#f4fbf8]">
                        <ProductImage product={line.product} className="h-full w-full" />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col">
                        <Link to={`/store/${line.slug}`} className="text-sm font-extrabold leading-snug text-[#082f27] hover:underline">{line.product.name}</Link>
                        {Object.keys(line.options).length > 0 && <p className="mt-0.5 text-xs font-medium text-[#6b817a]">{optionText(line.options)}</p>}
                        <div className="mt-auto flex items-center justify-between pt-2">
                          <QuantityStepper size="sm" value={line.qty} max={maxQty} onChange={(n) => setQty(line.id, n)} label={`Quantity of ${line.product.name}`} />
                          <span className="text-sm font-extrabold text-[#17483b]">{formatPrice(line.qty * line.product.price)}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <dl className="mt-4 space-y-2 border-t border-[#e0eee8] pt-4 text-sm dark:[&_*]:!text-foreground">
                  <div className="flex justify-between font-semibold text-[#536862]"><dt>Subtotal</dt><dd>{formatPrice(subtotal)}</dd></div>
                  <div className="flex justify-between font-semibold text-[#536862]"><dt>Delivery</dt><dd>Confirmed at launch</dd></div>
                  <div className="flex justify-between pt-2 text-base font-extrabold text-[#082f27]"><dt>Total</dt><dd>{formatPrice(subtotal)}</dd></div>
                </dl>
                <button type="button" disabled aria-describedby="place-order-note" className="mt-6 inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-full bg-[#9cc9b8] py-3.5 text-sm font-extrabold text-white">
                  <Lock className="h-4 w-4" aria-hidden="true" /> Place order
                </button>
                <p id="place-order-note" className="mt-3 text-center text-xs font-medium text-[#6b817a]">Ordering opens soon. You will not be charged.</p>
              </aside>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default CheckoutPage;
