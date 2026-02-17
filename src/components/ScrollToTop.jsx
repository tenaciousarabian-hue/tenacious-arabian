import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // If there is no hash, scroll to top
        if (!hash) {
            window.scrollTo(0, 0);
        }
        // If there is a hash, we might want to manually scroll to it
        // because React Router sometimes doesn't handle it on route change perfectly
        // especially if we have custom scroll logic.
        else {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else {
                // Fallback if element not found immediately (e.g. slight delay)
                setTimeout(() => {
                    const el = document.getElementById(id);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
