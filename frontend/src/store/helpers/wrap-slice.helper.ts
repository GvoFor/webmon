import { type StateCreator } from 'zustand';

const wrapSlice = <Store, K extends keyof Store, Slice extends Store[K]>(
  key: K,
  sliceCreator: StateCreator<Slice, [], [], Slice>,
): StateCreator<Store, [], [], Pick<Store, K>> => {
  return (set, get, api) => {
    const slice = sliceCreator(
      (fn) =>
        set((state) => {
          const sliceState =
            fn instanceof Function ? fn(state[key] as Slice) : fn;

          return {
            ...state,
            [key]: {
              ...state[key],
              ...sliceState,
            },
          } as Partial<Store>;
        }),
      () => get()[key] as Slice,
      {
        getInitialState: () => api.getInitialState()[key] as Slice,
        getState: () => api.getState()[key] as Slice,
        setState: (s) =>
          api.setState((ps) => {
            const sliceState = s instanceof Function ? s(ps[key] as Slice) : s;

            return {
              ...ps,
              [key]: {
                ...ps[key],
                ...sliceState,
              },
            } as Partial<Store>;
          }),
        subscribe: (listener) =>
          api.subscribe((s, ps) => listener(s[key] as Slice, ps[key] as Slice)),
      },
    );

    return { [key]: slice } as Pick<Store, K>;
  };
};

export { wrapSlice };
