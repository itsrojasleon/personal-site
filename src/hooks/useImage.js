import { useState, useEffect } from 'react';

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
