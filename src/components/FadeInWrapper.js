import React, { useState, useEffect, useRef } from 'react';

export const FadeInWrapper = (props) => {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
      return () => observer.unobserve(domRef.current);
    }, []);

    useEffect(() => {
      if (isVisible) {
        props.onVisible();
      }
    }, [isVisible]);

    return (
      <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
};
