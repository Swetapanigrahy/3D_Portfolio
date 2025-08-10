/**
 * Utility function for smooth scrolling to elements
 * @param {string} target - The target element selector or ID
 * @param {Object} options - Scroll options
 * @param {number} [options.offset=0] - Additional offset from the top of the target element
 * @param {number} [options.duration=800] - Duration of the scroll animation in milliseconds
 */
export const smoothScrollTo = (target, { offset = 0, duration = 800 } = {}) => {
  // If target is a string, treat it as a selector
  const targetElement =
    typeof target === "string" ? document.querySelector(target) : target;

  if (!targetElement) {
    console.warn(`Element not found: ${target}`);
    return;
  }

  const startPosition = window.pageYOffset;
  const targetPosition =
    targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
  const distance = targetPosition - startPosition;

  const supportsNativeSmooth =
    "scrollBehavior" in document.documentElement.style;
  const isMobile = window.matchMedia
    ? window.matchMedia("(pointer: coarse)").matches
    : /Mobi|Android/i.test(navigator.userAgent);

  // Prefer native smooth scrolling when available (especially on mobile)
  if (supportsNativeSmooth) {
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
    return;
  }

  // rAF fallback with easing
  let startTime = null;
  const effectiveDuration = isMobile ? Math.max(duration, 1200) : duration;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutQuad(
      timeElapsed,
      startPosition,
      distance,
      effectiveDuration
    );
    window.scrollTo(0, run);
    if (timeElapsed < effectiveDuration) {
      window.requestAnimationFrame(animation);
    }
  }

  // Easing function for smooth animation
  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  window.requestAnimationFrame(animation);
};

// Add smooth scrolling behavior to all anchor links
export const initSmoothScrolling = () => {
  document.addEventListener("click", (e) => {
    // Support clicks on nested elements within anchors
    const anchor = e.target.closest && e.target.closest('a[href^="#"]');
    if (!anchor) return;

    const href = anchor.getAttribute("href");
    if (!href || href === "#") return;

    const targetElement = document.querySelector(href);
    if (targetElement) {
      e.preventDefault();
      // Calculate header height for offset (adjust selector as needed)
      const header = document.querySelector("header");
      const headerHeight = header ? header.offsetHeight : 80;

      smoothScrollTo(targetElement, {
        offset: headerHeight + 20,
        duration: 900,
      });
    }
  });
};
