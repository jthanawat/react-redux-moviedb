import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const NumberFormat = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'USD',
});

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
