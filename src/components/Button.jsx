import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Button = ({ text, className }) => {
  const buttonRef = useRef(null);
  const textRef = useRef(null);
  const arrowRef = useRef(null);
  const hoverRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const text = textRef.current;
    const arrow = arrowRef.current;
    const hover = hoverRef.current;

    if (!button || !text || !arrow || !hover) return;

    // Initial setup
    gsap.set(arrow, { x: 0 });
    gsap.set(hover, { scaleX: 0, transformOrigin: 'left center' });

    // Hover animation
    const onHover = () => {
      gsap.to(button, { 
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out'
      });
      
      gsap.to(hover, {
        scaleX: 1,
        duration: 0.4,
        ease: 'power2.out'
      });
      
      gsap.to(arrow, {
        x: 8,
        duration: 0.3,
        ease: 'power2.out',
        delay: 0.1
      });
    };

    const onHoverOut = () => {
      gsap.to(button, { 
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
      
      gsap.to(hover, {
        scaleX: 0,
        duration: 0.4,
        ease: 'power2.inOut'
      });
      
      gsap.to(arrow, {
        x: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    button.addEventListener('mouseenter', onHover);
    button.addEventListener('mouseleave', onHoverOut);

    return () => {
      button.removeEventListener('mouseenter', onHover);
      button.removeEventListener('mouseleave', onHoverOut);
    };
  }, []);

  const scrollToShowcase = (e) => {
    e.preventDefault();
    const showcaseSection = document.getElementById('showcase');
    if (showcaseSection) {
      // Click animation
      gsap.to(buttonRef.current, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        onComplete: () => {
          showcaseSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={scrollToShowcase}
      className={`${className || ''} relative group px-8 py-4 overflow-hidden 
        bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg
        transition-all duration-300 transform hover:shadow-lg hover:shadow-purple-500/30
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400`}
    >
      <span 
        ref={hoverRef}
        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 
          transition-transform duration-400 ease-out origin-left"
      />
      
      <span className="relative z-10 flex items-center justify-center gap-3">
        <span 
          ref={textRef}
          className="font-medium text-white tracking-wide"
        >
          {text}
        </span>
        <span 
          ref={arrowRef}
          className="inline-flex items-center justify-center transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white transform group-hover:translate-y-1 transition-transform duration-300"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </span>
      
      {/* Glow effect */}
      <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 
        bg-gradient-to-r from-purple-400/30 to-pink-400/30 
        transition-opacity duration-500" />
    </button>
  );
};

export default Button;
