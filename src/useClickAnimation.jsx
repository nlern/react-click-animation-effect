import { useEffect } from 'react';

export const useClickAnimation = (element, config) => {
  const {
    size = 100,
    color = '#fff',
    duration = 800,
    effectName = 'ripple',
  } = config;

  useEffect(() => {
    const applyContainerProperties = () => {
      element.current.classList.add('effect-container', effectName);
    };

    // apply the style and classname to the element
    applyContainerProperties();

    const applyStyles = (e) => {
      const { offsetX, offsetY } = e;
      const sizeOffset = size / 2;
      const { style } = element.current;

      style.setProperty('--effect-duration', `${duration}ms`);
      style.setProperty('--effect-top', `${offsetY - sizeOffset}px`);
      style.setProperty('--effect-left', `${offsetX - sizeOffset}px`);
      style.setProperty('--effect-height', `${size}px`);
      style.setProperty('--effect-width', `${size}px`);
      style.setProperty('--effect-color', color);
    };

    const onClick = (e) => {
      element.current.classList.remove('active');
      applyStyles(e);
      element.current.classList.add('active');
    };

    // add an event listener
    element.current.addEventListener('mouseup', onClick);

    // needed for referencing the ref in the return function
    const cleanupRef = element.current;

    return () => {
      cleanupRef.removeEventListener('mouseup', onClick);
    };
  }, [color, duration, effectName, element, size]);
};
