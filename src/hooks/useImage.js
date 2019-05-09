import { useState, useEffect } from 'react';

function useImage(imageElement) {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const image = imageElement.current;

    const setLoaded = () => setHeight(image.clientHeight);
    image.addEventListener('load', setLoaded);
    return () => {
      image.removeEventListener('load', setLoaded);
    };
  }, [imageElement, height]);
  return height;
}
export default useImage;
