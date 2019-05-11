import { useState, useEffect } from 'react';

function useImage(imageElement) {
  const initialState = () => Number(window.localStorage.getItem('spans')) || 0;
  const [spans, setSpans] = useState(initialState);
  useEffect(() => {
    const image = imageElement.current;

    const setLoaded = () => {
      setSpans(Math.ceil(image.clientHeight / 10));
    };
    image.addEventListener('load', setLoaded);
    window.localStorage.setItem('spans', spans);
    return () => {
      image.removeEventListener('load', setLoaded);
    };
  }, [imageElement, spans]);
  return spans;
}
export default useImage;
