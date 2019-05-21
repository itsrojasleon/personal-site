import { useEffect, useReducer } from 'react';

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      throw new Error();
  }
};

function useFetchResource(resource, param) {
  const initialState = { data: null, isLoading: true, isError: '' };
  const [state, dispatch] = useReducer(dataFetchReducer, initialState);

  useEffect(() => {
    (async function fetchResource() {
      try {
        dispatch({ type: 'FETCH_INIT' });

        const value = await resource(param ? param : null);
        dispatch({ type: 'FETCH_SUCCESS', payload: value });
      } catch (err) {
        dispatch({ type: 'FETCH_FAILURE' });
      }
    })();
  }, [resource, param]);

  return state;
}
export default useFetchResource;
