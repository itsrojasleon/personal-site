import { useEffect, useReducer } from 'react';

enum ActionTypes {
  fetchInit,
  fetchSuccess,
  fetchFailure
}

interface DataFetch {
  data: [];
  isLoading: boolean;
  isError: string;
}

interface FetchResourcesAction {
  type:
    | ActionTypes.fetchSuccess
    | ActionTypes.fetchInit
    | ActionTypes.fetchFailure;
  payload?: DataFetch;
}

const dataFetchReducer = (state: any, action: FetchResourcesAction) => {
  switch (action.type) {
    case ActionTypes.fetchInit:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case ActionTypes.fetchSuccess:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      };
    case ActionTypes.fetchFailure:
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      throw new Error();
  }
};

export const useFetchResource = (resource: Function, param?: string) => {
  const initialState: DataFetch = { data: [], isLoading: true, isError: '' };
  const [state, dispatch] = useReducer(dataFetchReducer, initialState);

  useEffect(() => {
    (async function fetchResource() {
      try {
        dispatch({ type: ActionTypes.fetchInit });

        const value = await resource(param ? param : null);
        dispatch({ type: ActionTypes.fetchSuccess, payload: value });
      } catch (err) {
        dispatch({ type: ActionTypes.fetchFailure });
      }
    })();
  }, [resource, param]);

  return state;
};
