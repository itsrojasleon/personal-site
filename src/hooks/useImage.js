import { useState, useEffect } from 'react';

// I need to save "spans" in localStorage
// Before that, only works when the user visit /portfolio for first time
// After that "spans it's already in localStoarge"
// The value is available for the next time

function useImage(imageElement, i) {
  const initialState = () => window.localStorage.getItem(`spans-${i}`) || 0;
  const [spans, setSpans] = useState(initialState);
  useEffect(() => {
    const image = imageElement.current;

    const setLoaded = () => {
      setSpans(Math.ceil(image.clientHeight / 10));
    };
    image.addEventListener('load', setLoaded);
    window.localStorage.setItem(`spans-${i}`, spans);
    return () => {
      image.removeEventListener('load', setLoaded);
    };
  }, [imageElement, spans, i]);
  return spans;
}
export default useImage;
