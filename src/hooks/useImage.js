import { useState, useEffect } from 'react';

function useImage(imageElement) {
  const [spans, setSpans] = useState(0);
  useEffect(() => {
    const image = imageElement.current;

    const setLoaded = () => {
      setSpans(Math.ceil(image.clientHeight / 10));
    };
    image.addEventListener('load', setLoaded);
    return () => {
      image.removeEventListener('load', setLoaded);
    };
  }, [imageElement, spans]);
  return spans;
}
export default useImage;
