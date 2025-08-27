/**
 * Easing function for smooth scrolling
 */
function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
}

// Check if we're on a mobile device
const isMobileDevice = () => {
  return (typeof window.orientation !== 'undefined') || 
         (navigator.userAgent.indexOf('IEMobile') !== -1) ||
         /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Initialize smooth scrolling
document.documentElement.style.scrollBehavior = isMobileDevice() ? 'auto' : 'smooth';

/**
 * Utility function for smooth scrolling to elements
 * @param {string|HTMLElement} target - The target element selector or DOM element
 * @param {Object} options - Scroll options
 * @param {number} [options.offset=0] - Additional offset from the top of the target element
 * @param {number} [options.duration=800] - Duration of the scroll animation in milliseconds
 */
const smoothScrollTo = (target, { offset = 0, duration = 800 } = {}) => {
  // If target is a string, treat it as a selector
  const targetElement = typeof target === 'string' ? document.querySelector(target) : target;

  if (!targetElement) {
    console.warn(`Element not found: ${target}`);
    return Promise.reject('Target element not found');
  }

  // Calculate target position with offset
  const startPosition = window.pageYOffset;
  const targetPosition = Math.max(0, targetElement.getBoundingClientRect().top + window.pageYOffset - offset);
  const distance = targetPosition - startPosition;

  // Use native smooth scrolling when available (especially on mobile)
  if ('scrollBehavior' in document.documentElement.style || isMobileDevice()) {
    return new Promise((resolve) => {
      window.scrollTo({
        top: targetPosition,
        behavior: isMobileDevice() ? 'auto' : 'smooth'
      });
      // Small timeout to ensure the scroll has completed
      setTimeout(resolve, duration);
    });
  }

  // Fallback to manual animation
  return new Promise((resolve) => {
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      
      window.scrollTo(0, run);
      
      if (timeElapsed < duration) {
        window.requestAnimationFrame(animation);
      } else {
        resolve();
      }
    }

    window.requestAnimationFrame(animation);
  });
};

// Initialize smooth scrolling for anchor links
const initSmoothScrolling = () => {
  document.addEventListener('click', (e) => {
    // Support clicks on nested elements within anchors
    const anchor = e.target.closest && e.target.closest('a[href^="#"]');
    if (!anchor) return;
    
    const href = anchor.getAttribute('href');
    if (href === '#' || href === '') return;
    
    e.preventDefault();
    
    // Calculate header height for offset (adjust selector as needed)
    const header = document.querySelector('header');
    const headerHeight = header ? header.offsetHeight : 80;
    
    smoothScrollTo(href, {
      offset: headerHeight + 20,
      duration: 1000
    });
  });
};

// Auto-initialize smooth scrolling
if (typeof window !== 'undefined') {
  // Wait for DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSmoothScrolling);
  } else {
    initSmoothScrolling();
  }
}

export { smoothScrollTo, initSmoothScrolling };
