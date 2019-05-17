import { useState, useEffect } from 'react';

function useFetchResource(resource) {
  const [data, setData] = useState();

  useEffect(() => {
    (async function fetchResource() {
      const value = await resource();
      setData(value);
    })();
  }, [resource]);
  return data;
}
export default useFetchResource;
