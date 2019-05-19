import { useState, useEffect } from 'react';

function useFetchResource(resource, param) {
  const [data, setData] = useState();

  useEffect(() => {
    (async function fetchResource() {
      if (!param) {
        const value = await resource();
        setData(value);
      } else {
        const value = await resource(param);
        setData(value);
      }
    })();
  }, [resource, param]);
  return data;
}
export default useFetchResource;
