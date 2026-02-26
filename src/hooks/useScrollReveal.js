import { useEffect, useRef } from 'react';

/**
 * Custom hook for scroll-triggered reveal animations.
 * Uses IntersectionObserver for smooth, performant animations.
 *
 * @param {Object} options
 * @param {number} options.threshold - Visibility threshold (0-1)
 * @param {string} options.rootMargin - Observer root margin
 */
export function useScrollReveal({ threshold = 0.15, rootMargin = '0px 0px -60px 0px' } = {}) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('revealed');
                    observer.unobserve(el);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    return ref;
}

/**
 * Hook to reveal multiple children with stagger delay.
 * Attach ref to the parent container.
 */
export function useStaggerReveal({ threshold = 0.1, rootMargin = '0px 0px -40px 0px', stagger = 120 } = {}) {
    const ref = useRef(null);

    useEffect(() => {
        const container = ref.current;
        if (!container) return;

        const children = container.querySelectorAll('.stagger-item');

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    children.forEach((child, i) => {
                        setTimeout(() => {
                            child.classList.add('revealed');
                        }, i * stagger);
                    });
                    observer.unobserve(container);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(container);
        return () => observer.disconnect();
    }, [threshold, rootMargin, stagger]);

    return ref;
}
