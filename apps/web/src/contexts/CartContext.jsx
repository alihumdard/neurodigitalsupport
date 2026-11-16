import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { getProduct } from '@/data/storeProducts';

// Basket for the store preview. Items live in this browser only (localStorage); nothing is sent
// to a server until a checkout is connected.
const STORAGE_KEY = 'nds-basket-v1';
const MAX_QTY = 10;

const CartContext = createContext(null);

const lineId = (slug, options = {}) =>
  `${slug}|${Object.keys(options)
    .sort()
    .map((key) => `${key}=${options[key]}`)
    .join(',')}`;

const readStored = () => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    // Drop anything that is no longer in the catalogue.
    return Array.isArray(parsed) ? parsed.filter((line) => getProduct(line.slug)) : [];
  } catch {
    return [];
  }
};

export const CartProvider = ({ children }) => {
  const [lines, setLines] = useState(readStored);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      // Storage blocked (private mode etc.): the basket still works for this visit.
    }
  }, [lines]);

  const addItem = useCallback((slug, options = {}, qty = 1) => {
    const id = lineId(slug, options);
    setLines((current) => {
      const existing = current.find((line) => line.id === id);
      if (existing) {
        return current.map((line) => (line.id === id ? { ...line, qty: Math.min(MAX_QTY, line.qty + qty) } : line));
      }
      return [...current, { id, slug, options, qty: Math.min(MAX_QTY, qty) }];
    });
  }, []);

  const setQty = useCallback((id, qty) => {
    setLines((current) =>
      qty <= 0 ? current.filter((line) => line.id !== id) : current.map((line) => (line.id === id ? { ...line, qty: Math.min(MAX_QTY, qty) } : line))
    );
  }, []);

  const removeItem = useCallback((id) => setLines((current) => current.filter((line) => line.id !== id)), []);
  const clear = useCallback(() => setLines([]), []);

  const value = useMemo(() => {
    const items = lines
      .map((line) => ({ ...line, product: getProduct(line.slug) }))
      .filter((line) => line.product);
    const count = items.reduce((sum, line) => sum + line.qty, 0);
    const subtotal = items.reduce((sum, line) => sum + line.qty * line.product.price, 0);
    return { items, count, subtotal, addItem, setQty, removeItem, clear, isOpen, setIsOpen, maxQty: MAX_QTY };
  }, [lines, addItem, setQty, removeItem, clear, isOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used inside CartProvider');
  return context;
};
