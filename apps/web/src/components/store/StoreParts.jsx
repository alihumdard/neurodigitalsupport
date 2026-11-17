import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Info, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useCart } from '@/contexts/CartContext.jsx';
import { formatPrice } from '@/data/storeProducts';

/** Product photo, or a branded placeholder while a product has no photo yet. */
export const ProductImage = ({ product, className = '', sizes = '(min-width: 1024px) 25vw, 50vw', eager = false }) => {
  if (!product.image) {
    return (
      <div
        role="img"
        aria-label={product.alt}
        className={`flex flex-col items-center justify-center gap-[6%] bg-[linear-gradient(160deg,#efe9fb_0%,#e3f4ec_55%,#fdeee4_100%)] p-[8%] ${className}`}
      >
        <span className="flex aspect-square w-1/2 max-w-[220px] items-center justify-center rounded-[22%] bg-white p-[7%] shadow-[0_18px_50px_rgba(15,50,40,0.12)]">
          <img src="/logo.jpeg" alt="" className="h-full w-full object-contain" />
        </span>
        <span className="rounded-full bg-white/85 px-3 py-1 text-center text-[10px] font-bold uppercase tracking-wider text-[#536862] sm:text-[11px]">Photo coming soon</span>
      </div>
    );
  }
  return (
    <img
      src={product.image}
      alt={product.alt}
      sizes={sizes}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={`object-cover ${className}`}
    />
  );
};

export const StoreNotice = ({ className = '' }) => (
  <p className={`flex items-start gap-3 rounded-2xl border border-[#f1dfb8] bg-[#fffaf0] p-4 text-sm font-medium leading-relaxed text-[#6b5320] dark:border-amber-900/50 dark:bg-amber-950/30 dark:text-amber-100 ${className}`}>
    <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
    <span>
      <strong className="font-extrabold">Store preview.</strong> Online ordering is not open yet. You can browse and add items to your basket to see how it will work. Prices are indicative.
    </span>
  </p>
);

export const ProductCard = ({ product }) => (
  <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border sm:rounded-[1.6rem] border-[#e0eee8] bg-white shadow-[0_18px_54px_rgba(15,50,40,0.045)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_72px_rgba(15,50,40,0.09)]">
    <div className="relative aspect-square overflow-hidden bg-[#f4fbf8]">
      <ProductImage product={product} className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]" />
      {product.badge && (
        <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] sm:left-3 sm:top-3 sm:px-3 sm:py-1 sm:text-[11px] font-extrabold uppercase tracking-wider text-[#167158] shadow-sm dark:bg-emerald-950/80">
          {product.badge}
        </span>
      )}
    </div>
    <div className="flex flex-1 flex-col p-3 sm:p-5">
      <h3 className="break-words text-sm font-extrabold leading-snug tracking-tight text-[#082f27] [overflow-wrap:anywhere] sm:text-base">
        {/* The whole card is clickable through this link's stretched overlay. */}
        <Link to={`/store/${product.slug}`} className="after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:rounded-[1.6rem] focus-visible:after:ring-2 focus-visible:after:ring-[#167158]">
          {product.name}
        </Link>
      </h3>
      <p className="mt-1 line-clamp-2 text-xs font-medium leading-relaxed text-[#536862] sm:mt-1.5 sm:line-clamp-none sm:text-sm">{product.summary}</p>
      <p className="mt-auto pt-2 text-base sm:pt-4 sm:text-lg font-extrabold text-[#17483b]">{formatPrice(product.price)}</p>
    </div>
  </article>
);

export const QuantityStepper = ({ value, onChange, max = 10, label = 'Quantity', size = 'md' }) => {
  const h = size === 'sm' ? 'h-9 w-9' : 'h-11 w-11';
  return (
    <div className="inline-flex items-center rounded-full border border-[#d2e7df] bg-white" role="group" aria-label={label}>
      <button type="button" onClick={() => onChange(value - 1)} disabled={value <= 1 && size !== 'sm'} className={`${h} inline-flex items-center justify-center rounded-full text-[#17483b] transition hover:bg-[#eaf5f0] disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#167158]`} aria-label="Decrease quantity">
        {size === 'sm' && value <= 1 ? <Trash2 className="h-4 w-4" aria-hidden="true" /> : <Minus className="h-4 w-4" aria-hidden="true" />}
      </button>
      <span className="min-w-8 text-center text-sm font-extrabold text-[#082f27]" aria-live="polite">
        <span className="sr-only">Quantity </span>
        {value}
      </span>
      <button type="button" onClick={() => onChange(value + 1)} disabled={value >= max} className={`${h} inline-flex items-center justify-center rounded-full text-[#17483b] transition hover:bg-[#eaf5f0] disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#167158]`} aria-label="Increase quantity">
        <Plus className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
};

export const optionText = (options = {}) =>
  Object.entries(options)
    .map(([key, value]) => `${key}: ${value}`)
    .join(' · ');

/** Header basket button with item count. */
export const CartButton = ({ className = '' }) => {
  const { count, setIsOpen } = useCart();
  return (
    <button
      type="button"
      onClick={() => setIsOpen(true)}
      className={`relative inline-flex h-10 w-10 items-center justify-center rounded-2xl text-foreground transition hover:bg-muted focus-visible-ring ${className}`}
      aria-label={count ? `Basket, ${count} item${count === 1 ? '' : 's'}` : 'Basket, empty'}
    >
      <ShoppingBag className="h-5 w-5" aria-hidden="true" />
      {count > 0 && (
        <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#167158] px-1 text-[10px] font-extrabold text-white" aria-hidden="true">
          {count > 9 ? '9+' : count}
        </span>
      )}
    </button>
  );
};

/** Slide-out basket, opened from the header or after "Add to basket". */
export const CartDrawer = () => {
  const navigate = useNavigate();
  const { items, subtotal, setQty, removeItem, isOpen, setIsOpen, maxQty } = useCart();

  const go = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      {/* z-[80]: above the cookie banner (z-[70]) so the checkout button is never covered. */}
      <SheetContent side="right" className="z-[80] flex w-full flex-col gap-0 p-0 sm:max-w-md">
        <SheetHeader className="border-b px-6 py-5 text-left">
          <SheetTitle className="text-xl font-extrabold tracking-tight">Your basket</SheetTitle>
          <SheetDescription>{items.length ? 'Review your items before checkout.' : 'Your basket is empty.'}</SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#eaf5f0] text-[#167158] dark:bg-emerald-950/70">
              <ShoppingBag className="h-7 w-7" aria-hidden="true" />
            </span>
            <p className="text-sm font-medium text-muted-foreground">Browse the store to add something.</p>
            <button type="button" onClick={() => go('/store')} className="rounded-full bg-[#4aa384] px-6 py-3 text-sm font-extrabold text-white transition hover:bg-[#3f9275]">
              Visit the store
            </button>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y overflow-y-auto px-6">
              {items.map((line) => (
                <li key={line.id} className="flex gap-4 py-5">
                  <div className="h-24 w-20 shrink-0 overflow-hidden rounded-xl bg-[#f4fbf8]">
                    <ProductImage product={line.product} className="h-full w-full" />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <button type="button" onClick={() => go(`/store/${line.slug}`)} className="text-left text-sm font-extrabold leading-snug text-foreground hover:underline">
                        {line.product.name}
                      </button>
                      <button type="button" onClick={() => removeItem(line.id)} className="rounded p-1 text-muted-foreground transition hover:text-red-600" aria-label={`Remove ${line.product.name}`}>
                        <Trash2 className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                    {Object.keys(line.options).length > 0 && <p className="mt-1 text-xs font-medium text-muted-foreground">{optionText(line.options)}</p>}
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <QuantityStepper size="sm" value={line.qty} max={maxQty} onChange={(qty) => setQty(line.id, qty)} label={`Quantity of ${line.product.name}`} />
                      <span className="text-sm font-extrabold text-foreground">{formatPrice(line.qty * line.product.price)}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="border-t px-6 py-5">
              <div className="flex items-center justify-between text-base font-extrabold">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-1 text-xs font-medium text-muted-foreground">Delivery is calculated at checkout.</p>
              <button type="button" onClick={() => go('/store/checkout')} className="mt-4 w-full rounded-full bg-[#4aa384] py-3.5 text-sm font-extrabold text-white shadow-[0_14px_34px_rgba(29,118,88,0.22)] transition hover:bg-[#3f9275]">
                Go to checkout
              </button>
              <button type="button" onClick={() => setIsOpen(false)} className="mt-2 w-full rounded-full py-3 text-sm font-bold text-[#167158] transition hover:bg-muted dark:text-emerald-300">
                Continue shopping
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};
